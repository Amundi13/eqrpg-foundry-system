import {CATALOG_EVIDENCE} from '../packs/catalog-evidence.mjs';
const get=(data,path)=>path.split('.').reduce((v,key)=>v?.[key],data);
export function catalogFieldEvidence(source,path) {
  const review=CATALOG_EVIDENCE[source.flags?.eqrpg?.sourceId];
  if(!review || !Object.hasOwn(review.fields,path)) return {status:'Unreviewed',path};
  if(JSON.stringify(get(source,path))!==JSON.stringify(review.fields[path])) return {status:'Changed since review',path};
  return {status:'Page checked',path,book:review.book,printedPage:review.printedPage,pdfPage:review.pdfPage};
}
export function catalogEvidenceSummary(source) {
  const review=CATALOG_EVIDENCE[source.flags?.eqrpg?.sourceId];
  const fields=Object.keys(review?.fields??{}).map(path=>catalogFieldEvidence(source,path));
  return {reviewedFields:fields.filter(field=>field.status==='Page checked').length,changedFields:fields.filter(field=>field.status==='Changed since review').length,fields};
}
