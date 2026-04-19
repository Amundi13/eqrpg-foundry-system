export const EQRPG = {};

// ---------------------------------------------------------------------------
// Abilities
// ---------------------------------------------------------------------------
EQRPG.abilities = {
  str: "EQRPG.AbilityStr",
  dex: "EQRPG.AbilityDex",
  con: "EQRPG.AbilityCon",
  int: "EQRPG.AbilityInt",
  wis: "EQRPG.AbilityWis",
  cha: "EQRPG.AbilityCha",
};

EQRPG.abilityAbbreviations = {
  str: "EQRPG.AbilityStrAbbr",
  dex: "EQRPG.AbilityDexAbbr",
  con: "EQRPG.AbilityConAbbr",
  int: "EQRPG.AbilityIntAbbr",
  wis: "EQRPG.AbilityWisAbbr",
  cha: "EQRPG.AbilityChaAbbr",
};

// ---------------------------------------------------------------------------
// Races
// ---------------------------------------------------------------------------
EQRPG.races = {
  barbarian: {
    label: "EQRPG.RaceBarbarian",
    adjustments: { str: 4, dex: 0, con: 2, int: -2, wis: -2, cha: -2 },
    size: "medium",
    speed: 30,
    abilities: ["slam", "coldResistance"],
    allowedClasses: [
      "beastlord", "rogue", "shaman", "warrior",
    ],
  },
  darkelf: {
    label: "EQRPG.RaceDarkElf",
    adjustments: { str: -2, dex: 2, con: -2, int: 4, wis: 0, cha: -2 },
    size: "medium",
    speed: 30,
    abilities: ["ultravision", "hide"],
    allowedClasses: [
      "cleric", "enchanter", "magician", "necromancer", "rogue",
      "shadowknight", "warrior", "wizard",
    ],
  },
  dwarf: {
    label: "EQRPG.RaceDwarf",
    adjustments: { str: 2, dex: 0, con: 2, int: -2, wis: 2, cha: -4 },
    size: "small",
    speed: 20,
    abilities: ["infravision"],
    allowedClasses: [
      "bard", "cleric", "paladin", "rogue", "warrior",
    ],
  },
  erudite: {
    label: "EQRPG.RaceErudite",
    adjustments: { str: -4, dex: -2, con: 0, int: 6, wis: 2, cha: -2 },
    size: "medium",
    speed: 30,
    abilities: ["ultravision", "spellShielding"],
    allowedClasses: [
      "cleric", "enchanter", "magician", "necromancer", "paladin",
      "shadowknight", "wizard",
    ],
  },
  gnome: {
    label: "EQRPG.RaceGnome",
    adjustments: { str: -4, dex: 4, con: -2, int: 4, wis: -2, cha: 0 },
    size: "small",
    speed: 20,
    abilities: ["infravision", "tinkering"],
    allowedClasses: [
      "cleric", "enchanter", "magician", "necromancer", "paladin",
      "rogue", "shadowknight", "warrior", "wizard",
    ],
  },
  halfelf: {
    label: "EQRPG.RaceHalfElf",
    adjustments: { str: 0, dex: 2, con: -2, int: 0, wis: -2, cha: 2 },
    size: "medium",
    speed: 30,
    abilities: ["infravision"],
    allowedClasses: [
      "bard", "druid", "paladin", "ranger", "rogue", "warrior",
    ],
  },
  halfling: {
    label: "EQRPG.RaceHalfling",
    adjustments: { str: -2, dex: 4, con: 0, int: -2, wis: 2, cha: -2 },
    size: "small",
    speed: 20,
    abilities: ["infravision", "sneak", "halflingFortitude"],
    allowedClasses: [
      "bard", "cleric", "druid", "paladin", "ranger", "rogue", "warrior",
    ],
  },
  highelf: {
    label: "EQRPG.RaceHighElf",
    adjustments: { str: -4, dex: 0, con: -2, int: 4, wis: 4, cha: 2 },
    size: "medium",
    speed: 30,
    abilities: ["infravision"],
    allowedClasses: [
      "bard", "cleric", "enchanter", "magician", "paladin", "rogue", "wizard",
    ],
  },
  human: {
    label: "EQRPG.RaceHuman",
    adjustments: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
    size: "medium",
    speed: 30,
    abilities: ["bonusFeat"],
    allowedClasses: [
      "bard", "cleric", "druid", "enchanter", "magician", "monk",
      "necromancer", "paladin", "ranger", "rogue", "shadowknight",
      "shaman", "warrior", "wizard",
    ],
  },
  iksar: {
    label: "EQRPG.RaceIksar",
    adjustments: { str: 4, dex: 2, con: 0, int: 0, wis: 2, cha: -4 },
    size: "medium",
    speed: 30,
    abilities: ["ultravision", "naturalAC", "foraging", "swimming", "regeneration"],
    allowedClasses: [
      "beastlord", "monk", "necromancer", "shadowknight", "shaman",
      "warrior",
    ],
  },
  ogre: {
    label: "EQRPG.RaceOgre",
    adjustments: { str: 6, dex: -2, con: 4, int: -4, wis: -2, cha: -4 },
    size: "large",
    speed: 30,
    abilities: ["slam", "stun_immunity"],
    allowedClasses: [
      "beastlord", "shadowknight", "shaman", "warrior",
    ],
  },
  troll: {
    label: "EQRPG.RaceTroll",
    adjustments: { str: 4, dex: 0, con: 6, int: -4, wis: -2, cha: -6 },
    size: "large",
    speed: 30,
    abilities: ["infravision", "slam", "regeneration"],
    allowedClasses: [
      "beastlord", "shadowknight", "shaman", "warrior",
    ],
  },
  vahshir: {
    label: "EQRPG.RaceVahShir",
    adjustments: { str: 2, dex: 0, con: 0, int: -2, wis: 0, cha: 0 },
    size: "medium",
    speed: 30,
    abilities: ["infravision", "safefall", "sneak"],
    allowedClasses: [
      "bard", "beastlord", "monk", "rogue", "shaman", "warrior",
    ],
  },
  woodelf: {
    label: "EQRPG.RaceWoodElf",
    adjustments: { str: -2, dex: 4, con: -2, int: 0, wis: 2, cha: 0 },
    size: "medium",
    speed: 30,
    abilities: ["infravision", "foraging", "hide"],
    allowedClasses: [
      "bard", "druid", "ranger", "rogue", "warrior",
    ],
  },
};

