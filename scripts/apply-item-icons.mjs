import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const sourceDir = path.join(rootDir, "module", "packs", "source");
const mappingPath = path.join(sourceDir, "item-icons.csv");
const dryRun = process.argv.includes("--dry-run");
const strict = process.argv.includes("--strict");

const SOURCE_FILES = {
  weapon: "weapons.json",
  armor: "armor.json",
  equipment: "equipment.json",
  consumable: "consumables.json",
};

function parseCsvLine(line) {
  const values = [];
  let current = "";
  let quoted = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const next = line[i + 1];
    if (quoted && char === "\"" && next === "\"") {
      current += "\"";
      i++;
    } else if (char === "\"") {
      quoted = !quoted;
    } else if (!quoted && char === ",") {
      values.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  values.push(current);
  return values;
}

function readIconMap() {
  if (!fs.existsSync(mappingPath)) {
    throw new Error(`Missing ${path.relative(rootDir, mappingPath)}. Run scripts/generate-item-icon-map.mjs first.`);
  }
  const lines = fs.readFileSync(mappingPath, "utf8").split(/\r?\n/).filter(Boolean);
  const headers = parseCsvLine(lines[0]).map((header) => header.trim());
  const typeIndex = headers.indexOf("type");
  const nameIndex = headers.indexOf("name");
  const iconIndex = headers.indexOf("icon");
  if (typeIndex < 0 || nameIndex < 0 || iconIndex < 0) {
    throw new Error("item-icons.csv must have type,name,icon columns.");
  }

  const rows = [];
  for (const [lineNumber, line] of lines.slice(1).entries()) {
    const values = parseCsvLine(line);
    rows.push({
      line: lineNumber + 2,
      type: String(values[typeIndex] ?? "").trim(),
      name: String(values[nameIndex] ?? "").trim(),
      icon: String(values[iconIndex] ?? "").trim(),
    });
  }
  return rows;
}

function normalizeIconPath(icon) {
  let value = String(icon ?? "").trim().replaceAll("\\", "/");
  if (!value) return "";
  if (/^\d{1,4}$/.test(value)) value = `item_${value.padStart(4, "0")}.png`;
  if (/^item_\d+$/i.test(value)) value = `${value}.png`;
  if (/^item_\d+\.png$/i.test(value)) value = `systems/eqrpg/icons/items/${value}`;
  if (value.startsWith("icons/items/")) value = `systems/eqrpg/${value}`;
  if (!value.startsWith("systems/eqrpg/")) {
    throw new Error(`Icon "${icon}" must be item_####.png or a systems/eqrpg path.`);
  }
  return value;
}

function iconExists(iconPath) {
  const relative = iconPath.replace(/^systems\/eqrpg\//, "");
  return fs.existsSync(path.join(rootDir, relative));
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n");
}

const rows = readIconMap();
const mappings = new Map();
const errors = [];

for (const row of rows) {
  if (!row.type && !row.name && !row.icon) continue;
  if (!SOURCE_FILES[row.type]) {
    errors.push(`Line ${row.line}: unknown item type "${row.type}".`);
    continue;
  }
  if (!row.name) {
    errors.push(`Line ${row.line}: missing item name.`);
    continue;
  }
  if (!row.icon) continue;

  let iconPath = "";
  try {
    iconPath = normalizeIconPath(row.icon);
  } catch (err) {
    errors.push(`Line ${row.line}: ${err.message}`);
    continue;
  }
  if (!iconExists(iconPath)) {
    errors.push(`Line ${row.line}: icon file does not exist: ${iconPath}`);
    continue;
  }
  mappings.set(`${row.type}::${row.name.toLowerCase()}`, iconPath);
}

let updated = 0;
let mapped = 0;
let missing = 0;

for (const [type, filename] of Object.entries(SOURCE_FILES)) {
  const filePath = path.join(sourceDir, filename);
  const entries = JSON.parse(fs.readFileSync(filePath, "utf8"));
  let changed = false;

  for (const entry of entries) {
    const iconPath = mappings.get(`${type}::${String(entry.name).toLowerCase()}`);
    if (!iconPath) {
      missing++;
      continue;
    }
    mapped++;
    if (entry.img !== iconPath) {
      entry.img = iconPath;
      changed = true;
      updated++;
    }
  }

  if (changed && !dryRun) writeJson(filePath, entries);
}

if (errors.length) {
  for (const error of errors) console.error(error);
  if (strict) process.exit(1);
}

console.log(`${dryRun ? "Would update" : "Updated"} ${updated} item image field(s).`);
console.log(`Mapped rows matched ${mapped} item(s); ${missing} item source row(s) have no mapping yet.`);
if (errors.length && !strict) console.log(`${errors.length} mapping issue(s) were skipped. Use --strict to fail on them.`);
