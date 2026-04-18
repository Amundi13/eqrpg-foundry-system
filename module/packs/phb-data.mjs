import { EQRPG } from "../helpers/config.mjs";
import {
  SAMPLE_ARMOR,
  SAMPLE_EQUIPMENT,
  SAMPLE_FEATS,
  SAMPLE_SKILLS,
  SAMPLE_SPELLS,
  SAMPLE_WEAPONS,
} from "./sample-data.mjs";

const esc = (v) => String(v ?? "")
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");
const h2 = (t) => `<h2>${esc(t)}</h2>`;
const p = (...lines) => lines.map((line) => `<p>${esc(line)}</p>`).join("\n");
const rawP = (...lines) => lines.map((line) => `<p>${line}</p>`).join("\n");
const table = (headers, rows) =>
  `<table><thead><tr>${headers.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>`
  + rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")
  + `</tbody></table>`;

function textPage(name, sort, content) {
  return { name, type: "text", sort, text: { format: 1, content } };
}

function chapterEntry(name, pages) {
  return { name, pages };
}

function chunk(array, size) {
  const out = [];
  for (let i = 0; i < array.length; i += size) out.push(array.slice(i, i + size));
  return out;
}

const RACE_NAMES = {
  barbarian: "Barbarian", darkelf: "Dark Elf", dwarf: "Dwarf", erudite: "Erudite",
  gnome: "Gnome", halfelf: "Half Elf", halfling: "Halfling", highelf: "High Elf",
  human: "Human", iksar: "Iksar", ogre: "Ogre", troll: "Troll", vahshir: "Vah Shir",
  woodelf: "Wood Elf",
};

const CLASS_NAMES = {
  bard: "Bard", beastlord: "Beastlord", cleric: "Cleric", druid: "Druid",
  enchanter: "Enchanter", magician: "Magician", monk: "Monk", necromancer: "Necromancer",
  paladin: "Paladin", ranger: "Ranger", rogue: "Rogue", shadowknight: "Shadow Knight",
  shaman: "Shaman", warrior: "Warrior", wizard: "Wizard",
};

const ABILITY_NAMES = {
  str: "Strength", dex: "Dexterity", con: "Constitution",
  int: "Intelligence", wis: "Wisdom", cha: "Charisma",
};

const ALIGNMENTS = [
  ["LG", "Lawful Good"], ["NG", "Neutral Good"], ["CG", "Chaotic Good"],
  ["LN", "Lawful Neutral"], ["TN", "True Neutral"], ["CN", "Chaotic Neutral"],
  ["LE", "Lawful Evil"], ["NE", "Neutral Evil"], ["CE", "Chaotic Evil"],
];

const FEAT_CATEGORIES = {
  general: "General",
  combat: "Combat",
  mystic: "Mystic",
  metamagic: "Metamagic",
};

const saveLabel = (value) => ({ good: "Good", medium: "Medium", poor: "Poor" }[value] ?? value);
const babLabel = (value) => ({ full: "Full", medium: "Medium", poor: "Poor" }[value] ?? value);
const formatAdjustments = (adjustments) => Object.entries(adjustments)
  .filter(([, n]) => n !== 0)
  .map(([key, n]) => `${key.toUpperCase()} ${n > 0 ? `+${n}` : n}`)
  .join(", ") || "None";
const list = (items) => items.length ? items.join(", ") : "None";
const summarizeStarterKit = (classKey) => {
  const kit = Array.isArray(EQRPG.starterKits?.[classKey]) ? EQRPG.starterKits[classKey] : [];
  if (!kit.length) return "None";
  return kit.map((entry) => {
    const quantity = Number(entry.quantity) > 1 ? `${entry.quantity}x ` : "";
    return `${quantity}${entry.name}`;
  }).join(", ");
};

