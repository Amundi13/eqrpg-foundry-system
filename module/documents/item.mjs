/**
 * Extend the base Item for EverQuest RPG.
 */
export class EQItem extends Item {

  /** @override */
  getRollData() {
    const data = super.getRollData();
    if (this.actor) {
      data.actor = this.actor.getRollData();
    }
    return data;
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
    if (this.type !== "weapon") return;
    const actor = this.actor;

    const attackArray = actor?.system.combat?.attackArray ?? [actor?.system.combat?.bab ?? 0];
    const isRanged    = (this.system.range ?? 0) > 0;
    const abilMod     = isRanged
      ? (actor?.system.abilities?.dex?.mod ?? 0)
      : (actor?.system.abilities?.str?.mod ?? 0);
    const atkBonus  = this.system.attackBonus ?? 0;
    const critRange = this.system.critRange ?? 20;
    const critMult  = this.system.critMult  ?? 2;
    const delay     = this.system.delay     ?? 4;
    const rollMode  = game.settings.get("core", "rollMode");
    const targets   = [...(game.user?.targets ?? [])];

    // Evaluate all attack rolls
    const results = [];
    for (const iterBab of attackArray) {
      const totalBonus = iterBab + abilMod + atkBonus;
      const roll       = await new Roll(`1d20 + ${totalBonus}`, actor?.getRollData() ?? {}).evaluate();
      const natural    = roll.dice[0]?.results[0]?.result ?? 20;
      const isThreat   = natural >= critRange;

      let critConfirmed = false;
      let critRoll      = null;

      if (isThreat) {
        critRoll = await new Roll(`1d20 + ${totalBonus}`, actor?.getRollData() ?? {}).evaluate();
        const targetAC = targets[0]?.actor?.system.combat?.ac?.value ?? 10;
        critConfirmed  = critRoll.total >= targetAC;
      }

      results.push({ roll, totalBonus, natural, isThreat, critConfirmed, critRoll, iterBab });
    }

    // Per-target badge row
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
        return `<span class="${css} eq-badge">${icon} ${label} ${token.name} (AC ${targetAC})</span>`;
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

      // First attack total — shown by dice roll; extras as plain numbers in the card
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

    const critDisplay     = critRange < 20 ? `${critRange}–20/×${critMult}` : `20/×${critMult}`;
    const critConfirmedAny = results.some(r => r.critConfirmed);

    const header = EQItem._buildCardHeader(
      actor?.img ?? "icons/svg/mystery-man.svg",
      actor?.name ?? "?",
      `attacks with <strong>${this.name}</strong>`,
      true,
    );

    // Build inline damage roll buttons so the player can roll damage right from chat
    // (isRanged already declared at top of function)
    const dmgStrMod  = isRanged ? 0 : (actor?.system.abilities?.str?.mod ?? 0);
    const dmgDice    = this.system.damage || "1d4";
    const dmgBase    = dmgStrMod >= 0
      ? `${dmgDice} + ${dmgStrMod}`
      : `${dmgDice} - ${Math.abs(dmgStrMod)}`;
    const actorId    = actor?.id ?? "";
    const itemId     = this.id ?? "";

    const dmgBtnHtml = `<div class="eq-attack-dmg-row">`
      + `<button class="eq-roll-dmg-btn" data-roll-damage-item="${itemId}" data-actor-id="${actorId}" data-crit-mult="1">`
      + `⚔ Roll Damage (${dmgBase})</button>`
      + (critConfirmedAny
        ? ` <button class="eq-roll-dmg-btn eq-crit" data-roll-damage-item="${itemId}" data-actor-id="${actorId}" data-crit-mult="${critMult}">`
          + `✦ Crit Damage ×${critMult}</button>`
        : "")
      + `</div>`;

    const cardHtml = `<div class="eq-chat-card eq-attack-card">`
      + header
      + `<div class="eq-card-body">${attackRowsHtml}</div>`
      + `<div class="eq-card-footer">Delay ${delay} · Crit ${critDisplay}</div>`
      + dmgBtnHtml
      + `</div>`;

    // Single message — all rolls attached so 3D dice fire for every iterative attack
    await ChatMessage.create({
      speaker:  actor ? ChatMessage.getSpeaker({ actor }) : undefined,
      content:  cardHtml,
      rolls:    results.map(r => r.roll),
      rollMode,
    });

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
    if (this.type !== "weapon") return;
    const actor    = this.actor;
    const isRanged = (this.system.range ?? 0) > 0;
    const strMod   = isRanged ? 0 : (actor?.system.abilities?.str?.mod ?? 0);
    const dmgDice  = this.system.damage || "1d4";

    const baseFormula = strMod >= 0
      ? `${dmgDice} + ${strMod}`
      : `${dmgDice} - ${Math.abs(strMod)}`;

    let formula = critMult > 1 ? `(${baseFormula}) * ${critMult}` : baseFormula;

    if (sneakAttack) {
      const saDice = actor?.system.classFeatures?.sneakAttackDice ?? 0;
      if (saDice > 0) formula += ` + ${saDice}d6`;
    }

    // Damage type
    const rawType   = this.system.damageType ?? "";
    const typeKey   = rawType
      ? `EQRPG.Dmg${rawType.charAt(0).toUpperCase()}${rawType.slice(1)}`
      : null;
    const typeLabel = typeKey
      ? (game.i18n.localize(typeKey) !== typeKey ? game.i18n.localize(typeKey) : rawType)
      : "";

    // Badges
    let badgesHtml = "";
    if (critMult > 1) badgesHtml += `<span class="eq-crit eq-badge">✦ CRIT ×${critMult}</span>`;
    const saDice = actor?.system.classFeatures?.sneakAttackDice ?? 0;
    if (sneakAttack && saDice > 0) badgesHtml += `<span class="eq-sneak-badge">🗡 SA +${saDice}d6</span>`;

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
    await ChatMessage.create({
      speaker:  actor ? ChatMessage.getSpeaker({ actor }) : undefined,
      content:  EQItem._buildApplyDamagePanel(roll.total),
      rollMode: game.settings.get("core", "rollMode"),
    });

    return roll;
  }

