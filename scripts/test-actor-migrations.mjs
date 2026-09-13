import assert from 'node:assert/strict';
import {planActorMigration,applyActorMigrations} from '../module/helpers/actor-migrations.mjs';
globalThis.game={user:{id:'gm',isGM:true},users:[{id:'gm',isGM:true,active:true}]};
const source={_id:'a',name:'Legacy',type:'character',system:{details:{level:10,class:'wizard'},resources:{hp:{value:7,max:80,temp:3},mana:{value:2}}},items:[{_id:'item',name:'Custom'}],flags:{eqrpg:{custom:true}}};
const before=structuredClone(source);const plan=planActorMigration(source);assert.deepEqual(source,before);
assert.equal(plan.patch['flags.eqrpg.creationEligible'],false);assert.deepEqual(plan.patch['system.hpAdvancement'],[]);
assert.equal(Object.keys(plan.patch).some(p=>p.startsWith('system.resources')),false);
const actor={isOwner:true,data:structuredClone(source),toObject(){return structuredClone(this.data);},async update(patch){for(const [path,value] of Object.entries(patch)){let obj=this.data;const keys=path.split('.');for(const key of keys.slice(0,-1)) obj=obj[key]??={};obj[keys.at(-1)]=structuredClone(value);}}};
const actors=new Map([['a',actor]]);
await applyActorMigrations([plan],actors);assert.deepEqual(actor.data.system.resources,source.system.resources);assert.deepEqual(actor.data.items,source.items);assert.equal(planActorMigration(actor.data).status,'current');
await applyActorMigrations([planActorMigration(actor.data)],actors);
actor.data=structuredClone(source);const bad=structuredClone(plan);bad.patch['system.resources.hp.value']=100;await assert.rejects(applyActorMigrations([bad],actors),/Modified/);
actor.data.name='Changed';await assert.rejects(applyActorMigrations([plan],actors),/Stale/);
actor.data=structuredClone(source);actor.update=async()=>{};await assert.rejects(applyActorMigrations([plan],actors),/not confirmed/);
assert.equal(planActorMigration({...source,flags:{eqrpg:{actorMigrationVersion:99}}}).status,'blocked');
game.user.id='other';await assert.rejects(applyActorMigrations([plan],actors),/elected/);
game.user.id='gm';
const second={...actor,data:{...structuredClone(source),_id:'b'},writes:0,async update(){this.writes++;}};
actor.data=structuredClone(source);
actor.update=async function(patch){
 for(const [path,value] of Object.entries(patch)){let obj=this.data;const keys=path.split('.');for(const key of keys.slice(0,-1))obj=obj[key]??={};obj[keys.at(-1)]=structuredClone(value);}
 game.user.id='other';
};
await assert.rejects(applyActorMigrations([plan,planActorMigration(second.data)],new Map([['a',actor],['b',second]])),error=>{
 assert.match(error.message,/authority changed/);assert.deepEqual(error.completed,['a']);return true;
});
assert.equal(second.writes,0,'authority loss stops the next actor write');
console.log('Actor migration tests passed: minimal patches, retained resources/items, stale/tampered plans, cancellation, idempotence and authority.');
