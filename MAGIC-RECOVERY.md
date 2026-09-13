# Magic, recovery and saved-resource changes

The following PHB pages were visually checked against the local book images. Printed and PDF page numbers are distinct.

| Rule | Printed / PDF | Implemented behavior |
|---|---|---|
| Mana pools | 170 / 173 | Twice the controlling ability bonus times caster level for arcane, divine and song pools. Hybrid class-level offsets remain in effect. |
| Mana recovery | 171 / 174 | Controlling ability bonus plus Meditation ranks per hour of rest, including bards. No level-based bonus or tenfold short-rest multiplier. |
| Recast | 174 / 177 | A one-round recast cast in round 1 becomes available in round 3. Preparation completed in round 2 with a one-round recast becomes available in round 3. Instant recast remains instant. |
| Fast recovery | 32 / 35 | Iksar and trolls regain their level in HP per hour of qualifying rest/light activity. |
| Healing/death | 370 / 373 | Ordinary healing cannot revive a dead actor. Ordinary natural healing is a daily calculation, not a full HP refill after eight hours. |

## Existing actors

The corrected derived mana maximum may be lower than a legacy actor's stored current mana. Stored mana is not silently erased. The character sheet identifies excess mana and casting stops until the GM reconciles the pool. Record the old value and any campaign-specific adjustment before editing it. This is a review requirement, not an automatic world migration.

Existing cooldowns are not retroactively increased because the original cast/preparation round cannot be reconstructed. New casts and preparations record their combat/round origin. Once-per-round maintenance ignores duplicate or rewound rounds and ignores expired/suppressed mana effects. Its receipt, cooldown changes and mana changes share one actor update. Rapid round updates are queued locally. This does not provide a server transaction across multiple clients.

Malformed spell-slot arrays, extra entries and invalid cooldown values block spell-slot writes and show a sheet diagnostic. They are not replaced with empty slots. The GM must inspect and repair the saved data; the system does not guess which preparations or cooldowns were intended.

## Completed rest periods

The 1h and 8h buttons apply completed rest periods declared by the user; they do not advance world time. They restore the corresponding hourly mana and fast-recovery amounts, capped by current maxima, and reduce cooldowns by the elapsed six-second rounds. Ordinary HP is not automatically filled. A character currently participating in combat cannot use these rest actions.

Natural daily healing remains a manual workflow: PHB printed 370 specifies level HP per day, doubled with complete bed rest or skilled care and tripled when both apply. Account for qualifying time, treatment, interruptions, injuries that cannot heal naturally and subdual damage separately. These buttons do not establish that those conditions were met and do not reset daily class abilities or conditions.

A rest update includes `flags.eqrpg.lastRest`, the declared hours, and before/after HP and mana. Failed confirmation stops the action. A failed chat announcement after confirmed recovery warns that rest was already applied. Do not repeat an uncertain rest without reviewing resources and the receipt. Same-client duplicate clicks are blocked; separate sequential clicks declare separate completed rest periods.

The old unrestricted cooldown-reset button is now a labeled GM override. Normal recovery uses combat rounds or completed rest; overriding cooldowns is a manual adjudication.

## Remaining magic acceptance work

Preparation checks, preparation/casting action time, interruption/Channeling, free-action limits, spell resistance, components, target geometry, stacking/refresh, normal elapsed-time recovery outside combat/rest, multiclass pools, natural daily/subdual healing and broader condition rules still require implementation or explicit manual adjudication. Local examples are not live V14 or Forge acceptance.
