import {
  applyTypeDefaults,
  buildNPCActorData,
  buildNPCActorUpdate,
  CREATURE_TYPE_RULES,
  createDefaultMonster,
  deriveMonster,
  MONSTER_BUILDER_SCHEMA,
  normalizeMonster,
  signed,
  SIZE_RULES,
} from "./monster-builder-rules.mjs";

import { SAMPLE_MONSTERS } from "../packs/sample-data.mjs";
import { inspectMonsterSource } from "./monster-source.mjs";

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

export function readActorMonster(actor) {
  const flagged = actor?.flags?.eqrpg?.monsterBuilder;

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
    monster.abilities[key] = system.abilities?.[key]?.value === undefined ? 10 : system.abilities[key].value;
  }
  monster.combat.armorClass.manualOverride = true;
  monster.combat.armorClass.total = Number(system.combat?.ac?.value ?? 10);
  monster.combat.babManualOverride = true;
  monster.combat.baseAttackBonus = Number(system.combat?.bab) || 0;
  monster.combat.initiativeMisc = (Number(system.combat?.initiative?.value) || 0) - Math.floor(((Number(monster.abilities.dex ?? 10)) - 10) / 2);
  for (const key of ["fortitude", "reflex", "will"]) {
    monster.combat.saves[key].manualOverride = true;
    monster.combat.saves[key].total = system.combat?.saves?.[key]?.value ?? 0;
  }
  monster.combat.speed.walk = Number(system.details?.speed ?? 30);
  monster.combat.face = String(system.statblock?.faceReach ?? "5 ft. by 5 ft./5 ft.").split("/")[0] || "5 ft. by 5 ft.";
  monster.combat.reach = parseReach(system.statblock?.faceReach) ?? 5;
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
  if (!flagged) return normalizeMonster(monster);
  const draft = normalizeMonster(flagged);
  const generated = buildNPCActorData(draft);
  const get = (object,path) => path.split(".").reduce((value,key)=>value?.[key],object);
  const changed = path => JSON.stringify(get(actor,path)) !== JSON.stringify(get(generated,path));
  const copy = (draftPath, actorPaths) => {
    if (!actorPaths.some(changed)) return;
    const keys=draftPath.split(".");let target=draft;
    for (const key of keys.slice(0,-1)) target=target[key];
    target[keys.at(-1)]=foundry.utils.deepClone(get(monster,draftPath));
  };
  copy("name",["name"]);copy("img",["img"]);copy("description",["system.biography"]);
  copy("source",["system.statblock.source"]);
  for(const key of ["size","type","subtypes","alignment","faction"]) copy(`identity.${key}`,[`system.details.${key}`]);
  for(const key of Object.keys(monster.abilities)) copy(`abilities.${key}`,[`system.abilities.${key}.value`]);
  copy("hitDice",["system.resources.hp.max","system.statblock.hitDice","system.abilities.con.value"]);
  copy("combat.armorClass",["system.combat.ac.value","system.abilities.dex.value","system.details.size"]);
  if(["system.combat.bab","system.statblock.hitDice","system.details.type"].some(changed)){draft.combat.babManualOverride=true;draft.combat.baseAttackBonus=monster.combat.baseAttackBonus;}
  copy("combat.initiativeMisc",["system.combat.initiative.value","system.abilities.dex.value"]);
  for(const [key,ability] of Object.entries({fortitude:"con",reflex:"dex",will:"wis"})) copy(`combat.saves.${key}`,[`system.combat.saves.${key}.value`,`system.abilities.${ability}.value`,"system.statblock.hitDice","system.details.type"]);
  copy("combat.speed.walk",["system.details.speed"]);
  copy("combat.attacks",["system.statblock.attacks","system.statblock.damage"]);
  copy("combat.face",["system.statblock.faceReach"]);copy("combat.reach",["system.statblock.faceReach"]);
  copy("traits.specialAbilities",["system.statblock.specialAttacks"]);
  if(changed("system.statblock.specialQualities")) {
    draft.traits.specialQualities=monster.traits.specialQualities;
    for(const key of ["vision","immunities","resistances","vulnerabilities"]) draft.traits[key]=[];
  }
  for(const key of ["skills","feats"]) copy(key,[`system.statblock.${key}`]);
  for(const key of ["challengeRating","climateTerrain","organization","treasure"]) copy(`advancement.${key}`,[`system.statblock.${key}`]);
  copy("advancement.advancementRange",["system.statblock.advancement"]);
  return normalizeMonster(draft);
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
  const match=String(value ?? "").split("/")[1]?.match(/(\d+)/);
  return match ? Number(match[1]) : undefined;
}

