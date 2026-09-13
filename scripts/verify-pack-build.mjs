import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';import assert from 'node:assert/strict';
import {packBuildInput} from './lib/pack-build-input.mjs';
const directory=path.resolve(process.argv[2]??'');
const report=JSON.parse(fs.readFileSync(path.join(directory,'..','build-report.json'),'utf8'));
assert.equal(report.inputDigest,packBuildInput().digest,'Compiled packs no longer match current source inputs');
function files(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(path.join(dir,e.name)):[path.join(dir,e.name)]);}
const hashes=Object.fromEntries(files(directory).filter(f=>!['LOCK','LOG','LOG.old'].includes(path.basename(f))).sort().map(f=>[path.relative(directory,f).replaceAll('\\','/'),crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex')]));
assert.deepEqual(hashes,report.hashes,'Compiled database bytes changed after verification');
console.log('Compiled pack inputs and database hashes verified.');
