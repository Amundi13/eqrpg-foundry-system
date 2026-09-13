# Compendium upgrades

The new updater preserves existing document IDs and never deletes records. It applies source changes only when the stored source baseline and current values permit a safe merge. Local edits and uncertain legacy data become explicit conflicts. Removed source records remain in the pack.

These routines have mock regression coverage; they still require a disposable V14 Build365 world before production use. No installed pack was modified during implementation.

## Preview and review

On a GM client, use the console to create a read-only plan:

```js
const plans = await game.eqrpg.previewPackUpgrades(["eqrpg.eqrpg-monsters"]);
console.table(plans.map(plan => ({
  pack: plan.packId,
  create: plan.creates.length,
  update: plan.updates.length,
  conflicts: plan.conflicts.length,
  unchanged: plan.unchanged
})));
console.log(plans);
```

Omit the pack list to preview all nine system packs. Inspect `updates[].changes`, `creates`, and `conflicts`. Plans include the original pack payloads for stale-state checks; retain a copy with the review. Previewing does not unlock or write a pack.

Legacy records without a stored baseline can adopt source tracking when their relevant fields already match. Different values require a field-by-field choice. For an illustrative conflict on `system.acBonus`:

```js
plans[0] = game.eqrpg.resolvePackConflict(plans[0], "actualDocumentId", {
  "system.acBonus": "source"
});
```

Use the actual document ID and every field listed in that conflict. Each choice must be `source` or `local`; missing or extra selections fail. `local` preserves the current value and records the reviewed source baseline. Review the resulting plan again. Ambiguous identities, structural changes, document-type changes and replacements of embedded pages/items/effects require dedicated handling; the generic resolver will not replace those structures.

## Apply the reviewed plan

```js
const results = await game.eqrpg.applyPackUpgrades(plans);
console.table(results);
```

Application runs from the first connected GM when sorted by user ID. The updater rechecks the pack against the preview, keeps existing IDs, confirms each returned document and restores the original lock state. Unresolved conflicts remain untouched. If the pack changed after review, generate a fresh preview. If a write fails or is canceled, processing stops and reports completed work; create a new preview before retrying. Already completed entries then become unchanged, rather than being recreated.

This is not a distributed transaction. Do not edit a pack concurrently with its upgrade. Live tests must cover socket timing, lock restoration and failure recovery. Public document updates use the incremental update APIs described in the [Foundry V14 Actor reference](https://foundryvtt.com/api/v14/classes/foundry.documents.Actor.html#update); the mock tests do not establish backend transaction guarantees.

The old `repopulatePacks()` and `repopulateSpellPack()` names now return read-only previews. They no longer clear packs. First-launch initialization still fills empty packs using the new identities; it does not upgrade nonempty packs automatically.

## Source maintenance

All1,604 JSON catalog entries have a pinned `flags.eqrpg.sourceId`. Keep it when correcting names, class levels, page references or statistics. For a new record, run:

```sh
node scripts/assign-source-ids.mjs
node scripts/generate-sample-data.mjs
node scripts/assign-source-ids.mjs --check
node scripts/generate-sample-data.mjs --check
node scripts/test-pack-upgrades.mjs
```

The ID assignment script validates all records before writing changed files; repeat runs leave existing IDs unchanged. Duplicate IDs fail validation. PHB journal identities are derived from their stable entry names; pin an explicit ID before any journal rename. Embedded journal-page upgrades remain a dedicated migration task.
