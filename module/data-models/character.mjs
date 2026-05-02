const {
  NumberField, StringField, SchemaField, HTMLField,
  ArrayField,
} = foundry.data.fields;

function getCombatRound() {
  return Math.max(1, Number(game?.combat?.round ?? 1) || 1);
}

function collectEffectSummary(actor) {
  const effects = actor?.effects ?? [];
  const hasteBySource = new Map();
  let slowRank = 0;
  let manaPerRound = 0;
  let speedPct = 0;
  const bonuses = {
    abilities: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
    saves: { fortitude: 0, reflex: 0, will: 0 },
    attack: 0,
    initiative: 0,
    ac: 0,
    hpBonus: 0,
    magicSave: 0,
  };

  for (const effect of effects) {
    if (effect.disabled) continue;
    const flags = effect.flags?.eqrpg ?? {};
    const effectBonuses = flags.bonuses ?? {};
    const hasteRank = Number(flags.hasteRank ?? 0) || 0;
    const hasteSource = String(flags.hasteSource ?? "spell");
    const slow = Number(flags.slowRank ?? 0) || 0;
    const mana = Number(flags.manaPerRound ?? 0) || 0;
    const speed = Number(flags.speedPct ?? 0) || 0;

    if (hasteRank > 0) {
      hasteBySource.set(hasteSource, Math.max(hasteBySource.get(hasteSource) ?? 0, hasteRank));
    }
    slowRank = Math.max(slowRank, slow);
    manaPerRound += mana;
    speedPct = Math.max(speedPct, speed);
    bonuses.attack += Number(effectBonuses.attack ?? 0) || 0;
    bonuses.initiative += Number(effectBonuses.initiative ?? 0) || 0;
    bonuses.ac += Number(effectBonuses.ac ?? 0) || 0;
    bonuses.hpBonus += Number(effectBonuses.hpBonus ?? 0) || 0;
    bonuses.magicSave += Number(effectBonuses.magicSave ?? 0) || 0;
    bonuses.abilities.str += Number(effectBonuses.str ?? 0) || 0;
    bonuses.abilities.dex += Number(effectBonuses.dex ?? 0) || 0;
    bonuses.abilities.con += Number(effectBonuses.con ?? 0) || 0;
    bonuses.abilities.int += Number(effectBonuses.int ?? 0) || 0;
    bonuses.abilities.wis += Number(effectBonuses.wis ?? 0) || 0;
    bonuses.abilities.cha += Number(effectBonuses.cha ?? 0) || 0;
    bonuses.saves.fortitude += Number(effectBonuses.fort ?? 0) || 0;
    bonuses.saves.reflex += Number(effectBonuses.reflex ?? 0) || 0;
    bonuses.saves.will += Number(effectBonuses.will ?? 0) || 0;
  }

  const hasteRank = Math.min(9, [...hasteBySource.values()].reduce((sum, rank) => sum + rank, 0));
  const net = hasteRank - slowRank;
  return {
    hasteRank,
    slowRank,
    netHasteRank: net > 0 ? net : 0,
    netSlowRank: net < 0 ? Math.abs(net) : 0,
    manaPerRound,
    speedPct,
    bonuses,
  };
}

function getHasteACBonus(rank) {
  if (rank >= 7) return 3;
  if (rank >= 4) return 2;
  if (rank >= 1) return 1;
  return 0;
}

function getSlowACPenalty(rank) {
  if (rank >= 5) return 3;
  if (rank >= 3) return 2;
  if (rank >= 1) return 1;
  return 0;
}

function getWeaponDelayMod(netHasteRank, netSlowRank) {
  if (netHasteRank && [1, 3, 6, 8].includes(netHasteRank)) return -1;
  if (netSlowRank && [1, 2].includes(netSlowRank)) return 1;
  return 0;
}

function getHasteExtraAttacks(rank, round) {
  if (rank >= 9) return 2;
  if (rank >= 7) return (round % 2 === 1) ? 1 : 2;
  if (rank >= 5) return 1;
  if (rank >= 4) return (round % 2 === 1) ? 1 : 0;
  if (rank >= 2) return ((round - 1) % 3 === 0) ? 1 : 0;
  return 0;
}

function getSlowAttackLoss(rank, round) {
  if (rank >= 6) return (round % 2 === 1) ? 1 : 0;
  if (rank >= 4) return ((round - 1) % 3 === 0) ? 1 : 0;
  return 0;
}

