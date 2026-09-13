import assert from 'node:assert/strict';
import {applyChatSpellEffect} from '../module/helpers/chat-effects.mjs';
globalThis.Actor=class{};
globalThis.CONST={ACTIVE_EFFECT_MODES:{ADD:2}};
globalThis.foundry={utils:{mergeObject:(a,b)=>({...a,...b})}};
const {EQActor}=await import('../module/documents/actor.mjs');
const message='1234567890abcdef',config={label:'Shielding'};
function fixture(){
 return Object.assign(Object.create(EQActor.prototype),{uuid:'Actor.test',isOwner:true,effects:[],flags:{eqrpg:{}},creates:0,
  async update(patch){for(const [path,value] of Object.entries(patch)){let obj=this;const keys=path.split('.');for(const key of keys.slice(0,-1))obj=obj[key]??={};obj[keys.at(-1)]=structuredClone(value);}},
  async createEmbeddedDocuments(type,data){this.creates++;const effect={...data[0],id:'newEffect'};this.effects.push(effect);return [effect];},
  async _setTokenStatuses(){}
 });
}
let actor=fixture();await applyChatSpellEffect(actor,message,0,config);
assert.equal(actor.creates,1);assert.equal((await applyChatSpellEffect(actor,message,0,config)).replayed,true);assert.equal(actor.effects.length,1);
actor.effects=[];await applyChatSpellEffect(actor,message,0,config);assert.equal(actor.creates,1,'replay after removal cannot recreate the buff');
actor=fixture();actor.effects=[{id:'existing',name:'Shielding',flags:{eqrpg:{}},delete(){assert.fail('Application cannot delete an existing effect');}}];
await applyChatSpellEffect(actor,message,0,config);assert.equal(actor.creates,0);assert.equal(actor.effects.length,1);
actor=fixture();actor.update=async()=>{};await assert.rejects(applyChatSpellEffect(actor,message,0,config),/not confirmed/);assert.equal(actor.creates,0);
actor=fixture();actor.createEmbeddedDocuments=async()=>{throw Error('Interrupted create');};await assert.rejects(applyChatSpellEffect(actor,message,0,config),/Interrupted create/);
await assert.rejects(applyChatSpellEffect(actor,message,0,config),/interrupted/);
actor=fixture();const update=actor.update;actor.update=async function(patch){if(Object.values(patch)[0].state==='complete')return;await update.call(this,patch);};
await assert.rejects(applyChatSpellEffect(actor,message,0,config),/receipt was not confirmed/);assert.equal(actor.creates,1);
await assert.rejects(applyChatSpellEffect(actor,message,0,config),/interrupted/);assert.equal(actor.creates,1);
actor=fixture();const calls=await Promise.allSettled([applyChatSpellEffect(actor,message,0,config),applyChatSpellEffect(actor,message,0,config)]);
assert.equal(calls.filter(r=>r.status==='fulfilled').length,1);assert.equal(actor.creates,1);
actor=fixture();actor.isOwner=false;await assert.rejects(applyChatSpellEffect(actor,message,0,config),/own this actor/);assert.equal(actor.creates,0);
actor=fixture();actor.validateSpellEffectApplication=()=>{throw Error('Buff temporary hit points do not stack.');};
await assert.rejects(applyChatSpellEffect(actor,message,0,config),/do not stack/);
assert.equal(actor.flags.eqrpg.chatEffects,undefined,'a rules preflight failure must not consume the chat action');
console.log('Chat effect tests passed: replay, removed effects, existing buffs, interrupted writes, double clicks and ownership.');
