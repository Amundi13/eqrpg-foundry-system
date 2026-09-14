import {applyChatHP,reviewChatHP} from './helpers/chat-hp.mjs';
import {tickCombatRound} from './helpers/combat-ticks.mjs';
import {applyChatStatus,reviewChatStatus} from './helpers/chat-status.mjs';
import {PACK_SOURCES} from "./packs/sources.mjs";
import {applyChatSpellEffect} from "./helpers/chat-effects.mjs";
import {reconcileExpiredSpellEffects} from "./helpers/effect-expiry.mjs";
import { handleCommerceRequest, acknowledgeInterruptedCommerceRequest } from "./helpers/commerce-requests.mjs";
import { previewActorMigrations, applyActorMigrations } from "./helpers/actor-migrations.mjs";
// Document subclasses
import { EQActor } from "./documents/actor.mjs";
import { EQItem } from "./documents/item.mjs";

// Data models - Actors
import { CharacterData } from "./data-models/character.mjs";
import { NPCData } from "./data-models/npc.mjs";
import { PetData } from "./data-models/pet.mjs";

// Data models - Items
import { WeaponData } from "./data-models/weapon.mjs";
import { ArmorData } from "./data-models/armor.mjs";
import { SpellData } from "./data-models/spell.mjs";
import { SkillData } from "./data-models/skill.mjs";
import { ConsumableData } from "./data-models/consumable.mjs";
import { EquipmentData } from "./data-models/equipment.mjs";
import { FactionData } from "./data-models/faction.mjs";
import { FeatData } from "./data-models/feat.mjs";

// Sheet classes
import { EQCharacterSheet } from "./sheets/character-sheet.mjs";
import { EQNPCSheet } from "./sheets/npc-sheet.mjs";
import { EQPetSheet } from "./sheets/pet-sheet.mjs";
import { EQItemSheet } from "./sheets/item-sheet.mjs";

// Applications
import { CharacterWizard } from "./apps/character-wizard.mjs";
import { EQStore, renderStore, refreshStores } from "./apps/store.mjs";
import { MonsterBuilder, renderMonsterBuilder } from "./apps/monster-builder.mjs";

// Config
import { EQRPG } from "./helpers/config.mjs";
import { isPrimaryGM } from "./helpers/gm-authority.mjs";
import { planPackUpgrade, applyPackUpgrade, resolvePackConflict } from "./packs/pack-upgrades.mjs";

// Compendium sample data
import {
  SAMPLE_SPELLS, SAMPLE_FEATS, SAMPLE_SKILLS,
  SAMPLE_WEAPONS, SAMPLE_ARMOR, SAMPLE_EQUIPMENT, SAMPLE_CONSUMABLES, SAMPLE_MONSTERS,
}
  from "./packs/sample-data.mjs";
import { PHB_JOURNALS } from "./packs/phb-data.mjs";

/* ========================================================================== */
/*  Initialization                                                            */
/* ========================================================================== */

// Only newly created blank characters receive a wizard eligibility marker.
// Importing an established character never enables the reset workflow.
Hooks.on("preCreateActor", (actor, data) => {
  if (actor.type !== "character") return;
  const blank = !data.system?.details?.class && !data.system?.details?.race
    && !(data.system?.resources?.xp > 0) && !(data.system?.details?.level > 1)
    && !(data.items?.length) && !data.flags?.eqrpg?.creationCompleted;
  actor.updateSource({"flags.eqrpg.creationEligible":blank});
});

