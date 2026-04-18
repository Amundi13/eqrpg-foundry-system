import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { PHB_JOURNALS } from "../module/packs/phb-data.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const spellsSourcePath = path.join(rootDir, "module", "packs", "source", "spells.json");
const extractedSpellsPath = path.join(rootDir, "tmp_spell_entries_clean.json");
const phbExtractPath = path.join(rootDir, "tmp_phb_extract.txt");
const reportPath = path.join(rootDir, "tmp_spell_sync_report.json");

const PAGE_CLASS_MAP = {
  "Wizard Spells": ["wizard"],
  "Magician Spells": ["magician"],
  "Cleric Spells": ["cleric"],
  "Druid Spells": ["druid"],
  "Necromancer Spells": ["necromancer"],
  "Enchanter Spells": ["enchanter"],
  "Shaman Spells": ["shaman"],
  "Bard Songs": ["bard"],
  "Paladin & Shadow Knight Spells": ["paladin", "shadowknight"],
  "Ranger & Beastlord Spells": ["ranger", "beastlord"],
};

const CLASS_ABBREVIATIONS = {
  bard: "Brd",
  beastlord: "Bst",
  cleric: "Clr",
  druid: "Dru",
  enchanter: "Enc",
  magician: "Mag",
  necromancer: "Nec",
  paladin: "Pal",
  ranger: "Rng",
  shadowknight: "Shd",
  shaman: "Shm",
  wizard: "Wiz",
};

function normalizeName(name) {
  return String(name ?? "")
    .replace(/\s*\([^)]*\)\s*$/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/€/g, "e")
    .replace(/[’']/g, "")
    .replace(/0/g, "o")
    .replace(/[|]/g, "l")
    .replace(/0F/g, "of")
    .replace(/t>/g, "d")
    .replace(/[<{]/g, "k")
    .replace(/[>]/g, "d")
    .replace(/[^a-zA-Z0-9:+ -]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function sanitizeText(value) {
  return String(value ?? "")
    .replace(/[\uFFFD]/g, "")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function htmlParagraph(text) {
  return `<p>${text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>`;
}

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
      .filter((name) => name && name !== "—" && name !== "â€”");
    rows.push({ level, names });
  }

  return rows;
}

function buildSpellListIndex() {
  const chapter9 = PHB_JOURNALS.find((journal) => journal.name === "Chapter 9: Spell Lists");
  if (!chapter9) {
    throw new Error("Could not find 'Chapter 9: Spell Lists' in PHB_JOURNALS.");
  }

  const index = new Map();

  for (const page of chapter9.pages) {
    if (!(page.name in PAGE_CLASS_MAP)) continue;

    const pageClassIds = PAGE_CLASS_MAP[page.name];
    const sections = parseTablesFromPage(page);

    for (const section of sections) {
      let targetClassIds = pageClassIds;

      if (page.name === "Paladin & Shadow Knight Spells") {
        if (/Paladin/i.test(section.heading)) targetClassIds = ["paladin"];
        else if (/Shadow Knight/i.test(section.heading)) targetClassIds = ["shadowknight"];
      }

      if (page.name === "Ranger & Beastlord Spells") {
        if (/Ranger/i.test(section.heading)) targetClassIds = ["ranger"];
        else if (/Beastlord/i.test(section.heading)) targetClassIds = ["beastlord"];
      }

      const rows = parseRows(section.body);
      for (const row of rows) {
        for (const displayName of row.names) {
          const key = normalizeName(displayName);
          const existing = index.get(key) ?? {
            displayName,
            byClass: {},
          };

          for (const classId of targetClassIds) {
            existing.byClass[classId] = row.level;
          }

          index.set(key, existing);
        }
      }
    }
  }

  return index;
}

function loadJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function loadExtractedSpellIndex() {
  const raw = loadJson(extractedSpellsPath);
  if (!Array.isArray(raw)) {
    throw new Error("tmp_spell_entries_clean.json must be a JSON array.");
  }

  const extractedIndex = new Map();
  const extractedCandidates = [];
  for (const entry of raw) {
    const candidateNames = [
      entry.name_raw,
      entry.name_norm,
      entry["Spell Line"],
    ].filter(Boolean);

    for (const candidate of candidateNames) {
      const key = normalizeName(candidate);
      if (!key || extractedIndex.has(key)) continue;
      extractedIndex.set(key, entry);
      extractedCandidates.push({
        key,
        label: String(candidate),
        entry,
      });
    }
  }

  return { extractedIndex, extractedCandidates };
}

function levenshtein(left, right) {
  const a = String(left ?? "");
  const b = String(right ?? "");
  const dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));

  for (let i = 0; i <= a.length; i += 1) dp[i][0] = i;
  for (let j = 0; j <= b.length; j += 1) dp[0][j] = j;

  for (let i = 1; i <= a.length; i += 1) {
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost,
      );
    }
  }

  return dp[a.length][b.length];
}

