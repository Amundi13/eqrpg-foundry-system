const {
  NumberField, StringField, SchemaField, HTMLField,
} = foundry.data.fields;

/**
 * Data model for EverQuest RPG NPCs/monsters.
 */
export class NPCData extends foundry.abstract.TypeDataModel {

  static defineSchema() {
    const abilityField = () => new SchemaField({
      value: new NumberField({ required: true, integer: true, initial: 10 }),
      mod: new NumberField({ required: true, integer: true, initial: 0 }),
    });

    const saveField = () => new SchemaField({
      value: new NumberField({ required: true, integer: true, initial: 0 }),
    });

    return {
      abilities: new SchemaField({
        str: abilityField(),
        dex: abilityField(),
        con: abilityField(),
        int: abilityField(),
        wis: abilityField(),
        cha: abilityField(),
      }),

      details: new SchemaField({
        cr: new NumberField({ required: true, integer: true, min: 0, initial: 1 }),
        type: new StringField({ initial: "" }),
        faction: new StringField({ initial: "" }),
        alignment: new StringField({ initial: "" }),
        speed: new NumberField({ required: true, integer: true, min: 0, initial: 30 }),
      }),

      resources: new SchemaField({
        hp: new SchemaField({
          value: new NumberField({ required: true, integer: true, initial: 10 }),
          max: new NumberField({ required: true, integer: true, initial: 10 }),
        }),
        mana: new SchemaField({
          value: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
        }),
      }),

      combat: new SchemaField({
        ac: new SchemaField({
          value: new NumberField({ required: true, integer: true, initial: 10 }),
        }),
        bab: new NumberField({ required: true, integer: true, initial: 0 }),
        saves: new SchemaField({
          fortitude: saveField(),
          reflex: saveField(),
          will: saveField(),
        }),
        initiative: new SchemaField({
          value: new NumberField({ required: true, integer: true, initial: 0 }),
        }),
      }),

      biography: new HTMLField({ initial: "" }),
    };
  }

  prepareDerivedData() {
    for (const ab of Object.values(this.abilities)) {
      ab.mod = Math.floor((ab.value - 10) / 2);
    }
  }

  getRollData() {
    return { ...this };
  }
}
