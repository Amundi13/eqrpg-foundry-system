/**
 * Extend the base Item for EverQuest RPG.
 */
export class EQItem extends Item {

  static _DAMAGE_SIZE_STEPS = [
    "1",
    "1d2",
    "1d3",
    "1d4",
    "1d6",
    "1d8",
    "1d10",
    "2d6",
    "2d8",
    "3d6",
    "3d8",
    "4d6",
    "4d8",
    "6d6",
    "6d8",
    "8d6",
    "8d8",
    "12d6",
  ];

  /** @override */
  getRollData() {
    const data = super.getRollData();
    if (this.actor) {
      data.actor = this.actor.getRollData();
    }
    return data;
  }

  _getPropertySet() {
    return new Set((this.system.properties ?? []).map((prop) => String(prop).toLowerCase()));
  }

  _hasProperty(prop) {
    return this._getPropertySet().has(String(prop).toLowerCase());
  }

  _getAmmoType() {
    const ammoProp = [...this._getPropertySet()].find((prop) => prop.startsWith("ammo:"));
    return ammoProp ? ammoProp.slice(5) : "";
  }

  _isProjectileWeapon() {
    return this._hasProperty("projectile");
  }

  _isThrownWeapon() {
    return this._hasProperty("thrown") || this._hasProperty("volley");
  }

  _isNet() {
    return this.type === "weapon" && (this.name === "Net" || (this._hasProperty("entangle") && this._hasProperty("ranged-touch")));
  }

  _isShieldBash() {
    return this.type === "armor" && this.system.type === "shield" && this.system.shieldCategory !== "tower";
  }

  _getShieldBashProfile() {
    return {
      damage: "1d4",
      damageType: "bludgeoning",
      critRange: 20,
      critMult: 2,
      label: `${this.name} Bash`,
    };
  }

  _getActorSize() {
    return String(this.actor?.system?.details?.size ?? "medium").toLowerCase();
  }

  _getBaseItemSize() {
    return String(this.system?.size ?? "medium").toLowerCase();
  }

  _adjustDamageForSize(damage = "") {
    const formula = String(damage ?? "").trim();
    if (!formula) return formula;
    if (this.type !== "weapon" || !this.system?.autoScaleDamage) return formula;

    const match = formula.match(/^(\d+d\d+)(.*)$/i);
    if (!match) return formula;

    const [, dice, suffix] = match;
    const sizeOrder = CONFIG.EQRPG?.sizeOrder ?? [];
    const baseIndex = sizeOrder.indexOf(this._getBaseItemSize());
    const actorIndex = sizeOrder.indexOf(this._getActorSize());
    const stepIndex = EQItem._DAMAGE_SIZE_STEPS.indexOf(dice.toLowerCase());
    if (baseIndex < 0 || actorIndex < 0 || stepIndex < 0) return formula;

    const shift = actorIndex - baseIndex;
    const adjustedIndex = Math.max(0, Math.min(EQItem._DAMAGE_SIZE_STEPS.length - 1, stepIndex + shift));
    return `${EQItem._DAMAGE_SIZE_STEPS[adjustedIndex]}${suffix ?? ""}`;
  }

  getDisplayDamage() {
    const profile = this._resolveAttackProfile();
    return this._adjustDamageForSize(profile.damage || "");
  }

  _resolveAttackProfile() {
    if (this._isShieldBash()) {
      const bash = this._getShieldBashProfile();
      return {
        name: bash.label,
        damage: bash.damage,
        damageType: bash.damageType,
        critRange: bash.critRange,
        critMult: bash.critMult,
        delay: 5,
        range: 0,
        isShieldBash: true,
      };
    }

    return {
      name: this.name,
      damage: this.system.damage || "1d4",
      damageType: this.system.damageType ?? "",
      critRange: this.system.critRange ?? 20,
      critMult: this.system.critMult ?? 2,
      delay: this.system.delay ?? 4,
      range: this.system.range ?? 0,
      isShieldBash: false,
    };
  }

  _getActorAbilityValue(actor, key) {
    const sourceAbility = actor?.toObject?.()?.system?.abilities?.[key];
    if (sourceAbility) {
      if (Number.isFinite(sourceAbility.value)) return sourceAbility.value;
      const total = Number((sourceAbility.base ?? 0) + (sourceAbility.racial ?? 0) + (sourceAbility.misc ?? 0));
      if (Number.isFinite(total) && total > 0) return total;
    }

    const rollAbility = actor?.getRollData?.()?.abilities?.[key];
    if (rollAbility && Number.isFinite(rollAbility.value)) return rollAbility.value;

    const ability = actor?.system?.abilities?.[key];
    if (!ability) return 10;
    if (Number.isFinite(ability.value)) return ability.value;
    return Number((ability.base ?? 0) + (ability.racial ?? 0) + (ability.misc ?? 0)) || 10;
  }

  _getActorAbilityMod(actor, key) {
    const sourceAbility = actor?.toObject?.()?.system?.abilities?.[key];
    if (sourceAbility) {
      if (Number.isFinite(sourceAbility.mod)) return sourceAbility.mod;
      const total = Number((sourceAbility.value ?? ((sourceAbility.base ?? 0) + (sourceAbility.racial ?? 0) + (sourceAbility.misc ?? 0)))) || 10;
      return Math.floor((total - 10) / 2);
    }

    const rollAbility = actor?.getRollData?.()?.abilities?.[key];
    if (rollAbility && Number.isFinite(rollAbility.mod)) return rollAbility.mod;

    const ability = actor?.system?.abilities?.[key];
    if (!ability) return 0;
    if (Number.isFinite(ability.mod)) return ability.mod;
    const total = this._getActorAbilityValue(actor, key);
    return Math.floor((total - 10) / 2);
  }

  _getAttackAbilityMod(actor) {
    const range = this._resolveAttackProfile().range ?? 0;
    const isRanged = range > 0;
    if (isRanged) return this._getActorAbilityMod(actor, "dex");

    const strMod = this._getActorAbilityMod(actor, "str");
    const dexMod = this._getActorAbilityMod(actor, "dex");
    if (this._hasProperty("finesse")) return Math.max(strMod, dexMod);
    return strMod;
  }

  _getDamageAbilityMod(actor) {
    const strMod = this._getActorAbilityMod(actor, "str");
    if (this._isShieldBash()) return strMod;
    if (this._isThrownWeapon()) {
      if (this.name === "Shuriken") return 0;
      return strMod;
    }
    if (this._isProjectileWeapon()) {
      if (this._hasProperty("strength-rated")) return strMod;
      return Math.min(0, strMod);
    }
    return strMod;
  }

  _findAmmoItem(actor, ammoType) {
    if (!actor || !ammoType) return null;
    const normalized = String(ammoType).toLowerCase();
    return actor.items.find((item) =>
      item.type === "equipment"
      && (item.system.itemCategory === "ammo" || item.system.ammoType)
      && String(item.system.ammoType ?? "").toLowerCase() === normalized
      && (item.system.quantity ?? 0) > 0
    ) ?? null;
  }

  async _consumeAmmo(actor, count = 1) {
    const ammoType = this._getAmmoType();
    if (!ammoType) return null;

    const ammoItem = this._findAmmoItem(actor, ammoType);
    if (!ammoItem) {
      ui.notifications.warn(game.i18n.format("EQRPG.NoAmmoAvailable", {
        weapon: this.name,
        ammo: ammoType,
      }));
      return false;
    }

    const quantity = ammoItem.system.quantity ?? 0;
    if (quantity < count) {
      ui.notifications.warn(game.i18n.format("EQRPG.NotEnoughAmmo", {
        weapon: this.name,
        ammo: ammoItem.name,
      }));
      return false;
    }

    await ammoItem.update({ "system.quantity": quantity - count });
    return ammoItem;
  }

