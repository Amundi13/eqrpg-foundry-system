# Audit implementation status

2026-09-13. The audited working tree is prepared as release 0.1.14 after local 0.1.11 acceptance and the creator/mana regression hotfix. The nine-package audit plan remains in progress; remaining gaps are documented below.

## Implemented and locally checked

- Corrected all 450 reviewed class-level BAB/save comparisons, six race/class restrictions, rogue backstab milestones, spell unlock timing and hybrid mana scaling.
- Future HP rolls have a persistent ledger; legacy average HP remains. Level-up validates ownership, rolls and intervening changes, then confirms advancement before grants/chat. A pending post-level spell grant is recoverable by pressing Level Up again without advancing or rerolling. Cross-client advancement remains unresolved.
- The wizard completes newly created blank characters and opens established or interrupted characters in a non-destructive edit mode. Edits preserve level, XP, HP, mana, wealth and inventory; starter grants remain limited to first-time creation.
- Training has a GM-reviewed opening balance, five points per subsequent level, source-table expenditure costs and an affordability-checked ledger. Benefit application, prerequisites, caps and the PHB trained-feat table/prose conflict remain manual. See TRAINING-RECORDS.md.
- Preparation/casting enforce class eligibility, mana and cooldowns. Cooling slots cannot be cleared or moved to bypass recovery. Confirmed resource writes precede spell resolution; same-client repeat actions are guarded.
- Slow saves, active/expired/suppressed bonus collection, shared token statuses and spent temporary-HP toggles have regression coverage. Canceled effect creation/deletion cannot change temporary HP or token statuses. Fixed and caster-scaled durations use version-specific effect data; unresolved expressions explicitly request GM review.
- Lay on hands confirms daily use before healing, including level-20 complete healing. Harm touch uses a touch attack and Fortitude save, preserves daily use on a miss, and confirms spending before damage. Unknown NPC touch AC requires manual entry.
- Monster edits use minimal patches and preserve unrelated data/resources. Nullable abilities, fractional CR, zero/manual values, HD/ooze rules, attack multiplicity and skill budgets have targeted fixes. Three builder modes share versioned drafts and reconcile later actor edits. Live visual/keyboard QA remains outstanding.
- Catalog field evidence distinguishes unchanged page-reviewed fields, changed reviewed values and unreviewed imports. Abhorrent's statblock, Aanya's duration, Complete Healing three invisibility spells and Rune I–V have recorded field evidence. Only 11 of 1,604 catalog records have any page-reviewed fields; this is not comprehensive catalog verification.
- Pack upgrades preview changes, preserve IDs/local edits, require explicit conflict choices, reject stale plans and report confirmed progress on failure. All 1,604 source IDs are pinned. See PACK-UPGRADES.md.
- Commerce requests execute through the elected GM using the updating user's ownership and catalog prices. Receipts support interrupted delivery and constrained refunds. Duplicate submission, replay, ambiguous completion and GM review have tests. This is not a server transaction or a proven GM-failover protocol. See STORE-RECOVERY.md.
- Explicit version-1 actor migrations add missing ledgers and legacy wizard guards without inventing history. Stale/tampered previews, canceled writes and authority loss stop processing. See MIGRATIONS.md.
- Pinned development tools build packs in isolated directories, preserve legacy document/page identities and retain 79 unresolved legacy spells. All 1,699 documents are compared after database round-trip. Build reports bind source inputs and database hashes. Release archives use deterministic ordering/timestamps, preserve numeric database logs and reject changed inputs. CI checks independent builds before packaging. See DEVELOPMENT.md.

- V14 native expiration now retains effect records and reconciles remaining temporary HP through an actor receipt. Disabled/repeated cleanup, canceled writes, interrupted statuses and later removal have tests. Expired effects cannot be re-enabled through spell controls. See EFFECT-EXPIRATION.md for scope and live acceptance requirements.

- Spell-effect chat buttons now claim a persistent action receipt before applying an effect. Repeated clicks cannot remove or recreate that effect; existing buffs stay in place. Interrupted operations remain pending for GM review. Same-client duplicate clicks and ownership are checked; cross-client execution and other chat actions remain acceptance gaps.