function levelMapMatches(entry, levelMap) {
  const extractedLevelMap = entry?.level_map && typeof entry.level_map === "object" ? entry.level_map : {};
  const requestedClasses = Object.keys(levelMap ?? {});
  if (!requestedClasses.length) return true;
  if (!Object.keys(extractedLevelMap).length) return true;

  return requestedClasses.some((classId) => {
    const extractedLevel = Number(extractedLevelMap[classId]);
    const requestedLevel = Number(levelMap[classId]);
    return Number.isFinite(extractedLevel) && extractedLevel === requestedLevel;
  });
}

function findBestExtractMatch(displayName, levelMap, extractedCandidates) {
  const target = normalizeName(displayName);
  let best = null;
  let secondBest = null;

  for (const candidate of extractedCandidates) {
    if (!levelMapMatches(candidate.entry, levelMap)) continue;
    const score = levenshtein(target, candidate.key);
    const row = { ...candidate, score };

    if (!best || row.score < best.score) {
      secondBest = best;
      best = row;
    } else if (!secondBest || row.score < secondBest.score) {
      secondBest = row;
    }
  }

  if (!best) return null;

  const maxScore = target.length >= 16 ? 6 : 4;
  const clearWinner = !secondBest || secondBest.score - best.score >= 2 || secondBest.entry === best.entry;
  if (best.score <= maxScore && clearWinner) {
    return best.entry;
  }

  return null;
}

