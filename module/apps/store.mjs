import { submitCommerceRequest, commerceRequestStatus } from "../helpers/commerce-requests.mjs";
import {
  SAMPLE_ARMOR,
  SAMPLE_CONSUMABLES,
  SAMPLE_EQUIPMENT,
  SAMPLE_WEAPONS,
} from "../packs/sample-data.mjs";
import { STORE_PRESETS } from "../packs/store-presets.mjs";

import { coinsToCopper, copperToCoins, priceToCopper, pendingPurchase } from "../helpers/commerce.mjs";

const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;

const openStores = new Set();
export function refreshStores(actor) {
  for (const app of openStores) if(app.storeState.actorId===actor.id) app.render();
}

const STORE_TYPES = [
  { key: "all", label: "EQRPG.StoreAll" },
  { key: "weapon", label: "EQRPG.Weapons" },
  { key: "armor", label: "EQRPG.Armor" },
  { key: "equipment", label: "EQRPG.Equipment" },
  { key: "consumable", label: "EQRPG.Consumables" },
];

const STOCK = [
  ...SAMPLE_WEAPONS,
  ...SAMPLE_ARMOR,
  ...SAMPLE_EQUIPMENT,
  ...SAMPLE_CONSUMABLES,
].map((item, index) => ({
  ...foundry.utils.deepClone(item),
  _storeId: `${item.type}:${index}:${item.name}`,
}));

function formatCoins(copper = 0) {
  const coins = copperToCoins(copper);
  const parts = [];
  if (coins.platinum) parts.push(`${coins.platinum} ${game.i18n.localize("EQRPG.PlatinumAbbr")}`);
  if (coins.gold) parts.push(`${coins.gold} ${game.i18n.localize("EQRPG.GoldAbbr")}`);
  if (coins.silver) parts.push(`${coins.silver} ${game.i18n.localize("EQRPG.SilverAbbr")}`);
  if (coins.copper) parts.push(`${coins.copper} ${game.i18n.localize("EQRPG.CopperAbbr")}`);
  return parts.join(" ") || `0 ${game.i18n.localize("EQRPG.CopperAbbr")}`;
}

function searchableText(item) {
  return [
    item.name,
    item.type,
    item.system?.damageType,
    item.system?.type,
    item.system?.itemCategory,
    item.system?.consumableType,
    item.system?.proficiency,
    item.system?.combatClass,
  ].filter(Boolean).join(" ").toLowerCase();
}

function normalizeStoreKey(value) {
  return String(value ?? "").trim().toLowerCase();
}

function presetIncludesItem(preset, item) {
  const itemKeys = new Set((preset.items ?? []).map(normalizeStoreKey));
  if (itemKeys.size) {
    const byName = normalizeStoreKey(item.name);
    const byTypeName = normalizeStoreKey(`${item.type}::${item.name}`);
    return itemKeys.has(byName) || itemKeys.has(byTypeName);
  }
  return (preset.types ?? []).includes(item.type);
}

export function renderStore(actor = null, options = {}) {
  try {
    const app = new EQStore(actor, options);
    const rendered = app.render({ force: true });
    if (rendered?.catch) {
      rendered.catch((err) => {
        console.error("EQRPG | Failed to open store", err);
        ui.notifications?.error?.("EQRPG store failed to open. Check the console for details.");
      });
    }
    return app;
  } catch (err) {
    console.error("EQRPG | Failed to open store", err);
    ui.notifications?.error?.("EQRPG store failed to open. Check the console for details.");
    return null;
  }
}

export class EQStore extends HandlebarsApplicationMixin(ApplicationV2) {
  constructor(actor = null, options = {}) {
    const storeId = foundry.utils.randomID();
    const { store = "full", ...appOptions } = options;
    super(foundry.utils.mergeObject({
      id: `eqrpg-store-${storeId}`,
      window: { title: game.i18n.localize("EQRPG.Store") },
    }, appOptions));
    openStores.add(this);
    this.storeState = {
      actorId: actor?.id ?? game.user?.character?.id ?? "",
      store,
      type: "all",
      query: "",
    };
  }

  async close(options) { openStores.delete(this); return super.close(options); }

  static DEFAULT_OPTIONS = {
    classes: ["eqrpg", "eq-store"],
    tag: "form",
    window: {
      title: "Store",
      resizable: true,
    },
    position: { width: 860, height: 680 },
    form: { submitOnChange: true, closeOnSubmit: false },
    actions: {
      storeType: EQStore.#onStoreType,
      buyItem: EQStore.#onBuyItem,
      resumePurchase: EQStore.#onResumePurchase,
      cancelPurchase: EQStore.#onCancelPurchase,
    },
  };

  static PARTS = {
    store: { template: "systems/eqrpg/templates/apps/store.hbs" },
  };

