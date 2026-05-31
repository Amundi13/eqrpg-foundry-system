import {
  applyTypeDefaults,
  buildNPCActorData,
  CREATURE_TYPE_RULES,
  createDefaultMonster,
  deriveMonster,
  MONSTER_BUILDER_SCHEMA,
  normalizeMonster,
  signed,
  SIZE_RULES,
} from "./monster-builder-rules.mjs";

const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;

const TABS = [
  { id: "identity", label: "EQRPG.MonsterBuilderTabIdentity" },
  { id: "hd", label: "EQRPG.MonsterBuilderTabHD" },
  { id: "combat", label: "EQRPG.MonsterBuilderTabCombat" },
  { id: "traits", label: "EQRPG.MonsterBuilderTabTraits" },
  { id: "skills", label: "EQRPG.MonsterBuilderTabSkills" },
  { id: "ecology", label: "EQRPG.MonsterBuilderTabEcology" },
  { id: "export", label: "EQRPG.MonsterBuilderTabExport" },
];

function readActorMonster(actor) {
  const flagged = actor?.flags?.eqrpg?.monsterBuilder;
  if (flagged) return normalizeMonster(flagged);

  if (actor?.type !== "npc") return createDefaultMonster();
  const system = actor.system;
  const monster = createDefaultMonster();
  monster.name = actor.name;
  monster.img = actor.img;
  monster.description = system.biography ?? "";
  monster.identity.size = sizeKeyFromText(system.details?.size);
  monster.identity.type = typeKeyFromText(system.details?.type);
  monster.identity.subtypes = system.details?.subtypes ?? "";
  monster.identity.alignment = system.details?.alignment ?? "";
  monster.identity.faction = system.details?.faction ?? "";
  monster.source = system.statblock?.source ?? "Existing NPC";
  monster.hitDice.count = parseHitDiceCount(system.statblock?.hitDice) || 1;
  monster.hitDice.die = parseHitDiceDie(system.statblock?.hitDice) || CREATURE_TYPE_RULES[monster.identity.type]?.hitDie || 8;
  monster.hitDice.manualHp = Number(system.resources?.hp?.max) || 1;
  monster.hitDice.overrideAverage = true;
  for (const key of Object.keys(monster.abilities)) {
    monster.abilities[key] = Number(system.abilities?.[key]?.value) || 10;
  }
  monster.combat.armorClass.manualOverride = true;
  monster.combat.armorClass.total = Number(system.combat?.ac?.value) || 10;
  monster.combat.babManualOverride = true;
  monster.combat.baseAttackBonus = Number(system.combat?.bab) || 0;
  monster.combat.initiativeMisc = Number(system.combat?.initiative?.value) || 0;
  monster.combat.speed.walk = Number(system.details?.speed) || 30;
  monster.combat.face = String(system.statblock?.faceReach ?? "5 ft. by 5 ft./5 ft.").split("/")[0] || "5 ft. by 5 ft.";
  monster.combat.reach = parseReach(system.statblock?.faceReach) || 5;
  monster.combat.attacks = parseAttacks(system.statblock?.attacks, system.statblock?.damage);
  monster.traits.specialAbilities = system.statblock?.specialAttacks ?? "";
  monster.traits.specialQualities = system.statblock?.specialQualities ?? "";
  monster.skills = system.statblock?.skills ?? "";
  monster.feats = system.statblock?.feats ?? "";
  monster.advancement.challengeRating = system.statblock?.challengeRating || system.details?.cr || "";
  monster.advancement.climateTerrain = system.statblock?.climateTerrain ?? "";
  monster.advancement.organization = system.statblock?.organization ?? "";
  monster.advancement.treasure = system.statblock?.treasure ?? "";
  monster.advancement.advancementRange = system.statblock?.advancement ?? "";
  return normalizeMonster(monster);
}

function sizeKeyFromText(value) {
  const text = String(value ?? "").toLowerCase();
  return Object.keys(SIZE_RULES).find((key) => text.includes(key.toLowerCase())) ?? "medium";
}

function typeKeyFromText(value) {
  const compact = String(value ?? "").toLowerCase().replace(/[^a-z]/g, "");
  return Object.keys(CREATURE_TYPE_RULES).find((key) => compact.includes(key.toLowerCase())) ?? "humanoid";
}