const ALLOWED_RACES_BY_CLASS = Object.fromEntries(Object.keys(CLASS_NAMES).map((key) => [key, []]));
for (const [raceKey, race] of Object.entries(EQRPG.races)) {
  for (const classKey of race.allowedClasses ?? []) {
    ALLOWED_RACES_BY_CLASS[classKey].push(RACE_NAMES[raceKey] ?? raceKey);
  }
}
for (const value of Object.values(ALLOWED_RACES_BY_CLASS)) value.sort((a, b) => a.localeCompare(b));

const SPELLS_BY_CLASS = Object.fromEntries(Object.keys(CLASS_NAMES).map((key) => [key, new Map()]));
for (const spell of SAMPLE_SPELLS) {
  const entries = Array.isArray(spell.system.classLevels) ? spell.system.classLevels : [];
  for (const entry of entries) {
    const match = String(entry).match(/^([^:]+):(\d+)$/);
    if (!match) continue;
    const [, classKey, levelRaw] = match;
    const level = Number(levelRaw) || Number(spell.system.spellLevel) || 1;
    if (!SPELLS_BY_CLASS[classKey].has(level)) SPELLS_BY_CLASS[classKey].set(level, []);
    SPELLS_BY_CLASS[classKey].get(level).push(spell.name);
  }
}
for (const map of Object.values(SPELLS_BY_CLASS)) {
  for (const names of map.values()) names.sort((a, b) => a.localeCompare(b));
}

const INTRODUCTION = chapterEntry("Introduction", [
  textPage("Getting Started", 100, `
${h2("Getting Started")}
${rawP(
  "This compendium follows the 2002 PHB chapter order so players can use it as a table reference.",
  "Detailed mechanical entries live in the audited EQ Skills, EQ Feats, EQ Weapons, EQ Armor, EQ Equipment, and EQ Spells compendiums."
)}`),
  textPage("The World of Norrath", 200, `
${h2("The World of Norrath")}
${p(
  "Norrath is a factional fantasy world where race, class, alignment, religion, and region all matter.",
  "This handbook is organized to help players browse those choices quickly during play."
)}`),
  textPage("History of Norrath", 300, `${h2("History of Norrath")}${p("Use this section as the player-facing lore anchor. The compendium keeps history light and table-friendly so rules lookup stays fast.")}`),
  textPage("Geography", 400, `${h2("Geography")}${p("Geography matters because race homelands, cities, factions, and travel magic all tie back to place.")}`),
]);

const BOOK_ONE = chapterEntry("Book One: Creating a Character", [
  textPage("Creating a Character", 100, `
${h2("Creating a Character")}
${table(
  ["Step", "Section", "Focus"],
  [
    ["1", "Chapter One: Abilities", "Scores and modifiers"],
    ["2", "Chapter Two: Races", "Race choice and class access"],
    ["3", "Chapter Three: Classes", "Class chassis and role"],
    ["4", "Chapter Four: Skills", "Class skills and skill browsing"],
    ["5", "Chapter Five: Feats", "Feat categories and feat lookup"],
    ["6", "Chapter Six: Description", "Alignment, deity, faction, identity"],
    ["7", "Chapter Seven: Equipment", "Money, gear, armor, weapons, supplies"],
  ]
)}`),
]);

