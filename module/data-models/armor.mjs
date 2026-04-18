const {
  NumberField, StringField, HTMLField, BooleanField, SchemaField,
} = foundry.data.fields;

export class ArmorData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new HTMLField({ initial: "" }),
      acBonus: new NumberField({ integer: true, initial: 0 }),
      type: new StringField({ initial: "light" }),
      maxDexBonus: new NumberField({ integer: true, nullable: true, initial: null }),
      checkPenalty: new NumberField({ integer: true, initial: 0 }),
      attackPenalty: new NumberField({ integer: true, initial: 0 }),
      spellFailure: new NumberField({ integer: true, min: 0, max: 100, initial: 0 }),
      weight: new NumberField({ min: 0, initial: 5 }),
      price: new NumberField({ min: 0, initial: 0 }),
      equipped: new BooleanField({ initial: false }),
      phbName: new StringField({ initial: "" }),
      phbTable: new StringField({ initial: "" }),
      source: new StringField({ initial: "custom" }),
      phbCore: new BooleanField({ initial: false }),
      shieldCategory: new StringField({ initial: "" }),
      speed30: new NumberField({ integer: true, min: 0, initial: 30 }),
      speed20: new NumberField({ integer: true, min: 0, initial: 20 }),
      automation: new SchemaField({
        safeDirect: new BooleanField({ initial: true }),
        needsChoice: new BooleanField({ initial: false }),
        needsTarget: new BooleanField({ initial: false }),
        needsToggle: new BooleanField({ initial: false }),
        notes: new StringField({ initial: "" }),
      }),
    };
  }
}
