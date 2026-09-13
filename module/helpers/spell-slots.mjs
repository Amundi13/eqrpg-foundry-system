export function readSpellSlots(source) {
  if(source===undefined) source=[];
  const invalid=()=>new Error('Saved spell slots need GM review. Preparations and cooldowns were not reset.');
  if(!Array.isArray(source) || source.length>8) throw invalid();
  const slots=Array.from(source,slot=>{
    if(!slot || typeof slot!=='object' || Array.isArray(slot)) throw invalid();
    const {itemId='',cooldownRemaining=0}=slot;
    if(typeof itemId!=='string' || !Number.isSafeInteger(cooldownRemaining) || cooldownRemaining<0) throw invalid();
    return {itemId,cooldownRemaining};
  });
  while(slots.length<8) slots.push({itemId:'',cooldownRemaining:0});
  return slots;
}