const CHAPTER_ONE = chapterEntry("Chapter One: Abilities", [
  textPage("Determining Your Ability Scores", 100, `
${h2("Determining Your Ability Scores")}
${table(
  ["Score", "Point Cost"],
  Object.entries(EQRPG.pointBuyCost).sort((a, b) => Number(a[0]) - Number(b[0])).map(([score, cost]) => [`${score}`, `${cost}`])
)}`),
  textPage("Ability Modifiers", 200, `
${h2("Ability Modifiers")}
${table(
  ["Ability", "Common Uses"],
  [
    ["Strength", "Melee attacks, melee damage, lifting, exertion"],
    ["Dexterity", "Armor Class, initiative, ranged attacks, Reflex saves"],
    ["Constitution", "Hit points and Fortitude"],
    ["Intelligence", "Arcane casting and skill points"],
    ["Wisdom", "Divine casting and Will"],
    ["Charisma", "Social pressure and class feature scaling"],
  ]
)}`),
  textPage("Abilities and Spellcasting", 300, `
${h2("Abilities and Spellcasting")}
${table(
  ["Class Group", "Spellcasting Ability"],
  [
    ["Cleric, Druid, Shaman", "Wisdom"],
    ["Enchanter, Magician, Necromancer, Wizard", "Intelligence"],
    ["Beastlord, Paladin, Ranger", "Wisdom"],
    ["Shadow Knight", "Intelligence"],
    ["Bard", "Bardic song rules"],
  ]
)}`),
  textPage("The Abilities", 400, `${h2("The Abilities")}${table(["Ability", "Summary"], Object.entries(ABILITY_NAMES).map(([k, v]) => [esc(v), esc(k.toUpperCase())]))}`),
  textPage("Changing Ability Scores", 500, `${h2("Changing Ability Scores")}${p("Ability changes affect attacks, saves, skills, mana, and derived values across the sheet.")}`),
  textPage("Converting Characters from EverQuest Online", 600, `${h2("Converting Characters from EverQuest Online")}${p("Use tabletop race, class, skill, feat, spell, and gear choices to recreate an online concept rather than copying raw online numbers.")}`),
]);

const CHAPTER_TWO = chapterEntry("Chapter Two: Races", [
  textPage("Racial Adjustments", 100, `
${h2("Racial Adjustments")}
${table(
  ["Race", "Size", "Speed", "Adjustments"],
  Object.entries(EQRPG.races).map(([raceKey, race]) => [
    esc(RACE_NAMES[raceKey] ?? raceKey),
    esc(race.size),
    esc(`${race.speed} ft`),
    esc(formatAdjustments(race.adjustments)),
  ])
)}`),
  ...Object.entries(EQRPG.races).map(([raceKey, race], index) => textPage(RACE_NAMES[raceKey] ?? raceKey, 200 + (index * 100), `
${h2(RACE_NAMES[raceKey] ?? raceKey)}
${table(
  ["Trait", "Value"],
  [
    ["Size", race.size],
    ["Speed", `${race.speed} ft`],
    ["Ability Adjustments", formatAdjustments(race.adjustments)],
    ["Racial Abilities", list(race.abilities ?? [])],
    ["Allowed Classes", list((race.allowedClasses ?? []).map((classKey) => CLASS_NAMES[classKey] ?? classKey))],
  ].map((row) => row.map((cell) => esc(cell)))
)}`)),
]);

const CHAPTER_THREE = chapterEntry("Chapter Three: Classes", [
  textPage("Class Types", 100, `
${h2("Class Types")}
${table(
  ["Category", "Classes"],
  [
    ["Dedicated Spellcasters", "Bard, Cleric, Druid, Enchanter, Magician, Necromancer, Shaman, Wizard"],
    ["Dedicated Fighters", "Monk, Rogue, Warrior"],
    ["Hybrid Classes", "Beastlord, Paladin, Ranger, Shadow Knight"],
  ].map((row) => row.map((cell) => esc(cell)))
)}`),
  textPage("Dedicated Spellcasters", 200, `${h2("Dedicated Spellcasters")}${p("These classes carry the strongest magical identity in the PHB and rely heavily on mana, spell access, and class-defining utility.")}`),
  textPage("Dedicated Fighters", 300, `${h2("Dedicated Fighters")}${p("These classes are the most straightforward martial chassis in the handbook.")}`),
  textPage("Hybrid Classes", 400, `${h2("Hybrid Classes")}${p("These classes blend strong combat presence with smaller or more specialized magical toolkits.")}`),
  ...Object.entries(EQRPG.classes).map(([classKey, classData], index) => textPage(CLASS_NAMES[classKey] ?? classKey, 500 + (index * 100), `
${h2(CLASS_NAMES[classKey] ?? classKey)}
${table(
  ["Class Statistic", "Value"],
  [
    ["Hit Die", `d${classData.hitDie}`],
    ["BAB Progression", babLabel(classData.babProgression)],
    ["Save Progression", `Fort ${saveLabel(classData.saves.fortitude)} / Ref ${saveLabel(classData.saves.reflex)} / Will ${saveLabel(classData.saves.will)}`],
    ["Spellcasting Ability", classData.spellcastingAbility ? (ABILITY_NAMES[classData.spellcastingAbility] ?? classData.spellcastingAbility) : "None"],
    ["Armor Proficiency", list((classData.armorProficiency ?? []).map((entry) => entry === "shields" ? "Shields" : `${entry[0].toUpperCase()}${entry.slice(1)}`))],
    ["Skill Points / Level", `${classData.skillPoints}`],
    ["Allowed Races", list(ALLOWED_RACES_BY_CLASS[classKey] ?? [])],
    ["Class Skills", list(EQRPG.classSkills?.[classKey] ?? [])],
    ["Starting Gold", `${EQRPG.startingGold?.[classKey] ?? 0} gp`],
    ["Starter Package", summarizeStarterKit(classKey)],
  ].map((row) => row.map((cell) => esc(cell)))
)}`)),
]);

