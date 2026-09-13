# Store purchase recovery

Purchases record the intended items and payment on the character before delivery. While a purchase is pending, the store prevents another purchase for that character and offers **Resume purchase** and **Cancel undelivered purchase**.

- Resume completes a confirmed payment and remaining deliveries. It recognizes inventory entries already created for the receipt and does not charge again.
- Cancel refunds only an order with no delivered items or uncertain delivery attempt, and only when the coin balance still matches the recorded paid balance.
- An uncertain refund stays pending. Resume can confirm a completed refund, but never issues a second refund.
- An ambiguous delivery or changed balance requires GM review. Do not delete the receipt or repeatedly create replacement orders. Inspect `actor.flags.eqrpg.purchase`, the character's wealth, and inventory IDs against the receipt's `items`, `delivered`, and `attempted` fields. Review any intervening edits before manually correcting inventory or money. Preserve the receipt as evidence until the discrepancy is resolved.

Equipment and consumables arrive as a new stack for each purchase, preserving existing stacks during recovery. Weapons and armor arrive as separate copies. Only the most recent receipt is retained after completion; this is recovery state, not a full transaction ledger.

Store UI actions submit requests through Actor updates. The elected connected GM uses the update hook's initiating user ID to check ownership, prices purchases from the source catalog, and serializes requests per actor. Persisted request results prevent replay. An active GM is required. This is not a server-side transaction: GM disconnect/failover and unrelated manual currency/inventory edits still require live validation. Live Foundry V14 permission, cancellation-hook, reconnect, and multi-client testing remains required before release. Mock tests cover confirmed payment before delivery, rejected payment, partial deliveries, uncertain creation, refund failures, and repeated clicks.


## Interrupted GM requests

A queued or processing request remains blocked after an interruption. The GM should inspect `actor.flags.eqrpg.commerceRequest`, its entry in `commerceResults`, the purchase receipt and inventory. After confirming that the former GM client is no longer processing the request and recording any needed reconciliation, the elected GM can run:

```js
await game.eqrpg.acknowledgeInterruptedCommerceRequest(actor, requestId, "Review findings and any correction made");
```

This only releases the request gate. It does not charge, refund, deliver or clear the purchase receipt. Use the store's Resume or Cancel controls for a remaining receipt; an ambiguous delivery/refund still requires manual reconciliation. Do not acknowledge a request while another GM client may still be executing it.

The request handler uses Foundry's documented `updateActor` hook user ID, rather than an identity supplied in the request payload: https://foundryvtt.com/api/v14/functions/hookEvents.updateDocument.html
