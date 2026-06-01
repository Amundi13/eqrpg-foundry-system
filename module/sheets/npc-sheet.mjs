import { renderMonsterBuilder } from "../apps/monster-builder.mjs";

const { HandlebarsApplicationMixin } = foundry.applications.api;
const { ActorSheetV2 } = foundry.applications.sheets;

/**
 * NPC/Monster sheet for EverQuest RPG.
 * Three tabs: Stats (abilities + combat), Actions (weapons/spells), Notes (bio + loot)
 */
export class EQNPCSheet extends HandlebarsApplicationMixin(ActorSheetV2) {

  static DEFAULT_OPTIONS = {
    classes: ["eqrpg", "actor-sheet", "npc-sheet"],
    tag: "form",
    position: { width: 580, height: 560 },
    window: { resizable: true },
    form: { submitOnChange: true, closeOnSubmit: false },
    actions: {
      // Rolls
      rollAbility:    EQNPCSheet._onRollAbility,
      rollSave:       EQNPCSheet._onRollSave,
      rollInitiative: EQNPCSheet._onRollInitiative,
      rollAttack:     EQNPCSheet._onRollAttack,
      rollDamage:     EQNPCSheet._onRollDamage,
      rollStatblockAttack: EQNPCSheet._onRollStatblockAttack,
      rollStatblockDamage: EQNPCSheet._onRollStatblockDamage,
      castSpell:      EQNPCSheet._onCastSpell,
      rollSkill:      EQNPCSheet._onRollSkill,
      useSpecialAbility: EQNPCSheet._onUseSpecialAbility,
      // Items
      createItem:     EQNPCSheet._onCreateItem,
      editItem:       EQNPCSheet._onEditItem,
      deleteItem:     EQNPCSheet._onDeleteItem,
      openMonsterBuilder: EQNPCSheet._onOpenMonsterBuilder,
    },
  };

  static PARTS = {
    header:  { template: "systems/eqrpg/templates/actor/parts/npc-header.hbs" },
    tabs:    { template: "systems/eqrpg/templates/actor/parts/npc-tabs.hbs" },
    stats:   { template: "systems/eqrpg/templates/actor/parts/npc-stats.hbs" },
    actions: { template: "systems/eqrpg/templates/actor/parts/npc-actions.hbs" },
    notes:   { template: "systems/eqrpg/templates/actor/parts/npc-notes.hbs" },
  };

  static TABS = {
    sheet: {
      id: "sheet",
      group: "sheet",
      initial: "stats",
      tabs: [
        { id: "stats",   group: "sheet", label: "EQRPG.TabStats" },
        { id: "actions", group: "sheet", label: "EQRPG.TabActions" },
        { id: "notes",   group: "sheet", label: "EQRPG.TabNotes" },
      ],
    },
  };

  get title() {
    return this.actor.name || game.i18n.localize("EQRPG.SheetNPC");
  }

  // ---------------------------------------------------------------------------
  // Context
  // ---------------------------------------------------------------------------

