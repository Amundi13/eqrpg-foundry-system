const {
  NumberField, StringField, HTMLField, BooleanField, SchemaField,
} = foundry.data.fields;

export class ConsumableData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description:     new HTMLField({ initial: "" }),
      quantity:        new NumberField({ integer: true, min: 0, initial: 1 }),
      weight:          new NumberField({ min: 0, initial: 0.1 }),
      price:           new NumberField({ min: 0, initial: 0 }),
      consumableType:  new StringField({ initial: "potion" }),
      // What happens when used
      healFormula:     new StringField({ initial: "" }),   // e.g. "2d8+5"
      manaRestore:     new NumberField({ integer: true, min: 0, initial: 0 }),
      effect:          new StringField({ initial: "" }),   // flavour / buff text
      phbName:         new StringField({ initial: "" }),
      phbTable:        new StringField({ initial: "" }),
      source:          new StringField({ initial: "custom" }),
      phbCore:         new BooleanField({ initial: false }),
      itemCategory:    new StringField({ initial: "misc" }),
      automation:      new SchemaField({
        safeDirect: new BooleanField({ initial: false }),
        needsChoice: new BooleanField({ initial: false }),
        needsTarget: new BooleanField({ initial: false }),
        needsToggle: new BooleanField({ initial: false }),
        notes: new StringField({ initial: "" }),
      }),
    };
  }
}
