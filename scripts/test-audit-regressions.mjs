import assert from "node:assert/strict";
import fs from "node:fs";
import { EQRPG } from "../module/helpers/config.mjs";
import { getAccessibleSpellLevel, getClassSpellTemplates, getSpellEligibility } from "../module/packs/class-spells.mjs";
import { createDefaultMonster, buildNPCActorData, buildNPCActorUpdate, deriveMonster, normalizeMonster, MONSTER_BUILDER_SCHEMA } from "../module/apps/monster-builder-rules.mjs";

function mergeObject(base, source) {
  const result=structuredClone(base);
  for(const [key,value] of Object.entries(source ?? {})) result[key]=value && typeof value === "object" && !Array.isArray(value) ? mergeObject(result[key] ?? {},value) : structuredClone(value);
  return result;
}
function expandObject(flat){const result={};for(const [path,value] of Object.entries(flat)){const keys=path.split(".");let current=result;for(const key of keys.slice(0,-1))current=current[key]??={};current[keys.at(-1)]=value;}return result;}
globalThis.foundry={utils:{mergeObject,deepClone:structuredClone,expandObject},applications:{api:{ApplicationV2:class{},HandlebarsApplicationMixin:x=>x}}};

// Source anchors: PHB printed pp.70,79,83,91,98; casting pp.52,90.
assert.equal(EQRPG.babProgression[EQRPG.classes.monk.babProgression](30), 30);
assert.equal(EQRPG.babProgression[EQRPG.classes.rogue.babProgression](5), 4);
assert.equal(EQRPG.classes.necromancer.saves.fortitude, "medium");
assert.equal(EQRPG.classes.beastlord.saves.will, "medium");
assert.equal(EQRPG.classes.ranger.saves.fortitude, "medium");
for (const [level, expected] of [[1,1],[2,1],[3,2],[29,15],[30,15]]) assert.equal(getAccessibleSpellLevel("wizard",level),expected);
for (const [level, expected] of [[1,0],[4,0],[5,1],[6,1],[7,2],[27,12],[30,12]]) assert.equal(getAccessibleSpellLevel("paladin",level),expected);
assert.equal(getClassSpellTemplates("paladin",1).length,0);
assert.equal(getClassSpellTemplates("wizard",2).length,0);
assert.ok(getClassSpellTemplates("paladin",5).length > 0);

const initial=createDefaultMonster();initial.name="Injured guardian";
assert.deepEqual(buildNPCActorUpdate(initial,structuredClone(initial)),{});
const edited=structuredClone(initial);edited.name="Veteran guardian";edited.hitDice.count=4;
const patch=buildNPCActorUpdate(edited,initial);
assert.equal(patch.name,"Veteran guardian");
for(const path of ["system.resources.hp.value","system.resources.hp.temp","system.resources.mana.value","system.resources.mana.max","system.biography"]) assert.ok(!(path in patch),path);
initial.abilities.con=14;initial.combat.saves.fortitude={manualOverride:true,total:0,misc:0};
let actor=buildNPCActorData(initial);assert.equal(actor.system.combat.saves.fortitude.value,0);assert.match(actor.system.statblock.saves,/Fort \+0/);
initial.combat.saves.fortitude.total=9;actor=buildNPCActorData(initial);assert.match(actor.system.statblock.saves,/Fort \+9/);