Hooks.once("init", () => {
  // Retain expired documents so their remaining HP pools can be reconciled.
  // V14's update action persists duration.expired rather than deleting effects.
  if (Number(game.release?.generation) >= 14 && CONFIG.ActiveEffect) CONFIG.ActiveEffect.expiryAction = "update";
  console.log("eqrpg | Initializing EverQuest Role-Playing Game System");

  // Register Handlebars helpers
  Handlebars.registerHelper("gte", (a, b) => a >= b);
  Handlebars.registerHelper("lt",  (a, b) => a < b);
  Handlebars.registerHelper("eq",  (a, b) => a === b);
  Handlebars.registerHelper("ne",  (a, b) => a !== b);
  Handlebars.registerHelper("lte", (a, b) => a <= b);
  Handlebars.registerHelper("gt",  (a, b) => a > b);
  // Logical helpers — used in templates for compound conditionals
  Handlebars.registerHelper("or",  (...args) => { const opts = args.pop(); return args.some(Boolean); });
  Handlebars.registerHelper("and", (...args) => { const opts = args.pop(); return args.every(Boolean); });
  Handlebars.registerHelper("not", (a) => !a);
  // Faction standing label + CSS class from a numeric value
  Handlebars.registerHelper("factionLabel", (value) => {
    const tiers = CONFIG.EQRPG?.factionStandings ?? [];
    for (const tier of tiers) {
      if (Number(value) >= tier.min) return game.i18n.localize(tier.label);
    }
    return game.i18n.localize("EQRPG.FactionKOS");
  });
  Handlebars.registerHelper("factionClass", (value) => {
    const tiers = CONFIG.EQRPG?.factionStandings ?? [];
    for (const tier of tiers) {
      if (Number(value) >= tier.min) return tier.css;
    }
    return "faction-kos";
  });

  Handlebars.registerHelper("math", (a, op, b) => {
    a = Number(a) || 0;
    b = Number(b) || 0;
    if (op === "+") return a + b;
    if (op === "-") return a - b;
    if (op === "*") return a * b;
    if (op === "/") return b !== 0 ? a / b : 0;
    return 0;
  });

  // Expose config globally
  game.eqrpg = game.eqrpg ?? {};
  game.eqrpg.reviewChatHP = reviewChatHP;
  game.eqrpg.reviewChatStatus = reviewChatStatus;
  game.eqrpg.config = EQRPG;
  game.eqrpg.acknowledgeInterruptedCommerceRequest = acknowledgeInterruptedCommerceRequest;
  game.eqrpg.previewActorMigrations = previewActorMigrations;
  game.eqrpg.applyActorMigrations = applyActorMigrations;
  game.eqrpg.CharacterWizard = CharacterWizard;
  game.eqrpg.EQStore = EQStore;
  game.eqrpg.openStore = (actor = game.user?.character ?? globalThis.canvas?.tokens?.controlled?.[0]?.actor ?? null, options = {}) =>
    renderStore(actor, options);
  game.eqrpg.MonsterBuilder = MonsterBuilder;
  game.eqrpg.openMonsterBuilder = (actor = null, options = {}) => renderMonsterBuilder(actor, options);
  CONFIG.EQRPG = EQRPG;

  // Register document classes
  CONFIG.Actor.documentClass = EQActor;
  CONFIG.Item.documentClass = EQItem;

  // Register data models
  CONFIG.Actor.dataModels = {
    character: CharacterData,
    npc: NPCData,
    pet: PetData,
  };
  CONFIG.Item.dataModels = {
    weapon: WeaponData,
    armor: ArmorData,
    spell: SpellData,
    skill: SkillData,
    consumable: ConsumableData,
    equipment: EquipmentData,
    faction: FactionData,
    feat: FeatData,
  };

  // Register trackable attributes for token bars
  CONFIG.Actor.trackableAttributes = {
    character: {
      bar: ["resources.hp", "resources.mana"],
      value: ["details.level", "resources.xp"],
    },
    npc: {
      bar: ["resources.hp", "resources.mana"],
      value: [],
    },
    pet: {
      bar: ["resources.hp", "resources.mana"],
      value: [],
    },
  };

  // Register V14 document sheets through the ApplicationV2 sheet registry.
  const { DocumentSheetConfig } = foundry.applications.apps;
  DocumentSheetConfig.registerSheet(foundry.documents.Actor, "eqrpg", EQCharacterSheet, {
    types: ["character"],
    makeDefault: true,
    label: "EQRPG.SheetCharacter",
  });
  DocumentSheetConfig.registerSheet(foundry.documents.Actor, "eqrpg", EQNPCSheet, {
    types: ["npc"],
    makeDefault: true,
    label: "EQRPG.SheetNPC",
  });
  DocumentSheetConfig.registerSheet(foundry.documents.Actor, "eqrpg", EQPetSheet, {
    types: ["pet"],
    makeDefault: true,
    label: "EQRPG.SheetPet",
  });

  // Register item sheets
  DocumentSheetConfig.registerSheet(foundry.documents.Item, "eqrpg", EQItemSheet, {
    types: ["weapon", "armor", "spell", "skill", "consumable", "equipment", "faction", "feat"],
    makeDefault: true,
    label: "EQRPG.SheetItem",
  });
});

