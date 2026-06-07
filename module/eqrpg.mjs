// Document subclasses
import { EQActor } from "./documents/actor.mjs";
import { EQItem } from "./documents/item.mjs";

// Data models - Actors
import { CharacterData } from "./data-models/character.mjs";
import { NPCData } from "./data-models/npc.mjs";

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
import { EQItemSheet } from "./sheets/item-sheet.mjs";

// Applications
import { CharacterWizard } from "./apps/character-wizard.mjs";
import { EQStore, renderStore } from "./apps/store.mjs";
import { MonsterBuilder, renderMonsterBuilder } from "./apps/monster-builder.mjs";

// Config
import { EQRPG } from "./helpers/config.mjs";

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

Hooks.once("init", () => {
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
  game.eqrpg.config = EQRPG;
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
  };

  // Register actor sheets
  Actors.registerSheet("eqrpg", EQCharacterSheet, {
    types: ["character"],
    makeDefault: true,
    label: "EQRPG.SheetCharacter",
  });
  Actors.registerSheet("eqrpg", EQNPCSheet, {
    types: ["npc"],
    makeDefault: true,
    label: "EQRPG.SheetNPC",
  });

  // Register item sheets
  Items.registerSheet("eqrpg", EQItemSheet, {
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
  if (!tokenDoc || !actor || actor.type !== "character") return;
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

  return false;
}

Hooks.once("ready", async () => {
  if (!game.user?.isGM) return;
  for (const scene of game.scenes ?? []) {
    const updates = [];
    for (const token of scene.tokens ?? []) {
      const actor = token.actor ?? game.actors.get(token.actorId);
      if (!actor || actor.type !== "character" || token.actorLink) continue;
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
// V13 uses renderChatMessageHTML (HTMLElement); V12 used renderChatMessage (jQuery).
// Register both so the system works across versions without deprecation warnings on V13.
function _onRenderChatMessage(message, html) {
  const root = (html instanceof HTMLElement) ? html : (html?.[0] ?? html);
  if (!root?.querySelectorAll) return;

  const resolveTargetDoc = async (uuid) => {
    if (!uuid) return null;
    try {
      return await fromUuid(uuid);
    } catch (_err) {
      return null;
    }
  };

  // Apply damage buttons (Full / ½ / ×2)
  root.querySelectorAll("[data-apply-damage]").forEach(btn => {
    btn.addEventListener("click", async () => {
      if (btn.dataset.applyDamageUuid) return;
      const amount  = parseInt(btn.dataset.applyDamage) || 0;
      const targets = [...(game.user?.targets ?? [])];
      if (targets.length === 0) {
        ui.notifications.warn(game.i18n.localize("EQRPG.NoTargets"));
        return;
      }
      let applied = 0;
      for (const token of targets) {
        if (token.actor) { await token.actor.applyDamage(amount); applied++; }
      }
      ui.notifications.info(
        game.i18n.format("EQRPG.DamageApplied", { amount, count: applied })
      );
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

  // Apply healing button
  root.querySelectorAll("[data-apply-heal]").forEach(btn => {
    btn.addEventListener("click", async () => {
      if (btn.dataset.applyHealUuid) return;
      const amount  = parseInt(btn.dataset.applyHeal) || 0;
      const targets = [...(game.user?.targets ?? [])];
      if (targets.length === 0) {
        ui.notifications.warn(game.i18n.localize("EQRPG.NoTargets"));
        return;
      }
      let applied = 0;
      for (const token of targets) {
        if (token.actor) { await token.actor.applyHealing(amount); applied++; }
      }
      ui.notifications.info(
        game.i18n.format("EQRPG.HealApplied", { amount, count: applied })
      );
    });
  });

  root.querySelectorAll("[data-apply-damage-uuid]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const amount = parseInt(btn.dataset.applyDamage) || 0;
      const uuid = btn.dataset.applyDamageUuid;
      const doc = await resolveTargetDoc(uuid);
      const actor = doc?.actor ?? doc;
      if (!actor?.applyDamage) {
        ui.notifications.warn(game.i18n.localize("EQRPG.ActorNotFound"));
        return;
      }
      await actor.applyDamage(amount);
      ui.notifications.info(
        game.i18n.format("EQRPG.DamageAppliedSingle", { amount, name: actor.name })
      );
    });
  });

  root.querySelectorAll("[data-apply-heal-uuid]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const amount = parseInt(btn.dataset.applyHeal) || 0;
      const uuid = btn.dataset.applyHealUuid;
      const doc = await resolveTargetDoc(uuid);
      const actor = doc?.actor ?? doc;
      if (!actor?.applyHealing) {
        ui.notifications.warn(game.i18n.localize("EQRPG.ActorNotFound"));
        return;
      }
      await actor.applyHealing(amount);
      ui.notifications.info(
        game.i18n.format("EQRPG.HealAppliedSingle", { amount, name: actor.name })
      );
    });
  });

  root.querySelectorAll("[data-toggle-status-uuid]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const uuid = btn.dataset.toggleStatusUuid;
      const statusId = btn.dataset.statusId;
      const doc = await resolveTargetDoc(uuid);
      const toggled = await _toggleStatusEffect(doc, statusId);
      if (!toggled) {
        ui.notifications.warn(game.i18n.localize("EQRPG.ActorNotFound"));
        return;
      }
      ui.notifications.info(
        game.i18n.format("EQRPG.StatusToggled", { status: statusId, name: doc.name ?? "target" })
      );
    });
  });

  root.querySelectorAll("[data-apply-effect-uuid]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const uuid = btn.dataset.applyEffectUuid;
      const rawConfig = btn.dataset.effectConfig ?? "";
      const doc = await resolveTargetDoc(uuid);
      const actor = doc?.actor ?? doc;
      if (!actor?.toggleSpellEffect || !rawConfig) {
        ui.notifications.warn(game.i18n.localize("EQRPG.ActorNotFound"));
        return;
      }
      const config = JSON.parse(decodeURIComponent(rawConfig));
      await actor.toggleSpellEffect(config);
      ui.notifications.info(
        game.i18n.format("EQRPG.EffectToggled", { effect: config.label ?? "effect", name: actor.name })
      );
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
// V13 primary hook (HTMLElement, no deprecation warning)
Hooks.on("renderChatMessageHTML", _onRenderChatMessage);
// V12 fallback — only active when the V13 hook is absent
if (!("renderChatMessageHTML" in (Hooks.events ?? {}))) {
  Hooks.on("renderChatMessage", _onRenderChatMessage);
}

// ---------------------------------------------------------------------------
// Combat: Update token status effects from HP thresholds
// Characters: unconscious at -1 to -9, dead at -10 or below
// NPCs: dead at 0 or below
// ---------------------------------------------------------------------------
Hooks.on("updateActor", async (actor, changes, _options, _userId) => {
  // Only the GM manages token status effects
  if (!game.user.isGM) return;
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
  if (!("turn" in updateData)) return;
  if (!game.user.isGM) return;

  const combatant = combat.combatant;
  const actor = combatant?.actor;
  if (!actor) return;
  await actor.normalizeSpellEffects?.();
  if (actor.type !== "character") return;

  // Tick spell cooldowns and combat-only mana effects. Racial HP regeneration is hourly, not per round.
  await actor.tickSpellCooldowns();
  await actor.regenManaCombat?.();
});

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
Hooks.on("createActor", (actor, _options, userId) => {
  if (actor.type !== "character") return;
  if (game.userId !== userId) return;
  actor.update({ "prototypeToken.actorLink": true }).catch(() => {});
  // Short delay so the default sheet can open first, then the wizard appears on top
  setTimeout(() => new CharacterWizard(actor).render(true), 250);
});

Hooks.on("preCreateToken", (tokenDoc, data, options, userId) => {
  const actor = tokenDoc.actor ?? game.actors.get(data.actorId ?? tokenDoc.actorId);
  if (!actor || actor.type !== "character") return;
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

/**
 * Create documents in a compendium pack if it is currently empty.
 * @param {string}   packId   Full pack collection ID, e.g. "eqrpg.eqrpg-spells"
 * @param {object[]} data     Array of item creation data objects
 * @param {boolean}  [force]  If true, delete existing documents first then reimport
 */
async function _populatePack(packId, data, force = false) {
  const pack = game.packs.get(packId);
  if (!pack) {
    console.warn(`EQRPG | Pack not found: ${packId}`);
    return;
  }

  // Unlock — try configure() then force the local flag as a fallback
  const wasLocked = pack.locked;
  if (wasLocked) {
    try { await pack.configure({ locked: false }); } catch (_e) { /* ignore */ }
    if (pack.locked) pack.locked = false; // belt-and-suspenders
  }

  try {
    const existing = await pack.getDocuments();
    if (existing.length > 0 && !force) return; // already populated — never overwrite
    if (!data.length) return;

    // Force-repopulate: delete all existing entries first
    if (existing.length > 0 && force) {
      console.log(`EQRPG | Clearing ${existing.length} existing entries from ${packId} …`);
      const ids = existing.map(d => d.id);
      await Item.deleteDocuments(ids, { pack: pack.collection });
    }

    console.log(`EQRPG | Populating ${packId} with ${data.length} entries …`);
    await Item.createDocuments(data, { pack: pack.collection });
    console.log(`EQRPG | ✓ Populated ${data.length} entries → ${packId}`);
  } catch (err) {
    console.error(`EQRPG | Failed to populate ${packId}:`, err);
  } finally {
    if (wasLocked) {
      try { await pack.configure({ locked: true }); } catch (_e) { /* ignore */ }
    }
  }
}

async function _populateActorPack(packId, data, force = false) {
  const pack = game.packs.get(packId);
  if (!pack) {
    console.warn(`EQRPG | Actor pack not found: ${packId}`);
    return;
  }

  const wasLocked = pack.locked;
  if (wasLocked) {
    try { await pack.configure({ locked: false }); } catch (_e) { /* ignore */ }
    if (pack.locked) pack.locked = false;
  }

  try {
    const existing = await pack.getDocuments();
    if (existing.length > 0 && !force) return;
    if (!data.length) return;

    if (existing.length > 0 && force) {
      console.log(`EQRPG | Clearing ${existing.length} existing actors from ${packId} …`);
      const ids = existing.map((d) => d.id);
      await Actor.deleteDocuments(ids, { pack: pack.collection });
    }

    console.log(`EQRPG | Populating ${packId} with ${data.length} actors …`);
    await Actor.createDocuments(data, { pack: pack.collection });
    console.log(`EQRPG | ✓ Populated ${data.length} actors → ${packId}`);
  } catch (err) {
    console.error(`EQRPG | Failed to populate actor pack ${packId}:`, err);
  } finally {
    if (wasLocked) {
      try { await pack.configure({ locked: true }); } catch (_e) { /* ignore */ }
    }
  }
}

/**
 * Create JournalEntry documents in a compendium pack if it is empty.
 * Each entry in `data` is { name, pages: [{name, type, sort, text:{format,content}}] }.
 */
async function _populateJournalPack(packId, data, force = false) {
  const pack = game.packs.get(packId);
  if (!pack) { console.warn(`EQRPG | Journal pack not found: ${packId}`); return; }

  const wasLocked = pack.locked;
  if (wasLocked) {
    try { await pack.configure({ locked: false }); } catch (_e) { /* ignore */ }
    if (pack.locked) pack.locked = false;
  }

  try {
    const existing = await pack.getDocuments();
    if (existing.length > 0 && !force) return;
    if (!data.length) return;

    if (existing.length > 0 && force) {
      console.log(`EQRPG | Clearing ${existing.length} journal entries from ${packId} …`);
      const ids = existing.map(d => d.id);
      await JournalEntry.deleteDocuments(ids, { pack: pack.collection });
    }

    console.log(`EQRPG | Populating ${packId} with ${data.length} journal entries …`);
    await JournalEntry.createDocuments(data, { pack: pack.collection });
    console.log(`EQRPG | ✓ Populated ${data.length} journal entries → ${packId}`);
  } catch (err) {
    console.error(`EQRPG | Failed to populate ${packId}:`, err);
  } finally {
    if (wasLocked) {
      try { await pack.configure({ locked: true }); } catch (_e) { /* ignore */ }
    }
  }
}

Hooks.once("ready", async () => {
  if (!game.user.isGM) return;

  // Run sequentially so each configure() socket round-trip fully resolves
  // on the server before the next pack's createDocuments is sent
  await _populatePack("eqrpg.eqrpg-spells",      SAMPLE_SPELLS);
  await _populatePack("eqrpg.eqrpg-skills",      SAMPLE_SKILLS);
  await _populatePack("eqrpg.eqrpg-weapons",     SAMPLE_WEAPONS);
  await _populatePack("eqrpg.eqrpg-armor",       SAMPLE_ARMOR);
  await _populatePack("eqrpg.eqrpg-equipment",   SAMPLE_EQUIPMENT);
  await _populatePack("eqrpg.eqrpg-consumables", SAMPLE_CONSUMABLES);
  await _populatePack("eqrpg.eqrpg-feats",       SAMPLE_FEATS);
  await _populateJournalPack("eqrpg.eqrpg-phb",  PHB_JOURNALS);
  await _populateActorPack("eqrpg.eqrpg-monsters", SAMPLE_MONSTERS);

  // Expose repopulate helper for GM use in the browser console:
  // game.eqrpg.repopulateSpellPack()
  game.eqrpg.repopulateSpellPack = async () => {
    if (!game.user.isGM) { ui.notifications.warn("GM only."); return; }
    ui.notifications.info("EQRPG | Repopulating spell pack — please wait...");
    await _populatePack("eqrpg.eqrpg-spells", SAMPLE_SPELLS, true);
    ui.notifications.info("EQRPG | Spell pack repopulated.");
  };

  // Expose repopulate helper for GM use in the browser console:
  // game.eqrpg.repopulatePacks()
  game.eqrpg.repopulatePacks = async () => {
    if (!game.user.isGM) { ui.notifications.warn("GM only."); return; }
    ui.notifications.info("EQRPG | Repopulating all packs — please wait…");
    await _populatePack("eqrpg.eqrpg-spells",      SAMPLE_SPELLS,      true);
    await _populatePack("eqrpg.eqrpg-skills",      SAMPLE_SKILLS,      true);
    await _populatePack("eqrpg.eqrpg-weapons",     SAMPLE_WEAPONS,     true);
    await _populatePack("eqrpg.eqrpg-armor",       SAMPLE_ARMOR,       true);
    await _populatePack("eqrpg.eqrpg-equipment",   SAMPLE_EQUIPMENT,   true);
    await _populatePack("eqrpg.eqrpg-consumables", SAMPLE_CONSUMABLES, true);
    await _populatePack("eqrpg.eqrpg-feats",       SAMPLE_FEATS,       true);
    await _populateJournalPack("eqrpg.eqrpg-phb",  PHB_JOURNALS,       true);
    await _populateActorPack("eqrpg.eqrpg-monsters", SAMPLE_MONSTERS,  true);
    ui.notifications.info("EQRPG | ✓ All packs repopulated.");
  };
});