const {readActorMonster}=await import("../module/apps/monster-builder.mjs");
actor.system.abilities.dex.value=18;actor.system.combat.initiative.value=4;actor.system.statblock.attacks="2 claws +8 melee";
delete actor.flags;
const imported=buildNPCActorData(readActorMonster(actor));
assert.equal(imported.system.combat.initiative.value,4);
assert.equal(imported.system.combat.saves.fortitude.value,9);
assert.equal(imported.system.statblock.attacks,"2 claws +8 melee");
globalThis.Item=class{};
const {EQItem}=await import("../module/documents/item.mjs");
const target={actor:{uuid:"Actor.target"}};
const slow=EQItem._buildNamedSpellEffectConfig({name:"Probe Slow",system:{effect:"slow (1)"}},{targets:[target],saveResults:[{success:true,actorUuid:"Actor.target"}]});
assert.equal(slow,null);
const aberration=createDefaultMonster();aberration.identity.type="aberration";aberration.hitDice.count=3;
assert.equal(deriveMonster(aberration).skillBudget,24);
aberration.identity.size="large";assert.equal(deriveMonster(aberration).skillBudget,22);
aberration.advancement.challengeRating="1/2";assert.equal(buildNPCActorData(aberration).system.details.cr,0.5);
aberration.abilities.int=null;assert.equal(buildNPCActorData(aberration).system.abilities.int.value,null);
aberration.abilities.dex=0;assert.equal(deriveMonster(aberration).dexMod,-5);
const ooze=createDefaultMonster();ooze.identity.type="ooze";ooze.hitDice.die=10;
assert.equal(deriveMonster(ooze).hp,15);
const progression=JSON.parse(fs.readFileSync(new URL("./fixtures/class-progression.json",import.meta.url),"utf8"));
assert.equal(progression.length,450);
for(const row of progression) {
  const cls=EQRPG.classes[row.class];
  assert.equal(EQRPG.babProgression[cls.babProgression](row.level),row.bab,`${row.class} ${row.level} BAB`);
  for(const [key,value] of Object.entries(row.saves)) assert.equal(EQRPG.saveProgression[cls.saves[key]][row.level],value,`${row.class} ${row.level} ${key}`);
}
class Field {constructor(options={}){this.options=options;}}
class Schema {constructor(fields){this.fields=fields;}}
class ArrayField {constructor(field,options={}){this.options=options;}}
function defaults(schema){return Object.fromEntries(Object.entries(schema).map(([key,field])=>[key,field.fields?defaults(field.fields):structuredClone(field.options.initial??(field instanceof ArrayField?[]:0))]));}
foundry.abstract={TypeDataModel:class{}};
foundry.data={fields:{NumberField:Field,StringField:Field,SchemaField:Schema,HTMLField:Field,ArrayField}};
globalThis.game={combat:{round:1},i18n:{localize:x=>x}};globalThis.CONFIG={EQRPG};
const {CharacterData}=await import("../module/data-models/character.mjs");
function character(level,entries=[]){const model=Object.assign(new CharacterData(),defaults(CharacterData.defineSchema()));model.details.class="warrior";model.details.race="human";model.details.level=level;for(const ability of Object.values(model.abilities))ability.base=10;model.hpAdvancement=structuredClone(entries);model.parent={items:[],effects:[]};model.prepareDerivedData();return model;}
assert.equal(character(2).resources.hp.max,19,"legacy average remains unchanged");
assert.equal(character(2,[{level:2,die:12,roll:12}]).resources.hp.max,24,"rolled HP survives model reconstruction");
assert.equal(character(3,[{level:3,die:12,roll:1}]).resources.hp.max,20,"legacy levels retained and future roll applied");
const hybrid=character(11);hybrid.details.class="paladin";hybrid.abilities.wis.base=16;hybrid.prepareDerivedData();assert.equal(hybrid.resources.mana.max,42);
// PHB printed 170-171 / PDF 173-174: example pools and hourly Meditation recovery.
const wizard=character(5);wizard.details.class='wizard';wizard.abilities.int.base=16;wizard.parent.items=[{type:'skill',name:'Meditation',system:{ranks:7}}];wizard.prepareDerivedData();assert.equal(wizard.resources.mana.max,30);assert.equal(wizard.manaRegen,10);
const bard=character(10);bard.details.class='bard';bard.abilities.cha.base=18;bard.parent.items=[{type:'skill',name:'Meditation',system:{ranks:13}}];bard.prepareDerivedData();assert.equal(bard.resources.mana.max,80);assert.equal(bard.manaRegen,17);
hybrid.details.level=4;hybrid.prepareDerivedData();assert.equal(hybrid.resources.mana.max,0);assert.equal(hybrid.manaRegen,0);
const troll=character(7);troll.details.race='troll';troll.prepareDerivedData();assert.equal(troll.regenRate,7,'PHB printed 32: seventh-level troll recovers 7 HP per hour');
globalThis.Actor=class{};
globalThis.ui={notifications:{warn(){}}};
const {EQActor}=await import("../module/documents/actor.mjs");
let paidUpdates=0,casts=0;
const spell={id:"spell",system:{manaCost:3,recastTime:2},async castSpell(_caster,options){assert.equal(options.resourcesPaid,true);casts++;}};
const caster=Object.assign(Object.create(EQActor.prototype),{
  system:{resources:{mana:{value:10}},spellSlots:[{itemId:"spell",cooldownRemaining:0}]},
  items:new Map([["spell",spell]]),
  _getSlotArray(){return structuredClone(this.system.spellSlots);},
  async update(changes){paidUpdates++;this.system.resources.mana.value=changes["system.resources.mana.value"];this.system.spellSlots=changes["system.spellSlots"];}
});
await Promise.all([caster.castSpell(0),caster.castSpell(0)]);
assert.equal(casts,1);assert.equal(paidUpdates,1);assert.equal(caster.system.resources.mana.value,7);
await caster.castSpell(0);assert.equal(casts,1,"cooldown is enforced outside the sheet");
const {SAMPLE_MONSTERS,SAMPLE_SPELLS}=await import("../module/packs/sample-data.mjs");
const abhorrent=SAMPLE_MONSTERS.find(entry=>entry.name==="Abhorrent");
assert.equal(abhorrent.system.resources.hp.max,170);assert.equal(abhorrent.system.combat.ac.value,42);
assert.equal(abhorrent.system.statblock.attacks,"Bite +26 melee, 2 claws +23 melee");
assert.equal(abhorrent.flags.eqrpg.sourceReference.printedPage,19);
assert.equal(SAMPLE_SPELLS.find(entry=>entry.name==="Aanya's Animation").system.duration,"Permanent (see text)");
game.time={worldTime:0};game.settings={get:()=>"publicroll"};
globalThis.ChatMessage={create:async()=>{},getSpeaker:()=>({})};
let healing=0;
const paladin=Object.assign(Object.create(EQActor.prototype),{name:"Paladin",flags:{eqrpg:{}},system:{classFeatures:{layOnHandsPool:30}},_buildActorCardHeader:()=>"",async update(changes){this.flags.eqrpg.layOnHandsDay=changes["flags.eqrpg.layOnHandsDay"];},async applyHealing(amount){healing+=amount;}});
await Promise.all([paladin.layOnHands(),paladin.layOnHands()]);await paladin.layOnHands();
assert.equal(healing,30,"daily use survives repeated actions");
game.time.worldTime=86400;await paladin.layOnHands();assert.equal(healing,60,"next world day refreshes daily use");
const {CharacterWizard}=await import("../module/apps/character-wizard.mjs");
for(const actor of [{system:{details:{level:2},resources:{xp:0}}},{system:{details:{level:1},resources:{xp:0}},flags:{eqrpg:{creationCompleted:true}}}]) {
  actor.update=async()=>assert.fail("creation must not overwrite established characters");
  await CharacterWizard.DEFAULT_OPTIONS.actions.wizardFinish.call({actor});
}
const {MonsterBuilder}=await import("../module/apps/monster-builder.mjs");
let createdSource;
foundry.documents={Actor:{create:async data=>{createdSource=data;return {name:data.name};}}};
ui.notifications.info=()=>{};ui.notifications.error=message=>assert.fail(message);game.i18n.format=x=>x;
await MonsterBuilder.DEFAULT_OPTIONS.actions.createActor.call({monster:readActorMonster(abhorrent),sourceCreature:abhorrent},{preventDefault(){}});
assert.deepEqual(createdSource.system,abhorrent.system,"source creation preserves printed exceptions and original text");
const legacyDraft=createDefaultMonster();legacyDraft.schemaVersion="eqrpg-monster-builder-v1";legacyDraft.combat.attacks=[{name:"2 claws",attackBonus:8,mode:"melee",damageFormula:"1d6",primary:true}];
const migrated=normalizeMonster(legacyDraft);assert.equal(migrated.schemaVersion,MONSTER_BUILDER_SCHEMA);assert.equal(migrated.combat.attacks[0].count,2);assert.equal(migrated.combat.attacks[0].name,"claws");
assert.deepEqual(normalizeMonster(migrated),migrated);assert.equal(legacyDraft.schemaVersion,"eqrpg-monster-builder-v1","migration must not mutate the source");
assert.throws(()=>normalizeMonster({schemaVersion:"future-unknown"}),/Unsupported/);
const external=buildNPCActorData(migrated);external.name="Renamed on sheet";external.system.abilities.int.value=null;external.system.combat.saves.fortitude.value=17;external.system.combat.initiative.value=9;external.system.resources.hp.value=1;external.system.resources.hp.temp=3;
const reconciled=readActorMonster(external);assert.equal(reconciled.name,external.name);assert.equal(reconciled.abilities.int,null);assert.equal(reconciled.combat.saves.fortitude.total,17);assert.equal(buildNPCActorData(reconciled).system.combat.initiative.value,9);assert.equal(reconciled.combat.attacks[0].count,2);
assert.deepEqual(buildNPCActorUpdate(reconciled,reconciled),{});
assert.equal(getSpellEligibility({system:{classLevels:["wizard:3"]}},"wizard",3).allowed,false);
assert.equal(getSpellEligibility({system:{classLevels:["wizard:3"]}},"wizard",5).allowed,true);
assert.equal(getSpellEligibility({system:{classLevels:["cleric:1"]}},"wizard",30).allowed,false);
assert.equal(getSpellEligibility({system:{classLevels:["paladin:1"]}},"paladin",4).allowed,false);
const prepared=Object.assign(Object.create(EQActor.prototype),{type:"character",system:{details:{class:"wizard",level:3}},items:new Map([["spell",{id:"spell",type:"spell",system:{classLevels:["wizard:2"]}}]]),_getSlotArray:()=>[{itemId:"spell",cooldownRemaining:2},{itemId:"",cooldownRemaining:0}],async update(){assert.fail("Must not clear cooldown through preparation");}});
await prepared.unmemorizeSpell(0);await prepared.memorizeSpell("spell",1);
const canceledCaster=Object.assign(Object.create(EQActor.prototype),{type:"character",system:{details:{class:"wizard",level:3},resources:{mana:{value:10}}},items:new Map([["spell",{system:{spellLevel:1,manaCost:3,recastTime:2},async castSpell(){assert.fail("Canceled resource update must not resolve a spell");}}]]),_getSlotArray:()=>[{itemId:"spell",cooldownRemaining:0}],async update(){return undefined;}});
await canceledCaster.castSpell(0);
prepared.items.set("spell",{id:"spell",type:"spell",system:{classLevels:["wizard:3"]}});
prepared._getSlotArray=()=>[{itemId:"spell",cooldownRemaining:0}];await prepared._castPreparedSpell(0);
const {isPrimaryGM}=await import("../module/helpers/gm-authority.mjs");
game.users=[{id:"b",isGM:true,active:true},{id:"a",isGM:true,active:true}];game.user=game.users[0];assert.equal(isPrimaryGM(),false);game.user=game.users[1];assert.equal(isPrimaryGM(),true);game.users[1].active=false;game.user=game.users[0];assert.equal(isPrimaryGM(),true);
console.log("Audit regression checks passed.");

