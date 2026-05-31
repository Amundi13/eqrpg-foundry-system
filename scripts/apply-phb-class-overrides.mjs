import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const spellsPath = path.join(rootDir, "module", "packs", "source", "spells.json");
const overridesPath = path.join(rootDir, "module", "packs", "source", "phb-class-overrides.json");

const spells = JSON.parse(fs.readFileSync(spellsPath, "utf8"));
const overrides = JSON.parse(fs.readFileSync(overridesPath, "utf8"));

const spellIndex = new Map(spells.map((spell) => [spell.name, spell]));

const levelOneStubs = {
  "Dance of the Fireflies": {
    spellLevel: 1,
    manaCost: 2,
    school: "Evocation [Light]",
    castingTime: "1 action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    duration: "10 minutes/level",
    effect: "Creates a globe of fireflies that sheds gentle light.",
    description: "<p>Creates a globe of fireflies.</p>",
    deliveryType: "utility",
  },
  "Lull Animal": {
    spellLevel: 1,
    manaCost: 2,
    school: "Enchantment [Mind-Affecting]",
    castingTime: "1 action",
    range: "Medium (100 ft. + 10 ft./level)",
    duration: "2 minutes (D)",
    effect: "Hypnotizes an animal, beast, or vermin.",
    description: "<p>Hypnotizes animal, beast, or vermin.</p>",
    deliveryType: "save",
    savingThrow: "will",
    saveEffect: "negates",
  },
  "Panic Animal": {
    spellLevel: 1,
    manaCost: 2,
    school: "Enchantment [Fear, Mind-Affecting]",
    castingTime: "1 action",
    range: "Medium (100 ft. + 10 ft./level)",
    duration: "1d6 rounds",
    effect: "Instills supernatural fear in an animal.",
    description: "<p>Instills supernatural fear in animal.</p>",
    deliveryType: "save",
    savingThrow: "will",
    saveEffect: "negates",
  },
  "Sense Animal": {
    spellLevel: 1,
    manaCost: 1,
    school: "Divination",
    castingTime: "1 action",
    range: "Personal",
    duration: "Instantaneous",
    effect: "The caster senses the direction to the nearest animal, beast, or vermin.",
    description: "<p>Caster senses direction to nearest animal, beast, or vermin.</p>",
    deliveryType: "utility",
  },
  "Skin Like Wood": {
    spellLevel: 1,
    manaCost: 3,
    school: "Alteration",
    castingTime: "1 action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    duration: "10 minutes/level",
    effect: "Grants the target +1 AC and +3 hit points.",
    description: "<p>Grants target +1 AC and +3 hit points.</p>",
    deliveryType: "utility",
  },
  "Cavorting Bones": {
    spellLevel: 1,
    manaCost: 4,
    school: "Necromancy [Summoning]",
    castingTime: "1 full round",
    range: "Close (25 ft. + 5 ft./2 levels)",
    duration: "10 minutes/level",
    effect: "Summons a type 1 skeletal pet.",
    description: "<p>Summons a type 1 skeletal pet.</p>",
    deliveryType: "utility",
  },
  "Coldlight": {
    spellLevel: 1,
    manaCost: 1,
    school: "Evocation [Cold, Light]",
    castingTime: "1 action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    duration: "10 minutes/level",
    effect: "Creates a ball of light.",
    description: "<p>Creates a ball of light.</p>",
    deliveryType: "utility",
  },
  "Disease Cloud": {
    spellLevel: 1,
    manaCost: 3,
    school: "Necromancy [Disease]",
    castingTime: "1 action",
    range: "Medium (100 ft. + 10 ft./level)",
    duration: "20 rounds",
    effect: "Deals 1 point of disease damage, plus 1 point every 2 rounds for 20 rounds.",
    description: "<p>1 point of disease damage, plus 1 point every 2 rounds for 20 rounds.</p>",
    deliveryType: "save",
    savingThrow: "fortitude",
    saveEffect: "partial",
  },
  "Locate Corpse": {
    spellLevel: 1,
    manaCost: 1,
    school: "Divination",
    castingTime: "1 action",
    range: "Personal",
    duration: "Instantaneous",
    effect: "The caster senses the direction to the nearest corpse.",
    description: "<p>Caster senses direction to nearest corpse.</p>",
    deliveryType: "utility",
  },
  "Siphon Strength": {
    spellLevel: 1,
    manaCost: 3,
    school: "Necromancy",
    castingTime: "1 action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    duration: "1 minute/level",
    effect: "Target suffers -3 Str and the caster gains +3 Str.",
    description: "<p>Target suffers -3 Str, caster gains +3 Str.</p>",
    deliveryType: "save",
    savingThrow: "fortitude",
    saveEffect: "negates",
  },
};

