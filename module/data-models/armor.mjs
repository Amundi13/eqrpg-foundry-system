const {
  NumberField, StringField, HTMLField, BooleanField,
} = foundry.data.fields;

export class ArmorData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new HTMLField({ initial: "" }),
      acBonus: new NumberField({ integer: true, initial: 0 }),
      type: new StringField({ initial: "light" }),
      maxDexBonus: new NumberField({ integer: true, nullable: true, initial: null }),
      weight: new NumberField({ min: 0, initial: 5 }),
      price: new NumberField({ min: 0, initial: 0 }),
      equipped: new BooleanField({ initial: false }),
    };
  }
}