// ---------------------------------------------------------------------------
// Classes
// ---------------------------------------------------------------------------
EQRPG.classes = {
  bard: {
    label: "EQRPG.ClassBard",
    hitDie: 8,
    babProgression: "medium",
    saves: { fortitude: "poor", reflex: "good", will: "medium" },
    spellcastingAbility: "cha",
    armorProficiency: ["light", "medium", "heavy", "shields"],
    skillPoints: 8,
  },
  beastlord: {
    label: "EQRPG.ClassBeastlord",
    hitDie: 8,
    babProgression: "full",
    saves: { fortitude: "good", reflex: "good", will: "poor" },
    spellcastingAbility: "wis",
    armorProficiency: ["light"],
    skillPoints: 4,
  },
  cleric: {
    label: "EQRPG.ClassCleric",
    hitDie: 8,
    babProgression: "medium",
    saves: { fortitude: "medium", reflex: "poor", will: "good" },
    spellcastingAbility: "wis",
    armorProficiency: ["light", "medium", "heavy", "shields"],
    skillPoints: 3,
  },
  druid: {
    label: "EQRPG.ClassDruid",
    hitDie: 8,
    babProgression: "medium",
    saves: { fortitude: "medium", reflex: "poor", will: "good" },
    spellcastingAbility: "wis",
    armorProficiency: ["light"],
    skillPoints: 4,
  },
  enchanter: {
    label: "EQRPG.ClassEnchanter",
    hitDie: 4,
    babProgression: "poor",
    saves: { fortitude: "poor", reflex: "poor", will: "good" },
    spellcastingAbility: "int",
    armorProficiency: [],
    skillPoints: 4,
  },
  magician: {
    label: "EQRPG.ClassMagician",
    hitDie: 4,
    babProgression: "poor",
    saves: { fortitude: "poor", reflex: "poor", will: "good" },
    spellcastingAbility: "int",
    armorProficiency: [],
    skillPoints: 4,
  },
  monk: {
    label: "EQRPG.ClassMonk",
    hitDie: 8,
    babProgression: "medium",
    saves: { fortitude: "good", reflex: "good", will: "good" },
    spellcastingAbility: null,
    armorProficiency: [],
    skillPoints: 4,
  },
  necromancer: {
    label: "EQRPG.ClassNecromancer",
    hitDie: 4,
    babProgression: "poor",
    saves: { fortitude: "poor", reflex: "poor", will: "good" },
    spellcastingAbility: "int",
    armorProficiency: [],
    skillPoints: 4,
  },
  paladin: {
    label: "EQRPG.ClassPaladin",
    hitDie: 10,
    babProgression: "full",
    saves: { fortitude: "good", reflex: "poor", will: "medium" },
    spellcastingAbility: "wis",
    armorProficiency: ["light", "medium", "heavy", "shields"],
    skillPoints: 3,
  },
  ranger: {
    label: "EQRPG.ClassRanger",
    hitDie: 10,
    babProgression: "full",
    saves: { fortitude: "good", reflex: "good", will: "poor" },
    spellcastingAbility: "wis",
    armorProficiency: ["light", "medium"],
    skillPoints: 5,
  },
  rogue: {
    label: "EQRPG.ClassRogue",
    hitDie: 6,
    babProgression: "medium",
    saves: { fortitude: "poor", reflex: "good", will: "poor" },
    spellcastingAbility: null,
    armorProficiency: ["light"],
    skillPoints: 6,
  },
  shadowknight: {
    label: "EQRPG.ClassShadowKnight",
    hitDie: 10,
    babProgression: "full",
    saves: { fortitude: "good", reflex: "poor", will: "medium" },
    spellcastingAbility: "int",
    armorProficiency: ["light", "medium", "heavy", "shields"],
    skillPoints: 3,
  },
  shaman: {
    label: "EQRPG.ClassShaman",
    hitDie: 8,
    babProgression: "medium",
    saves: { fortitude: "medium", reflex: "poor", will: "good" },
    spellcastingAbility: "wis",
    armorProficiency: ["light", "medium"],
    skillPoints: 5,
  },
  warrior: {
    label: "EQRPG.ClassWarrior",
    hitDie: 12,
    babProgression: "full",
    saves: { fortitude: "good", reflex: "poor", will: "poor" },
    spellcastingAbility: null,
    armorProficiency: ["light", "medium", "heavy", "shields"],
    skillPoints: 3,
  },
  wizard: {
    label: "EQRPG.ClassWizard",
    hitDie: 4,
    babProgression: "poor",
    saves: { fortitude: "poor", reflex: "poor", will: "good" },
    spellcastingAbility: "int",
    armorProficiency: [],
    skillPoints: 4,
  },
};

