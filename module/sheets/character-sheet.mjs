const { HandlebarsApplicationMixin } = foundry.applications.api;
const { ActorSheetV2 } = foundry.applications.sheets;

/**
 * Character sheet for EverQuest RPG player characters.
 * Uses ApplicationV2 with HandlebarsApplicationMixin for tabbed layout.
 */
export class EQCharacterSheet extends HandlebarsApplicationMixin(ActorSheetV2) {

  static _getEffectiveSpellLevel(spell, actor) {
    const fallback = Number(spell?.system?.spellLevel ?? 1) || 1;
    const classKey = actor?.system?.details?.class ?? "";
    const entries = Array.isArray(spell?.system?.classLevels) ? spell.system.classLevels : [];
    if (!classKey || !entries.length) return fallback;

    for (const entry of entries) {
      const match = String(entry).match(/^([^:]+):(\d+)$/);
      if (!match) continue;
      if (match[1] === classKey) return Number(match[2]) || fallback;
    }

    return fallback;
  }

  static DEFAULT_OPTIONS = {
    classes: ["eqrpg", "actor-sheet", "character-sheet"],
    tag: "form",
    position: { width: 980, height: 860 },
    window: { resizable: true },
    form: { submitOnChange: true, closeOnSubmit: false },
    actions: {
      // Ability point-buy
      incrementAbility: EQCharacterSheet._onIncrementAbility,
      decrementAbility: EQCharacterSheet._onDecrementAbility,
      // Rolls
      rollAbility:      EQCharacterSheet._onRollAbility,
      rollSave:         EQCharacterSheet._onRollSave,
      rollInitiative:   EQCharacterSheet._onRollInitiative,
      rollAttack:       EQCharacterSheet._onRollAttack,
      rollDamage:       EQCharacterSheet._onRollDamage,
      rollManeuver:     EQCharacterSheet._onRollManeuver,
      rollSkill:        EQCharacterSheet._onRollSkill,
      // Inventory
      createItem:    EQCharacterSheet._onCreateItem,
      editItem:      EQCharacterSheet._onEditItem,
      deleteItem:    EQCharacterSheet._onDeleteItem,
      toggleEquip:   EQCharacterSheet._onToggleEquip,
      useConsumable: EQCharacterSheet._onUseConsumable,
      // Spells
      castSpell:       EQCharacterSheet._onCastSpell,
      memorizeSpell:   EQCharacterSheet._onMemorizeSpell,
      unmemorizeSpell: EQCharacterSheet._onUnmemorizeSpell,
      recoverSpells:   EQCharacterSheet._onRecoverSpells,
      // Resting
      restShort:       EQCharacterSheet._onRestShort,
      restLong:        EQCharacterSheet._onRestLong,
      // Level up
      levelUp:             EQCharacterSheet._onLevelUp,
      // Class features
      layOnHands:          EQCharacterSheet._onLayOnHands,
      rollHarmTouch:       EQCharacterSheet._onRollHarmTouch,
      rollSneakDamage:     EQCharacterSheet._onRollSneakDamage,
      rollLifetap:         EQCharacterSheet._onRollLifetap,
      rollUnarmedStrike:   EQCharacterSheet._onRollUnarmedStrike,
      // Factions
      createFaction:       EQCharacterSheet._onCreateFaction,
      factionStandingUp:   EQCharacterSheet._onFactionStandingUp,
      factionStandingDown: EQCharacterSheet._onFactionStandingDown,
      // Feats
      createFeat:          EQCharacterSheet._onCreateFeat,
      // Character wizard
      openWizard:          EQCharacterSheet._onOpenWizard,
    },
  };

