import {isPrimaryGM} from './gm-authority.mjs';
const running=new Set();
export async function applyChatStatus(actor,messageId,statusId) {
  if(!actor?.isOwner) throw new Error('You must own this actor to apply a condition.');
  if(!/^[A-Za-z0-9]{16}$/.test(messageId??'') || !/^[A-Za-z0-9_-]+$/.test(statusId??'') || !CONFIG.statusEffects?.some(status=>status.id===statusId)) throw new Error('Invalid chat condition action.');
  if(!actor.toggleStatusEffect || !actor.statuses?.has) throw new Error('This actor does not support confirmed condition application.');
  const id=`${messageId}_${statusId}`,key=`${actor.uuid}:${id}`;
  if(running.has(key)) throw new Error('This condition action is already running.');
  running.add(key);
  try {
    const previous=actor.flags?.eqrpg?.chatStatuses?.[id];
    if(previous?.state==='complete') return {replayed:true};
    if(previous) throw new Error('This condition action was interrupted or reviewed. Check the actor and use a new card for a new application.');
    const path=`flags.eqrpg.chatStatuses.${id}`;
    await actor.update({[path]:{state:'pending',statusId}});
    const claim=actor.flags?.eqrpg?.chatStatuses?.[id];
    if(claim?.state!=='pending' || claim.statusId!==statusId) throw new Error('Condition action claim was not confirmed.');
    if(!actor.statuses.has(statusId)) await actor.toggleStatusEffect(statusId,{active:true});
    if(!actor.statuses.has(statusId)) throw new Error('Condition update was not confirmed. Review the actor before retrying.');
    await actor.update({[path]:{state:'complete',statusId}});
    const result=actor.flags?.eqrpg?.chatStatuses?.[id];
    if(result?.state!=='complete' || result.statusId!==statusId) throw new Error('Condition applied, but its receipt was not confirmed. Review the actor before retrying.');
    return {replayed:false};
  } finally {running.delete(key);}
}

export async function reviewChatStatus(actor,id,note) {
  if(!isPrimaryGM() || !actor?.isOwner) throw new Error('Only the elected GM can review interrupted condition actions.');
  if(running.has(`${actor.uuid}:${id}`)) throw new Error('The condition action is still running in this client.');
  if(!/^[A-Za-z0-9]{16}_[A-Za-z0-9_-]+$/.test(id??'') || !String(note??'').trim()) throw new Error('Supply the receipt ID and a review note.');
  const previous=actor.flags?.eqrpg?.chatStatuses?.[id];
  if(previous?.state!=='pending') throw new Error('This condition action has no pending receipt.');
  await actor.update({[`flags.eqrpg.chatStatuses.${id}`]:{...previous,state:'reviewed',note:String(note).trim()}});
  if(actor.flags?.eqrpg?.chatStatuses?.[id]?.state!=='reviewed') throw new Error('Condition review was not confirmed.');
}
