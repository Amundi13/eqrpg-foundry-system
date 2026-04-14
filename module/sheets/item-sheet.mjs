const { HandlebarsApplicationMixin } = foundry.applications.api;
const { ItemSheetV2 } = foundry.applications.sheets;

/**
 * Shared item sheet for all EverQuest RPG item types.
 * Renders type-specific fields based on item.type.
 */
export class EQItemSheet extends HandlebarsApplicationMixin(ItemSheetV2) {

  static DEFAULT_OPTIONS = {
    classes: ["eqrpg", "item-sheet"],
    tag: "form",
    position: { width: 560, height: 520 },
    window: { resizable: true },
    form: { submitOnChange: true, closeOnSubmit: false },
    actions: {
      castSpell: EQItemSheet._onCastSpell,
    },
  };

  static PARTS = {
    sheet: {
      template: "systems/eqrpg/templates/item/item-sheet.hbs",
    },
  };

  /** @override */
  async _prepareContext(options) {
    const context = await super._prepareContext(options);
    context.system       = this.item.system;
    context.config       = CONFIG.EQRPG;
    context.isEditable   = this.isEditable;
    context.itemType     = this.item.type;
    context.document     = this.item;

    // Booleans for template conditionals
    context.isWeapon     = this.item.type === "weapon";
    context.isArmor      = this.item.type === "armor";
    context.isSpell      = this.item.type === "spell";
    context.isSkill      = this.item.type === "skill";
    context.isConsumable = this.item.type === "consumable";
    context.isEquipment  = this.item.type === "equipment";
    context.isFaction    = this.item.type === "faction";
    context.isFeat       = this.item.type === "feat";

    context.systemFields = this.item.system.schema.fields;

    // Spell: saving throw options for select
    if (context.isSpell) {
      context.saveOptions = [
        { value: "",          label: "—" },
        { value: "fortitude", label: game.i18n.localize("EQRPG.Fort") },
        { value: "reflex",    label: game.i18n.localize("EQRPG.Ref") },
        { value: "will",      label: game.i18n.localize("EQRPG.Will") },
        { value: "none",      label: game.i18n.localize("EQRPG.None") },
      ];
    }

    return context;
  }

  // ---------------------------------------------------------------------------
  // Action Handlers
  // ---------------------------------------------------------------------------

  static async _onCastSpell(event, target) {
    await this.item.castSpell();
  }
}
