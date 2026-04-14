const {
  NumberField, StringField, SchemaField, HTMLField,
  ArrayField, BooleanField,
} = foundry.data.fields;

/**
 * Data model for EverQuest RPG player characters.
 */
export class CharacterData extends foundry.abstract.TypeDataModel {

  static defineSchema() {
    const abilityField = () => new SchemaField({
      base: new NumberField({ required: true, integer: true, min: 3, max: 18, initial: 8 }),
      racial: new NumberField({ required: true, integer: true, initial: 0 }),
      misc: new NumberField({ required: true, integer: true, initial: 0 }),
    });

    const saveField = () => new SchemaField({
      base: new NumberField({ required: true, integer: true, initial: 0 }),
      misc: new NumberField({ required: true, integer: true, initial: 0 }),
    });

    return {
      // --- Abilities ---
      abilities: new SchemaField({
        str: abilityField(),
        dex: abilityField(),
        con: abilityField(),
        int: abilityField(),
        wis: abilityField(),
        cha: abilityField(),
      }),

      // --- Details ---
      details: new SchemaField({
        race: new StringField({ required: true, initial: "" }),
        class: new StringField({ required: true, initial: "" }),
        level: new NumberField({ required: true, integer: true, min: 1, max: 30, initial: 1 }),
        alignment: new StringField({ initial: "" }),
        deity: new StringField({ initial: "" }),
      }),

      // --- Resources ---
      resources: new SchemaField({
        hp: new SchemaField({
          value: new NumberField({ required: true, integer: true, initial: 10 }),
          max: new NumberField({ required: true, integer: true, initial: 10 }),
          temp: new NumberField({ required: true, integer: true, initial: 0 }),
        }),
        mana: new SchemaField({
          value: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
        }),
        xp: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
      }),

      // --- Combat ---
      combat: new SchemaField({
        ac: new SchemaField({
          base:    new NumberField({ required: true, integer: true, initial: 10 }),
          armor:   new NumberField({ required: true, integer: true, initial: 0 }),
          shield:  new NumberField({ required: true, integer: true, initial: 0 }),
          natural: new NumberField({ required: true, integer: true, initial: 0 }),
          misc:    new NumberField({ required: true, integer: true, initial: 0 }),
        }),
        bab: new NumberField({ required: true, integer: true, initial: 0 }),
        saves: new SchemaField({
          fortitude: saveField(),
          reflex:    saveField(),
          will:      saveField(),
        }),
        initiative: new SchemaField({
          misc: new NumberField({ required: true, integer: true, initial: 0 }),
        }),
      }),

      // --- Spell Memorization (8 slots) ---
      spellSlots: new ArrayField(
        new SchemaField({
          itemId: new StringField({ initial: "" }),
          cooldownRemaining: new NumberField({ integer: true, min: 0, initial: 0 }),
        }),
        { initial: Array.from({ length: 8 }, () => ({ itemId: "", cooldownRemaining: 0 })) }
      ),

      // --- Biography ---
      biography: new HTMLField({ initial: "" }),
    };
  }

  // -------------------------------------------------------------------------
  // Derived Data
  // -------------------------------------------------------------------------

