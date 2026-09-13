import assert from 'node:assert/strict';
import {handleCommerceRequest,submitCommerceRequest,commerceRequestStatus,acknowledgeInterruptedCommerceRequest} from '../module/helpers/commerce-requests.mjs';
import {coinsToCopper,purchaseItem} from '../module/helpers/commerce.mjs';
import {SAMPLE_EQUIPMENT} from '../module/packs/sample-data.mjs';
const users=[{id:'gm',isGM:true,active:true},{id:'owner',isGM:false,active:true},{id:'intruder',isGM:false,active:true}];users.get=id=>users.find(user=>user.id===id);
globalThis.game={user:users[0],users};let n=0;
globalThis.foundry={utils:{randomID:()=>String(++n).padStart(16,'0')}};
const item=SAMPLE_EQUIPMENT.find(item=>item.system.price>0 && item.system.price<10);assert.ok(item);
const cost=Math.round(item.system.price*100);
const actor={id:'actor',uuid:'Actor.actor',isOwner:true,type:'character',flags:{eqrpg:{}},system:{wealth:{gold:1000}},items:new Map(),writes:0,creates:0,
 testUserPermission(user){return user.id==='owner'||user.id==='gm';},
 async update(patch){this.writes++;for(const [path,value] of Object.entries(patch)){let obj=this;const keys=path.split('.');for(const key of keys.slice(0,-1))obj=obj[key]??={};obj[keys.at(-1)]=structuredClone(value);}},
 async createEmbeddedDocuments(type,items){this.creates++;await Promise.resolve();for(const item of items)this.items.set(item._id,item);return items;}
};
const request=(id,extra={})=>({id:String(id).padStart(16,'0'),kind:'purchase',sourceId:item.flags.eqrpg.sourceId,quantity:1,...extra});
const apply=(req,user='owner')=>handleCommerceRequest(actor,{'flags.eqrpg.commerceRequest':req},user);
await Promise.all([apply(request(101)),apply(request(102))]);assert.equal(coinsToCopper(actor.system.wealth),100000-2*cost);assert.equal(actor.creates,2);
await apply(request(101));assert.equal(actor.creates,2,'replay must not charge or deliver again');
const before=actor.writes;await apply(request(103,{userId:'gm'}),'intruder');assert.equal(actor.writes,before,'payload cannot spoof the hook user');
await apply(request(104,{sourceId:'unknown'}));assert.equal(actor.flags.eqrpg.commerceResults[request(104).id].state,'failed');assert.equal(actor.creates,2);
await apply(request(105,{price:0}));assert.equal(coinsToCopper(actor.system.wealth),100000-3*cost,'price comes from catalog');
game.user=users[1];await apply(request(106));assert.equal(actor.creates,3);await assert.rejects(purchaseItem(actor,item,1),/elected GM/);
const submitted=await submitCommerceRequest(actor,'purchase',item.flags.eqrpg.sourceId,1);assert.equal(commerceRequestStatus(actor).state,'queued');await assert.rejects(submitCommerceRequest(actor,'purchase',item.flags.eqrpg.sourceId,1),/already/);
game.user=users[0];await apply(submitted);assert.equal(commerceRequestStatus(actor).state,'complete');assert.equal(actor.creates,4);
users[0].active=false;await assert.rejects(submitCommerceRequest(actor,'purchase',item.flags.eqrpg.sourceId,1),/active GM/);
users[0].active=true;
// Two clicks arriving before the first update resolves must submit only once.
const overlapping=await Promise.allSettled([
 submitCommerceRequest(actor,'purchase',item.flags.eqrpg.sourceId,1),
 submitCommerceRequest(actor,'purchase',item.flags.eqrpg.sourceId,1)
]);
assert.equal(overlapping.filter(r=>r.status==='fulfilled').length,1);
assert.match(overlapping.find(r=>r.status==='rejected').reason.message,/already/);
const interrupted=actor.flags.eqrpg.commerceRequest.id;
const untouched=structuredClone({wealth:actor.system.wealth,items:[...actor.items],receipt:actor.flags.eqrpg.purchase});
game.user=users[1];
await assert.rejects(acknowledgeInterruptedCommerceRequest(actor,interrupted,'Reviewed'),/elected GM/);
game.user=users[0];
await acknowledgeInterruptedCommerceRequest(actor,interrupted,'No operation started; receipt reviewed.');
assert.equal(commerceRequestStatus(actor).state,'failed');
assert.deepEqual({wealth:actor.system.wealth,items:[...actor.items],receipt:actor.flags.eqrpg.purchase},untouched);
await assert.rejects(acknowledgeInterruptedCommerceRequest(actor,interrupted,'Again'),/final result/);
// Lost completion acknowledgement must preserve processing state and prevent replay.
const originalUpdate=actor.update;
actor.update=async function(patch){
 if(Object.entries(patch).some(([key,value])=>key.startsWith('flags.eqrpg.commerceResults.') && value.state==='complete')) return;
 return originalUpdate.call(this,patch);
};
const uncertain=request(900);
await assert.rejects(apply(uncertain),/not confirmed/);
assert.equal(actor.flags.eqrpg.commerceResults[uncertain.id].state,'processing');
const created=actor.creates,paid=coinsToCopper(actor.system.wealth);
await apply(uncertain);
assert.equal(actor.creates,created);assert.equal(coinsToCopper(actor.system.wealth),paid);
actor.update=originalUpdate;
console.log('Commerce authority tests passed: queued clients, replay, ownership, catalog prices, player restrictions and offline GM.');