// Advancement must persist before grants or success announcements.
let advancementGrants=0, advancementMessages=0;
game.settings={get:()=>"publicroll"};
ChatMessage.create=async()=>{advancementMessages++;};
globalThis.Roll=class {async evaluate(){this.total=4;return this;}};
function advancingActor(commit=true) {
 return Object.assign(Object.create(EQActor.prototype),{type:"character",isOwner:true,
 flags:{eqrpg:{}},system:{details:{level:2,class:"wizard"},xpProgress:{ready:true},abilities:{con:{mod:0}},resources:{hp:{value:8,max:8}},hpAdvancement:[]},
 _buildActorCardHeader:()=>"",async _grantClassSpellsForLevel(){advancementGrants++;return [];},
 async update(patch){if(commit){const expanded=expandObject(patch);if(expanded.system)this.system=mergeObject(this.system,expanded.system);if(expanded.flags)this.flags=mergeObject(this.flags,expanded.flags);}}
 });
}
const failedAdvancement=advancingActor(false);
await assert.rejects(failedAdvancement.levelUp(),/not confirmed/);
assert.equal(advancementGrants,0);assert.equal(advancementMessages,0);assert.equal(failedAdvancement._levelUpPending,false);
const advanced=advancingActor();await advanced.levelUp();
assert.equal(advanced.system.details.level,3);assert.equal(advanced.system.resources.hp.value,12);
assert.deepEqual(advanced.system.hpAdvancement,[{level:3,die:4,roll:4}]);
assert.equal(advancementGrants,1);assert.equal(advancementMessages,1);
const unowned=advancingActor();unowned.isOwner=false;await assert.rejects(unowned.levelUp(),/owned character/);
const recoverable=advancingActor();let grantAttempts=0;recoverable._grantClassSpellsForLevel=async()=>{grantAttempts++;if(grantAttempts===1)throw Error('grant interrupted');return ['Recovered Spell'];};
await assert.rejects(recoverable.levelUp(),/grant interrupted/);assert.equal(recoverable.system.details.level,3);assert.equal(recoverable.flags.eqrpg.advancements.level_3.state,'pending');
const recovered=await recoverable.levelUp();assert.equal(recovered.recovered,true);assert.equal(recoverable.system.details.level,3);assert.equal(recoverable.flags.eqrpg.advancements.level_3.state,'complete');assert.equal(grantAttempts,2);
const changed=advancingActor();
globalThis.Roll=class {async evaluate(){changed.system.resources.hp.value=2;this.total=4;return this;}};
await assert.rejects(changed.levelUp(),/changed while rolling/);assert.equal(changed.system.details.level,2);assert.equal(changed.system.resources.hp.value,2);
console.log("Advancement persistence checks passed.");