  /**
   * Roll Rogue Sneak Attack damage — convenience wrapper for rollDamage.
   */
  async rollSneakDamage() {
    return this.rollDamage({ sneakAttack: true });
  }

  /**
   * Roll a skill check (1d20 + ranks + ability mod).
   */
  async rollSkill() {
    if (this.type !== "skill") return;
    const actor   = this.actor;
    const ranks   = this.system.ranks ?? 0;
    const ability = this.system.ability ?? "int";
    const abilMod = actor?.system.abilities?.[ability]?.mod ?? 0;
    const total   = ranks + abilMod;
    const sign    = total >= 0 ? "+" : "";
    const abilAbbr = game.i18n.localize(
      CONFIG.EQRPG?.abilityAbbreviations?.[ability] ?? ability.toUpperCase());

    const header = EQItem._buildCardHeader(
      this.img,
      actor?.name ?? "?",
      `<strong>${this.name}</strong> <span class="eq-skill-detail">${ranks} ranks ${sign}${abilMod} ${abilAbbr}</span>`,
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

  /**
   * Execute this spell — roll damage or heal formula if present,
   * otherwise post an effect description to chat.
   * Damage rolls get an apply-damage panel; heal rolls get an apply-heal panel.
   * Saving throw DC is computed as: 10 + spell level + caster's ability modifier.
   * @param {EQActor} caster  The actor casting (may differ from this.actor)
   */
  async castSpell(caster) {
    if (this.type !== "spell") return;
    const actor      = caster ?? this.actor;
    const spellLevel = this.system.spellLevel ?? 1;
    const manaCost   = this.system.manaCost ?? 0;
    const rollMode   = game.settings.get("core", "rollMode");
    const speaker    = actor ? ChatMessage.getSpeaker({ actor }) : undefined;

    // Saving throw DC
    const castAbility = CONFIG.EQRPG?.classes?.[actor?.system.details.class]?.spellcastingAbility;
    const castMod     = castAbility ? (actor?.system.abilities?.[castAbility]?.mod ?? 0) : 0;
    const saveType    = this.system.savingThrow;
    const dc          = 10 + spellLevel + castMod;

    // Meta pills
    const levelPill  = `<span class="eq-spell-meta-pill level">Lvl ${spellLevel}</span>`;
    const manaPill   = `<span class="eq-spell-meta-pill mana">${manaCost} MP</span>`;
    const schoolPill = this.system.school
      ? `<span class="eq-spell-meta-pill school">${this.system.school}</span>`
      : "";
    const recastPill = (this.system.recastTime ?? 0) > 0
      ? `<span class="eq-spell-meta-pill recast">Recast ${this.system.recastTime}s</span>`
      : "";
    const metaHtml = `<div class="eq-spell-meta">${levelPill}${manaPill}${schoolPill}${recastPill}</div>`;

    const saveHtml = saveType
      ? `<div class="eq-spell-save">`
      + `<span class="eq-save-label">${game.i18n.localize("EQRPG.SaveDC")}</span> `
      + `<strong class="eq-save-dc">${dc}</strong> `
      + `<span class="eq-save-type">(${saveType})</span>`
      + `</div>`
      : "";

    const header = EQItem._buildCardHeader(
      this.img,
      actor?.name ?? "?",
      `casts <strong>${this.name}</strong>`,
      false,
    );

    const baseCard = `<div class="eq-chat-card eq-spell-card">`
      + header + metaHtml + saveHtml + `</div>`;

    // Damage spell
    if (this.system.damageFormula) {
      const roll = await new Roll(this.system.damageFormula, actor?.getRollData() ?? {}).evaluate();
      await roll.toMessage({ speaker, flavor: baseCard, rollMode });
      await ChatMessage.create({ speaker, content: EQItem._buildApplyDamagePanel(roll.total), rollMode });
      return roll;
    }

    // Heal spell
    if (this.system.healFormula) {
      const roll = await new Roll(this.system.healFormula, actor?.getRollData() ?? {}).evaluate();
      await roll.toMessage({ speaker, flavor: baseCard, rollMode });
      await ChatMessage.create({ speaker, content: EQItem._buildApplyHealPanel(roll.total), rollMode });
      return roll;
    }

    // Effect / utility spell
    const effectHtml = this.system.effect
      ? `<div class="eq-card-body"><em class="eq-effect-text">${this.system.effect}</em></div>`
      : "";
    await ChatMessage.create({
      speaker,
      content: `<div class="eq-chat-card eq-spell-card">`
             + header + metaHtml + saveHtml + effectHtml + `</div>`,
      rollMode,
    });
    return null;
  }
}
