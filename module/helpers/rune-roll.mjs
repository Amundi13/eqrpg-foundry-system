// PHB printed p. 310 (PDF p. 313). Roll only when creating a new effect.
export const RUNE_FORMULAS = Object.freeze({
  'rune-i': '6d6', 'rune-ii': '7d10', 'rune-iii': '(6d10)*2',
  'rune-iv': '(8d10+2)*2', 'rune-v': '(4d6+1)*10',
});
export async function rollRuneHP(effectKey, RollClass = globalThis.Roll) {
  const formula = RUNE_FORMULAS[effectKey];
  if (!formula) return null;
  const roll = await new RollClass(formula).evaluate();
  if (!Number.isSafeInteger(roll.total) || roll.total <= 0) {
    throw new Error('Rune HP roll was invalid; no effect was created.');
  }
  return {formula, total: roll.total};
}
