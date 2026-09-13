import assert from 'node:assert/strict';
import {tickCombatRound} from '../module/helpers/combat-ticks.mjs';
globalThis.Actor=class{};
globalThis.game={user:{id:'gm',isGM:true},users:[{id:'gm',isGM:true,active:true}]};
const {EQActor}=await import('../module/documents/actor.mjs');
const combat={id:'1234567890abcdef',round:1};
function fixture(){return Object.assign(Object.create(EQActor.prototype),{uuid:'Actor.test',type:'character',isOwner:true,flags:{eqrpg:{}},writes:0,
 system:{resources:{mana:{value:4,max:10}},spellSlots:[{itemId:'spell',cooldownRemaining:3}]},
 effects:[{flags:{eqrpg:{manaPerRound:2}}},{duration:{expired:true},flags:{eqrpg:{manaPerRound:20}}},{isSuppressed:true,flags:{eqrpg:{manaPerRound:30}}},{disabled:true,flags:{eqrpg:{manaPerRound:40}}}],
 _getSlotArray(){return structuredClone(this.system.spellSlots);},
 async update(patch){this.writes++;for(const [path,value] of Object.entries(patch)){let obj=this;const keys=path.split('.');for(const key of keys.slice(0,-1))obj=obj[key]??={};obj[keys.at(-1)]=structuredClone(value);}}
});}
let actor=fixture();assert.equal(actor.getCombatEffectSummary().manaPerRound,2);
await Promise.all([tickCombatRound(actor,combat),tickCombatRound(actor,combat)]);assert.equal(actor.writes,1);assert.equal(actor.system.resources.mana.value,6);assert.equal(actor.system.spellSlots[0].cooldownRemaining,2);
await tickCombatRound(actor,combat);assert.equal(actor.writes,1);
await tickCombatRound(actor,{...combat,round:2});assert.equal(actor.system.resources.mana.value,8);assert.equal(actor.system.spellSlots[0].cooldownRemaining,1);
await tickCombatRound(actor,combat);assert.equal(actor.system.resources.mana.value,8,'rewinding cannot repeat a round');
await tickCombatRound(actor,{...combat,round:3});await tickCombatRound(actor,{...combat,round:4});assert.equal(actor.system.resources.mana.value,10);assert.equal(actor.system.spellSlots[0].cooldownRemaining,0);
actor=fixture();actor.update=async()=>{};await assert.rejects(tickCombatRound(actor,combat),/not confirmed/);assert.equal(actor.system.resources.mana.value,4);assert.equal(actor.system.spellSlots[0].cooldownRemaining,3);
actor=fixture();actor.system.resources.mana.value=12;await tickCombatRound(actor,combat);assert.equal(actor.system.resources.mana.value,12);
actor=fixture();actor.system.spellSlots[0].cooldownRemaining=-1;await assert.rejects(tickCombatRound(actor,combat),/Invalid spell cooldown/);assert.equal(actor.writes,0);
actor=fixture();const advancing={...combat};const first=tickCombatRound(actor,advancing);advancing.round=2;const second=tickCombatRound(actor,advancing);await Promise.all([first,second]);assert.equal(actor.writes,2);assert.equal(actor.system.resources.mana.value,8,'queued rounds must not be dropped or use mutated combat state');
actor=fixture();game.user.id='other';await tickCombatRound(actor,combat);assert.equal(actor.writes,0);
console.log('Combat maintenance tests passed: active effects, once-per-round persistence, rewind/replay, cancellation, caps, cooldown validation and GM authority.');