function parseHitDiceCount(value) {
  return Number(String(value ?? "").match(/(\d+)\s*d\s*\d+/i)?.[1]) || 0;
}

function parseHitDiceDie(value) {
  return Number(String(value ?? "").match(/\d+\s*d\s*(\d+)/i)?.[1]) || 0;
}

function parseReach(value) {
  return Number(String(value ?? "").split("/")[1]?.match(/(\d+)/)?.[1]) || 0;
}

function parseAttacks(attacksText, damageText) {
  const damageChunks = String(damageText ?? "").split(",").map((entry) => entry.trim()).filter(Boolean);
  return String(attacksText ?? "").split(",").map((entry, index) => {
    const text = entry.trim();
    const match = text.match(/^(?:(\d+)\s+)?(.+?)\s+([+-]\d+)\s+(.+)$/i);
    const damage = damageChunks[index]?.match(/^(?:.+?)\s+((?:\d+d\d+|\d+)(?:[+-](?:\d+d\d+|\d+))*)/i)?.[1] ?? "1d4";
    return {
      name: match?.[2]?.trim() || text || `Attack ${index + 1}`,
      category: "natural",
      mode: match?.[4]?.trim() || "melee",
      primary: index === 0,
      attackBonus: Number(match?.[3]) || 0,
      damageFormula: damage,
      damageType: "",
      notes: "",
    };
  }).filter((attack) => attack.name);
}

export function renderMonsterBuilder(actor = null, options = {}) {
  try {
    const app = new MonsterBuilder(actor, options);
    const rendered = app.render({ force: true });
    if (rendered?.catch) {
      rendered.catch((err) => {
        console.error("EQRPG | Failed to open monster builder", err);
        ui.notifications?.error?.("Monster Creator failed to open. Check the console for details.");
      });
    }
    return app;
  } catch (err) {
    console.error("EQRPG | Failed to open monster builder", err);
    ui.notifications?.error?.("Monster Creator failed to open. Check the console for details.");
    return null;
  }
}

export class MonsterBuilder extends HandlebarsApplicationMixin(ApplicationV2) {
  constructor(actor = null, options = {}) {
    super(foundry.utils.mergeObject({
      id: `eqrpg-monster-builder-${foundry.utils.randomID()}`,
      window: { title: game.i18n.localize("EQRPG.MonsterBuilder") },
    }, options));
    this.actor = actor;
    this.activeTab = "identity";
    this.monster = readActorMonster(actor);
    this.importText = "";
    this.exportText = "";
  }

  static DEFAULT_OPTIONS = {
    classes: ["eqrpg", "monster-builder"],
    tag: "form",
    window: { title: "Monster Creator", resizable: true },
    position: { width: 980, height: 760 },
    form: { submitOnChange: true, closeOnSubmit: false },
    actions: {
      builderTab: MonsterBuilder.#onTab,
      applyTypeDefaults: MonsterBuilder.#onApplyTypeDefaults,
      addAttack: MonsterBuilder.#onAddAttack,
      removeAttack: MonsterBuilder.#onRemoveAttack,
      createActor: MonsterBuilder.#onCreateActor,
      updateActor: MonsterBuilder.#onUpdateActor,
      exportJson: MonsterBuilder.#onExportJson,
      importJson: MonsterBuilder.#onImportJson,
      reset: MonsterBuilder.#onReset,
    },
  };

  static PARTS = {
    main: { template: "systems/eqrpg/templates/apps/monster-builder.hbs" },
  };

  async _prepareContext() {
    const derived = deriveMonster(this.monster);
    const exportPayload = this.exportText || JSON.stringify(this.monster, null, 2);
    return {
      actor: this.actor,
      monster: this.monster,
      derived,
      tabs: TABS.map((tab) => ({
        ...tab,
        label: game.i18n.localize(tab.label),
        active: tab.id === this.activeTab,
        cssClass: tab.id === this.activeTab ? "active" : "",
      })),
      activeTab: this.activeTab,
      sizeOptions: Object.entries(SIZE_RULES).map(([key, rule]) => ({
        key,
        label: rule.label,
        selected: key === this.monster.identity.size,
      })),
      typeOptions: Object.entries(CREATURE_TYPE_RULES).map(([key, rule]) => ({
        key,
        label: rule.label,
        selected: key === this.monster.identity.type,
      })),
      exportText: exportPayload,
      importText: this.importText,
      signed,
      schemaVersion: MONSTER_BUILDER_SCHEMA,
    };
  }