const fixedSpellLevels = {
  druid: {
    "Endure Cold": 3,
    Firefist: 3,
    Harmony: 2,
    "Nature's Touch": 15,
  },
  necromancer: {
    "Dark Pact": 3,
    Fear: 2,
  },
};

function createSpellStub(name, classId, level) {
  const stub = levelOneStubs[name];
  if (!stub) {
    throw new Error(`Missing stub metadata for "${name}".`);
  }

  return {
    name,
    type: "spell",
    img: "",
    system: {
      spellLevel: stub.spellLevel ?? level,
      manaCost: stub.manaCost ?? 1,
      school: stub.school ?? "",
      castingTime: stub.castingTime ?? "1 action",
      range: stub.range ?? "Close (25 ft. + 5 ft./2 levels)",
      duration: stub.duration ?? "Instantaneous",
      damageFormula: stub.damageFormula ?? "",
      healFormula: stub.healFormula ?? "",
      savingThrow: stub.savingThrow ?? "",
      effect: stub.effect ?? "",
      recastTime: 0,
      classes: [classId],
      classLevels: [`${classId}:${level}`],
      description: stub.description ?? `<p>${stub.effect ?? ""}</p>`,
      deliveryType: stub.deliveryType ?? "utility",
      attackMode: stub.attackMode ?? "",
      attackBonus: stub.attackBonus ?? 0,
      saveEffect: stub.saveEffect ?? "",
      saveDC: "",
    },
  };
}

function ensureClass(spell, classId) {
  spell.system.classes ??= [];
  if (!spell.system.classes.includes(classId)) {
    spell.system.classes.push(classId);
    spell.system.classes.sort();
  }
}

function upsertClassLevel(spell, classId, level) {
  spell.system.classLevels ??= [];
  spell.system.classLevels = spell.system.classLevels.filter((entry) => !String(entry).startsWith(`${classId}:`));
  spell.system.classLevels.push(`${classId}:${level}`);
  spell.system.classLevels.sort();
  ensureClass(spell, classId);
}

function levelForClass(spell, classId) {
  const classLevels = Array.isArray(spell.system.classLevels) ? spell.system.classLevels : [];
  for (const entry of classLevels) {
    const match = String(entry).match(/^([^:]+):(\d+)$/);
    if (match?.[1] === classId) return Number(match[2]);
  }
  return null;
}

for (const [classId, levels] of Object.entries(overrides)) {
  const wantedByName = new Map();
  const overriddenLevels = new Set(Object.keys(levels).map(Number));
  for (const [levelKey, names] of Object.entries(levels)) {
    const level = Number(levelKey);
    for (const name of names) wantedByName.set(name, level);
  }

  for (const spell of spells) {
    const existingLevel = levelForClass(spell, classId);
    if (existingLevel && overriddenLevels.has(existingLevel) && !wantedByName.has(spell.name)) {
      spell.system.classLevels = spell.system.classLevels.filter((entry) => !String(entry).startsWith(`${classId}:`));
      spell.system.classes = (spell.system.classes ?? []).filter((entry) => entry !== classId);
    }
  }

  for (const [name, level] of wantedByName.entries()) {
    let spell = spellIndex.get(name);
    if (!spell) {
      spell = createSpellStub(name, classId, level);
      spells.push(spell);
      spellIndex.set(name, spell);
    }
    upsertClassLevel(spell, classId, level);
  }
}

for (const [classId, mapping] of Object.entries(fixedSpellLevels)) {
  for (const [name, level] of Object.entries(mapping)) {
    const spell = spellIndex.get(name);
    if (!spell) continue;
    upsertClassLevel(spell, classId, level);
  }
}

spells.sort((a, b) => a.name.localeCompare(b.name));
fs.writeFileSync(spellsPath, `${JSON.stringify(spells, null, 2)}\n`);
console.log(`Updated ${path.relative(rootDir, spellsPath)} with PHB class overrides.`);
