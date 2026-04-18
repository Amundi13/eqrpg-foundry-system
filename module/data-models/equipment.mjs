const {
  NumberField, StringField, HTMLField, BooleanField, SchemaField,
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
      phbName: new StringField({ initial: "" }),
      phbTable: new StringField({ initial: "" }),
      source: new StringField({ initial: "custom" }),
      phbCore: new BooleanField({ initial: false }),
      itemCategory: new StringField({ initial: "gear" }),
      ammoType: new StringField({ initial: "" }),
      automation: new SchemaField({
        safeDirect: new BooleanField({ initial: false }),
        needsChoice: new BooleanField({ initial: false }),
        needsTarget: new BooleanField({ initial: false }),
        needsToggle: new BooleanField({ initial: false }),
        notes: new StringField({ initial: "" }),
      }),
    };
  }
}
