const { NumberField, StringField } = foundry.data.fields;

export class FactionData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      standing: new NumberField({ required: true, integer: true, min: -1500, max: 1500, initial: 0 }),
      notes:    new StringField({ initial: "" }),
    };
  }

  /** Return the standing tier config entry for the current value. */
  get standingTier() {
    const tiers = CONFIG.EQRPG?.factionStandings ?? [];
    for (const tier of tiers) {
      if (this.standing >= tier.min) return tier;
    }
    return tiers[tiers.length - 1];   // fallback to KOS
  }
}
