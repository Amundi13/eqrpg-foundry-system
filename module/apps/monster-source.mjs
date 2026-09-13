import { catalogFieldEvidence } from "../helpers/catalog-evidence.mjs";
export function inspectMonsterSource(source) {
  const block=source.system?.statblock ?? {};
  const missing=[];
  if (!(source.system?.resources?.hp?.max > 0)) missing.push("maximum HP");
  if (!block.hitDice?.trim()) missing.push("Hit Dice");
  if (!block.attacks?.trim()) missing.push("attacks");
  const fieldEvidence=["hitDice","speed","ac","attacks","damage","saves","abilities","skills","feats","challengeRating","rawText"].map(key=>{
    const evidence=catalogFieldEvidence(source,"system.statblock."+key);
    return {...evidence,label:key};
  });
  return { missing, fieldEvidence, complete:missing.length===0, locator:block.source ?? "Source not recorded" };
}
