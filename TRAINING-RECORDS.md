# Training records

Source: supplied EverQuest Player’s Handbook, printed page 50 / PDF page 53, Table 3-2 and Training Points. Costs verified visually: ability +1 costs 12; class-skill rank +1 costs 3; cross-class rank +1 costs 5; resistance +1 costs 1; trained feat costs 7. Characters receive five points at first level and each subsequent level.

## Workflow

1. An owning GM opens Records and sets a verified unspent opening balance at the current character level, with evidence notes. A genuinely new level-one character normally starts with five points; existing characters require their actual spending history to establish the remaining balance. The system does not assume that all past points remain unspent.
2. Later levels add five points per level above the reviewed opening level. Recorded costs reduce the available balance. Each purchase records its level, benefit, cost and mentor/review notes.
3. Before recording, the GM checks mentor access, prerequisites, caps and historical purchases. After successful recording, apply the reviewed benefit manually to the character. Recording itself does not change ability scores, resistance, skill ranks or embedded feats.

The purchase and manual benefit update are not one transaction. If benefit application is interrupted, inspect the ledger and character before resuming; do not record the expenditure a second time. There is currently no correction/refund UI; preserve the evidence and reconcile mistakes with the GM. Only owning GMs can initialize or write through this workflow; owners can inspect their records.

## Limits and unresolved rules

The table limits each ability to six training increases, each resistance to character level, and skills to their normal rank caps. These are review requirements, not automated enforcement. Historical increases cannot be inferred safely from current statistics.

The trained-feat prose gives one feat at level 3, two at 5, three at 7, and four at 9. The table says one per odd-numbered level attained, which appears to include level 1. This discrepancy is unresolved and is not silently encoded as an automated cap.

The opening balance is immutable through the UI. Level decreases below the opening level block recording. Earned points follow current character level; manual level changes require GM reconciliation. Multiclass and training-history migrations remain pending. Guards cover overlapping writes in one client, not concurrent GMs in separate clients. Live Foundry schema/form/permission and multi-client tests remain required.
