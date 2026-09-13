import {isPrimaryGM} from './gm-authority.mjs';
import {hasConfirmedSpellTempHPGrant} from './active-effects.mjs';
const running=new Map();

// Keep the pool debit and its receipt in one actor update. Retrying after an
// interrupted token-status update must never subtract the pool a second time.
export function reconcileExpiredSpellEffects(actor) {
  if(!isPrimaryGM() || !actor?.isOwner || !actor.system?.resources?.hp) return Promise.resolve();
  const key=actor.uuid??actor.id;
  if(running.has(key)) return running.get(key);
  const operation=reconcile(actor).finally(()=>running.delete(key));
  running.set(key,operation);
  return operation;
}
async function reconcile(actor) {
  for(const effect of [...(actor.effects??[])]) {
    if(!effect.flags?.eqrpg?.spellEffect || effect.duration?.expired!==true) continue;
    if(!isPrimaryGM()) throw new Error('GM authority changed during effect expiration.');
    const path=`flags.eqrpg.expiredSpellEffects.${effect.id}`;
    let receipt=actor.flags?.eqrpg?.expiredSpellEffects?.[effect.id];
    if(!receipt) {
      const flags=effect.flags.eqrpg;
      const remaining=effect.disabled||!hasConfirmedSpellTempHPGrant(actor,effect)?0:Math.max(0,Number(flags.tempHPRemaining??flags.tempHPGrant)||0);
      const before=Math.max(0,Number(actor.system.resources.hp.temp)||0);
      receipt={before,after:Math.max(0,before-remaining),remaining};
      await actor.update({'system.resources.hp.temp':receipt.after,[path]:receipt});
      const actual=actor.flags?.eqrpg?.expiredSpellEffects?.[effect.id];
      if(actual?.before!==receipt.before || actual?.after!==receipt.after || actual?.remaining!==receipt.remaining || actor.system.resources.hp.temp!==receipt.after) {
        throw new Error('Expired effect cleanup was not confirmed. Review temporary HP before retrying.');
      }
    }
    await actor._setTokenStatuses(actor._getSpellEffectStatusIds(effect),false);
  }
}
