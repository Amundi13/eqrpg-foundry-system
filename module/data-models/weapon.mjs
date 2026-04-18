const {
  NumberField, StringField, HTMLField, BooleanField, ArrayField, SchemaField,
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
      phbName: new StringField({ initial: "" }),
      phbTable: new StringField({ initial: "" }),
      source: new StringField({ initial: "custom" }),
      phbCore: new BooleanField({ initial: false }),
      proficiency: new StringField({ initial: "simple" }),
      combatClass: new StringField({ initial: "melee" }),
      size: new StringField({ initial: "medium" }),
      handedness: new StringField({ initial: "one-handed" }),
      damageTypes: new ArrayField(new StringField()),
      automation: new SchemaField({
        safeDirect: new BooleanField({ initial: true }),
        needsAmmo: new BooleanField({ initial: false }),
        needsChoice: new BooleanField({ initial: false }),
        needsTarget: new BooleanField({ initial: false }),
        needsToggle: new BooleanField({ initial: false }),
        notes: new StringField({ initial: "" }),
      }),
    };
  }
}
