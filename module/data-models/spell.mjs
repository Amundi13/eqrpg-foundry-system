const {
  NumberField, StringField, HTMLField, ArrayField,
} = foundry.data.fields;

export class SpellData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new HTMLField({ initial: "" }),
      spellLevel: new NumberField({ required: true, integer: true, min: 1, max: 15, initial: 1 }),
      manaCost: new NumberField({ required: true, integer: true, min: 0, initial: 2 }),
      castingTime: new StringField({ initial: "1 action" }),
      range: new StringField({ initial: "touch" }),
      duration: new StringField({ initial: "instant" }),
      effect: new StringField({ initial: "" }),
      damageFormula: new StringField({ initial: "" }),
      healFormula: new StringField({ initial: "" }),
      school: new StringField({ initial: "" }),
      classes: new ArrayField(new StringField()),
      classLevels: new ArrayField(new StringField()),
      spellLine: new StringField({ initial: "" }),
      rawLevel: new StringField({ initial: "" }),
      components: new StringField({ initial: "" }),
      targetEffect: new StringField({ initial: "" }),
      spellResistance: new StringField({ initial: "" }),
      materialComponent: new StringField({ initial: "" }),
      sourcePage: new StringField({ initial: "" }),
      verified: new StringField({ initial: "" }),
      notes: new StringField({ initial: "" }),
      recastTime: new NumberField({ integer: true, min: 0, initial: 0 }),
      savingThrow: new StringField({ initial: "" }),
      saveEffect: new StringField({ initial: "" }),
      saveDC: new StringField({ initial: "" }),
      deliveryType: new StringField({ initial: "utility" }),
      attackMode: new StringField({ initial: "" }),
      attackBonus: new NumberField({ integer: true, initial: 0 }),
    };
  }
}
