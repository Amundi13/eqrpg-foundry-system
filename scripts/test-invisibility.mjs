import assert from 'node:assert/strict';
import {SAMPLE_SPELLS} from '../module/packs/sample-data.mjs';
globalThis.Actor=class{};
globalThis.Item=class{};
const {EQActor}=await import('../module/documents/actor.mjs');
function fixture(entries){const actor=Object.assign(Object.create(EQActor.prototype),{effects:[],statuses:0,_setTokenStatuses:async()=>{actor.statuses++;}});actor.effects=entries.map((entry,index)=>({id:String(index),...entry,async delete(){actor.effects=actor.effects.filter(effect=>effect.id!==this.id);}}));return actor;}
let actor=fixture([{name:'Toggle Invisibility'},{name:'Apply Improved Invisibility'},{name:'See Invisibility'},{name:'Ring of Invisibility',flags:{eqrpg:{breaksOnAttack:false}}},{name:'Invisibility',disabled:true},{name:'Invisibility',duration:{expired:true}},{name:'Custom veil',flags:{eqrpg:{breaksOnAttack:true}}}]);
await actor.breakInvisibility('attack');assert.deepEqual(actor.effects.map(e=>e.name),['See Invisibility','Ring of Invisibility','Invisibility','Invisibility']);
actor=fixture([{name:'Invisibility'}]);actor.effects[0].delete=async()=>{};await assert.rejects(actor.breakInvisibility('cast'),/not confirmed/);assert.equal(actor.statuses,0);
actor=fixture([{name:'Custom veil',flags:{eqrpg:{breaksOnAttack:true,breaksOnCast:false}}}]);await actor.breakInvisibility('cast');assert.equal(actor.effects.length,1);
const improved=SAMPLE_SPELLS.find(entry=>entry.name==='Improved Invisibility');assert.equal(improved.system.manaCost,13);assert.match(improved.system.effect,/fixed duration of 30 minutes/);
console.log('Invisibility tests passed: known spell inheritance, custom-name preservation, inactive effects, canceled deletion and corrected Improved Invisibility source.');
