import assert from 'node:assert/strict';
await import('./smoke-v14-init.mjs');
// The separate smoke test exports no hooks; wizard guards are tested through the action itself.
globalThis.ui={notifications:{warn(){},error(){},info(){}}};
const {CharacterWizard}=await import('../module/apps/character-wizard.mjs');
for(const flags of [{},{eqrpg:{creationStarted:true,creationEligible:true}},{eqrpg:{creationCompleted:true,creationEligible:true}}]) {
 const actor={system:{details:{level:1},resources:{xp:0}},flags,async update(){assert.fail('Legacy/interrupted wizard must not write');}};
 await CharacterWizard.DEFAULT_OPTIONS.actions.wizardFinish.call({actor});
}
console.log('Legacy and interrupted wizard guards passed.');
