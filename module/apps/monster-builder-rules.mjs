export const MONSTER_BUILDER_SCHEMA = "eqrpg-monster-builder-v1";

export const SIZE_RULES = {
  fine: { label: "Fine", ac: 8, attack: 8, tokenSquares: 0.25, face: "1/2 ft. by 1/2 ft.", reach: 0 },
  diminutive: { label: "Diminutive", ac: 4, attack: 4, tokenSquares: 0.5, face: "1 ft. by 1 ft.", reach: 0 },
  tiny: { label: "Tiny", ac: 2, attack: 2, tokenSquares: 0.5, face: "2 1/2 ft. by 2 1/2 ft.", reach: 0 },
  small: { label: "Small", ac: 1, attack: 1, tokenSquares: 1, face: "5 ft. by 5 ft.", reach: 5 },
  medium: { label: "Medium", ac: 0, attack: 0, tokenSquares: 1, face: "5 ft. by 5 ft.", reach: 5 },
  large: { label: "Large", ac: -1, attack: -1, tokenSquares: 2, face: "10 ft. by 10 ft.", reach: 10 },
  huge: { label: "Huge", ac: -2, attack: -2, tokenSquares: 3, face: "15 ft. by 15 ft.", reach: 15 },
  gargantuan: { label: "Gargantuan", ac: -4, attack: -4, tokenSquares: 4, face: "20 ft. by 20 ft.", reach: 20 },
  colossal: { label: "Colossal", ac: -8, attack: -8, tokenSquares: 6, face: "30 ft. by 30 ft.", reach: 30 },
};

export const CREATURE_TYPE_RULES = {
  aberration: { label: "Aberration", hitDie: 8, bab: "threeQuarters", goodSaves: ["will"], skillFormula: "2 * INT + 2 per extra HD", featFormula: "1 per 4 extra HD", defaultVision: ["ultravision"] },
  animal: { label: "Animal", hitDie: 8, bab: "threeQuarters", goodSaves: ["fortitude", "reflex"], skillFormula: "10-15 fixed", featFormula: "none", defaultVision: ["low-light"] },
  beast: { label: "Beast", hitDie: 10, bab: "threeQuarters", goodSaves: ["fortitude", "reflex"], skillFormula: "2 * INT + 1 per extra HD", featFormula: "1 per 4 extra HD", defaultVision: ["low-light", "ultravision"] },
  construct: { label: "Construct", hitDie: 10, bab: "threeQuarters", goodSaves: [], skillFormula: "none", featFormula: "none", defaultVision: ["ultravision"], nullAbilities: ["con"], usuallyMindless: true, traits: ["constructTraits"] },
  dragon: { label: "Dragon", hitDie: 12, bab: "full", goodSaves: ["fortitude", "reflex", "will"], skillFormula: "(6 + INT mod) * HD", featFormula: "1 per 4 extra HD", defaultVision: ["low-light", "ultravision"], traits: ["dragonTraits"] },
  elemental: { label: "Elemental", hitDie: 8, bab: "threeQuarters", goodSaves: ["fortitude"], skillFormula: "2 * INT + 2 per extra HD", featFormula: "1 per 4 extra HD", defaultVision: ["ultravision"], traits: ["elementalTraits"] },
  fey: { label: "Fey", hitDie: 6, bab: "half", goodSaves: ["reflex", "will"], skillFormula: "3 * INT + 2 per extra HD", featFormula: "1 per 4 extra HD", defaultVision: ["low-light"] },
  giant: { label: "Giant", hitDie: 8, bab: "threeQuarters", goodSaves: ["fortitude"], skillFormula: "6 + INT mod + 1 per extra HD", featFormula: "1 per 4 extra HD", defaultVision: ["ultravision"] },
  humanoid: { label: "Humanoid", hitDie: 8, bab: "threeQuarters", goodSaves: ["fortitude"], skillFormula: "6 + INT mod + 1 per extra HD", featFormula: "1 per 4 extra HD" },
  magicalBeast: { label: "Magical Beast", hitDie: 10, bab: "full", goodSaves: ["fortitude", "reflex"], skillFormula: "2 * INT + 1 per extra HD", featFormula: "1 per 4 extra HD", defaultVision: ["low-light", "ultravision"] },
  monstrousHumanoid: { label: "Monstrous Humanoid", hitDie: 8, bab: "full", goodSaves: ["reflex", "will"], skillFormula: "2 * INT + 2 per extra HD", featFormula: "1 per 4 extra HD", defaultVision: ["ultravision"] },
  ooze: { label: "Ooze", hitDie: 10, bab: "threeQuarters", goodSaves: [], skillFormula: "none", featFormula: "blindsight", nullAbilities: ["int"], traits: ["oozeTraits", "blindsight"] },
  outsider: { label: "Outsider", hitDie: 8, bab: "full", goodSaves: ["fortitude", "reflex", "will"], skillFormula: "(8 + INT mod) * HD", featFormula: "1 per 4 total HD", defaultVision: ["ultravision"], traits: ["outsiderTraits"] },
  plant: { label: "Plant", hitDie: 8, bab: "threeQuarters", goodSaves: ["fortitude"], skillFormula: "none", featFormula: "none", traits: ["plantTraits"] },
  shapechanger: { label: "Shapechanger", hitDie: 8, bab: "threeQuarters", goodSaves: ["fortitude", "reflex", "will"], skillFormula: "2 * INT + 1 per extra HD", featFormula: "1 per 4 extra HD", defaultVision: ["ultravision"] },
  undead: { label: "Undead", hitDie: 12, bab: "half", goodSaves: ["will"], skillFormula: "3 * INT + 2 per extra HD", featFormula: "1 per 4 extra HD", nullAbilities: ["con"], defaultVision: ["ultravision"], traits: ["undeadTraits"] },
  vermin: { label: "Vermin", hitDie: 8, bab: "threeQuarters", goodSaves: ["fortitude"], skillFormula: "10-12 fixed", featFormula: "none", nullAbilities: ["int"], defaultVision: ["ultravision"], traits: ["verminTraits"] },
};

