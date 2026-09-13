import {isPrimaryGM} from './gm-authority.mjs';
const queues=new Map();
export function tickCombatRound(actor,combat) {
  const key=actor?.uuid??actor?.id;
  const snapshot={id:combat?.id,round:combat?.round};
  const previous=queues.get(key)??Promise.resolve();
  const operation=previous.catch(()=>{}).then(()=>applyRound(actor,snapshot));
  queues.set(key,operation);
  return operation.finally(()=>{if(queues.get(key)===operation)queues.delete(key);});
}
async function applyRound(actor,combat) {
  if(!isPrimaryGM() || actor?.type!=='character' || !actor.isOwner) return;
  if(!/^[A-Za-z0-9]{16}$/.test(combat?.id??'') || !Number.isSafeInteger(combat.round) || combat.round<1) return;
  const id=`${combat.id}_${combat.round}`;
    if(actor.flags?.eqrpg?.combatTicks?.[id]) return;
    const slots=actor._getSlotArray();
    if(slots.some(slot=>!Number.isSafeInteger(slot.cooldownRemaining) || slot.cooldownRemaining<0)) throw new Error('Invalid spell cooldown data; combat maintenance stopped for GM review.');
    const current=Number(actor.system.resources.mana.value),max=Number(actor.system.resources.mana.max);
    const regeneration=Math.max(0,Number(actor.getCombatEffectSummary().manaPerRound)||0);
    if(!Number.isFinite(current) || !Number.isFinite(max) || !Number.isFinite(regeneration)) throw new Error('Invalid mana data; combat maintenance stopped for GM review.');
    const patch={},receipt={round:combat.round,manaBefore:current};
    // Do not lower a manually overfilled pool while applying regeneration.
    const next=current>=max?current:Math.min(max,current+regeneration);
    if(next!==current) patch['system.resources.mana.value']=next;
    if(slots.some(slot=>slot.cooldownRemaining>0)) patch['system.spellSlots']=slots.map(slot=>{
      const start=actor.flags?.eqrpg?.cooldownStarts?.[slot.itemId];
      const justStarted=start?.combatId===combat.id && start.round>=combat.round;
      return {...slot,cooldownRemaining:justStarted?slot.cooldownRemaining:Math.max(0,slot.cooldownRemaining-1)};
    });
    patch[`flags.eqrpg.combatTicks.${id}`]=receipt;
    await actor.update(patch);
    if(actor.flags?.eqrpg?.combatTicks?.[id]?.round!==combat.round || actor.system.resources.mana.value!==next || (patch['system.spellSlots'] && JSON.stringify(actor._getSlotArray())!==JSON.stringify(patch['system.spellSlots']))) {
      throw new Error('Combat maintenance was not confirmed. Review mana, cooldowns and the round receipt before continuing.');
    }
}
