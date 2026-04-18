/**
 * Character Creation Wizard — PHB step-by-step flow
 *
 * Steps:
 *   0  Race      — pick one of 14 EQ races
 *   1  Class     — pick from classes allowed by the chosen race
 *   2  Abilities — 27-point buy (scores 8-18, costs from CONFIG)
 *   3  Details   — name, alignment, deity  +  stat summary / review
 *
 * On "Create Character" the wizard writes all choices back to the actor
 * and closes.  Opening is triggered automatically on createActor and can
 * be re-opened via a button in the character sheet header.
 */

import {
  SAMPLE_ARMOR,
  SAMPLE_CONSUMABLES,
  SAMPLE_EQUIPMENT,
  SAMPLE_SKILLS,
  SAMPLE_SPELLS,
  SAMPLE_WEAPONS,
} from "../packs/sample-data.mjs";
import { LEVEL1_CLASS_SPELLS } from "../packs/level1-class-spells.mjs";
const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;

// ── Constants ──────────────────────────────────────────────────────────────
const STEPS = ["Race", "Class", "Abilities", "Details"];

const ABILITY_KEYS  = ["str", "dex", "con", "int", "wis", "cha"];
const ABILITY_ABBR  = { str: "STR", dex: "DEX", con: "CON", int: "INT", wis: "WIS", cha: "CHA" };
const ABILITY_LABEL = {
  str: "Strength", dex: "Dexterity",  con: "Constitution",
  int: "Intelligence", wis: "Wisdom", cha: "Charisma",
};

const SAMPLE_LOOKUPS = {
  weapon: new Map(SAMPLE_WEAPONS.map((item) => [item.name, item])),
  armor: new Map(SAMPLE_ARMOR.map((item) => [item.name, item])),
  consumable: new Map(SAMPLE_CONSUMABLES.map((item) => [item.name, item])),
  equipment: new Map(SAMPLE_EQUIPMENT.map((item) => [item.name, item])),
  skill: new Map(SAMPLE_SKILLS.map((item) => [item.name, item])),
  spell: new Map(SAMPLE_SPELLS.map((item) => [item.name, item])),
};

function cloneTemplateItem(type, name) {
  const source = SAMPLE_LOOKUPS[type]?.get(name);
  return source ? foundry.utils.deepClone(source) : null;
}

function getClassSkillNames(classKey) {
  return CONFIG.EQRPG.classSkills?.[classKey] ?? [];
}

function getStarterGold(classKey) {
  return CONFIG.EQRPG.startingGold?.[classKey] ?? 0;
}

function getStarterKit(classKey) {
  return CONFIG.EQRPG.starterKits?.[classKey] ?? [];
}

function getSpellLevelForClass(spell, classKey) {
  const classLevels = Array.isArray(spell?.system?.classLevels) ? spell.system.classLevels : [];
  for (const entry of classLevels) {
    const match = String(entry).match(/^([^:]+):(\d+)$/);
    if (!match) continue;
    if (match[1] === classKey) return Number(match[2]);
  }
  return Number(spell?.system?.spellLevel ?? 0) || 0;
}

function getStarterSpellTemplates(classKey, level = 1) {
  if (level === 1 && Array.isArray(LEVEL1_CLASS_SPELLS[classKey])) {
    return LEVEL1_CLASS_SPELLS[classKey].map((spell) => foundry.utils.deepClone(spell));
  }

  return SAMPLE_SPELLS
    .filter((spell) => Array.isArray(spell.system?.classes) && spell.system.classes.includes(classKey))
    .filter((spell) => getSpellLevelForClass(spell, classKey) === level)
    .map((spell) => foundry.utils.deepClone(spell));
}

// ── Wizard class ───────────────────────────────────────────────────────────
export class CharacterWizard extends HandlebarsApplicationMixin(ApplicationV2) {

