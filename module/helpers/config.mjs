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
      "bard", "druid", "paladin", "ranger", "rogue", "shadowknight", "warrior",
    ],
  },
  halfling: {
    label: "EQRPG.RaceHalfling",
    adjustments: { str: -2, dex: 4, con: 0, int: -2, wis: 2, cha: -2 },
    size: "small",
    speed: 20,
    abilities: ["infravision", "sneak", "luck"],
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
    hitDie: 10,
    babProgression: "medium",
    saves: { fortitude: "poor", reflex: "good", will: "good" },
    spellcastingAbility: null, // Bards use songs
    armorProficiency: ["light", "medium", "heavy"],
  },
  beastlord: {
    label: "EQRPG.ClassBeastlord",
    hitDie: 8,
    babProgression: "full",
    saves: { fortitude: "good", reflex: "good", will: "poor" },
    spellcastingAbility: "wis",
    armorProficiency: ["light"],
  },
  berserker: {
    label: "EQRPG.ClassBerserker",
    hitDie: 12,
    babProgression: "full",
    saves: { fortitude: "good", reflex: "poor", will: "poor" },
    spellcastingAbility: null,
    armorProficiency: ["light", "medium"],
  },
  cleric: {
    label: "EQRPG.ClassCleric",
    hitDie: 8,
    babProgression: "medium",
    saves: { fortitude: "good", reflex: "poor", will: "good" },
    spellcastingAbility: "wis",
    armorProficiency: ["light", "medium", "heavy", "shields"],
  },
  druid: {
    label: "EQRPG.ClassDruid",
    hitDie: 8,
    babProgression: "medium",
    saves: { fortitude: "good", reflex: "poor", will: "good" },
    spellcastingAbility: "wis",
    armorProficiency: ["light"],
  },
  enchanter: {
    label: "EQRPG.ClassEnchanter",
    hitDie: 4,
    babProgression: "poor",
    saves: { fortitude: "poor", reflex: "poor", will: "good" },
    spellcastingAbility: "int",
    armorProficiency: [],
  },
  magician: {
    label: "EQRPG.ClassMagician",
    hitDie: 4,
    babProgression: "poor",
    saves: { fortitude: "poor", reflex: "poor", will: "good" },
    spellcastingAbility: "int",
    armorProficiency: [],
  },
  monk: {
    label: "EQRPG.ClassMonk",
    hitDie: 8,
    babProgression: "medium",
    saves: { fortitude: "good", reflex: "good", will: "good" },
    spellcastingAbility: null,
    armorProficiency: [],
  },
  necromancer: {
    label: "EQRPG.ClassNecromancer",
    hitDie: 4,
    babProgression: "poor",
    saves: { fortitude: "good", reflex: "poor", will: "good" },
    spellcastingAbility: "int",
    armorProficiency: [],
  },
  paladin: {
    label: "EQRPG.ClassPaladin",
    hitDie: 10,
    babProgression: "full",
    saves: { fortitude: "good", reflex: "poor", will: "poor" },
    spellcastingAbility: "wis",
    armorProficiency: ["light", "medium", "heavy", "shields"],
  },
  ranger: {
    label: "EQRPG.ClassRanger",
    hitDie: 10,
    babProgression: "full",
    saves: { fortitude: "good", reflex: "good", will: "poor" },
    spellcastingAbility: "wis",
    armorProficiency: ["light", "medium"],
  },
  rogue: {
    label: "EQRPG.ClassRogue",
    hitDie: 6,
    babProgression: "medium",
    saves: { fortitude: "poor", reflex: "good", will: "poor" },
    spellcastingAbility: null,
    armorProficiency: ["light"],
  },
  shadowknight: {
    label: "EQRPG.ClassShadowKnight",
    hitDie: 10,
    babProgression: "full",
    saves: { fortitude: "good", reflex: "poor", will: "poor" },
    spellcastingAbility: "int",
    armorProficiency: ["light", "medium", "heavy", "shields"],
  },
  shaman: {
    label: "EQRPG.ClassShaman",
    hitDie: 8,
    babProgression: "medium",
    saves: { fortitude: "good", reflex: "poor", will: "good" },
    spellcastingAbility: "wis",
    armorProficiency: ["light", "medium"],
  },
  warrior: {
    label: "EQRPG.ClassWarrior",
    hitDie: 12,
    babProgression: "full",
    saves: { fortitude: "good", reflex: "poor", will: "poor" },
    spellcastingAbility: null,
    armorProficiency: ["light", "medium", "heavy", "shields"],
  },
  wizard: {
    label: "EQRPG.ClassWizard",
    hitDie: 4,
    babProgression: "poor",
    saves: { fortitude: "poor", reflex: "poor", will: "good" },
    spellcastingAbility: "int",
    armorProficiency: [],
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
  good: (level) => 2 + Math.floor(level / 2),
  poor: (level) => Math.floor(level / 3),
};

