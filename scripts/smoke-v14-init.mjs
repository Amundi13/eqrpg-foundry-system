class MockActor {}
class MockItem {}
class MockApplicationV2 {
  static *instances() {}
}
class MockActorSheetV2 extends MockApplicationV2 {}
class MockItemSheetV2 extends MockApplicationV2 {}
class MockTypeDataModel {}
class MockField {}

const sheetRegistrations = [];
const hooks = new Map();

globalThis.Actor = MockActor;
globalThis.Item = MockItem;
globalThis.Hooks = {
  once(name, callback) {
    if (!hooks.has(name)) hooks.set(name, []);
    hooks.get(name).push(callback);
  },
  on(name, callback) {
    if (!hooks.has(name)) hooks.set(name, []);
    hooks.get(name).push(callback);
  },
};
globalThis.Handlebars = { registerHelper() {} };
globalThis.CONFIG = { Actor: {}, Item: {}, ActiveEffect: {expiryAction:'delete'} };
globalThis.game = {
  release: {generation:14},
  eqrpg: {},
  i18n: { localize: (value) => value, format: (value) => value },
  user: null,
};
globalThis.foundry = {
  abstract: { TypeDataModel: MockTypeDataModel },
  applications: {
    api: {
      ApplicationV2: MockApplicationV2,
      HandlebarsApplicationMixin: (Base) => class extends Base {},
    },
    sheets: { ActorSheetV2: MockActorSheetV2, ItemSheetV2: MockItemSheetV2 },
    apps: {
      DocumentSheetConfig: {
        registerSheet(documentClass, scope, sheetClass, options) {
          sheetRegistrations.push({ documentClass, scope, sheetClass, options });
        },
      },
    },
    ux: { TextEditor: { enrichHTML: async (html) => html } },
  },
  data: { fields: new Proxy({}, { get: () => MockField }) },
  documents: { Actor: MockActor, Item: MockItem },
  utils: {
    deepClone: structuredClone,
    mergeObject: (original, other) => ({ ...original, ...other }),
  },
};

await import("../module/eqrpg.mjs");
for (const callback of hooks.get("init") ?? []) await callback();

const failures = [];
if (CONFIG.ActiveEffect.expiryAction !== 'update') failures.push('Expired effects must be retained for pool cleanup');
if (CONFIG.Actor.documentClass?.name !== "EQActor") failures.push("EQActor document class was not registered");
if (CONFIG.Item.documentClass?.name !== "EQItem") failures.push("EQItem document class was not registered");
if (Object.keys(CONFIG.Actor.dataModels ?? {}).sort().join(",") !== "character,npc,pet") {
  failures.push("Actor data model registration is incomplete");
}
if (Object.keys(CONFIG.Item.dataModels ?? {}).sort().join(",") !== "armor,consumable,equipment,faction,feat,skill,spell,weapon") {
  failures.push("Item data model registration is incomplete");
}
if (sheetRegistrations.length !== 4) failures.push(`Expected 4 sheet registrations, found ${sheetRegistrations.length}`);
if (sheetRegistrations.some((registration) => registration.scope !== "eqrpg" || !registration.options.makeDefault)) {
  failures.push("A V14 sheet registration has invalid scope or default options");
}

const registeredTypes = sheetRegistrations.flatMap((registration) => registration.options.types ?? []).sort();
const expectedTypes = [
  "armor", "character", "consumable", "equipment", "faction", "feat", "npc", "pet",
  "skill", "spell", "weapon",
].sort();
if (registeredTypes.join(",") !== expectedTypes.join(",")) failures.push("Sheet type coverage is incomplete");

if (failures.length) {
  console.error(`V14 init smoke test failed:\n- ${failures.join("\n- ")}`);
  process.exit(1);
}

console.log("V14 init smoke test passed (documents, data models, and ApplicationV2 sheets registered). ");
