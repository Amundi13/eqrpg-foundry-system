const {
  NumberField, StringField, HTMLField, BooleanField, ArrayField,
} = foundry.data.fields;

export class WeaponData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new HTMLField({ initial: "" }),
      damage: new StringField({ initial: "1d8" }),
      damageType: new StringField({ initial: "slashing" }),
      attackBonus: new NumberField({ integer: true, initial: 0 }),
      range: new NumberField({ integer: true, min: 0, initial: 0 }),
      weight: new NumberField({ min: 0, initial: 1 }),
      price: new NumberField({ min: 0, initial: 0 }),
      delay:     new NumberField({ integer: true, min: 1, initial: 4 }),
      critRange: new NumberField({ integer: true, min: 1, max: 20, initial: 20 }),
      critMult:  new NumberField({ integer: true, min: 1, initial: 2 }),
      equipped: new BooleanField({ initial: false }),
      properties: new ArrayField(new StringField()),
    };
  }
}