const TRAIT_PRESETS = {
  constructTraits: {
    name: "Construct Traits",
    immunities: ["mind-influencing effects", "poison", "sleep", "paralysis", "stunning", "disease", "death effects", "critical hits", "subdual damage", "ability damage", "ability drain", "energy drain"],
    quality: "Construct traits",
  },
  elementalTraits: {
    name: "Elemental Traits",
    immunities: ["poison", "sleep", "paralysis", "stunning", "critical hits", "flanking"],
    quality: "Elemental traits",
  },
  oozeTraits: {
    name: "Ooze Traits",
    immunities: ["mind-influencing effects", "poison", "sleep", "paralysis", "stunning", "polymorphing", "critical hits", "flanking"],
    quality: "Ooze traits",
  },
  outsiderTraits: { name: "Outsider Traits", immunities: [], quality: "Outsider traits" },
  plantTraits: {
    name: "Plant Traits",
    immunities: ["mind-influencing effects", "poison", "sleep", "paralysis", "stunning", "polymorphing", "critical hits"],
    quality: "Plant traits",
  },
  undeadTraits: {
    name: "Undead Traits",
    immunities: ["mind-influencing effects", "poison", "sleep", "paralysis", "stunning", "disease", "death effects", "critical hits", "subdual damage", "ability damage", "ability drain", "energy drain", "Fortitude effects unless they affect objects"],
    quality: "Undead traits",
  },
  verminTraits: {
    name: "Vermin Traits",
    immunities: ["mind-influencing effects"],
    quality: "Vermin traits",
  },
  blindsight: { name: "Blindsight", immunities: [], quality: "Blindsight" },
};