// ---------------------------------------------------------------------------
// BAB Progression
// ---------------------------------------------------------------------------
EQRPG.babProgression = {
  full: (level) => level,
  medium: (level) => Math.floor(level * 3 / 4),
  poor: (level) => Math.floor(level / 2),
};

// ---------------------------------------------------------------------------
// Save Progression
// ---------------------------------------------------------------------------
EQRPG.saveProgression = {
  good:   [0, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17],
  medium: [0, 1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 6, 6, 7, 7, 7, 8, 8, 9, 9, 9, 10, 10, 11, 11, 11, 12, 12, 13, 13],
  poor:   [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10],
};

// ---------------------------------------------------------------------------
// Mana Pool
// Full casters use casting ability modifier x level x 3.
// Hybrid / secondary casters (Beastlord, Paladin, Ranger, Shadow Knight)
// use casting ability modifier x level x 2.
// Characters with ability modifier <= 0 have no mana pool.
// This is computed in character.mjs prepareDerivedData().
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Spell Level to Base Mana Cost
// ---------------------------------------------------------------------------
EQRPG.spellManaCost = {
  1: 2, 2: 5, 3: 8, 4: 12, 5: 17,
  6: 23, 7: 30, 8: 38, 9: 47, 10: 57,
  11: 68, 12: 80, 13: 93, 14: 108, 15: 125,
};

// ---------------------------------------------------------------------------
// XP Thresholds  (PHB Table 3-1: each level costs current-level × 2,000 XP)
// Cumulative formula: threshold[lvl] = (lvl-1) * lvl * 1,000
// Example: Level 2 = 2,000 | Level 3 = 6,000 | Level 5 = 20,000
// ---------------------------------------------------------------------------
EQRPG.xpThresholds = {};
for (let lvl = 1; lvl <= 30; lvl++) {
  EQRPG.xpThresholds[lvl] = (lvl - 1) * lvl * 1000;
}

// ---------------------------------------------------------------------------
// Faction Standing Tiers (EQ-style)
// ---------------------------------------------------------------------------
EQRPG.factionStandings = [
  { key: "ally",         min: 1100,  label: "EQRPG.FactionAlly",         css: "faction-ally" },
  { key: "warmly",       min: 750,   label: "EQRPG.FactionWarmly",        css: "faction-warmly" },
  { key: "kindly",       min: 500,   label: "EQRPG.FactionKindly",        css: "faction-kindly" },
  { key: "amiable",      min: 100,   label: "EQRPG.FactionAmiable",       css: "faction-amiable" },
  { key: "indifferent",  min: -99,   label: "EQRPG.FactionIndifferent",   css: "faction-indifferent" },
  { key: "apprehensive", min: -499,  label: "EQRPG.FactionApprehensive",  css: "faction-apprehensive" },
  { key: "dubious",      min: -749,  label: "EQRPG.FactionDubious",       css: "faction-dubious" },
  { key: "threatening",  min: -999,  label: "EQRPG.FactionThreatening",   css: "faction-threatening" },
  { key: "kos",          min: -9999, label: "EQRPG.FactionKOS",           css: "faction-kos" },
];

// ---------------------------------------------------------------------------
// Point-Buy Cost Table
// ---------------------------------------------------------------------------
EQRPG.pointBuyCost = {
  8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5,
  14: 6, 15: 7, 16: 8, 17: 10, 18: 12,
};

EQRPG.pointBuyTotal = 27;