  static PARTS = {
    header: {
      template: "systems/eqrpg/templates/actor/parts/header.hbs",
    },
    tabs: {
      template: "systems/eqrpg/templates/actor/parts/tabs.hbs",
    },
    attributes: {
      template: "systems/eqrpg/templates/actor/parts/attributes.hbs",
    },
    records: {
      template: "systems/eqrpg/templates/actor/parts/records.hbs",
    },
    combat: {
      template: "systems/eqrpg/templates/actor/parts/combat.hbs",
    },
    spells: {
      template: "systems/eqrpg/templates/actor/parts/spells.hbs",
    },
    inventory: {
      template: "systems/eqrpg/templates/actor/parts/inventory.hbs",
    },
    biography: {
      template: "systems/eqrpg/templates/actor/parts/biography.hbs",
    },
  };

  /** Configure tab group with individual tab definitions. */
  static TABS = {
    sheet: {
      id: "sheet",
      group: "sheet",
      initial: "attributes",
      tabs: [
        { id: "attributes", group: "sheet", label: "EQRPG.TabSheet" },
        { id: "records", group: "sheet", label: "EQRPG.TabRecords" },
        { id: "combat", group: "sheet", label: "EQRPG.TabCombat" },
        { id: "spells", group: "sheet", label: "EQRPG.TabSpells" },
        { id: "inventory", group: "sheet", label: "EQRPG.TabInventory" },
        { id: "biography", group: "sheet", label: "EQRPG.TabBiography" },
      ],
    },
  };

  // -------------------------------------------------------------------------
  // Window Title
  // -------------------------------------------------------------------------

  get title() {
    return this.actor.name || game.i18n.localize("EQRPG.SheetCharacter");
  }

  // -------------------------------------------------------------------------
  // Context Preparation
  // -------------------------------------------------------------------------

