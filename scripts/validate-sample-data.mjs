import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const sampleDataUrl = pathToFileURL(path.resolve(rootDir, "module", "packs", "sample-data.mjs")).href;
const phbDataUrl = pathToFileURL(path.resolve(rootDir, "module", "packs", "phb-data.mjs")).href;
const overridePath = path.resolve(rootDir, "module", "packs", "source", "phb-class-overrides.json");

const sampleModule = await import(`${sampleDataUrl}?t=${Date.now()}`);
const phbModule = await import(`${phbDataUrl}?t=${Date.now()}`);
const CLASS_SPELL_OVERRIDES = fs.existsSync(overridePath)
  ? JSON.parse(fs.readFileSync(overridePath, "utf8"))
  : {};
const OVERRIDE_CLASSES = new Set(Object.keys(CLASS_SPELL_OVERRIDES));

const TRACKED_TYPES = new Set(["spell"]);
const SPELLS = sampleModule.SAMPLE_SPELLS.filter((entry) => TRACKED_TYPES.has(entry.type));
const spellIndex = new Map();

function normalizeName(name) {
  return String(name)
    .replace(/\s*\([^)]*\)\s*$/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/['’]/g, "")
    .replace(/[^a-zA-Z0-9: +\-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

for (const spell of SPELLS) {
  const key = normalizeName(spell.name);
  if (!spellIndex.has(key)) spellIndex.set(key, []);
  spellIndex.get(key).push(spell);
}

const PAGE_CLASS_MAP = {
  "Song Descriptions": ["bard"],
  "Beastlord Spell List": ["beastlord"],
  "Cleric Spell List": ["cleric"],
  "Druid Spell List": ["druid"],
  "Enchanter Spell List": ["enchanter"],
  "Magician Spell List": ["magician"],
  "Necromancer Spell List": ["necromancer"],
  "Paladin Spell List": ["paladin"],
  "Ranger Spell List": ["ranger"],
  "Shadow Knight Spell List": ["shadowknight"],
  "Shaman Spell List": ["shaman"],
  "Wizard Spell List": ["wizard"],
};

function parseTablesFromPage(page) {
  const sections = [];
  const regex = /<h2>(.*?)<\/h2>\s*<table><thead>.*?<\/thead><tbody>(.*?)<\/tbody><\/table>/gsi;
  let match;

  while ((match = regex.exec(page.text.content)) !== null) {
    sections.push({
      heading: match[1].replace(/<[^>]+>/g, "").trim(),
      body: match[2],
    });
  }

  return sections;
}

function parseRows(tableBody) {
  const rows = [];
  const rowRegex = /<tr><td>(.*?)<\/td><td>(.*?)<\/td><\/tr>/gsi;
  let match;

  while ((match = rowRegex.exec(tableBody)) !== null) {
    const level = Number(match[1].replace(/<[^>]+>/g, "").trim());
    const namesRaw = match[2].replace(/<[^>]+>/g, "").trim();
    const names = namesRaw
      .split(",")
      .map((name) => name.trim())
      .filter((name) => name && name !== "—");
    rows.push({ level, names });
  }

  return rows;
}

function getEffectiveLevel(spell, classId) {
  const entries = Array.isArray(spell?.system?.classLevels) ? spell.system.classLevels : [];
  for (const entry of entries) {
    const match = String(entry).match(/^([^:]+):(\d+)$/);
    if (!match) continue;
    if (match[1] === classId) return Number(match[2]);
  }
  return Number(spell.system?.spellLevel);
}

const errors = [];
const warnings = [];
const listedSpellKeys = new Set();

function validateSpellReference({ classId, level, displayName, pageName, heading }) {
  const normalized = normalizeName(displayName);
  const candidates = spellIndex.get(normalized) ?? [];
  const spell = candidates.find((entry) =>
    Array.isArray(entry.system?.classes) && entry.system.classes.includes(classId) && getEffectiveLevel(entry, classId) === level
  ) ?? candidates.find((entry) =>
    Array.isArray(entry.system?.classes) && entry.system.classes.includes(classId)
  ) ?? candidates[0];

  if (!spell) {
    errors.push(`[Missing] ${pageName} / ${heading}: "${displayName}" is listed for ${classId} ${level} but has no matching spell entry.`);
    return;
  }

  listedSpellKeys.add(`${spell.name}::${classId}`);

  if (!Array.isArray(spell.system?.classes) || !spell.system.classes.includes(classId)) {
    errors.push(`[Class] ${pageName} / ${heading}: "${spell.name}" is listed for ${classId} ${level} but classes are ${JSON.stringify(spell.system?.classes ?? [])}.`);
  }

  const effectiveLevel = getEffectiveLevel(spell, classId);
  if (effectiveLevel !== level) {
    errors.push(`[Level] ${pageName} / ${heading}: "${spell.name}" is listed at level ${level} for ${classId} but sample data has level ${effectiveLevel}.`);
  }
}

const spellChapters = phbModule.PHB_JOURNALS.filter((journal) =>
  journal.name === "Chapter Nine: Songs" || journal.name === "Chapter Ten: Spells"
);
if (!spellChapters.length) {
  throw new Error("Could not find 'Chapter Nine: Songs' or 'Chapter Ten: Spells' in PHB_JOURNALS.");
}

for (const chapter of spellChapters) {
  for (const page of chapter.pages) {
    if (!(page.name in PAGE_CLASS_MAP)) continue;

    const classIds = PAGE_CLASS_MAP[page.name];
    if (classIds.length === 1 && OVERRIDE_CLASSES.has(classIds[0])) continue;
    const sections = parseTablesFromPage(page);

    for (const section of sections) {
      const rows = parseRows(section.body);
      for (const row of rows) {
        for (const displayName of row.names) {
          for (const classId of classIds) {
            validateSpellReference({
              classId,
              level: row.level,
              displayName,
              pageName: page.name,
              heading: section.heading,
            });
          }
        }
      }
    }
  }
}

for (const [classId, levels] of Object.entries(CLASS_SPELL_OVERRIDES)) {
  for (const [levelKey, names] of Object.entries(levels)) {
    const level = Number(levelKey);
    for (const displayName of names) {
      validateSpellReference({
        classId,
        level,
        displayName,
        pageName: "PHB class spell overrides",
        heading: `${classId} level ${level}`,
      });
    }
  }
}

for (const spell of SPELLS) {
  const classes = Array.isArray(spell.system?.classes) ? spell.system.classes : [];
  for (const classId of classes) {
    if (!Object.values(PAGE_CLASS_MAP).flat().includes(classId)) continue;
    if (OVERRIDE_CLASSES.has(classId)) continue;
    const key = `${spell.name}::${classId}`;
    if (!listedSpellKeys.has(key)) {
      warnings.push(`[Unlisted] "${spell.name}" is assigned to ${classId} ${spell.system?.spellLevel} in sample data but was not found on a Chapter 9 class list.`);
    }
  }
}

if (errors.length) {
  console.error("EQRPG sample-data validation failed.\n");
  for (const error of errors) console.error(error);
  if (warnings.length) {
    console.error("\nWarnings:");
    for (const warning of warnings) console.error(warning);
  }
  process.exit(1);
}

console.log("EQRPG sample-data validation passed.");
if (warnings.length) {
  console.log("\nWarnings:");
  for (const warning of warnings) console.log(warning);
}