// ---------------------------------------------------------------------------
// Deities
// ---------------------------------------------------------------------------
// Each entry: label, domain, alignment, description
// "alignment" is a short hint for which alignments typically worship this deity.
// ---------------------------------------------------------------------------
EQRPG.deities = {
  agnostic: {
    label:       "Agnostic",
    domain:      "None",
    alignment:   "Any",
    clericAlignments: [],
    description: "Follows no deity. The character relies on personal skill and strength rather than divine favour. Agnostic characters may not receive divine spells from a patron but suffer no restrictions on class or alignment choices.",
  },
  bertoxxulous: {
    label:       "Bertoxxulous",
    domain:      "Disease, Plague, Undeath",
    alignment:   "Evil",
    clericAlignments: ["ce", "ne"],
    description: "The Plaguebringer revels in corruption and decay. Worshippers seek to spread pestilence across Norrath as acts of devotion. Shadow Knights and Necromancers are his most devoted servants, using disease and undeath to further his dark will.",
  },
  brell_serilis: {
    label:       "Brell Serilis",
    domain:      "Earth, Underground, Crafting",
    alignment:   "Neutral",
    clericAlignments: ["lg", "ng", "cg", "ln", "tn", "cn"],
    description: "The Duke of Below is the patron of all creatures born beneath the earth. Dwarves, gnomes, and kobolds claim him as creator. He values industry, craftsmanship, and the treasures hidden deep underground. His followers are often miners, smiths, and earth-shapers.",
  },
  bristlebane: {
    label:       "Bristlebane Fizzlethorpe",
    domain:      "Mischief, Luck, Trickery",
    alignment:   "Neutral / Chaotic",
    clericAlignments: ["ng", "cg", "tn", "cn", "ne", "ce"],
    description: "The King of Thieves is the halfling god of luck and mischief. He delights in pranks, unexpected reversals of fortune, and the chaos that comes from a well-timed joke. Rogues, gamblers, and tricksters from all races pay him tribute, though halflings are his most beloved children.",
  },
  cazic_thule: {
    label:       "Cazic-Thule",
    domain:      "Fear, Pain, Violence",
    alignment:   "Evil",
    clericAlignments: ["le", "ne", "ce"],
    description: "The Faceless is the god of fear and the embodiment of suffering. His Iksar and troll worshippers offer pain and terror as their greatest sacrifice. Lizardmen built entire civilisations in his honour, and his Avatar roams the Plane of Fear granting power to those who spread dread across the land.",
  },
  erollisi_marr: {
    label:       "Erollisi Marr",
    domain:      "Love, Compassion, Valor",
    alignment:   "Good",
    clericAlignments: ["lg", "ng", "cg"],
    description: "The Queen of Love is the twin sister of Mithaniel Marr and patron of all who fight to protect those they hold dear. Paladins and Rangers who venerate her are blessed with clarity of purpose. She teaches that love is not weakness but the most powerful force in Norrath.",
  },
  innoruuk: {
    label:       "Innoruuk",
    domain:      "Hatred, Chaos, Darkness",
    alignment:   "Evil",
    clericAlignments: ["le", "ne", "ce"],
    description: "The Prince of Hate created the dark elves by twisting the first elves stolen from Tunare. Innoruuk demands pure, focused hatred of all things as an act of worship. He grants power to those whose hatred is most refined, rewarding Shadow Knights and dark elf clergy who embody his philosophy.",
  },
  karana: {
    label:       "Karana",
    domain:      "Storms, Plains, Weather",
    alignment:   "Good / Neutral",
    clericAlignments: ["ng", "cg", "tn", "cn"],
    description: "The Rainkeeper commands the sky, storms, and the open plains of Norrath. Rangers and Druids venerate him as protector of the wilderness. He is unpredictable and powerful — his storms bring both destruction and the rain that makes the land fertile. He values freedom and the untamed wild.",
  },
  mithaniel_marr: {
    label:       "Mithaniel Marr",
    domain:      "Valor, Truth, Justice",
    alignment:   "Good",
    clericAlignments: ["lg", "ng"],
    description: "The Truthbringer is the god of valor, bravery, and righteous combat. He is the patron of paladins across Norrath, particularly the barbarians and humans of Halas and Qeynos. Mithaniel demands unwavering honesty and the courage to face evil directly. His champions are among the most feared warriors in the land.",
  },
  prexus: {
    label:       "Prexus",
    domain:      "Oceans, Secrets, Depth",
    alignment:   "Neutral",
    clericAlignments: ["lg", "ng", "cg", "ln", "tn", "cn"],
    description: "The Ocean Lord rules the vast seas and all creatures within them. He is ancient, patient, and inscrutable — like the ocean itself. Sailors, fishermen, and those who keep deep secrets pay him tribute. He does not demand worship so much as respect for the unfathomable power of the sea.",
  },
  quellious: {
    label:       "Quellious",
    domain:      "Tranquility, Peace, Harmony",
    alignment:   "Good / Neutral",
    clericAlignments: ["lg", "ng", "ln", "tn"],
    description: "The Tranquil is the child goddess of peace and serenity. Her followers, chiefly Monks, seek to achieve perfect inner stillness that allows them to act without hesitation or emotion in combat. She does not preach passivity — rather, that true peace is only possible after all threats to it have been neutralised.",
  },
  rallos_zek: {
    label:       "Rallos Zek",
    domain:      "War, Conflict, Strength",
    alignment:   "Evil / Neutral",
    clericAlignments: ["ln", "tn", "cn", "le", "ne", "ce"],
    description: "The Warlord is the god of war and progenitor of the warlike races: ogres, orcs, and giants. He holds contempt for weakness in all its forms. Warriors who worship him seek victory above all else. Rallos Zek's blessing comes at a price — his favour is only maintained through constant conflict.",
  },
  rodcet_nife: {
    label:       "Rodcet Nife",
    domain:      "Life, Healing, Medicine",
    alignment:   "Good",
    clericAlignments: ["lg", "ng", "cg"],
    description: "The Prime Healer is the god of life, wellness, and the fight against disease. Clerics of Rodcet Nife are among the most devoted healers in Norrath, bound to combat the works of Bertoxxulous at every turn. His followers believe that all suffering can be alleviated and that life is the most sacred gift in existence.",
  },
  solusek_ro: {
    label:       "Solusek Ro",
    domain:      "Fire, Sun, Magic",
    alignment:   "Neutral / Evil",
    clericAlignments: ["ng", "cg", "tn", "cn", "ne", "ce"],
    description: "The Burning Prince is the god of flame and arcane power. Wizards and Magicians frequently pay tribute to him in exchange for dominion over fire magic. He tilted the planet of Norrath on its axis as a demonstration of his power, creating the world's deserts. He cares little for mortal affairs — only power interests him.",
  },
  the_tribunal: {
    label:       "The Tribunal",
    domain:      "Justice, Law, Balance",
    alignment:   "Lawful Neutral",
    clericAlignments: ["tn", "lg", "ln"],
    description: "The Six Hammers are the faceless gods of cosmic law and justice. They do not seek worship so much as adherence to a code: that the guilty must be punished and the innocent protected. Warriors, Clerics, and Paladins devoted to law and order sometimes venerate the Tribunal, seeking clarity in moral judgement.",
  },
  tunare: {
    label:       "Tunare",
    domain:      "Nature, Growth, Harmony",
    alignment:   "Good",
    clericAlignments: ["lg", "ng", "cg", "ln", "tn", "cn"],
    description: "The Mother of All created the elves and is the patron of all natural life. She is revered above all other gods by Wood Elves and many Druids and Rangers. Tunare teaches that all living things are sacred and that Norrath itself is a being deserving of protection. Her followers are the guardians of the ancient forests.",
  },
  veeshan: {
    label:       "Veeshan",
    domain:      "Sky, Dragons, Ancient Power",
    alignment:   "Neutral",
    clericAlignments: ["lg", "ng", "cg", "ln", "tn", "cn", "le", "ne", "ce"],
    description: "The Crystalline Dragon is the most ancient of Norrath's gods. She arrived before the others, claimed the planet by carving the Dragon Spine Mountains with her claw, and seeded it with her children — the dragons. She pays little attention to mortal races, but her legacy shapes the world. Some sages and dragon-kin pay her reverence.",
  },
};