function buildAttackArray(bab, netHasteRank = 0, netSlowRank = 0, round = 1) {
  const attacks = [];
  if (bab >= 1) attacks.push(bab);
  if (bab >= 6) attacks.push(bab - 5);
  if (bab >= 11) attacks.push(bab - 10);
  if (bab >= 16) attacks.push(bab - 15);
  if (!attacks.length) attacks.push(bab ?? 0);

  let sequence = attacks;
  if (netSlowRank >= 3) sequence = sequence.slice(0, 1);

  const extraAttacks = getHasteExtraAttacks(netHasteRank, round);
  if (sequence.length && extraAttacks > 0) {
    sequence = [...Array.from({ length: extraAttacks }, () => sequence[0]), ...sequence];
  }

  const attacksLost = getSlowAttackLoss(netSlowRank, round);
  if (attacksLost > 0) {
    sequence = sequence.slice(0, Math.max(0, sequence.length - attacksLost));
  }

  return sequence;
}

function describeTempo(netHasteRank = 0, netSlowRank = 0, round = 1) {
  if (netHasteRank > 0) {
    if (netHasteRank >= 9) return "2 extra attacks each round";
    if (netHasteRank >= 7) return (round % 2 === 1) ? "1 extra attack this round" : "2 extra attacks this round";
    if (netHasteRank >= 5) return "1 extra attack each round";
    if (netHasteRank >= 4) return (round % 2 === 1) ? "1 extra attack this round" : "no extra attack this round";
    if (netHasteRank >= 2) return ((round - 1) % 3 === 0) ? "1 extra attack this round" : "no extra attack this round";
    return "faster weapon delay";
  }
  if (netSlowRank > 0) {
    if (netSlowRank >= 6) return (round % 2 === 1) ? "lose 1 attack this round" : "reduced attack rate";
    if (netSlowRank >= 4) return ((round - 1) % 3 === 0) ? "lose 1 attack this round" : "reduced attack rate";
    if (netSlowRank >= 3) return "cannot make full attacks";
    return "slowed weapon delay";
  }
  return "";
}

/**
 * Data model for EverQuest RPG player characters.
 */
export class CharacterData extends foundry.abstract.TypeDataModel {

  _getAbilityValue(key) {
    const ability = this.abilities?.[key];
    if (!ability) return 10;
    if (Number.isFinite(ability.value)) return ability.value;
    return Number(ability.base + ability.racial + ability.misc) || 10;
  }

