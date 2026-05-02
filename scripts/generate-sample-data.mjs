import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const sourceDir = path.join(rootDir, "module", "packs", "source");
const outputPath = path.join(rootDir, "module", "packs", "sample-data.mjs");

const SOURCE_FILES = [
  ["SAMPLE_SPELLS", "spells.json", { allowDuplicateNames: true }],
  ["SAMPLE_FEATS", "feats.json"],
  ["SAMPLE_SKILLS", "skills.json"],
  ["SAMPLE_WEAPONS", "weapons.json"],
  ["SAMPLE_ARMOR", "armor.json"],
  ["SAMPLE_EQUIPMENT", "equipment.json"],
  ["SAMPLE_CONSUMABLES", "consumables.json"],
  ["SAMPLE_MONSTERS", "monsters.json"],
];

function readJsonArray(filename) {
  const filePath = path.join(sourceDir, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed)) {
    throw new Error(`${path.relative(rootDir, filePath)} must contain a JSON array.`);
  }
  return parsed;
}

function validateEntries(entries, label, { allowDuplicateNames = false } = {}) {
  const seen = new Set();

  for (const [index, entry] of entries.entries()) {
    if (!entry || typeof entry !== "object" || Array.isArray(entry)) {
      throw new Error(`${label}[${index}] must be an object.`);
    }
    if (typeof entry.name !== "string" || !entry.name.trim()) {
      throw new Error(`${label}[${index}] is missing a valid "name".`);
    }
    if (typeof entry.type !== "string" || !entry.type.trim()) {
      throw new Error(`${label}[${index}] is missing a valid "type".`);
    }

    const key = entry.name.trim().toLowerCase();
    if (!allowDuplicateNames && seen.has(key)) {
      throw new Error(`${label} contains a duplicate entry named "${entry.name}".`);
    }
    seen.add(key);
  }
}

function formatExport(name, data) {
  return `export const ${name} = ${JSON.stringify(data, null, 2)};\n`;
}

const datasets = SOURCE_FILES.map(([exportName, filename, options = {}]) => {
  const data = readJsonArray(filename);
  validateEntries(data, exportName, options);
  return [exportName, filename, data];
});

const lines = [
  "/**",
  " * Sample compendium content for EverQuest RPG.",
  " *",
  " * THIS FILE IS GENERATED. Edit the JSON sources in module/packs/source/",
  " * and rerun `node scripts/generate-sample-data.mjs`.",
  " */",
  "",
];

for (const [exportName, filename, data] of datasets) {
  lines.push(`// Source: module/packs/source/${filename}`);
  lines.push(formatExport(exportName, data).trimEnd());
  lines.push("");
}

fs.writeFileSync(outputPath, `${lines.join("\n").trimEnd()}\n`);

console.log(`Generated ${path.relative(rootDir, outputPath)} from ${SOURCE_FILES.length} source files.`);
