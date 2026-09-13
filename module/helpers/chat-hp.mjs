import {isPrimaryGM} from './gm-authority.mjs';
const running=new Set();
export async function applyChatHP(actor,messageId,panel,kind,amount) {
  if(!actor?.isOwner) throw new Error('You must own this actor to apply damage or healing.');
  if(!/^[A-Za-z0-9]{16}$/.test(messageId??'') || !Number.isSafeInteger(panel) || panel<0 || !['damage','heal'].includes(kind) || !Number.isSafeInteger(amount) || amount<0) throw new Error('Invalid damage or healing chat action.');
  const key=actor.uuid??actor.id;
  if(running.has(key)) throw new Error('A chat HP action is already running for this actor.');
  running.add(key);
  try {
    // Full/half/double are alternatives for the same actor and card panel.
    const id=`${messageId}_${panel}_${kind}`;
    const previous=actor.flags?.eqrpg?.chatHP?.[id];
    if(previous?.state==='complete') return {replayed:true,amount:previous.amount};
    if(previous) throw new Error('This HP action was interrupted. Ask the GM to review HP and temporary-HP pools before applying another result.');
    // A different card cannot silently bypass an unresolved operation.
    if(Object.values(actor.flags?.eqrpg?.chatHP??{}).some(receipt=>receipt.state==='pending')) throw new Error('An earlier chat HP action needs GM review.');
    const path=`flags.eqrpg.chatHP.${id}`;
    const receipt={state:'pending',kind,amount,before:{value:actor.system.resources.hp.value,temp:actor.system.resources.hp.temp??0}};
    await actor.update({[path]:receipt});
    const claim=actor.flags?.eqrpg?.chatHP?.[id];
    if(claim?.state!=='pending' || claim.kind!==kind || claim.amount!==amount) throw new Error('HP action claim was not confirmed; no damage or healing was applied.');
    const value=await (kind==='damage'?actor.applyDamage(amount):actor.applyHealing(amount));
    const completed={...receipt,state:'complete',after:{value,temp:actor.system.resources.hp.temp??0}};
    await actor.update({[path]:completed});
    const actual=actor.flags?.eqrpg?.chatHP?.[id];
    if(actual?.state!=='complete' || actual.after?.value!==value || actual.amount!==amount) throw new Error('HP changed, but the action receipt was not confirmed. Ask the GM to review it before retrying.');
    return {replayed:false,amount,value};
  } finally {running.delete(key);}
}

export async function reviewChatHP(actor,id,note) {
  if(!isPrimaryGM() || !actor?.isOwner) throw new Error('Only the elected GM can review interrupted HP actions.');
  if(running.has(actor.uuid??actor.id)) throw new Error('An HP action is still running in this client.');
  if(!/^[A-Za-z0-9]{16}_\d+_(damage|heal)$/.test(id??'') || !String(note??'').trim()) throw new Error('Supply the action ID and a review note.');
  const old=actor.flags?.eqrpg?.chatHP?.[id];
  if(old?.state!=='pending') throw new Error('This action has no pending result to review.');
  await actor.update({[`flags.eqrpg.chatHP.${id}`]:{...old,state:'reviewed',note:String(note).trim()}});
  if(actor.flags?.eqrpg?.chatHP?.[id]?.state!=='reviewed') throw new Error('HP review was not confirmed.');
}