  /**
   * @param {Actor}  actor    The character actor being set up
   * @param {object} [options]
   */
  constructor(actor, options = {}) {
    const wizardId = foundry.utils.randomID();
    const mergedOptions = foundry.utils.mergeObject({
      id: `eq-character-wizard-${wizardId}`,
      window: {
        title: actor?.name
          ? `Character Creation: ${actor.name}`
          : "Character Creation",
      },
    }, options);
    super(mergedOptions);
    this.actor = actor;
    this.step  = 0;

    // Seed from any existing actor data so re-opening the wizard feels sane
    this.choices = {
      race:      actor.system.details?.race      ?? "",
      klass:     actor.system.details?.class     ?? "",
      alignment: actor.system.details?.alignment ?? "tn",
      deity:     actor.system.details?.deity     ?? "",
      name:      actor.name                      ?? "",
      loadout:   "kit",
      abilities: { str: 8, dex: 8, con: 8, int: 8, wis: 8, cha: 8 },
    };
  }

  /* ── ApplicationV2 config ─────────────────────────────────────────────── */

  static DEFAULT_OPTIONS = {
    classes: ["eqrpg", "character-wizard"],
    tag:     "form",
    window: {
      title:       "Character Creation",
      resizable:   false,
      minimizable: false,
    },
    position: { width: 860, height: 630 },
    actions: {
      wizardPrev:       CharacterWizard.#onPrev,
      wizardNext:       CharacterWizard.#onNext,
      wizardFinish:     CharacterWizard.#onFinish,
      selectRace:       CharacterWizard.#onSelectRace,
      selectClass:      CharacterWizard.#onSelectClass,
      incrementAbility: CharacterWizard.#onIncrementAbility,
      decrementAbility: CharacterWizard.#onDecrementAbility,
    },
  };

  static PARTS = {
    wizard: { template: "systems/eqrpg/templates/apps/character-wizard.hbs" },
  };

  /* ── Context ──────────────────────────────────────────────────────────── */

