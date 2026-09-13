import {isPrimaryGM} from './gm-authority.mjs';
import {purchaseItem,resumePurchase,cancelPurchase} from './commerce.mjs';
import {SAMPLE_ARMOR,SAMPLE_CONSUMABLES,SAMPLE_EQUIPMENT,SAMPLE_WEAPONS} from '../packs/sample-data.mjs';
const stock=new Map([...SAMPLE_ARMOR,...SAMPLE_CONSUMABLES,...SAMPLE_EQUIPMENT,...SAMPLE_WEAPONS].map(item=>[item.flags.eqrpg.sourceId,item]));
const queues=new Map();
const submissions=new Set();
const idPattern=/^[A-Za-z0-9]{16}$/;
export function commerceRequestStatus(actor) {
  const request=actor?.flags?.eqrpg?.commerceRequest;
  if(!request) return null;
  return actor.flags.eqrpg.commerceResults?.[request.id]??{state:'queued',message:'Waiting for the active GM.'};
}
export async function submitCommerceRequest(actor,kind,sourceId='',quantity=1) {
  const key=actor?.uuid??actor?.id;
  if(submissions.has(key)) throw new Error('A store request is already being submitted for this character.');
  submissions.add(key);
  try { return await submit(actor,kind,sourceId,quantity); }
  finally {submissions.delete(key);}
}
async function submit(actor,kind,sourceId,quantity) {
  if(actor?.type!=='character' || !actor.isOwner) throw new Error('Select a character you own.');
  if(![...(game.users??[])].some(user=>user.isGM && user.active)) throw new Error('An active GM must be connected to process store purchases.');
  const status=commerceRequestStatus(actor);
  if(status && ['queued','processing'].includes(status.state)) throw new Error('This character already has a queued or interrupted store request. Ask the GM to review it.');
  const request={id:foundry.utils.randomID(),kind,sourceId,quantity};
  await actor.update({'flags.eqrpg.commerceRequest':request});
  if(actor.flags?.eqrpg?.commerceRequest?.id!==request.id) throw new Error('Store request was not confirmed. Review the store before retrying.');
  return request;
}
async function result(actor,id,data) {
  if(!isPrimaryGM()) throw new Error('GM authority changed; review the pending store request.');
  await actor.update({[`flags.eqrpg.commerceResults.${id}`]:data});
  const actual=actor.flags?.eqrpg?.commerceResults?.[id];
  if(actual?.state!==data.state || actual?.userId!==data.userId) throw new Error('Store request result was not confirmed.');
}
async function processRequest(actor,request,userId) {
  if(!isPrimaryGM()) return;
  const user=game.users.get(userId);
  if(!user || !actor.testUserPermission(user,'OWNER')) return;
  if(!idPattern.test(request.id??'') || !['purchase','resume','cancel'].includes(request.kind)) return;
  // Receipt states survive reload. A replay never executes the request a second time.
  if(actor.flags?.eqrpg?.commerceResults?.[request.id]) return;
  await result(actor,request.id,{state:'processing',userId,message:'Processing store request.'});
  try {
    if(request.kind==='purchase') {
      const item=stock.get(request.sourceId);
      if(!item) throw new Error('Store item was not found in the source catalog.');
      await purchaseItem(actor,item,request.quantity);
    } else if(request.kind==='resume') await resumePurchase(actor);
    else await cancelPurchase(actor);
  } catch(error) {
    await result(actor,request.id,{state:'failed',userId,message:error.message});
    return;
  }
  await result(actor,request.id,{state:'complete',userId,message:request.kind==='cancel'?'Refund confirmed.':'Store request completed.'});
}
export function handleCommerceRequest(actor,changes,userId) {
  const request=changes['flags.eqrpg.commerceRequest']??changes.flags?.eqrpg?.commerceRequest;
  if(!request || !isPrimaryGM() || actor.type!=='character') return Promise.resolve();
  const key=actor.uuid??actor.id;
  const payload=structuredClone(request);
  const previous=queues.get(key)??Promise.resolve();
  const next=previous.catch(()=>{}).then(()=>processRequest(actor,payload,userId));
  queues.set(key,next);
  return next.finally(()=>{if(queues.get(key)===next)queues.delete(key);});
}

// A GM explicitly releases an interrupted request after checking the purchase receipt.
// This changes no coins or inventory and does not replay the interrupted operation.
export async function acknowledgeInterruptedCommerceRequest(actor,requestId,note) {
  if(!isPrimaryGM() || !actor?.isOwner) throw new Error('Only the elected GM can review interrupted store requests.');
  if(queues.has(actor.uuid??actor.id)) throw new Error('The store request is still running in this GM client.');
  if(!idPattern.test(requestId??'') || !String(note??'').trim()) throw new Error('Supply the request ID and a review note.');
  const old=actor.flags?.eqrpg?.commerceResults?.[requestId];
  const current=actor.flags?.eqrpg?.commerceRequest;
  if(!old && current?.id!==requestId) throw new Error('Store request was not found.');
  if(old && !['queued','processing'].includes(old.state)) throw new Error('This store request already has a final result.');
  await result(actor,requestId,{state:'failed',userId:old?.userId??game.user.id,message:'GM reviewed interrupted request: '+String(note).trim()});
}