  async rollCombatManeuver(kind = "trip") {
    if (!this.actor) return null;
    const supported = new Set(["trip", "disarm"]);
    if (!supported.has(kind)) return null;
    if (!(this._hasProperty(kind) || this._isShieldBash())) return null;

    const actor = this.actor;
    const attackArray = actor.system.combat?.attackArray ?? [actor.system.combat?.bab ?? 0];
      const totalBonus = (attackArray[0] ?? 0)
      + this._getAttackAbilityMod(actor)
      + (actor.system?.combat?.attackBonus ?? 0)
      + (this.system.attackBonus ?? 0)
      + (this._hasProperty(kind) ? 2 : 0);
    const roll = await new Roll(`1d20 + ${totalBonus}`, actor.getRollData()).evaluate();
    const targets = [...(game.user?.targets ?? [])];
    const targetResults = targets.map((target) => {
      const targetActor = target.actor;
      const targetAttack = targetActor?.system?.combat?.attackArray?.[0] ?? targetActor?.system?.combat?.bab ?? 0;
      const targetStr = this._getActorAbilityMod(targetActor, "str");
      const targetDex = this._getActorAbilityMod(targetActor, "dex");
      const defense = targetAttack + Math.max(targetStr, targetDex) + (targetActor?.system?.combat?.attackBonus ?? 0);
      const success = roll.total >= defense;
      return { target, defense, success };
    });
    const targetHtml = targetResults.length
      ? `<div class="eq-target-results">${targetResults.map((result) =>
        `<span class="eq-badge ${result.success ? "eq-hit" : "eq-miss"}">`
        + `${result.target.name}: ${roll.total} vs ${result.defense} `
        + `(${game.i18n.localize(result.success ? "EQRPG.ManeuverSuccess" : "EQRPG.ManeuverFailed")})`
        + `</span>`).join("")}</div>`
      : `<div class="eq-effect-text">${game.i18n.localize("EQRPG.NoSpecificTarget")}</div>`;
    const content = `<div class="eq-chat-card eq-skill-card">`
      + EQItem._buildCardHeader(
        this.img || actor.img,
        actor.name,
        `<strong>${kind === "trip" ? game.i18n.localize("EQRPG.TripAttack") : game.i18n.localize("EQRPG.DisarmAttempt")}</strong> with ${this.name}`,
        false,
      )
      + `<div class="eq-card-body">`
      + targetHtml
      + `</div></div>`;

    await roll.toMessage({
      speaker: actor ? ChatMessage.getSpeaker({ actor }) : undefined,
      flavor: content,
      rollMode: game.settings.get("core", "rollMode"),
    });

    if (kind === "trip") {
      const successfulTargets = targetResults.filter((result) => result.success).map((result) => result.target);
      const pronePanel = EQItem._buildTargetedStatusPanel(
        successfulTargets,
        "prone",
        game.i18n.localize("EQRPG.ToggleProne"),
        game.i18n.localize("EQRPG.ToggleProne"),
      );
      if (pronePanel) {
        await ChatMessage.create({
          speaker: actor ? ChatMessage.getSpeaker({ actor }) : undefined,
          content: pronePanel,
          rollMode: game.settings.get("core", "rollMode"),
        });
      }
    }
    if (kind === "disarm") {
      const successfulTargets = targetResults.filter((result) => result.success).map((result) => result.target);
      const disarmPanel = EQItem._buildDisarmPanel(successfulTargets);
      if (disarmPanel) {
        await ChatMessage.create({
          speaker: actor ? ChatMessage.getSpeaker({ actor }) : undefined,
          content: disarmPanel,
          rollMode: game.settings.get("core", "rollMode"),
        });
      }
    }
    return roll;
  }

  // ---------------------------------------------------------------------------
  // Chat Card Helpers
  // ---------------------------------------------------------------------------

  /**
   * Build the standard card header HTML (icon + actor name + action line).
   * @param {string}  iconSrc     URL of the icon/portrait image
   * @param {string}  actorName   Speaker name
   * @param {string}  actionHtml  Inner HTML for the action line
   * @param {boolean} isPortrait  Use portrait style vs item icon style
   * @returns {string}
   */
  static _buildCardHeader(iconSrc, actorName, actionHtml, isPortrait = false) {
    const imgClass = isPortrait ? "eq-card-portrait" : "eq-card-icon";
    return `<div class="eq-card-header">`
      + `<img src="${iconSrc}" class="${imgClass}" />`
      + `<div class="eq-card-title">`
      + `<span class="eq-card-actor">${actorName}</span>`
      + `<span class="eq-card-action">${actionHtml}</span>`
      + `</div>`
      + `</div>`;
  }

  /**
   * Build the "Apply / ½ / ×2" damage panel HTML for chat messages.
   * @param {number} total  Full damage amount
   * @returns {string}      HTML string
   */
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

  /**
   * Build the "Apply Healing" panel HTML for chat messages.
   * @param {number} total  Heal amount
   * @returns {string}      HTML string
   */
  static _buildApplyHealPanel(total) {
    return `<div class="eq-apply-panel eq-heal-panel">`
      + `<span class="eq-apply-label">${game.i18n.localize("EQRPG.ApplyHealTo")}:</span>`
      + `<div class="eq-apply-btns">`
      + `<button class="eq-apply-btn eq-apply-heal" data-apply-heal="${total}"`
      + ` title="${game.i18n.localize("EQRPG.ApplyHeal")}">💚 ${total} HP</button>`
      + `</div></div>`;
  }

  static _buildTargetedDamagePanel(targets, total, options = {}) {
    const halfAmount = Number.isFinite(options.halfAmount) ? options.halfAmount : Math.floor(total / 2);
    const doubleAmount = Number.isFinite(options.doubleAmount) ? options.doubleAmount : total * 2;
    const validTargets = targets.filter((target) => target?.actor?.uuid);
    const showNames = validTargets.length > 1;
    const rows = validTargets
      .map((target) => `<div class="eq-apply-target-row">`
        + (showNames ? `<span class="eq-apply-target-name">${target.name}</span>` : "")
        + `<div class="eq-apply-btns">`
        + `<button class="eq-apply-btn eq-apply-full" data-apply-damage-uuid="${target.actor.uuid}" data-apply-damage="${total}">`
        + `${game.i18n.localize("EQRPG.Apply")} ${total}</button>`
        + `<button class="eq-apply-btn eq-apply-half" data-apply-damage-uuid="${target.actor.uuid}" data-apply-damage="${halfAmount}">`
        + `1/2 ${halfAmount}</button>`
        + `<button class="eq-apply-btn eq-apply-double" data-apply-damage-uuid="${target.actor.uuid}" data-apply-damage="${doubleAmount}">`
        + `x2 ${doubleAmount}</button>`
        + `</div>`
        + `</div>`)
      .join("");

    if (!rows) return "";
    return `<div class="eq-apply-panel eq-dmg-panel eq-targeted-panel">`
      + `<span class="eq-apply-label">${game.i18n.localize("EQRPG.ApplyPerTarget")}:</span>`
      + rows
      + `</div>`;
  }

  static _buildTargetedHealPanel(targets, total) {
    const validTargets = targets.filter((target) => target?.actor?.uuid);
    const showNames = validTargets.length > 1;
    const rows = validTargets
      .map((target) => `<div class="eq-apply-target-row">`
        + (showNames ? `<span class="eq-apply-target-name">${target.name}</span>` : "")
        + `<div class="eq-apply-btns">`
        + `<button class="eq-apply-btn eq-apply-heal" data-apply-heal-uuid="${target.actor.uuid}" data-apply-heal="${total}">`
        + `${game.i18n.localize("EQRPG.Apply")} ${total} HP</button>`
        + `</div>`
        + `</div>`)
      .join("");

    if (!rows) return "";
    return `<div class="eq-apply-panel eq-heal-panel eq-targeted-panel">`
      + `<span class="eq-apply-label">${game.i18n.localize("EQRPG.ApplyPerTarget")}:</span>`
      + rows
      + `</div>`;
  }

