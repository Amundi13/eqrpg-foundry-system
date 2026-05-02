Sample pack content now lives in this folder instead of being edited directly in `module/packs/sample-data.mjs`.

Workflow:
- edit the relevant JSON file in this folder
- run `node scripts/generate-sample-data.mjs`
- run `node scripts/validate-sample-data.mjs`
- reload Foundry or repopulate the packs if you want the changes imported into compendia

Item icon workflow:
- open `icons/index.html` in a browser to browse the EQ icon sheet
- run `node scripts/generate-item-icon-map.mjs` to create or refresh `item-icons.csv`
- enter icon filenames such as `item_0123.png` in the `icon` column for weapons, armor, equipment, and consumables
- run `node scripts/apply-item-icons.mjs`
- run `node scripts/generate-sample-data.mjs`
- in Foundry, run `game.eqrpg.repopulatePacks()` as GM if you want the compendia refreshed immediately

Files:
- `spells.json`
- `feats.json`
- `skills.json`
- `weapons.json`
- `armor.json`
- `consumables.json`
- `item-icons.csv`

`sample-data.mjs` is generated output and should be treated as disposable.
