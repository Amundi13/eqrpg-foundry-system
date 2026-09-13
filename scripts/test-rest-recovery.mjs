import assert from 'node:assert/strict';
globalThis.Actor=class{};let id=0,messages=0,warnings=0;
globalThis.foundry={utils:{randomID:()=>String(++id).padStart(16,'0')}};
globalThis.game={user:{isGM:true},combat:null,i18n:{localize:x=>x},settings:{get:()=>''}};
globalThis.ui={notifications:{info(){},warn(){warnings++;}}};
globalThis.ChatMessage={create:async()=>messages++,getSpeaker:()=>({})};
const {EQActor}=await import('../module/documents/actor.mjs');
function fixture(rate=0){return Object.assign(Object.create(EQActor.prototype),{uuid:'Actor.rest',isOwner:true,type:'character',flags:{eqrpg:{}},system:{manaRegen:4,regenRate:rate,resources:{hp:{value:5,max:100,temp:3},mana:{value:2,max:100}},spellSlots:[{itemId:'spell',cooldownRemaining:6000}]},
 _getSlotArray(){return structuredClone(this.system.spellSlots);},_buildActorCardHeader:()=>'',
 async update(patch){for(const [path,value] of Object.entries(patch)){let obj=this;const keys=path.split('.');for(const key of keys.slice(0,-1))obj=obj[key]??={};obj[keys.at(-1)]=structuredClone(value);}}
});}
let actor=fixture();await actor.restLong();assert.equal(actor.system.resources.hp.value,5,'ordinary eight-hour rest does not fully heal');assert.equal(actor.system.resources.mana.value,34);assert.equal(actor.system.spellSlots[0].cooldownRemaining,1200,'long recast is reduced by elapsed rounds, not erased');assert.equal(actor.system.resources.hp.temp,3);
actor=fixture(7);await actor.restShort();assert.equal(actor.system.resources.hp.value,12);assert.equal(actor.system.resources.mana.value,6);
actor=fixture(7);await actor.restLong();assert.equal(actor.system.resources.hp.value,61);
actor=fixture();actor.system.resources.hp.value=-10;await assert.rejects(actor.restLong(),/dead/);await assert.rejects(actor.applyHealing(50),/dead/);
actor=fixture();actor.system.resources.hp.value=-5;await actor.applyHealing(8);assert.equal(actor.system.resources.hp.value,3,'living unconscious characters remain healable');
actor=fixture();actor.update=async()=>{};const count=messages;await assert.rejects(actor.restShort(),/not confirmed/);assert.equal(messages,count);
actor=fixture();let results=await Promise.allSettled([actor.restShort(),actor.restLong()]);assert.equal(results.filter(r=>r.status==='fulfilled').length,1);
actor=fixture();game.combat={started:true,combatants:[{actor}]};await assert.rejects(actor.restShort(),/in combat/);game.combat=null;
actor=fixture();game.user.isGM=false;await assert.rejects(actor.recoverSpells(),/Only the GM/);assert.equal(actor.system.spellSlots[0].cooldownRemaining,6000);game.user.isGM=true;
await actor.recoverSpells();assert.equal(actor.system.spellSlots[0].cooldownRemaining,0);
actor=fixture();ChatMessage.create=async()=>{throw Error('Offline');};await actor.restShort();assert.equal(actor.system.resources.mana.value,6);assert.equal(warnings,1);
console.log('Rest recovery tests passed: hourly amounts, fast recovery, no automatic full healing, long cooldowns, dead actors, cancellation, double clicks, combat restrictions and GM overrides.');