  _getAbilityMod(key) {
    const ability = this.abilities?.[key];
    if (!ability) return 0;
    if (Number.isFinite(ability.mod)) return ability.mod;
    const total = this._getAbilityValue(key);
    return Math.floor((total - 10) / 2);
  }

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
        size: new StringField({ initial: "medium" }),
        speed: new NumberField({ required: true, integer: true, min: 0, initial: 30 }),
        speedModified: new NumberField({ required: true, integer: true, min: 0, initial: 30 }),
      }),

      // --- Resources ---
      resources: new SchemaField({
        hp: new SchemaField({
          value: new NumberField({ required: true, integer: true, min: -10, initial: 10 }),
          max: new NumberField({ required: true, integer: true, initial: 10 }),
          temp: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          bonus: new NumberField({ required: true, integer: true, initial: 0 }),
        }),
        mana: new SchemaField({
          value: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
        }),
        xp: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
      }),

      wealth: new SchemaField({
        platinum: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
        gold: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
        silver: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
        copper: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
      }),

      // --- Combat ---
      combat: new SchemaField({
        ac: new SchemaField({
          base: new NumberField({ required: true, integer: true, initial: 10 }),
          armor: new NumberField({ required: true, integer: true, initial: 0 }),
          shield: new NumberField({ required: true, integer: true, initial: 0 }),
          natural: new NumberField({ required: true, integer: true, initial: 0 }),
          misc: new NumberField({ required: true, integer: true, initial: 0 }),
        }),
        bab: new NumberField({ required: true, integer: true, initial: 0 }),
        saves: new SchemaField({
          fortitude: saveField(),
          reflex: saveField(),
          will: saveField(),
        }),
        initiative: new SchemaField({
          misc: new NumberField({ required: true, integer: true, initial: 0 }),
        }),
        attackMisc: new NumberField({ required: true, integer: true, initial: 0 }),
        magicSaveBonus: new NumberField({ required: true, integer: true, initial: 0 }),
      }),

      // --- Spell Memorization ---
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

  prepareDerivedData() {
    const config = CONFIG.EQRPG;
    const effectSummary = collectEffectSummary(this.parent);

    for (const key of Object.keys(config.abilities ?? {})) {
      const ab = this.abilities?.[key];
      if (!ab) continue;
      ab.buff = effectSummary.bonuses.abilities[key] ?? 0;
      ab.value = ab.base + ab.racial + ab.misc + ab.buff;
      ab.mod = Math.floor((ab.value - 10) / 2);
    }

    const level = this.details.level;
    const classKey = this.details.class;
    const raceKey = this.details.race;
    const classConfig = config.classes?.[classKey];

    if (classConfig) {
      const babFn = config.babProgression[classConfig.babProgression];
      this.combat.bab = babFn ? babFn(level) : 0;
    }

    const combatRound = getCombatRound();
    this.effectSummary = effectSummary;
    this.combat.attackArray = buildAttackArray(
      this.combat.bab,
      effectSummary.netHasteRank,
      effectSummary.netSlowRank,
      combatRound,
    );
    this.combat.tempo = {
      round: combatRound,
      hasteRank: effectSummary.hasteRank,
      slowRank: effectSummary.slowRank,
      netHasteRank: effectSummary.netHasteRank,
      netSlowRank: effectSummary.netSlowRank,
      acBonus: getHasteACBonus(effectSummary.netHasteRank) - getSlowACPenalty(effectSummary.netSlowRank),
      weaponDelayMod: getWeaponDelayMod(effectSummary.netHasteRank, effectSummary.netSlowRank),
      note: describeTempo(effectSummary.netHasteRank, effectSummary.netSlowRank, combatRound),
    };

    const raceConfig = config.races?.[raceKey] ?? {};
    const raceAbilitiesList = raceConfig.abilities ?? [];
    const sizeKey = raceConfig.size ?? "medium";
    const sizeACBonus = Number(config.sizeACModifiers?.[sizeKey] ?? 0) || 0;
    const sizeAttackMod = Number(config.sizeAttackModifiers?.[sizeKey] ?? 0) || 0;
    const halflingFortitudeBonus = raceAbilitiesList.includes("halflingFortitude") ? 1 : 0;

    if (classConfig) {
      for (const [saveKey, save] of Object.entries(this.combat.saves)) {
        const progression = classConfig.saves[saveKey];
        const progTable = config.saveProgression[progression];
        save.base = Array.isArray(progTable) ? (progTable[level] ?? 0) : 0;
        const racialSaveBonus = saveKey === "fortitude" ? halflingFortitudeBonus : 0;
        save.buff = effectSummary.bonuses.saves[saveKey] ?? 0;
        save.value = save.base + this._getSaveAbilityMod(saveKey) + save.misc + racialSaveBonus + save.buff;
      }
    } else {
      this.combat.saves.fortitude.buff = effectSummary.bonuses.saves.fortitude;
      this.combat.saves.reflex.buff = effectSummary.bonuses.saves.reflex;
      this.combat.saves.will.buff = effectSummary.bonuses.saves.will;
      this.combat.saves.fortitude.value = this.combat.saves.fortitude.base + this.combat.saves.fortitude.misc + halflingFortitudeBonus + this.combat.saves.fortitude.buff;
      this.combat.saves.reflex.value = this.combat.saves.reflex.base + this.combat.saves.reflex.misc + this.combat.saves.reflex.buff;
      this.combat.saves.will.value = this.combat.saves.will.base + this.combat.saves.will.misc + this.combat.saves.will.buff;
    }

    const items = this.parent?.items;
    this.combat.ac.maxDexBonus = null;
    this.combat.ac.dex = this._getAbilityMod("dex");
    this.combat.armorCheckPenalty = 0;
    this.combat.spellFailure = 0;
    let featFort = 0, featReflex = 0, featWill = 0, featInit = 0, featAC = 0, featHP = 0, featAttack = 0;
    if (items) {
      let armorBonus = 0;
      let shieldBonus = 0;
      let maxDexBonus = null;
      let armorCheckPenalty = 0;
      let armorAttackPenalty = 0;
      let spellFailure = 0;
      for (const item of items) {
        if (item.type === "armor" && item.system.equipped) {
          if (item.system.type === "shield") {
            shieldBonus = Math.max(shieldBonus, item.system.acBonus);
          } else {
            armorBonus = Math.max(armorBonus, item.system.acBonus);
            const itemMaxDex = Number.isInteger(item.system.maxDexBonus) ? item.system.maxDexBonus : null;
            if (itemMaxDex !== null) {
              maxDexBonus = maxDexBonus === null ? itemMaxDex : Math.min(maxDexBonus, itemMaxDex);
            }
          }
          armorCheckPenalty += item.system.checkPenalty ?? 0;
          armorAttackPenalty += item.system.attackPenalty ?? 0;
          spellFailure += item.system.spellFailure ?? 0;
        }
        if (item.type === "feat") {
          const b = item.system.bonuses;
          featFort += b?.fort ?? 0;
          featReflex += b?.reflex ?? 0;
          featWill += b?.will ?? 0;
          featInit += b?.init ?? 0;
          featAC += b?.ac ?? 0;
          featHP += b?.hp ?? 0;
          featAttack += b?.attack ?? 0;
        }
      }
      this.combat.ac.armor = armorBonus;
      this.combat.ac.shield = shieldBonus;
      this.combat.ac.maxDexBonus = maxDexBonus;
      this.combat.armorCheckPenalty = armorCheckPenalty;
      this.combat.spellFailure = spellFailure;
      featAttack += armorAttackPenalty;
    }

    this.combat.saves.fortitude.value += featFort;
    this.combat.saves.reflex.value += featReflex;
    this.combat.saves.will.value += featWill;

    this.combat.ac.natural = config.raceNaturalAC?.[raceKey] ?? 0;

    const ac = this.combat.ac;
    const dexToAC = Number.isInteger(ac.maxDexBonus)
      ? Math.min(this._getAbilityMod("dex"), ac.maxDexBonus)
      : this._getAbilityMod("dex");
    ac.dex = dexToAC;
    ac.size = sizeACBonus;
    ac.buff = effectSummary.bonuses.ac;
    ac.value = ac.base + ac.armor + ac.shield + ac.natural + dexToAC + ac.misc + sizeACBonus + ac.buff;

    if (classKey === "monk" && ac.armor === 0 && ac.shield === 0) {
      const monkBonus = this._getAbilityMod("wis") + Math.floor(level / 5);
      ac.monkBonus = monkBonus;
      ac.value += monkBonus;
    } else {
      ac.monkBonus = 0;
    }
    ac.value += featAC;
    ac.value += this.combat.tempo.acBonus;

    this.combat.initiative.buff = effectSummary.bonuses.initiative;
    this.combat.initiative.value = this._getAbilityMod("dex") + this.combat.initiative.misc + featInit + this.combat.initiative.buff;
    this.combat.sizeAttackMod = sizeAttackMod;
    this.combat.attackBuff = effectSummary.bonuses.attack;
    this.combat.attackBonus = featAttack + (this.combat.attackMisc ?? 0) + sizeAttackMod + this.combat.attackBuff;
    this.combat.magicSaveBuff = effectSummary.bonuses.magicSave;
    this.combat.magicSaveTotal = (this.combat.magicSaveBonus ?? 0) + this.combat.magicSaveBuff;
    this.combat.weaponDelayMod = this.combat.tempo.weaponDelayMod;

    if (classConfig) {
      const hitDie = classConfig.hitDie;
      const avgPerLevel = Math.floor(hitDie / 2) + 1;
      this.resources.hp.max = hitDie + (avgPerLevel * (level - 1)) + (this._getAbilityMod("con") * level);
      if (this.resources.hp.max < 1) this.resources.hp.max = 1;
    }
    this.resources.hp.buff = effectSummary.bonuses.hpBonus;
    this.resources.hp.max += featHP + (this.resources.hp.bonus ?? 0) + this.resources.hp.buff;

    if (classConfig?.spellcastingAbility) {
      const castAbility = classConfig.spellcastingAbility;
      const castMod = this._getAbilityMod(castAbility);
      this.resources.mana.max = (castMod > 0 && level > 0)
        ? (castMod * 2) * level
        : 0;

      const baseRegen = classKey === "bard" ? 0 : Math.max(1, Math.floor(level / 5));
      let meditateBonus = 0;
      if (items && classKey !== "bard") {
        for (const item of items) {
          if (item.type === "skill" && item.name.toLowerCase().includes("meditation")) {
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
    this.combatManaRegen = effectSummary.manaPerRound;
    this.details.size = sizeKey;
    this.details.speed = config.races?.[raceKey]?.speed ?? 30;
    this.details.speedModified = Math.round(this.details.speed * (1 + (effectSummary.speedPct / 100)));
    this.hpState = this.resources.hp.value <= -10
      ? "dead"
      : this.resources.hp.value < 0
        ? "unconscious"
        : "alive";

    const currentXP = this.resources.xp;
    const xpTable = config.xpThresholds ?? {};
    const thisLevelXP = xpTable[level] ?? 0;
    const nextLevelXP = xpTable[level + 1] ?? null;
    const xpRange = nextLevelXP !== null ? (nextLevelXP - thisLevelXP) : 1;
    const xpEarned = Math.max(0, currentXP - thisLevelXP);
    this.xpProgress = {
      current: currentXP,
      thisLevel: thisLevelXP,
      nextLevel: nextLevelXP,
      earned: xpEarned,
      range: xpRange,
      percent: nextLevelXP !== null ? Math.min(100, (xpEarned / xpRange) * 100) : 100,
      ready: nextLevelXP !== null && currentXP >= nextLevelXP,
      maxLevel: nextLevelXP === null,
    };

    this.pointBuy = { spent: 0, remaining: config.pointBuyTotal };
    for (const key of Object.keys(this.abilities)) {
      const base = this.abilities[key].base;
      const cost = config.pointBuyCost[base] ?? 0;
      this.pointBuy.spent += cost;
    }
    this.pointBuy.remaining = config.pointBuyTotal - this.pointBuy.spent;

    const classSkillPoints = classConfig?.skillPoints ?? 0;
    const intMod = this._getAbilityMod("int");
    this.skillProgression = {
      firstLevel: Math.max(0, (classSkillPoints + intMod) * 4),
      perLevel: Math.max(0, classSkillPoints + intMod),
      classBase: classSkillPoints,
    };

    this.encumbrance = { current: 0, max: 15 * this._getAbilityValue("str") };
    if (items) {
      for (const item of items) {
        const weight = item.system.weight ?? 0;
        const qty = item.system.quantity ?? 1;
        this.encumbrance.current += weight * qty;
      }
      this.encumbrance.current = Math.round(this.encumbrance.current * 10) / 10;
    }

    this.classFeatures = {};

    if (classKey === "rogue") {
      this.classFeatures.sneakAttackDice = Math.ceil(level / 2);
    }

    if (classKey === "monk") {
      const dieTable = [0, 4, 4, 4, 6, 6, 6, 8, 8, 8, 8, 10, 10, 10, 10, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12];
      this.classFeatures.unarmedDamageDie = dieTable[level] ?? 4;
    }

    if (classKey === "paladin") {
      const layMod = this._getAbilityMod("wis") + this._getAbilityMod("cha");
      this.classFeatures.layOnHandsPool = Math.max(0, layMod * level);
    }

    if (classKey === "shadowknight") {
      this.classFeatures.harmTouchDamage = level * 3;
      this.classFeatures.harmTouchDC = 10 + this._getAbilityMod("int") + Math.floor(level / 2);
      this.classFeatures.leechTouch = level >= 20;
    }

    this.raceAbilities = config.races?.[raceKey]?.abilities ?? [];
    this.hasRegeneration = this.raceAbilities.includes("regeneration");
    this.regenRate = this.hasRegeneration ? 1 : 0;
    this.hasStunImmunity = this.raceAbilities.includes("stun_immunity");
    this.hasColdResistance = this.raceAbilities.includes("coldResistance");
    this.coldResistBonus = this.hasColdResistance ? 4 : 0;
    this.hasSpellShielding = this.raceAbilities.includes("spellShielding");
    this.halflingFortitudeBonus = halflingFortitudeBonus;
  }

  _getSaveAbilityMod(saveKey) {
    switch (saveKey) {
      case "fortitude": return this._getAbilityMod("con");
      case "reflex": return this._getAbilityMod("dex");
      case "will": return this._getAbilityMod("wis");
      default: return 0;
    }
  }

  getRollData() {
    const data = { ...this };
    return data;
  }
}