Hooks.once("ready", () => {
  console.log("eqrpg | EverQuest RPG System Ready");
});

Hooks.on("renderActorDirectory", (_app, html) => {
  const root = html instanceof HTMLElement ? html : html?.[0];
  if (!root || root.querySelector(".eq-monster-builder-directory-btn")) return;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "eq-monster-builder-directory-btn";
  button.textContent = game.i18n.localize("EQRPG.MonsterBuilder");
  button.addEventListener("click", (event) => {
    event.preventDefault();
    renderMonsterBuilder();
  });

  const target = root.querySelector(".directory-footer")
    ?? root.querySelector(".directory-header")
    ?? root.querySelector(".header-actions")
    ?? root;
  target.append(button);
});

async function _ensureCharacterTokenLink(tokenDoc) {
  const actor = tokenDoc?.actor ?? game.actors.get(tokenDoc?.actorId);
  if (!tokenDoc || !actor || !["character", "pet"].includes(actor.type)) return;
  if (tokenDoc.actorLink) return;
  try {
    await tokenDoc.update({ actorLink: true });
  } catch (err) {
    console.warn("eqrpg | Failed to relink character token", tokenDoc?.name, err);
  }
}

async function _toggleStatusEffect(doc, statusId, options = {}) {
  const actor = doc?.actor ?? doc;
  if (actor?.toggleStatusEffect && statusId) {
    await actor.toggleStatusEffect(statusId, options);
    return true;
  }

  if (doc?.toggleActiveEffect && statusId) {
    const status = CONFIG.statusEffects?.find((entry) => entry.id === statusId) ?? { id: statusId };
    await doc.toggleActiveEffect(status, options);
    return true;
  }

  return false;
}

Hooks.once("ready", async () => {
  if (!isPrimaryGM()) return;
  for (const scene of game.scenes ?? []) {
    const updates = [];
    for (const token of scene.tokens ?? []) {
      const actor = token.actor ?? game.actors.get(token.actorId);
      if (!actor || !["character", "pet"].includes(actor.type) || token.actorLink) continue;
      updates.push({ _id: token.id, actorLink: true });
    }
    if (updates.length) {
      try {
        await scene.updateEmbeddedDocuments("Token", updates);
        console.log(`eqrpg | Relinked ${updates.length} character token(s) in scene ${scene.name}`);
      } catch (err) {
        console.warn(`eqrpg | Failed relinking character tokens in scene ${scene.name}`, err);
      }
    }
  }
});

