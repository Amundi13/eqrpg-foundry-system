import assert from 'node:assert/strict';
import {tickCombatRound} from '../module/helpers/combat-ticks.mjs';
globalThis.Actor=class{};
globalThis.foundry={utils:{randomID:()=>String(Math.random()).replace('.','').padEnd(16,'0').slice(0,16)}};
globalThis.game={combat:{id:'1234567890abcdef',round:1},user:{id:'gm',isGM:true},users:[{id:'gm',isGM:true,active:true}],i18n:{localize:x=>x},settings:{get:()=>''}};
globalThis.ui={notifications:{warn(){},info(){}}};
let messages=0;globalThis.ChatMessage={create:async()=>messages++,getSpeaker:()=>({})};
const {EQActor}=await import('../module/documents/actor.mjs');
function fixture(recast=1){
 let casts=0;const spell={id:'spell',type:'spell',system:{manaCost:1,recastTime:recast,classLevels:['shaman:1']},async castSpell(){casts++;}};
 const actor=Object.assign(Object.create(EQActor.prototype),{uuid:'Actor.test',isOwner:true,type:'character',flags:{eqrpg:{}},effects:[],items:new Map([['spell',spell]]),
  system:{details:{class:'shaman',level:1},manaRegen:10,regenRate:0,resources:{hp:{value:10,max:10},mana:{value:20,max:30}},spellSlots:[{itemId:'spell',cooldownRemaining:0}]},
  _getSlotArray(){return structuredClone(this.system.spellSlots);},_buildActorCardHeader:()=>'',
  async update(patch){for(const [path,value] of Object.entries(patch)){let obj=this;const keys=path.split('.');for(const key of keys.slice(0,-1))obj=obj[key]??={};obj[keys.at(-1)]=structuredClone(value);}}
 });return {actor,count:()=>casts};
}
let {actor,count}=fixture();await actor.castSpell(0);assert.equal(count(),1);assert.equal(actor.system.spellSlots[0].cooldownRemaining,2);
await tickCombatRound(actor,game.combat);assert.equal(actor.system.spellSlots[0].cooldownRemaining,2,'casting before the first maintenance tick cannot shorten recast');
game.combat.round=2;await tickCombatRound(actor,game.combat);await actor.castSpell(0);assert.equal(count(),1);
game.combat.round=3;await tickCombatRound(actor,game.combat);await actor.castSpell(0);assert.equal(count(),2);
({actor,count}=fixture());actor.system.spellSlots=[{itemId:'',cooldownRemaining:0}];game.combat.round=2;
await actor.memorizeSpell('spell',0);assert.equal(actor.system.spellSlots[0].cooldownRemaining,1);await tickCombatRound(actor,game.combat);await actor.castSpell(0);assert.equal(count(),0);
game.combat.round=3;await tickCombatRound(actor,game.combat);await actor.castSpell(0);assert.equal(count(),1,'preparation completed in round 2 becomes available in round 3');
({actor,count}=fixture(0));await actor.castSpell(0);await actor.castSpell(0);assert.equal(count(),2,'instant recast remains instant; action-economy enforcement is separate');
({actor}=fixture());actor.system.resources.mana.value=5;await actor.restShort();assert.equal(actor.system.resources.mana.value,15,'one hour restores the hourly rate, not ten times it');
assert.equal(messages,1);
({actor}=fixture(-1));await assert.rejects(actor.castSpell(0),/Invalid spell recast/);assert.equal(actor.system.resources.mana.value,20);
({actor}=fixture());actor.system.resources.mana.value=40;await assert.rejects(actor.castSpell(0),/exceeds the current maximum/);assert.equal(actor.system.resources.mana.value,40,'legacy excess is preserved for review');
({actor,count}=fixture());const update=actor.update;actor.update=async function(patch){const filtered=Object.fromEntries(Object.entries(patch).filter(([key])=>!key.startsWith('flags.eqrpg.cooldownStarts.')));await update.call(this,filtered);};
await assert.rejects(actor.castSpell(0),/Cooldown start was not confirmed/);assert.equal(count(),0);
console.log('PHB magic timing examples passed: one-round recast, preparation delay, same-round maintenance, instant recast and hourly recovery.');