const CHAPTER_FOUR = chapterEntry("Chapter Four: Skills", [
  textPage("Overview of Skills", 100, `${h2("Overview of Skills")}${p("Use this chapter to browse the current audited skill list and class-skill access. Use the EQ Skills compendium for exact skill item details.")}`),
  textPage("Skill Points by Class", 200, `
${h2("Skill Points by Class")}
${table(
  ["Class", "Skill Points / Level", "Class Skills"],
  Object.entries(CLASS_NAMES).map(([classKey, label]) => [
    esc(label),
    esc(`${EQRPG.classes[classKey]?.skillPoints ?? 0}`),
    esc(list(EQRPG.classSkills?.[classKey] ?? [])),
  ])
)}`),
  ...chunk([...SAMPLE_SKILLS].sort((a, b) => a.name.localeCompare(b.name)), 20).map((group, index) => textPage(`Skill Descriptions (${index + 1})`, 300 + (index * 100), `
${h2("Skill Descriptions")}
${table(
  ["Skill", "Ability", "Flags"],
  group.map((skill) => [
    esc(skill.name),
    esc(ABILITY_NAMES[skill.system.ability] ?? skill.system.ability ?? ""),
    esc([
      skill.system.trainedOnly ? "Trained Only" : "",
      skill.system.armorCheckPenalty ? "Armor Check Penalty" : "",
      skill.system.languageDependent ? "Language-Dependent" : "",
      skill.system.isTradeskill ? "Tradeskill" : "",
    ].filter(Boolean).join(", ") || "-"),
  ])
)}`)),
]);

const CHAPTER_FIVE = chapterEntry("Chapter Five: Feats", [
  textPage("Acquiring Feats", 100, `${h2("Acquiring Feats")}${p("The EQ Feats compendium has been audited against the PHB and now tracks category, prerequisites, benefit text, special text, and automation notes.")}`),
  textPage("Types of Feats", 200, `
${h2("Types of Feats")}
${table(
  ["Category", "Count"],
  Object.entries(FEAT_CATEGORIES).map(([key, label]) => [
    esc(label),
    esc(`${SAMPLE_FEATS.filter((feat) => feat.system.category === key).length}`),
  ])
)}`),
  ...Object.entries(FEAT_CATEGORIES).flatMap(([categoryKey, label], categoryIndex) =>
    chunk(SAMPLE_FEATS.filter((feat) => feat.system.category === categoryKey).sort((a, b) => a.name.localeCompare(b.name)), 18)
      .map((group, groupIndex) => textPage(`${label} Feats${chunk(SAMPLE_FEATS.filter((feat) => feat.system.category === categoryKey), 18).length > 1 ? ` (${groupIndex + 1})` : ""}`, 300 + (categoryIndex * 300) + (groupIndex * 100), `
${h2(`${label} Feats`)}
${table(
  ["Feat", "Prerequisites", "Benefit"],
  group.map((feat) => [
    esc(feat.name),
    esc(feat.system.prerequisites || "None"),
    esc(feat.system.benefit || ""),
  ])
)}`))
  ),
]);