  static _buildSpellTransferHealPanel(spell, total, context = {}) {
    const text = `${spell.system.effect ?? ""} ${spell.system.description ?? ""}`;
    const transfersToCaster = /transfers? (?:that|the|an equal|a like) amount[^.]{0,50}(?:to the caster|to caster)/i.test(text)
      || /which the caster immediately gains/i.test(text);
    if (!transfersToCaster || !Number.isFinite(total)) return "";

    let healAmount = total;
    const saveResult = context.saveResults?.[0];
    if (saveResult?.success) {
      if (context.saveEffect === "half") healAmount = Math.floor(total / 2);
      else if (context.saveEffect === "negates") healAmount = 0;
      else if (context.saveEffect === "partial" || context.saveEffect === "varies") return "";
    }
    if (healAmount <= 0) return "";

    return EQItem._buildTargetedHealPanel(context.selfTargets ?? [], healAmount)
      || EQItem._buildApplyHealPanel(healAmount);
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

  static _buildActorEffectPanel(targets, config = {}) {
    const rows = targets
      .filter((target) => target?.actor?.uuid)
      .map((target) => `<div class="eq-apply-target-row">`
        + `<span class="eq-apply-target-name">${target.name}</span>`
        + `<div class="eq-apply-btns">`
        + `<button class="eq-apply-btn eq-apply-full" data-apply-effect-uuid="${target.actor.uuid}" data-effect-config="${encodeURIComponent(JSON.stringify(config))}">`
        + `${config.label ?? game.i18n.localize("EQRPG.Apply")}</button>`
        + `</div>`
        + `</div>`)
      .join("");

    if (!rows) return "";
    return `<div class="eq-apply-panel eq-targeted-panel">`
      + `<span class="eq-apply-label">${game.i18n.localize("EQRPG.ApplyPerTarget")}:</span>`
      + rows
      + `</div>`;
  }

  static _buildDisarmPanel(targets) {
    const rows = targets
      .filter((target) => target?.actor?.uuid)
      .map((target) => `<div class="eq-apply-target-row">`
        + `<span class="eq-apply-target-name">${target.name}</span>`
        + `<div class="eq-apply-btns">`
        + `<button class="eq-apply-btn eq-apply-full" data-disarm-actor-uuid="${target.actor.uuid}">`
        + `${game.i18n.localize("EQRPG.ApplyDisarm")}</button>`
        + `</div>`
        + `</div>`)
      .join("");

    if (!rows) return "";
    return `<div class="eq-apply-panel eq-targeted-panel">`
      + `<span class="eq-apply-label">${game.i18n.localize("EQRPG.ResolvePerTarget")}:</span>`
      + rows
      + `</div>`;
  }

  static _parseSpellBuffProfile(spell) {
    const text = `${spell.system.effect ?? ""} ${spell.system.description ?? ""}`;
    const readBonus = (patterns, fallback = 0) => {
      for (const pattern of patterns) {
        const match = text.match(pattern);
        if (match) return Number(match[1]) || fallback;
      }
      return fallback;
    };

    return {
      ac: readBonus([/\+ ?(\d+)\s+armor bonus to AC/i, /\+ ?(\d+)\s+bonus to AC/i]),
      saves: readBonus([/\+ ?(\d+)\s+bonus on saves/i, /\+ ?(\d+)\s+to all saving throws/i]),
      tempHP: readBonus([/\+ ?(\d+)\s+temporary hit points/i, /\+ ?(\d+)\s+hit points/i, /grants (\d+) temporary HP/i]),
    };
  }

  static _buildSpellEffectChanges(config = {}) {
    const add = CONST.ACTIVE_EFFECT_MODES.ADD;
    const changes = [];
    if (config.attack) changes.push({ key: "system.combat.attackMisc", mode: add, value: config.attack });
    if (config.initiative) changes.push({ key: "system.combat.initiative.misc", mode: add, value: config.initiative });
    if (config.ac) changes.push({ key: "system.combat.ac.misc", mode: add, value: config.ac });
    if (config.fort) changes.push({ key: "system.combat.saves.fortitude.misc", mode: add, value: config.fort });
    if (config.reflex) changes.push({ key: "system.combat.saves.reflex.misc", mode: add, value: config.reflex });
    if (config.will) changes.push({ key: "system.combat.saves.will.misc", mode: add, value: config.will });
    if (config.magicSave) changes.push({ key: "system.combat.magicSaveBonus", mode: add, value: config.magicSave });
    if (config.hpBonus) changes.push({ key: "system.resources.hp.bonus", mode: add, value: config.hpBonus });
    if (config.tempHP) changes.push({ key: "system.resources.hp.temp", mode: add, value: config.tempHP });
    if (config.str) changes.push({ key: "system.abilities.str.misc", mode: add, value: config.str });
    if (config.dex) changes.push({ key: "system.abilities.dex.misc", mode: add, value: config.dex });
    if (config.con) changes.push({ key: "system.abilities.con.misc", mode: add, value: config.con });
    if (config.int) changes.push({ key: "system.abilities.int.misc", mode: add, value: config.int });
    if (config.wis) changes.push({ key: "system.abilities.wis.misc", mode: add, value: config.wis });
    if (config.cha) changes.push({ key: "system.abilities.cha.misc", mode: add, value: config.cha });
    return changes;
  }

  static _readFirstBonus(text, patterns, fallback = 0) {
    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match) return Number(match[1]) || fallback;
    }
    return fallback;
  }

  static _buildNamedSpellEffectConfig(spell, context = {}) {
    const name = String(spell.name ?? "").trim();
    const lowerName = name.toLowerCase();
    const text = `${spell.system.effect ?? ""} ${spell.system.description ?? ""}`;
    const selfTargets = context.selfTargets ?? [];
    const targets = context.targets?.length ? context.targets : selfTargets;
    const targetSet = targets.length ? targets : selfTargets;

    const hasteRank = EQItem._readFirstBonus(text, [/haste\s*\(\s*(\d+)\s*\)/i]);
    const slowRank = EQItem._readFirstBonus(text, [/slow\s*\(\s*(\d+)\s*\)/i]);
    if (hasteRank > 0 && targetSet.length) {
      return {
        targets: targetSet,
        config: {
          effectKey: lowerName.replace(/\s+/g, "-"),
          label: `Toggle ${name}`,
          hasteRank,
          hasteSource: "spell",
          description: spell.system.effect ?? "",
        },
      };
    }

    if (slowRank > 0) {
      const saveResults = context.saveResults ?? [];
      const failedTargets = saveResults
        .filter((result) => !result.success)
        .map((result) => context.targets?.find((target) => target.actor?.uuid === result.actorUuid))
        .filter(Boolean);
      const affectedTargets = failedTargets.length ? failedTargets : (context.targets ?? []);
      if (!affectedTargets.length) return null;
      return {
        targets: affectedTargets,
        config: {
          effectKey: lowerName.replace(/\s+/g, "-"),
          label: `Toggle ${name}`,
          slowRank,
          description: spell.system.effect ?? "",
          statuses: ["slowed"],
        },
      };
    }

    const directProfiles = {
      "bless": {
        changes: EQItem._buildSpellEffectChanges({ attack: 1 }),
        description: spell.system.effect ?? "",
      },
      "minor shielding": {
        changes: EQItem._buildSpellEffectChanges({ ac: 2, hpBonus: 2 }),
        description: "PHB: +2 AC and +2 hit points.",
      },
      "shielding": {
        changes: EQItem._buildSpellEffectChanges({ ac: 4, hpBonus: 12, magicSave: 1 }),
        description: "PHB: +4 AC, +12 hit points, and +1 on saves against magic.",
      },
      "lesser shielding": {
        changes: EQItem._buildSpellEffectChanges({ ac: 3, hpBonus: 7, magicSave: 1 }),
        description: "PHB: +3 AC, +7 hit points, and +1 on saves against magic.",
      },
      "major shielding": {
        changes: EQItem._buildSpellEffectChanges({ ac: 5, hpBonus: 18, magicSave: 2 }),
        description: "PHB: +5 AC, +18 hit points, and +2 on saves against magic.",
      },
      "greater shielding": {
        changes: EQItem._buildSpellEffectChanges({ ac: 6, hpBonus: 25, magicSave: 2 }),
        description: "PHB: +6 AC, +25 hit points, and +2 on saves against magic.",
      },
      "arch-shielding": {
        changes: EQItem._buildSpellEffectChanges({ ac: 7, hpBonus: 36, magicSave: 3 }),
        description: "PHB: +7 AC, +36 hit points, and +3 on saves against magic.",
      },
      "invisibility": {
        changes: [],
        statuses: ["invisible"],
        breaksOnAttack: true,
        breaksOnCast: true,
        description: spell.system.effect ?? "",
      },
      "improved invisibility": {
        changes: [],
        statuses: ["invisible"],
        description: spell.system.effect ?? "",
      },
      "invisibility to undead": {
        changes: [],
        breaksOnAttack: true,
        breaksOnCast: true,
        description: spell.system.effect ?? "",
      },
      "invisibility to animals": {
        changes: [],
        breaksOnAttack: true,
        breaksOnCast: true,
        description: spell.system.effect ?? "",
      },
      "spirit of wolf": {
        changes: [],
        speedPct: 50,
        description: "PHB: target speed increases by 50%.",
      },
      "clarity": {
        changes: [],
        manaPerRound: 3,
        description: "PHB: recovers 3 mana each combat round.",
      },
      "clarity ii": {
        changes: [],
        manaPerRound: 6,
        description: "PHB: recovers 6 mana each combat round.",
      },
      "rune i": {
        changes: EQItem._buildSpellEffectChanges({ tempHP: 21 }),
        description: "PHB: 6d6 temporary hit points.",
      },
      "rune ii": {
        changes: EQItem._buildSpellEffectChanges({ tempHP: 38 }),
        description: "PHB: 7d10 temporary hit points.",
      },
      "rune iii": {
        changes: EQItem._buildSpellEffectChanges({ tempHP: 66 }),
        description: "PHB: (6d10)x2 temporary hit points.",
      },
      "rune iv": {
        changes: EQItem._buildSpellEffectChanges({ tempHP: 92 }),
        description: "PHB: (8d10+2)x2 temporary hit points.",
      },
      "rune v": {
        changes: EQItem._buildSpellEffectChanges({ tempHP: 150 }),
        description: "PHB: (4d6+1)x10 temporary hit points.",
      },
      "skin like wood": {
        changes: EQItem._buildSpellEffectChanges({ ac: 1, hpBonus: 3 }),
        description: "PHB: +1 AC and +3 hit points.",
      },
      "spirit of bear": {
        changes: EQItem._buildSpellEffectChanges({ con: 4 }),
        description: "PHB: +4 Constitution.",
      },
      "spirit of ox": {
        changes: EQItem._buildSpellEffectChanges({ con: 6 }),
        description: "PHB: +6 Constitution.",
      },
      "endure cold": {
        changes: [],
        description: "PHB: +5 cold resistance and +2 on saves against cold effects.",
      },
      "endure fire": {
        changes: [],
        description: "PHB: +5 fire resistance and +2 on saves against fire effects.",
      },
      "strengthen": {
        changes: EQItem._buildSpellEffectChanges({ str: 3 }),
        description: "PHB: +3 Strength.",
      },
      "weaken": {
        changes: EQItem._buildSpellEffectChanges({ str: -4 }),
        description: "PHB: -4 Strength.",
      },
    };

    const profile = directProfiles[lowerName];
    if (!profile || !targetSet.length) return null;
    return {
      targets: targetSet,
      config: {
        effectKey: lowerName.replace(/\s+/g, "-"),
        label: `Toggle ${name}`,
        ...profile,
      },
    };
  }

  static _buildSpellAutomationPanels(spell, context = {}) {
    const panels = [];
    const targets = context.targets ?? [];
    const saveResults = context.saveResults ?? [];
    const failedTargets = saveResults
      .filter((result) => !result.success)
      .map((result) => targets.find((target) => target.actor?.uuid === result.actorUuid))
      .filter(Boolean);
    const namedConfig = EQItem._buildNamedSpellEffectConfig(spell, context);
    if (namedConfig?.targets?.length) {
      panels.push(EQItem._buildActorEffectPanel(namedConfig.targets, namedConfig.config));
    }

    const name = String(spell.name ?? "").toLowerCase();
    if (name.startsWith("root") && failedTargets.length) {
      panels.push(EQItem._buildTargetedStatusPanel(
        failedTargets,
        "restrained",
        game.i18n.localize("EQRPG.ToggleRooted"),
        game.i18n.localize("EQRPG.ToggleRooted"),
      ));
    }

    return panels.filter(Boolean);
  }

  static _buildSpellSaveTargetPanel(saveResults, total, saveEffect) {
    if (!saveResults?.length || !Number.isFinite(total)) return "";

    const rows = saveResults.map((result) => {
      const targetUuid = result.actorUuid;
      if (!targetUuid) return "";

      let appliedAmount = total;
      let outcomeLabel = game.i18n.localize("EQRPG.Apply");
      if (result.success) {
        if (saveEffect === "negates") {
          appliedAmount = 0;
          outcomeLabel = game.i18n.localize("EQRPG.NoEffect");
        } else if (saveEffect === "half") {
          appliedAmount = Math.floor(total / 2);
          outcomeLabel = game.i18n.localize("EQRPG.HalfEffect");
        } else if (saveEffect === "partial" || saveEffect === "varies") {
          appliedAmount = null;
          outcomeLabel = game.i18n.localize("EQRPG.ManualResolution");
        }
      }

      const resultLabel = result.success
        ? game.i18n.localize("EQRPG.SaveSucceeded")
        : game.i18n.localize("EQRPG.SaveFailed");
      const actionHtml = appliedAmount == null
        ? `<span class="eq-badge eq-threat">${outcomeLabel}</span>`
        : appliedAmount === 0
          ? `<span class="eq-badge eq-hit">${outcomeLabel}</span>`
          : `<button class="eq-apply-btn ${result.success ? "eq-apply-half" : "eq-apply-full"}" data-apply-damage-uuid="${targetUuid}" data-apply-damage="${appliedAmount}">`
            + `${outcomeLabel} ${appliedAmount}</button>`;

      return `<div class="eq-apply-target-row">`
        + `<span class="eq-apply-target-name">${result.name}</span>`
        + `<span class="eq-badge ${result.success ? "eq-hit" : "eq-miss"}">${result.roll.total} ${resultLabel}</span>`
        + actionHtml
        + `</div>`;
    }).filter(Boolean).join("");

    if (!rows) return "";
    return `<div class="eq-apply-panel eq-dmg-panel eq-targeted-panel">`
      + `<span class="eq-apply-label">${game.i18n.localize("EQRPG.ResolvePerTarget")}:</span>`
      + rows
      + `</div>`;
  }

  // ---------------------------------------------------------------------------
  // Dice Rolling
  // ---------------------------------------------------------------------------

  /**
   * Roll a full attack action with this weapon.
   *
   * PHB mechanics implemented:
   * - Iterative attacks at BAB 6/11/16 (second/third/fourth attack at BAB-5 each)
   * - Melee: 1d20 + iterativeBAB + STR mod + attackBonus
   * - Ranged: 1d20 + iterativeBAB + DEX mod + attackBonus
   * - Critical threat: natural roll >= critRange triggers a confirmation roll
   * - Confirmed crit: confirmation roll hits any targeted token (or beats AC 10)
   * - Weapon delay shown in chat footer
   */
  async rollAttack() {
    if (!(this.type === "weapon" || this._isShieldBash())) return;
    const actor = this.actor;
    if (!actor) return null;
    actor.prepareData();
    await actor.breakInvisibility?.("attack");

    const profile = this._resolveAttackProfile();
    const attackArray = actor?.system.combat?.attackArray ?? [actor?.system.combat?.bab ?? 0];
    const isRanged    = (profile.range ?? 0) > 0;
    const isNet       = this._isNet();
    const isShieldBash = profile.isShieldBash;
    const abilMod     = this._getAttackAbilityMod(actor);
    const itemAttackBonus = this.system.attackBonus ?? 0;
    const actorAttackBonus = actor?.system?.combat?.attackBonus ?? 0;
    const atkBonus  = itemAttackBonus + actorAttackBonus;
    const critRange = profile.critRange ?? 20;
    const critMult  = profile.critMult  ?? 2;
    const delay     = (profile.delay ?? 4) + (actor?.system?.combat?.weaponDelayMod ?? 0);
    const rollMode  = game.settings.get("core", "rollMode");
    const targets   = [...(game.user?.targets ?? [])];
    let ammoItem = null;
    let ammoRemaining = null;
    const ammoToConsume = Math.max(attackArray.length, 1);

    if (this._isProjectileWeapon()) {
      ammoItem = await this._consumeAmmo(actor, ammoToConsume);
      if (ammoItem === false) return null;
      ammoRemaining = Math.max((ammoItem.system.quantity ?? ammoToConsume) - ammoToConsume, 0);
    }

    const resolveTargetAC = (token) => {
      const ac = token?.actor?.system?.combat?.ac ?? {};
      if (isNet) {
        const dex = this._getActorAbilityMod(token?.actor, "dex");
        const misc = ac.misc ?? 0;
        const monk = ac.monkBonus ?? 0;
        return 10 + dex + misc + monk;
      }
      return ac.value ?? 10;
    };

    // Evaluate all attack rolls
    const results = [];
    for (const iterBab of attackArray) {
      const totalBonus = iterBab + abilMod + atkBonus;
      const roll       = await new Roll(`1d20 + ${totalBonus}`, actor?.getRollData() ?? {}).evaluate();
      const natural    = roll.dice[0]?.results[0]?.result ?? 20;
      const isThreat   = !isNet && natural >= critRange;

      let critConfirmed = false;
      let critRoll      = null;

      if (isThreat) {
        critRoll = await new Roll(`1d20 + ${totalBonus}`, actor?.getRollData() ?? {}).evaluate();
        const targetAC = resolveTargetAC(targets[0]);
        critConfirmed  = critRoll.total >= targetAC;
      }

      results.push({ roll, totalBonus, natural, isThreat, critConfirmed, critRoll, iterBab });
    }

    // Per-target badge row
    function buildTargetLine(roll, confirmed) {
      if (targets.length === 0) return "";
      const lines = targets.map(token => {
        const targetAC = resolveTargetAC(token);
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

    // Build attack rows
    let attackRowsHtml = "";
    for (let i = 0; i < results.length; i++) {
      const r    = results[i];
      const sign = r.totalBonus >= 0 ? "+" : "";
      const attackLabel = results.length > 1
        ? `${game.i18n.localize("EQRPG.Attack")} ${i + 1}`
        : isShieldBash
          ? game.i18n.localize("EQRPG.ShieldBash")
          : isNet
            ? game.i18n.localize("EQRPG.RangedTouchAttack")
            : game.i18n.localize("EQRPG.Attack");

      let statusHtml = "";
      if (r.isThreat && r.critConfirmed) {
        statusHtml = `<span class="eq-crit"> ✦ ${game.i18n.localize("EQRPG.CritConfirmed")} ×${critMult}</span>`;
      } else if (r.isThreat) {
        const confirmSign = r.totalBonus >= 0 ? "+" : "";
        statusHtml = `<span class="eq-threat"> ⚡ ${game.i18n.localize("EQRPG.CritThreat")}`
                   + ` -> ${r.critRoll?.total} (${confirmSign}${r.totalBonus})</span>`
                   + `<span class="eq-miss"> ${game.i18n.localize("EQRPG.CritFailed")}</span>`;
      }

      // First attack total — shown by dice roll; extras as plain numbers in the card
      const totalClass = i === 0 ? "attack-total" : "attack-total attack-total-extra";

      attackRowsHtml += `<div class="attack-line">`
        + `<span class="attack-label">${attackLabel}</span>`
        + `<span class="attack-bonus">${sign}${r.totalBonus}</span>`
        + `<span class="attack-arrow">-></span>`
        + `<span class="${totalClass}">${r.roll.total}</span>`
        + statusHtml
        + buildTargetLine(r.roll, r.critConfirmed)
        + `</div>`;
    }

    const critDisplay     = isNet ? "-" : (critRange < 20 ? `${critRange}-20/x${critMult}` : `20/x${critMult}`);
    const critConfirmedAny = results.some(r => r.critConfirmed);

    const header = EQItem._buildCardHeader(
      actor?.img ?? "icons/svg/mystery-man.svg",
      actor?.name ?? "?",
      `${isShieldBash ? game.i18n.localize("EQRPG.ShieldBash").toLowerCase() : "attacks with"} <strong>${profile.name}</strong>`,
      true,
    );

    // Build inline damage roll buttons so the player can roll damage right from chat
    const dmgMod     = this._getDamageAbilityMod(actor);
    const dmgDice    = this._adjustDamageForSize(profile.damage || "");
    const dmgBase    = !dmgDice
      ? ""
      : dmgMod > 0
        ? `${dmgDice} + ${dmgMod}`
        : dmgMod < 0
          ? `${dmgDice} - ${Math.abs(dmgMod)}`
          : dmgDice;
    const actorId    = actor?.id ?? "";
    const itemId     = this.id ?? "";

    const actionButtons = [];
    if (!isNet && dmgDice) {
      actionButtons.push(
        `<button class="eq-roll-dmg-btn" data-roll-damage-item="${itemId}" data-actor-id="${actorId}" data-crit-mult="1">`
        + `Roll Damage (${dmgBase})</button>`,
      );
      if (critConfirmedAny) {
        actionButtons.push(
          `<button class="eq-roll-dmg-btn eq-crit" data-roll-damage-item="${itemId}" data-actor-id="${actorId}" data-crit-mult="${critMult}">`
          + `Crit Damage x${critMult}</button>`,
        );
      }
    }
    if (this._hasProperty("trip")) {
      actionButtons.push(
        `<button class="eq-roll-dmg-btn" data-roll-maneuver-item="${itemId}" data-actor-id="${actorId}" data-maneuver="trip">`
        + `${game.i18n.localize("EQRPG.Trip")}</button>`,
      );
    }
    if (this._hasProperty("disarm")) {
      actionButtons.push(
        `<button class="eq-roll-dmg-btn" data-roll-maneuver-item="${itemId}" data-actor-id="${actorId}" data-maneuver="disarm">`
        + `${game.i18n.localize("EQRPG.Disarm")}</button>`,
      );
    }
    const dmgBtnHtml = actionButtons.length
      ? `<div class="eq-attack-dmg-row">${actionButtons.join(" ")}</div>`
      : "";

    const effectLines = [];
    if (isNet) {
      effectLines.push(`<div class="eq-effect-text">${game.i18n.localize("EQRPG.NetHitEffect")}</div>`);
    }
    if (ammoItem) {
      effectLines.push(`<div class="eq-effect-text">${game.i18n.format("EQRPG.AmmoConsumed", {
        count: ammoToConsume,
        ammo: ammoItem.name,
        remaining: ammoRemaining,
      })}</div>`);
    }
    const effectHtml = effectLines.length ? `<div class="eq-card-body">${effectLines.join("")}</div>` : "";

    const cardHtml = `<div class="eq-chat-card eq-attack-card">`
      + header
      + `<div class="eq-card-body">${attackRowsHtml}</div>`
      + effectHtml
      + `<div class="eq-card-footer">Delay ${delay} · Crit ${critDisplay}</div>`
      + dmgBtnHtml
      + `</div>`;

    // Single message — all rolls attached so 3D dice fire for every iterative attack
    await ChatMessage.create({
      speaker:  actor ? ChatMessage.getSpeaker({ actor }) : undefined,
      content:  cardHtml,
      rolls:    results.flatMap((r) => r.critRoll ? [r.roll, r.critRoll] : [r.roll]),
      rollMode,
    });

    if (isNet && targets.length) {
      const successfulTargets = targets.filter((target) => {
        const targetAC = resolveTargetAC(target);
        return results[0]?.roll?.total >= targetAC;
      });
      const entanglePanel = EQItem._buildTargetedStatusPanel(
        successfulTargets,
        "restrained",
        game.i18n.localize("EQRPG.ToggleEntangled"),
        game.i18n.localize("EQRPG.ToggleEntangled"),
      );
      if (entanglePanel) {
        await ChatMessage.create({
          speaker: actor ? ChatMessage.getSpeaker({ actor }) : undefined,
          content: entanglePanel,
          rollMode,
        });
      }
    }

    return results;
  }

  // ---------------------------------------------------------------------------
  // Consumable Use
  // ---------------------------------------------------------------------------

  /**
   * Use one charge of a consumable item.
   * - Rolls healFormula and posts an apply-heal panel if present.
   * - Directly restores manaRestore mana if > 0.
   * - Posts effect text to chat if no formula.
   * - Decrements quantity by 1; posts a "used last" notice at 0.
   */
  async useConsumable() {
    if (this.type !== "consumable") return;
    const actor = this.actor;
    const qty   = this.system.quantity ?? 0;

    if (qty <= 0) {
      ui.notifications.warn(game.i18n.format("EQRPG.NoCharges", { name: this.name }));
      return;
    }

    const speaker  = actor ? ChatMessage.getSpeaker({ actor }) : undefined;
    const rollMode = game.settings.get("core", "rollMode");
    const header   = EQItem._buildCardHeader(
      this.img,
      actor?.name ?? "?",
      `uses <strong>${this.name}</strong>`,
      false,
    );

    if (this.system.healFormula) {
      const roll = await new Roll(this.system.healFormula, actor?.getRollData() ?? {}).evaluate();
      await roll.toMessage({
        speaker,
        flavor:   `<div class="eq-chat-card eq-heal-card">${header}</div>`,
        rollMode,
      });
      await ChatMessage.create({ speaker, content: EQItem._buildApplyHealPanel(roll.total), rollMode });
    }

    if ((this.system.manaRestore ?? 0) > 0 && actor) {
      const cur    = actor.system.resources.mana.value;
      const max    = actor.system.resources.mana.max;
      const gained = Math.min(this.system.manaRestore, max - cur);
      await actor.update({ "system.resources.mana.value": cur + gained });
      await ChatMessage.create({
        speaker,
        content: `<div class="eq-chat-card eq-use-card">${header}`
               + `<div class="eq-card-body"><span class="eq-mana-restore">+${gained} ${game.i18n.localize("EQRPG.Mana")}</span></div></div>`,
        rollMode,
      });
    }

    if (!this.system.healFormula && !this.system.manaRestore && this.system.effect) {
      await ChatMessage.create({
        speaker,
        content: `<div class="eq-chat-card eq-use-card">${header}`
               + `<div class="eq-card-body"><em class="eq-effect-text">${this.system.effect}</em></div></div>`,
        rollMode,
      });
    }

    const newQty = qty - 1;
    await this.update({ "system.quantity": newQty });
    if (newQty === 0) {
      ui.notifications.info(game.i18n.format("EQRPG.UsedLast", { name: this.name }));
    }
  }

  /**
   * Roll damage for this weapon.
   *
   * @param {object}  [options]
   * @param {number}  [options.critMult=1]        Damage multiplier (2 or 3 on confirmed crit)
   * @param {boolean} [options.sneakAttack=false]  Add rogue sneak attack dice
   */
  async rollDamage({ critMult = 1, sneakAttack = false } = {}) {
    if (!(this.type === "weapon" || this._isShieldBash())) return;
    const actor    = this.actor;
    actor?.prepareData?.();
    const profile  = this._resolveAttackProfile();
    if (this._isNet() || !profile.damage) {
      ui.notifications.warn(game.i18n.localize("EQRPG.NoDamageRoll"));
      return null;
    }
    const abilityMod = this._getDamageAbilityMod(actor);
    const dmgDice  = this._adjustDamageForSize(profile.damage || "1d4");

    const baseFormula = abilityMod > 0
      ? `${dmgDice} + ${abilityMod}`
      : abilityMod < 0
        ? `${dmgDice} - ${Math.abs(abilityMod)}`
        : dmgDice;

    let formula = critMult > 1 ? `(${baseFormula}) * ${critMult}` : baseFormula;

    if (sneakAttack) {
      const saDice = actor?.system.classFeatures?.sneakAttackDice ?? 0;
      if (saDice > 0) formula += ` + ${saDice}d6`;
    }

    // Damage type
    const rawType   = profile.damageType ?? "";
    const typeKey   = rawType
      ? `EQRPG.Dmg${rawType.charAt(0).toUpperCase()}${rawType.slice(1)}`
      : null;
    const typeLabel = typeKey
      ? (game.i18n.localize(typeKey) !== typeKey ? game.i18n.localize(typeKey) : rawType)
      : "";

    // Badges
    let badgesHtml = "";
    if (critMult > 1) badgesHtml += `<span class="eq-crit eq-badge">CRIT x${critMult}</span>`;
    const saDice = actor?.system.classFeatures?.sneakAttackDice ?? 0;
    if (sneakAttack && saDice > 0) badgesHtml += `<span class="eq-sneak-badge">SA +${saDice}d6</span>`;

    const actionLine = typeLabel
      ? `${game.i18n.localize("EQRPG.Damage")} <span class="eq-dmg-type">${typeLabel}</span>`
      : game.i18n.localize("EQRPG.Damage");

    const header = `<div class="eq-card-header">`
      + `<img src="${this.img}" class="eq-card-icon" />`
      + `<div class="eq-card-title">`
      + `<span class="eq-card-actor">${this.name}</span>`
      + `<span class="eq-card-action">${actionLine}</span>`
      + `</div>`
      + (badgesHtml ? `<div class="eq-card-badges">${badgesHtml}</div>` : "")
      + `</div>`;

    const cardHtml = `<div class="eq-chat-card eq-dmg-card">${header}</div>`;

    const roll = await new Roll(formula, actor?.getRollData() ?? {}).evaluate();
    await roll.toMessage({
      speaker:  actor ? ChatMessage.getSpeaker({ actor }) : undefined,
      flavor:   cardHtml,
      rollMode: game.settings.get("core", "rollMode"),
    });
    const targets = [...(game.user?.targets ?? [])];
    const targetedPanel = EQItem._buildTargetedDamagePanel(targets, roll.total);
    if (targetedPanel) {
      await ChatMessage.create({
        speaker:  actor ? ChatMessage.getSpeaker({ actor }) : undefined,
        content:  targetedPanel,
        rollMode: game.settings.get("core", "rollMode"),
      });
    } else {
      await ChatMessage.create({
        speaker:  actor ? ChatMessage.getSpeaker({ actor }) : undefined,
        content:  EQItem._buildApplyDamagePanel(roll.total),
        rollMode: game.settings.get("core", "rollMode"),
      });
    }

    return roll;
  }

  /**
   * Roll Rogue Sneak Attack damage — convenience wrapper for rollDamage.
   */
  async rollSneakDamage() {
    return this.rollDamage({ sneakAttack: true });
  }

  static _getClassSkillBonus(actor, skillName) {
    const features = actor?.system?.classFeatures ?? {};
    const normalizedName = String(skillName ?? "").toLowerCase();

    if (features.alchemyMasteryBonus && normalizedName.includes("trade skill") && normalizedName.includes("alchemy")) {
      return features.alchemyMasteryBonus;
    }
    if (features.fletcherBonus && normalizedName.includes("trade skill") && normalizedName.includes("fletch")) {
      return features.fletcherBonus;
    }
    return 0;
  }

  /**
   * Roll a skill check (1d20 + ranks + ability mod).
   */
  async rollSkill() {
    if (this.type !== "skill") return;
    const actor   = this.actor;
    const ranks   = this.system.ranks ?? 0;
    if (this.system.trainedOnly && ranks <= 0) {
      ui.notifications.warn(game.i18n.format("EQRPG.TrainedOnlySkill", { name: this.name }));
      return null;
    }
    const ability = this.system.ability ?? "int";
    const abilMod = actor?.system.abilities?.[ability]?.mod ?? 0;
    const armorPenalty = this.system.armorCheckPenalty ? (actor?.system?.combat?.armorCheckPenalty ?? 0) : 0;
    const classBonus = EQItem._getClassSkillBonus(actor, this.name);
    const total   = ranks + abilMod + armorPenalty + classBonus;
    const sign    = total >= 0 ? "+" : "";
    const abilAbbr = game.i18n.localize(
      CONFIG.EQRPG?.abilityAbbreviations?.[ability] ?? ability.toUpperCase());

    const header = EQItem._buildCardHeader(
      this.img,
      actor?.name ?? "?",
      `<strong>${this.name}</strong> <span class="eq-skill-detail">${ranks} ranks ${abilMod >= 0 ? "+" : ""}${abilMod} ${abilAbbr}${armorPenalty ? ` ${armorPenalty} ACP` : ""}${classBonus ? ` +${classBonus} ${game.i18n.localize("EQRPG.ClassBonus")}` : ""}</span>`,
      false,
    );

    const roll = await new Roll(`1d20 + ${total}`, actor?.getRollData() ?? {}).evaluate();
    await roll.toMessage({
      speaker:  actor ? ChatMessage.getSpeaker({ actor }) : undefined,
      flavor:   `<div class="eq-chat-card eq-skill-card">${header}</div>`,
      rollMode: game.settings.get("core", "rollMode"),
    });
    return roll;
  }

  // ---------------------------------------------------------------------------
  // Spell Casting
  // ---------------------------------------------------------------------------

  static _getSpellcastingAbility(actor) {
    const classKey = actor?.system?.details?.class ?? "";
    return CONFIG.EQRPG?.classes?.[classKey]?.spellcastingAbility ?? (classKey === "bard" ? "cha" : null);
  }

  static _getSpellDCAbility(actor, spell) {
    const classKey = actor?.system?.details?.class ?? "";
    const school = String(spell?.system?.school ?? "");
    if (classKey === "enchanter" && /mind[\s-]*(?:affect|aten)/i.test(school)) return "cha";
    return EQItem._getSpellcastingAbility(actor);
  }

  static _getEffectiveSpellLevel(spell, actor) {
    const fallback = Number(spell?.system?.spellLevel ?? 1) || 1;
    const classKey = actor?.system?.details?.class ?? "";
    const entries = Array.isArray(spell?.system?.classLevels) ? spell.system.classLevels : [];
    if (!classKey || !entries.length) return fallback;

    for (const entry of entries) {
      const match = String(entry).match(/^([^:]+):(\d+)$/);
      if (!match) continue;
      if (match[1] === classKey) return Number(match[2]) || fallback;
    }

    return fallback;
  }

  static _inferSpellDeliveryType(spell) {
    if (spell.system.deliveryType) return spell.system.deliveryType;
    const saveType = spell.system.savingThrow;
    if (saveType && saveType !== "none") return "save";
    if (spell.system.damageFormula) return "attack";
    return "utility";
  }

  static _inferSpellAttackMode(spell) {
    if (spell.system.attackMode) return spell.system.attackMode;
    const rangeText = String(spell.system.range ?? "").toLowerCase();
    return rangeText.includes("touch") ? "melee" : "ranged";
  }

  static _inferSaveEffect(spell) {
    if (spell.system.saveEffect) return spell.system.saveEffect;
    const text = `${spell.system.effect ?? ""} ${spell.system.description ?? ""}`.toLowerCase();
    if (text.includes("half")) return "half";
    if (text.includes("partial")) return "partial";
    if (text.includes("negate")) return "negates";
    return "varies";
  }

  static _formatSaveType(saveType) {
    const map = {
      fortitude: game.i18n.localize("EQRPG.Fortitude"),
      reflex: game.i18n.localize("EQRPG.Reflex"),
      will: game.i18n.localize("EQRPG.Will"),
    };
    return map[saveType] ?? saveType;
  }

  static _formatSaveEffect(saveEffect) {
    const map = {
      negates: game.i18n.localize("EQRPG.SaveEffectNegates"),
      half: game.i18n.localize("EQRPG.SaveEffectHalf"),
      partial: game.i18n.localize("EQRPG.SaveEffectPartial"),
      varies: game.i18n.localize("EQRPG.SaveEffectVaries"),
    };
    return map[saveEffect] ?? saveEffect;
  }

  static async _rollTargetSaves(targets, saveType, dc) {
    const results = [];
    for (const token of targets) {
      const targetActor = token.actor;
      const saveBonus = (targetActor?.system?.combat?.saves?.[saveType]?.value ?? 0)
        + (targetActor?.system?.combat?.magicSaveTotal ?? targetActor?.system?.combat?.magicSaveBonus ?? 0);
      const roll = await new Roll(`1d20 + ${saveBonus}`, targetActor?.getRollData?.() ?? {}).evaluate();
      results.push({
        name: token.name,
        actorUuid: targetActor?.uuid ?? "",
        roll,
        saveBonus,
        success: roll.total >= dc,
      });
    }
    return results;
  }

  static _resolveSpellTargetAC(target, attackMode) {
    const ac = target?.actor?.system?.combat?.ac ?? {};
    const isTouchAttack = attackMode === "melee" || attackMode === "ranged";
    if (isTouchAttack) {
      const dex = this._getActorAbilityMod(target?.actor, "dex");
      const misc = ac.misc ?? 0;
      const monk = ac.monkBonus ?? 0;
      return 10 + dex + misc + monk;
    }
    return ac.value ?? 10;
  }

  /**
   * Execute this spell with handbook-style spell metadata:
   * - direct attack spells make a hit/miss roll against AC
   * - save spells show DC and save outcome, and roll target saves when targets are selected
   * - utility / heal spells still post their effect cleanly to chat
   * @param {EQActor} caster  The actor casting (may differ from this.actor)
   */
  async castSpell(caster) {
    if (this.type !== "spell") return;

    const actor      = caster ?? this.actor;
    actor?.prepareData?.();
    await actor?.breakInvisibility?.("cast");
    const spellLevel = EQItem._getEffectiveSpellLevel(this, actor);
    const manaCost   = this.system.manaCost ?? 0;
    const rollMode   = game.settings.get("core", "rollMode");
    const speaker    = actor ? ChatMessage.getSpeaker({ actor }) : undefined;
    const targets    = [...(game.user?.targets ?? [])];
    const selfTargets = (actor?.getActiveTokens?.() ?? []).map((token) => token.object ?? token).filter(Boolean);

    const castAbility = EQItem._getSpellcastingAbility(actor);
    const castMod     = castAbility ? (actor?.system?.abilities?.[castAbility]?.mod ?? 0) : 0;
    const dcAbility   = EQItem._getSpellDCAbility(actor, this);
    const dcMod       = dcAbility ? (actor?.system?.abilities?.[dcAbility]?.mod ?? 0) : 0;
    const saveType    = (this.system.savingThrow && this.system.savingThrow !== "none")
      ? this.system.savingThrow
      : "";
    const deliveryType = EQItem._inferSpellDeliveryType(this);
    const attackMode   = EQItem._inferSpellAttackMode(this);
    const saveEffect   = saveType ? EQItem._inferSaveEffect(this) : "";
    const dcOverride   = Number(this.system.saveDC);
    const dc           = Number.isFinite(dcOverride) && dcOverride > 0
      ? dcOverride
      : 10 + spellLevel + dcMod;

    const levelPill  = `<span class="eq-spell-meta-pill level">Lvl ${spellLevel}</span>`;
    const manaPill   = `<span class="eq-spell-meta-pill mana">${manaCost} MP</span>`;
    const schoolPill = this.system.school
      ? `<span class="eq-spell-meta-pill school">${this.system.school}</span>`
      : "";
    const recastPill = (this.system.recastTime ?? 0) > 0
      ? `<span class="eq-spell-meta-pill recast">Recast ${this.system.recastTime}r</span>`
      : "";
    const deliveryPill = deliveryType === "attack"
      ? `<span class="eq-spell-meta-pill attack">${game.i18n.localize("EQRPG.SpellDeliveryAttack")}</span>`
      : deliveryType === "save"
        ? `<span class="eq-spell-meta-pill save">${game.i18n.localize("EQRPG.SpellDeliverySave")}</span>`
        : `<span class="eq-spell-meta-pill utility">${game.i18n.localize("EQRPG.SpellDeliveryUtility")}</span>`;
    const metaHtml = `<div class="eq-spell-meta">${levelPill}${manaPill}${schoolPill}${recastPill}${deliveryPill}</div>`;

    const saveHtml = saveType
      ? `<div class="eq-spell-save">`
      + `<span class="eq-save-label">${game.i18n.localize("EQRPG.SaveDC")}</span> `
      + `<strong class="eq-save-dc">${dc}</strong> `
      + `<span class="eq-save-type">(${EQItem._formatSaveType(saveType)} ${EQItem._formatSaveEffect(saveEffect)})</span>`
      + `</div>`
      : "";

    const effectHtml = this.system.effect
      ? `<div class="eq-card-body"><em class="eq-effect-text">${this.system.effect}</em></div>`
      : "";

    const header = EQItem._buildCardHeader(
      this.img,
      actor?.name ?? "?",
      `casts <strong>${this.name}</strong>`,
      false,
    );

    if (deliveryType === "attack") {
      const bab = actor?.system?.combat?.bab ?? 0;
      const actorAttackBonus = actor?.system?.combat?.attackBonus ?? 0;
      const spellAttackBonus = bab + castMod + actorAttackBonus + (this.system.attackBonus ?? 0);
      const attackRoll = await new Roll(`1d20 + ${spellAttackBonus}`, actor?.getRollData() ?? {}).evaluate();
      const primaryTarget = targets[0] ?? null;
      const targetAC = EQItem._resolveSpellTargetAC(primaryTarget, attackMode);
      const hit = attackRoll.total >= targetAC;
      const attackSign = spellAttackBonus >= 0 ? "+" : "";
      const targetLabel = primaryTarget
        ? `${primaryTarget.name} (AC ${targetAC})`
        : `AC ${targetAC}`;
      const attackHtml = `<div class="eq-spell-attack-line">`
        + `<span class="eq-spell-attack-type">${game.i18n.localize("EQRPG.SpellAttack")}: ${game.i18n.localize(attackMode === "melee" ? "EQRPG.SpellAttackMelee" : "EQRPG.SpellAttackRanged")}</span> `
        + `<span class="eq-spell-attack-bonus">${attackSign}${spellAttackBonus}</span> `
        + `<span class="eq-spell-attack-target">vs ${targetLabel}</span> `
        + `<span class="eq-badge ${hit ? "eq-hit" : "eq-miss"}">${game.i18n.localize(hit ? "EQRPG.Hit" : "EQRPG.Miss")}</span>`
        + `</div>`;

      await attackRoll.toMessage({
        speaker,
        flavor: `<div class="eq-chat-card eq-spell-card">${header}${metaHtml}${attackHtml}${effectHtml}</div>`,
        rollMode,
      });

      if (!hit) return attackRoll;

      if (this.system.damageFormula) {
        const damageRoll = await new Roll(this.system.damageFormula, actor?.getRollData() ?? {}).evaluate();
        await damageRoll.toMessage({
          speaker,
          flavor: `<div class="eq-chat-card eq-spell-card">${header}${metaHtml}${attackHtml}${effectHtml}</div>`,
          rollMode,
        });
        let hasDamagePanel = false;
        if (primaryTarget?.actor?.uuid) {
          await ChatMessage.create({
            speaker,
            content: EQItem._buildTargetedDamagePanel([primaryTarget], damageRoll.total, {
              halfAmount: Math.floor(damageRoll.total / 2),
              doubleAmount: damageRoll.total * 2,
            }),
            rollMode,
          });
          hasDamagePanel = true;
        }
        if (!hasDamagePanel) {
          await ChatMessage.create({ speaker, content: EQItem._buildApplyDamagePanel(damageRoll.total), rollMode });
        }
        const transferHealPanel = EQItem._buildSpellTransferHealPanel(this, damageRoll.total, { selfTargets });
        if (transferHealPanel) {
          await ChatMessage.create({ speaker, content: transferHealPanel, rollMode });
        }
        for (const panel of EQItem._buildSpellAutomationPanels(this, { targets, selfTargets })) {
          if (panel) await ChatMessage.create({ speaker, content: panel, rollMode });
        }
        return damageRoll;
      }

      await ChatMessage.create({
        speaker,
        content: `<div class="eq-chat-card eq-spell-card">${header}${metaHtml}${attackHtml}${effectHtml}</div>`,
        rollMode,
      });
      return attackRoll;
    }

    let saveResults = [];
    let saveResultsHtml = "";
    if (deliveryType === "save" && saveType && targets.length) {
      saveResults = await EQItem._rollTargetSaves(targets, saveType, dc);
      const rows = saveResults.map((result) => {
        const css = result.success ? "eq-hit" : "eq-miss";
        const label = result.success
          ? game.i18n.localize("EQRPG.SaveSucceeded")
          : game.i18n.localize("EQRPG.SaveFailed");
        return `<span class="eq-badge ${css}">${result.name}: ${result.roll.total} (${label})</span>`;
      });
      saveResultsHtml = `<div class="eq-target-results">${rows.join("")}</div>`;
    }

    const baseCard = `<div class="eq-chat-card eq-spell-card">`
      + header + metaHtml + saveHtml + saveResultsHtml + effectHtml + `</div>`;

    if (this.system.damageFormula) {
      const roll = await new Roll(this.system.damageFormula, actor?.getRollData() ?? {}).evaluate();
      await roll.toMessage({ speaker, flavor: baseCard, rollMode });
      let hasDamagePanel = false;
      if (saveResults.length) {
        const savePanel = EQItem._buildSpellSaveTargetPanel(saveResults, roll.total, saveEffect);
        if (savePanel) {
          await ChatMessage.create({ speaker, content: savePanel, rollMode });
          hasDamagePanel = true;
        }
      } else if (targets.length) {
        const targetedPanel = EQItem._buildTargetedDamagePanel(targets, roll.total);
        if (targetedPanel) {
          await ChatMessage.create({ speaker, content: targetedPanel, rollMode });
          hasDamagePanel = true;
        }
      }
      for (const panel of EQItem._buildSpellAutomationPanels(this, { targets, selfTargets, saveResults })) {
        if (panel) await ChatMessage.create({ speaker, content: panel, rollMode });
      }
      if (!hasDamagePanel) {
        await ChatMessage.create({ speaker, content: EQItem._buildApplyDamagePanel(roll.total), rollMode });
      }
      const transferHealPanel = EQItem._buildSpellTransferHealPanel(this, roll.total, {
        selfTargets,
        saveResults,
        saveEffect,
      });
      if (transferHealPanel) {
        await ChatMessage.create({ speaker, content: transferHealPanel, rollMode });
      }
      return roll;
    }

    if (this.system.healFormula) {
      const roll = await new Roll(this.system.healFormula, actor?.getRollData() ?? {}).evaluate();
      await roll.toMessage({ speaker, flavor: baseCard, rollMode });
      const targetedHealPanel = EQItem._buildTargetedHealPanel(targets, roll.total);
      if (targetedHealPanel) {
        await ChatMessage.create({ speaker, content: targetedHealPanel, rollMode });
      }
      for (const panel of EQItem._buildSpellAutomationPanels(this, { targets, selfTargets })) {
        if (panel) await ChatMessage.create({ speaker, content: panel, rollMode });
      }
      if (!targetedHealPanel) {
        await ChatMessage.create({ speaker, content: EQItem._buildApplyHealPanel(roll.total), rollMode });
      }
      return roll;
    }

    await ChatMessage.create({ speaker, content: baseCard, rollMode });
    for (const panel of EQItem._buildSpellAutomationPanels(this, { targets, selfTargets, saveResults })) {
      if (panel) await ChatMessage.create({ speaker, content: panel, rollMode });
    }
    return null;
  }
}