// ---------------------------------------------------------------------------
// Combat: Chat message buttons — apply damage or healing to targeted tokens
// ---------------------------------------------------------------------------
// V13+ uses renderChatMessageHTML with a native HTMLElement.
function _onRenderChatMessage(message, html) {
  const root = (html instanceof HTMLElement) ? html : (html?.[0] ?? html);
  if (!root?.querySelectorAll) return;

  const resolveTargetDoc = async (uuid) => {
    if (!uuid) return null;
    try {
      return await foundry.utils.fromUuid(uuid);
    } catch (_err) {
      return null;
    }
  };

  // One receipt per actor/panel: full, half and double are alternatives.
  const hpPanels=[...root.querySelectorAll('.eq-apply-panel')];
  root.querySelectorAll('[data-apply-damage], [data-apply-heal]').forEach(btn=>{
    btn.addEventListener('click',async()=>{
      btn.disabled=true;
      try {
        const kind=btn.dataset.applyDamage!==undefined?'damage':'heal';
        const amount=Number(kind==='damage'?btn.dataset.applyDamage:btn.dataset.applyHeal);
        const uuid=kind==='damage'?btn.dataset.applyDamageUuid:btn.dataset.applyHealUuid;
        const panel=Math.max(0,hpPanels.indexOf(btn.closest('.eq-apply-panel')));
        const actors=new Map();
        if(uuid) {
          const doc=await resolveTargetDoc(uuid);const actor=doc?.actor??doc;
          if(actor?.system?.resources?.hp) actors.set(actor.uuid,actor);
        } else for(const token of game.user?.targets??[]) {
          if(token.actor) actors.set(token.actor.uuid,token.actor);
        }
        if(!actors.size) {ui.notifications.warn(game.i18n.localize('EQRPG.NoTargets'));return;}
        let applied=0,replayed=0;
        for(const actor of actors.values()) {
          try {
            const result=await applyChatHP(actor,message.id,panel,kind,amount);
            if(result.replayed)replayed++;else applied++;
          } catch(error) {ui.notifications.error(`${actor.name}: ${error.message}`);}
        }
        ui.notifications.info(`${kind==='damage'?'Damage':'Healing'} applied to ${applied} actor(s); ${replayed} already handled.`);
      } catch(error) {ui.notifications.error(error.message);}
      finally {btn.disabled=false;}
    });
  });

  // Inline "Roll Damage" button on attack cards (data-roll-damage-item = embedded item ID)
  root.querySelectorAll("[data-roll-damage-item]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const actorId  = btn.dataset.actorId;
      const itemId   = btn.dataset.rollDamageItem;
      const critMult = parseInt(btn.dataset.critMult ?? "1") || 1;
      const actor    = game.actors.get(actorId);
      if (!actor) { ui.notifications.warn(game.i18n.localize("EQRPG.ActorNotFound")); return; }
      const item = actor.items.get(itemId);
      if (!item)  { ui.notifications.warn(game.i18n.localize("EQRPG.ItemNotFound"));  return; }
      await item.rollDamage({ critMult });
    });
  });

  // Inline combat maneuver buttons on attack cards
  root.querySelectorAll("[data-roll-maneuver-item]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const actorId  = btn.dataset.actorId;
      const itemId   = btn.dataset.rollManeuverItem;
      const maneuver = btn.dataset.maneuver ?? "trip";
      const actor    = game.actors.get(actorId);
      if (!actor) { ui.notifications.warn(game.i18n.localize("EQRPG.ActorNotFound")); return; }
      const item = actor.items.get(itemId);
      if (!item)  { ui.notifications.warn(game.i18n.localize("EQRPG.ItemNotFound"));  return; }
      await item.rollCombatManeuver(maneuver);
    });
  });

  // Inline "Roll Damage" button on unarmed strike cards (data-roll-damage-formula)
  root.querySelectorAll("[data-roll-damage-formula]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const actorId  = btn.dataset.actorId;
      const formula  = decodeURIComponent(btn.dataset.rollDamageFormula ?? "1d4");
      const critMult = parseInt(btn.dataset.critMult ?? "1") || 1;
      const actor    = game.actors.get(actorId);
      if (!actor) { ui.notifications.warn(game.i18n.localize("EQRPG.ActorNotFound")); return; }

      const fullFormula = critMult > 1 ? `(${formula}) * ${critMult}` : formula;
      const roll = await new Roll(fullFormula, actor.getRollData()).evaluate();

      const header = `<div class="eq-chat-card eq-dmg-card">`
        + `<div class="eq-card-header">`
        + `<img src="${actor.img}" class="eq-card-portrait" />`
        + `<div class="eq-card-title">`
        + `<span class="eq-card-actor">${actor.name}</span>`
        + `<span class="eq-card-action">${game.i18n.localize("EQRPG.Damage")}${critMult > 1 ? ` <span class="eq-crit eq-badge">✦ CRIT ×${critMult}</span>` : ""}</span>`
        + `</div></div></div>`;

      await roll.toMessage({
        speaker:  ChatMessage.getSpeaker({ actor }),
        flavor:   header,
        rollMode: game.settings.get("core", "rollMode"),
      });
      // Re-use the apply-panel HTML directly
      const half   = Math.floor(roll.total / 2);
      const double = roll.total * 2;
      const panel  = `<div class="eq-apply-panel eq-dmg-panel">`
        + `<span class="eq-apply-label">${game.i18n.localize("EQRPG.ApplyTo")}:</span>`
        + `<div class="eq-apply-btns">`
        + `<button class="eq-apply-btn eq-apply-full" data-apply-damage="${roll.total}" title="${game.i18n.localize("EQRPG.ApplyFull")}">⚔ ${roll.total}</button>`
        + `<button class="eq-apply-btn eq-apply-half" data-apply-damage="${half}" title="${game.i18n.localize("EQRPG.ApplyHalf")}">½ ${half}</button>`
        + `<button class="eq-apply-btn eq-apply-double" data-apply-damage="${double}" title="${game.i18n.localize("EQRPG.ApplyDouble")}">×2 ${double}</button>`
        + `</div></div>`;
      await ChatMessage.create({
        speaker:  ChatMessage.getSpeaker({ actor }),
        content:  panel,
        rollMode: game.settings.get("core", "rollMode"),
      });
    });
  });

  root.querySelectorAll("[data-toggle-status-uuid]").forEach(btn => {
    btn.addEventListener("click", async () => {
      btn.disabled = true;
      try {
      const uuid = btn.dataset.toggleStatusUuid;
      const statusId = btn.dataset.statusId;
      const doc = await resolveTargetDoc(uuid);
      const actor = doc?.actor ?? doc;
      if (!actor) {
        ui.notifications.warn(game.i18n.localize("EQRPG.ActorNotFound"));
        return;
      }
      const result = await applyChatStatus(actor,message.id,statusId);
      ui.notifications.info(result.replayed ? "This condition action was already handled." : `${statusId} is present on ${actor.name}.`);
      } catch(error) {ui.notifications.error(error.message);}
      finally {btn.disabled = false;}
    });
  });

  root.querySelectorAll("[data-apply-effect-uuid]").forEach((btn,index) => {
    btn.addEventListener("click", async () => {
      btn.disabled = true;
      try {
      const uuid = btn.dataset.applyEffectUuid;
      const rawConfig = btn.dataset.effectConfig ?? "";
      const doc = await resolveTargetDoc(uuid);
      const actor = doc?.actor ?? doc;
      if (!actor?.toggleSpellEffect || !rawConfig) {
        ui.notifications.warn(game.i18n.localize("EQRPG.ActorNotFound"));
        return;
      }
      const config = JSON.parse(decodeURIComponent(rawConfig));
      const result = await applyChatSpellEffect(actor,message.id,index,config);
      ui.notifications.info(result.replayed ? "This spell-effect action was already handled." : `${config.label ?? "Spell effect"} is present on ${actor.name}.`);
      } catch(error) {ui.notifications.error(error.message);}
      finally {btn.disabled = false;}
    });
  });

  root.querySelectorAll("[data-disarm-actor-uuid]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const uuid = btn.dataset.disarmActorUuid;
      const doc = await resolveTargetDoc(uuid);
      const actor = doc?.actor ?? doc;
      if (!actor?.disarmPrimaryWeapon) {
        ui.notifications.warn(game.i18n.localize("EQRPG.ActorNotFound"));
        return;
      }
      const weapon = await actor.disarmPrimaryWeapon();
      if (!weapon) {
        ui.notifications.info(game.i18n.format("EQRPG.NoWeaponToDisarm", { name: actor.name }));
        return;
      }
      ui.notifications.info(
        game.i18n.format("EQRPG.DisarmApplied", { target: actor.name, weapon: weapon.name })
      );
    });
  });
}
Hooks.on("renderChatMessageHTML", _onRenderChatMessage);

