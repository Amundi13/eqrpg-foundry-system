# Actor migration review

Actor migration version 1 is an explicit GM operation. It does not run automatically on world startup. Back up the world and review a disposable copy before applying it to a campaign.

In the Foundry console, the elected active GM can preview and then apply the same plans:

```js
const plans = game.eqrpg.previewActorMigrations();
console.table(plans.map(({id,name,status,review}) => ({id,name,status,review})));
// Inspect each ready plan's expected source and patch before applying.
await game.eqrpg.applyActorMigrations(plans);
```

Version 1 adds missing character HP-roll and training ledgers and marks legacy characters ineligible for the new-character wizard. It does not reconstruct historical rolls, training balances, or multiclass history. Existing resources, inventory and recorded data are preserved. Initialize training separately using the Records workflow.

Unknown versions and unsupported actor types are blocked. A changed actor invalidates its preview; generate a fresh plan and review it again. Modified patches and duplicate actor IDs are rejected. A failure reports confirmed actor IDs in `error.completed`; inspect the failed actor before generating another preview. Successfully migrated actors are skipped on subsequent runs.

This migration covers world actors supplied to the API. It is not a general migration of scene token overrides, compendiums, embedded journals or multiclass records. Actual Foundry V14 migration and multi-client acceptance testing remain outstanding.