  async _prepareContext() {
    const cfg = CONFIG.EQRPG;
    const ch  = this.choices;

    const raceCfg  = cfg.races?.[ch.race];
    const klassCfg = cfg.classes?.[ch.klass];
    const racialAdj = raceCfg?.adjustments ?? {};
    const classSkillNames = getClassSkillNames(ch.klass);
    const starterGold = getStarterGold(ch.klass);
    const starterKit = getStarterKit(ch.klass);
    const starterKitPreview = starterKit.map((entry) => ({
      label: entry.quantity && entry.quantity > 1 ? `${entry.name} x${entry.quantity}` : entry.name,
      type: entry.type,
      inline: !!entry.system,
    }));

    // ── Point-buy math ─────────────────────────────────────────────────────
    const spent     = ABILITY_KEYS.reduce((s, k) => s + (cfg.pointBuyCost[ch.abilities[k]] ?? 0), 0);
    const total     = cfg.pointBuyTotal ?? 27;
    const remaining = total - spent;

    // ── Per-ability display ────────────────────────────────────────────────
    const abilities = ABILITY_KEYS.map(key => {
      const base     = ch.abilities[key];
      const racial   = racialAdj[key] ?? 0;
      const final    = base + racial;
      const cost     = cfg.pointBuyCost[base]      ?? 0;
      const nextCost = cfg.pointBuyCost[base + 1]  ?? 0;
      return {
        key,
        abbr:   ABILITY_ABBR[key],
        label:  ABILITY_LABEL[key],
        base, racial, final,
        mod:    Math.floor((final - 10) / 2),
        cost,
        canInc: base < 18 && remaining >= (nextCost - cost),
        canDec: base > 8,
      };
    });

    // ── Race cards ─────────────────────────────────────────────────────────
    const raceCards = Object.entries(cfg.races ?? {}).map(([key, r]) => {
      const adjs = Object.entries(r.adjustments ?? {})
        .filter(([, v]) => v !== 0)
        .map(([k, v]) => `${v > 0 ? "+" : ""}${v} ${ABILITY_ABBR[k]}`);
      return {
        key,
        name:      game.i18n.localize(r.label),
        size:      r.size ?? "medium",
        speed:     r.speed ?? 30,
        adjRow:    adjs.join("  "),
        abilities: (r.abilities ?? []).join(", "),
        selected:  ch.race === key,
      };
    });

    // ── Class cards — filtered to race's allowed list ──────────────────────
    const allowed = ch.race
      ? (raceCfg?.allowedClasses ?? Object.keys(cfg.classes))
      : Object.keys(cfg.classes);

    const classCards = Object.entries(cfg.classes ?? {})
      .filter(([key]) => allowed.includes(key))
      .map(([key, c]) => {
        const goodSaves = Object.entries(c.saves ?? {})
          .filter(([, v]) => v === "good")
          .map(([s]) => s.charAt(0).toUpperCase() + s.slice(1, 4)); // "Fort", "Refl", "Will"
        return {
          key,
          name:      game.i18n.localize(c.label),
          hitDie:    c.hitDie,
          bab:       c.babProgression,
          goodSaves: goodSaves.join(", ") || "—",
          armor:     (c.armorProficiency ?? []).join(", ") || "none",
          caster:    !!c.spellcastingAbility,
          castStat:  c.spellcastingAbility ? ABILITY_ABBR[c.spellcastingAbility] : null,
          skillCount: (cfg.classSkills?.[key] ?? []).length,
          startingGold: getStarterGold(key),
          selected:  ch.klass === key,
        };
      });

    // ── Review: starting stats ─────────────────────────────────────────────
    const hitDie  = klassCfg?.hitDie ?? 8;
    const conMod  = Math.floor(((ch.abilities.con + (racialAdj.con ?? 0)) - 10) / 2);
    const startHP = Math.max(1, hitDie + conMod);

    const goodSaveNames = klassCfg
      ? Object.entries(klassCfg.saves ?? {})
          .filter(([, v]) => v === "good")
          .map(([s]) => s.charAt(0).toUpperCase() + s.slice(1, 4))
      : [];

    return {
      step:       this.step,
      stepMax:    STEPS.length - 1,
      steps:      STEPS,
      choices:    ch,
      raceCards,
      classCards,
      abilities,
      spent, remaining, total,
      alignments: Object.entries(cfg.alignments ?? {}).map(([key, i18n]) => ({
        key,
        label:    game.i18n.localize(i18n),
        selected: ch.alignment === key,
      })),
      raceName:      raceCfg  ? game.i18n.localize(raceCfg.label)  : "—",
      className:     klassCfg ? game.i18n.localize(klassCfg.label) : "—",
      classSkillNames,
      starterGold,
      starterKitPreview,
      hitDie, startHP, goodSaveNames, conMod,
      canNext:     this.#canAdvance(),
      isLastStep:  this.step === STEPS.length - 1,
      isFirstStep: this.step === 0,
    };
  }

  /* ── Validation ───────────────────────────────────────────────────────── */