export function createDefaultMonster() {
  return {
    schemaVersion: MONSTER_BUILDER_SCHEMA,
    name: "Custom Monster",
    source: "Custom",
    description: "",
    img: "icons/svg/mystery-man.svg",
    identity: { size: "medium", type: "humanoid", subtypes: "", alignment: "", faction: "" },
    abilities: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 },
    hitDice: { count: 1, die: 8, bonus: 0, averageHp: 4, overrideAverage: false, manualHp: 4 },
    combat: {
      initiativeMisc: 0,
      attackMisc: 0,
      babManualOverride: false,
      armorClass: { natural: 0, armor: 0, shield: 0, deflection: 0, misc: 0, manualOverride: false, total: 10 },
      baseAttackBonus: 0,
      speed: { walk: 30, other: "" },
      face: "5 ft. by 5 ft.",
      reach: 5,
      saves: {
        fortitude: { misc: 0, manualOverride: false, total: 0 },
        reflex: { misc: 0, manualOverride: false, total: 0 },
        will: { misc: 0, manualOverride: false, total: 0 },
      },
      attacks: [
        { name: "Slam", category: "natural", mode: "melee", primary: true, attackBonus: 0, damageFormula: "1d4", damageType: "bludgeoning", notes: "" },
      ],
    },
    traits: { vision: [], immunities: [], resistances: [], vulnerabilities: [], specialAbilities: "", specialQualities: "" },
    skills: "",
    feats: "",
    advancement: {
      challengeRating: "",
      climateTerrain: "",
      organization: "",
      treasure: "None",
      advancementRange: "",
      notes: "",
    },
  };
}

export function abilityMod(score) {
  if (score === null || score === "" || score == null) return 0;
  return Math.floor(((Number(score) || 10) - 10) / 2);
}

export function calcBab(hd, progression) {
  const count = Math.max(1, Number(hd) || 1);
  if (progression === "full") return count;
  if (progression === "half") return Math.floor(count * 0.5);
  return Math.floor(count * 0.75);
}

export function goodSave(hd) {
  return 2 + Math.floor((Number(hd) || 1) / 2);
}

export function poorSave(hd) {
  return Math.floor((Number(hd) || 1) / 3);
}

export function deriveMonster(monster) {
  const typeRule = CREATURE_TYPE_RULES[monster.identity.type] ?? CREATURE_TYPE_RULES.humanoid;
  const sizeRule = SIZE_RULES[monster.identity.size] ?? SIZE_RULES.medium;
  const hd = Math.max(1, Math.floor(Number(monster.hitDice.count) || 1));
  const die = Math.max(1, Math.floor(Number(monster.hitDice.die) || typeRule.hitDie || 8));
  const conMod = typeRule.nullAbilities?.includes("con") ? 0 : abilityMod(monster.abilities.con);
  const dexMod = abilityMod(monster.abilities.dex);
  const wisMod = abilityMod(monster.abilities.wis);
  const strMod = abilityMod(monster.abilities.str);
  const intMod = abilityMod(monster.abilities.int);
  const averageHp = Math.max(1, Math.floor(hd * ((die + 1) / 2) + hd * conMod + (Number(monster.hitDice.bonus) || 0)));
  const hp = monster.hitDice.overrideAverage ? Math.max(1, Number(monster.hitDice.manualHp) || averageHp) : averageHp;
  const bab = calcBab(hd, typeRule.bab);
  const goodSaves = new Set(typeRule.goodSaves ?? []);
  const saveBase = {
    fortitude: goodSaves.has("fortitude") ? goodSave(hd) : poorSave(hd),
    reflex: goodSaves.has("reflex") ? goodSave(hd) : poorSave(hd),
    will: goodSaves.has("will") ? goodSave(hd) : poorSave(hd),
  };
  const saves = {
    fortitude: saveBase.fortitude + conMod + (Number(monster.combat.saves.fortitude.misc) || 0),
    reflex: saveBase.reflex + dexMod + (Number(monster.combat.saves.reflex.misc) || 0),
    will: saveBase.will + wisMod + (Number(monster.combat.saves.will.misc) || 0),
  };
  const ac = 10 + sizeRule.ac + dexMod
    + (Number(monster.combat.armorClass.natural) || 0)
    + (Number(monster.combat.armorClass.armor) || 0)
    + (Number(monster.combat.armorClass.shield) || 0)
    + (Number(monster.combat.armorClass.deflection) || 0)
    + (Number(monster.combat.armorClass.misc) || 0);
  const initiative = dexMod + (Number(monster.combat.initiativeMisc) || 0);
  const skillBudget = estimateSkillBudget(typeRule, hd, monster.abilities.int, intMod);
  const featSlots = estimateFeatSlots(typeRule, hd);
  const attacks = (monster.combat.attacks ?? []).map((attack) => {
    const secondaryPenalty = hasFeat(monster.feats, "Multiattack") ? -2 : -5;
    const suggested = bab + strMod + sizeRule.attack + (Number(monster.combat.attackMisc) || 0) + (attack.primary ? 0 : secondaryPenalty);
    return { ...attack, suggestedAttackBonus: suggested };
  });

  return {
    typeRule,
    sizeRule,
    hd,
    die,
    conMod,
    dexMod,
    strMod,
    wisMod,
    intMod,
    averageHp,
    hp,
    bab,
    initiative,
    ac,
    saveBase,
    saves,
    skillBudget,
    featSlots,
    attacks,
    warnings: validateMonster(monster, { typeRule, hd, die, averageHp, hp, bab, ac, saves, attacks, skillBudget, featSlots }),
  };
}

