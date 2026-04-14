const {
  NumberField, StringField, HTMLField,
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
    };
  }
}
