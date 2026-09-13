import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
const checks=[
  ['validate-v14-compat'],['validate-sample-data'],['smoke-v14-init'],
  ['test-buff-toggle'],['test-chat-effects'],['test-chat-hp'],['test-chat-status'],['test-audit-regressions'],['test-pack-upgrades'],
  ['test-commerce'],['test-commerce-requests'],['test-training'],
  ['test-limited-effects'],['test-combat-ticks'],['test-magic-timing'],['test-rest-recovery'],['test-actor-migrations'],['test-effect-timing'],['test-effect-expiry'],
  ['test-wizard-safety'],['test-spell-slots'],['test-invisibility'],['test-rune-roll'],['test-catalog-evidence'],['audit-catalog-evidence'],
  ['assign-source-ids','--check'],['generate-sample-data','--check']
];
for(const [name,...args] of checks) {
  const result=spawnSync(process.execPath,[`scripts/${name}.mjs`,...args],{cwd:root,stdio:'inherit'});
  if(result.error) throw result.error;
  if(result.status!==0) process.exit(result.status??1);
}
console.log(`All ${checks.length} local checks passed. Live Foundry acceptance remains separate.`);
