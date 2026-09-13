import fs from "node:fs";
import {sourceIdFor} from "../module/packs/pack-upgrades.mjs";

const datasets=["spells","skills","weapons","armor","equipment","consumables","feats","monsters"];
const pending=[];
let count=0;
for(const dataset of datasets) {
  const path=new URL(`../module/packs/source/${dataset}.json`,import.meta.url);
  const data=JSON.parse(fs.readFileSync(path,"utf8"));
  const seen=new Set();let changed=false;
  for(const entry of data) {
    const id=sourceIdFor(`eqrpg.eqrpg-${dataset}`,entry);
    if(seen.has(id)) throw new Error(`Duplicate source ID in ${dataset}: ${entry.name}`);
    seen.add(id);
    if(!entry.flags?.eqrpg?.sourceId) {
      if(process.argv.includes("--check")) throw new Error(`Missing pinned source ID in ${dataset}: ${entry.name}. Run node scripts/assign-source-ids.mjs.`);
      entry.flags ??= {};entry.flags.eqrpg ??= {};entry.flags.eqrpg.sourceId=id;changed=true;
    }
    count++;
  }
  if(changed) pending.push({path,data});
}
for(const {path,data} of pending) fs.writeFileSync(path,JSON.stringify(data,null,2)+"\n");
console.log(`Validated ${count} pinned source IDs; updated ${pending.length} source files. Preserve these IDs when editing or renaming entries.`);