// ---------------------------------------------------------------------------
// Alignments
// ---------------------------------------------------------------------------
EQRPG.alignments = {
  lg: "EQRPG.AlignmentLG",
  ng: "EQRPG.AlignmentNG",
  cg: "EQRPG.AlignmentCG",
  ln: "EQRPG.AlignmentLN",
  tn: "EQRPG.AlignmentTN",
  cn: "EQRPG.AlignmentCN",
  le: "EQRPG.AlignmentLE",
  ne: "EQRPG.AlignmentNE",
  ce: "EQRPG.AlignmentCE",
};

// ---------------------------------------------------------------------------
// Armor Types
// ---------------------------------------------------------------------------
EQRPG.armorTypes = {
  light: "EQRPG.ArmorLight",
  medium: "EQRPG.ArmorMedium",
  heavy: "EQRPG.ArmorHeavy",
  shield: "EQRPG.ArmorShield",
};

// ---------------------------------------------------------------------------
// Consumable Types
// ---------------------------------------------------------------------------
EQRPG.consumableTypes = {
  potion:  "EQRPG.ConsumablePotion",
  food:    "EQRPG.ConsumableFood",
  drink:   "EQRPG.ConsumableDrink",
  scroll:  "EQRPG.ConsumableScroll",
  reagent: "EQRPG.ConsumableReagent",
  other:   "EQRPG.ConsumableOther",
};

// ---------------------------------------------------------------------------
// Race Natural AC Bonuses
// ---------------------------------------------------------------------------
EQRPG.raceNaturalAC = {
  iksar: 3,
};

// ---------------------------------------------------------------------------
// Race Ability Definitions
// Each key matches the strings used in races[race].abilities arrays.
// label / note are i18n keys.  type: "passive" | "active"
// ---------------------------------------------------------------------------
EQRPG.raceAbilities = {
  slam: {
    label: "EQRPG.RaSlam",
    note:  "EQRPG.RaSlamNote",
    type:  "active",
  },
  ultravision: {
    label: "EQRPG.RaUltravision",
    note:  "EQRPG.RaUltravisionNote",
    type:  "passive",
  },
  infravision: {
    label: "EQRPG.RaInfravision",
    note:  "EQRPG.RaInfravisionNote",
    type:  "passive",
  },
  hide: {
    label: "EQRPG.RaHide",
    note:  "EQRPG.RaHideNote",
    type:  "passive",
  },
  sneak: {
    label: "EQRPG.RaSneak",
    note:  "EQRPG.RaSneakNote",
    type:  "passive",
  },
  tinkering: {
    label: "EQRPG.RaTinkering",
    note:  "EQRPG.RaTinkeringNote",
    type:  "passive",
  },
  bonusFeat: {
    label: "EQRPG.RaBonusFeat",
    note:  "EQRPG.RaBonusFeatNote",
    type:  "passive",
  },
  naturalAC: {
    label: "EQRPG.RaNaturalAC",
    note:  "EQRPG.RaNaturalACNote",
    type:  "passive",
  },
  foraging: {
    label: "EQRPG.RaForaging",
    note:  "EQRPG.RaForagingNote",
    type:  "passive",
  },
  swimming: {
    label: "EQRPG.RaSwimming",
    note:  "EQRPG.RaSwimmingNote",
    type:  "passive",
  },
  stun_immunity: {
    label: "EQRPG.RaStunImmunity",
    note:  "EQRPG.RaStunImmunityNote",
    type:  "passive",
  },
  regeneration: {
    label: "EQRPG.RaRegeneration",
    note:  "EQRPG.RaRegenerationNote",
    type:  "passive",
  },
  safefall: {
    label: "EQRPG.RaSafefall",
    note:  "EQRPG.RaSafefallNote",
    type:  "passive",
  },
  coldResistance: {
    label: "EQRPG.RaColdResistance",
    note:  "EQRPG.RaColdResistanceNote",
    type:  "passive",
  },
  luck: {
    label: "EQRPG.RaLuck",
    note:  "EQRPG.RaLuckNote",
    type:  "passive",
  },
  halflingFortitude: {
    label: "EQRPG.RaHalflingFortitude",
    note:  "EQRPG.RaHalflingFortitudeNote",
    type:  "passive",
  },
  spellShielding: {
    label: "EQRPG.RaSpellShielding",
    note:  "EQRPG.RaSpellShieldingNote",
    type:  "passive",
  },
};

