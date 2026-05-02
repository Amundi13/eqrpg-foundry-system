import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const sourceDir = path.join(rootDir, "module", "packs", "source");
const outputPath = path.join(sourceDir, "item-icons.csv");

const SOURCE_FILES = [
  ["weapon", "weapons.json"],
  ["armor", "armor.json"],
  ["equipment", "equipment.json"],
  ["consumable", "consumables.json"],
];

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

function readExistingMap() {
  if (!fs.existsSync(outputPath)) return new Map();
  const lines = fs.readFileSync(outputPath, "utf8").split(/\r?\n/).filter(Boolean);
  const map = new Map();
  for (const line of lines.slice(1)) {
    const [type, name, icon] = parseCsvLine(line);
    if (!type || !name) continue;
    map.set(`${type}::${name}`, icon ?? "");
  }
  return map;
}

function csv(value) {
  const text = String(value ?? "");
  return /[",\r\n]/.test(text) ? `"${text.replaceAll("\"", "\"\"")}"` : text;
}

const existing = readExistingMap();
const rows = [["type", "name", "icon", "currentImg"]];

for (const [type, filename] of SOURCE_FILES) {
  const filePath = path.join(sourceDir, filename);
  const entries = JSON.parse(fs.readFileSync(filePath, "utf8"));
  for (const entry of entries) {
    const key = `${type}::${entry.name}`;
    rows.push([
      type,
      entry.name,
      existing.get(key) ?? "",
      entry.img ?? "",
    ]);
  }
}

const content = rows.map((row) => row.map(csv).join(",")).join("\n") + "\n";
fs.writeFileSync(outputPath, content);
console.log(`Wrote ${path.relative(rootDir, outputPath)} with ${rows.length - 1} item rows.`);