// ---------------------------------------------------------------------------
// Mana Pool (PHB formula)
// Mana max = (spellcasting ability modifier × 2) × effective caster level
// Characters with ability modifier ≤ 0 have no mana pool.
// Hybrid classes (Beastlord, Paladin, Ranger, Shadow Knight) gain spells at
// class level 5+ and use (class level − 4) as effective caster level.
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
    description: "Follows no deity. The character relies on personal skill and strength rather than divine favour. Agnostic characters may not receive divine spells from a patron but suffer no restrictions on class or alignment choices.",
  },
  bertoxxulous: {
    label:       "Bertoxxulous",
    domain:      "Disease, Plague, Undeath",
    alignment:   "Evil",
    description: "The Plaguebringer revels in corruption and decay. Worshippers seek to spread pestilence across Norrath as acts of devotion. Shadow Knights and Necromancers are his most devoted servants, using disease and undeath to further his dark will.",
  },
  brell_serilis: {
    label:       "Brell Serilis",
    domain:      "Earth, Underground, Crafting",
    alignment:   "Neutral",
    description: "The Duke of Below is the patron of all creatures born beneath the earth. Dwarves, gnomes, and kobolds claim him as creator. He values industry, craftsmanship, and the treasures hidden deep underground. His followers are often miners, smiths, and earth-shapers.",
  },
  bristlebane: {
    label:       "Bristlebane Fizzlethorpe",
    domain:      "Mischief, Luck, Trickery",
    alignment:   "Neutral / Chaotic",
    description: "The King of Thieves is the halfling god of luck and mischief. He delights in pranks, unexpected reversals of fortune, and the chaos that comes from a well-timed joke. Rogues, gamblers, and tricksters from all races pay him tribute, though halflings are his most beloved children.",
  },
  cazic_thule: {
    label:       "Cazic-Thule",
    domain:      "Fear, Pain, Violence",
    alignment:   "Evil",
    description: "The Faceless is the god of fear and the embodiment of suffering. His Iksar and troll worshippers offer pain and terror as their greatest sacrifice. Lizardmen built entire civilisations in his honour, and his Avatar roams the Plane of Fear granting power to those who spread dread across the land.",
  },
  erollisi_marr: {
    label:       "Erollisi Marr",
    domain:      "Love, Compassion, Valor",
    alignment:   "Good",
    description: "The Queen of Love is the twin sister of Mithaniel Marr and patron of all who fight to protect those they hold dear. Paladins and Rangers who venerate her are blessed with clarity of purpose. She teaches that love is not weakness but the most powerful force in Norrath.",
  },
  innoruuk: {
    label:       "Innoruuk",
    domain:      "Hatred, Chaos, Darkness",
    alignment:   "Evil",
    description: "The Prince of Hate created the dark elves by twisting the first elves stolen from Tunare. Innoruuk demands pure, focused hatred of all things as an act of worship. He grants power to those whose hatred is most refined, rewarding Shadow Knights and dark elf clergy who embody his philosophy.",
  },
  karana: {
    label:       "Karana",
    domain:      "Storms, Plains, Weather",
    alignment:   "Good / Neutral",
    description: "The Rainkeeper commands the sky, storms, and the open plains of Norrath. Rangers and Druids venerate him as protector of the wilderness. He is unpredictable and powerful — his storms bring both destruction and the rain that makes the land fertile. He values freedom and the untamed wild.",
  },
  mithaniel_marr: {
    label:       "Mithaniel Marr",
    domain:      "Valor, Truth, Justice",
    alignment:   "Good",
    description: "The Truthbringer is the god of valor, bravery, and righteous combat. He is the patron of paladins across Norrath, particularly the barbarians and humans of Halas and Qeynos. Mithaniel demands unwavering honesty and the courage to face evil directly. His champions are among the most feared warriors in the land.",
  },
  prexus: {
    label:       "Prexus",
    domain:      "Oceans, Secrets, Depth",
    alignment:   "Neutral",
    description: "The Ocean Lord rules the vast seas and all creatures within them. He is ancient, patient, and inscrutable — like the ocean itself. Sailors, fishermen, and those who keep deep secrets pay him tribute. He does not demand worship so much as respect for the unfathomable power of the sea.",
  },
  quellious: {
    label:       "Quellious",
    domain:      "Tranquility, Peace, Harmony",
    alignment:   "Good / Neutral",
    description: "The Tranquil is the child goddess of peace and serenity. Her followers, chiefly Monks, seek to achieve perfect inner stillness that allows them to act without hesitation or emotion in combat. She does not preach passivity — rather, that true peace is only possible after all threats to it have been neutralised.",
  },
  rallos_zek: {
    label:       "Rallos Zek",
    domain:      "War, Conflict, Strength",
    alignment:   "Evil / Neutral",
    description: "The Warlord is the god of war and progenitor of the warlike races: ogres, orcs, and giants. He holds contempt for weakness in all its forms. Warriors and Berserkers who worship him seek victory above all else. Rallos Zek's blessing comes at a price — his favour is only maintained through constant conflict.",
  },
  rodcet_nife: {
    label:       "Rodcet Nife",
    domain:      "Life, Healing, Medicine",
    alignment:   "Good",
    description: "The Prime Healer is the god of life, wellness, and the fight against disease. Clerics of Rodcet Nife are among the most devoted healers in Norrath, bound to combat the works of Bertoxxulous at every turn. His followers believe that all suffering can be alleviated and that life is the most sacred gift in existence.",
  },
  solusek_ro: {
    label:       "Solusek Ro",
    domain:      "Fire, Sun, Magic",
    alignment:   "Neutral / Evil",
    description: "The Burning Prince is the god of flame and arcane power. Wizards and Magicians frequently pay tribute to him in exchange for dominion over fire magic. He tilted the planet of Norrath on its axis as a demonstration of his power, creating the world's deserts. He cares little for mortal affairs — only power interests him.",
  },
  the_tribunal: {
    label:       "The Tribunal",
    domain:      "Justice, Law, Balance",
    alignment:   "Lawful Neutral",
    description: "The Six Hammers are the faceless gods of cosmic law and justice. They do not seek worship so much as adherence to a code: that the guilty must be punished and the innocent protected. Warriors, Clerics, and Paladins devoted to law and order sometimes venerate the Tribunal, seeking clarity in moral judgement.",
  },
  tunare: {
    label:       "Tunare",
    domain:      "Nature, Growth, Harmony",
    alignment:   "Good",
    description: "The Mother of All created the elves and is the patron of all natural life. She is revered above all other gods by Wood Elves and many Druids and Rangers. Tunare teaches that all living things are sacred and that Norrath itself is a being deserving of protection. Her followers are the guardians of the ancient forests.",
  },
  veeshan: {
    label:       "Veeshan",
    domain:      "Sky, Dragons, Ancient Power",
    alignment:   "Neutral",
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
  iksar: 4,   // PHB: Iksar have thick scales granting +4 natural armor
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
  berserker:    { rage: true },
  shadowknight: { lifetap: true },
  bard:         { songs: true },
  warrior:      { combatMastery: true },
};

// ---------------------------------------------------------------------------
// Feat Categories
// ---------------------------------------------------------------------------
EQRPG.featCategories = {
  general:      "EQRPG.FeatCatGeneral",
  combat:       "EQRPG.FeatCatCombat",
  magic:        "EQRPG.FeatCatMagic",
  metamagic:    "EQRPG.FeatCatMetamagic",
  itemCreation: "EQRPG.FeatCatItemCreation",
  racial:       "EQRPG.FeatCatRacial",
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