// ---------------------------------------------------------------------------
// Combat: Update token status effects from HP thresholds
// Characters: unconscious at -1 to -9, dead at -10 or below
// NPCs: dead at 0 or below
// ---------------------------------------------------------------------------
Hooks.on("updateActor", (actor, changes, _options, userId) => {
  refreshStores(actor);
  handleCommerceRequest(actor,changes,userId).catch(error=>{
    console.error("EQRPG | Store request needs review",error);
    ui.notifications.error(error.message);
  });
});

Hooks.on("updateActor", async (actor, changes, _options, _userId) => {
  // One connected GM manages automatic token status effects.
  if (!isPrimaryGM()) return;
  const newHP = foundry.utils.getProperty(changes, "system.resources.hp.value");
  if (newHP === undefined) return;

  const isCharacter = actor.type === "character";
  const isDead = isCharacter ? newHP <= -10 : newHP <= 0;
  const isUnconscious = isCharacter && newHP < 0 && newHP > -10;
  // getActiveTokens(linked=false, document=true) returns TokenDocuments
  const tokenDocs = actor.getActiveTokens(false, true);
  for (const tokenDoc of tokenDocs) {
    try {
      const tokenActor = tokenDoc.actor ?? actor;
      const hasDead = tokenActor.statuses?.has("dead")
                 ?? tokenDoc.hasStatusEffect?.("dead")
                 ?? false;
      const hasUnconscious = tokenActor.statuses?.has("unconscious")
                 ?? tokenDoc.hasStatusEffect?.("unconscious")
                 ?? false;
      if (isDead !== hasDead) {
        await _toggleStatusEffect(tokenDoc, "dead", { active: isDead, overlay: isDead });
      }
      if (isUnconscious !== hasUnconscious) {
        await _toggleStatusEffect(tokenDoc, "unconscious", { active: isUnconscious, overlay: false });
      }
    } catch (_e) {
      // Status-effect API varies between Foundry versions — fail silently
    }
  }
});

