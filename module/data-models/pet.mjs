import { NPCData } from "./npc.mjs";

const { StringField, SchemaField } = foundry.data.fields;

/**
 * Player-controlled companions use monster-style statistics with a small
 * amount of relationship metadata for the owning character and user.
 */
export class PetData extends NPCData {

  static defineSchema() {
    return {
      ...super.defineSchema(),
      companion: new SchemaField({
        masterName: new StringField({ initial: "" }),
        ownerId: new StringField({ initial: "" }),
        kind: new StringField({ initial: "Companion" }),
      }),
    };
  }
}