  /** @override */
  async _prepareContext(options) {
    const context = await super._prepareContext(options);
    const system = this.actor.system;
    const config = CONFIG.EQRPG;

    context.system = system;
    context.config = config;
    context.isEditable = this.isEditable;
    context.document = this.actor;
    context.systemFields = this.actor.system.schema.fields;

    // Enrich biography HTML
    // V13+: TextEditor moved to foundry.applications.ux.TextEditor; fall back for V12
    const TE = foundry.applications?.ux?.TextEditor ?? TextEditor;
    context.enrichedBiography = await TE.enrichHTML(system.biography ?? "", {
      async: true,
    });

    // Rebuild tabs in our known format, using this.tabGroups for active state.
    // super._prepareTabs() populates this.tabGroups but the context.tabs format
    // varies between Foundry versions, so we build our own.
    const activeTab = this.tabGroups?.sheet ?? "attributes";
    const tabDefs = [
      { id: "attributes", label: "EQRPG.TabSheet" },
      { id: "records", label: "EQRPG.TabRecords" },
      { id: "combat", label: "EQRPG.TabCombat" },
      { id: "spells", label: "EQRPG.TabSpells" },
      { id: "inventory", label: "EQRPG.TabInventory" },
      { id: "biography", label: "EQRPG.TabBiography" },
    ];
    context.tabs = {};
    for (const def of tabDefs) {
      const isActive = def.id === activeTab;
      context.tabs[def.id] = {
        id: def.id,
        group: "sheet",
        label: game.i18n.localize(def.label),
        active: isActive,
        cssClass: isActive ? "active" : "",
      };
    }

    // Build race options
    context.raceOptions = Object.entries(config.races).map(([key, race]) => ({
      value: key,
      label: game.i18n.localize(race.label),
      selected: system.details.race === key,
    }));

    // Build class options filtered by race
    const raceConfig = config.races[system.details.race];
    const allowedClasses = raceConfig?.allowedClasses ?? Object.keys(config.classes);
    context.classOptions = allowedClasses.map((key) => {
      const cls = config.classes[key];
      if (!cls) return null;
      return {
        value: key,
        label: game.i18n.localize(cls.label),
        selected: system.details.class === key,
      };
    }).filter(Boolean);

    // Build ability display data.
    // Use Object.keys(config.abilities) rather than Object.entries(system.abilities)
    // because Foundry TypeDataModel SchemaField getters are non-enumerable, so
    // Object.entries() silently returns an empty array on the model instance.
    context.abilities = {};
    context.abilityList = [];
    for (const key of Object.keys(config.abilities)) {
      const ab = system.abilities[key];
      if (!ab) continue;
      const total = (ab.value != null) ? ab.value : (ab.base + ab.racial + ab.misc);
      const mod = (ab.mod != null) ? ab.mod : Math.floor((total - 10) / 2);
      const display = {
        key,
        base:    ab.base,
        racial:  ab.racial,
        misc:    ab.misc,
        value:   total,
        mod:     mod,
        label:   game.i18n.localize(config.abilities[key]),
        abbr:    game.i18n.localize(config.abilityAbbreviations[key]),
        miscField: `system.abilities.${key}.misc`,
        canIncrement: this._canIncrementAbility(key),
        canDecrement: ab.base > 8,
      };
      context.abilities[key] = display;
      context.abilityList.push(display);
    }
    context.frontsheetAbilities = context.abilityList;

    // Point-buy info
    context.pointBuy = system.pointBuy;

    // Alignment options
    context.alignmentOptions = Object.entries(config.alignments).map(([key, label]) => ({
      value: key,
      label: game.i18n.localize(label),
      selected: system.details.alignment === key,
    }));

    // Deity options + selected deity detail panel
    context.deityOptions = Object.entries(config.deities ?? {}).map(([key, deity]) => ({
      value: key,
      label: deity.label,
      selected: system.details.deity === key,
    }));
    context.selectedDeity = config.deities?.[system.details.deity] ?? null;
    context.selectedRaceLabel = context.raceOptions.find((option) => option.selected)?.label ?? "-";
    context.selectedClassLabel = context.classOptions.find((option) => option.selected)?.label ?? "-";
    context.selectedAlignmentLabel = context.alignmentOptions.find((option) => option.selected)?.label ?? "-";

    const decorateItem = (item) => {
      const properties = new Set((item.system.properties ?? []).map((prop) => String(prop).toLowerCase()));
      item.canTrip = properties.has("trip");
      item.canDisarm = properties.has("disarm");
      item.ammoType = [...properties].find((prop) => prop.startsWith("ammo:"))?.slice(5) ?? "";
      item.isNet = item.type === "weapon" && (item.name === "Net" || (properties.has("entangle") && properties.has("ranged-touch")));
      item.canBash = item.type === "armor" && item.system.type === "shield" && item.system.shieldCategory !== "tower";
      item.itemCategoryLabel = item.system.itemCategory ? String(item.system.itemCategory) : "";
      item.ammoLabel = item.system.ammoType ? String(item.system.ammoType) : "";
      return item;
    };

    // Items grouped by type
    context.weapons = this.actor.items.filter((i) => i.type === "weapon").map(decorateItem);
    context.armor = this.actor.items.filter((i) => i.type === "armor").map(decorateItem);
    context.spells = this.actor.items
      .filter((i) => i.type === "spell")
      .map((spell) => {
        spell.system.effectiveSpellLevel = EQCharacterSheet._getEffectiveSpellLevel(spell, this.actor);
        return spell;
      });
    context.skills = this.actor.items.filter((i) => i.type === "skill");
    context.consumables = this.actor.items.filter((i) => i.type === "consumable").map(decorateItem);
    context.equipment = this.actor.items
      .filter((i) => i.type === "equipment")
      .map(decorateItem)
      .sort((a, b) =>
        String(a.system.itemCategory ?? "").localeCompare(String(b.system.itemCategory ?? ""))
        || a.name.localeCompare(b.name)
      );
    context.feats     = this.actor.items
      .filter((i) => i.type === "feat")
      .sort((a, b) => {
        const catOrder = ["general", "combat", "mystic", "metamagic"];
        const ai = catOrder.indexOf(a.system.category ?? "general");
        const bi = catOrder.indexOf(b.system.category ?? "general");
        return ai - bi || a.name.localeCompare(b.name);
      });
    context.combatWeapons = [...context.weapons].sort((a, b) => {
      const aEquipped = a.system.equipped ? 1 : 0;
      const bEquipped = b.system.equipped ? 1 : 0;
      return bEquipped - aEquipped || a.name.localeCompare(b.name);
    });
    context.combatShields = [...context.armor]
      .filter((item) => item.canBash && item.system.equipped)
      .sort((a, b) => a.name.localeCompare(b.name));
    context.mainSheetSkills = [...context.skills]
      .sort((a, b) => {
        const aClass = a.system.classSkill ? 1 : 0;
        const bClass = b.system.classSkill ? 1 : 0;
        const aRanks = a.system.ranks ?? 0;
        const bRanks = b.system.ranks ?? 0;
        return bClass - aClass || bRanks - aRanks || a.name.localeCompare(b.name);
      })
      .slice(0, 10);

    // Factions — sorted by standing descending, enriched with standing tier info
    context.factions = this.actor.items
      .filter((i) => i.type === "faction")
      .sort((a, b) => (b.system.standing ?? 0) - (a.system.standing ?? 0))
      .map((f) => {
        const tiers = config.factionStandings ?? [];
        const tier  = tiers.find(t => (f.system.standing ?? 0) >= t.min) ?? tiers[tiers.length - 1];
        return {
          id:           f.id,
          name:         f.name,
          standing:     f.system.standing ?? 0,
          notes:        f.system.notes ?? "",
          standingLabel: game.i18n.localize(tier.label),
          standingClass: tier.css,
        };
      });

    context.sheetCounts = {
      weapons: context.weapons.length,
      armor: context.armor.length,
      equipment: context.equipment.length,
      consumables: context.consumables.length,
      skills: context.skills.length,
      feats: context.feats.length,
      spells: context.spells.length,
      factions: context.factions.length,
    };

    // XP progress toward next level
    context.xpProgress = system.xpProgress ?? {};

    // Spell slots — always exactly 8, safe against ArrayField corruption.
    // Read from actor._source (raw DB data) to get a real JS Array, not the
    // TypeDataModel prepared instance which may be a POJO after bad updates.
    const sourceSlots = this.actor.toObject().system?.spellSlots;
    const rawSlots    = Array.isArray(sourceSlots) ? sourceSlots : [];
    context.spellSlots = [];
    for (let i = 0; i < 8; i++) {
      const s     = rawSlots[i] ?? {};
      const id    = s.itemId ?? "";
      const cd    = s.cooldownRemaining ?? 0;
      const spell = id ? this.actor.items.get(id) : null;
      context.spellSlots.push({
        index:             i,
        itemId:            id,
        cooldownRemaining: cd,
        spellName:         spell?.name ?? null,
        spellLevel:        spell ? EQCharacterSheet._getEffectiveSpellLevel(spell, this.actor) : null,
        manaCost:          spell?.system.manaCost ?? null,
        onCooldown:        cd > 0,
        canCast:           !!spell && cd === 0,
      });
    }

    // Whether this class is a spellcaster (affects whether Recover button shows)
    context.isCaster = !!config.classes[system.details.class]?.spellcastingAbility;

    // Encumbrance
    context.encumbrance = system.encumbrance;

    // Class features and race abilities (PHB-derived)
    context.classFeatures = system.classFeatures ?? {};
    context.frontSheetFeatures = [];
    if (context.classFeatures.sneakAttackDice) {
      context.frontSheetFeatures.push({
        label: game.i18n.localize("EQRPG.SneakAttack"),
        value: `${context.classFeatures.sneakAttackDice}d6`,
      });
    }
    if (context.classFeatures.unarmedDamageDie) {
      context.frontSheetFeatures.push({
        label: game.i18n.localize("EQRPG.UnarmedDamage"),
        value: `1d${context.classFeatures.unarmedDamageDie}`,
        action: "rollUnarmedStrike",
        actionLabel: game.i18n.localize("EQRPG.UnarmedStrike"),
      });
    }
    if (context.classFeatures.layOnHandsPool) {
      context.frontSheetFeatures.push({
        label: game.i18n.localize("EQRPG.LayOnHands"),
        value: `${context.classFeatures.layOnHandsPool} HP`,
        action: "layOnHands",
        actionLabel: game.i18n.localize("EQRPG.UseLayOnHands"),
      });
    }
    if (context.classFeatures.harmTouchDamage) {
      context.frontSheetFeatures.push({
        label: game.i18n.localize("EQRPG.HarmTouch"),
        value: `${context.classFeatures.harmTouchDamage} dmg / DC ${context.classFeatures.harmTouchDC ?? "-"}`,
      });
    }
    if (context.classFeatures.leechTouch) {
      context.frontSheetFeatures.push({
        label: game.i18n.localize("EQRPG.LeechTouch"),
        value: game.i18n.localize("EQRPG.Active"),
      });
    }

    // Transform raw ability key strings into display objects using raceAbilities dict
    const raDict = CONFIG.EQRPG.raceAbilities ?? {};
    context.raceAbilities = (system.raceAbilities ?? []).map(key => ({
      key,
      label: raDict[key] ? game.i18n.localize(raDict[key].label) : key,
      note:  raDict[key] ? game.i18n.localize(raDict[key].note)  : "",
      type:  raDict[key]?.type ?? "passive",
    }));

    // Expose mechanical bonus flags for the template
    context.hasColdResistance = system.hasColdResistance ?? false;
    context.coldResistBonus   = system.coldResistBonus   ?? 0;
    context.hasSpellShielding = system.hasSpellShielding ?? false;
    context.luckBonus         = system.luckBonus         ?? 0;

    // Resource fill percentages for header HP/Mana bars
    const hp   = system.resources.hp;
    const mana = system.resources.mana;
    context.hpPercent   = hp.max   > 0 ? Math.round(Math.min(100, (hp.value   / hp.max)   * 100)) : 0;
    context.manaPercent = mana.max > 0 ? Math.round(Math.min(100, (mana.value / mana.max) * 100)) : 0;
    context.attackSequence = (system.combat.attackArray ?? [])
      .map((bonus) => `${bonus >= 0 ? "+" : ""}${bonus}`)
      .join(" / ") || "-";

    return context;
  }

