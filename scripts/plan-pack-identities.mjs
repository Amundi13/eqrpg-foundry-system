import fs from 'node:fs';import path from 'node:path';
import {PACK_SOURCES} from '../module/packs/sources.mjs';
import {sourceIdFor} from '../module/packs/pack-upgrades.mjs';
const snapshot=process.argv[2];if(!snapshot)throw Error('Supply unpacked snapshot directory');
const identity={version:1,packs:{}};const missing=[];const extras=[];
for(const [packId,sources] of PACK_SOURCES) {
 const name=packId.split('.')[1];const directory=path.join(snapshot,'unpacked',name);
 const old=fs.readdirSync(directory).filter(f=>f.endsWith('.json')).map(f=>JSON.parse(fs.readFileSync(path.join(directory,f),'utf8')));
 const used=new Set();const entries={};
 for(const source of sources) {
  const sameName=sources.filter(entry=>entry.name===source.name && entry.type===source.type).length;
  const signature=entry=>JSON.stringify([...(entry.system?.classLevels??[])].sort());
  const candidates=old.filter(entry=>entry.name===source.name && entry.type===source.type
    && (sameName===1 || signature(entry)===signature(source)));
  if(candidates.length>1)throw Error('Ambiguous legacy identity: '+source.name);
  const sourceId=sourceIdFor(packId,source);const match=candidates[0];
  if(match && used.has(match._id))throw Error('Duplicate source identity: '+source.name);
  const record={id:match?._id??sourceId,name:source.name,pages:{}};
  if(match)used.add(match._id);else missing.push({pack:name,name:source.name});
  for(const page of source.pages??[]) {
   const matches=(match?.pages??[]).filter(p=>p.name===page.name);
   if(matches.length>1)throw Error('Ambiguous page identity: '+page.name);
   record.pages[page.name]=matches[0]?._id??sourceIdFor(packId+'.'+sourceId,page);
  }
  entries[sourceId]=record;
 }
 for(const entry of old)if(!used.has(entry._id))extras.push({pack:name,id:entry._id,name:entry.name});
 identity.packs[packId]=entries;
}
fs.writeFileSync(path.join(snapshot,'identity-plan.json'),JSON.stringify(identity,null,2)+'\n');
fs.writeFileSync(path.join(snapshot,'source-comparison.json'),JSON.stringify({missing,extras},null,2)+'\n');
console.log(JSON.stringify({sourceEntries:Object.values(identity.packs).reduce((n,p)=>n+Object.keys(p).length,0),missingFromInstalled:missing.length,extraInstalled:extras.length,extras}));
