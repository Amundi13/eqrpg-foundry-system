/**
 * Sample feats for the EverQuest RPG system.
 * Categories: general, combat, magic, metamagic, itemCreation, racial
 */
export const SAMPLE_FEATS = [

  // ── General (11) ────────────────────────────────────────────────────────────

  {
    name: "Alertness",
    type: "feat",
    system: {
      category: "general",
      prerequisites: "None",
      benefit: "You gain a +2 bonus on all Listen checks and Spot checks.",
      special: "",
      description: "<p>You have finely tuned senses that make you harder to catch off guard.</p>",
    },
  },
  {
    name: "Blind-Fight",
    type: "feat",
    system: {
      category: "general",
      prerequisites: "None",
      benefit: "In melee combat you may reroll your miss chance percentile roll once. You also suffer no penalty when fighting invisible opponents in melee.",
      special: "",
      description: "<p>You are skilled at fighting opponents you cannot clearly see.</p>",
    },
  },
  {
    name: "Cleave",
    type: "feat",
    system: {
      category: "general",
      prerequisites: "Str 13, Power Attack",
      benefit: "If you deal a creature enough damage to make it drop (typically by dropping it to below 0 HP), you get an immediate, extra melee attack against another creature within reach. You may use this extra attack with your current weapon.",
      special: "You can only use Cleave once per round.",
      description: "<p>You can follow through with a powerful strike, carrying momentum into a second blow.</p>",
    },
  },
  {
    name: "Endurance",
    type: "feat",
    system: {
      category: "general",
      prerequisites: "None",
      benefit: "You gain a +4 bonus on checks to resist non-lethal damage from extended physical activity (forced march, swim checks, avoiding drowning, hot and cold environments). With this feat you may sleep in medium or light armor without becoming fatigued.",
      special: "",
      description: "<p>You are capable of pushing your body beyond ordinary limits.</p>",
    },
  },
  {
    name: "Great Fortitude",
    type: "feat",
    system: {
      category: "general",
      prerequisites: "None",
      benefit: "You get a +2 bonus on all Fortitude saving throws.",
      special: "",
      description: "<p>You are resistant to poison, disease, and other physical ailments.</p>",
      bonuses: { fort: 2, reflex: 0, will: 0, init: 0, ac: 0, hp: 0, attack: 0 },
    },
  },
  {
    name: "Iron Will",
    type: "feat",
    system: {
      category: "general",
      prerequisites: "None",
      benefit: "You get a +2 bonus on all Will saving throws.",
      special: "",
      description: "<p>You have a stronger sense of self that helps you resist mental attacks.</p>",
      bonuses: { fort: 0, reflex: 0, will: 2, init: 0, ac: 0, hp: 0, attack: 0 },
    },
  },
  {
    name: "Leadership",
    type: "feat",
    system: {
      category: "general",
      prerequisites: "Character level 6",
      benefit: "Having this feat enables you to attract a loyal cohort and a number of devoted subordinates who assist you. Your reputation (see below) attracts these followers to your cause. See Chapter 4 for leadership tables.",
      special: "",
      description: "<p>Your reputation and force of personality draw loyal followers to your cause.</p>",
    },
  },
  {
    name: "Lightning Reflexes",
    type: "feat",
    system: {
      category: "general",
      prerequisites: "None",
      benefit: "You get a +2 bonus on all Reflex saving throws.",
      special: "",
      description: "<p>You have faster reflexes that help you dodge area attacks.</p>",
      bonuses: { fort: 0, reflex: 2, will: 0, init: 0, ac: 0, hp: 0, attack: 0 },
    },
  },
  {
    name: "Run",
    type: "feat",
    system: {
      category: "general",
      prerequisites: "None",
      benefit: "When running you move 5× your normal speed instead of 4×. When making a jump preceded by a running start, you gain a +4 bonus on your Jump check.",
      special: "",
      description: "<p>You can run faster than most.</p>",
    },
  },
  {
    name: "Skill Focus",
    type: "feat",
    system: {
      category: "general",
      prerequisites: "None",
      benefit: "You get a +3 bonus on all checks with a chosen skill. You must select one skill when you take this feat.",
      special: "You can take this feat multiple times. Each time it applies to a different skill.",
      description: "<p>You are particularly adept at one skill.</p>",
    },
  },
  {
    name: "Toughness",
    type: "feat",
    system: {
      category: "general",
      prerequisites: "None",
      benefit: "You gain +3 hit points.",
      special: "You can take this feat multiple times. Its effects stack.",
      description: "<p>You are tougher than normal.</p>",
      bonuses: { fort: 0, reflex: 0, will: 0, init: 0, ac: 0, hp: 3, attack: 0 },
    },
  },

  // ── Combat (23) ─────────────────────────────────────────────────────────────

  {
    name: "Combat Expertise",
    type: "feat",
    system: {
      category: "combat",
      prerequisites: "Int 13",
      benefit: "When you use the attack action or the full attack action in melee, you can take a penalty of up to –5 on your attack roll and add the same number (up to +5) as a dodge bonus to your Armor Class.",
      special: "",
      description: "<p>You are trained in using your combat skill for defense as well as offense.</p>",
    },
  },
  {
    name: "Combat Reflexes",
    type: "feat",
    system: {
      category: "combat",
      prerequisites: "None",
      benefit: "You may make a number of additional attacks of opportunity per round equal to your Dexterity bonus. These extra attacks do not stack with multiple attacks per round from high BAB.",
      special: "",
      description: "<p>You can respond to more threats than most people.</p>",
    },
  },
  {
    name: "Dodge",
    type: "feat",
    system: {
      category: "combat",
      prerequisites: "Dex 13",
      benefit: "During your action, you designate an opponent and receive a +1 dodge bonus to Armor Class against attacks from that opponent. You can select a new opponent each action.",
      special: "",
      description: "<p>You are adept at dodging blows.</p>",
    },
  },
  {
    name: "Exotic Weapon Proficiency",
    type: "feat",
    system: {
      category: "combat",
      prerequisites: "BAB +1",
      benefit: "You become proficient with one exotic weapon of your choice. Without this feat, you take a –4 penalty on attack rolls with exotic weapons.",
      special: "You can take this feat multiple times. Each time it applies to a different exotic weapon.",
      description: "<p>You have exotic weapon training most warriors lack.</p>",
    },
  },
  {
    name: "Far Shot",
    type: "feat",
    system: {
      category: "combat",
      prerequisites: "Point Blank Shot",
      benefit: "When you use a projectile weapon, its range increment increases by one-half (multiply by 1.5). When you use a thrown weapon, its range increment is doubled.",
      special: "",
      description: "<p>You can shoot or throw ranged weapons with exceptional distance.</p>",
    },
  },
  {
    name: "Improved Bull Rush",
    type: "feat",
    system: {
      category: "combat",
      prerequisites: "Str 13, Power Attack",
      benefit: "When you perform a bull rush, you do not provoke an attack of opportunity. You also gain a +4 bonus on the opposed Strength check you make to push back your opponent.",
      special: "",
      description: "<p>You are skilled at forcing opponents back.</p>",
    },
  },
  {
    name: "Improved Critical",
    type: "feat",
    system: {
      category: "combat",
      prerequisites: "Proficient with weapon, BAB +8",
      benefit: "When using a weapon with which you are proficient, the threat range is doubled. This effect does not stack with a weapon's keen property.",
      special: "You can take this feat multiple times. Each time it applies to a different weapon.",
      description: "<p>You are an expert at exploiting weaknesses in your opponents' defenses.</p>",
    },
  },
  {
    name: "Improved Disarm",
    type: "feat",
    system: {
      category: "combat",
      prerequisites: "Int 13, Combat Expertise",
      benefit: "You do not provoke an attack of opportunity when you attempt to disarm a foe. You also gain a +4 bonus on the attack roll you make to disarm a foe.",
      special: "",
      description: "<p>You are skilled at disarming opponents in melee combat.</p>",
    },
  },
  {
    name: "Improved Initiative",
    type: "feat",
    system: {
      category: "combat",
      prerequisites: "None",
      benefit: "You get a +4 bonus on initiative checks.",
      special: "",
      description: "<p>You can react to your opponents at the start of a battle more quickly than most.</p>",
      bonuses: { fort: 0, reflex: 0, will: 0, init: 4, ac: 0, hp: 0, attack: 0 },
    },
  },
  {
    name: "Improved Trip",
    type: "feat",
    system: {
      category: "combat",
      prerequisites: "Int 13, Combat Expertise",
      benefit: "You do not provoke an attack of opportunity when you attempt to trip an opponent. You also gain a +4 bonus on your Strength check to trip your opponent. If you trip an opponent in melee combat, you immediately get a melee attack against that opponent as if you hadn't used your attack for the trip attempt.",
      special: "",
      description: "<p>You are skilled at sending opponents to the ground.</p>",
    },
  },
  {
    name: "Improved Two-Weapon Fighting",
    type: "feat",
    system: {
      category: "combat",
      prerequisites: "Dex 17, Two-Weapon Fighting, BAB +6",
      benefit: "In addition to the standard single extra attack you get with an off-hand weapon, you get a second attack with it, albeit at a –5 penalty.",
      special: "",
      description: "<p>You are exceptionally skilled at fighting with a weapon in each hand.</p>",
    },
  },
  {
    name: "Mobility",
    type: "feat",
    system: {
      category: "combat",
      prerequisites: "Dex 13, Dodge",
      benefit: "You get a +4 dodge bonus to Armor Class against attacks of opportunity caused when you move out of or within a threatened area.",
      special: "",
      description: "<p>You are skilled at weaving through threatened areas without being struck.</p>",
    },
  },
  {
    name: "Mounted Combat",
    type: "feat",
    system: {
      category: "combat",
      prerequisites: "Ride 1 rank",
      benefit: "Once per round when your mount is hit in combat, you may attempt a Ride check (DC equals the result of the attack roll) to negate the hit. The hit is negated if your Ride check result is greater than the attacker's roll.",
      special: "",
      description: "<p>You are skilled at mounted combat.</p>",
    },
  },
  {
    name: "Point Blank Shot",
    type: "feat",
    system: {
      category: "combat",
      prerequisites: "None",
      benefit: "You get a +1 bonus on attack and damage rolls with ranged weapons at ranges up to 30 feet.",
      special: "",
      description: "<p>You are accurate with ranged attacks at close range.</p>",
    },
  },
  {
    name: "Power Attack",
    type: "feat",
    system: {
      category: "combat",
      prerequisites: "Str 13",
      benefit: "On your action, before making attack rolls for a round, you may choose to subtract a number from all melee attack rolls and add the same number to all melee damage rolls. This number may not exceed your base attack bonus. The penalty on attacks and bonus on damage apply until your next turn.",
      special: "",
      description: "<p>You can make exceptionally powerful attacks.</p>",
    },
  },
  {
    name: "Precise Shot",
    type: "feat",
    system: {
      category: "combat",
      prerequisites: "Point Blank Shot",
      benefit: "You can shoot or throw ranged weapons at an opponent engaged in melee without taking the standard –4 penalty on your attack roll.",
      special: "",
      description: "<p>You are skilled at placing ranged attacks amid the chaos of melee.</p>",
    },
  },
  {
    name: "Rapid Shot",
    type: "feat",
    system: {
      category: "combat",
      prerequisites: "Dex 13, Point Blank Shot",
      benefit: "You can get one extra attack per round with a ranged weapon. The attack is at your highest base attack bonus, but each attack you make in that round (the extra one and the normal ones) takes a –2 penalty.",
      special: "",
      description: "<p>You can fire or throw ranged weapons with exceptional speed.</p>",
    },
  },
  {
    name: "Shot on the Run",
    type: "feat",
    system: {
      category: "combat",
      prerequisites: "Dex 13, Dodge, Mobility, Point Blank Shot, BAB +4",
      benefit: "When using the attack action with a ranged weapon, you can move both before and after the attack, provided that your total distance moved is not greater than your speed.",
      special: "",
      description: "<p>You can fire ranged weapons on the move without stopping.</p>",
    },
  },
  {
    name: "Spring Attack",
    type: "feat",
    system: {
      category: "combat",
      prerequisites: "Dex 13, Dodge, Mobility, BAB +4",
      benefit: "When using the attack action with a melee weapon, you can move both before and after the attack, provided that your total distance moved is not greater than your speed.",
      special: "",
      description: "<p>You can dart in, strike, and retreat before your enemy can respond.</p>",
    },
  },
  {
    name: "Two-Weapon Defense",
    type: "feat",
    system: {
      category: "combat",
      prerequisites: "Dex 15, Two-Weapon Fighting",
      benefit: "When wielding a double weapon or two weapons (not including natural weapons or unarmed strikes), you gain a +1 shield bonus to your AC. When you are fighting defensively or using the total defense action, this shield bonus increases to +2.",
      special: "",
      description: "<p>You use your off-hand weapon to deflect incoming attacks.</p>",
    },
  },
  {
    name: "Two-Weapon Fighting",
    type: "feat",
    system: {
      category: "combat",
      prerequisites: "Dex 15",
      benefit: "Your penalties on attack rolls for fighting with two weapons are reduced. The penalty for your primary hand lessens by 2 and the one for your off hand lessens by 6. See the two-weapon fighting rules.",
      special: "",
      description: "<p>You are skilled at fighting with a weapon in each hand.</p>",
    },
  },
  {
    name: "Weapon Focus",
    type: "feat",
    system: {
      category: "combat",
      prerequisites: "Proficient with weapon, BAB +1",
      benefit: "You gain a +1 bonus on all attack rolls you make using the selected weapon.",
      special: "You can take this feat multiple times. Each time it applies to a different weapon.",
      description: "<p>You have specialized training with your chosen weapon.</p>",
    },
  },
  {
    name: "Whirlwind Attack",
    type: "feat",
    system: {
      category: "combat",
      prerequisites: "Dex 13, Int 13, Combat Expertise, Dodge, Mobility, Spring Attack, BAB +4",
      benefit: "When you use the full attack action, you can give up your regular attacks and instead make one melee attack at your full base attack bonus against each opponent within reach.",
      special: "",
      description: "<p>You can strike all adjacent foes in a single spinning assault.</p>",
    },
  },

  // ── Magic (6) ───────────────────────────────────────────────────────────────

  {
    name: "Combat Casting",
    type: "feat",
    system: {
      category: "magic",
      prerequisites: "Ability to cast spells",
      benefit: "You get a +4 bonus on Concentration checks made to cast a spell or use a spell-like ability while on the defensive or while you are grappling or pinned.",
      special: "",
      description: "<p>You are adept at casting spells in combat situations.</p>",
    },
  },
  {
    name: "Improved Counterspell",
    type: "feat",
    system: {
      category: "magic",
      prerequisites: "None",
      benefit: "When counterspelling, you may use a spell of the same school that is one or more spell levels higher than the target spell.",
      special: "",
      description: "<p>You are skilled at using one spell to neutralize an opponent's spell.</p>",
    },
  },
  {
    name: "Spell Focus",
    type: "feat",
    system: {
      category: "magic",
      prerequisites: "Ability to cast spells",
      benefit: "Add +1 to the Difficulty Class for all saving throws against spells from the chosen school of magic.",
      special: "You can take this feat multiple times. Each time it applies to a different school of magic.",
      description: "<p>Your spells of a particular school are more potent than normal.</p>",
    },
  },
  {
    name: "Greater Spell Focus",
    type: "feat",
    system: {
      category: "magic",
      prerequisites: "Spell Focus (chosen school)",
      benefit: "Add +1 to the Difficulty Class for saving throws against spells from the chosen school. This bonus stacks with Spell Focus.",
      special: "You can take this feat multiple times. Each time it applies to a different school of magic.",
      description: "<p>Your focused magic is especially potent.</p>",
    },
  },
  {
    name: "Spell Penetration",
    type: "feat",
    system: {
      category: "magic",
      prerequisites: "Ability to cast spells",
      benefit: "You get a +2 bonus on caster level checks (1d20 + caster level) made to overcome a creature's spell resistance.",
      special: "",
      description: "<p>Your spells are more effective against creatures with spell resistance.</p>",
    },
  },
  {
    name: "Greater Spell Penetration",
    type: "feat",
    system: {
      category: "magic",
      prerequisites: "Spell Penetration",
      benefit: "You get a +2 bonus on caster level checks made to overcome spell resistance. This stacks with Spell Penetration.",
      special: "",
      description: "<p>Your spells are exceptionally effective against magical protection.</p>",
    },
  },

  // ── Metamagic (6) ───────────────────────────────────────────────────────────

  {
    name: "Empower Spell",
    type: "feat",
    system: {
      category: "metamagic",
      prerequisites: "Ability to cast spells",
      benefit: "All variable, numeric effects of an empowered spell are increased by one-half. An empowered spell uses up a spell slot two levels higher than the spell's actual level.",
      special: "",
      description: "<p>You can cast spells to greater effect.</p>",
    },
  },
  {
    name: "Enlarge Spell",
    type: "feat",
    system: {
      category: "metamagic",
      prerequisites: "Ability to cast spells",
      benefit: "You can alter a spell with a range of close, medium, or long to increase its range by 100%. An enlarged spell with a range of close now has a range of 50 ft. + 5 ft./level, while medium-range spells have a range of 200 ft. + 20 ft./level, and long-range spells have a range of 800 ft. + 80 ft./level. An enlarged spell uses up a spell slot one level higher than the spell's actual level.",
      special: "",
      description: "<p>You can cast spells farther than normal.</p>",
    },
  },
  {
    name: "Extend Spell",
    type: "feat",
    system: {
      category: "metamagic",
      prerequisites: "Ability to cast spells",
      benefit: "An extended spell lasts twice as long as normal. A spell with a duration of concentration, instantaneous, or permanent is not affected. An extended spell uses up a spell slot one level higher than the spell's actual level.",
      special: "",
      description: "<p>You can cast spells that last longer than normal.</p>",
    },
  },
  {
    name: "Heighten Spell",
    type: "feat",
    system: {
      category: "metamagic",
      prerequisites: "Ability to cast spells",
      benefit: "A heightened spell has a higher spell level than normal (up to a maximum of 9th level). Unlike other metamagic feats, Heighten Spell actually increases the effective level of the spell that it modifies.",
      special: "",
      description: "<p>You can cast a spell as if it were a higher-level spell.</p>",
    },
  },
  {
    name: "Maximize Spell",
    type: "feat",
    system: {
      category: "metamagic",
      prerequisites: "Ability to cast spells",
      benefit: "All variable, numeric effects of a spell modified by this feat are maximized. A maximized spell uses up a spell slot three levels higher than the spell's actual level.",
      special: "",
      description: "<p>You can cast spells to maximum effect.</p>",
    },
  },
  {
    name: "Quicken Spell",
    type: "feat",
    system: {
      category: "metamagic",
      prerequisites: "Ability to cast spells",
      benefit: "You can cast a quickened spell as a free action. You can perform another action, even casting another spell, in the same round. You may only cast one quickened spell per round. A quickened spell uses up a spell slot four levels higher than the spell's actual level.",
      special: "",
      description: "<p>You can cast a spell with a moment's thought.</p>",
    },
  },

  // ── Item Creation (4) ────────────────────────────────────────────────────────

  {
    name: "Brew Potion",
    type: "feat",
    system: {
      category: "itemCreation",
      prerequisites: "Caster level 3",
      benefit: "You can create potions that duplicate spells of 3rd level or lower. Brewing a potion takes 1 day and costs one-half the base price in XP and materials. Base price: spell level × caster level × 50 gp.",
      special: "",
      description: "<p>You can create magical potions.</p>",
    },
  },
  {
    name: "Craft Magic Arms and Armor",
    type: "feat",
    system: {
      category: "itemCreation",
      prerequisites: "Caster level 5",
      benefit: "You can create magic weapons, armor, and shields. Enhancing a weapon or armor takes 1 day per 1,000 gp in the price of its magical features. The cost is one-half the price of the magical enhancement in XP and materials.",
      special: "",
      description: "<p>You can create and improve magic weapons, armor, and shields.</p>",
    },
  },
  {
    name: "Craft Wand",
    type: "feat",
    system: {
      category: "itemCreation",
      prerequisites: "Caster level 5",
      benefit: "You can create wands that duplicate spell effects. Crafting a wand takes 1 day for each 1,000 gp in its base price. The base price is the caster level × the spell level × 750 gp for 50 charges.",
      special: "",
      description: "<p>You can create wands that hold magical power.</p>",
    },
  },
  {
    name: "Scribe Scroll",
    type: "feat",
    system: {
      category: "itemCreation",
      prerequisites: "Caster level 1",
      benefit: "You can create scrolls from which you or another spellcaster can cast the scribed spell. Scribing a scroll takes 1 day per 1,000 gp of its base price. The base price is caster level × spell level × 25 gp.",
      special: "",
      description: "<p>You can create scrolls that hold spells for later use.</p>",
    },
  },

  // ── Racial (4) ───────────────────────────────────────────────────────────────

  {
    name: "Natural Spellcaster",
    type: "feat",
    system: {
      category: "racial",
      prerequisites: "Iksar or Halfelf; ability to cast spells",
      benefit: "Your racial attunement to magic reduces the arcane spell failure chance when wearing light armor by 5%. This stacks with other reductions.",
      special: "Iksar and half-elf characters have a natural connection to the natural world that translates into a diminished conflict between armor and spellcasting.",
      description: "<p>Your heritage gives you an unusual ease with spellcasting while wearing light armor.</p>",
    },
  },
  {
    name: "Born of Stone",
    type: "feat",
    system: {
      category: "racial",
      prerequisites: "Dwarf or Gnome",
      benefit: "You gain a +2 bonus on saving throws against spells of the earth subtype or effects that move or alter terrain. You also gain a +2 bonus on Craft checks related to stonework.",
      special: "",
      description: "<p>Your deep connection to stone and the earth grants you unusual resilience and skill.</p>",
    },
  },
  {
    name: "Nimble",
    type: "feat",
    system: {
      category: "racial",
      prerequisites: "Halfling",
      benefit: "You gain a +2 bonus on all Climb, Jump, and Move Silently checks. Your racial luck bonus on saving throws increases to +2.",
      special: "",
      description: "<p>Halflings are known for their nimble feet and natural luck, and yours are exceptional even by halfling standards.</p>",
    },
  },
  {
    name: "Primal Warrior",
    type: "feat",
    system: {
      category: "racial",
      prerequisites: "Barbarian, Ogre, or Troll; BAB +2",
      benefit: "Your rage or natural ferocity is particularly potent. Rage-based bonuses to Strength and Constitution increase by 1, and you gain 1 additional round of rage per day.",
      special: "",
      description: "<p>Your primal nature makes you an especially fearsome combatant when your blood is up.</p>",
    },
  },

];
