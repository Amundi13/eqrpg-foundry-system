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

const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;

// ── Constants ──────────────────────────────────────────────────────────────
const STEPS = ["Race", "Class", "Abilities", "Details"];

const ABILITY_KEYS  = ["str", "dex", "con", "int", "wis", "cha"];
const ABILITY_ABBR  = { str: "STR", dex: "DEX", con: "CON", int: "INT", wis: "WIS", cha: "CHA" };
const ABILITY_LABEL = {
  str: "Strength", dex: "Dexterity",  con: "Constitution",
  int: "Intelligence", wis: "Wisdom", cha: "Charisma",
};

// ── Wizard class ───────────────────────────────────────────────────────────
export class CharacterWizard extends HandlebarsApplicationMixin(ApplicationV2) {

  /**
   * @param {Actor}  actor    The character actor being set up
   * @param {object} [options]
   */
  constructor(actor, options = {}) {
    super(options);
    this.actor = actor;
    this.step  = 0;

    // Seed from any existing actor data so re-opening the wizard feels sane
    this.choices = {
      race:      actor.system.details?.race      ?? "",
      klass:     actor.system.details?.class     ?? "",
      alignment: actor.system.details?.alignment ?? "tn",
      deity:     actor.system.details?.deity     ?? "",
      name:      actor.name                      ?? "",
      abilities: { str: 8, dex: 8, con: 8, int: 8, wis: 8, cha: 8 },
    };
  }

  /* ── ApplicationV2 config ─────────────────────────────────────────────── */

  static DEFAULT_OPTIONS = {
    id:      "eq-character-wizard",
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
  }

  /* ── Finish: write all choices to the actor ───────────────────────────── */

  static async #onFinish() {
    // Flush any un-synced text inputs before writing
    const q = sel => this.element?.querySelector(sel);
    if (q("[name='wizard-name']"))      this.choices.name      = q("[name='wizard-name']").value.trim()     || this.actor.name;
    if (q("[name='wizard-alignment']")) this.choices.alignment = q("[name='wizard-alignment']").value;
    if (q("[name='wizard-deity']"))     this.choices.deity     = q("[name='wizard-deity']").value.trim();

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

    await this.actor.update(update);
    ui.notifications.info(
      `${ch.name || this.actor.name} created as a Level 1 ${game.i18n.localize(cfg.races?.[ch.race]?.label ?? "")} ${game.i18n.localize(cfg.classes?.[ch.klass]?.label ?? "")}.`
    );
    this.close();
  }
}
