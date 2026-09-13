import assert from 'node:assert/strict';
import {reconcileExpiredSpellEffects} from '../module/helpers/effect-expiry.mjs';
globalThis.Actor=class{};
globalThis.game={user:{id:'gm',isGM:true},users:[{id:'gm',isGM:true,active:true}]};
const {EQActor}=await import('../module/documents/actor.mjs');
function fixture({disabled=false,expired=true}={}) {
 const effect={id:'effect',duration:{expired},disabled,flags:{eqrpg:{spellEffect:true,tempHPGrant:8,tempHPRemaining:3,statusIds:['shielded']}},async update(patch){if('disabled'in patch)this.disabled=patch.disabled;},async delete(){actor.effects=[];}};
 const actor=Object.assign(Object.create(EQActor.prototype),{
  id:'actor',uuid:'Actor.actor',isOwner:true,flags:{eqrpg:{}},effects:[effect],system:{resources:{hp:{temp:10}}},writes:0,statusWrites:0,
  async update(patch){this.writes++;for(const [path,value] of Object.entries(patch)){let object=this;const keys=path.split('.');for(const key of keys.slice(0,-1))object=object[key]??={};object[keys.at(-1)]=structuredClone(value);}},
  async _setTokenStatuses(){this.statusWrites++;}
 });return {actor,effect};
}
let {actor,effect}=fixture();
await Promise.all([reconcileExpiredSpellEffects(actor),reconcileExpiredSpellEffects(actor)]);
assert.equal(actor.writes,1);assert.equal(actor.system.resources.hp.temp,7);
await reconcileExpiredSpellEffects(actor);assert.equal(actor.writes,1);
await assert.rejects(actor.setSpellEffectEnabled(effect.id,true),/expired/);
await actor.setSpellEffectEnabled(effect.id,false);assert.equal(actor.system.resources.hp.temp,7);
await actor.removeSpellEffect(effect.id);assert.equal(actor.system.resources.hp.temp,7);
({actor,effect}=fixture());await reconcileExpiredSpellEffects(actor);await actor.removeSpellEffect(effect.id);assert.equal(actor.system.resources.hp.temp,7,'removing cleaned active effect cannot debit twice');
({actor}=fixture({disabled:true}));await reconcileExpiredSpellEffects(actor);assert.equal(actor.system.resources.hp.temp,10,'disabled pools were already removed');
({actor}=fixture({expired:false}));await reconcileExpiredSpellEffects(actor);assert.equal(actor.writes,0);
({actor}=fixture());actor.update=async()=>{};await assert.rejects(reconcileExpiredSpellEffects(actor),/not confirmed/);assert.equal(actor.statusWrites,0);assert.equal(actor.system.resources.hp.temp,10);
({actor}=fixture());actor._setTokenStatuses=async()=>{throw Error('Token unavailable');};
await assert.rejects(reconcileExpiredSpellEffects(actor),/Token unavailable/);assert.equal(actor.system.resources.hp.temp,7);
actor._setTokenStatuses=async()=>{};await reconcileExpiredSpellEffects(actor);assert.equal(actor.writes,1);
({actor}=fixture());game.user.id='other';await reconcileExpiredSpellEffects(actor);assert.equal(actor.writes,0);
console.log('Effect expiration tests passed: remaining pools, disabled effects, concurrent/repeated cleanup, cancellation, interrupted statuses, removal and authority.');