// ---------------------------------------------------------------------------
// Class Features (descriptors used by derived data in character.mjs)
// ---------------------------------------------------------------------------
EQRPG.classFeatures = {
  rogue:        { sneakAttack: true },
  monk:         { unarmoredAC: true, wisToAC: true },
  paladin:      { layOnHands: true },
  shadowknight: { harmTouch: true },
  bard:         { songs: true },
  warrior:      { combatMastery: true },
};

// ---------------------------------------------------------------------------
// Character Creation
// ---------------------------------------------------------------------------
const eqItem = (name, {
  quantity = 1, weight = 0, price = 0, equipped = false, slot = "", description = "",
} = {}) => ({
  type: "equipment",
  name,
  system: {
    quantity,
    weight,
    price,
    equipped,
    slot,
    description: description ? `<p>${description}</p>` : "",
  },
});

const starterRef = (type, name, { quantity = 1, equipped = false } = {}) => ({
  type,
  name,
  quantity,
  equipped,
});

EQRPG.classSkills = {
  bard: [
    "Alcohol Tolerance", "Appraise", "Bluff", "Diplomacy", "Gather Information",
    "Intimidate", "Knowledge (Art and Literature)", "Listen", "Perform",
    "Play Brass Instrument", "Play Percussion Instrument", "Play String Instrument",
    "Play Wind Instrument", "Sense Motive",
  ],
  beastlord: [
    "Animal Empathy", "Handle Animal", "Heal", "Hide", "Jump", "Listen",
    "Meditation", "Ride", "Sneak", "Spot", "Swim", "Wilderness Lore",
  ],
  cleric: [
    "Appraise", "Channeling", "Diplomacy", "Heal", "Knowledge (Mysticism)",
    "Knowledge (Religion)", "Listen", "Meditation", "Profession",
    "Sense Motive", "Spellcraft",
  ],
  druid: [
    "Alcohol Tolerance", "Animal Empathy", "Channeling", "Handle Animal", "Heal",
    "Knowledge (Geography)", "Knowledge (Nature)", "Meditation", "Profession", "Ride",
    "Sense Heading", "Spellcraft", "Swim", "Trade Skill", "Wilderness Lore",
  ],
  enchanter: [
    "Appraise", "Bluff", "Channeling", "Diplomacy", "Gather Information",
    "Intimidate", "Knowledge (Art and Literature)", "Knowledge (Local Lore)",
    "Knowledge (Mysticism)", "Language", "Listen", "Meditation",
    "Read Lips", "Sense Motive", "Spellcraft",
  ],
  magician: [
    "Appraise", "Channeling", "Knowledge (Mysticism)", "Knowledge (Planar Travel)",
    "Language", "Listen", "Meditation", "Profession", "Spellcraft",
  ],
  monk: [
    "Balance", "Climb", "Diplomacy", "Jump", "Listen", "Meditation",
    "Safe Fall", "Sense Motive", "Spot", "Swim", "Tumble",
  ],
  necromancer: [
    "Channeling", "Heal", "Knowledge (Monster Lore)", "Knowledge (Mysticism)",
    "Knowledge (Religion)", "Meditation", "Spellcraft", "Trade Skill",
    "Undead Empathy",
  ],
  paladin: [
    "Diplomacy", "Handle Animal", "Heal", "Intimidate", "Knowledge (Religion)",
    "Knowledge (Warcraft)", "Listen", "Meditation", "Ride", "Sense Motive", "Spot",
  ],
  ranger: [
    "Animal Empathy", "Climb", "Handle Animal", "Heal", "Hide", "Jump",
    "Knowledge (Geography)", "Knowledge (Nature)", "Listen", "Ride", "Search",
    "Spot", "Swim", "Wilderness Lore",
  ],
  rogue: [
    "Appraise", "Balance", "Bluff", "Climb", "Diplomacy", "Disable Device",
    "Escape Artist", "Forgery", "Gather Information", "Hide", "Intimidate", "Jump",
    "Knowledge (Local Lore)", "Knowledge (Street Smarts)", "Listen", "Pick Lock",
    "Pick Pocket", "Read Lips", "Search", "Sense Motive", "Sneak", "Spot",
    "Tumble", "Use Rope",
  ],
  shadowknight: [
    "Channeling", "Handle Animal", "Intimidate", "Knowledge (Religion)",
    "Knowledge (Warcraft)", "Listen", "Meditation", "Ride", "Sense Motive", "Spellcraft",
  ],
  shaman: [
    "Animal Empathy", "Channeling", "Diplomacy", "Handle Animal", "Heal",
    "Intimidate", "Knowledge (Folklore)", "Knowledge (Nature)", "Knowledge (Religion)",
    "Listen", "Meditation", "Profession", "Spellcraft", "Wilderness Lore",
  ],
  warrior: [
    "Climb", "Handle Animal", "Intimidate", "Jump", "Knowledge (Warcraft)",
    "Listen", "Ride", "Spot", "Swim", "Taunt",
  ],
  wizard: [
    "Appraise", "Channeling", "Knowledge (Art and Literature)", "Knowledge (Mysticism)",
    "Knowledge (Planar Travel)", "Language", "Listen", "Meditation",
    "Profession", "Read Lips", "Spellcraft",
  ],
};

