import assert from 'node:assert/strict';
import {applyChatStatus,reviewChatStatus} from '../module/helpers/chat-status.mjs';
globalThis.CONFIG={statusEffects:[{id:'prone'},{id:'rooted'}]};
globalThis.game={user:{id:'gm',isGM:true},users:[{id:'gm',isGM:true,active:true}]};
const message='1234567890abcdef';
function fixture(){return {uuid:'Actor.test',isOwner:true,statuses:new Set(),flags:{eqrpg:{}},toggles:0,
 async update(patch){for(const [path,value] of Object.entries(patch)){let obj=this;const keys=path.split('.');for(const key of keys.slice(0,-1))obj=obj[key]??={};obj[keys.at(-1)]=structuredClone(value);}},
 async toggleStatusEffect(id,{active}){assert.equal(active,true);this.toggles++;this.statuses.add(id);}
};}
let actor=fixture();await applyChatStatus(actor,message,'prone');assert.equal(actor.toggles,1);
await applyChatStatus(actor,message,'prone');assert.equal(actor.toggles,1);assert.ok(actor.statuses.has('prone'));
actor.statuses.clear();await applyChatStatus(actor,message,'prone');assert.equal(actor.statuses.size,0,'a removed condition cannot be restored by replay');
actor=fixture();actor.statuses.add('prone');await applyChatStatus(actor,message,'prone');assert.equal(actor.toggles,0);
actor=fixture();actor.update=async()=>{};await assert.rejects(applyChatStatus(actor,message,'prone'),/claim was not confirmed/);assert.equal(actor.toggles,0);
actor=fixture();actor.toggleStatusEffect=async()=>{};await assert.rejects(applyChatStatus(actor,message,'prone'),/Condition update was not confirmed/);
await assert.rejects(applyChatStatus(actor,message,'prone'),/interrupted/);
const before=[...actor.statuses];await reviewChatStatus(actor,`${message}_prone`,'Condition was not applied; actor checked.');assert.deepEqual([...actor.statuses],before);
await assert.rejects(applyChatStatus(actor,message,'prone'),/reviewed/);
actor=fixture();const update=actor.update;actor.update=async function(patch){if(Object.values(patch)[0].state==='complete')return;await update.call(this,patch);};
await assert.rejects(applyChatStatus(actor,message,'prone'),/receipt was not confirmed/);assert.ok(actor.statuses.has('prone'));
await assert.rejects(applyChatStatus(actor,message,'prone'),/interrupted/);assert.equal(actor.toggles,1);
actor=fixture();const results=await Promise.allSettled([applyChatStatus(actor,message,'prone'),applyChatStatus(actor,message,'prone')]);assert.equal(results.filter(r=>r.status==='fulfilled').length,1);assert.equal(actor.toggles,1);
actor=fixture();actor.isOwner=false;await assert.rejects(applyChatStatus(actor,message,'prone'),/own this actor/);
await assert.rejects(reviewChatStatus(actor,`${message}_prone`,'checked'),/elected GM/);
actor=fixture();await assert.rejects(applyChatStatus(actor,message,'unknown'),/Invalid/);assert.equal(actor.toggles,0);
console.log('Chat condition tests passed: explicit application, replay after removal, existing conditions, canceled writes, interrupted receipts, concurrency and GM review.');