// ---------------------------------------------------------------------------
// Combat: tick per-turn effects at the start of each combatant's turn
// ---------------------------------------------------------------------------
Hooks.on("updateCombat", async (combat, updateData, options, userId) => {
  // Only process when the turn advances; only the GM updates actor data
  if (!("turn" in updateData) && !("round" in updateData)) return;
  if (!isPrimaryGM()) return;

  const combatant = combat.combatant;
  const actor = combatant?.actor;
  if (!actor) return;
  await reconcileExpiredSpellEffects(actor);
  await actor.normalizeSpellEffects?.();
  if (actor.type !== "character") return;

  // Tick spell cooldowns and combat-only mana effects. Racial HP regeneration is hourly, not per round.
  try {await tickCombatRound(actor,combat);}
  catch(error) {ui.notifications.error(`${actor.name}: ${error.message}`);}
});

// V14 reports native expiry on duration.expired. Unknown/conditional durations
// stay under GM control. Include unlinked token actors when time advances.
Hooks.on("updateActiveEffect", (effect) => {
  if(effect.parent?.effects && isPrimaryGM()) {
    reconcileExpiredSpellEffects(effect.parent).catch(error=>ui.notifications.error(error.message));
  }
});
async function reconcileWorldSpellExpiry() {
  if(!isPrimaryGM()) return;
  const actors=new Map();
  for(const actor of game.actors??[]) actors.set(actor.uuid,actor);
  for(const scene of game.scenes??[]) for(const token of scene.tokens??[]) {
    if(token.actor) actors.set(token.actor.uuid,token.actor);
  }
  for(const actor of actors.values()) {
    try {await reconcileExpiredSpellEffects(actor);}
    catch(error) {ui.notifications.error(error.message);}
  }
}
Hooks.on("updateWorldTime", reconcileWorldSpellExpiry);
Hooks.once("ready", reconcileWorldSpellExpiry);

