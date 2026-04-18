Sample pack content now lives in this folder instead of being edited directly in `module/packs/sample-data.mjs`.

Workflow:
- edit the relevant JSON file in this folder
- run `node scripts/generate-sample-data.mjs`
- run `node scripts/validate-sample-data.mjs`
- reload Foundry or repopulate the packs if you want the changes imported into compendia

Files:
- `spells.json`
- `feats.json`
- `skills.json`
- `weapons.json`
- `armor.json`
- `consumables.json`

`sample-data.mjs` is generated output and should be treated as disposable.