  prepareDerivedData() {
    const config = CONFIG.EQRPG;

    // Ability totals and modifiers
    for (const key of Object.keys(this.abilities)) {
      const ab = this.abilities[key];
      ab.value = ab.base + ab.racial + ab.misc;
      ab.mod = Math.floor((ab.value - 10) / 2);
    }

    const level     = this.details.level;
    const classKey  = this.details.class;
    const raceKey   = this.details.race;
    const classConfig = config.classes?.[classKey];

    // BAB
    if (classConfig) {
      const babFn = config.babProgression[classConfig.babProgression];
      this.combat.bab = babFn ? babFn(level) : 0;
    }

    // Iterative attack array (PHB: second attack at BAB 6, third at 11, fourth at 16)
    const bab = this.combat.bab;
    const attacks = [];
    if (bab >= 1)  attacks.push(bab);
    if (bab >= 6)  attacks.push(bab - 5);
    if (bab >= 11) attacks.push(bab - 10);
    if (bab >= 16) attacks.push(bab - 15);
    this.combat.attackArray = attacks;

    // Saves
    // Halfling luck: +1 racial bonus to all saves
    const raceAbilitiesList = config.races?.[raceKey]?.abilities ?? [];
    const luckBonus = raceAbilitiesList.includes("luck") ? 1 : 0;

    if (classConfig) {
      for (const [saveKey, save] of Object.entries(this.combat.saves)) {
        const progression = classConfig.saves[saveKey];
        const progFn = config.saveProgression[progression];
        save.base  = progFn ? progFn(level) : 0;
        save.value = save.base + this._getSaveAbilityMod(saveKey) + save.misc + luckBonus;
      }
    } else {
      for (const save of Object.values(this.combat.saves)) {
        save.value = save.base + save.misc + luckBonus;
      }
    }

    // Equipment effects + feat passive bonuses — single pass over all items
    const items = this.parent?.items;
    let featFort = 0, featReflex = 0, featWill = 0, featInit = 0, featAC = 0, featHP = 0;
    if (items) {
      let armorBonus  = 0;
      let shieldBonus = 0;
      for (const item of items) {
        if (item.type === "armor" && item.system.equipped) {
          if (item.system.type === "shield") {
            shieldBonus = Math.max(shieldBonus, item.system.acBonus);
          } else {
            armorBonus = Math.max(armorBonus, item.system.acBonus);
          }
        }
        if (item.type === "feat") {
          const b = item.system.bonuses;
          featFort   += b?.fort   ?? 0;
          featReflex += b?.reflex ?? 0;
          featWill   += b?.will   ?? 0;
          featInit   += b?.init   ?? 0;
          featAC     += b?.ac     ?? 0;
          featHP     += b?.hp     ?? 0;
        }
      }
      this.combat.ac.armor  = armorBonus;
      this.combat.ac.shield = shieldBonus;
    }

    // Apply feat save bonuses to already-computed save values
    this.combat.saves.fortitude.value += featFort;
    this.combat.saves.reflex.value    += featReflex;
    this.combat.saves.will.value      += featWill;

    // Natural AC from race (Iksar: +4 natural armor per PHB)
    this.combat.ac.natural = config.raceNaturalAC?.[raceKey] ?? 0;

    // AC total (base + armor + shield + natural + DEX mod + misc)
    const ac = this.combat.ac;
    ac.value = ac.base + ac.armor + ac.shield + ac.natural + this.abilities.dex.mod + ac.misc;

    // Monk unarmored AC bonus: WIS mod + floor(level/5) when no armor or shield equipped
    if (classKey === "monk" && ac.armor === 0 && ac.shield === 0) {
      const monkBonus = this.abilities.wis.mod + Math.floor(level / 5);
      ac.monkBonus = monkBonus;
      ac.value += monkBonus;
    } else {
      ac.monkBonus = 0;
    }
    // Feat AC bonus
    ac.value += featAC;

    // Initiative
    this.combat.initiative.value = this.abilities.dex.mod + this.combat.initiative.misc + featInit;

    // HP max = hitDie at level 1 + avg(hitDie) per additional level + CON mod * level
    if (classConfig) {
      const hitDie      = classConfig.hitDie;
      const avgPerLevel = Math.floor(hitDie / 2) + 1;
      this.resources.hp.max = hitDie + (avgPerLevel * (level - 1)) + (this.abilities.con.mod * level);
      if (this.resources.hp.max < 1) this.resources.hp.max = 1;
    }
    // Feat HP bonus (Toughness etc.)
    this.resources.hp.max += featHP;

    // Mana max and regen rate (casters only)
    // PHB formula: mana max = (spellcasting ability modifier × 2) × effective caster level
    // Hybrid classes (Beastlord, Paladin, Ranger, Shadow Knight) start casting at level 5;
    // their effective caster level = class level − 4 (they have no mana until level 5).
    if (classConfig?.spellcastingAbility) {
      const castAbility = classConfig.spellcastingAbility;
      const castMod     = this.abilities[castAbility].mod;

      const hybridClasses = ["beastlord", "paladin", "ranger", "shadowknight"];
      const isHybrid = hybridClasses.includes(classKey);
      const effectiveCasterLevel = isHybrid ? Math.max(0, level - 4) : level;

      this.resources.mana.max = (castMod > 0 && effectiveCasterLevel > 0)
        ? (castMod * 2) * effectiveCasterLevel
        : 0;

      const baseRegen = Math.max(1, Math.floor(level / 5));
      let meditateBonus = 0;
      if (items) {
        for (const item of items) {
          if (item.type === "skill" && item.name.toLowerCase().includes("meditate")) {
            meditateBonus = Math.floor((item.system.ranks ?? 0) / 5);
            break;
          }
        }
      }
      this.manaRegen = baseRegen + Math.max(0, castMod) + meditateBonus;
    } else {
      this.resources.mana.max = 0;
      this.manaRegen = 0;
    }

    // XP progress toward next level
    const currentXP   = this.resources.xp;
    const xpTable     = config.xpThresholds ?? {};
    const thisLevelXP = xpTable[level]     ?? 0;
    const nextLevelXP = xpTable[level + 1] ?? null;
    const xpRange     = nextLevelXP !== null ? (nextLevelXP - thisLevelXP) : 1;
    const xpEarned    = Math.max(0, currentXP - thisLevelXP);
    this.xpProgress = {
      current:   currentXP,
      thisLevel: thisLevelXP,
      nextLevel: nextLevelXP,
      earned:    xpEarned,
      range:     xpRange,
      percent:   nextLevelXP !== null ? Math.min(100, (xpEarned / xpRange) * 100) : 100,
      ready:     nextLevelXP !== null && currentXP >= nextLevelXP,
      maxLevel:  nextLevelXP === null,
    };

    // Point-buy tracking (not stored, computed for display)
    this.pointBuy = { spent: 0, remaining: config.pointBuyTotal };
    for (const key of Object.keys(this.abilities)) {
      const base = this.abilities[key].base;
      const cost = config.pointBuyCost[base] ?? 0;
      this.pointBuy.spent += cost;
    }
    this.pointBuy.remaining = config.pointBuyTotal - this.pointBuy.spent;

    // Encumbrance
    this.encumbrance = { current: 0, max: 15 * this.abilities.str.value };
    if (items) {
      for (const item of items) {
        const weight = item.system.weight ?? 0;
        const qty    = item.system.quantity ?? 1;
        this.encumbrance.current += weight * qty;
      }
      this.encumbrance.current = Math.round(this.encumbrance.current * 10) / 10;
    }

    // -------------------------------------------------------------------------
    // Class Features (PHB)
    // -------------------------------------------------------------------------
    this.classFeatures = {};

    if (classKey === "rogue") {
      // Sneak Attack: +1d6 at level 1, +1d6 every 2 levels
      this.classFeatures.sneakAttackDice = Math.ceil(level / 2);
    }

    if (classKey === "monk") {
      // Unarmed damage die scales with level
      const dieTable = [0,4,4,4,6,6,6,8,8,8,8,10,10,10,10,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12];
      this.classFeatures.unarmedDamageDie = dieTable[level] ?? 4;
    }

    if (classKey === "paladin") {
      // Lay on Hands: level × CHA modifier HP (0 if CHA mod ≤ 0)
      this.classFeatures.layOnHandsPool = Math.max(0, level * Math.max(0, this.abilities.cha.mod));
    }

    if (classKey === "berserker") {
      // Rage: +1d6 bonus damage at level 1, +1d6 per 5 levels
      this.classFeatures.rageDice = Math.floor(level / 5) + 1;
    }

    if (classKey === "shadowknight") {
      // Lifetap: drain Nd6 HP from target and heal self
      this.classFeatures.lifetapDice = Math.ceil(level / 3);
    }

    // -------------------------------------------------------------------------
    // Race Abilities (passive list + mechanical flags)
    // -------------------------------------------------------------------------
    this.raceAbilities      = config.races?.[raceKey]?.abilities ?? [];
    this.hasRegeneration    = this.raceAbilities.includes("regeneration");
    this.regenRate          = this.hasRegeneration ? 1 : 0;  // HP per combat round
    this.hasStunImmunity    = this.raceAbilities.includes("stun_immunity");
    this.hasColdResistance  = this.raceAbilities.includes("coldResistance");
    this.coldResistBonus    = this.hasColdResistance ? 4 : 0;  // +4 Fort vs cold effects
    this.hasSpellShielding  = this.raceAbilities.includes("spellShielding");
    this.luckBonus          = luckBonus;  // +1 all saves (Halfling)
  }

  /**
   * Get the ability modifier used for a saving throw.
   */
  _getSaveAbilityMod(saveKey) {
    switch (saveKey) {
      case "fortitude": return this.abilities.con.mod;
      case "reflex":    return this.abilities.dex.mod;
      case "will":      return this.abilities.wis.mod;
      default:          return 0;
    }
  }

  /**
   * Provide data for roll formulas.
   */
  getRollData() {
    const data = { ...this };
    return data;
  }
}
