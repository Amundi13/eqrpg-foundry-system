const signed = (value) => `${value >= 0 ? "+" : ""}${value}`;

export function prepareSpellEffects(actor) {
  return [...(actor?.effects ?? [])]
    .filter((effect) => effect.flags?.eqrpg?.spellEffect)
    .map((effect) => {
      const flags = effect.flags?.eqrpg ?? {};
      const bonuses = flags.bonuses ?? {};
      const details = [];
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
        active: !effect.disabled,
        disabled: !!effect.disabled,
        details: details.join("; "),
        duration: effect.duration?.label ?? "",
      };
    })
    .sort((left, right) => left.name.localeCompare(right.name));
}
