import {readSpellSlots} from '../helpers/spell-slots.mjs';
import {rollRuneHP} from '../helpers/rune-roll.mjs';
import { hasConfirmedSpellTempHPGrant, isEffectActive, isSpellPoolDepleted } from "../helpers/active-effects.mjs";
/**
 * Extend the base Actor for EverQuest RPG.
 */
import { getClassSpellTemplates, getSpellEligibility } from "../packs/class-spells.mjs";

export class EQActor extends Actor {

  static _extractSpellEffectBonuses(changes = []) {
    const add = CONST.ACTIVE_EFFECT_MODES.ADD;
    const keyMap = {
      "system.combat.attackMisc": "attack",
      "system.combat.initiative.misc": "initiative",
      "system.combat.ac.misc": "ac",
      "system.combat.saves.fortitude.misc": "fort",
      "system.combat.saves.reflex.misc": "reflex",
      "system.combat.saves.will.misc": "will",
      "system.combat.magicSaveBonus": "magicSave",
      "system.resources.hp.bonus": "hpBonus",
      "system.abilities.str.misc": "str",
      "system.abilities.dex.misc": "dex",
      "system.abilities.con.misc": "con",
      "system.abilities.int.misc": "int",
      "system.abilities.wis.misc": "wis",
      "system.abilities.cha.misc": "cha",
    };
    const bonuses = {};
    const remaining = [];
    let tempHP = 0;

    for (const change of changes.filter(Boolean)) {
      const value = Number(change.value) || 0;
      const isAdd = Number(change.mode) === add || change.mode === add;
      if (isAdd && change.key === "system.resources.hp.temp") {
        tempHP += value;
        continue;
      }
      const bonusKey = isAdd ? keyMap[change.key] : null;
      if (bonusKey) {
        bonuses[bonusKey] = (bonuses[bonusKey] ?? 0) + value;
        continue;
      }
      remaining.push(change);
    }

    return { changes: remaining, bonuses, tempHP };
  }

  static _mergeSpellEffectBonuses(...sources) {
    const merged = {};
    for (const source of sources) {
      for (const [key, value] of Object.entries(source ?? {})) {
        merged[key] = (merged[key] ?? 0) + (Number(value) || 0);
      }
    }
    return merged;
  }

