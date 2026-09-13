import { SAMPLE_SPELLS,SAMPLE_SKILLS,SAMPLE_WEAPONS,SAMPLE_ARMOR,SAMPLE_EQUIPMENT,SAMPLE_CONSUMABLES,SAMPLE_FEATS,SAMPLE_MONSTERS } from "./sample-data.mjs";
import {PHB_JOURNALS} from "./phb-data.mjs";
export const PACK_SOURCES = new Map([
  ["eqrpg.eqrpg-spells", SAMPLE_SPELLS],
  ["eqrpg.eqrpg-skills", SAMPLE_SKILLS],
  ["eqrpg.eqrpg-weapons", SAMPLE_WEAPONS],
  ["eqrpg.eqrpg-armor", SAMPLE_ARMOR],
  ["eqrpg.eqrpg-equipment", SAMPLE_EQUIPMENT],
  ["eqrpg.eqrpg-consumables", SAMPLE_CONSUMABLES],
  ["eqrpg.eqrpg-feats", SAMPLE_FEATS],
  ["eqrpg.eqrpg-phb", PHB_JOURNALS],
  ["eqrpg.eqrpg-monsters", SAMPLE_MONSTERS],
]);
