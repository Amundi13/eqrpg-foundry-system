import { getValidAttackSound, previewAttackSound } from "../helpers/audio.mjs";

/**
 * Extend the base Actor for EverQuest RPG.
 */
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
    if (this.type !== "npc") return [];

    const attackText = String(this.system?.statblock?.attacks ?? "").trim();
    const damageText = String(this.system?.statblock?.damage ?? "").trim();
    const attackSounds = this.getFlag("eqrpg", "attackSounds") ?? {};
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
      const attackSound = String(attackSounds[normalized] ?? "").trim();
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
        attackSound,
      });
    }

    return profiles;
  }

  getNPCSpecialAbilities() {
    if (this.type !== "npc") return [];

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
      sound: getValidAttackSound(profile.attackSound) || undefined,
    });
    return roll;
  }

  async previewNPCStatblockAttackSound(attackId) {
    const profile = this.getNPCStatblockAttacks().find((entry) => entry.id === attackId);
    return previewAttackSound(profile?.attackSound);
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
    const sourceSlots = this.toObject().system?.spellSlots;
    if (Array.isArray(sourceSlots)) {
      // Ensure exactly 8 entries, cloning each as a plain object
      const slots = sourceSlots.map(s => ({
        itemId:            String(s?.itemId ?? ""),
        cooldownRemaining: Number(s?.cooldownRemaining ?? 0),
      }));
      while (slots.length < 8) slots.push({ itemId: "", cooldownRemaining: 0 });
      return slots.slice(0, 8);
    }
    // Data was corrupted (POJO from a bad previous update) — return clean slate
    return Array.from({ length: 8 }, () => ({ itemId: "", cooldownRemaining: 0 }));
  }

  // ---------------------------------------------------------------------------
  // Spell Casting
  // ---------------------------------------------------------------------------

  async castSpell(slotIndex) {
    const slots = this._getSlotArray();
    const slot  = slots[slotIndex];
    if (!slot?.itemId) return;

    const spell = this.items.get(slot.itemId);
    if (!spell) return;

    const manaCost    = spell.system.manaCost ?? 0;
    const currentMana = this.system.resources.mana.value;

    if (currentMana < manaCost) {
      ui.notifications.warn(game.i18n.localize("EQRPG.NotEnoughMana"));
      return;
    }

    // Deduct mana (simple scalar field — dot path is fine)
    await this.update({ "system.resources.mana.value": Math.max(0, currentMana - manaCost) });

    // Apply recast cooldown via full-array replacement
    const recastTime = spell.system.recastTime ?? 0;
    if (recastTime > 0) {
      const refreshed = this._getSlotArray();           // re-fetch after mana update
      refreshed[slotIndex].cooldownRemaining = recastTime;
      await this.update({ "system.spellSlots": refreshed });
    }

    await spell.castSpell(this);
  }

  async memorizeSpell(spellId, slotIndex) {
    const slots = this._getSlotArray();
    slots[slotIndex] = { itemId: spellId, cooldownRemaining: 0 };
    await this.update({ "system.spellSlots": slots });
  }

  async unmemorizeSpell(slotIndex) {
    const slots = this._getSlotArray();
    slots[slotIndex] = { itemId: "", cooldownRemaining: 0 };
    await this.update({ "system.spellSlots": slots });
  }

  async recoverSpells() {
    const slots    = this._getSlotArray();
    const newSlots = slots.map(s => ({ itemId: s.itemId, cooldownRemaining: 0 }));
    const hasCD    = slots.some(s => s.cooldownRemaining > 0);
    await this.update({ "system.spellSlots": newSlots });
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

  /**
   * Level up the character: increment level, roll the hit die for HP,
   * then recalculate all derived stats.
   */
  async levelUp() {
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

    // Roll hit die for HP gain (minimum 1)
    const hpRoll = await new Roll(`1d${hitDie}`).evaluate();
    const hpGain = Math.max(1, hpRoll.total + conMod);

    await this.update({
      "system.details.level":       newLevel,
      "system.resources.hp.value":  Math.min(system.resources.hp.value + hpGain, system.resources.hp.max + hpGain),
    });

    const content = `<div class="eq-chat-card eq-levelup-card">`
      + this._buildActorCardHeader(`Level Up — Now Level ${newLevel}`)
      + `<div class="eq-card-body">`
      + `<div class="eq-levelup-gain">+${hpGain} HP</div>`
      + `<div class="eq-levelup-detail">1d${hitDie} = ${hpRoll.total} ${conSign}${conMod} CON</div>`
      + `</div></div>`;

    await ChatMessage.create({
      speaker:  ChatMessage.getSpeaker({ actor: this }),
      content,
      rolls:    [hpRoll],
      rollMode: game.settings.get("core", "rollMode"),
    });
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
    await this.update({
      "system.resources.hp.temp": newTemp,
      "system.resources.hp.value": newValue,
    });
    return newValue;
  }

  /**
   * Add healing to current HP (cap at max).
   * @param {number} amount  HP to restore
   * @returns {number}       New HP value
   */
  async applyHealing(amount) {
    const healing  = Math.max(0, Math.floor(Number(amount) || 0));
    const current  = Number(this.system.resources.hp.value) || 0;
    const max      = Number(this.system.resources.hp.max) || 0;
    const newValue = Math.min(max, current + healing);
    await this.update({ "system.resources.hp.value": newValue });
    return newValue;
  }

  async toggleSpellEffect(effectData = {}) {
    const label = String(effectData.label ?? "").trim();
    if (!label) return null;
    const effectKey = String(effectData.effectKey ?? label.toLowerCase()).trim();
    const existing = this.effects.find((effect) => effect.name === label || effect.flags?.eqrpg?.effectKey === effectKey);
    if (existing) {
      const tempHPGrant = Math.max(0, Number(existing.flags?.eqrpg?.tempHPGrant) || 0);
      await existing.delete();
      await this._setTokenStatuses(effectData.statuses ?? effectData.statusIds ?? [], false);
      if (tempHPGrant > 0) {
        const currentTemp = Math.max(0, Number(this.system.resources.hp.temp) || 0);
        await this.update({ "system.resources.hp.temp": Math.max(0, currentTemp - tempHPGrant) });
      }
      return null;
    }

    const extracted = EQActor._extractSpellEffectBonuses(effectData.changes ?? []);
    const existingBonuses = effectData.flags?.eqrpg?.bonuses ?? {};
    const bonuses = EQActor._mergeSpellEffectBonuses(existingBonuses, extracted.bonuses);
    const changes = extracted.changes;
    const createData = {
      name: label,
      icon: effectData.icon || "icons/svg/aura.svg",
      origin: effectData.origin || this.uuid,
      duration: effectData.duration ?? {},
      disabled: false,
      changes,
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
          breaksOnAttack: !!effectData.breaksOnAttack,
          breaksOnCast: !!effectData.breaksOnCast,
        },
      }),
    };

    const [created] = await this.createEmbeddedDocuments("ActiveEffect", [createData]);
    if (extracted.tempHP > 0) {
      const currentTemp = Math.max(0, Number(this.system.resources.hp.temp) || 0);
      await this.update({ "system.resources.hp.temp": currentTemp + extracted.tempHP });
    }
    await this._setTokenStatuses(effectData.statuses ?? effectData.statusIds ?? [], true);
    return created ?? null;
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
      updates.push({
        _id: effect.id,
        changes: extracted.changes,
        "flags.eqrpg.bonuses": bonuses,
        "flags.eqrpg.tempHPGrant": Math.max(0, Number(flags.tempHPGrant) || 0) + Math.max(0, extracted.tempHP),
      });
      tempHPGrant += Math.max(0, extracted.tempHP);
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
        if (hasIt !== active && tokenActor.toggleStatusEffect) {
          await tokenActor.toggleStatusEffect(statusId, { active });
        }
      }
    }
  }

  async breakInvisibility(reason = "attack") {
    const breakFlag = reason === "cast" ? "breaksOnCast" : "breaksOnAttack";
    const effectsToRemove = this.effects.filter((effect) => {
      if (effect.disabled) return false;
      const flags = effect.flags?.eqrpg ?? {};
      const key = String(flags.effectKey ?? effect.name ?? "").toLowerCase();
      return flags[breakFlag] || key.includes("invisibility");
    });

    if (effectsToRemove.length) {
      await this.deleteEmbeddedDocuments("ActiveEffect", effectsToRemove.map((effect) => effect.id));
    }
    await this._setTokenStatuses(["invisible"], false);
  }

  getCombatEffectSummary() {
    const effects = this.effects ?? [];
    let manaPerRound = 0;
    for (const effect of effects) {
      if (effect.disabled) continue;
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
    const pool = this.system.classFeatures?.layOnHandsPool ?? 0;
    if (pool <= 0) {
      ui.notifications.warn(game.i18n.localize("EQRPG.NoLayOnHands"));
      return;
    }
    const target = targetActor ?? this;
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
    await this.breakInvisibility("attack");

    const saveBonus = target.system?.combat?.saves?.will?.value ?? 0;
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
      rolls: [saveRoll],
      rollMode: game.settings.get("core", "rollMode"),
    });

    return saveRoll;
  }

  /**
   * Short rest — sit and meditate for ~1 hour.
   * Restores manaRegen × 10 mana and racial regeneration for 1 hour.
   * Does not clear cooldowns.
   */
  async restShort() {
    const manaRegenRate = Math.max(0, Number(this.system.manaRegen) || 0);
    const hpRegenRate = Math.max(0, Number(this.system.regenRate) || 0);
    if (manaRegenRate <= 0 && hpRegenRate <= 0) {
      ui.notifications.info(game.i18n.localize("EQRPG.NoRestRecovery"));
      return;
    }

    const currentMana = Number(this.system.resources.mana.value) || 0;
    const maxMana = Number(this.system.resources.mana.max) || 0;
    const manaRestored = manaRegenRate > 0 ? Math.min(maxMana - currentMana, manaRegenRate * 10) : 0;

    const currentHP = Number(this.system.resources.hp.value) || 0;
    const maxHP = Number(this.system.resources.hp.max) || 0;
    const hpRestored = hpRegenRate > 0 ? Math.min(maxHP - currentHP, hpRegenRate) : 0;

    if (manaRestored <= 0 && hpRestored <= 0) {
      ui.notifications.info(game.i18n.localize("EQRPG.ResourcesAlreadyFull"));
      return;
    }

    const update = {};
    if (manaRestored > 0) update["system.resources.mana.value"] = currentMana + manaRestored;
    if (hpRestored > 0) update["system.resources.hp.value"] = currentHP + hpRestored;
    await this.update(update);

    const parts = [];
    if (manaRestored > 0) parts.push(`+${manaRestored} MP`);
    if (hpRestored > 0) parts.push(`+${hpRestored} HP`);
    const details = [];
    if (manaRestored > 0) details.push(`${currentMana + manaRestored} / ${maxMana} MP`);
    if (hpRestored > 0) details.push(`${currentHP + hpRestored} / ${maxHP} HP`);

    const content = `<div class="eq-chat-card eq-rest-card">`
      + this._buildActorCardHeader(`Short Rest — Meditation`)
      + `<div class="eq-card-body">`
      + `<span class="eq-rest-val">${parts.join(" & ")}</span>`
      + ` <span class="eq-rest-detail">${details.join(" | ")}</span>`
      + `</div></div>`;

    await ChatMessage.create({
      speaker:  ChatMessage.getSpeaker({ actor: this }),
      content,
      rollMode: game.settings.get("core", "rollMode"),
    });
  }

  /**
   * Long rest — full night of rest.
   * Restores HP and mana to max, clears all spell cooldowns.
   */
  async restLong() {
    const hpMax   = this.system.resources.hp.max;
    const manaMax = this.system.resources.mana.max;
    const slots   = this._getSlotArray().map(s => ({ itemId: s.itemId, cooldownRemaining: 0 }));

    await this.update({
      "system.resources.hp.value":   hpMax,
      "system.resources.mana.value": manaMax,
      "system.spellSlots":           slots,
    });

    const content = `<div class="eq-chat-card eq-rest-card">`
      + this._buildActorCardHeader(`Full Rest`)
      + `<div class="eq-card-body">`
      + `<span class="eq-rest-val">${hpMax} HP &amp; ${manaMax} MP</span>`
      + ` <span class="eq-rest-detail">Fully restored. All cooldowns cleared.</span>`
      + `</div></div>`;

    await ChatMessage.create({
      speaker:  ChatMessage.getSpeaker({ actor: this }),
      content,
      rollMode: game.settings.get("core", "rollMode"),
    });
  }
}
