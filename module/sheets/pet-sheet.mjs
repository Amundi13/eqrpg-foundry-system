import { EQNPCSheet } from "./npc-sheet.mjs";

/**
 * Compact, player-facing companion sheet backed by the NPC combat model.
 */
export class EQPetSheet extends EQNPCSheet {

  static DEFAULT_OPTIONS = {
    ...super.DEFAULT_OPTIONS,
    classes: ["eqrpg", "actor-sheet", "npc-sheet", "pet-sheet"],
    position: { width: 680, height: 650 },
    actions: {
      ...super.DEFAULT_OPTIONS.actions,
      setPetOwner: EQPetSheet._onSetPetOwner,
    },
  };

  static PARTS = {
    header:  { template: "systems/eqrpg/templates/actor/parts/pet-header.hbs" },
    tabs:    { template: "systems/eqrpg/templates/actor/parts/npc-tabs.hbs" },
    stats:   { template: "systems/eqrpg/templates/actor/parts/pet-stats.hbs" },
    actions: { template: "systems/eqrpg/templates/actor/parts/npc-actions.hbs" },
    notes:   { template: "systems/eqrpg/templates/actor/parts/pet-notes.hbs" },
  };

  get title() {
    return this.actor.name || game.i18n.localize("EQRPG.SheetPet");
  }

  async _prepareContext(options) {
    const context = await super._prepareContext(options);
    const selectedOwnerId = this.actor.system.companion?.ownerId ?? "";

    context.isGM = game.user?.isGM ?? false;
    context.petSaves = [
      { key: "fortitude", label: game.i18n.localize("EQRPG.Fort"), value: this.actor.system.combat.saves.fortitude.value },
      { key: "reflex", label: game.i18n.localize("EQRPG.Ref"), value: this.actor.system.combat.saves.reflex.value },
      { key: "will", label: game.i18n.localize("EQRPG.Will"), value: this.actor.system.combat.saves.will.value },
    ];
    context.petOwnerOptions = (game.users ?? [])
      .filter((user) => !user.isGM)
      .map((user) => ({
        id: user.id,
        name: user.name,
        selected: user.id === selectedOwnerId,
      }));
    return context;
  }

  static async _onSetPetOwner(event, target) {
    if (!game.user?.isGM) return;

    const ownerId = target.closest(".pet-owner-field")?.querySelector("[data-pet-owner-select]")?.value ?? "";
    const ownership = foundry.utils.deepClone(this.actor.ownership ?? {});
    for (const user of game.users ?? []) {
      if (!user.isGM) delete ownership[user.id];
    }
    if (ownerId) ownership[ownerId] = CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER;

    await this.actor.update({
      ownership,
      "system.companion.ownerId": ownerId,
      "prototypeToken.actorLink": true,
    });
    ui.notifications.info(ownerId
      ? game.i18n.format("EQRPG.PetOwnerAssigned", { name: game.users.get(ownerId)?.name ?? ownerId })
      : game.i18n.localize("EQRPG.PetOwnerCleared"));
  }
}