  /** @override */
  _preparePartContext(partId, context, options) {
    context = super._preparePartContext(partId, context, options);
    context.partId = `${this.id}-${partId}`;
    // Set tab object for this part — templates use {{tab.cssClass}} for visibility
    if (context.tabs?.[partId]) {
      context.tab = context.tabs[partId];
    }
    return context;
  }

  // -------------------------------------------------------------------------
  // Render Hooks — bind change events for select elements
  // -------------------------------------------------------------------------

  /** @override */
  _onRender(context, options) {
    super._onRender(context, options);

    // Sync active tab classes manually — ensures correct tab is shown on every render
    const activeTab = this.tabGroups?.sheet ?? "attributes";
    for (const section of this.element.querySelectorAll("section[data-group='sheet']")) {
      section.classList.toggle("active", section.dataset.tab === activeTab);
    }
    for (const link of this.element.querySelectorAll("nav.sheet-tabs .item[data-tab]")) {
      link.classList.toggle("active", link.dataset.tab === activeTab);
    }

    // Tab click handler — update tabGroups and re-sync classes
    for (const link of this.element.querySelectorAll("nav.sheet-tabs .item[data-tab]")) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const tabId = e.currentTarget.dataset.tab;
        if (!this.tabGroups) this.tabGroups = {};
        this.tabGroups.sheet = tabId;
        // Update nav active states
        for (const a of this.element.querySelectorAll("nav.sheet-tabs .item[data-tab]")) {
          a.classList.toggle("active", a.dataset.tab === tabId);
        }
        // Update section active states
        for (const s of this.element.querySelectorAll("section[data-group='sheet']")) {
          s.classList.toggle("active", s.dataset.tab === tabId);
        }
      });
    }

    // data-action only fires on click; selects need change listeners
    const raceSelect = this.element.querySelector('[name="system.details.race"]');
    if (raceSelect) {
      raceSelect.addEventListener("change", async (e) => {
        e.preventDefault();
        e.stopPropagation();
        await EQCharacterSheet._onSelectRace.call(this, e, e.target);
      });
    }

    const classSelect = this.element.querySelector('[name="system.details.class"]');
    if (classSelect) {
      classSelect.addEventListener("change", async (e) => {
        e.preventDefault();
        e.stopPropagation();
        await EQCharacterSheet._onSelectClass.call(this, e, e.target);
      });
    }

    const wizardButton = this.element.querySelector(".wizard-launch-btn");
    if (wizardButton) {
      wizardButton.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        EQCharacterSheet._onOpenWizard.call(this, e, e.currentTarget);
      });
    }

    for (const input of this.element.querySelectorAll("input.save-misc")) {
      const normalize = () => {
        if (input.value === "" || input.value == null) input.value = "0";
      };
      input.addEventListener("blur", normalize);
      input.addEventListener("change", normalize);
    }
  }

  /** @override */
  _prepareSubmitData(event, form, formData, ...rest) {
    const keys = [
      "system.combat.saves.fortitude.misc",
      "system.combat.saves.reflex.misc",
      "system.combat.saves.will.misc",
    ];

    const normalizeContainer = (container) => {
      if (!container) return;
      for (const key of keys) {
        const flatValue = container[key];
        if (flatValue === "" || flatValue == null) {
          container[key] = 0;
        }

        const nestedValue = foundry.utils.getProperty(container, key);
        if (nestedValue === "" || nestedValue == null) {
          foundry.utils.setProperty(container, key, 0);
        }
      }
    };

    normalizeContainer(formData);
    normalizeContainer(formData?.object);
    normalizeContainer(formData?.fields);

    const liveForm = form ?? this.element;
    for (const key of keys) {
      const input = liveForm?.querySelector?.(`[name="${key}"]`);
      if (input && (input.value === "" || input.value == null)) {
        input.value = "0";
      }
    }

    return super._prepareSubmitData(event, form, formData, ...rest);
  }

  // -------------------------------------------------------------------------
  // Point-Buy Logic
  // -------------------------------------------------------------------------

  _canIncrementAbility(abilityKey) {
    const system = this.actor.system;
    const base = system.abilities[abilityKey].base;
    if (base >= 18) return false;
    const cost = base >= 16 ? 3 : base >= 14 ? 2 : 1;
    return system.pointBuy.remaining >= cost;
  }

  // -------------------------------------------------------------------------
  // Action Handlers
  // -------------------------------------------------------------------------

  static async _onSelectRace(event, target) {
    const race = target.value;
    const config = CONFIG.EQRPG;
    const raceConfig = config.races[race];
    if (!raceConfig) return;

    const updates = { "system.details.race": race };
    for (const [ability, adj] of Object.entries(raceConfig.adjustments)) {
      updates[`system.abilities.${ability}.racial`] = adj;
    }

    const currentClass = this.actor.system.details.class;
    if (currentClass && !raceConfig.allowedClasses.includes(currentClass)) {
      updates["system.details.class"] = "";
    }

    await this.actor.update(updates);
  }

  static async _onSelectClass(event, target) {
    await this.actor.update({ "system.details.class": target.value });
  }

  static async _onIncrementAbility(event, target) {
    const ability = target.dataset.ability;
    if (!ability || !this.actor.system.abilities[ability]) return;
    const current = this.actor.system.abilities[ability].base;
    if (current >= 18) return;

    const newBase = current + 1;
    const newCost = CONFIG.EQRPG.pointBuyCost[newBase] ?? 0;
    const oldCost = CONFIG.EQRPG.pointBuyCost[current] ?? 0;
    const costDiff = newCost - oldCost;

    if (this.actor.system.pointBuy.remaining < costDiff) return;
    await this.actor.update({ [`system.abilities.${ability}.base`]: newBase });
  }

  static async _onDecrementAbility(event, target) {
    const ability = target.dataset.ability;
    if (!ability || !this.actor.system.abilities[ability]) return;
    const current = this.actor.system.abilities[ability].base;
    if (current <= 8) return;
    await this.actor.update({ [`system.abilities.${ability}.base`]: current - 1 });
  }

  // -------------------------------------------------------------------------
  // Inventory Action Handlers
  // -------------------------------------------------------------------------

  static async _onCreateItem(event, target) {
    const type = target.dataset.type;
    const typeName = game.i18n.localize(`EQRPG.ItemType_${type}`) || type;
    const itemData = {
      name: `${game.i18n.localize("EQRPG.New")} ${typeName}`,
      type: type,
    };
    await this.actor.createEmbeddedDocuments("Item", [itemData]);
  }

  static async _onEditItem(event, target) {
    const itemId = target.closest("[data-item-id]")?.dataset.itemId;
    const item = this.actor.items.get(itemId);
    item?.sheet.render(true);
  }

  static async _onDeleteItem(event, target) {
    const itemId = target.closest("[data-item-id]")?.dataset.itemId;
    const item = this.actor.items.get(itemId);
    if (!item) return;
    await item.delete();
  }

  static async _onToggleEquip(event, target) {
    const itemId = target.closest("[data-item-id]")?.dataset.itemId;
    const item = this.actor.items.get(itemId);
    if (!item) return;
    await item.update({ "system.equipped": !item.system.equipped });
  }

  static async _onUseConsumable(event, target) {
    const itemId = target.closest("[data-item-id]")?.dataset.itemId;
    const item   = this.actor.items.get(itemId);
    if (!item) return;
    await item.useConsumable();
  }

  // -------------------------------------------------------------------------
  // Roll Action Handlers
  // -------------------------------------------------------------------------

  static async _onRollAbility(event, target) {
    await this.actor.rollAbilityCheck(target.dataset.ability);
  }

  static async _onRollSave(event, target) {
    await this.actor.rollSave(target.dataset.save);
  }

  static async _onRollInitiative(event, target) {
    // If a combat encounter is active, integrate with the combat tracker
    if (game.combat) {
      await this.actor.rollInitiative({ createCombatants: true, rerollInitiative: true });
    } else {
      await this.actor.rollInitiativeCheck();
    }
  }

  static async _onRollAttack(event, target) {
    const item = this.actor.items.get(target.closest("[data-item-id]")?.dataset.itemId);
    await item?.rollAttack();
  }

  static async _onRollDamage(event, target) {
    const item = this.actor.items.get(target.closest("[data-item-id]")?.dataset.itemId);
    await item?.rollDamage();
  }

  static async _onRollManeuver(event, target) {
    const item = this.actor.items.get(target.closest("[data-item-id]")?.dataset.itemId);
    const maneuver = target.dataset.maneuver ?? "trip";
    await item?.rollCombatManeuver(maneuver);
  }

  static async _onRollSkill(event, target) {
    const item = this.actor.items.get(target.closest("[data-item-id]")?.dataset.itemId);
    await item?.rollSkill();
  }

  // -------------------------------------------------------------------------
  // Spell Action Handlers
  // -------------------------------------------------------------------------

  static async _onCastSpell(event, target) {
    const slotIndex = parseInt(target.dataset.slotIndex);
    await this.actor.castSpell(slotIndex);
  }

  static async _onMemorizeSpell(event, target) {
    const spellId = target.dataset.itemId;
    const slots = this.actor.system.spellSlots;
    // Find the first empty slot
    let emptyIndex = -1;
    for (let i = 0; i < slots.length; i++) {
      if (!slots[i].itemId) { emptyIndex = i; break; }
    }
    if (emptyIndex === -1) {
      ui.notifications.warn(game.i18n.localize("EQRPG.NoEmptySlots"));
      return;
    }
    await this.actor.memorizeSpell(spellId, emptyIndex);
  }

  static async _onUnmemorizeSpell(event, target) {
    const slotIndex = parseInt(target.dataset.slotIndex);
    await this.actor.unmemorizeSpell(slotIndex);
  }

  static async _onRecoverSpells(event, target) {
    await this.actor.recoverSpells();
  }

  // -------------------------------------------------------------------------
  // Rest Handlers
  // -------------------------------------------------------------------------

  static async _onRestShort(event, target) {
    await this.actor.restShort();
  }

  static async _onRestLong(event, target) {
    await this.actor.restLong();
  }

  // -------------------------------------------------------------------------
  // Level Up Handler
  // -------------------------------------------------------------------------

  static async _onLevelUp(event, target) {
    await this.actor.levelUp();
  }

  // -------------------------------------------------------------------------
  // Faction Handlers
  // -------------------------------------------------------------------------

  static async _onCreateFaction(event, target) {
    // Prompt for faction name, then create a faction item on this actor
    const name = await Dialog.prompt({
      title:   game.i18n.localize("EQRPG.NewFaction"),
      content: `<div style="margin:8px 0">
                  <label>${game.i18n.localize("EQRPG.FactionName")}</label><br>
                  <input type="text" id="faction-name" style="width:100%;margin-top:4px"
                         placeholder="${game.i18n.localize("EQRPG.FactionNamePlaceholder")}" />
                </div>`,
      label:   game.i18n.localize("EQRPG.Create"),
      callback: (html) => html.find("#faction-name").val().trim(),
    }).catch(() => null);

    if (!name) return;
    await this.actor.createEmbeddedDocuments("Item", [{
      type:   "faction",
      name,
      system: { standing: 0, notes: "" },
    }]);
  }

  static async _onFactionStandingUp(event, target) {
    const id    = target.closest("[data-item-id]")?.dataset.itemId;
    const delta = parseInt(target.dataset.delta ?? "100");
    await this.actor.adjustFactionStanding(id, delta);
  }

  static async _onFactionStandingDown(event, target) {
    const id    = target.closest("[data-item-id]")?.dataset.itemId;
    const delta = parseInt(target.dataset.delta ?? "100");
    await this.actor.adjustFactionStanding(id, -delta);
  }

  // -------------------------------------------------------------------------
  // Feat Handlers
  // -------------------------------------------------------------------------

  static async _onCreateFeat(event, target) {
    await this.actor.createEmbeddedDocuments("Item", [{
      type:   "feat",
      name:   game.i18n.localize("EQRPG.NewFeat"),
      system: { category: "general", prerequisites: "None", benefit: "", special: "" },
    }]);
  }

  // -------------------------------------------------------------------------
  // Character Wizard
  // -------------------------------------------------------------------------

  static _onOpenWizard(event) {
    event?.preventDefault?.();
    event?.stopPropagation?.();

    const existingWizard = Object.values(ui.windows ?? {}).find((app) =>
      app instanceof game.eqrpg.CharacterWizard && app.actor?.id === this.actor.id
    );
    if (existingWizard) {
      existingWizard.render(true);
      return;
    }

    const wizard = new game.eqrpg.CharacterWizard(this.actor);
    this._wizardApp = wizard;
    wizard.render(true);
  }

  // -------------------------------------------------------------------------
  // Class Feature Handlers
  // -------------------------------------------------------------------------

  static async _onLayOnHands(event, target) {
    const targets     = [...(game.user?.targets ?? [])];
    const targetActor = targets[0]?.actor ?? null;
    await this.actor.layOnHands(targetActor);
  }

  static async _onRollHarmTouch(event, target) {
    const targets     = [...(game.user?.targets ?? [])];
    const targetActor = targets[0]?.actor ?? null;
    await this.actor.rollHarmTouch(targetActor);
  }

  static async _onRollSneakDamage(event, target) {
    const item = this.actor.items.get(target.closest("[data-item-id]")?.dataset.itemId);
    await item?.rollSneakDamage();
  }

  static async _onRollLifetap(event, target) {
    const targets     = [...(game.user?.targets ?? [])];
    const targetActor = targets[0]?.actor ?? null;
    await this.actor.rollLifetap(targetActor);
  }

  static async _onRollUnarmedStrike(event, target) {
    await this.actor.rollUnarmedStrike();
  }
}
