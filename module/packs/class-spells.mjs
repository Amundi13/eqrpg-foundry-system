import { LEVEL1_CLASS_SPELLS } from "./level1-class-spells.mjs";
import { SAMPLE_SPELLS } from "./sample-data.mjs";

export const LEVEL2_CLASS_SPELL_NAMES = {
  bard: [
    "Anthem De Arms", "Elemental Rhythms", "Hymn of Restoration",
    "Jonathan's Whistling Warsong", "Kelin's Lugubrious Lament",
    "Magical Monologue", "Peaceful Rhythms",
  ],
  beastlord: [
    "Blast of Frost", "Cure Poison", "Endure Fire", "Keshuval's Rejuvenation",
    "Scale Skin", "Sense Animal", "Sicken", "Spirit of Kahliz",
    "Spirit of Lightning", "Strengthen",
  ],
  cleric: [
    "Cure Blindness", "Cure Disease", "Furor", "Gate", "Holy Armor",
    "Lifeforce", "Light Healing", "Reckless Strength", "Stun", "Summon Drink",
    "Ward Undead",
  ],
  druid: [
    "Burst of Fire", "Camouflage", "Cure Disease", "Cure Poison", "Gate",
    "Grasping Roots", "Harmony", "Invoke Lightning", "Lifeforce",
    "Ward Summoned", "Whirling Wind",
  ],
  enchanter: [
    "Color Flux", "Enfeeblement", "Fear", "Gate", "Haze", "Illusion-Half Elf",
    "Illusion-Human", "Illusion-Wood Elf", "Invisibility", "Juli's Animation",
    "Mesmerize", "Suffocating Sphere", "Tashan",
  ],
  magician: [
    "Burn", "Elementalkin: Air", "Elementalkin: Earth", "Elementalkin: Fire",
    "Elementalkin: Water", "Fire Flux", "Gate", "Sense Summoned",
    "Summon Bandages", "Summon Wisp",
  ],
  necromancer: [
    "Clinging Darkness", "Fear", "Gate", "Grim Aura", "Leering Corpse",
    "Lifespike", "Numb the Dead", "Poison Bolt", "Sense the Dead", "True North",
  ],
  paladin: [
    "Cure Disease", "Desist", "Hammer of Wrath", "Holy Armor", "Lifeforce",
    "Light Healing", "Lull", "Sense the Dead", "Ward Undead",
  ],
  ranger: [
    "Burst of Fire", "Camouflage", "Cure Poison", "Dance of the Fireflies",
    "Feet Like Cat", "Grasping Roots", "Hawk Eye", "Invoke Lightning",
    "Lifeforce", "Thistlecoat",
  ],
  shadowknight: [
    "Bone Walk", "Clinging Darkness", "Endure Cold", "Fear", "Lifespike",
    "Numb the Dead", "Scream of Hate",
  ],
  shaman: [
    "Cure Poison", "Drowsy", "Endure Fire", "Feet Like Cat", "Fleeting Fury",
    "Frost Rift", "Gate", "Scale Skin", "Sicken", "Spirit Pouch", "Summon Drink",
  ],
  wizard: [
    "Fade", "Gate", "Glimpse", "Icestrike", "O'Keil's Radiation", "Root",
    "See Invisible", "Shock of Fire",
  ],
};

const SPELLS_BY_NAME = new Map(SAMPLE_SPELLS.map((spell) => [spell.name, spell]));

export function getSpellLevelForClass(spell, classKey) {
  const classLevels = Array.isArray(spell?.system?.classLevels) ? spell.system.classLevels : [];
  for (const entry of classLevels) {
    const match = String(entry).match(/^([^:]+):(\d+)$/);
    if (match?.[1] === classKey) return Number(match[2]);
  }
  return null;
}

export function getClassSpellTemplates(classKey, level = 1) {
  if (level === 1 && Array.isArray(LEVEL1_CLASS_SPELLS[classKey])) {
    return LEVEL1_CLASS_SPELLS[classKey];
  }

  const namedSpells = level === 2 ? LEVEL2_CLASS_SPELL_NAMES[classKey] : null;
  if (namedSpells) return namedSpells.map((name) => SPELLS_BY_NAME.get(name)).filter(Boolean);

  return SAMPLE_SPELLS.filter((spell) => getSpellLevelForClass(spell, classKey) === level);
}
