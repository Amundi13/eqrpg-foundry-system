import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {extractPack} from '@foundryvtt/foundryvtt-cli';
const root=process.cwd();
const packRoot=path.join(root,'packs');
function inventory(dir) {return fs.readdirSync(dir,{withFileTypes:true}).flatMap(entry=>{const file=path.join(dir,entry.name);return entry.isDirectory()?inventory(file):[[path.relative(packRoot,file),crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex')]];}).sort((a,b)=>a[0].localeCompare(b[0]));}
const before=inventory(packRoot);
fs.mkdirSync(path.join(root,'dist'),{recursive:true});
const snapshot=fs.mkdtempSync(path.join(root,'dist','pack-audit-'));
fs.cpSync(packRoot,path.join(snapshot,'packs'),{recursive:true});
const manifest=JSON.parse(fs.readFileSync('system.json','utf8'));
const results=[];
for(const pack of manifest.packs) {
 const current=path.join(snapshot,pack.path,'CURRENT');
 if(fs.existsSync(current)) {
   const value=fs.readFileSync(current,'utf8');
   if(!/^MANIFEST-\d+\r?\n$/.test(value)) throw Error('Unexpected LevelDB CURRENT content: '+pack.name);
   fs.writeFileSync(current,value.replace('\r\n','\n'));
 }
 const dest=path.join(snapshot,'unpacked',pack.name);
 await extractPack(path.join(snapshot,pack.path),dest);
 const entries=fs.readdirSync(dest).filter(name=>name.endsWith('.json')).map(name=>JSON.parse(fs.readFileSync(path.join(dest,name),'utf8')));
 results.push({pack:pack.name,type:pack.type,count:entries.length,entries:entries.map(entry=>({id:entry._id,name:entry.name,type:entry.type}))});
}
if(JSON.stringify(before)!==JSON.stringify(inventory(packRoot)))throw Error('Installed packs changed during verification.');
fs.writeFileSync(path.join(snapshot,'inventory.json'),JSON.stringify({snapshot,results,unchanged:true},null,2));
console.log(JSON.stringify({snapshot,unchanged:true,counts:results.map(({pack,count})=>({pack,count}))}));