function loadSpellListSummaryIndex() {
  const raw = fs.readFileSync(phbExtractPath, "utf8");
  const lines = raw.split(/\r?\n/);
  const summaryIndex = new Map();

  const bulletRegex = /^(.+?)\.\s+(.+?)\s*$/;
  for (const line of lines) {
    const trimmed = line.trim();
    const match = trimmed.match(bulletRegex);
    if (!match) continue;
    const name = sanitizeText(match[1]);
    const summary = sanitizeText(match[2]);
    if (!name || !summary) continue;
    if (name.length > 80 || summary.length > 240) continue;
    if (!/^[A-Za-z0-9' :\-]+$/.test(name)) continue;
    summaryIndex.set(normalizeName(name), {
      name,
      summary,
    });
  }

  return summaryIndex;
}

function deriveClassesFromLevelMap(levelMap = {}) {
  return Object.keys(levelMap).sort();
}

function deriveClassLevels(levelMap = {}) {
  return Object.entries(levelMap)
    .sort(([leftClass], [rightClass]) => leftClass.localeCompare(rightClass))
    .map(([classId, level]) => `${classId}:${level}`);
}

function formatSpellLevelLabel(levelMap = {}) {
  return Object.entries(levelMap)
    .sort(([leftClass], [rightClass]) => leftClass.localeCompare(rightClass))
    .map(([classId, level]) => `${CLASS_ABBREVIATIONS[classId] ?? classId}:${level}`)
    .join(", ");
}

function firstDescriptionParagraph(entry) {
  if (!Array.isArray(entry?.desc)) return "";
  const text = sanitizeText(entry.desc.join(" "))
    .replace(/===== PAGE \d+ =====/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return text;
}

function updateSpellFromExtract(spell, extract, levelMap) {
  if (!spell?.system) return;

  const system = spell.system;
  const minLevel = Math.min(...Object.values(levelMap));

  system.spellLevel = Number.isFinite(minLevel) ? minLevel : system.spellLevel;
  system.classes = deriveClassesFromLevelMap(levelMap);
  system.classLevels = deriveClassLevels(levelMap);

  if (!extract) return;

  if (extract.school_clean) system.school = sanitizeText(extract.school_clean);
  if (extract.casting_clean) system.castingTime = sanitizeText(extract.casting_clean);
  if (extract.range_clean) system.range = sanitizeText(extract.range_clean);
  if (extract.duration_clean) system.duration = sanitizeText(extract.duration_clean);
  if (typeof extract.recast_num === "number") system.recastTime = extract.recast_num;
  if (extract.save_clean) system.savingThrow = sanitizeText(extract.save_clean);
  if (extract.save_effect) system.saveEffect = sanitizeText(extract.save_effect);
  if (extract["Spell Line"]) system.spellLine = sanitizeText(extract["Spell Line"]);

  const mana = Number.parseInt(String(extract.Mana ?? ""), 10);
  if (Number.isFinite(mana)) {
    system.manaCost = mana;
  }

  const descriptionText = firstDescriptionParagraph(extract);
  if (descriptionText) {
    system.description = htmlParagraph(descriptionText);
    if (!system.effect || String(system.effect).trim().length < 12) {
      system.effect = descriptionText;
    }
  }

  if (!system.spellLine || !String(system.spellLine).trim()) {
    system.spellLine = sanitizeText(extract.name_raw ?? spell.name);
  }
}

function createSpellFromExtract(displayName, extract, levelMap) {
  const descriptionText = firstDescriptionParagraph(extract);
  const minLevel = Math.min(...Object.values(levelMap));
  const classes = deriveClassesFromLevelMap(levelMap);
  const classLevels = deriveClassLevels(levelMap);

  return {
    name: displayName,
    type: "spell",
    img: "",
    system: {
      spellLevel: Number.isFinite(minLevel) ? minLevel : 1,
      manaCost: Number.parseInt(String(extract?.Mana ?? "0"), 10) || 0,
      school: sanitizeText(extract?.school_clean ?? ""),
      castingTime: sanitizeText(extract?.casting_clean ?? "1 action"),
      range: sanitizeText(extract?.range_clean ?? "Close (25 ft. + 5 ft./2 levels)"),
      duration: sanitizeText(extract?.duration_clean ?? "Instantaneous"),
      damageFormula: "",
      healFormula: "",
      savingThrow: sanitizeText(extract?.save_clean ?? ""),
      effect: descriptionText,
      recastTime: typeof extract?.recast_num === "number" ? extract.recast_num : 0,
      classes,
      classLevels,
      spellLine: sanitizeText(extract?.["Spell Line"] ?? displayName),
      saveEffect: sanitizeText(extract?.save_effect ?? ""),
      saveDC: "",
      deliveryType: "utility",
      attackMode: "",
      attackBonus: 0,
      description: descriptionText ? htmlParagraph(descriptionText) : "",
    },
  };
}

function guessDeliveryType(summary) {
  const text = String(summary ?? "").toLowerCase();
  if (/\b(hit|damage|deals|heals|heals?|restores?)\b/.test(text)) return "utility";
  return "utility";
}

function createSpellFromSummary(displayName, summaryEntry, levelMap) {
  const summary = sanitizeText(summaryEntry?.summary ?? "");
  const minLevel = Math.min(...Object.values(levelMap));
  const classes = deriveClassesFromLevelMap(levelMap);
  const classLevels = deriveClassLevels(levelMap);

  return {
    name: displayName,
    type: "spell",
    img: "",
    system: {
      spellLevel: Number.isFinite(minLevel) ? minLevel : 1,
      manaCost: 0,
      school: "",
      castingTime: "1 action",
      range: "",
      duration: "",
      damageFormula: "",
      healFormula: "",
      savingThrow: "",
      effect: summary,
      recastTime: 0,
      classes,
      classLevels,
      spellLine: displayName,
      saveEffect: "",
      saveDC: "",
      deliveryType: guessDeliveryType(summary),
      attackMode: "",
      attackBonus: 0,
      description: summary ? htmlParagraph(summary) : "",
    },
  };
}

const spellListIndex = buildSpellListIndex();
const { extractedIndex, extractedCandidates } = loadExtractedSpellIndex();
const spellListSummaryIndex = loadSpellListSummaryIndex();
const sourceSpells = loadJson(spellsSourcePath);

if (!Array.isArray(sourceSpells)) {
  throw new Error("module/packs/source/spells.json must be a JSON array.");
}

const sourceIndex = new Map();
for (const spell of sourceSpells) {
  sourceIndex.set(normalizeName(spell.name), spell);
}

const report = {
  updatedExisting: [],
  createdFromExtract: [],
  createdFromSummary: [],
  fuzzyMatches: [],
  missingFromExtract: [],
  duplicateNormalizedNames: [],
};

for (const [normalizedName, phbEntry] of spellListIndex.entries()) {
  const levelMap = phbEntry.byClass;
  const sourceSpell = sourceIndex.get(normalizedName);
  const extractedSpell = extractedIndex.get(normalizedName) ?? findBestExtractMatch(phbEntry.displayName, levelMap, extractedCandidates);
  const summaryEntry = spellListSummaryIndex.get(normalizedName);

  if (sourceSpell) {
    updateSpellFromExtract(sourceSpell, extractedSpell, levelMap);
    report.updatedExisting.push(sourceSpell.name);
    if (!extractedIndex.get(normalizedName) && extractedSpell) {
      report.fuzzyMatches.push({
        name: phbEntry.displayName,
        matchedTo: extractedSpell.name_raw ?? extractedSpell.name_norm ?? extractedSpell["Spell Line"] ?? "",
      });
    }
    continue;
  }

  if (extractedSpell) {
    const created = createSpellFromExtract(phbEntry.displayName, extractedSpell, levelMap);
    sourceSpells.push(created);
    sourceIndex.set(normalizedName, created);
    report.createdFromExtract.push(created.name);
    if (!extractedIndex.get(normalizedName)) {
      report.fuzzyMatches.push({
        name: phbEntry.displayName,
        matchedTo: extractedSpell.name_raw ?? extractedSpell.name_norm ?? extractedSpell["Spell Line"] ?? "",
      });
    }
    continue;
  }

  if (summaryEntry) {
    const created = createSpellFromSummary(phbEntry.displayName, summaryEntry, levelMap);
    sourceSpells.push(created);
    sourceIndex.set(normalizedName, created);
    report.createdFromSummary.push(created.name);
    continue;
  }

  report.missingFromExtract.push({
    name: phbEntry.displayName,
    classes: formatSpellLevelLabel(levelMap),
  });
}

sourceSpells.sort((left, right) => left.name.localeCompare(right.name));

fs.writeFileSync(spellsSourcePath, `${JSON.stringify(sourceSpells, null, 2)}\n`);
fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);

console.log(`Updated ${report.updatedExisting.length} existing spells from PHB data.`);
console.log(`Created ${report.createdFromExtract.length} missing spells from extracted PHB entries.`);
console.log(`Still missing ${report.missingFromExtract.length} PHB-listed spells without extracted matches.`);
console.log(`Wrote ${path.relative(rootDir, reportPath)}.`);
