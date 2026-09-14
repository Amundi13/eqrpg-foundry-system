import assert from 'node:assert/strict';
await import('./smoke-v14-init.mjs');
foundry.utils.randomID ??= ()=>'wizard-test';
const errors=[];
globalThis.ui={notifications:{warn(){},error(message){errors.push(message);},info(){}}};
const {CharacterWizard,isInitialCharacterCreation,buildCharacterWizardUpdate}=await import('../module/apps/character-wizard.mjs');

function applyFlat(actor, patch) {
 for(const [path,value] of Object.entries(patch)) {
  const parts=path.split('.');
  if(parts.at(-1).startsWith('-=')) {
   const key=parts.pop().slice(2);let target=actor;
   for(const part of parts) target=target[part]??={};
   delete target[key];continue;
  }
  let target=actor;
  for(const part of parts.slice(0,-1)) target=target[part]??={};
  target[parts.at(-1)]=value;
 }
}
function makeActor({blank=false,started=false}={}) {
 const abilities=Object.fromEntries(['str','dex','con','int','wis','cha'].map((key,index)=>[key,{base:10+index,racial:0,misc:0}]));
 return {
  name:blank?'New Character':'Veteran',
  system:{
   details:{race:blank?'':'human',class:blank?'':'wizard',alignment:'tn',deity:'',level:blank?1:9},
   resources:{xp:blank?0:45000,hp:{value:37,max:51},mana:{value:21,max:30}},
   abilities,wealth:{platinum:8,gold:4,silver:2,copper:1},
  },
  flags:{eqrpg:{creationEligible:blank,...(started?{creationStarted:true}:{creationCompleted:!blank})}},
  items:[],updates:[],closed:false,
  async update(patch){this.updates.push(structuredClone(patch));applyFlat(this,patch);},
  async createEmbeddedDocuments(){assert.fail('Edit mode must not grant items');},
  async updateEmbeddedDocuments(){assert.fail('Edit mode must not alter items');},
 };
}

const blank=makeActor({blank:true});
assert.equal(isInitialCharacterCreation(blank),true);
assert.equal(isInitialCharacterCreation(makeActor()),false);
assert.equal(isInitialCharacterCreation(makeActor({blank:true,started:true})),false);

const veteran=makeActor();
const choices={race:'elf',klass:'enchanter',alignment:'ng',deity:'Tunare',name:'Veteran Edited',loadout:'gold',abilities:{str:9,dex:10,con:11,int:18,wis:12,cha:13}};
const reopened=new CharacterWizard(veteran);
assert.deepEqual(reopened.choices.abilities,{str:10,dex:11,con:12,int:13,wis:14,cha:15});
const preview=buildCharacterWizardUpdate(veteran,choices,{initialCreation:false});
assert.equal('system.details.level' in preview,false);
assert.equal('system.wealth.gold' in preview,false);
const before={level:veteran.system.details.level,xp:veteran.system.resources.xp,hp:structuredClone(veteran.system.resources.hp),mana:structuredClone(veteran.system.resources.mana),wealth:structuredClone(veteran.system.wealth)};
await CharacterWizard.DEFAULT_OPTIONS.actions.wizardFinish.call({
 actor:veteran,choices,isInitialCreation:false,element:null,_finishing:false,close(){this.closed=true;},
});
assert.equal(veteran.name,'Veteran Edited');
assert.equal(veteran.system.details.class,'enchanter');
assert.equal(veteran.system.abilities.int.base,18);
assert.deepEqual({level:veteran.system.details.level,xp:veteran.system.resources.xp,hp:veteran.system.resources.hp,mana:veteran.system.resources.mana,wealth:veteran.system.wealth},before);

const newcomer=makeActor({blank:true});
const newChoices={race:'human',klass:'warrior',alignment:'tn',deity:'',name:'New Hero',loadout:'gold',abilities:{str:16,dex:14,con:14,int:8,wis:10,cha:8}};
await CharacterWizard.DEFAULT_OPTIONS.actions.wizardFinish.call({
 actor:newcomer,choices:newChoices,isInitialCreation:true,element:null,_finishing:false,close(){this.closed=true;},
});
assert.equal(newcomer.flags.eqrpg.creationCompleted,true);
assert.equal(newcomer.flags.eqrpg.creationEligible,false);
assert.equal(newcomer.system.details.class,'warrior');
assert.equal(newcomer.system.abilities.str.base,16);
assert.equal(newcomer.system.wealth.gold,0);
assert.equal(errors.length,0,errors.join('; '));

console.log('Character wizard completes new characters and safely updates established sheets.');