  /** @override */
  async _prepareContext(options) {
    const context = await super._prepareContext(options);
    const system  = this.actor.system;
    const config  = CONFIG.EQRPG;

    context.system       = system;
    context.config       = config;
    context.isEditable   = this.isEditable;
    context.document     = this.actor;
    context.systemFields = this.actor.system.schema.fields;

    // Enrich biography
    // V13+: TextEditor moved to foundry.applications.ux.TextEditor; fall back for V12
    const TE = foundry.applications?.ux?.TextEditor ?? TextEditor;
    context.enrichedBiography = await TE.enrichHTML(system.biography ?? "", {
      async: true,
    });

    // Build tabs
    const activeTab = this.tabGroups?.sheet ?? "stats";
    const tabDefs = [
      { id: "stats",   label: "EQRPG.TabStats" },
      { id: "actions", label: "EQRPG.TabActions" },
      { id: "notes",   label: "EQRPG.TabNotes" },
    ];
    context.tabs = {};
    for (const def of tabDefs) {
      context.tabs[def.id] = {
        id:       def.id,
        group:    "sheet",
        label:    game.i18n.localize(def.label),
        active:   def.id === activeTab,
        cssClass: def.id === activeTab ? "active" : "",
      };
    }

    // Abilities — use config keys to avoid TypeDataModel non-enumerable issue
    context.abilities = {};
    for (const key of Object.keys(config.abilities)) {
      const ab = system.abilities[key];
      if (!ab) continue;
      context.abilities[key] = {
        value: ab.value,
        mod:   ab.mod,
        label: game.i18n.localize(config.abilities[key]),
        abbr:  game.i18n.localize(config.abilityAbbreviations[key]),
      };
    }

    // Alignment options
    context.alignmentOptions = Object.entries(config.alignments).map(([key, label]) => ({
      value:    key,
      label:    game.i18n.localize(label),
      selected: system.details.alignment === key,
    }));

    // Items grouped by purpose
    context.weapons = this.actor.items.filter(i => i.type === "weapon");
    context.spells  = this.actor.items.filter(i => i.type === "spell");
    context.skills  = this.actor.items.filter(i => i.type === "skill");
    context.loot    = this.actor.items.filter(i =>
      ["armor", "consumable", "equipment"].includes(i.type));
    context.statblockAttacks = this.actor.getNPCStatblockAttacks();
    context.specialAbilities = this.actor.getNPCSpecialAbilities();

    // Iterative attack array from BAB (same thresholds as character sheet)
    const bab = system.combat.bab ?? 0;
    const attackArray = [];
    if (bab >= 1)  attackArray.push(bab);
    if (bab >= 6)  attackArray.push(bab - 5);
    if (bab >= 11) attackArray.push(bab - 10);
    if (bab >= 16) attackArray.push(bab - 15);
    context.attackArray = attackArray;

    return context;
  }

  /** @override */
  async _preparePartContext(partId, context, options) {
    context = await super._preparePartContext(partId, context, options);
    context.partId = `${this.id}-${partId}`;
    if (context.tabs?.[partId]) context.tab = context.tabs[partId];
    return context;
  }

  // ---------------------------------------------------------------------------
  // Roll Handlers
  // ---------------------------------------------------------------------------

  static async _onRollAbility(event, target) {
    await this.actor.rollAbilityCheck(target.dataset.ability);
  }

  static async _onRollSave(event, target) {
    await this.actor.rollSave(target.dataset.save);
  }

  static async _onRollInitiative(event, target) {
    if (game.combat) {
      await this.actor.rollInitiative({ createCombatants: true, rerollInitiative: true });
    } else {
      await this.actor.rollInitiativeCheck();
    }
  }

  static async _onRollAttack(event, target) {
    const item = this.actor.items.get(target.closest("[data-item-id]")?.dataset.itemId);
    await item?.rollAttack();
  }

  static async _onRollDamage(event, target) {
    const item = this.actor.items.get(target.closest("[data-item-id]")?.dataset.itemId);
    await item?.rollDamage();
  }

  static async _onRollStatblockAttack(event, target) {
    await this.actor.rollNPCStatblockAttack(target.dataset.attackId);
  }

  static async _onRollStatblockDamage(event, target) {
    await this.actor.rollNPCStatblockDamage(target.dataset.attackId);
  }

  static async _onCastSpell(event, target) {
    const item = this.actor.items.get(target.closest("[data-item-id]")?.dataset.itemId);
    await item?.castSpell();
  }

  static async _onRollSkill(event, target) {
    const item = this.actor.items.get(target.closest("[data-item-id]")?.dataset.itemId);
    await item?.rollSkill();
  }

  static async _onUseSpecialAbility(event, target) {
    await this.actor.useNPCSpecialAbility(target.dataset.abilityId);
  }

  // ---------------------------------------------------------------------------
  // Item Handlers
  // ---------------------------------------------------------------------------

  static async _onCreateItem(event, target) {
    const type = target.dataset.type;
    await this.actor.createEmbeddedDocuments("Item", [{ name: `New ${type}`, type }]);
  }

  static async _onEditItem(event, target) {
    const item = this.actor.items.get(target.closest("[data-item-id]")?.dataset.itemId);
    item?.sheet.render(true);
  }

  static async _onDeleteItem(event, target) {
    const item = this.actor.items.get(target.closest("[data-item-id]")?.dataset.itemId);
    if (item) await item.delete();
  }

  static _onOpenMonsterBuilder(event) {
    event?.preventDefault?.();
    event?.stopPropagation?.();
    renderMonsterBuilder(this.actor);
  }
}
