import assert from "node:assert/strict";

globalThis.Actor = class {};
globalThis.CONST = { ACTIVE_EFFECT_MODES: { ADD: 2 } };
globalThis.foundry = {
  utils: {
    mergeObject: (original, other) => ({ ...original, ...other }),
  },
};

const { EQActor } = await import("../module/documents/actor.mjs");

const effect = {
  id: "shielding",
  name: "Minor Shielding",
  disabled: false,
  statuses: new Set(),
  flags: {
    eqrpg: {
      spellEffect: true,
      tempHPGrant: 4,
      tempHPRemaining: 2,
      statusIds: ["shielded"],
    },
  },
  async update(changes) {
    if ("disabled" in changes) this.disabled = changes.disabled;
    if ("statuses" in changes) this.statuses = new Set(changes.statuses);
    if ("flags.eqrpg.tempHPRemaining" in changes) {
      this.flags.eqrpg.tempHPRemaining = changes["flags.eqrpg.tempHPRemaining"];
    }
    if ("flags.eqrpg.statusIds" in changes) {
      this.flags.eqrpg.statusIds = changes["flags.eqrpg.statusIds"];
    }
  },
  async delete() {
    actor.effects.splice(actor.effects.indexOf(this), 1);
  },
};

const statusChanges = [];
const actor = Object.assign(Object.create(EQActor.prototype), {
  effects: [effect],
  system: {
    resources: {
      hp: { value: 10, max: 10, temp: 5 },
    },
  },
  async update(changes) {
    if ("system.resources.hp.temp" in changes) this.system.resources.hp.temp = changes["system.resources.hp.temp"];
    if ("system.resources.hp.value" in changes) this.system.resources.hp.value = changes["system.resources.hp.value"];
  },
  async updateEmbeddedDocuments(_type, updates) {
    for (const update of updates) {
      const target = this.effects.find((entry) => entry.id === update._id);
      if (target && "flags.eqrpg.tempHPRemaining" in update) {
        target.flags.eqrpg.tempHPRemaining = update["flags.eqrpg.tempHPRemaining"];
      }
    }
  },
  async _setTokenStatuses(ids, active) {
    statusChanges.push({ ids, active });
  },
  _getMinimumHP() {
    return -10;
  },
});

await actor.toggleSpellEffectEnabled(effect.id);
assert.equal(effect.disabled, true);
assert.equal(actor.system.resources.hp.temp, 3);
assert.equal(effect.flags.eqrpg.tempHPRemaining, 2);
assert.deepEqual(statusChanges.at(-1), { ids: ["shielded"], active: false });

const savedDelete=effect.delete;
effect.delete=async()=>{};
const statusCount=statusChanges.length;
await assert.rejects(actor.removeSpellEffect(effect.id),/deletion was not confirmed/);
assert.equal(actor.system.resources.hp.temp,3);
assert.equal(actor.effects.length,1);
assert.equal(statusChanges.length,statusCount);
effect.delete=savedDelete;
actor.createEmbeddedDocuments=async()=>[];
await assert.rejects(actor.toggleSpellEffect({label:'Canceled spell',changes:[{key:'system.resources.hp.temp',mode:2,value:8}],statuses:['shielded']}),/creation was not confirmed/);
assert.equal(actor.system.resources.hp.temp,3);
assert.equal(statusChanges.length,statusCount);

await actor.toggleSpellEffectEnabled(effect.id);
assert.equal(effect.disabled, false);
assert.equal(actor.system.resources.hp.temp, 5);
assert.equal(effect.flags.eqrpg.tempHPRemaining, 2);
assert.deepEqual(statusChanges.at(-1), { ids: ["shielded"], active: true });

await actor.applyDamage(3);
assert.equal(actor.system.resources.hp.temp, 2);
assert.equal(actor.system.resources.hp.value, 10);
assert.equal(effect.flags.eqrpg.tempHPRemaining, 0);
await actor.toggleSpellEffectEnabled(effect.id);
await actor.toggleSpellEffectEnabled(effect.id);
assert.equal(actor.system.resources.hp.temp, 2, "spent temporary HP cannot be refilled by toggling");

await actor.removeSpellEffect(effect.id);
assert.equal(actor.system.resources.hp.temp, 2);
assert.equal(actor.effects.length, 0);
assert.deepEqual(statusChanges.at(-1), { ids: ["shielded"], active: false });

const legacyInvisibility = {
  id: "legacy-invisibility",
  name: "Toggle Invisibility",
  disabled: false,
  statuses: new Set(),
  flags: { eqrpg: { spellEffect: true, effectKey: "invisibility" } },
  update: effect.update,
  async delete() {},
};
actor.effects.push(legacyInvisibility);
await actor.toggleSpellEffectEnabled(legacyInvisibility.id);
assert.deepEqual(legacyInvisibility.flags.eqrpg.statusIds, ["invisible"]);
assert.deepEqual(statusChanges.at(-1), { ids: ["invisible"], active: false });

console.log("Buff toggle lifecycle validation passed.");