- Damage/healing chat buttons now use persistent per-actor/panel receipts. Full/half/double are alternatives, linked-token targets are deduplicated, and interrupted actions block subsequent chat HP operations pending explicit GM review. HP and temporary-HP pool writes are checked before completion. Cross-client races and direct/manual edits remain outside this guarantee.

- Condition chat buttons explicitly apply supported statuses and retain per-message/actor/status receipts. Replays do not remove existing conditions or restore cleared ones. Interrupted claims, status writes and completion receipts stop processing; an elected-GM review action records resolution without mutating conditions. New-card labels now say Apply.

- PHB printed 170-171/174 (PDF 173-174/177) now anchor corrected mana pools, hourly recovery and recast/preparation timing. PHB printed 32/370 (PDF 35/373) anchor level-based fast recovery, completed-rest behavior and the prohibition on ordinary healing of dead actors. Legacy excess mana and malformed spell slots require explicit review. Once-per-round combat receipts prevent duplicate/rewound maintenance. See MAGIC-RECOVERY.md for migration limits and remaining rules.

- Rune I–V now roll the PHB printed p. 310 formulas when creating a new effect and preserve the total/formula on that effect. Existing effects do not reroll. New Rune effects become inactive when their tracked pool reaches zero, cannot be re-enabled, and may be replaced by a new cast. Their fixed/scaled time limit also applies. Fresh casts can replace a timed-out effect; the old chat receipt still prevents replay. Confirmed actor receipts make failed temporary-HP grants inert during damage, toggling, removal and expiry. Buff-HP stacking is refused before claiming a chat action, and active Rune prevents both the Shadow Knight lifetap action and lifetap-line spell targets. Legacy Rune records retain their original data; broader typed stacking and recovery UI remain incomplete.

## Validation

`node scripts/validate-all.mjs` passes all 27 local checks, including static validation of 48 runtime modules. Tests cover rules fixtures, advancement, pack upgrades, commerce/recovery, training, effects, migrations, wizard guards, catalog evidence, source IDs and generated-data parity. Mock tests do not establish actual browser/socket/permission behavior.

Foundry 14.365.0 schema classes accept all 11 model defaults and 1,604 catalog records through `scripts/test-foundry-schemas.mjs`.

Live V14.365 acceptance passed in `norrath-test` using the 0.1.11 acceptance candidate that became release 0.1.12. Foundry migrated 10 actors, 69 chat messages, one combat and one scene. Character and NPC sheets, the character spellbook, the 1,036-item store, character attack/damage cards and an NPC attack card rendered and executed without post-launch browser errors. The installed spell compendium reports 1,256 records and exposes Rune II, Rune V and Improved Invisibility. The candidate launch log contains no warnings, errors, LevelDB-open failures or pack repairs. The pre-V14 world, V14-repaired packs and Foundry's 0.1.11 migration backup are preserved.

The current game-night candidate is validated through an independent reproducibility build; its exact path and SHA-256 are recorded in workspace evidence rather than hard-coded here. Stale-input and modified-database rejection tests also pass. The previous installed packs were backed up before the verified candidate packs were installed.

## Remaining acceptance work

| Plan package | Remaining work |
|---|---|
| 1 Source and preservation | Reconcile remaining source data and provenance; live source/edit preservation checks. |
| 2 Progression and eligibility | Remaining class features, spell acquisition/purchase/research rules and live preparation checks. |
| 3 Advancement and limited use | Training benefits/caps, historical reconciliation, multiclass records, remaining limited abilities and cross-client advancement. |
| 4 Casting and effects | Live native-expiry/pool cleanup acceptance, dispel, typed stacking/refresh, SR, components, targeting, periodic effects, summons and replay-safe effect actions. |
| 5 Monster representation | Attack exceptions, source conflicts and live nullable-field/draft validation. |
| 6 Builder UX | Browser/keyboard/narrow-layout QA and complete calculation explanations. |
| 7 Catalog and rules | Remaining spells/monsters/equipment, conditions, load, feats/skills, racial traits and GMG domains. |
| 8 Persistence and upgrades | Live multi-client commerce/failover/recovery, broader world/token/embedded migrations and live pack-upgrade tests. |
| 9 Runtime and release | Two-client concurrency and Forge installation/upgrade. Local V14.365 schema, world migration, sheets, core rolls and candidate pack loading have passed. |

Keep these changes unpublished until the applicable remaining gates pass. Unresolved legacy entries require explicit review before correction or removal.
