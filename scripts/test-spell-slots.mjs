import assert from 'node:assert/strict';
import {readSpellSlots} from '../module/helpers/spell-slots.mjs';
globalThis.Actor=class{};
const {EQActor}=await import('../module/documents/actor.mjs');
const valid=[{itemId:'spell',cooldownRemaining:3}];const slots=readSpellSlots(valid);
assert.equal(slots.length,8);assert.deepEqual(slots[0],valid[0]);slots[0].cooldownRemaining=0;assert.equal(valid[0].cooldownRemaining,3);
assert.equal(readSpellSlots(undefined).length,8);
for(const invalid of [{0:valid[0]},[null],['spell'],[{itemId:'spell',cooldownRemaining:-1}],[{itemId:'spell',cooldownRemaining:NaN}],[{itemId:'spell',cooldownRemaining:'2'}],Array(9).fill(valid[0]),[{} , , {}]]) {
 assert.throws(()=>readSpellSlots(invalid),/need GM review/);
 const actor=Object.assign(Object.create(EQActor.prototype),{toObject:()=>({system:{spellSlots:invalid}}),async update(){assert.fail('Malformed preparations must not be overwritten');}});
 await assert.rejects(actor.unmemorizeSpell(0),/need GM review/);
 await assert.rejects(actor.recoverSpells(),/need GM review/);
 await assert.rejects(actor.castSpell(0),/need GM review/);
}
console.log('Spell-slot preservation tests passed: malformed arrays, invalid cooldowns, excess entries, immutable reads and blocked destructive resets.');