// ---------------------------------------------------------------------------
// Token HUD: inject HP / Mana text strip + attack array below the bar inputs
// ---------------------------------------------------------------------------
Hooks.on("renderTokenHUD", (tokenHUD, html) => {
  const actor = tokenHUD.object?.actor;
  if (!actor) return;

  const root = (html instanceof HTMLElement) ? html : (html?.[0] ?? html);
  if (!root?.querySelector) return;

  const hp  = actor.system?.resources?.hp;
  const mp  = actor.system?.resources?.mana;
  const sys = actor.system?.combat;
  if (!hp) return;
  const tempHP = Math.max(0, Number(hp.temp) || 0);

  // Attack array: characters have attackArray, NPCs just have bab
  const atkArr = sys?.attackArray?.length
    ? sys.attackArray
    : (sys?.bab != null ? [sys.bab] : null);

  // HP/Mana percentage fills
  const hpPct  = hp.max  > 0 ? Math.max(0, Math.min(100, (hp.value  / hp.max)  * 100)) : 0;
  const hasMp  = (mp?.max ?? 0) > 0;
  const mpPct  = hasMp   ? Math.max(0, Math.min(100, ((mp.value ?? 0) / mp.max) * 100)) : 0;

  const atkHtml = atkArr?.length
    ? `<div class="eq-hud-atk">`
        + atkArr.map(b => (b >= 0 ? `+${b}` : `${b}`)).join(`<span class="eq-hud-atk-sep">/</span>`)
        + `</div>`
    : "";

  const strip = document.createElement("div");
  strip.className = "eq-hud-strip";
  strip.innerHTML =
    `<div class="eq-hud-bar hp-bar">`
    + `<div class="eq-hud-fill" style="width:${hpPct}%"></div>`
    + `<span class="eq-hud-label">`
    + `<span class="eq-hud-val hp-val">${hp.value}</span>`
    + (tempHP > 0 ? `<span class="eq-hud-temp">+${tempHP}</span>` : "")
    + `<span class="eq-hud-sep">/</span>`
    + `<span class="eq-hud-max">${hp.max}</span>`
    + `</span>`
    + `</div>`
    + (hasMp
      ? `<div class="eq-hud-bar mp-bar">`
          + `<div class="eq-hud-fill" style="width:${mpPct}%"></div>`
          + `<span class="eq-hud-label">`
          + `<span class="eq-hud-val mp-val">${mp.value}</span>`
          + `<span class="eq-hud-sep">/</span>`
          + `<span class="eq-hud-max">${mp.max}</span>`
          + `</span>`
          + `</div>`
      : "")
    + atkHtml;

  // Prefer the middle column; fall back to root
  const target = root.querySelector(".col.middle") ?? root;
  target.appendChild(strip);
});

// ---------------------------------------------------------------------------
// Combat Tracker: append attack array badge next to each combatant's initiative
// ---------------------------------------------------------------------------
Hooks.on("renderCombatTracker", (_tracker, html) => {
  const root = (html instanceof HTMLElement) ? html : (html?.[0] ?? html);
  if (!root?.querySelectorAll) return;

  const combat = game.combat;
  if (!combat) return;

  // Foundry V12 uses data-combatant-id; V13 uses data-id on <li>
  root.querySelectorAll(".combatant").forEach(el => {
    const cid = el.dataset.combatantId ?? el.dataset.id;
    if (!cid) return;

    const combatant = combat.combatants.get(cid);
    const actor     = combatant?.actor;
    if (!actor) return;

    // Guard against double-injection on re-render
    if (el.querySelector(".eq-ct-atk")) return;

    const sys    = actor.system?.combat;
    const atkArr = sys?.attackArray?.length
      ? sys.attackArray
      : (sys?.bab != null ? [sys.bab] : null);
    if (!atkArr?.length) return;

    const atkText = atkArr.map(b => (b >= 0 ? `+${b}` : `${b}`)).join("/");

    // Slot the badge right after the initiative score element
    const initEl = el.querySelector(".initiative");
    if (!initEl) return;

    const badge = document.createElement("span");
    badge.className = "eq-ct-atk";
    badge.title     = game.i18n.localize("EQRPG.AttackArray");
    badge.textContent = atkText;
    initEl.insertAdjacentElement("afterend", badge);
  });
});

// ---------------------------------------------------------------------------
// Character Wizard: auto-open on new character creation
// ---------------------------------------------------------------------------
Hooks.on("createActor", async (actor, _options, userId) => {
  if (!["character", "pet"].includes(actor.type)) return;
  if (game.userId !== userId) return;
  await actor.update({ "prototypeToken.actorLink": true }).catch(() => {});
  if (actor.type === "pet") return;
  const blank = !actor.system.details?.class && !actor.system.details?.race
    && !(actor.system.resources?.xp > 0) && !(actor.system.details?.level > 1)
    && !(actor.items?.size) && !actor.flags?.eqrpg?.creationCompleted
    && !actor.flags?.eqrpg?.creationStarted;
  if (blank && actor.flags?.eqrpg?.creationEligible !== true) {
    await actor.update({ "flags.eqrpg.creationEligible": true });
  }
  // Short delay so the default sheet can open first, then the wizard appears on top
  setTimeout(() => new CharacterWizard(actor).render({ force: true }), 250);
});

