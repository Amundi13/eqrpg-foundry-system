const {
  NumberField, StringField, SchemaField, HTMLField,
} = foundry.data.fields;

function getCombatRound() {
  return Math.max(1, Number(game?.combat?.round ?? 1) || 1);
}

function collectEffectSummary(actor) {
  const effects = actor?.effects ?? [];
  const hasteBySource = new Map();
  let slowRank = 0;

  for (const effect of effects) {
    if (effect.disabled) continue;
    const flags = effect.flags?.eqrpg ?? {};
    const hasteRank = Number(flags.hasteRank ?? 0) || 0;
    const hasteSource = String(flags.hasteSource ?? "spell");
    const slow = Number(flags.slowRank ?? 0) || 0;
    if (hasteRank > 0) {
      hasteBySource.set(hasteSource, Math.max(hasteBySource.get(hasteSource) ?? 0, hasteRank));
    }
    slowRank = Math.max(slowRank, slow);
  }

  const hasteRank = Math.min(9, [...hasteBySource.values()].reduce((sum, rank) => sum + rank, 0));
  const net = hasteRank - slowRank;
  return {
    netHasteRank: net > 0 ? net : 0,
    netSlowRank: net < 0 ? Math.abs(net) : 0,
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

/**
 * Data model for EverQuest RPG NPCs/monsters.
 */
export class NPCData extends foundry.abstract.TypeDataModel {

  static defineSchema() {
    const abilityField = () => new SchemaField({
      value: new NumberField({ required: true, integer: true, initial: 10 }),
      mod: new NumberField({ required: true, integer: true, initial: 0 }),
    });

    const saveField = () => new SchemaField({
      value: new NumberField({ required: true, integer: true, initial: 0 }),
    });

    return {
      abilities: new SchemaField({
        str: abilityField(),
        dex: abilityField(),
        con: abilityField(),
        int: abilityField(),
        wis: abilityField(),
        cha: abilityField(),
      }),

      details: new SchemaField({
        cr: new NumberField({ required: true, integer: true, min: 0, initial: 1 }),
        type: new StringField({ initial: "" }),
        faction: new StringField({ initial: "" }),
        alignment: new StringField({ initial: "" }),
        speed: new NumberField({ required: true, integer: true, min: 0, initial: 30 }),
      }),

      resources: new SchemaField({
        hp: new SchemaField({
          value: new NumberField({ required: true, integer: true, initial: 10 }),
          max: new NumberField({ required: true, integer: true, initial: 10 }),
          temp: new NumberField({ required: true, integer: true, initial: 0 }),
          bonus: new NumberField({ required: true, integer: true, initial: 0 }),
        }),
        mana: new SchemaField({
          value: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
        }),
      }),

      combat: new SchemaField({
        ac: new SchemaField({
          value: new NumberField({ required: true, integer: true, initial: 10 }),
        }),
        bab: new NumberField({ required: true, integer: true, initial: 0 }),
        saves: new SchemaField({
          fortitude: saveField(),
          reflex: saveField(),
          will: saveField(),
        }),
        initiative: new SchemaField({
          value: new NumberField({ required: true, integer: true, initial: 0 }),
        }),
        attackMisc: new NumberField({ required: true, integer: true, initial: 0 }),
        magicSaveBonus: new NumberField({ required: true, integer: true, initial: 0 }),
      }),

      biography: new HTMLField({ initial: "" }),
    };
  }

  prepareDerivedData() {
    for (const ab of Object.values(this.abilities)) {
      ab.mod = Math.floor((ab.value - 10) / 2);
    }
    const effectSummary = collectEffectSummary(this.parent);
    const combatRound = getCombatRound();
    this.combat.attackArray = buildAttackArray(
      this.combat.bab,
      effectSummary.netHasteRank,
      effectSummary.netSlowRank,
      combatRound,
    );
    this.combat.ac.tempoBonus = getHasteACBonus(effectSummary.netHasteRank) - getSlowACPenalty(effectSummary.netSlowRank);
    this.combat.weaponDelayMod = getWeaponDelayMod(effectSummary.netHasteRank, effectSummary.netSlowRank);
  }

  getRollData() {
    return { ...this };
  }
}