EQRPG.startingGold = {
  bard: 100,
  beastlord: 100,
  cleric: 125,
  druid: 50,
  enchanter: 75,
  magician: 75,
  monk: 15,
  necromancer: 75,
  paladin: 150,
  ranger: 150,
  rogue: 125,
  shadowknight: 150,
  shaman: 100,
  warrior: 150,
  wizard: 75,
};

EQRPG.starterKits = {
  bard: [
    starterRef("weapon", "Rapier"),
    starterRef("armor", "Leather Armor", { equipped: true }),
    starterRef("equipment", "Trail Rations", { quantity: 2 }),
    starterRef("equipment", "Waterskin"),
    starterRef("equipment", "Backpack"),
    eqItem("String Instrument", { weight: 3, price: 15, description: "A lute or similar instrument suited to bardic performances." }),
    starterRef("equipment", "Bedroll"),
  ],
  beastlord: [
    starterRef("weapon", "Spear"),
    starterRef("armor", "Leather Armor", { equipped: true }),
    starterRef("equipment", "Trail Rations", { quantity: 2 }),
    starterRef("equipment", "Waterskin"),
    eqItem("Totem Charm", { weight: 1, price: 5, description: "A beast-touched charm used in rites of kinship and focus." }),
    starterRef("equipment", "Backpack"),
    starterRef("equipment", "Bedroll"),
  ],
  cleric: [
    starterRef("weapon", "Heavy Mace"),
    starterRef("armor", "Large Steel Shield", { equipped: true }),
    starterRef("armor", "Chainmail", { equipped: true }),
    starterRef("equipment", "Trail Rations", { quantity: 2 }),
    starterRef("equipment", "Waterskin"),
    starterRef("equipment", "Holy Symbol (Wooden)"),
    starterRef("equipment", "Backpack"),
  ],
  druid: [
    starterRef("weapon", "Club"),
    starterRef("armor", "Leather Armor", { equipped: true }),
    starterRef("equipment", "Trail Rations", { quantity: 2 }),
    starterRef("equipment", "Waterskin"),
    eqItem("Herbal Satchel", { weight: 1, price: 5, description: "A satchel for herbs, poultices, and sacred seeds." }),
    eqItem("Walking Cloak", { weight: 2, price: 3, description: "A weathered traveling cloak suitable for the wild." }),
    starterRef("equipment", "Bedroll"),
  ],
  enchanter: [
    starterRef("weapon", "Dagger"),
    starterRef("armor", "Cloth Armor", { equipped: true }),
    starterRef("equipment", "Trail Rations"),
    starterRef("equipment", "Waterskin"),
    eqItem("Spellbook", { weight: 3, price: 15, description: "A spellbook containing your opening enchantments and notes." }),
    starterRef("equipment", "Spell Component Pouch"),
    starterRef("equipment", "Backpack"),
  ],
  magician: [
    starterRef("weapon", "Dagger"),
    starterRef("armor", "Cloth Armor", { equipped: true }),
    starterRef("equipment", "Trail Rations"),
    starterRef("equipment", "Waterskin"),
    eqItem("Spellbook", { weight: 3, price: 15, description: "A spellbook marked with sigils of conjuration." }),
    starterRef("equipment", "Spell Component Pouch"),
    starterRef("equipment", "Backpack"),
  ],
  monk: [
    starterRef("weapon", "Hand Wraps"),
    starterRef("weapon", "Quarterstaff"),
    starterRef("equipment", "Trail Rations", { quantity: 2 }),
    starterRef("equipment", "Waterskin"),
    eqItem("Traveler's Pack", { weight: 2, price: 2, description: "A small pack with the bare essentials." }),
    eqItem("Prayer Beads", { weight: 0, price: 2, description: "Beads used for centering breath and focus." }),
    starterRef("equipment", "Bedroll"),
  ],
  necromancer: [
    starterRef("weapon", "Dagger"),
    starterRef("armor", "Cloth Armor", { equipped: true }),
    starterRef("equipment", "Trail Rations"),
    starterRef("equipment", "Waterskin"),
    eqItem("Spellbook", { weight: 3, price: 15, description: "A spellbook inked with dark formulae and funerary notes." }),
    eqItem("Bone Fetish", { weight: 1, price: 5, description: "A grim charm used to steady the will around death and undeath." }),
    starterRef("equipment", "Backpack"),
  ],
  paladin: [
    starterRef("weapon", "Longsword"),
    starterRef("armor", "Large Steel Shield", { equipped: true }),
    starterRef("armor", "Chainmail", { equipped: true }),
    starterRef("equipment", "Trail Rations", { quantity: 2 }),
    starterRef("equipment", "Waterskin"),
    starterRef("equipment", "Holy Symbol (Wooden)"),
    starterRef("equipment", "Bedroll"),
  ],
  ranger: [
    starterRef("weapon", "Longbow"),
    starterRef("weapon", "Short Sword"),
    starterRef("armor", "Studded Leather", { equipped: true }),
    starterRef("equipment", "Arrows", { quantity: 20 }),
    starterRef("equipment", "Trail Rations", { quantity: 2 }),
    starterRef("equipment", "Waterskin"),
    starterRef("equipment", "Backpack"),
    starterRef("equipment", "Bedroll"),
    eqItem("Hunter's Kit", { weight: 2, price: 10, description: "Field dressing tools, cord, and simple trail gear." }),
  ],
  rogue: [
    starterRef("weapon", "Rapier"),
    starterRef("weapon", "Dagger"),
    starterRef("armor", "Leather Armor", { equipped: true }),
    starterRef("equipment", "Trail Rations"),
    starterRef("equipment", "Waterskin"),
    eqItem("Thieves' Tools", { weight: 1, price: 30, description: "Picks, files, probes, and slim blades for quiet work." }),
    starterRef("equipment", "Backpack"),
  ],
  shadowknight: [
    starterRef("weapon", "Battleaxe"),
    starterRef("armor", "Large Steel Shield", { equipped: true }),
    starterRef("armor", "Chainmail", { equipped: true }),
    starterRef("equipment", "Trail Rations"),
    starterRef("equipment", "Waterskin"),
    eqItem("Unholy Symbol", { weight: 1, price: 25, description: "A blasphemous emblem used in grim devotions." }),
    starterRef("equipment", "Bedroll"),
  ],
  shaman: [
    starterRef("weapon", "Spear"),
    starterRef("armor", "Hide Armor", { equipped: true }),
    starterRef("equipment", "Trail Rations"),
    starterRef("equipment", "Waterskin"),
    eqItem("Totem Pouch", { weight: 1, price: 5, description: "Bones, feathers, and talismans used for spirit work." }),
    starterRef("equipment", "Bedroll"),
    starterRef("equipment", "Backpack"),
  ],
  warrior: [
    starterRef("weapon", "Longsword"),
    starterRef("armor", "Large Steel Shield", { equipped: true }),
    starterRef("armor", "Scale Mail", { equipped: true }),
    starterRef("equipment", "Trail Rations"),
    starterRef("equipment", "Waterskin"),
    starterRef("equipment", "Backpack"),
    starterRef("equipment", "Bedroll"),
  ],
  wizard: [
    starterRef("weapon", "Dagger"),
    starterRef("armor", "Cloth Armor", { equipped: true }),
    starterRef("equipment", "Trail Rations"),
    starterRef("equipment", "Waterskin"),
    eqItem("Spellbook", { weight: 3, price: 15, description: "A weathered spellbook containing your first formulae." }),
    starterRef("equipment", "Ink Pen"),
    starterRef("equipment", "Ink (1 oz. vial)"),
    starterRef("equipment", "Backpack"),
  ],
};