function parseAttacks(attacksText, damageText) {
  const damageChunks = String(damageText ?? "").split(",").map((entry) => entry.trim()).filter(Boolean);
  return String(attacksText ?? "").split(",").map((entry, index) => {
    const text = entry.trim();
    const match = text.match(/^(?:(\d+)\s+)?(.+?)\s+([+-]\d+)\s+(.+)$/i);
    const damage = damageChunks[index]?.match(/^(?:.+?)\s+((?:\d+d\d+|\d+)(?:[+-](?:\d+d\d+|\d+))*)/i)?.[1] ?? "1d4";
    return {
      name: match?.[2]?.trim() || text || `Attack ${index + 1}`,
      count: Number(match?.[1] ?? 1),
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
    this.mode = actor ? "advanced" : "quick";
    this.sourceIndex = "";
    this.sourceQuery = "";
    this.sourceCreature = null;
    this.activeTab = "identity";
    this.monster = readActorMonster(actor);
    this.initialMonster = foundry.utils.deepClone(this.monster);
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
      builderMode: MonsterBuilder.#onMode,
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
      mode: this.mode,
      sourceQuery: this.sourceQuery,
      sourceOptions: SAMPLE_MONSTERS.map((source,index) => ({ index, name:source.name, selected:String(index)===String(this.sourceIndex), ...inspectMonsterSource(source) })).filter(source => `${source.name} ${source.locator}`.toLowerCase().includes(this.sourceQuery.toLowerCase())),
      sourceStatus: this.sourceCreature ? inspectMonsterSource(this.sourceCreature) : null,
      updatePreview: this.actor ? Object.entries(buildNPCActorUpdate(this.monster,this.initialMonster)).filter(([path]) => !path.startsWith("flags.") && path !== "system.statblock.rawText" && !path.startsWith("prototypeToken.")).map(([path,value]) => ({ field:path.replace(/^system\./, "").replace(/\.value$/, "").replace(/([a-z])([A-Z])/g,"$1 $2").replaceAll("."," · "), value: typeof value === "object" ? JSON.stringify(value) : value })) : [],
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
    if (target.name === "sourceQuery") { this.sourceQuery=target.value; this.render(); return; }
    if (target.name === "sourceIndex") {
      this.sourceIndex=target.value;
      this.sourceCreature=target.value === "" ? null : SAMPLE_MONSTERS[Number(target.value)] ?? null;
      if (this.sourceCreature) {
        this.monster=readActorMonster(this.sourceCreature);
        this.initialMonster=foundry.utils.deepClone(this.monster);
      }
      this.render(); return;
    }
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
      count: 1,
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
    let data=buildNPCActorData(this.monster);
    if (this.sourceCreature) {
      // Printed totals and unparsed text survive unchanged source creation.
      const patch=buildNPCActorUpdate(this.monster,readActorMonster(this.sourceCreature));
      data=foundry.utils.mergeObject(foundry.utils.deepClone(this.sourceCreature),foundry.utils.expandObject(patch),{inplace:false});
      delete data._id;
      const status=inspectMonsterSource(data);
      if (!status.complete) { ui.notifications.warn(`Reconcile missing source fields before creating: ${status.missing.join(", ")}.`); return; }
      data.system.resources.hp.value=data.system.resources.hp.max;
      data.system.resources.hp.temp=0;
    }
    const actor = await foundry.documents.Actor.create(data);
    ui.notifications.info(game.i18n.format("EQRPG.MonsterBuilderCreated", { name: actor.name }));
    actor.sheet?.render({ force: true });
  }

  static async #onUpdateActor(event) {
    event.preventDefault();
    if (!this.actor) return;
    const errors = deriveMonster(this.monster).warnings.filter((entry) => entry.severity === "error");
    if (errors.length) {
      ui.notifications.error(errors[0].text);
      return;
    }
    const actorData = buildNPCActorUpdate(this.monster, this.initialMonster);
    await this.actor.update(actorData);
    this.initialMonster = foundry.utils.deepClone(this.monster);
    ui.notifications.info(game.i18n.format("EQRPG.MonsterBuilderUpdated", { name: this.actor.name }));
    this.actor.sheet?.render({ force: true });
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
      this.sourceCreature = null;
      this.sourceIndex = "";
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
    this.sourceCreature = null;
    this.sourceIndex = "";
    this.importText = "";
    this.exportText = "";
    this.activeTab = "identity";
    this.render();
  }

  static #onMode(event, target) {
    event.preventDefault();
    if (["quick","source","advanced"].includes(target.dataset.mode)) this.mode=target.dataset.mode;
    this.render();
  }
}
