# Spell-effect expiration

On Foundry V14, EQRPG configures the native expiry action to update effects rather than delete them. Foundry sets `duration.expired`; EQRPG retains the effect record and removes its remaining temporary-HP contribution. The [V14 configuration API](https://foundryvtt.com/api/v14/variables/CONFIG.ActiveEffect.html) documents this behavior.

The elected active GM reconciles expired spell effects on effect updates, world-time changes, combat turns and world readiness. World scans include unlinked token actors. Only an explicit expired flag triggers cleanup; unresolved or conditional duration text does not create a guessed deadline. V13 does not receive a new automatic expiration engine.

The remaining pool debit and a receipt under `flags.eqrpg.expiredSpellEffects` are written together on the actor. Repeated cleanup, reload and interrupted token-status work reuse that receipt. Disabled effects contribute no additional debit. Later removal or disabling cannot subtract a reconciled pool again; expired effects cannot be enabled again through the spell-effect controls. Cast a new effect when renewing the spell.

If a write cannot be confirmed, cleanup reports an error. Review the actor's temporary HP and receipt before manually changing either. Receipts are retained after effect removal to prevent a replay against the old ID. Do not reuse an expired effect ID or manually erase its receipt as a renewal method.

Local tests cover remaining and disabled pools, repeated/concurrent cleanup, canceled actor updates, interrupted token statuses, later deletion, ownership and elected-GM checks. They do not prove atomicity across clients or modules that independently edit HP or delete/disable effects. Modules overriding the system's expiry action, raw effect deletion, and simultaneous damage/effect edits still require live acceptance testing.

In a disposable V14.365 world, verify a partially spent pool expires once; another active effect sharing its token status remains represented; disabled pools are not subtracted again; unlinked tokens are reconciled; reconnection does not repeat the debit; and conditional durations remain under GM control. Repeat with two clients and a GM disconnect before approving campaign use.

## Chat effect actions

Spell-effect chat buttons apply without toggling off an existing effect. Each message/button action has a receipt in flags.eqrpg.chatEffects on the target actor. A completed receipt prevents replay even after the original effect is removed. Existing effects are preserved; this does not implement stacking or duration refresh.

A pending receipt means an operation was interrupted. Check the actor's effect list and temporary HP before correcting the result manually. Do not erase a pending receipt just to retry an old card: the effect or HP grant may already have been written. After review, use a new cast for a new application. Condition chat buttons have separate application receipts, described below. Simultaneous clients still require live acceptance testing.

## Damage and healing chat actions

Each actor can receive one damage result and one healing result per chat panel. Full, half and double damage are alternatives; changing buttons cannot apply the same panel again. Selecting multiple tokens linked to one actor applies HP once. Different unlinked actors retain independent receipts.

Receipts under `flags.eqrpg.chatHP` record the chosen amount, previous HP/temp HP, completion state and resulting HP. Canceled or uncertain writes leave a pending receipt, which blocks further chat HP operations for that actor. A partial temporary-HP pool update can require manual reconciliation even when the main HP update did not complete. Never assume an error means nothing changed.

After checking the actor's HP, all temporary-HP effect pools, and any still-running clients, the elected GM can mark a pending action reviewed without changing HP or inventory:

```js
const actor = game.actors.get("ACTOR_ID");
console.table(actor.flags.eqrpg.chatHP);
await game.eqrpg.reviewChatHP(actor, "MESSAGE_ID_0_damage", "Describe the checked HP/pools and any manual correction.");
```

Use the actual receipt key from the table. The reviewed card remains unavailable for replay, while a new card can be applied. This does not provide a server transaction or serialize direct damage, manual HP edits, effect expiration or another client. Live multi-client acceptance remains required.

## Condition chat actions

Prone, rooted and entangled chat actions apply the condition explicitly. They no longer toggle an existing condition off. A receipt in `flags.eqrpg.chatStatuses` is shared by the same message, actor and condition, including multiple linked tokens. Replaying a completed card after manually removing its condition does not restore it. Use the normal condition controls to remove conditions and a new card for a new application.

A pending receipt requires review of the actor's actual conditions. After checking that no other client is still processing the action, the elected GM can record the review without changing conditions:

```js
const actor = game.actors.get("ACTOR_ID");
console.table(actor.flags.eqrpg.chatStatuses);
await game.eqrpg.reviewChatStatus(actor, "MESSAGE_ID_prone", "Describe the condition check and any manual correction.");
```

Use the actual receipt ID shown in the table. Reviewed cards remain unavailable for replay. New cards use new receipts. Local tests establish same-client behavior and persistence checks, not cross-client transaction safety. Native condition controls and other modules retain their own behavior.