  _onChangeForm(_formConfig, event) {
    const target = event.target;
    if (!target?.name) return;
    if (target.name === "importText") {
      this.importText = target.value;
      return;
    }
    if (target.name === "exportText") {
      this.exportText = target.value;
      return;
    }

    const value = this.#readInputValue(target);
    foundry.utils.setProperty(this.monster, target.name, value);

    if (target.name === "identity.type") {
      const rule = CREATURE_TYPE_RULES[value];
      if (rule && !this.monster.hitDice.overrideDie) this.monster.hitDice.die = rule.hitDie;
    }
    if (target.name === "identity.size") {
      const sizeRule = SIZE_RULES[value];
      if (sizeRule) {
        this.monster.combat.face = sizeRule.face;
        this.monster.combat.reach = sizeRule.reach;
      }
    }
    this.exportText = "";
    this.render();
  }

  #readInputValue(target) {
    if (target.type === "checkbox") return target.checked;
    if (target.dataset.nullable === "true" && String(target.value).trim() === "") return null;
    if (target.dataset.type === "list") {
      return String(target.value ?? "").split(/,|\n/).map((entry) => entry.trim()).filter(Boolean);
    }
    if (target.type === "number") return target.value === "" ? 0 : Number(target.value);
    return target.value;
  }

  static #onTab(event, target) {
    event.preventDefault();
    this.activeTab = target.dataset.builderTab ?? "identity";
    this.render();
  }

  static #onApplyTypeDefaults(event) {
    event.preventDefault();
    this.monster = applyTypeDefaults(this.monster);
    this.exportText = "";
    this.render();
  }

  static #onAddAttack(event) {
    event.preventDefault();
    this.monster.combat.attacks.push({
      name: `Attack ${this.monster.combat.attacks.length + 1}`,
      category: "natural",
      mode: "melee",
      primary: this.monster.combat.attacks.length === 0,
      attackBonus: deriveMonster(this.monster).bab,
      damageFormula: "1d4",
      damageType: "",
      notes: "",
    });
    this.render();
  }

  static #onRemoveAttack(event, target) {
    event.preventDefault();
    const index = Number(target.dataset.index);
    if (Number.isInteger(index)) this.monster.combat.attacks.splice(index, 1);
    this.render();
  }

  static async #onCreateActor(event) {
    event.preventDefault();
    const errors = deriveMonster(this.monster).warnings.filter((entry) => entry.severity === "error");
    if (errors.length) {
      ui.notifications.error(errors[0].text);
      return;
    }
    const actor = await Actor.create(buildNPCActorData(this.monster));
    ui.notifications.info(game.i18n.format("EQRPG.MonsterBuilderCreated", { name: actor.name }));
    actor.sheet?.render(true);
  }

  static async #onUpdateActor(event) {
    event.preventDefault();
    if (!this.actor) return;
    const errors = deriveMonster(this.monster).warnings.filter((entry) => entry.severity === "error");
    if (errors.length) {
      ui.notifications.error(errors[0].text);
      return;
    }
    const actorData = buildNPCActorData(this.monster);
    delete actorData.type;
    await this.actor.update(actorData);
    ui.notifications.info(game.i18n.format("EQRPG.MonsterBuilderUpdated", { name: this.actor.name }));
    this.actor.sheet?.render(true);
  }

  static #onExportJson(event) {
    event.preventDefault();
    this.exportText = JSON.stringify(this.monster, null, 2);
    this.activeTab = "export";
    this.render();
  }

  static #onImportJson(event) {
    event.preventDefault();
    try {
      const parsed = JSON.parse(this.importText || this.exportText || "{}");
      this.monster = normalizeMonster(parsed);
      this.exportText = "";
      ui.notifications.info(game.i18n.localize("EQRPG.MonsterBuilderImported"));
      this.render();
    } catch (err) {
      console.error("EQRPG | Monster JSON import failed", err);
      ui.notifications.error(game.i18n.localize("EQRPG.MonsterBuilderImportFailed"));
    }
  }

  static #onReset(event) {
    event.preventDefault();
    this.monster = createDefaultMonster();
    this.importText = "";
    this.exportText = "";
    this.activeTab = "identity";
    this.render();
  }
}
