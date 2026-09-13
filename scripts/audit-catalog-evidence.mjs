import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {catalogEvidenceSummary} from '../module/helpers/catalog-evidence.mjs';
const directory=fileURLToPath(new URL('../module/packs/source/',import.meta.url));
const rows=[];
for(const file of ['armor','consumables','equipment','feats','monsters','skills','spells','weapons'].map(name=>name+'.json')) {
  const data=JSON.parse(fs.readFileSync(path.join(directory,file),'utf8'));
  for(const source of data) {
    const evidence=catalogEvidenceSummary(source);
    const missing=source.type==='npc' ? ['hitDice','attacks','damage','saves','abilities'].filter(key=>!source.system?.statblock?.[key]?.trim()) : [];
    rows.push({sourceId:source.flags?.eqrpg?.sourceId,name:source.name,type:source.type,file,reviewedFields:evidence.reviewedFields,changedFields:evidence.changedFields,missing,importedVerificationClaim:source.system?.verified??null,fields:evidence.fields});
  }
}
const report={version:1,total:rows.length,recordsWithReviewedFields:rows.filter(row=>row.reviewedFields>0).length,changedReviews:rows.filter(row=>row.changedFields>0).length,unreviewedRecords:rows.filter(row=>row.reviewedFields===0).length,records:rows};
const outputIndex=process.argv.indexOf('--output');
if(outputIndex>=0) {
  const output=process.argv[outputIndex+1];if(!output)throw Error('Missing output path');
  fs.writeFileSync(output,JSON.stringify(report,null,2)+'\n');
}
if(report.changedReviews) throw Error('A reviewed field changed; reconcile its evidence before release.');
console.log(JSON.stringify({total:report.total,recordsWithReviewedFields:report.recordsWithReviewedFields,unreviewedRecords:report.unreviewedRecords,changedReviews:report.changedReviews}));
