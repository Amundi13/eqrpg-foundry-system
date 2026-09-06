import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const moduleRoot = path.join(root, "module");

function collectFiles(directory, extension) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...collectFiles(fullPath, extension));
    else if (entry.name.endsWith(extension)) files.push(fullPath);
  }
  return files;
}

const moduleFiles = collectFiles(moduleRoot, ".mjs");
const failures = [];

for (const file of moduleFiles) {
  const relative = path.relative(root, file);
  const syntax = spawnSync(process.execPath, ["--check", file], { encoding: "utf8" });
  if (syntax.status !== 0) failures.push(`${relative}: ${syntax.stderr.trim()}`);

  const source = fs.readFileSync(file, "utf8");
  if (/[âÃÂ�]/.test(source)) failures.push(`${relative}: possible mojibake encoding`);

  for (const match of source.matchAll(/["']systems\/eqrpg\/(templates\/[^"']+)["']/g)) {
    const templatePath = path.join(root, match[1]);
    if (!fs.existsSync(templatePath)) failures.push(`${relative}: missing ${match[1]}`);
  }

  const legacyPatterns = [
    [/\bActors\.registerSheet\b/, "legacy Actors.registerSheet"],
    [/\bItems\.registerSheet\b/, "legacy Items.registerSheet"],
    [/\bDialog\.(?:prompt|confirm|wait)\b/, "ApplicationV1 Dialog helper"],
    [/\.render\(true\)/, "legacy render(true) call"],
    [/Hooks\.on\(["']renderChatMessage["']/, "V12 renderChatMessage hook"],
    [/(?<![.\w])fromUuid\(/, "global fromUuid helper"],
    [/(?<![.\w])TextEditor\./, "global TextEditor helper"],
  ];
  for (const [pattern, label] of legacyPatterns) {
    if (pattern.test(source)) failures.push(`${relative}: ${label}`);
  }
}

const manifest = JSON.parse(fs.readFileSync(path.join(root, "system.json"), "utf8"));
if (manifest.compatibility?.verified !== "14.365") {
  failures.push("system.json: compatibility.verified must be 14.365");
}
if (String(manifest.compatibility?.maximum) !== "14") {
  failures.push("system.json: compatibility.maximum must be 14");
}

const manifestFiles = [
  ...(manifest.esmodules ?? []),
  ...(manifest.styles ?? []),
  ...(manifest.languages ?? []).map((language) => language.path),
];
for (const relative of manifestFiles) {
  if (!fs.existsSync(path.join(root, relative))) failures.push(`system.json: missing ${relative}`);
}
for (const pack of manifest.packs ?? []) {
  if (!fs.existsSync(path.join(root, pack.path))) failures.push(`system.json: missing pack ${pack.path}`);
}

for (const directory of [path.join(root, "lang"), path.join(root, "module", "packs", "source")]) {
  for (const file of collectFiles(directory, ".json")) {
    try {
      JSON.parse(fs.readFileSync(file, "utf8"));
    } catch (error) {
      failures.push(`${path.relative(root, file)}: invalid JSON (${error.message})`);
    }
  }
}

if (failures.length) {
  console.error(`V14 compatibility validation failed:\n- ${failures.join("\n- ")}`);
  process.exit(1);
}

console.log(`V14 compatibility validation passed (${moduleFiles.length} runtime modules checked).`);
