// V14 exposes expiry/suppression separately from the manual disabled flag.
export function isSpellPoolDepleted(effect) {
  return effect.flags?.eqrpg?.endsOnTempHPDepleted === true && effect.flags.eqrpg.tempHPRemaining === 0;
}
export function hasConfirmedSpellTempHPGrant(actor, effect) {
  const flags=effect?.flags?.eqrpg??{};
  if(flags.tempHPGrantTracked!==true) return true;
  const receipt=actor?.flags?.eqrpg?.effectHPGrants?.[effect.id];
  return receipt?.state==='complete' && receipt.amount===flags.tempHPGrant;
}
export function isEffectActive(effect) {
  return !effect.disabled && !effect.isSuppressed && !effect.duration?.expired && effect.active !== false
    && !isSpellPoolDepleted(effect) && hasConfirmedSpellTempHPGrant(effect.parent,effect);
}

const signed = (value) => `${value >= 0 ? "+" : ""}${value}`;

export function prepareSpellEffects(actor) {
  return [...(actor?.effects ?? [])]
    .filter((effect) => effect.flags?.eqrpg?.spellEffect)
    .map((effect) => {
      const flags = effect.flags?.eqrpg ?? {};
      const bonuses = flags.bonuses ?? {};
      const details = [];
      if (flags.tempHPGrant) details.push(`Temporary HP ${flags.tempHPRemaining ?? flags.tempHPGrant}/${flags.tempHPGrant}`);
      if (flags.tempHPRoll) details.push(`Rolled ${flags.tempHPRoll.formula}: ${flags.tempHPRoll.total}`);
      if (isSpellPoolDepleted(effect)) details.push('Ended: temporary HP depleted');
      if (flags.durationNeedsReview) details.push("GM duration review: " + (flags.durationText || "unspecified"));
      const bonusLabels = {
        str: "STR",
        dex: "DEX",
        con: "CON",
        int: "INT",
        wis: "WIS",
        cha: "CHA",
        fort: "Fort",
        reflex: "Ref",
        will: "Will",
        attack: "Attack",
        initiative: "Initiative",
        ac: "AC",
        hpBonus: "HP",
        magicSave: "Magic saves",
      };

      for (const [key, label] of Object.entries(bonusLabels)) {
        const value = Number(bonuses[key] ?? 0) || 0;
        if (value) details.push(`${label} ${signed(value)}`);
      }
      if (flags.hasteRank) details.push(`Haste ${flags.hasteRank}`);
      if (flags.slowRank) details.push(`Slow ${flags.slowRank}`);
      if (flags.speedPct) details.push(`Speed ${signed(flags.speedPct)}%`);
      if (flags.manaPerRound) details.push(`Mana ${signed(flags.manaPerRound)}/round`);

      return {
        id: effect.id,
        name: effect.name,
        img: effect.img ?? effect.icon ?? "icons/svg/aura.svg",
        description: effect.description ?? "",
        active: isEffectActive(effect),
        disabled: !!effect.disabled,
        details: details.join("; "),
        duration: effect.duration?.label ?? "",
      };
    })
    .sort((left, right) => left.name.localeCompare(right.name));
}
