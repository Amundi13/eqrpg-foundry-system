import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
// Optional integration check against the user's licensed installation; no server or world is opened.
const app=process.argv[2];
if(!app) throw new Error('Supply the Foundry resources/app directory.');
const version=JSON.parse(fs.readFileSync(path.join(app,'package.json'),'utf8')).version;
await import(pathToFileURL(path.resolve(app,'common/server.mjs')).href);
const {EQRPG}=await import('../module/helpers/config.mjs');
globalThis.CONFIG={EQRPG};
globalThis.game={combat:null,i18n:{localize:value=>value,format:value=>value}};
const types=['character','npc','pet','armor','consumable','equipment','faction','feat','skill','spell','weapon'];
const models=new Map();
for(const type of types) {
 const exports=await import(`../module/data-models/${type}.mjs`);
 const Model=Object.values(exports)[0];models.set(type,Model);
 const model=new Model({}, {strict:true});
 assert.equal(model.validate(),true,`${type} defaults`);
}
const {PACK_SOURCES}=await import('../module/packs/sources.mjs');
let count=0;
for(const [,sources] of PACK_SOURCES) for(const source of sources) {
 const Model=models.get(source.type);if(!Model)continue;
 const model=new Model(source.system,{strict:true});
 assert.equal(model.validate(),true,source.name);count++;
}
const npc=new (models.get('npc'))({abilities:{str:{value:null},con:{value:null}},details:{cr:0.5}},{strict:true});
assert.equal(npc.abilities.str.value,null);assert.equal(npc.abilities.con.value,null);
console.log(`Actual Foundry ${version} schema validation passed: ${types.length} model defaults and ${count} catalog records. This does not test browser behavior or other Foundry versions.`);