const CHAPTER_SIX = chapterEntry("Chapter Six: Description", [
  textPage("Alignment", 100, `${h2("Alignment")}${table(["Code", "Alignment"], ALIGNMENTS.map(([code, label]) => [esc(code), esc(label)]))}`),
  textPage("Religion", 200, `
${h2("Religion")}
${table(
  ["Deity", "Domain", "Alignment"],
  Object.values(EQRPG.deities).map((deity) => [esc(deity.label), esc(deity.domain), esc(deity.alignment)])
)}`),
  textPage("Faction", 300, `
${h2("Faction")}
${table(
  ["Standing", "Minimum"],
  (EQRPG.factionStandings ?? []).map((tier) => [esc(tier.key), esc(`${tier.min}`)])
)}
${p("Faction is central to how Norrath reacts to a character.")}`),
  textPage("Vital Statistics", 400, `${h2("Vital Statistics")}${p("Use the sheet biography and identity fields for the personal details covered by this chapter.")}`),
]);

const CHAPTER_SEVEN = chapterEntry("Chapter Seven: Equipment", [
  textPage("Wealth and Money", 100, `
${h2("Wealth and Money")}
${table(
  ["Class", "Starting Gold"],
  Object.entries(CLASS_NAMES).map(([classKey, label]) => [esc(label), esc(`${EQRPG.startingGold?.[classKey] ?? 0} gp`)])
)}
${p("The audited item compendiums now carry the Chapter Seven data directly.")}`),
  textPage("Weapons", 200, `
${h2("Weapons")}
${table(
  ["Proficiency", "Count"],
  ["simple", "martial", "exotic"].map((kind) => [
    esc(`${kind[0].toUpperCase()}${kind.slice(1)}`),
    esc(`${SAMPLE_WEAPONS.filter((weapon) => weapon.system.proficiency === kind).length}`),
  ])
)}`),
  ...chunk([...SAMPLE_WEAPONS].sort((a, b) => a.name.localeCompare(b.name)), 18).map((group, index) => textPage(`Weapon Tables (${index + 1})`, 300 + (index * 100), `
${h2("Weapon Tables")}
${table(
  ["Weapon", "Damage", "Crit", "Range", "Properties"],
  group.map((weapon) => [
    esc(weapon.name),
    esc(`${weapon.system.damage || "-"} ${weapon.system.damageType || ""}`.trim()),
    esc(`${weapon.system.critRange ?? 20}-${20} x${weapon.system.critMult ?? 2}`),
    esc(`${weapon.system.range ?? 0}`),
    esc(list(weapon.system.properties ?? [])),
  ])
)}`)),
  textPage("Armor", 700, `
${h2("Armor")}
${table(
  ["Armor", "Type", "AC", "Max DEX", "Check", "Failure"],
  SAMPLE_ARMOR.sort((a, b) => a.name.localeCompare(b.name)).map((armor) => [
    esc(armor.name),
    esc(armor.system.type),
    esc(`${armor.system.acBonus ?? 0}`),
    esc(armor.system.maxDexBonus == null ? "-" : `${armor.system.maxDexBonus}`),
    esc(`${armor.system.checkPenalty ?? 0}`),
    esc(`${armor.system.spellFailure ?? 0}%`),
  ])
)}`),
  textPage("Goods and Services", 800, `
${h2("Goods and Services")}
${table(
  ["Category", "Count"],
  [...new Set(SAMPLE_EQUIPMENT.map((item) => item.system.itemCategory || "gear"))].sort((a, b) => a.localeCompare(b)).map((category) => [
    esc(category),
    esc(`${SAMPLE_EQUIPMENT.filter((item) => (item.system.itemCategory || "gear") === category).length}`),
  ])
)}
${p("Food, water, containers, tools, clothing, field gear, and ammunition now live in EQ Equipment instead of being mixed into consumables.")}`),
  ...chunk([...SAMPLE_EQUIPMENT].sort((a, b) => a.name.localeCompare(b.name)), 18).map((group, index) => textPage(`Equipment Tables (${index + 1})`, 900 + (index * 100), `
${h2("Equipment Tables")}
${table(
  ["Item", "Category", "Price", "Weight"],
  group.map((item) => [
    esc(item.name),
    esc(item.system.itemCategory || "gear"),
    esc(`${item.system.price ?? 0}`),
    esc(`${item.system.weight ?? 0}`),
  ])
)}`)),
  textPage("Special and Superior Items", 1200, `${h2("Special and Superior Items")}${p("Use EQ Weapons, EQ Armor, and EQ Equipment for special properties, ammunition support, shields, nets, and other superior-item behavior.")}`),
]);