Hooks.on("preCreateToken", (tokenDoc, data, options, userId) => {
  const actor = tokenDoc.actor ?? game.actors.get(data.actorId ?? tokenDoc.actorId);
  if (!actor || !["character", "pet"].includes(actor.type)) return;
  if (data.actorLink === true) return;
  tokenDoc.updateSource({ actorLink: true });
});

// Expose wizard globally so the sheet header button can call it
game.eqrpg = game.eqrpg ?? {};
game.eqrpg.CharacterWizard = CharacterWizard;
game.eqrpg.EQStore = EQStore;
game.eqrpg.openStore = (actor = game.user?.character ?? globalThis.canvas?.tokens?.controlled?.[0]?.actor ?? null, options = {}) =>
  renderStore(actor, options);
game.eqrpg.MonsterBuilder = MonsterBuilder;
game.eqrpg.openMonsterBuilder = (actor = null, options = {}) => renderMonsterBuilder(actor, options);

// ---------------------------------------------------------------------------
// Compendium: Auto-populate packs on first launch (GM only)
// ---------------------------------------------------------------------------



async function previewPackUpgrades(packIds = [...PACK_SOURCES.keys()]) {
  if (!game.user?.isGM) throw new Error("GM only.");
  const plans = [];
  for (const packId of packIds) {
    const pack = game.packs.get(packId);
    const sources = PACK_SOURCES.get(packId);
    if (!pack || !sources) throw new Error(`Unknown system pack: ${packId}`);
    plans.push(planPackUpgrade(packId, sources, await pack.getDocuments()));
  }
  return plans;
}

async function applyPackUpgrades(plans) {
  if (!isPrimaryGM()) throw new Error("Apply pack upgrades from the first connected GM (sorted by user ID), to avoid competing writers.");
  const results = [];
  try {
    for (const plan of plans) {
      if (!PACK_SOURCES.has(plan.packId)) throw new Error(`Unknown system pack: ${plan.packId}`);
      results.push({packId:plan.packId, ...await applyPackUpgrade(game.packs.get(plan.packId),plan)});
    }
    const conflicts = results.reduce((sum,result)=>sum+result.conflicts,0);
    ui.notifications.info(`Pack upgrade finished: ${results.reduce((sum,result)=>sum+result.created,0)} created, ${results.reduce((sum,result)=>sum+result.updated,0)} updated, ${conflicts} conflicts left unchanged.`);
    return results;
  } catch (error) {
    console.error("EQRPG | Pack upgrade stopped; review a fresh preview before retrying.", {error,completedPacks:results,partialPack:error.upgradeProgress});
    ui.notifications.error("Pack upgrade stopped. Completed changes were retained; review the console and generate a fresh preview before retrying.");
    throw error;
  }
}

Hooks.once("ready", async () => {
  if (!game.user?.isGM) return;
  game.eqrpg.previewPackUpgrades = previewPackUpgrades;
  game.eqrpg.resolvePackConflict = resolvePackConflict;
  game.eqrpg.applyPackUpgrades = applyPackUpgrades;
  // Legacy destructive helper names now return a read-only preview.
  game.eqrpg.repopulateSpellPack = () => previewPackUpgrades(["eqrpg.eqrpg-spells"]);
  game.eqrpg.repopulatePacks = () => previewPackUpgrades();
  if (!isPrimaryGM()) return;
  for (const [packId,sources] of PACK_SOURCES) {
    const pack = game.packs.get(packId);
    if (!pack) { console.warn(`EQRPG | Pack not found: ${packId}`); continue; }
    try {
      const documents = await pack.getDocuments();
      if (documents.length) continue;
      const plan = planPackUpgrade(packId,sources,documents);
      await applyPackUpgrade(pack,plan);
    } catch (error) {
      console.error(`EQRPG | Pack initialization failed for ${packId}`,error);
      ui.notifications.error(`Could not initialize ${packId}. Existing entries were retained; review before retrying.`);
    }
  }
});
