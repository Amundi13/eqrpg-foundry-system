const {
  StringField, HTMLField, NumberField, SchemaField,
} = foundry.data.fields;

export class FeatData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description:   new HTMLField({ initial: "" }),
      category:      new StringField({ initial: "general" }),
      prerequisites: new StringField({ initial: "None" }),
      benefit:       new StringField({ initial: "" }),
      special:       new StringField({ initial: "" }),
      // Passive stat bonuses applied automatically while this feat is on the actor
      bonuses: new SchemaField({
        fort:   new NumberField({ required: true, integer: true, initial: 0 }),
        reflex: new NumberField({ required: true, integer: true, initial: 0 }),
        will:   new NumberField({ required: true, integer: true, initial: 0 }),
        init:   new NumberField({ required: true, integer: true, initial: 0 }),
        ac:     new NumberField({ required: true, integer: true, initial: 0 }),
        hp:     new NumberField({ required: true, integer: true, initial: 0 }),
        attack: new NumberField({ required: true, integer: true, initial: 0 }),
      }),
    };
  }
}