const BOOK_TWO = chapterEntry("Book Two: Songs and Spells", [
  textPage("Songs and Spells", 100, `${h2("Songs and Spells")}${p("Book Two covers how magic works before it breaks out individual songs and spell lists.")}`),
]);

const CHAPTER_EIGHT = chapterEntry("Chapter Eight: Using Magic", [
  textPage("Preparing Spells and Songs", 100, `${h2("Preparing Spells and Songs")}${p("Spellcasters and bards are both supported, but they do not function identically. Use the class pages and spell compendium together for exact play behavior.")}`),
  textPage("Spellcasting", 200, `
${h2("Spellcasting")}
${table(
  ["Delivery Type", "Meaning"],
  [
    ["Utility", "Resolves without attack-roll damage logic"],
    ["Direct Attack", "Uses spell attack logic against a target"],
    ["Save Spell", "Uses save type and save-effect logic"],
  ].map((row) => row.map((cell) => esc(cell)))
)}`),
  textPage("Schools of Magic", 300, `
${h2("Schools of Magic")}
${table(
  ["School", "Count"],
  [...new Set(SAMPLE_SPELLS.map((spell) => spell.system.school || "Unknown"))].sort((a, b) => a.localeCompare(b)).map((school) => [
    esc(school),
    esc(`${SAMPLE_SPELLS.filter((spell) => (spell.system.school || "Unknown") === school).length}`),
  ])
)}`),
  textPage("Special Abilities", 400, `${h2("Special Abilities")}${p("Magical special abilities include class features, song performance, turning or rebuking, and other non-standard spell effects.")}`),
]);

const CHAPTER_NINE = chapterEntry("Chapter Nine: Songs", [
  textPage("Performing a Song", 100, `${h2("Performing a Song")}${p("Bard songs are a distinct PHB subsystem. Use this chapter to browse songs by level and the EQ Spells pack for exact song effects.")}`),
  textPage("Song Descriptions", 200, `
${h2("Song Descriptions")}
${table(
  ["Level", "Songs"],
  [...(SPELLS_BY_CLASS.bard ?? new Map()).entries()].sort((a, b) => a[0] - b[0]).map(([level, names]) => [esc(`${level}`), esc(names.join(", "))])
)}`),
]);

const CHAPTER_TEN = chapterEntry("Chapter Ten: Spells", [
  textPage("Spell Descriptions", 100, `${h2("Spell Descriptions")}${p("Use these pages as the handbook spell-list index and the EQ Spells compendium for exact mana, range, duration, save logic, and effect text.")}`),
  ...Object.entries(CLASS_NAMES)
    .filter(([classKey]) => classKey !== "bard")
    .map(([classKey, label], index) => textPage(`${label} Spell List`, 200 + (index * 100), `
${h2(`${label} Spell List`)}
${table(
  ["Level", "Spells"],
  [...(SPELLS_BY_CLASS[classKey] ?? new Map()).entries()].sort((a, b) => a[0] - b[0]).map(([level, names]) => [esc(`${level}`), esc(names.join(", "))])
)}`)),
]);

