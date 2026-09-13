import assert from 'node:assert/strict';
import {applyChatHP,reviewChatHP} from '../module/helpers/chat-hp.mjs';
globalThis.Actor=class{};
globalThis.game={user:{id:'gm',isGM:true},users:[{id:'gm',isGM:true,active:true}]};
const {EQActor}=await import('../module/documents/actor.mjs');
const message='1234567890abcdef';
function fixture(){return Object.assign(Object.create(EQActor.prototype),{id:'actor',uuid:'Actor.actor',type:'character',isOwner:true,effects:[],flags:{eqrpg:{}},system:{resources:{hp:{value:20,max:30,temp:5}}},
 async update(patch){for(const [path,value] of Object.entries(patch)){let obj=this;const keys=path.split('.');for(const key of keys.slice(0,-1))obj=obj[key]??={};obj[keys.at(-1)]=structuredClone(value);}}
});}
let actor=fixture();await applyChatHP(actor,message,0,'damage',12);assert.deepEqual(actor.system.resources.hp,{value:13,max:30,temp:0});
await applyChatHP(actor,message,0,'damage',24);assert.equal(actor.system.resources.hp.value,13,'double button cannot replay full damage');
await applyChatHP(actor,message,1,'heal',5);assert.equal(actor.system.resources.hp.value,18);
await applyChatHP(actor,message,1,'heal',5);assert.equal(actor.system.resources.hp.value,18);
actor=fixture();actor.update=async()=>{};await assert.rejects(applyChatHP(actor,message,0,'damage',12),/claim was not confirmed/);assert.equal(actor.system.resources.hp.value,20);
actor=fixture();const update=actor.update;actor.update=async function(patch){if('system.resources.hp.value'in patch)return;await update.call(this,patch);};
await assert.rejects(applyChatHP(actor,message,0,'damage',12),/Damage update was not confirmed/);
await assert.rejects(applyChatHP(actor,message,1,'heal',3),/earlier chat HP action/);
actor.update=update;const before=structuredClone(actor.system);await reviewChatHP(actor,`${message}_0_damage`,'HP and pools checked; canceled write changed neither.');assert.deepEqual(actor.system,before);
await assert.rejects(applyChatHP(actor,message,0,'damage',12),/interrupted/);
await applyChatHP(actor,message,1,'heal',3);assert.equal(actor.system.resources.hp.value,23);
actor=fixture();actor.update=async function(patch){if(Object.values(patch).some(value=>value?.state==='complete'))return;await update.call(this,patch);};
await assert.rejects(applyChatHP(actor,message,0,'heal',4),/receipt was not confirmed/);assert.equal(actor.system.resources.hp.value,24);
await assert.rejects(applyChatHP(actor,message,0,'heal',4),/interrupted/);assert.equal(actor.system.resources.hp.value,24);
actor=fixture();let results=await Promise.allSettled([applyChatHP(actor,message,0,'damage',12),applyChatHP(actor,message,0,'damage',12)]);assert.equal(results.filter(result=>result.status==='fulfilled').length,1);assert.equal(actor.system.resources.hp.value,13);
actor=fixture();actor.effects=[{id:'shield',disabled:false,flags:{eqrpg:{spellEffect:true,tempHPRemaining:5}}}];actor.updateEmbeddedDocuments=async()=>{};
await assert.rejects(applyChatHP(actor,message,0,'damage',4),/pool update was not confirmed/);assert.equal(actor.system.resources.hp.temp,5);
actor=fixture();actor.isOwner=false;await assert.rejects(applyChatHP(actor,message,0,'damage',12),/own this actor/);
await assert.rejects(reviewChatHP(actor,`${message}_0_damage`,'checked'),/elected GM/);
actor=fixture();await assert.rejects(applyChatHP(actor,message,0,'damage',NaN),/Invalid/);
console.log('Chat HP tests passed: damage alternatives, healing replay, canceled claims/resources/pools, interrupted completion, concurrency, ownership and GM review.');
