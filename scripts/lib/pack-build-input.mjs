import fs from 'node:fs';import crypto from 'node:crypto';
import {PACK_SOURCES} from '../../module/packs/sources.mjs';
export function packBuildInput() {
 const identities=JSON.parse(fs.readFileSync(new URL('../fixtures/pack-identities.json',import.meta.url),'utf8'));
 const legacy=JSON.parse(fs.readFileSync(new URL('../fixtures/legacy-pack-entries.json',import.meta.url),'utf8'));
 const digest=crypto.createHash('sha256').update(JSON.stringify({sources:[...PACK_SOURCES],identities,legacy})).digest('hex');
 return {identities,legacy,digest};
}