const BOOK_THREE = chapterEntry("Book Three: Playing the Game", [
  textPage("Playing the Game", 100, `${h2("Playing the Game")}${p("Book Three focuses on actual table procedure: adventuring, movement, carrying, experience, and combat.")}`),
]);

const CHAPTER_ELEVEN = chapterEntry("Chapter Eleven: Adventuring", [
  textPage("How Far Can I See?", 100, `${h2("How Far Can I See?")}${p("Light sources, infravision, ultravision, darkness, and line of sight all matter in EverQuest-style adventuring.")}`),
  textPage("How Fast Can I Move?", 200, `
${h2("How Fast Can I Move?")}
${table(
  ["Race", "Base Speed"],
  Object.entries(EQRPG.races).map(([raceKey, race]) => [esc(RACE_NAMES[raceKey] ?? raceKey), esc(`${race.speed} ft`)])
)}`),
  textPage("How Much Can I Carry?", 300, `${h2("How Much Can I Carry?")}${p("The sheet tracks encumbrance from carried item weight and quantity, which matters much more now that goods and services are represented as real inventory.")}`),
  textPage("Experience", 400, `${h2("Experience")}${p("Experience drives level gains and access to stronger saves, attacks, spells, and class features.")}`),
]);

const CHAPTER_TWELVE = chapterEntry("Chapter Twelve: Combat", [
  textPage("The Basics", 100, `
${h2("The Basics")}
${table(
  ["Combat Element", "Reference"],
  [
    ["Armor Class", "Sheet combat tab and EQ Armor"],
    ["Attack Rolls", "Sheet combat and EQ Weapons"],
    ["Damage", "Chat cards, weapon rolls, spell effects"],
    ["Initiative", "Sheet combat tab"],
    ["Saves", "Sheet combat tab and spell chat cards"],
  ].map((row) => row.map((cell) => esc(cell)))
)}`),
  textPage("Surprise", 200, `${h2("Surprise")}${p("Vision, stealth, perception, and positioning decide who acts freely in the opening moments of a fight.")}`),
  textPage("Initiative: Who Goes First?", 300, `${h2("Initiative: Who Goes First?")}${p("The combat tab supports direct initiative rolling so Chapter Twelve can be resolved from the character sheet.")}`),
  textPage("Actions", 400, `${h2("Actions")}${p("Combat turns are shaped by action economy: attacks, movement, spellcasting, item use, and special options.")}`),
  textPage("Armor Class", 500, `${h2("Armor Class")}${p("Armor Class is built from base defense, armor, shield, Dexterity, natural armor, and miscellaneous modifiers.")}`),
  textPage("Attack Rolls", 600, `${h2("Attack Rolls")}${p("Projectile ammo, shield bash, nets, trip, and disarm are now represented in the combat flow and item automation.")}`),
  textPage("Damage", 700, `${h2("Damage")}${p("Damage is resolved through weapon rolls, spell effects, and class-specific features, with apply-damage chat controls for play speed.")}`),
  textPage("Tables", 800, `${h2("Tables")}${p("The most-used PHB quick tables are reflected on the sheet and in the audited compendium data used during play.")}`),
]);

export const PHB_JOURNALS = [
  INTRODUCTION,
  BOOK_ONE,
  CHAPTER_ONE,
  CHAPTER_TWO,
  CHAPTER_THREE,
  CHAPTER_FOUR,
  CHAPTER_FIVE,
  CHAPTER_SIX,
  CHAPTER_SEVEN,
  BOOK_TWO,
  CHAPTER_EIGHT,
  CHAPTER_NINE,
  CHAPTER_TEN,
  BOOK_THREE,
  CHAPTER_ELEVEN,
  CHAPTER_TWELVE,
];