// ---------------------------------------------------------------------------
// Feat Categories
// ---------------------------------------------------------------------------
EQRPG.featCategories = {
  general:   "EQRPG.FeatCatGeneral",
  combat:    "EQRPG.FeatCatCombat",
  mystic:    "EQRPG.FeatCatMystic",
  metamagic: "EQRPG.FeatCatMetamagic",
};

// ---------------------------------------------------------------------------
// Damage Types
// ---------------------------------------------------------------------------
EQRPG.damageTypes = {
  slashing: "EQRPG.DmgSlashing",
  piercing: "EQRPG.DmgPiercing",
  bludgeoning: "EQRPG.DmgBludgeoning",
  fire: "EQRPG.DmgFire",
  cold: "EQRPG.DmgCold",
  magic: "EQRPG.DmgMagic",
  poison: "EQRPG.DmgPoison",
  disease: "EQRPG.DmgDisease",
};

EQRPG.sizeOrder = [
  "fine",
  "diminutive",
  "tiny",
  "small",
  "medium",
  "large",
  "huge",
  "gargantuan",
  "colossal",
];

EQRPG.sizeAttackModifiers = {
  fine: 8,
  diminutive: 4,
  tiny: 2,
  small: 1,
  medium: 0,
  large: -1,
  huge: -2,
  gargantuan: -4,
  colossal: -8,
};

EQRPG.sizeACModifiers = {
  fine: 8,
  diminutive: 4,
  tiny: 2,
  small: 1,
  medium: 0,
  large: -1,
  huge: -2,
  gargantuan: -4,
  colossal: -8,
};