function hasFeat(featsText, featName) {
  return String(featsText ?? "").toLowerCase().includes(featName.toLowerCase());
}

function estimateSkillBudget(typeRule, hd, intScore, intMod) {
  if (typeRule.skillFormula === "none") return 0;
  if (intScore === null) return 0;
  if (typeRule.skillFormula?.includes("(8 + INT mod)")) return Math.max(1, 8 + intMod) * hd;
  if (typeRule.skillFormula?.includes("(6 + INT mod)")) return Math.max(1, 6 + intMod) * hd;
  if (typeRule.skillFormula?.startsWith("3 * INT")) return Math.max(0, (3 * (Number(intScore) || 0)) + (2 * Math.max(0, hd - 1)));
  if (typeRule.skillFormula?.startsWith("2 * INT")) return Math.max(0, (2 * (Number(intScore) || 0)) + (Math.max(0, hd - 1)));
  if (typeRule.skillFormula?.startsWith("6 + INT")) return Math.max(1, 6 + intMod) + Math.max(0, hd - 1);
  if (typeRule.skillFormula?.includes("10-15")) return "10-15 fixed";
  if (typeRule.skillFormula?.includes("10-12")) return "10-12 fixed";
  return "";
}

function estimateFeatSlots(typeRule, hd) {
  if (typeRule.featFormula === "none") return 0;
  if (typeRule.featFormula === "blindsight") return "blindsight";
  if (typeRule.featFormula?.includes("total")) return Math.max(1, Math.floor(hd / 4));
  return Math.max(0, Math.floor(Math.max(0, hd - 1) / 4));
}

function listCount(text) {
  return String(text ?? "").split(/,|\n/).map((entry) => entry.trim()).filter(Boolean).length;
}

