const {
  NumberField, StringField, HTMLField, BooleanField,
} = foundry.data.fields;

export class SkillData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new HTMLField({ initial: "" }),
      ranks: new NumberField({ integer: true, min: 0, initial: 0 }),
      ability: new StringField({ initial: "str" }),
      classSkill: new BooleanField({ initial: false }),
      isTradeskill: new BooleanField({ initial: false }),
      armorCheckPenalty: new BooleanField({ initial: false }),
    };
  }
}
