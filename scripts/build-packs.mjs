import {packBuildInput} from "./lib/pack-build-input.mjs";
import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {compilePack,extractPack} from '@foundryvtt/foundryvtt-cli';
import {PACK_SOURCES} from '../module/packs/sources.mjs';
import {sourceIdFor} from '../module/packs/pack-upgrades.mjs';
const root=fileURLToPath(new URL('../',import.meta.url));
const arg=process.argv.indexOf('--output');
if(arg<0 || !process.argv[arg+1]) throw Error('Provide --output with a new directory inside dist.');
const output=path.resolve(root,process.argv[arg+1]);const allowed=path.resolve(root,'dist')+path.sep;
if(!output.startsWith(allowed) || fs.existsSync(output)) throw Error('Pack build output must be a new directory inside this repository\'s dist folder.');
const {identities,legacy,digest:inputDigest}=packBuildInput();
if(identities.version!==1)throw Error('Unknown pack identity manifest version.');
const hierarchy={actors:['items','effects'],items:['effects'],journal:['pages','categories']};
function prepare(doc,collection,prefix=collection,parentId='') {
 const key=parentId?parentId+'.'+doc._id:doc._id;
 assert.match(doc._id,/^[a-zA-Z0-9]{16}$/);
 doc._key=`!${prefix}!${key}`;
 for(const child of hierarchy[collection]??[]) {
  doc[child]??=[];
  for(const entry of doc[child]) {
   entry._id??=sourceIdFor(prefix+'.'+key+'.'+child,entry);
   prepare(entry,child,prefix+'.'+child,key);
  }
 }
 return doc;
}
function files(dir) {return fs.readdirSync(dir,{withFileTypes:true}).flatMap(entry=>entry.isDirectory()?files(path.join(dir,entry.name)):[path.join(dir,entry.name)]);}
function databaseHashes(dir){return Object.fromEntries(files(dir).filter(file=>!['LOCK','LOG','LOG.old'].includes(path.basename(file))).sort().map(file=>[path.relative(dir,file).replaceAll('\\','/'),crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex')]));}
fs.mkdirSync(output,{recursive:true});const results=[];
for(const [packId,sources] of PACK_SOURCES) {
 const name=packId.split('.')[1];const collection=name==='eqrpg-phb'?'journal':name==='eqrpg-monsters'?'actors':'items';
 const sourceDir=path.join(output,'json',name);const dbDir=path.join(output,'packs',name);fs.mkdirSync(sourceDir,{recursive:true});
 const expected=new Map();
 for(const source of sources) {
  const sourceId=sourceIdFor(packId,source);const identity=identities.packs[packId]?.[sourceId];
  if(!identity)throw Error('Missing pinned pack identity: '+source.name);
  const doc=structuredClone(source);doc._id=identity.id;
  doc.flags??={};doc.flags.eqrpg??={};doc.flags.eqrpg.packSource={version:1,sourceId,baseline:structuredClone(source)};
  for(const page of doc.pages??[]) {page._id=identity.pages[page.name];if(!page._id)throw Error('Missing pinned page identity: '+page.name);}
  prepare(doc,collection);
  if(expected.has(doc._id))throw Error('Duplicate pack identity: '+doc._id);
  expected.set(doc._id,doc);
 }
 for(const original of legacy[packId]??[]) {
  const doc=prepare(structuredClone(original),collection);
  if(expected.has(doc._id))throw Error('Legacy ID collision: '+doc._id);
  expected.set(doc._id,doc);
 }
 for(const [id,doc] of [...expected].sort(([a],[b])=>a.localeCompare(b)))fs.writeFileSync(path.join(sourceDir,id+'.json'),JSON.stringify(doc)+'\n');
 await compilePack(sourceDir,dbDir);
 // Unpack a copy because opening a LevelDB can change its metadata files.
 const verifyDB=path.join(output,'verify-db',name);fs.cpSync(dbDir,verifyDB,{recursive:true});
 const unpacked=path.join(output,'verified',name);await extractPack(verifyDB,unpacked);
 const actual=files(unpacked).filter(f=>f.endsWith('.json')).map(file=>JSON.parse(fs.readFileSync(file,'utf8')));
 assert.equal(actual.length,expected.size,name);
 for(const doc of actual)assert.deepEqual(doc,expected.get(doc._id),name+': '+doc.name);
 results.push({pack:name,sourceEntries:sources.length,retainedLegacy:(legacy[packId]??[]).length,total:actual.length});
}
const report={output,inputDigest,cliVersion:'3.0.4',results,hashes:databaseHashes(path.join(output,'packs'))};
fs.writeFileSync(path.join(output,'build-report.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({output,results}));
