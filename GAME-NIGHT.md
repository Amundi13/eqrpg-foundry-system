# Game-night readiness

The local game-night target is Foundry 14 Release 365 with EQRPG 0.1.14. The `norrath-test` world has been backed up, migrated to V14, and opened successfully. Character and NPC sheets, spellbook rendering, character attack/damage cards, and an NPC attack card passed live checks without browser errors. The 0.1.14 hotfix restores established campaign mana pools and lets the wizard safely update existing sheets.

## Before players join

1. Confirm the setup screen lists EQRPG 0.1.14, then launch the campaign once before players connect.
2. Open EQ Spells and search for **Rune II** and **Improved Invisibility**. Their presence confirms the 1,256-record release spell pack loaded.
3. Confirm the active GM can see migration and recovery notices. Do not dismiss a pending-operation warning without checking the named actor.
4. Spot-check one caster's mana maximum and open the character wizard to confirm its current base abilities are retained.
5. Leave the installed compendium databases unchanged while Foundry is running.

The V14-repaired pre-0.1.11 packs are preserved in `eqrpg-packs-v14-repaired-before-0.1.11`. The complete pre-V14 world backup is `norrath-test-before-game.zip`.

## Safe recovery during play

- If leveling saved the new level and HP but spell grants failed, press **Level Up** again. The pending advancement is recovered without another HP roll or another level.
- If a chat damage, healing, condition, or spell-effect action reports an interrupted receipt, stop using that old card. Check the actor and use the documented GM review command in `EFFECT-EXPIRATION.md`.
- A failed tracked temporary-HP grant is inactive and cannot subtract unrelated temporary HP. Resolve its pending record before applying another buff-HP effect.
- Rune and other buff hit-point effects are refused while another active buff-HP effect remains. Rune also blocks the lifetap spell line while active.

## Rules still handled manually tonight

Spell components, casting interruption and Channeling, spell resistance, complex target geometry, dispels, periodic damage/healing, summons, multiclass mana pools, natural daily/subdual healing, training prerequisites and benefits, and conditional durations not recognized by the sheet still require GM adjudication. The system reports review-required cases instead of guessing where implemented.

Live Foundry 14.365 world migration and core single-client sheet/roll checks have passed. Two-client concurrency, Forge installation, and the broader content audit are still pending. Do not treat the current archive as a published release.