  async _prepareContext() {
    const actor = game.actors.get(this.storeState.actorId);
    const ownedCharacters = Array.from(game.actors ?? [])
      .filter((candidate) => candidate.type === "character" && candidate.isOwner)
      .sort((a, b) => a.name.localeCompare(b.name));
    if ((!actor || actor.type !== "character" || !actor.isOwner) && ownedCharacters[0]) this.storeState.actorId = ownedCharacters[0].id;
    const buyer = game.actors.get(this.storeState.actorId);

    const query = this.storeState.query.trim().toLowerCase();
    const preset = STORE_PRESETS.find((entry) => entry.key === this.storeState.store) ?? STORE_PRESETS[0];
    const filteredStock = STOCK
      .filter((item) => presetIncludesItem(preset, item))
      .filter((item) => this.storeState.type === "all" || item.type === this.storeState.type)
      .filter((item) => !query || searchableText(item).includes(query))
      .sort((a, b) => {
        const typeSort = a.type.localeCompare(b.type);
        return typeSort || a.name.localeCompare(b.name);
      })
      .map((item) => {
        const priceCopper = priceToCopper(item.system?.price);
        return {
          id: item._storeId,
          name: item.name,
          img: item.img || "icons/svg/item-bag.svg",
          type: item.type,
          typeLabel: game.i18n.localize(`TYPES.Item.${item.type}`),
          priceCopper,
          priceLabel: formatCoins(priceCopper),
          detail: this.#itemDetail(item),
          stackable: ["equipment", "consumable"].includes(item.type),
        };
      });

    return {
      actorId: this.storeState.actorId,
      actors: ownedCharacters.map((candidate) => ({
        id: candidate.id,
        name: candidate.name,
        selected: candidate.id === this.storeState.actorId,
      })),
      type: this.storeState.type,
      store: this.storeState.store,
      stores: STORE_PRESETS.map((entry) => ({
        key: entry.key,
        label: game.i18n.localize(entry.label),
        selected: entry.key === this.storeState.store,
      })),
      types: STORE_TYPES.map((entry) => ({
        key: entry.key,
        label: game.i18n.localize(entry.label),
        active: entry.key === this.storeState.type,
      })),
      query: this.storeState.query,
      stock: filteredStock,
      buyer,
      wealthLabel: buyer ? formatCoins(coinsToCopper(buyer.system.wealth)) : "",
      requestStatus: commerceRequestStatus(buyer),
      pending: pendingPurchase(buyer),
      canRecover: !!buyer?.isOwner,
      canBuy: buyer?.type === "character" && buyer.isOwner && !pendingPurchase(buyer) && !["queued","processing"].includes(commerceRequestStatus(buyer)?.state),
    };
  }

  _onChangeForm(_formConfig, event) {
    if (event.target.name === "store-actor") {
      this.storeState.actorId = event.target.value;
      this.render();
    }
    if (event.target.name === "store-preset") {
      this.storeState.store = event.target.value;
      this.storeState.type = "all";
      this.render();
    }
    if (event.target.name === "store-query") {
      this.storeState.query = event.target.value;
      this.render();
    }
  }

  #itemDetail(item) {
    if (item.type === "weapon") {
      return `${item.system.damage ?? ""} ${item.system.damageType ?? ""}`.trim();
    }
    if (item.type === "armor") {
      return `AC +${item.system.acBonus ?? 0}`;
    }
    if (item.type === "consumable") {
      return item.system.consumableType ?? "";
    }
    return item.system.itemCategory ?? "";
  }

  #getStockItem(storeId) {
    return STOCK.find((item) => item._storeId === storeId) ?? null;
  }

  static #onStoreType(event, target) {
    this.storeState.type = target.dataset.type ?? "all";
    this.render();
  }

  static async #onBuyItem(event, target) {
    const row = target.closest("[data-store-id]");
    const stockItem = this.#getStockItem(row?.dataset.storeId);
    const actor = game.actors.get(this.storeState.actorId);
    if (!stockItem || !actor) {
      ui.notifications.warn(game.i18n.localize("EQRPG.StoreNoBuyer"));
      return;
    }

    const quantityInput = row.querySelector("[name='store-quantity']");
    const quantity = Math.max(1, Math.min(99, Math.floor(Number(quantityInput?.value) || 1)));
    try {
      await submitCommerceRequest(actor,"purchase",stockItem.flags.eqrpg.sourceId,quantity);
      ui.notifications.info("Store request sent to the active GM.");
    } catch (error) {
      ui.notifications.error(error.message);
    } finally {
      this.render();
    }
  }

  static async #onResumePurchase() {
    try {
      await submitCommerceRequest(game.actors.get(this.storeState.actorId),"resume");
      ui.notifications.info("Recovery request sent to the active GM.");
    } catch (error) { ui.notifications.error(error.message); }
    finally { this.render(); }
  }

  static async #onCancelPurchase() {
    try {
      await submitCommerceRequest(game.actors.get(this.storeState.actorId),"cancel");
      ui.notifications.info("Cancellation request sent to the active GM.");
    } catch (error) { ui.notifications.error(error.message); }
    finally { this.render(); }
  }
}