function validateMonster(monster, derived) {
  const warnings = [];
  if (!String(monster.name ?? "").trim()) warnings.push({ severity: "error", text: "Name is required." });
  if (!monster.identity.size) warnings.push({ severity: "error", text: "Size is required." });
  if (!monster.identity.type) warnings.push({ severity: "error", text: "Creature type is required." });
  if (derived.hd < 1) warnings.push({ severity: "error", text: "Hit Dice count must be at least 1." });
  if (derived.die < 1) warnings.push({ severity: "error", text: "Hit Die must be at least 1." });
  for (const ability of ["str", "dex", "wis", "cha"]) {
    if (!Number.isFinite(Number(monster.abilities[ability]))) warnings.push({ severity: "error", text: `${ability.toUpperCase()} must be a number.` });
  }
  for (const ability of derived.typeRule.nullAbilities ?? []) {
    if (monster.abilities[ability] !== null) warnings.push({ severity: "warning", text: `${derived.typeRule.label} creatures normally have no ${ability.toUpperCase()} score.` });
  }
  if (!String(monster.advancement.challengeRating ?? "").trim()) warnings.push({ severity: "warning", text: "Challenge Rating is blank. Set it manually from comparable monsters." });
  for (const attack of derived.attacks) {
    if (!/^(\d+d\d+|\d+)([+-](\d+d\d+|\d+))*$/i.test(String(attack.damageFormula ?? "").trim())) {
      warnings.push({ severity: "error", text: `${attack.name || "Attack"} has an invalid damage formula.` });
    }
    if (Number(attack.attackBonus) !== Number(attack.suggestedAttackBonus)) {
      warnings.push({ severity: "warning", text: `${attack.name || "Attack"} attack bonus differs from suggested value ${signed(attack.suggestedAttackBonus)}.` });
    }
  }
  const assignedSkills = listCount(monster.skills);
  if (Number.isFinite(Number(derived.skillBudget)) && assignedSkills > Number(derived.skillBudget)) {
    warnings.push({ severity: "warning", text: `Listed skills (${assignedSkills}) exceed suggested budget (${derived.skillBudget}).` });
  }
  const assignedFeats = listCount(monster.feats);
  if (Number.isFinite(Number(derived.featSlots)) && assignedFeats > Number(derived.featSlots)) {
    warnings.push({ severity: "warning", text: `Listed feats (${assignedFeats}) exceed suggested slots (${derived.featSlots}).` });
  }
  const cr = parseChallengeRating(monster.advancement.challengeRating);
  const text = `${monster.traits.specialAbilities} ${monster.traits.specialQualities}`.toLowerCase();
  if (cr > 0 && cr <= 3 && /\bfly|flight|paraly|stun|charm|mesmer|drain|poison|disease|regeneration|fast healing\b/.test(text)) {
    warnings.push({ severity: "warning", text: "Low-CR monster has a risky feature. Review CR by comparison." });
  }
  return warnings;
}

export function signed(value) {
  const number = Number(value) || 0;
  return number >= 0 ? `+${number}` : String(number);
}

function parseChallengeRating(value) {
  const text = String(value ?? "").trim();
  if (text.includes("/")) {
    const [a, b] = text.split("/").map(Number);
    return b ? a / b : 0;
  }
  return Number(text) || 0;
}

function splitList(value) {
  return String(value ?? "").split(/,|\n/).map((entry) => entry.trim()).filter(Boolean);
}

export function applyTypeDefaults(monster) {
  const next = foundry.utils.deepClone(monster);
  const rule = CREATURE_TYPE_RULES[next.identity.type] ?? CREATURE_TYPE_RULES.humanoid;
  next.hitDice.die = rule.hitDie;
  for (const ability of rule.nullAbilities ?? []) next.abilities[ability] = null;
  if (!rule.nullAbilities?.includes("con") && next.abilities.con === null) next.abilities.con = 10;
  if (!rule.nullAbilities?.includes("int") && next.abilities.int === null) next.abilities.int = 10;
  next.traits.vision = [...new Set([...(next.traits.vision ?? []), ...(rule.defaultVision ?? [])])];
  for (const traitId of rule.traits ?? []) {
    const preset = TRAIT_PRESETS[traitId];
    if (!preset) continue;
    next.traits.immunities = [...new Set([...(next.traits.immunities ?? []), ...(preset.immunities ?? [])])];
    if (preset.quality && !String(next.traits.specialQualities ?? "").toLowerCase().includes(preset.quality.toLowerCase())) {
      next.traits.specialQualities = [next.traits.specialQualities, preset.quality].filter(Boolean).join(", ");
    }
  }
  const sizeRule = SIZE_RULES[next.identity.size] ?? SIZE_RULES.medium;
  next.combat.face = sizeRule.face;
  next.combat.reach = sizeRule.reach;
  return next;
}

