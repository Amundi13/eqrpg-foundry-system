const COSTS = Object.freeze({ability:12,classSkill:3,crossClassSkill:5,resistance:1,feat:7});
export const TRAINING_COSTS = COSTS;
export function trainingSummary(system) {
  const ledger=system.training;
  if(!ledger?.openingLevel) return {initialized:false,balance:0,earned:0,spent:0};
  const earned=5*(system.details.level-ledger.openingLevel);
  const spent=(ledger.entries??[]).reduce((sum,entry)=>sum+entry.cost,0);
  return {initialized:true,earned,spent,balance:ledger.openingPoints+earned-spent};
}
const pending=new Set();
async function writeTraining(actor, makeLedger) {
  if(!game.user?.isGM || !actor?.isOwner || actor.type!=="character") throw new Error("An owning GM must review and record training.");
  const key=actor.uuid??actor.id;
  if(pending.has(key)) throw new Error("Training is already being recorded for this character.");
  pending.add(key);
  try {
    const ledger=makeLedger();
    await actor.update({'system.training':ledger});
    const actual=actor.system.training;
    if(actual?.openingLevel!==ledger.openingLevel || actual.openingPoints!==ledger.openingPoints
      || actual.note!==ledger.note || JSON.stringify(actual.entries)!==JSON.stringify(ledger.entries)) {
      throw new Error("Training record was not confirmed. Review the Records tab before retrying.");
    }
    return ledger;
  } finally {pending.delete(key);}
}
export async function initializeTraining(actor, points, note) {
  return writeTraining(actor,()=>{
    if(trainingSummary(actor.system).initialized) throw new Error("Training already has an opening balance.");
    const level=actor.system.details.level;
    if(!Number.isInteger(points) || points<0 || points>5*level) throw new Error("Opening points must be a whole number between zero and five times character level.");
    if(!String(note??'').trim()) throw new Error("Describe the records used to verify the opening balance.");
    return {openingLevel:level,openingPoints:points,note:String(note).trim(),entries:[]};
  });
}
export async function recordTraining(actor,{kind,benefit,mentor,reviewed}) {
  return writeTraining(actor,()=>{
    const summary=trainingSummary(actor.system);
    if(!summary.initialized) throw new Error("Review and initialize the opening balance first.");
    if(actor.system.details.level < actor.system.training.openingLevel) throw new Error("Character level is below the reviewed opening level. Ask the GM to reconcile the ledger.");
    if(!Object.hasOwn(COSTS,kind)) throw new Error("Choose a supported training benefit.");
    if(!reviewed || !String(benefit??'').trim() || !String(mentor??'').trim()) throw new Error("Describe the benefit and mentor, then confirm prerequisites, caps and prior training were reviewed.");
    const cost=COSTS[kind];
    if(summary.balance<cost) throw new Error("Not enough training points.");
    const ledger=foundry.utils.deepClone(actor.system.training);
    ledger.entries.push({id:foundry.utils.randomID(),level:actor.system.details.level,kind,benefit:String(benefit).trim(),mentor:String(mentor).trim(),cost});
    return ledger;
  });
}