  static _normalizeNPCActionName(name = "") {
    return String(name)
      .toLowerCase()
      .replace(/\([^)]*\)/g, " ")
      .replace(/[^a-z0-9]+/g, " ")
      .replace(/\b(attacks?|melee|ranged|touch|slam)\b/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/\bclaws\b/g, "claw")
      .replace(/\bbites\b/g, "bite");
  }

  static _escapeRegex(text = "") {
    return String(text).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // ---------------------------------------------------------------------------
  // Shared Chat Panel Helpers (mirrors EQItem equivalents, no circular import)
  // ---------------------------------------------------------------------------

  static _buildApplyDamagePanel(total) {
    const half   = Math.floor(total / 2);
    const double = total * 2;
    return `<div class="eq-apply-panel eq-dmg-panel">`
      + `<span class="eq-apply-label">${game.i18n.localize("EQRPG.ApplyTo")}:</span>`
      + `<div class="eq-apply-btns">`
      + `<button class="eq-apply-btn eq-apply-full" data-apply-damage="${total}"`
      + ` title="${game.i18n.localize("EQRPG.ApplyFull")}">⚔ ${total}</button>`
      + `<button class="eq-apply-btn eq-apply-half" data-apply-damage="${half}"`
      + ` title="${game.i18n.localize("EQRPG.ApplyHalf")}">½ ${half}</button>`
      + `<button class="eq-apply-btn eq-apply-double" data-apply-damage="${double}"`
      + ` title="${game.i18n.localize("EQRPG.ApplyDouble")}">×2 ${double}</button>`
      + `</div></div>`;
  }

  static _buildTargetedStatusPanel(targets, statusId, label, title = "") {
    const rows = targets
      .filter((target) => (target?.document?.uuid ?? target?.uuid))
      .map((target) => {
        const tokenUuid = target.document?.uuid ?? target.uuid;
        return `<div class="eq-apply-target-row">`
          + `<span class="eq-apply-target-name">${target.name}</span>`
          + `<div class="eq-apply-btns">`
          + `<button class="eq-apply-btn eq-apply-full" data-toggle-status-uuid="${tokenUuid}" data-status-id="${statusId}" title="${title || label}">`
          + `${label}</button>`
          + `</div>`
          + `</div>`;
      })
      .join("");

    if (!rows) return "";
    return `<div class="eq-apply-panel eq-targeted-panel">`
      + `<span class="eq-apply-label">${game.i18n.localize("EQRPG.ApplyPerTarget")}:</span>`
      + rows
      + `</div>`;
  }

  /** @override */
  getRollData() {
    const data = super.getRollData();
    if (this.system?.abilities) {
      data.abilities = {};
      for (const key of Object.keys(CONFIG.EQRPG.abilities)) {
        const ab = this.system.abilities[key];
        if (!ab) continue;
        const total = (ab.value != null) ? ab.value : (ab.base + ab.racial + ab.misc);
        const mod   = (ab.mod  != null) ? ab.mod   : Math.floor((total - 10) / 2);
        data.abilities[key] = { base: ab.base, racial: ab.racial, misc: ab.misc, value: total, mod };
      }
    }
    if (this.system?.combat) data.combat = foundry.utils.deepClone(this.system.combat);
    if (this.system?.resources) data.resources = foundry.utils.deepClone(this.system.resources);
    return data;
  }

  // ---------------------------------------------------------------------------
  // Chat Card Helper
  // ---------------------------------------------------------------------------

  /**
   * Build a card header HTML string using the actor's portrait.
   * @param {string} actionHtml  Inner HTML for the action subtitle line.
   * @returns {string}
   */
  _buildActorCardHeader(actionHtml) {
    return `<div class="eq-card-header">`
      + `<img src="${this.img}" class="eq-card-portrait" />`
      + `<div class="eq-card-title">`
      + `<span class="eq-card-actor">${this.name}</span>`
      + `<span class="eq-card-action">${actionHtml}</span>`
      + `</div></div>`;
  }

  // ---------------------------------------------------------------------------
  // Dice Rolling
  // ---------------------------------------------------------------------------

  async rollAbilityCheck(abilityKey) {
    const ability = this.system.abilities?.[abilityKey];
    if (!ability) return;
    const label = game.i18n.localize(CONFIG.EQRPG.abilities[abilityKey]);
    const mod   = ability.mod ?? 0;
    const sign  = mod >= 0 ? "+" : "";
    const roll  = await new Roll(`1d20 + ${mod}`, this.getRollData()).evaluate();

    const content = `<div class="eq-chat-card eq-ability-card">`
      + this._buildActorCardHeader(`${label} Check`)
      + `<div class="eq-card-body">`
      + `<span class="eq-roll-mod">${sign}${mod}</span>`
      + ` <span class="eq-roll-arrow">→</span> `
      + `<span class="eq-roll-total">${roll.total}</span>`
      + `</div></div>`;

    await ChatMessage.create({
      speaker:  ChatMessage.getSpeaker({ actor: this }),
      content,
      rolls:    [roll],
      rollMode: game.settings.get("core", "rollMode"),
    });
    return roll;
  }

  async rollSave(saveKey) {
    const save  = this.system.combat?.saves?.[saveKey];
    if (!save) return;
    const label = game.i18n.localize(`EQRPG.Save${saveKey.charAt(0).toUpperCase()}${saveKey.slice(1)}`);
    const total = save.value ?? 0;
    const sign  = total >= 0 ? "+" : "";
    const roll  = await new Roll(`1d20 + ${total}`, this.getRollData()).evaluate();

    const content = `<div class="eq-chat-card eq-save-card">`
      + this._buildActorCardHeader(`${label} Save`)
      + `<div class="eq-card-body">`
      + `<span class="eq-roll-mod">${sign}${total}</span>`
      + ` <span class="eq-roll-arrow">→</span> `
      + `<span class="eq-roll-total">${roll.total}</span>`
      + `</div></div>`;

    await ChatMessage.create({
      speaker:  ChatMessage.getSpeaker({ actor: this }),
      content,
      rolls:    [roll],
      rollMode: game.settings.get("core", "rollMode"),
    });
    return roll;
  }

  async rollInitiativeCheck() {
    const total = this.system.combat?.initiative?.value ?? 0;
    const sign  = total >= 0 ? "+" : "";
    const roll  = await new Roll(`1d20 + ${total}`, this.getRollData()).evaluate();

    const content = `<div class="eq-chat-card eq-init-card">`
      + this._buildActorCardHeader(`Initiative`)
      + `<div class="eq-card-body">`
      + `<span class="eq-roll-mod">${sign}${total}</span>`
      + ` <span class="eq-roll-arrow">→</span> `
      + `<span class="eq-roll-total">${roll.total}</span>`
      + `</div></div>`;

    await ChatMessage.create({
      speaker:  ChatMessage.getSpeaker({ actor: this }),
      content,
      rolls:    [roll],
      rollMode: game.settings.get("core", "rollMode"),
    });
    return roll;
  }

  getNPCStatblockAttacks() {
    if (!["npc", "pet"].includes(this.type)) return [];

    const attackText = String(this.system?.statblock?.attacks ?? "").trim();
    const damageText = String(this.system?.statblock?.damage ?? "").trim();
    if (!attackText) return [];

    const damageMap = new Map();
    for (const chunk of damageText.split(",")) {
      const text = chunk.trim();
      if (!text) continue;
      const match = text.match(/^(?:(\d+)\s+)?(.+?)\s+((?:\d+d\d+|\d+)(?:[+-](?:\d+d\d+|\d+))*)(.*)$/i);
      if (!match) continue;
      const [, countRaw, rawName, formula, riderRaw] = match;
      const name = rawName.trim();
      const count = Number(countRaw || 1);
      const rider = String(riderRaw ?? "").trim().replace(/^\s*(?:,|and)\s*/i, "");
      const normalized = EQActor._normalizeNPCActionName(name);
      damageMap.set(normalized, {
        name,
        count,
        formula: formula.trim(),
        rider,
      });
    }

    const profiles = [];
    for (const chunk of attackText.split(",")) {
      const text = chunk.trim();
      if (!text) continue;
      const match = text.match(/^(?:(\d+)\s+)?(.+?)\s+([+-]\d+)\s+(.+)$/i);
      if (!match) continue;
      const [, countRaw, rawName, attackBonusRaw, mode] = match;
      const count = Number(countRaw || 1);
      const name = rawName.trim();
      const normalized = EQActor._normalizeNPCActionName(name);
      const damage = damageMap.get(normalized) ?? null;
      profiles.push({
        id: normalized || `attack-${profiles.length + 1}`,
        name,
        count,
        label: count > 1 ? `${name} x${count}` : name,
        attackBonus: Number(attackBonusRaw),
        attackText: text,
        mode: mode.trim(),
        damageFormula: damage?.formula ?? "",
        damageText: damage ? `${damage.formula}${damage.rider ? ` ${damage.rider}` : ""}` : "",
      });
    }

    return profiles;
  }

  getNPCSpecialAbilities() {
    if (!["npc", "pet"].includes(this.type)) return [];

    const names = [
      ...String(this.system?.statblock?.specialAttacks ?? "").split(","),
      ...String(this.system?.statblock?.specialQualities ?? "").split(","),
    ]
      .map((value) => value.trim())
      .filter(Boolean);

    const rawText = String(this.system?.statblock?.rawText ?? "");
    const deduped = new Set();
    const abilities = [];

    for (const name of names) {
      const normalized = EQActor._normalizeNPCActionName(name);
      if (!normalized || deduped.has(normalized)) continue;
      deduped.add(normalized);

      const pattern = new RegExp(
        `(?:^|\\n)${EQActor._escapeRegex(name)}(?:\\s*\\([^)]+\\))?:\\s*(.*?)(?=\\n[A-Z][A-Za-z' -]{2,}(?:\\s*\\([A-Za-z]+\\))?:|\\n(?:Description|Combat|Habitat\\/Society)\\b|$)`,
        "is",
      );
      const match = rawText.match(pattern);
      const description = String(match?.[1] ?? "")
        .replace(/\s+/g, " ")
        .trim();

      abilities.push({
        id: normalized,
        name,
        label: name.replace(/\b\w/g, (char) => char.toUpperCase()),
        description,
      });
    }

    return abilities;
  }

  getNPCStatblockSkills() {
    if (!["npc", "pet"].includes(this.type)) return [];

    return String(this.system?.statblock?.skills ?? "")
      .split(",")
      .map((entry, index) => {
        const text = entry.trim();
        const match = text.match(/^(.+?)\s+([+-]\d+)$/);
        if (!match) return null;
        const [, name, bonus] = match;
        return {
          id: `skill-${index}`,
          name: name.trim(),
          bonus: Number(bonus),
        };
      })
      .filter(Boolean);
  }

  async rollNPCStatblockAttack(attackId) {
    const profile = this.getNPCStatblockAttacks().find((entry) => entry.id === attackId);
    if (!profile) return null;

    const roll = await new Roll(`1d20 + ${profile.attackBonus}`, this.getRollData()).evaluate();
    const sign = profile.attackBonus >= 0 ? "+" : "";
    const content = `<div class="eq-chat-card eq-weapon-card">`
      + this._buildActorCardHeader(`<strong>${profile.label}</strong> ${game.i18n.localize("EQRPG.RollAttack")}`)
      + `<div class="eq-card-body">`
      + `<div class="eq-weapon-meta">`
      + `<span class="eq-badge">${sign}${profile.attackBonus} ${profile.mode}</span>`
      + (profile.count > 1 ? `<span class="eq-badge">${profile.count} attacks</span>` : "")
      + `</div>`
      + `<div class="eq-roll-summary">${profile.attackText}</div>`
      + `</div></div>`;

    await roll.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this }),
      flavor: content,
      rollMode: game.settings.get("core", "rollMode"),
    });
    return roll;
  }

  async rollNPCStatblockDamage(attackId) {
    const profile = this.getNPCStatblockAttacks().find((entry) => entry.id === attackId);
    if (!profile?.damageFormula) return null;

    const roll = await new Roll(profile.damageFormula, this.getRollData()).evaluate();
    const content = `<div class="eq-chat-card eq-damage-card">`
      + this._buildActorCardHeader(`<strong>${profile.label}</strong> ${game.i18n.localize("EQRPG.RollDamage")}`)
      + `<div class="eq-card-body">`
      + `<div class="eq-roll-summary">${profile.damageText || profile.damageFormula}</div>`
      + `</div></div>`;

    await roll.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this }),
      flavor: content,
      rollMode: game.settings.get("core", "rollMode"),
    });

    await ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this }),
      content: EQActor._buildApplyDamagePanel(roll.total),
      rollMode: game.settings.get("core", "rollMode"),
    });
    return roll;
  }

  async rollNPCStatblockSkill(skillId) {
    const skill = this.getNPCStatblockSkills().find((entry) => entry.id === skillId);
    if (!skill) return null;

    const roll = await new Roll(`1d20 + ${skill.bonus}`, this.getRollData()).evaluate();
    const sign = skill.bonus >= 0 ? "+" : "";
    const content = `<div class="eq-chat-card eq-skill-card">`
      + this._buildActorCardHeader(`<strong>${skill.name}</strong> ${game.i18n.localize("EQRPG.RollSkill")}`)
      + `<div class="eq-card-body"><span class="eq-roll-mod">${sign}${skill.bonus}</span>`
      + ` <span class="eq-roll-arrow">&rarr;</span> <span class="eq-roll-total">${roll.total}</span></div></div>`;

    await ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this }),
      content,
      rolls: [roll],
      rollMode: game.settings.get("core", "rollMode"),
    });
    return roll;
  }

  async useNPCSpecialAbility(abilityId) {
    const ability = this.getNPCSpecialAbilities().find((entry) => entry.id === abilityId);
    if (!ability) return null;

    const content = `<div class="eq-chat-card eq-spell-card">`
      + this._buildActorCardHeader(`<strong>${ability.label}</strong>`)
      + `<div class="eq-card-body">`
      + `<div class="eq-effect-text">${ability.description || game.i18n.localize("EQRPG.NoAbilityDetail")}</div>`
      + `</div></div>`;

    await ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this }),
      content,
      rollMode: game.settings.get("core", "rollMode"),
    });
    return ability;
  }

  // ---------------------------------------------------------------------------
  // Spell Slots — Safe ArrayField update helpers
  // ---------------------------------------------------------------------------

  /**
   * Return a clean 8-element plain-object array for the spell slots.
   *
   * IMPORTANT: We use `this.toObject()` (not `this.system.spellSlots`) because
   * Foundry's TypeDataModel stores derived / prepared values in the model
   * instance, but `toObject()` gives us the raw database representation —
   * always a proper JS Array that we can pass straight back into `update()`.
   *
   * DO NOT use dot-notation paths like "system.spellSlots.0.itemId" for
   * ArrayField elements: expandObject() converts them to a POJO {"0": {...}}
   * and ArrayField._cast() wraps that POJO in a 1-element array.
   */
  _getSlotArray() {
    return readSpellSlots(this.toObject().system?.spellSlots);
  }

  // ---------------------------------------------------------------------------
  // Spell Casting
  // ---------------------------------------------------------------------------

  async castSpell(slotIndex) {
    if (this._spellCastPending) return;
    this._spellCastPending = true;
    try { return await this._castPreparedSpell(slotIndex); }
    finally { this._spellCastPending = false; }
  }

  async _castPreparedSpell(slotIndex) {
    const slots = this._getSlotArray();
    const slot  = slots[slotIndex];
    if (!slot?.itemId) return;
    if (slot.cooldownRemaining > 0) {
      ui.notifications.warn("This spell is still on cooldown.");
      return;
    }

    const spell = this.items.get(slot.itemId);
    if (!spell) return;
    if (this.type === "character") {
      const eligibility = getSpellEligibility(spell,this.system.details.class,this.system.details.level);
      if (!eligibility.allowed) { ui.notifications.warn(eligibility.reason); return; }
    }

    const manaCost    = spell.system.manaCost ?? 0;
    const currentMana = this.system.resources.mana.value;
    if (!Number.isSafeInteger(manaCost) || manaCost < 0 || !Number.isFinite(currentMana)) throw new Error("Invalid spell cost or mana data; casting stopped for review.");
    if(this.type==='character' && Number.isFinite(this.system.resources.mana.max) && currentMana>this.system.resources.mana.max) throw new Error('Stored mana exceeds the current maximum. Ask the GM to reconcile it before casting.');

    if (currentMana < manaCost) {
      ui.notifications.warn(game.i18n.localize("EQRPG.NotEnoughMana"));
      return;
    }

    // Commit resource cost and cooldown together before resolving the spell.
    const recastTime = spell.system.recastTime ?? 0;
    if (!Number.isSafeInteger(recastTime) || recastTime < 0) throw new Error("Invalid spell recast time; casting stopped for review.");
    // PHB printed 174 / PDF 177: a one-round recast cast in round 1 is ready in round 3.
    slots[slotIndex].cooldownRemaining = recastTime > 0 ? recastTime + 1 : 0;
    const nextMana = Math.max(0, currentMana - manaCost);
    const startPatch = this._cooldownStartPatch(spell.id);
    await this.update({ "system.resources.mana.value": nextMana, "system.spellSlots": slots, ...startPatch });
    this._assertCooldownStart(spell.id,startPatch);
    if (this.system.resources.mana.value !== nextMana || this._getSlotArray()[slotIndex]?.cooldownRemaining !== slots[slotIndex].cooldownRemaining) {
      ui.notifications.warn("The spell cost or cooldown update was not confirmed. The spell was not resolved; check the character before retrying.");
      return;
    }

    await spell.castSpell(this, { resourcesPaid: true });
  }

  async memorizeSpell(spellId, slotIndex) {
    const slots = this._getSlotArray();
    if (!Number.isInteger(slotIndex) || slotIndex < 0 || slotIndex >= slots.length) return;
    const spell = this.items.get(spellId);
    if (spell?.type !== "spell") return;
    if (this.type === "character") {
      const eligibility = getSpellEligibility(spell,this.system.details.class,this.system.details.level);
      if (!eligibility.allowed) { ui.notifications.warn(eligibility.reason); return; }
    }
    if (slots[slotIndex].cooldownRemaining > 0 || slots.some(slot=>slot.itemId===spellId)) {
      ui.notifications.warn("Wait for this slot's cooldown and remove any existing preparation before memorizing the spell.");
      return;
    }
    const recastTime = spell.system.recastTime ?? 0;
    if (!Number.isSafeInteger(recastTime) || recastTime < 0) throw new Error("Invalid spell recast time; preparation stopped for review.");
    slots[slotIndex] = { itemId: spellId, cooldownRemaining: recastTime };
    const startPatch = this._cooldownStartPatch(spellId);
    await this.update({ "system.spellSlots": slots, ...startPatch });
    this._assertCooldownStart(spellId,startPatch);
    const prepared = this._getSlotArray()[slotIndex];
    if (prepared?.itemId !== spellId || prepared.cooldownRemaining !== recastTime) throw new Error("Spell preparation was not confirmed.");
  }

  _cooldownStartPatch(itemId) {
    const combat = game.combat;
    if (!combat?.id || !Number.isSafeInteger(combat.round) || combat.round < 1) return {};
    return {[`flags.eqrpg.cooldownStarts.${itemId}`]:{combatId:combat.id,round:combat.round}};
  }

  _assertCooldownStart(itemId,patch) {
    const expected=Object.values(patch)[0];
    if(!expected) return;
    const actual=this.flags?.eqrpg?.cooldownStarts?.[itemId];
    if(actual?.combatId!==expected.combatId || actual?.round!==expected.round) throw new Error('Cooldown start was not confirmed. Review the spell resources before retrying.');
  }

  async unmemorizeSpell(slotIndex) {
    const slots = this._getSlotArray();
    if (!Number.isInteger(slotIndex) || slotIndex < 0 || slotIndex >= slots.length) return;
    if (slots[slotIndex].cooldownRemaining > 0) { ui.notifications.warn("This spell is still on cooldown."); return; }
    slots[slotIndex] = { itemId: "", cooldownRemaining: 0 };
    await this.update({ "system.spellSlots": slots });
  }

  async recoverSpells() {
    const slots    = this._getSlotArray();
    if(!game.user?.isGM || !this.isOwner) throw new Error('Only the GM can manually clear cooldowns. Use elapsed combat rounds or completed rest for normal recovery.');
    const newSlots = slots.map(s => ({ itemId: s.itemId, cooldownRemaining: 0 }));
    const hasCD    = slots.some(s => s.cooldownRemaining > 0);
    await this.update({ "system.spellSlots": newSlots });
    if(JSON.stringify(this._getSlotArray())!==JSON.stringify(newSlots)) throw new Error('Cooldown override was not confirmed.');
    if (!hasCD) ui.notifications.info(game.i18n.localize("EQRPG.SpellsAlreadyRecovered"));
  }

  async tickSpellCooldowns() {
    const slots = this._getSlotArray();
    if (!slots.some(s => s.cooldownRemaining > 0)) return;
    const newSlots = slots.map(s => ({
      itemId:            s.itemId,
      cooldownRemaining: s.cooldownRemaining > 0 ? s.cooldownRemaining - 1 : 0,
    }));
    await this.update({ "system.spellSlots": newSlots });
  }

  // ---------------------------------------------------------------------------
  // Mana Regeneration & Resting
  // ---------------------------------------------------------------------------

  /**
   * Regenerate mana at the start of a combat turn.
   * Rate = max(1, floor(level/5)) + castingAbilityMod + Meditate bonus.
   * Called automatically by the updateCombat hook.
   */
  // ---------------------------------------------------------------------------
  // Level Up
  // ---------------------------------------------------------------------------

  async _grantClassSpellsForLevel(classKey, level) {
    const templates = getClassSpellTemplates(classKey, level);
    if (!templates.length) return [];

    const knownNames = new Set(
      this.items
        .filter((item) => item.type === "spell")
        .map((item) => item.name.trim().toLocaleLowerCase()),
    );
    const createData = [];

    for (const template of templates) {
      const normalizedName = template.name.trim().toLocaleLowerCase();
      if (knownNames.has(normalizedName)) continue;

      const spellData = foundry.utils.deepClone(template);
      spellData.flags = foundry.utils.mergeObject(spellData.flags ?? {}, {
        eqrpg: {
          levelUpGranted: true,
          levelUpGrantClass: classKey,
          levelUpGrantLevel: level,
        },
      });
      createData.push(spellData);
      knownNames.add(normalizedName);
    }

    if (!createData.length) return [];
    const created=await this.createEmbeddedDocuments("Item", createData);
    if(!Array.isArray(created) || created.length!==createData.length) {
      throw new Error('Class spell grants were not confirmed. The advancement is saved and can be recovered by pressing Level Up again.');
    }
    return created.map((spell,index) => spell?.name??createData[index].name);
  }

  /**
   * Level up the character: increment level, roll the hit die for HP,
   * grant newly unlocked class spells, then recalculate all derived stats.
   */
  async levelUp() {
    if (this._levelUpPending) return;
    this._levelUpPending = true;
    try { return await this._performLevelUp(); }
    finally { this._levelUpPending = false; }
  }

  async _performLevelUp() {
    if (this.type !== "character" || !this.isOwner) throw new Error("Only an owned character can advance a level.");
    const records=Object.values(this.flags?.eqrpg?.advancements??{});
    const pending=records.filter(record=>record?.state==='pending');
    if(pending.length>1) throw new Error('Multiple advancement records need GM review. No level was changed.');
    if(pending.length===1) return this._recoverAdvancement(pending[0]);
    const system    = this.system;
    const level     = system.details.level;
    if (level >= 30) {
      ui.notifications.info(game.i18n.localize("EQRPG.MaxLevel"));
      return;
    }
    if (!system.xpProgress?.ready) {
      ui.notifications.warn(game.i18n.localize("EQRPG.NotEnoughXP"));
      return;
    }

    const classKey    = system.details.class;
    const classConfig = CONFIG.EQRPG.classes?.[classKey];
    const hitDie      = classConfig?.hitDie ?? 6;
    const newLevel    = level + 1;
    const conMod      = system.abilities.con.mod;
    const conSign     = conMod >= 0 ? "+" : "";

    const previousRolls = foundry.utils.deepClone(system.hpAdvancement ?? []);
    const previousHP = system.resources.hp.value;
    // Roll hit die for HP gain (minimum 1)
    const hpRoll = await new Roll(`1d${hitDie}`).evaluate();
    if (!Number.isInteger(hpRoll.total) || hpRoll.total < 1 || hpRoll.total > hitDie) throw new Error("The advancement hit die result is invalid.");
    const hpGain = Math.max(1, hpRoll.total + conMod);
    if (this.system.details.level !== level || this.system.details.class !== classKey
      || this.system.resources.hp.value !== previousHP || this.system.abilities.con.mod !== conMod
      || !this.system.xpProgress?.ready
      || JSON.stringify(this.system.hpAdvancement ?? []) !== JSON.stringify(previousRolls)) {
      throw new Error("The character changed while rolling advancement. Review the character before trying again.");
    }
    const nextRolls = [...previousRolls, {level: newLevel, die: hitDie, roll: hpRoll.total}];
    const nextHP = Math.min(previousHP + hpGain, system.resources.hp.max + hpGain);
    const advancementKey=`level_${newLevel}`;
    const advancementPath=`flags.eqrpg.advancements.${advancementKey}`;
    const advancement={state:'pending',classKey,level:newLevel,die:hitDie,roll:hpRoll.total,hpGain};
    await this.update({
      "system.details.level":       newLevel,
      "system.hpAdvancement": nextRolls,
      "system.resources.hp.value":  nextHP,
      [advancementPath]: advancement,
    });
    if (this.system.details.level !== newLevel || this.system.resources.hp.value !== nextHP
      || JSON.stringify(this.system.hpAdvancement ?? []) !== JSON.stringify(nextRolls)
      || this.flags?.eqrpg?.advancements?.[advancementKey]?.state!=='pending') {
      throw new Error("Advancement was not confirmed. Review the level and HP record before trying again; no spells were granted.");
    }
    const grantedSpells = classConfig?.spellcastingAbility
      ? await this._grantClassSpellsForLevel(classKey, newLevel)
      : [];
    const completed={...advancement,state:'complete',grantedSpells};
    await this.update({[advancementPath]:completed});
    if(this.flags?.eqrpg?.advancements?.[advancementKey]?.state!=='complete') {
      throw new Error('Advancement grants finished, but their record was not confirmed. Press Level Up again to recover safely.');
    }

    const content = `<div class="eq-chat-card eq-levelup-card">`
      + this._buildActorCardHeader(`Level Up — Now Level ${newLevel}`)
      + `<div class="eq-card-body">`
      + `<div class="eq-levelup-gain">+${hpGain} HP</div>`
      + `<div class="eq-levelup-detail">1d${hitDie} = ${hpRoll.total} ${conSign}${conMod} CON</div>`
      + (grantedSpells.length
        ? `<div class="eq-levelup-detail"><strong>New spells:</strong> ${grantedSpells.join(", ")}</div>`
        : "")
      + `</div></div>`;

    await ChatMessage.create({
      speaker:  ChatMessage.getSpeaker({ actor: this }),
      content,
      rolls:    [hpRoll],
      rollMode: game.settings.get("core", "rollMode"),
    });
  }

  async _recoverAdvancement(record) {
    const {classKey,level,die,roll,hpGain}=record;
    const ledger=this.system.hpAdvancement??[];
    if(this.system.details.level!==level || this.system.details.class!==classKey
      || !ledger.some(entry=>entry.level===level && entry.die===die && entry.roll===roll)) {
      throw new Error('The pending advancement no longer matches this character. Ask the GM to review it.');
    }
    const classConfig=CONFIG.EQRPG.classes?.[classKey];
    const grantedSpells=classConfig?.spellcastingAbility
      ? await this._grantClassSpellsForLevel(classKey,level)
      : [];
    const key=`level_${level}`;
    await this.update({[`flags.eqrpg.advancements.${key}`]:{...record,state:'complete',grantedSpells}});
    if(this.flags?.eqrpg?.advancements?.[key]?.state!=='complete') throw new Error('Recovered advancement was not confirmed. Review it before retrying.');
    await ChatMessage.create({speaker:ChatMessage.getSpeaker({actor:this}),rollMode:game.settings.get('core','rollMode'),content:
      `<div class="eq-chat-card eq-levelup-card">${this._buildActorCardHeader(`Recovered Level ${level} Advancement`)}<div class="eq-card-body"><div class="eq-levelup-gain">+${hpGain} HP was already recorded</div>${grantedSpells.length?`<div class="eq-levelup-detail"><strong>Recovered spells:</strong> ${grantedSpells.join(', ')}</div>`:''}</div></div>`});
    return {recovered:true,level,grantedSpells};
  }

  // ---------------------------------------------------------------------------
  // Damage & Healing Application
  // ---------------------------------------------------------------------------

  _getMinimumHP() {
    return this.type === "character" ? -10 : 0;
  }

  /**
   * Subtract damage from current HP.
   * PCs can fall to -10 before death; NPCs floor at 0.
   * @param {number} amount  Raw damage to apply
   * @returns {number}       New HP value
   */
  async applyDamage(amount) {
    const damage = Math.max(0, Math.floor(Number(amount) || 0));
    const currentHP = Number(this.system.resources.hp.value) || 0;
    const currentTemp = Math.max(0, Number(this.system.resources.hp.temp) || 0);
    const absorbed = Math.min(currentTemp, damage);
    const remaining = Math.max(0, damage - absorbed);
    const newTemp = Math.max(0, currentTemp - absorbed);
    const newValue = Math.max(this._getMinimumHP(), currentHP - remaining);
    if (absorbed > 0) await this._consumeSpellEffectTempHP(absorbed);
    await this.update({
      "system.resources.hp.temp": newTemp,
      "system.resources.hp.value": newValue,
    });
    if (this.system.resources.hp.temp !== newTemp || this.system.resources.hp.value !== newValue) {
      throw new Error("Damage update was not confirmed. Review HP and temporary-HP pools before retrying.");
    }
    return newValue;
  }

  /**
   * Add healing to current HP (cap at max).
   * @param {number} amount  HP to restore
   * @returns {number}       New HP value
   */
  async applyHealing(amount) {
    if ((this.type === "character" && this.system.resources.hp.value <= -10)
      || (this.type !== "character" && this.system.resources.hp.value <= 0)) {
      throw new Error("Ordinary healing cannot restore a dead actor. Resolve resurrection separately.");
    }
    const healing  = Math.max(0, Math.floor(Number(amount) || 0));
    const current  = Number(this.system.resources.hp.value) || 0;
    const max      = Number(this.system.resources.hp.max) || 0;
    const newValue = Math.min(max, current + healing);
    await this.update({ "system.resources.hp.value": newValue });
    if (this.system.resources.hp.value !== newValue) throw new Error("Healing update was not confirmed. Review HP before retrying.");
    return newValue;
  }

  validateSpellEffectApplication(effectData = {}) {
    const label=String(effectData.label??'').trim();
    const effectKey=String(effectData.effectKey??label.toLowerCase()).trim();
    const grantsBuffHP=/^rune-(i|ii|iii|iv|v)$/.test(effectKey) || (effectData.changes??[]).some(change=>
      ['system.resources.hp.temp','system.resources.hp.bonus'].includes(change?.key) && Number(change.value)>0);
    if(!grantsBuffHP) return true;

    const matching=this.effects.find(effect=>effect.name===label || effect.flags?.eqrpg?.effectKey===effectKey);
    const matchingEnded=matching && (isSpellPoolDepleted(matching) || matching.duration?.expired
      || this.flags?.eqrpg?.expiredSpellEffects?.[matching.id]);
    if(matching && !matchingEnded && isEffectActive(matching)) return true;

    for(const effect of this.effects??[]) {
      if(effect===matching && matchingEnded) continue;
      const flags=effect.flags?.eqrpg??{};
      if(flags.tempHPGrantTracked===true && !hasConfirmedSpellTempHPGrant(this,effect)) {
        throw new Error('A temporary-HP grant is pending review. Resolve it before applying another buff-HP effect.');
      }
      const remaining=Math.max(0,Number(flags.tempHPRemaining??flags.tempHPGrant)||0);
      const hitPointBonus=Math.max(0,Number(flags.bonuses?.hpBonus)||0);
      if((remaining>0 || hitPointBonus>0) && isEffectActive(effect)) {
        throw new Error(`Buff temporary hit points do not stack. Remove or resolve ${effect.name??'the existing effect'} first.`);
      }
    }
    return true;
  }

  isProtectedFromSpellLine(spellLine) {
    if(String(spellLine??'').trim().toLowerCase()!=='lifetap') return false;
    return [...(this.effects??[])].some(effect=>{
      const key=String(effect.flags?.eqrpg?.effectKey??'').toLowerCase();
      return /^rune-(i|ii|iii|iv|v)$/.test(key) && isEffectActive(effect);
    });
  }

  async toggleSpellEffect(effectData = {}, {applyOnly = false} = {}) {
    const label = String(effectData.label ?? "").trim();
    if (!label) return null;
    const effectKey = String(effectData.effectKey ?? label.toLowerCase()).trim();
    this.validateSpellEffectApplication(effectData);
    const existing = this.effects.find((effect) => effect.name === label || effect.flags?.eqrpg?.effectKey === effectKey);
    if (existing) {
      const ended = isSpellPoolDepleted(existing) || existing.duration?.expired
        || this.flags?.eqrpg?.expiredSpellEffects?.[existing.id];
      if (applyOnly && !ended) return existing;
      await this.removeSpellEffect(existing.id, effectData.statuses ?? effectData.statusIds ?? []);
      if (!applyOnly) return null;
    }

    const extracted = EQActor._extractSpellEffectBonuses(effectData.changes ?? []);
    const runeRoll = await rollRuneHP(effectKey);
    if (runeRoll) extracted.tempHP = runeRoll.total;
    const existingBonuses = effectData.flags?.eqrpg?.bonuses ?? {};
    const bonuses = EQActor._mergeSpellEffectBonuses(existingBonuses, extracted.bonuses);
    const changes = extracted.changes;
    const rawStatusIds = effectData.statuses ?? effectData.statusIds ?? [];
    const statusIds = [...new Set(Array.isArray(rawStatusIds) ? rawStatusIds : [rawStatusIds])].filter(Boolean);
    const createData = {
      name: label,
      img: effectData.img || effectData.icon || "icons/svg/aura.svg",
      origin: effectData.origin || this.uuid,
      duration: effectData.duration ?? {},
      ...(effectData.start ? {start:effectData.start} : {}),
      disabled: false,
      changes,
      statuses: statusIds,
      description: effectData.description ?? "",
      flags: foundry.utils.mergeObject(effectData.flags ?? {}, {
        eqrpg: {
          spellEffect: true,
          effectKey,
          hasteRank: Number(effectData.hasteRank ?? 0) || 0,
          hasteSource: effectData.hasteSource ?? "spell",
          slowRank: Number(effectData.slowRank ?? 0) || 0,
          manaPerRound: Number(effectData.manaPerRound ?? 0) || 0,
          speedPct: Number(effectData.speedPct ?? 0) || 0,
          bonuses,
          tempHPGrant: Math.max(0, extracted.tempHP),
          tempHPRemaining: Math.max(0, extracted.tempHP),
          tempHPGrantTracked: extracted.tempHP > 0,
          ...(runeRoll ? {tempHPRoll: runeRoll, endsOnTempHPDepleted: true} : {}),
          breaksOnAttack: !!effectData.breaksOnAttack,
          breaksOnCast: !!effectData.breaksOnCast,
          statusIds,
        },
      }),
    };

    const [created] = await this.createEmbeddedDocuments("ActiveEffect", [createData]);
    if (!created?.id || !this.effects.find((entry) => entry.id === created.id)) {
      throw new Error("Spell effect creation was not confirmed; temporary HP and token statuses were not changed.");
    }
    if (extracted.tempHP > 0) {
      const currentTemp = Math.max(0, Number(this.system.resources.hp.temp) || 0);
      const path=`flags.eqrpg.effectHPGrants.${created.id}`;
      const receipt={state:'complete',amount:extracted.tempHP,before:currentTemp,after:currentTemp+extracted.tempHP};
      await this.update({ "system.resources.hp.temp": receipt.after, [path]:receipt });
      const actual=this.flags?.eqrpg?.effectHPGrants?.[created.id];
      if(this.system.resources.hp.temp!==receipt.after || actual?.state!=='complete' || actual.amount!==receipt.amount || actual.before!==receipt.before || actual.after!==receipt.after) {
        throw new Error('Temporary-HP grant was not confirmed. The effect is inactive; ask the GM to review it before another application.');
      }
    }
    await this._setTokenStatuses(statusIds, true);
    return created ?? null;
  }

  async setSpellEffectEnabled(effectId, enabled) {
    const effect = this.effects.get?.(effectId) ?? this.effects.find((entry) => entry.id === effectId);
    if (!effect?.flags?.eqrpg?.spellEffect) return null;

    const active = !!enabled;
    if (active && isSpellPoolDepleted(effect)) {
      throw new Error('This spell effect has ended because its temporary HP was depleted. Cast a new effect.');
    }
    if (active && (effect.duration?.expired || this.flags?.eqrpg?.expiredSpellEffects?.[effectId])) {
      throw new Error("This spell effect has expired. Cast a new effect instead of enabling it again.");
    }
    if ((!effect.disabled) === active) return effect;

    const flags = effect.flags.eqrpg;
    const tempHPGrant = Math.max(0, Number(flags.tempHPGrant) || 0);
    const tempHPRemaining = Math.max(0, Number(flags.tempHPRemaining ?? tempHPGrant) || 0);
    const statusIds = this._getSpellEffectStatusIds(effect);
    await effect.update({
      disabled: !active,
      statuses: statusIds,
      "flags.eqrpg.tempHPRemaining": tempHPRemaining,
      "flags.eqrpg.statusIds": statusIds,
    });

    if (effect.disabled !== !active) throw new Error("Effect state update was not confirmed; temporary HP was not changed.");
    if (tempHPGrant > 0 && hasConfirmedSpellTempHPGrant(this,effect) && !this.flags?.eqrpg?.expiredSpellEffects?.[effectId]) {
      const currentTemp = Math.max(0, Number(this.system.resources.hp.temp) || 0);
      const nextTemp = active ? currentTemp + tempHPRemaining : Math.max(0, currentTemp - tempHPRemaining);
      await this.update({ "system.resources.hp.temp": nextTemp });
    }

    await this._setTokenStatuses(statusIds, active);
    return effect;
  }

  async toggleSpellEffectEnabled(effectId) {
    const effect = this.effects.get?.(effectId) ?? this.effects.find((entry) => entry.id === effectId);
    if (!effect) return null;
    return this.setSpellEffectEnabled(effectId, !!effect.disabled);
  }

  async removeSpellEffect(effectId, fallbackStatusIds = []) {
    const effect = this.effects.get?.(effectId) ?? this.effects.find((entry) => entry.id === effectId);
    if (!effect?.flags?.eqrpg?.spellEffect) return false;

    const flags = effect.flags.eqrpg;
    let statusIds = [];
    // A canceled deletion must not spend the still-present effect's HP pool.
    await effect.delete();
    if (this.effects.find((entry) => entry.id === effectId)) {
      throw new Error("Spell effect deletion was not confirmed; temporary HP and token statuses were not changed.");
    }
    if (!effect.disabled && hasConfirmedSpellTempHPGrant(this,effect) && !this.flags?.eqrpg?.expiredSpellEffects?.[effectId]) {
      const tempHPRemaining = Math.max(0, Number(flags.tempHPRemaining ?? flags.tempHPGrant) || 0);
      if (tempHPRemaining > 0) {
        const currentTemp = Math.max(0, Number(this.system.resources.hp.temp) || 0);
        await this.update({ "system.resources.hp.temp": Math.max(0, currentTemp - tempHPRemaining) });
      }
      statusIds = this._getSpellEffectStatusIds(effect, fallbackStatusIds);
    }

    if (statusIds.length) await this._setTokenStatuses(statusIds, false);
    return true;
  }

  _getSpellEffectStatusIds(effect, fallbackStatusIds = []) {
    const flags = effect?.flags?.eqrpg ?? {};
    const stored = flags.statusIds ?? [...(effect?.statuses ?? [])];
    const ids = Array.isArray(stored) ? [...stored] : [stored];
    const fallback = Array.isArray(fallbackStatusIds) ? fallbackStatusIds : [fallbackStatusIds];
    ids.push(...fallback);

    const key = String(flags.effectKey ?? effect?.name ?? "").toLowerCase().replace(/^toggle\s+/, "");
    if (Number(flags.slowRank ?? 0) > 0) ids.push("slowed");
    if (["invisibility", "improved-invisibility", "improved invisibility"].includes(key)) ids.push("invisible");
    return [...new Set(ids.filter(Boolean))];
  }

  async _consumeSpellEffectTempHP(amount) {
    let remaining = Math.max(0, Number(amount) || 0);
    const updates = [];

    for (const effect of this.effects ?? []) {
      if (!remaining || !isEffectActive(effect) || !hasConfirmedSpellTempHPGrant(this,effect) || this.flags?.eqrpg?.expiredSpellEffects?.[effect.id] || !effect.flags?.eqrpg?.spellEffect) continue;
      const flags = effect.flags.eqrpg;
      const available = Math.max(0, Number(flags.tempHPRemaining ?? flags.tempHPGrant) || 0);
      if (!available) continue;

      const consumed = Math.min(available, remaining);
      updates.push({
        _id: effect.id,
        "flags.eqrpg.tempHPRemaining": available - consumed,
      });
      remaining -= consumed;
    }

    if (updates.length) {
      await this.updateEmbeddedDocuments("ActiveEffect", updates);
      for (const update of updates) {
        const effect = this.effects.find(entry => entry.id === update._id);
        if (effect?.flags?.eqrpg?.tempHPRemaining !== update["flags.eqrpg.tempHPRemaining"]) {
          throw new Error("Temporary-HP pool update was not confirmed. Review pools before applying damage again.");
        }
      }
    }
  }

  async normalizeSpellEffects() {
    const updates = [];
    let tempHPGrant = 0;
    for (const effect of this.effects ?? []) {
      const flags = effect.flags?.eqrpg ?? {};
      if (!flags.spellEffect || !Array.isArray(effect.changes) || !effect.changes.length) continue;
      const extracted = EQActor._extractSpellEffectBonuses(effect.changes);
      if (extracted.changes.length === effect.changes.length && !Object.keys(extracted.bonuses).length && !extracted.tempHP) continue;
      const bonuses = EQActor._mergeSpellEffectBonuses(flags.bonuses, extracted.bonuses);
      const previousGrant = Math.max(0, Number(flags.tempHPGrant) || 0);
      const previousRemaining = effect.disabled
        ? 0
        : Math.max(0, Number(flags.tempHPRemaining ?? previousGrant) || 0);
      updates.push({
        _id: effect.id,
        changes: extracted.changes,
        "flags.eqrpg.bonuses": bonuses,
        "flags.eqrpg.tempHPGrant": previousGrant + Math.max(0, extracted.tempHP),
        "flags.eqrpg.tempHPRemaining": previousRemaining + (effect.disabled ? 0 : Math.max(0, extracted.tempHP)),
      });
      if (!effect.disabled) tempHPGrant += Math.max(0, extracted.tempHP);
    }

    if (updates.length) await this.updateEmbeddedDocuments("ActiveEffect", updates);
    if (tempHPGrant > 0) {
      const currentTemp = Math.max(0, Number(this.system.resources.hp.temp) || 0);
      await this.update({ "system.resources.hp.temp": currentTemp + tempHPGrant });
    }
  }

  async _setTokenStatuses(statusIds = [], active = true) {
    const ids = Array.isArray(statusIds) ? statusIds.filter(Boolean) : [statusIds].filter(Boolean);
    if (!ids.length) return;
    const tokenDocs = this.getActiveTokens(false, true);
    for (const tokenDoc of tokenDocs) {
      for (const statusId of ids) {
        const tokenActor = tokenDoc.actor ?? this;
        const hasIt = tokenActor.statuses?.has(statusId)
          ?? tokenDoc.hasStatusEffect?.(statusId)
          ?? false;
        const supplied = [...(tokenActor.effects ?? [])].some(effect => isEffectActive(effect)
          && this._getSpellEffectStatusIds(effect).includes(statusId));
        const desired = active || supplied;
        if (hasIt !== desired) {
          if (tokenActor.toggleStatusEffect) {
            await tokenActor.toggleStatusEffect(statusId, { active: desired });
          } else if (tokenDoc.toggleActiveEffect) {
            const status = CONFIG.statusEffects?.find((entry) => entry.id === statusId) ?? { id: statusId };
            await tokenDoc.toggleActiveEffect(status, { active: desired });
          }
        }
      }
    }
  }

  async breakInvisibility(reason = "attack") {
    const breakFlag = reason === "cast" ? "breaksOnCast" : "breaksOnAttack";
    const known = new Set(['invisibility','improved-invisibility','invisibility-to-undead','invisibility-to-animals']);
    const effectsToRemove = this.effects.filter((effect) => {
      if (!isEffectActive(effect)) return false;
      const flags = effect.flags?.eqrpg ?? {};
      const key = String(flags.effectKey ?? effect.name ?? "").toLowerCase().replace(/^(toggle|apply)\s+/, '').replace(/\s+/g,'-');
      return flags[breakFlag] === true || known.has(key);
    });

    for (const effect of effectsToRemove) {
      if(effect.flags?.eqrpg?.spellEffect) await this.removeSpellEffect(effect.id);
      else {
        await effect.delete();
        if(this.effects.some(entry=>entry.id===effect.id)) throw new Error('Invisibility removal was not confirmed; the action stopped.');
      }
    }
    await this._setTokenStatuses(["invisible"], false);
  }

  getCombatEffectSummary() {
    const effects = this.effects ?? [];
    let manaPerRound = 0;
    for (const effect of effects) {
      if (!isEffectActive(effect)) continue;
      manaPerRound += Number(effect.flags?.eqrpg?.manaPerRound ?? 0) || 0;
    }
    return { manaPerRound };
  }

  async disarmPrimaryWeapon() {
    const weapon = this.items.find((item) => item.type === "weapon" && item.system.equipped)
      ?? this.items.find((item) => item.type === "weapon");
    if (!weapon) return null;
    await weapon.update({ "system.equipped": false });
    return weapon;
  }

  // ---------------------------------------------------------------------------
  // Faction Helpers
  // ---------------------------------------------------------------------------

  /**
   * Adjust the standing of a faction item by delta (+/- value).
   * @param {string} factionId  Item ID of the faction
   * @param {number} delta      Amount to add (can be negative)
   */
  async adjustFactionStanding(factionId, delta) {
    const faction = this.items.get(factionId);
    if (!faction || faction.type !== "faction") return;
    const current = faction.system.standing ?? 0;
    const clamped = Math.min(1500, Math.max(-1500, current + delta));
    await faction.update({ "system.standing": clamped });
  }

  /**
   * Regenerate HP over elapsed in-game hours.
   * Used by Iksar/Troll racial regeneration (1 HP/hour), not combat rounds.
   * @param {number} hours  Number of hours elapsed
   * @returns {number}      HP restored
   */
  async regenHP(hours = 1) {
    const rate = Math.max(0, Number(this.system.regenRate) || 0);
    if (rate <= 0) return;
    const cur = Number(this.system.resources.hp.value) || 0;
    const max = Number(this.system.resources.hp.max) || 0;
    if (cur >= max) return 0;
    const restored = Math.min(max - cur, Math.floor(rate * Math.max(0, Number(hours) || 0)));
    if (restored <= 0) return 0;
    await this.update({ "system.resources.hp.value": cur + restored });
    return restored;
  }

  async regenManaCombat() {
    const perRound = this.getCombatEffectSummary().manaPerRound ?? 0;
    if (perRound <= 0) return;
    const cur = this.system.resources.mana.value;
    const max = this.system.resources.mana.max;
    if (cur >= max) return;
    await this.update({ "system.resources.mana.value": Math.min(max, cur + perRound) });
  }

  /**
   * Paladin Lay on Hands — restore HP to a target equal to level × CHA mod.
   * @param {EQActor|null} targetActor  Target to heal; heals self if null/undefined.
   */

  // ---------------------------------------------------------------------------
  // Shadow Knight Lifetap
  // ---------------------------------------------------------------------------

  /**
   * Roll a Shadow Knight Lifetap drain.
   * Drains lifetapDice d6 HP from the targeted token's actor and heals self for the same amount.
   * @param {EQActor|null} targetActor  The actor to drain (required; warns if missing).
   */
  async rollLifetap(targetActor) {
    const lifetapDice = this.system.classFeatures?.lifetapDice ?? 0;
    if (!lifetapDice) {
      ui.notifications.warn(game.i18n.localize("EQRPG.NoLifetap"));
      return;
    }
    if (!targetActor) {
      ui.notifications.warn(game.i18n.localize("EQRPG.NoTargets"));
      return;
    }
    if(targetActor.isProtectedFromSpellLine?.('Lifetap')) {
      ui.notifications.warn(`${targetActor.name} is protected from the lifetap spell line by Rune.`);
      return;
    }

    const roll   = await new Roll(`${lifetapDice}d6`, this.getRollData()).evaluate();
    const amount = roll.total;

    await targetActor.applyDamage(amount);
    await this.applyHealing(amount);

    const content = `<div class="eq-chat-card eq-lifetap-card">`
      + this._buildActorCardHeader(`Lifetap`)
      + `<div class="eq-card-body">`
      + `<span class="eq-lifetap-drain">−${amount} HP </span>`
      + `<span class="eq-lifetap-target">${targetActor.name}</span>`
      + `<span class="eq-roll-arrow"> → </span>`
      + `<span class="eq-lifetap-heal">+${amount} HP self</span>`
      + `</div></div>`;

    await ChatMessage.create({
      speaker:  ChatMessage.getSpeaker({ actor: this }),
      content,
      rolls:    [roll],
      rollMode: game.settings.get("core", "rollMode"),
    });
    return roll;
  }

  // ---------------------------------------------------------------------------
  // Monk Unarmed Strike
  // ---------------------------------------------------------------------------

  /**
   * Roll a Monk unarmed strike — all iterative attacks using the unarmed damage die.
   * Uses STR modifier, BAB progression, and critical threat/confirmation identical
   * to a standard weapon attack.
   */
  async rollUnarmedStrike() {
    await this.breakInvisibility("attack");
    const unarmedDie  = this.system.classFeatures?.unarmedDamageDie ?? 4;
    const attackArray = this.system.combat?.attackArray ?? [this.system.combat?.bab ?? 0];
    const strMod      = this.system.abilities?.str?.mod ?? 0;
    const wisMod      = this.system.abilities?.wis?.mod ?? 0;
    const rollMode    = game.settings.get("core", "rollMode");
    const targets     = [...(game.user?.targets ?? [])];

    // Monks threaten crits on 20 unarmed (can be expanded by feats later)
    const critRange = 20;
    const critMult  = 2;

    const results = [];
    for (const iterBab of attackArray) {
      const totalBonus = iterBab + strMod;
      const roll       = await new Roll(`1d20 + ${totalBonus}`, this.getRollData()).evaluate();
      const natural    = roll.dice[0]?.results[0]?.result ?? 20;
      const isThreat   = natural >= critRange;

      let critConfirmed = false;
      let critRoll      = null;

      if (isThreat) {
        critRoll = await new Roll(`1d20 + ${totalBonus}`, this.getRollData()).evaluate();
        const targetAC = targets[0]?.actor?.system.combat?.ac?.value ?? 10;
        critConfirmed  = critRoll.total >= targetAC;
      }

      results.push({ roll, totalBonus, natural, isThreat, critConfirmed, critRoll, iterBab });
    }

    // Target badge row helper
    function buildTargetLine(roll, confirmed) {
      if (targets.length === 0) return "";
      const lines = targets.map(token => {
        const targetAC = token.actor?.system.combat?.ac?.value ?? 10;
        const hit      = roll.total >= targetAC;
        const css      = confirmed ? "eq-crit" : hit ? "eq-hit" : "eq-miss";
        const icon     = confirmed ? "✦" : hit ? "✓" : "✗";
        const label    = confirmed
          ? game.i18n.localize("EQRPG.CriticalHit")
          : hit ? game.i18n.localize("EQRPG.Hit") : game.i18n.localize("EQRPG.Miss");
        const targetName = targets.length > 1 ? ` ${token.name}` : "";
        return `<span class="${css} eq-badge">${icon} ${label}${targetName} (AC ${targetAC})</span>`;
      });
      return `<div class="eq-target-results">${lines.join("")}</div>`;
    }

    const critConfirmedAny = results.some(r => r.critConfirmed);
    let attackRowsHtml = "";
    for (let i = 0; i < results.length; i++) {
      const r    = results[i];
      const sign = r.totalBonus >= 0 ? "+" : "";
      const attackLabel = results.length > 1
        ? `${game.i18n.localize("EQRPG.Attack")} ${i + 1}`
        : game.i18n.localize("EQRPG.Attack");

      let statusHtml = "";
      if (r.isThreat && r.critConfirmed) {
        statusHtml = `<span class="eq-crit"> ✦ ${game.i18n.localize("EQRPG.CritConfirmed")} ×${critMult}</span>`;
      } else if (r.isThreat) {
        const confirmSign = r.totalBonus >= 0 ? "+" : "";
        statusHtml = `<span class="eq-threat"> ⚡ ${game.i18n.localize("EQRPG.CritThreat")}`
                   + ` → ${r.critRoll?.total} (${confirmSign}${r.totalBonus})</span>`
                   + `<span class="eq-miss"> ${game.i18n.localize("EQRPG.CritFailed")}</span>`;
      }
      const totalClass = i === 0 ? "attack-total" : "attack-total attack-total-extra";
      attackRowsHtml += `<div class="attack-line">`
        + `<span class="attack-label">${attackLabel}</span>`
        + `<span class="attack-bonus">${sign}${r.totalBonus}</span>`
        + `<span class="attack-arrow">→</span>`
        + `<span class="${totalClass}">${r.roll.total}</span>`
        + statusHtml
        + buildTargetLine(r.roll, r.critConfirmed)
        + `</div>`;
    }

    // Inline damage roll buttons
    const dmgSign     = strMod >= 0 ? "+" : "";
    const actorId     = this.id ?? "";
    const dmgFormula  = `1d${unarmedDie}${strMod >= 0 ? " + " + strMod : " - " + Math.abs(strMod)}`;
    const dmgBtnHtml  = `<div class="eq-attack-dmg-row">`
      + `<button class="eq-roll-dmg-btn" data-roll-damage-formula="${encodeURIComponent(dmgFormula)}" data-actor-id="${actorId}" data-crit-mult="1">`
      + `⚔ Roll Damage (1d${unarmedDie}${dmgSign}${strMod})</button>`
      + (critConfirmedAny
        ? ` <button class="eq-roll-dmg-btn eq-crit" data-roll-damage-formula="${encodeURIComponent("(" + dmgFormula + ") * " + critMult)}" data-actor-id="${actorId}" data-crit-mult="${critMult}">`
          + `✦ Crit ×${critMult}</button>`
        : "")
      + `</div>`;

    const cardHtml = `<div class="eq-chat-card eq-attack-card">`
      + this._buildActorCardHeader(`Unarmed Strike`)
      + `<div class="eq-card-body">${attackRowsHtml}</div>`
      + `<div class="eq-card-footer">1d${unarmedDie} unarmed · Crit 20/×${critMult} · WIS to AC +${wisMod}</div>`
      + dmgBtnHtml
      + `</div>`;

    await ChatMessage.create({
      speaker:  ChatMessage.getSpeaker({ actor: this }),
      content:  cardHtml,
      rolls:    results.map(r => r.roll),
      rollMode,
    });

    return results;
  }

  async layOnHands(targetActor) {
    if (this._layOnHandsPending) return;
    this._layOnHandsPending = true;
    try { return await this._useLayOnHands(targetActor); }
    finally { this._layOnHandsPending = false; }
  }

  async _useLayOnHands(targetActor) {
    const day = Math.floor((game.time?.worldTime ?? 0) / 86400);
    if (this.flags?.eqrpg?.layOnHandsDay === day) {
      ui.notifications.warn("Lay on hands has already been used today. The GM must advance world time to the next day before it refreshes.");
      return;
    }
    const target = targetActor ?? this;
    const improved = !!this.system.classFeatures?.improvedLayOnHands;
    const pool = improved ? Math.max(0, target.system.resources.hp.max - target.system.resources.hp.value)
      : (this.system.classFeatures?.layOnHandsPool ?? 0);
    if (pool <= 0) {
      ui.notifications.warn(game.i18n.localize("EQRPG.NoLayOnHands"));
      return;
    }
    await this.update({"flags.eqrpg.layOnHandsDay": day});
    if (this.flags?.eqrpg?.layOnHandsDay !== day) throw new Error("Daily use was not confirmed; no healing was applied.");
    // An ambiguous target write must not restore the daily use and allow duplicate healing.
    await target.applyHealing(pool);

    const isSelf = target === this;
    const targetLine = isSelf
      ? `<strong>${this.name}</strong>`
      : `<strong>${this.name}</strong> → <strong>${target.name}</strong>`;

    const content = `<div class="eq-chat-card eq-heal-card">`
      + this._buildActorCardHeader(`Lay on Hands`)
      + `<div class="eq-card-body">`
      + `<span class="eq-loh-pool">+${pool} HP</span>`
      + ` <span class="eq-roll-arrow">→</span> `
      + `<span class="eq-loh-target">${isSelf ? "self" : target.name}</span>`
      + `</div></div>`;

    await ChatMessage.create({
      speaker:  ChatMessage.getSpeaker({ actor: this }),
      content,
      rollMode: game.settings.get("core", "rollMode"),
    });
  }

  async rollHarmTouch(targetActor = null) {
    if (this._harmTouchPending) return null;
    this._harmTouchPending = true;
    try { return await this._useHarmTouch(targetActor); }
    finally { this._harmTouchPending = false; }
  }

  async _useHarmTouch(targetActor = null) {
    const day = Math.floor((game.time?.worldTime ?? 0) / 86400);
    if (this.flags?.eqrpg?.harmTouchDay === day) throw new Error("Harm touch has already been used today.");
    const damage = this.system.classFeatures?.harmTouchDamage ?? 0;
    const dc = this.system.classFeatures?.harmTouchDC ?? 0;
    const leechTouch = !!this.system.classFeatures?.leechTouch;
    if (damage <= 0) {
      ui.notifications.warn(game.i18n.localize("EQRPG.NoHarmTouch"));
      return null;
    }

    const target = targetActor ?? [...(game.user?.targets ?? [])][0]?.actor ?? null;
    if (!target) {
      ui.notifications.warn(game.i18n.localize("EQRPG.NoTargets"));
      return null;
    }
    const targetAC = target.system?.combat?.ac;
    const touchAC = target.type === "character"
      ? targetAC.value - targetAC.armor - targetAC.shield - targetAC.natural
      : targetAC?.touch;
    if (!Number.isFinite(touchAC)) throw new Error("The GM must set the target's touch AC before resolving harm touch.");
    await this.breakInvisibility("attack");
    const attackBonus = (this.system.combat?.bab ?? 0) + (this.system.abilities?.str?.mod ?? 0) + (this.system.combat?.attackBonus ?? 0);
    const attackRoll = await new Roll(`1d20 + ${attackBonus}`, this.getRollData?.() ?? {}).evaluate();
    const natural = attackRoll.dice?.[0]?.total;
    const hit = natural === 20 || (natural !== 1 && attackRoll.total >= touchAC);
    if (!hit) {
      await ChatMessage.create({speaker:ChatMessage.getSpeaker({actor:this}),content:"Harm touch missed. Daily use was not spent.",rolls:[attackRoll]});
      return attackRoll;
    }
    await this.update({"flags.eqrpg.harmTouchDay": day});
    if (this.flags?.eqrpg?.harmTouchDay !== day) throw new Error("Daily use was not confirmed; no harm-touch damage was applied.");
    const saveBonus = target.system?.combat?.saves?.fortitude?.value ?? 0;
    const saveRoll = await new Roll(`1d20 + ${saveBonus}`, target.getRollData?.() ?? {}).evaluate();
    const saved = saveRoll.total >= dc;
    const appliedDamage = saved ? Math.floor(damage / 2) : damage;

    await target.applyDamage(appliedDamage);
    if (leechTouch && appliedDamage > 0) {
      await this.applyHealing(appliedDamage);
    }

    const content = `<div class="eq-chat-card eq-attack-card">`
      + this._buildActorCardHeader(`Harm Touch`)
      + `<div class="eq-card-body">`
      + `<div class="attack-line">`
      + `<span class="attack-label">${target.name}</span>`
      + `<span class="attack-bonus">DC ${dc}</span>`
      + `<span class="attack-arrow">→</span>`
      + `<span class="attack-total">${saveRoll.total}</span>`
      + `<span class="eq-badge ${saved ? "eq-hit" : "eq-miss"}">${game.i18n.localize(saved ? "EQRPG.SaveSucceeded" : "EQRPG.SaveFailed")}</span>`
      + `</div>`
      + `<div class="eq-effect-text">${game.i18n.format("EQRPG.HarmTouchResult", {
        name: target.name,
        amount: appliedDamage,
      })}</div>`
      + (leechTouch
        ? `<div class="eq-effect-text">${game.i18n.format("EQRPG.LeechTouchResult", { amount: appliedDamage })}</div>`
        : "")
      + `</div></div>`;

    await ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this }),
      content,
      rolls: [attackRoll, saveRoll],
      rollMode: game.settings.get("core", "rollMode"),
    });

    return saveRoll;
  }

  // Apply a completed rest period declared by the user; world time is not advanced.
  async restShort() {return this._applyCompletedRest(1);}
  async restLong() {return this._applyCompletedRest(8);}

  async _applyCompletedRest(hours) {
    if(!this.isOwner || this.type!=='character') throw new Error('Apply rest to a character you own.');
    if(![1,8].includes(hours)) throw new Error('Unsupported rest period.');
    if(this._restPending) throw new Error('Rest is already being applied.');
    if(this.system.resources.hp.value<=-10) throw new Error('Rest cannot restore a dead character.');
    if(game.combat?.started && [...(game.combat.combatants??[])].some(c=>c.actor?.uuid===this.uuid)) throw new Error('This character is in combat. Apply rest after the rest period is complete.');
    this._restPending=true;
    try {
      const slots=this._getSlotArray();
      const hp=this.system.resources.hp,mana=this.system.resources.mana;
      const hpRate=Math.max(0,Number(this.system.regenRate)||0);
      const manaRate=Math.max(0,Number(this.system.manaRegen)||0);
      if(![hp.value,hp.max,mana.value,mana.max,hpRate,manaRate].every(Number.isFinite)) throw new Error('Invalid rest recovery data.');
      const hpGain=Math.max(0,Math.min(hp.max-hp.value,Math.floor(hpRate*hours)));
      const manaGain=Math.max(0,Math.min(mana.max-mana.value,Math.floor(manaRate*hours)));
      const nextSlots=slots.map(slot=>({...slot,cooldownRemaining:Math.max(0,slot.cooldownRemaining-hours*600)}));
      const receipt={id:foundry.utils.randomID(),hours,hpBefore:hp.value,manaBefore:mana.value,hpAfter:hp.value+hpGain,manaAfter:mana.value+manaGain};
      await this.update({'system.resources.hp.value':receipt.hpAfter,'system.resources.mana.value':receipt.manaAfter,'system.spellSlots':nextSlots,'flags.eqrpg.lastRest':receipt});
      if(this.flags?.eqrpg?.lastRest?.id!==receipt.id || this.system.resources.hp.value!==receipt.hpAfter || this.system.resources.mana.value!==receipt.manaAfter || JSON.stringify(this._getSlotArray())!==JSON.stringify(nextSlots)) throw new Error('Rest update was not confirmed. Review resources before applying rest again.');
      try {await ChatMessage.create({
        speaker:ChatMessage.getSpeaker({actor:this}),
        content:`<div class="eq-chat-card eq-rest-card">${this._buildActorCardHeader(`Completed ${hours}-hour rest`)}<div class="eq-card-body">+${manaGain} MP; +${hpGain} HP from fast recovery. Natural healing is tracked separately by days. World time was not advanced.</div></div>`,
        rollMode:game.settings.get('core','rollMode')
      });} catch(error) {ui.notifications.warn('Rest was applied, but its chat announcement failed. Do not repeat the same rest.');}
      return {hpGain,manaGain,hours};
    } finally {this._restPending=false;}
  }
}