export function normalizeMonster(input) {
  const base = createDefaultMonster();
  const source = input?.schemaVersion ? input : { ...input, schemaVersion: MONSTER_BUILDER_SCHEMA };
  const merged = foundry.utils.mergeObject(base, source ?? {}, { inplace: false, insertKeys: true, insertValues: true });
  if (!Array.isArray(merged.combat.attacks)) merged.combat.attacks = [];
  if (!Array.isArray(merged.traits.vision)) merged.traits.vision = splitList(merged.traits.vision);
  if (!Array.isArray(merged.traits.immunities)) merged.traits.immunities = splitList(merged.traits.immunities);
  if (!Array.isArray(merged.traits.resistances)) merged.traits.resistances = splitList(merged.traits.resistances);
  if (!Array.isArray(merged.traits.vulnerabilities)) merged.traits.vulnerabilities = splitList(merged.traits.vulnerabilities);
  return merged;
}

export function buildNPCActorData(monster) {
  const normalized = normalizeMonster(monster);
  const derived = deriveMonster(normalized);
  const sizeLabel = derived.sizeRule.label;
  const typeLabel = derived.typeRule.label;
  const subtype = normalized.identity.subtypes ? ` (${normalized.identity.subtypes})` : "";
  const hitDiceText = `${derived.hd}d${derived.die}${signed(Number(normalized.hitDice.bonus) || 0).replace("+0", "")} (${derived.hp} hp)`;
  const attackText = derived.attacks
    .map((attack) => `${attack.name} ${signed(Number(attack.attackBonus) || 0)} ${attack.mode || "melee"}`)
    .join(", ");
  const damageText = derived.attacks
    .map((attack) => `${attack.name} ${attack.damageFormula}${attack.notes ? ` ${attack.notes}` : ""}`)
    .join(", ");
  const savesText = `Fort ${signed(derived.saves.fortitude)}, Ref ${signed(derived.saves.reflex)}, Will ${signed(derived.saves.will)}`;
  const abilitiesText = Object.entries(normalized.abilities)
    .map(([key, value]) => `${key.toUpperCase()} ${value === null ? "-" : value}`)
    .join(", ");
  const specialQualities = [
    normalized.traits.specialQualities,
    normalized.traits.vision?.length ? `Vision: ${normalized.traits.vision.join(", ")}` : "",
    normalized.traits.immunities?.length ? `Immunities: ${normalized.traits.immunities.join(", ")}` : "",
    normalized.traits.resistances?.length ? `Resistances: ${normalized.traits.resistances.join(", ")}` : "",
    normalized.traits.vulnerabilities?.length ? `Vulnerabilities: ${normalized.traits.vulnerabilities.join(", ")}` : "",
  ].filter(Boolean).join(", ");
  const biography = [
    normalized.description ? `<h2>Description</h2><p>${escapeHtml(normalized.description).replace(/\n/g, "</p><p>")}</p>` : "",
    normalized.advancement.notes ? `<h2>GM Notes</h2><p>${escapeHtml(normalized.advancement.notes).replace(/\n/g, "</p><p>")}</p>` : "",
  ].join("");
  const crNumber = Math.max(0, Math.floor(parseChallengeRating(normalized.advancement.challengeRating)));
  const tokenSquares = derived.sizeRule.tokenSquares;

  return {
    name: normalized.name || "Custom Monster",
    type: "npc",
    img: normalized.img || "icons/svg/mystery-man.svg",
    system: {
      abilities: {
        str: { value: npcAbilityValue(normalized.abilities.str) },
        dex: { value: npcAbilityValue(normalized.abilities.dex) },
        con: { value: npcAbilityValue(normalized.abilities.con) },
        int: { value: npcAbilityValue(normalized.abilities.int) },
        wis: { value: npcAbilityValue(normalized.abilities.wis) },
        cha: { value: npcAbilityValue(normalized.abilities.cha) },
      },
      details: {
        cr: crNumber,
        size: sizeLabel,
        type: `${typeLabel}${subtype}`,
        subtypes: normalized.identity.subtypes ?? "",
        faction: normalized.identity.faction ?? "",
        alignment: normalized.identity.alignment ?? "",
        speed: Number(normalized.combat.speed.walk) || 30,
      },
      resources: {
        hp: { value: derived.hp, max: derived.hp, temp: 0, bonus: Number(normalized.hitDice.bonus) || 0 },
        mana: { value: 0, max: 0 },
      },
      combat: {
        ac: { value: normalized.combat.armorClass.manualOverride ? Number(normalized.combat.armorClass.total) || derived.ac : derived.ac },
        bab: normalized.combat.babManualOverride ? Number(normalized.combat.baseAttackBonus) || 0 : derived.bab,
        saves: {
          fortitude: { value: normalized.combat.saves.fortitude.manualOverride ? Number(normalized.combat.saves.fortitude.total) || derived.saves.fortitude : derived.saves.fortitude },
          reflex: { value: normalized.combat.saves.reflex.manualOverride ? Number(normalized.combat.saves.reflex.total) || derived.saves.reflex : derived.saves.reflex },
          will: { value: normalized.combat.saves.will.manualOverride ? Number(normalized.combat.saves.will.total) || derived.saves.will : derived.saves.will },
        },
        initiative: { value: derived.initiative },
        attackMisc: Number(normalized.combat.attackMisc) || 0,
        magicSaveBonus: 0,
      },
      statblock: {
        hitDice: hitDiceText,
        speed: [normalized.combat.speed.walk ? `${normalized.combat.speed.walk} ft.` : "", normalized.combat.speed.other].filter(Boolean).join(", "),
        ac: `${normalized.combat.armorClass.manualOverride ? normalized.combat.armorClass.total : derived.ac} (${signed(derived.sizeRule.ac)} size, ${signed(derived.dexMod)} Dex, ${signed(Number(normalized.combat.armorClass.natural) || 0)} natural)`,
        attacks: attackText,
        damage: damageText,
        faceReach: `${normalized.combat.face}/${normalized.combat.reach} ft.`,
        specialAttacks: normalized.traits.specialAbilities ?? "",
        specialQualities,
        saves: savesText,
        abilities: abilitiesText,
        skills: normalized.skills ?? "",
        feats: normalized.feats ?? "",
        climateTerrain: normalized.advancement.climateTerrain ?? "",
        organization: normalized.advancement.organization ?? "",
        treasure: normalized.advancement.treasure ?? "",
        advancement: normalized.advancement.advancementRange ?? "",
        challengeRating: String(normalized.advancement.challengeRating ?? ""),
        source: normalized.source ?? "",
        rawText: buildRawText(normalized, { hitDiceText, savesText, abilitiesText, specialQualities }),
      },
      biography,
    },
    prototypeToken: {
      name: normalized.name || "Custom Monster",
      actorLink: false,
      disposition: -1,
      width: tokenSquares,
      height: tokenSquares,
      texture: { src: normalized.img || "icons/svg/mystery-man.svg" },
    },
    flags: {
      eqrpg: {
        monsterBuilder: normalized,
      },
    },
  };
}

function buildRawText(monster, derivedText) {
  return [
    `${monster.name}`,
    `${monster.identity.size} ${monster.identity.type}`,
    `Hit Dice: ${derivedText.hitDiceText}`,
    `Special Attacks: ${monster.traits.specialAbilities ?? ""}`,
    `Special Qualities: ${derivedText.specialQualities}`,
    derivedText.savesText,
    derivedText.abilitiesText,
    `Skills: ${monster.skills ?? ""}`,
    `Feats: ${monster.feats ?? ""}`,
    "",
    monster.description ?? "",
  ].join("\n");
}

function npcAbilityValue(value) {
  return value === null ? 10 : Math.max(1, Math.floor(Number(value) || 10));
}

function escapeHtml(text) {
  return String(text ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[char]));
}
