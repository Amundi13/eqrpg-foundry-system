const {
  NumberField, StringField, HTMLField, BooleanField,
} = foundry.data.fields;

export class EquipmentData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new HTMLField({ initial: "" }),
      quantity: new NumberField({ integer: true, min: 0, initial: 1 }),
      weight: new NumberField({ min: 0, initial: 1 }),
      price: new NumberField({ min: 0, initial: 0 }),
      equipped: new BooleanField({ initial: false }),
      slot: new StringField({ initial: "" }),
    };
  }
}