  #canAdvance() {
    switch (this.step) {
      case 0: return !!this.choices.race;
      case 1: return !!this.choices.klass;
      case 2: return true;   // point-buy always valid (limits enforced per click)
      case 3: return !!(this.choices.name ?? this.actor.name)?.trim();
      default: return false;
    }
  }

  /* ── Navigation actions ───────────────────────────────────────────────── */

  static #onPrev() {
    if (this.step > 0) { this.step--; this.render(); }
  }

  static #onNext() {
    if (this.#canAdvance() && this.step < STEPS.length - 1) {
      this.step++;
      this.render();
    }
  }

  /* ── Selection actions ────────────────────────────────────────────────── */

  static #onSelectRace(event, target) {
    this.choices.race  = target.dataset.race;
    this.choices.klass = "";   // reset — allowed class list changes with race
    this.render();
  }

  static #onSelectClass(event, target) {
    this.choices.klass = target.dataset.class;
    this.render();
  }

  /* ── Ability score actions ────────────────────────────────────────────── */

  static #onIncrementAbility(event, target) {
    const key = target.dataset.ability;
    const cfg = CONFIG.EQRPG;
    const cur = this.choices.abilities[key] ?? 8;
    if (cur >= 18) return;
    const cost  = (cfg.pointBuyCost[cur + 1] ?? 0) - (cfg.pointBuyCost[cur] ?? 0);
    const spent = ABILITY_KEYS.reduce((s, k) => s + (cfg.pointBuyCost[this.choices.abilities[k]] ?? 0), 0);
    if ((cfg.pointBuyTotal ?? 27) - spent < cost) return;
    this.choices.abilities[key] = cur + 1;
    this.render();
  }

  static #onDecrementAbility(event, target) {
    const key = target.dataset.ability;
    if ((this.choices.abilities[key] ?? 8) <= 8) return;
    this.choices.abilities[key]--;
    this.render();
  }

  /* ── Form change: keep details in sync while user types on step 3 ──────── */

  _onChangeForm(_formConfig, event) {
    const { name, value } = event.target;
    if (name === "wizard-name")      this.choices.name      = value;
    if (name === "wizard-alignment") this.choices.alignment = value;
    if (name === "wizard-deity")     this.choices.deity     = value;
    if (name === "wizard-loadout") {
      this.choices.loadout = value;
      this.render();
    }
  }

  /* ── Finish: write all choices to the actor ───────────────────────────── */

  static async #onFinish() {
    // Flush any un-synced text inputs before writing
    const q = sel => this.element?.querySelector(sel);
    if (q("[name='wizard-name']"))      this.choices.name      = q("[name='wizard-name']").value.trim()     || this.actor.name;
    if (q("[name='wizard-alignment']")) this.choices.alignment = q("[name='wizard-alignment']").value;
    if (q("[name='wizard-deity']"))     this.choices.deity     = q("[name='wizard-deity']").value.trim();
    if (q("[name='wizard-loadout']:checked")) {
      this.choices.loadout = q("[name='wizard-loadout']:checked").value;
    }

    const ch  = this.choices;
    const cfg = CONFIG.EQRPG;
    const adj = cfg.races?.[ch.race]?.adjustments ?? {};

    // Build flat update object
    const update = {
      name:                       ch.name || this.actor.name,
      "system.details.race":      ch.race,
      "system.details.class":     ch.klass,
      "system.details.alignment": ch.alignment,
      "system.details.deity":     ch.deity,
      "system.details.level":     1,
    };

    for (const key of ABILITY_KEYS) {
      update[`system.abilities.${key}.base`]   = ch.abilities[key];
      update[`system.abilities.${key}.racial`] = adj[key] ?? 0;
    }

    if (ch.loadout === "gold") {
      update["system.wealth.gold"] = getStarterGold(ch.klass);
    }

    await this.actor.update(update);
    await CharacterWizard.#applyClassSkills(this.actor, ch.klass);
    await CharacterWizard.#applyStarterSpells(this.actor, ch.klass, 1);
    if (ch.loadout === "kit") {
      await CharacterWizard.#applyStarterKit(this.actor, ch.klass);
    }

    ui.notifications.info(
      `${ch.name || this.actor.name} created as a Level 1 ${game.i18n.localize(cfg.races?.[ch.race]?.label ?? "")} ${game.i18n.localize(cfg.classes?.[ch.klass]?.label ?? "")}.`
    );
    this.close();
  }

  static async #applyClassSkills(actor, classKey) {
    const skillNames = getClassSkillNames(classKey);
    if (!skillNames.length) return;

    const createData = [];
    const updateData = [];

    for (const skillName of skillNames) {
      const existing = actor.items.find((item) => item.type === "skill" && item.name === skillName);
      if (existing) {
        if (!existing.system.classSkill) {
          updateData.push({ _id: existing.id, "system.classSkill": true });
        }
        continue;
      }

      const template = cloneTemplateItem("skill", skillName);
      if (!template) continue;
      template.system.classSkill = true;
      template.system.ranks = template.system.ranks ?? 0;
      template.flags = foundry.utils.mergeObject(template.flags ?? {}, {
        eqrpg: { wizardGranted: true, wizardGrantType: "classSkill" },
      });
      createData.push(template);
    }

    if (updateData.length) await actor.updateEmbeddedDocuments("Item", updateData);
    if (createData.length) await actor.createEmbeddedDocuments("Item", createData);
  }

  static async #applyStarterKit(actor, classKey) {
    const kit = getStarterKit(classKey);
    if (!kit.length) return;

    const createData = [];
    const updateData = [];

    for (const entry of kit) {
      let itemData = null;
      if (entry.system) {
        itemData = foundry.utils.deepClone(entry);
      } else {
        itemData = cloneTemplateItem(entry.type, entry.name);
        if (!itemData) continue;
        if ("quantity" in (itemData.system ?? {}) || (entry.quantity ?? 1) !== 1) {
          itemData.system.quantity = entry.quantity ?? itemData.system.quantity ?? 1;
        }
        if ("equipped" in entry) itemData.system.equipped = entry.equipped;
      }

      itemData.flags = foundry.utils.mergeObject(itemData.flags ?? {}, {
        eqrpg: { wizardGranted: true, wizardGrantType: "starterKit" },
      });

      const existing = actor.items.find((item) => item.type === itemData.type && item.name === itemData.name);
      if (existing) {
        const existingQty = existing.system.quantity ?? 1;
        const targetQty = itemData.system.quantity ?? 1;
        const update = { _id: existing.id };
        if (targetQty > existingQty) update["system.quantity"] = targetQty;
        if (itemData.system.equipped && "equipped" in existing.system) update["system.equipped"] = true;
        if (Object.keys(update).length > 1) updateData.push(update);
        continue;
      }

      createData.push(itemData);
    }

    if (updateData.length) await actor.updateEmbeddedDocuments("Item", updateData);
    if (createData.length) await actor.createEmbeddedDocuments("Item", createData);
  }

  static async #applyStarterSpells(actor, classKey, level = 1) {
    const starterSpells = getStarterSpellTemplates(classKey, level);
    if (!starterSpells.length) return;

    const createData = [];
    const updateData = [];

    for (const spellData of starterSpells) {
      const existing = actor.items.find((item) => item.type === "spell" && item.name === spellData.name);
      if (existing) {
        const wizardGranted = existing.flags?.eqrpg?.wizardGrantType === "starterSpell";
        if (wizardGranted) {
          updateData.push({
            _id: existing.id,
            "system.description": spellData.system.description ?? "",
            "system.spellLevel": spellData.system.spellLevel ?? 1,
            "system.manaCost": spellData.system.manaCost ?? 0,
            "system.castingTime": spellData.system.castingTime ?? "",
            "system.range": spellData.system.range ?? "",
            "system.duration": spellData.system.duration ?? "",
            "system.effect": spellData.system.effect ?? "",
            "system.damageFormula": spellData.system.damageFormula ?? "",
            "system.healFormula": spellData.system.healFormula ?? "",
            "system.school": spellData.system.school ?? "",
            "system.classes": spellData.system.classes ?? [],
            "system.classLevels": spellData.system.classLevels ?? [],
            "system.spellLine": spellData.system.spellLine ?? "",
            "system.recastTime": spellData.system.recastTime ?? 0,
            "system.savingThrow": spellData.system.savingThrow ?? "",
            "system.saveEffect": spellData.system.saveEffect ?? "",
            "system.saveDC": spellData.system.saveDC ?? "",
            "system.deliveryType": spellData.system.deliveryType ?? "utility",
            "system.attackMode": spellData.system.attackMode ?? "",
            "system.attackBonus": spellData.system.attackBonus ?? 0,
          });
        }
        continue;
      }

      spellData.flags = foundry.utils.mergeObject(spellData.flags ?? {}, {
        eqrpg: { wizardGranted: true, wizardGrantType: "starterSpell" },
      });
      createData.push(spellData);
    }

    if (updateData.length) {
      await actor.updateEmbeddedDocuments("Item", updateData);
    }
    if (createData.length) {
      await actor.createEmbeddedDocuments("Item", createData);
    }
  }
}
