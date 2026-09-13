const running=new Set();
export async function applyChatSpellEffect(actor,messageId,index,config) {
  if(!actor?.isOwner) throw new Error('You must own this actor to apply a spell effect.');
  if(!/^[A-Za-z0-9]{16}$/.test(messageId??'') || !Number.isSafeInteger(index) || index<0 || !String(config?.label??'').trim()) throw new Error('Invalid spell-effect chat action.');
  const id=`${messageId}_${index}`;
  const key=`${actor.uuid}:${id}`;
  if(running.has(key)) throw new Error('This spell-effect action is already running.');
  running.add(key);
  try {
    const previous=actor.flags?.eqrpg?.chatEffects?.[id];
    if(previous?.state==='complete') return {replayed:true};
    if(previous) throw new Error('This spell-effect action was interrupted. Ask the GM to review the actor before casting a new effect.');
    actor.validateSpellEffectApplication?.(config);
    const path=`flags.eqrpg.chatEffects.${id}`;
    await actor.update({[path]:{state:'pending'}});
    if(actor.flags?.eqrpg?.chatEffects?.[id]?.state!=='pending') throw new Error('Spell-effect action was not confirmed; no effect was applied.');
    // Persist the claim before any effect/resource write. An ambiguous failure
    // remains pending, rather than allowing a repeated cast to grant HP again.
    const effect=await actor.toggleSpellEffect(config,{applyOnly:true});
    if(!effect?.id) throw new Error('Spell effect was not confirmed. Review the interrupted action.');
    await actor.update({[path]:{state:'complete',effectId:effect.id}});
    const result=actor.flags?.eqrpg?.chatEffects?.[id];
    if(result?.state!=='complete' || result.effectId!==effect.id) throw new Error('Spell effect applied, but its receipt was not confirmed. Review before retrying.');
    return {replayed:false,effectId:effect.id};
  } finally {running.delete(key);}
}
