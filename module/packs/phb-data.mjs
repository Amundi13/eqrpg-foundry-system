/**
 * EverQuest RPG — Player's Handbook Journal Entries
 * Auto-imported into the eqrpg-phb compendium pack on first world launch.
 *
 * Each entry = one JournalEntry document with multiple pages.
 * page.text.format 1 = HTML
 */

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const p = (...lines) => lines.map(l => `<p>${l}</p>`).join("\n");
const h2 = t => `<h2>${t}</h2>`;
const h3 = t => `<h3>${t}</h3>`;
const ul = items => `<ul>${items.map(i=>`<li>${i}</li>`).join("")}</ul>`;
const table = (headers, rows) =>
  `<table><thead><tr>${headers.map(h=>`<th>${h}</th>`).join("")}</tr></thead>`+
  `<tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table>`;

// ---------------------------------------------------------------------------
// CHAPTER 1 — INTRODUCTION
// ---------------------------------------------------------------------------
const CH1_INTRO = {
  name: "Chapter 1: Introduction",
  pages: [
    {
      name: "Welcome to Norrath",
      type: "text", sort: 100,
      text: { format: 1, content: `
${h2("Welcome to the EverQuest Role-Playing Game")}
${p(
  "The EverQuest Role-Playing Game (EQRPG) brings the legendary world of Norrath to the tabletop using the d20 System. Players take on the roles of adventurers in a high-fantasy world of ancient magic, warring deities, and dangerous dungeons.",
  "This handbook is your complete reference for creating characters and playing the game. The Game Master (GM) runs the world; players run their characters.",
  "EQRPG uses a core d20 resolution mechanic: roll a twenty-sided die, add relevant modifiers, and compare the result to a target Difficulty Class (DC) or an opponent's Armor Class (AC)."
)}
${h3("The Basics")}
${ul([
  "<strong>d20 System</strong> — Most checks use 1d20 + modifier vs. a DC.",
  "<strong>Six Abilities</strong> — STR, DEX, CON, INT, WIS, CHA underpin everything.",
  "<strong>Mana</strong> — Spellcasters draw on a mana pool rather than spell slots.",
  "<strong>Levels 1–20</strong> — Characters advance through 20 levels of power.",
  "<strong>Faction</strong> — Your race, class, and deeds shape how NPCs react to you.",
])}` }
    },
    {
      name: "Character Creation Overview",
      type: "text", sort: 200,
      text: { format: 1, content: `
${h2("Character Creation — Step by Step")}
${h3("Step 1: Choose a Race")}
${p("Your race determines your starting ability adjustments, size, speed, and racial abilities. Some races are restricted to specific classes.")}
${h3("Step 2: Choose a Class")}
${p("Your class determines your hit die, Base Attack Bonus (BAB) progression, saving throw progressions, armor/weapon proficiencies, and class features.")}
${h3("Step 3: Generate Ability Scores")}
${p("Use Point-Buy (27 points). Scores start at 8; buy increases using the table below. Racial adjustments are applied after purchase.")}
${table(
  ["Score","Point Cost"],
  [[8,0],[9,1],[10,2],[11,3],[12,4],[13,5],[14,6],[15,8],[16,10],[17,13],[18,16]].map(r=>[r[0],r[1]])
)}
${h3("Step 4: Record Derived Statistics")}
${ul([
  "<strong>HP</strong> = Max hit die at level 1 + CON modifier.",
  "<strong>Mana</strong> = Spellcasting classes gain mana based on their casting ability modifier × level.",
  "<strong>AC</strong> = 10 + DEX modifier + armor bonus + natural armor + other bonuses.",
  "<strong>Initiative</strong> = DEX modifier + miscellaneous bonuses.",
  "<strong>BAB</strong> = Determined by class and level.",
  "<strong>Saving Throws</strong> = Base save (good/poor by class) + ability modifier.",
])}
${h3("Step 5: Choose Skills, Feats & Equipment")}
${p("At level 1 you gain skill points (4 + INT modifier × 4), choose one or more feats (see Chapter 5), and select starting equipment based on your class.")}` }
    },
  ]
};

// ---------------------------------------------------------------------------
// CHAPTER 2 — RACES
// ---------------------------------------------------------------------------
function racePage(name, flavour, size, speed, adj, abilities, classes) {
  const adjRow = Object.entries(adj).filter(([,v])=>v!==0)
    .map(([k,v])=>`${k.toUpperCase()} ${v>0?"+"+v:v}`).join(", ") || "None";
  return {
    name,
    type: "text",
    text: { format: 1, content: `
${h2(name)}
${p(flavour)}
${h3("Racial Traits")}
${table(["Trait","Value"],[
  ["Size", size],
  ["Speed", speed+" ft"],
  ["Ability Adjustments", adjRow],
  ["Racial Abilities", abilities.join(", ")],
  ["Allowed Classes", classes.join(", ")],
])}` }
  };
}

const CH2_RACES = {
  name: "Chapter 2: Races",
  pages: [
    { name: "Races Overview", type: "text", sort: 100, text: { format: 1, content: `
${h2("Races of Norrath")}
${p("Norrath is home to fourteen playable races, each shaped by their culture, environment, and ancient history. Your choice of race affects your ability scores, racial abilities, and which classes you may take.",
   "Some races are closely allied; others are ancient enemies. Your race may open or close faction doors with NPCs throughout Norrath.")}
${table(
  ["Race","Size","Speed","Primary Traits"],
  [
    ["Barbarian","Medium","30 ft","STR +4, CON +2; Slam, Cold Resistance"],
    ["Dark Elf","Medium","30 ft","INT +4, DEX +2; Ultravision, Hide"],
    ["Dwarf","Small","20 ft","STR +2, CON +2, WIS +2; Infravision"],
    ["Erudite","Medium","30 ft","INT +6, WIS +2; Ultravision, Spell Shielding"],
    ["Gnome","Small","20 ft","INT +4, DEX +4; Infravision, Tinkering"],
    ["Half Elf","Medium","30 ft","DEX +2, CHA +2; Infravision"],
    ["Halfling","Small","20 ft","DEX +4, WIS +2; Infravision, Sneak, Luck"],
    ["High Elf","Medium","30 ft","INT +4, WIS +4, CHA +2; Infravision"],
    ["Human","Medium","30 ft","No adjustments; Bonus Feat"],
    ["Iksar","Medium","30 ft","STR +4, DEX +2, WIS +2; Regen, Ultravision, Natural AC"],
    ["Ogre","Large","30 ft","STR +6, CON +4; Slam, Stun Immunity"],
    ["Troll","Large","30 ft","STR +4, CON +6; Slam, Regeneration, Infravision"],
    ["Vah Shir","Medium","30 ft","STR +2; Safe Fall, Sneak, Infravision"],
    ["Wood Elf","Medium","30 ft","DEX +4, WIS +2; Infravision, Forage, Hide"],
  ]
)}` } },
    Object.assign(racePage("Barbarian",
      "Born in the icy lands of Halas, Barbarians are fierce warriors who rely on brute strength and endurance. They are among the tallest and most powerful races in Norrath, though not known for their intellect.",
      "Medium","30",{str:4,dex:0,con:2,int:-2,wis:-2,cha:-2},
      ["Slam (bonus unarmed attack 1/round)","Cold Resistance (+4 saves vs. cold, reduce cold damage by 4)"],
      ["Beastlord","Rogue","Shaman","Warrior"]), {sort: 200}),
    Object.assign(racePage("Dark Elf",
      "Teir'Dal — Dark Elves — dwell in the shadowy city of Neriak. Brilliant and sinister, they excel at arcane arts and subterfuge. Their ultravision makes them formidable in darkness.",
      "Medium","30",{str:-2,dex:2,con:-2,int:4,wis:0,cha:-2},
      ["Ultravision (see in complete darkness)","Hide (+4 racial bonus to Hide checks)"],
      ["Cleric","Enchanter","Magician","Necromancer","Rogue","Shadow Knight","Warrior","Wizard"]), {sort: 300}),
    Object.assign(racePage("Dwarf",
      "The stout Dwarves of Kaladim are renowned craftsmen and stubborn warriors. Short of stature but big of heart, they combine religious devotion with martial prowess.",
      "Small","20",{str:2,dex:0,con:2,int:-2,wis:2,cha:-4},
      ["Infravision (see heat signatures in darkness, 60 ft)"],
      ["Bard","Cleric","Paladin","Rogue","Warrior"]), {sort: 400}),
    Object.assign(racePage("Erudite",
      "Erudites hail from Erudin, a city of scholars and mages. They possess the highest intellect of any race and a natural affinity for arcane magic, though their thin frames and bookish nature leave them physically weak.",
      "Medium","30",{str:-4,dex:-2,con:0,int:6,wis:2,cha:-2},
      ["Ultravision","Spell Shielding (reduce magic damage taken by 10%, +2 to saves vs. spells)"],
      ["Cleric","Enchanter","Magician","Necromancer","Paladin","Shadow Knight","Wizard"]), {sort: 500}),
    Object.assign(racePage("Gnome",
      "The clever Gnomes of Ak'Anon are natural tinkerers and arcane theorists. Small and quick, they compensate for their physical limitations with extraordinary dexterity and intellect.",
      "Small","20",{str:-4,dex:4,con:-2,int:4,wis:-2,cha:0},
      ["Infravision","Tinkering (class skill; can attempt to create and repair mechanical devices)"],
      ["Cleric","Enchanter","Magician","Necromancer","Paladin","Rogue","Shadow Knight","Warrior","Wizard"]), {sort: 600}),
    Object.assign(racePage("Half Elf",
      "Half Elves walk the line between human adaptability and elven grace. Welcome in neither society fully, they often become wanderers, bards, and rangers.",
      "Medium","30",{str:0,dex:2,con:-2,int:0,wis:-2,cha:2},
      ["Infravision"],
      ["Bard","Druid","Paladin","Ranger","Rogue","Shadow Knight","Warrior"]), {sort: 700}),
    Object.assign(racePage("Halfling",
      "The cheerful Halflings of Rivervale are small folk with surprisingly deadly aim and an uncanny knack for avoiding trouble. Their famous luck has saved many an adventuring party from disaster.",
      "Small","20",{str:-2,dex:4,con:0,int:-2,wis:2,cha:-2},
      ["Infravision","Sneak (+4 racial bonus to Move Silently)","Luck (+1 bonus to all saving throws)"],
      ["Bard","Cleric","Druid","Paladin","Ranger","Rogue","Warrior"]), {sort: 800}),
    Object.assign(racePage("High Elf",
      "Koada'Dal — High Elves — are the most magically gifted of the elven races, combining arcane talent with divine wisdom. They dwell in the shining city of Felwithe.",
      "Medium","30",{str:-4,dex:0,con:-2,int:4,wis:4,cha:2},
      ["Infravision"],
      ["Bard","Cleric","Enchanter","Magician","Paladin","Rogue","Wizard"]), {sort: 900}),
    Object.assign(racePage("Human",
      "Humans are the most versatile race in Norrath. With no ability penalties and access to every class, they compensate for their lack of specialization with adaptability and an extra feat at first level.",
      "Medium","30",{str:0,dex:0,con:0,int:0,wis:0,cha:0},
      ["Bonus Feat (gain one extra feat at 1st level)"],
      ["All classes"]), {sort: 1000}),
    Object.assign(racePage("Iksar",
      "The reptilian Iksar of Kunark are an ancient and proud people, long enslaved but now free. Disciplined martial artists and spiritual warriors, they possess natural armor and powerful regeneration.",
      "Medium","30",{str:4,dex:2,con:0,int:0,wis:2,cha:-4},
      ["Ultravision","Natural AC (+3 natural armor bonus)","Regeneration (regain 1 HP per round out of combat)","Foraging (class skill)","Swimming (class skill)"],
      ["Beastlord","Monk","Necromancer","Shadow Knight","Shaman","Warrior"]), {sort: 1100}),
    Object.assign(racePage("Ogre",
      "Ogres are the most physically powerful race in Norrath — massive, devastating in melee, and virtually impossible to stun. Their low intelligence and charisma limit their class options but not their effectiveness in battle.",
      "Large","30",{str:6,dex:-2,con:4,int:-4,wis:-2,cha:-4},
      ["Slam (bonus unarmed attack 1/round)","Stun Immunity (cannot be stunned by any effect)"],
      ["Beastlord","Shadow Knight","Shaman","Warrior"]), {sort: 1200}),
    Object.assign(racePage("Troll",
      "Trolls of Grobb are brutal, regenerating warriors feared across Norrath. Their incredible constitution and rapid healing make them nearly unstoppable in prolonged combat, though they are neither quick nor clever.",
      "Large","30",{str:4,dex:0,con:6,int:-4,wis:-2,cha:-6},
      ["Infravision","Slam (bonus unarmed attack 1/round)","Regeneration (regain 2 HP per round)"],
      ["Beastlord","Shadow Knight","Shaman","Warrior"]), {sort: 1300}),
    Object.assign(racePage("Vah Shir",
      "The feline Vah Shir hail from the moon Luclin. Agile, proud, and independent, they combine natural stealth with martial talent.",
      "Medium","30",{str:2,dex:0,con:0,int:-2,wis:0,cha:0},
      ["Infravision","Safe Fall (take no damage from falls of 30 ft or less; halve damage from greater falls)","Sneak (+4 racial bonus to Move Silently)"],
      ["Bard","Beastlord","Monk","Rogue","Shaman","Warrior"]), {sort: 1400}),
    Object.assign(racePage("Wood Elf",
      "Feir'Dal — Wood Elves — are the children of Tunare, dwelling in the treetop city of Kelethin. Expert archers and forest survivalists, they are fast, graceful, and at home in the wild.",
      "Medium","30",{str:-2,dex:4,con:-2,int:0,wis:2,cha:0},
      ["Infravision","Foraging (class skill; locate food and water in the wild)","Hide (+4 racial bonus to Hide checks in natural terrain)"],
      ["Bard","Druid","Ranger","Rogue","Warrior"]), {sort: 1500}),
  ]
};

// ---------------------------------------------------------------------------
// CHAPTER 3 — CLASSES
// ---------------------------------------------------------------------------
function classPage(name, flavour, hitDie, bab, saves, armor, casting, features) {
  return {
    name,
    type: "text",
    text: { format: 1, content: `
${h2(name)}
${p(flavour)}
${h3("Class Statistics")}
${table(["Stat","Value"],[
  ["Hit Die", `d${hitDie}`],
  ["BAB Progression", bab],
  ["Good Saves", saves],
  ["Armor Proficiency", armor || "None"],
  ["Spellcasting Ability", casting || "—"],
])}
${h3("Class Features")}
${ul(features)}` }
  };
}

const CH3_CLASSES = {
  name: "Chapter 3: Classes",
  pages: [
    { name: "Classes Overview", type: "text", sort: 100, text: { format: 1, content: `
${h2("Classes of Norrath")}
${p("Your class is your primary role in the party. It determines combat ability, spellcasting, and the special abilities you gain as you advance.")}
${table(
  ["Class","Hit Die","BAB","Good Saves","Armor","Casting"],
  [
    ["Bard","d10","Medium","Reflex, Will","Light/Medium/Heavy","— (Songs)"],
    ["Beastlord","d8","Full","Fort, Reflex","Light","WIS"],
    ["Berserker","d12","Full","Fortitude","Light/Medium","—"],
    ["Cleric","d8","Medium","Fort, Will","Light/Med/Heavy/Shield","WIS"],
    ["Druid","d8","Medium","Fort, Will","Light","WIS"],
    ["Enchanter","d4","Poor","Will","None","INT"],
    ["Magician","d4","Poor","Will","None","INT"],
    ["Monk","d8","Medium","Fort, Reflex, Will","None","—"],
    ["Necromancer","d4","Poor","Fort, Will","None","INT"],
    ["Paladin","d10","Full","Fortitude","Light/Med/Heavy/Shield","WIS"],
    ["Ranger","d10","Full","Fort, Reflex","Light/Medium","WIS"],
    ["Rogue","d6","Medium","Reflex","Light","—"],
    ["Shadow Knight","d10","Full","Fortitude","Light/Med/Heavy/Shield","INT"],
    ["Shaman","d8","Medium","Fort, Will","Light/Medium","WIS"],
    ["Warrior","d12","Full","Fortitude","Light/Med/Heavy/Shield","—"],
    ["Wizard","d4","Poor","Will","None","INT"],
  ]
)}` } },
    Object.assign(classPage("Bard",
      "Masters of song and steel, Bards weave magical melodies that enhance allies and hamper foes while holding their own in melee. Their songs can mezmerize, haste, heal, or destroy.",
      10,"Medium (¾ × level)","Reflex & Will","Light, Medium, Heavy armor + Shields","None (Songs are maintained through concentration)",
      [
        "Song Magic — Bards sing songs rather than cast spells. A song requires Concentration each round; switching songs is a free action.",
        "Inspire Courage — At 1st level, Bards grant +1 morale to attack/damage to nearby allies.",
        "Lore & Legend — Bards can attempt Knowledge checks untrained and gain a bardic lore ability.",
        "Instrument Proficiency — Bards gain proficiency with all musical instruments and gain bonuses when using them.",
        "Fascinate — At 6th level, Bards can fascinate creatures by playing or singing.",
      ]
    ),{sort:200}),
    Object.assign(classPage("Beastlord",
      "Half shaman, half warrior, the Beastlord bonds with a spirit warder — a powerful animal companion that fights alongside them. They enhance both themselves and their warder with spirit magic.",
      8,"Full (= level)","Fortitude & Reflex","Light armor only","WIS",
      [
        "Warder Bond — A Beastlord's spirit warder is a powerful animal companion that grows in strength with the Beastlord.",
        "Spirit Spells — Beastlords cast a limited selection of shaman-like spells focused on buffs, debuffs, and pet enhancement.",
        "Feral Swipe — At 5th level, Beastlords gain a claw attack (1d6) in addition to their weapon attacks.",
        "Spirit of the Beast — At 10th level, the Beastlord can temporarily take on beast-like qualities, gaining +2 STR/DEX/CON.",
      ]
    ),{sort:300}),
    Object.assign(classPage("Berserker",
      "Berserkers are fearless warriors who channel primal rage into devastating combat power. They forgo defense for overwhelming offense, dealing massive damage at the cost of their own safety.",
      12,"Full (= level)","Fortitude","Light and Medium armor","None",
      [
        "Rage — Once per encounter, a Berserker can enter a rage as a free action: +4 STR, +4 CON, +2 Will saves, -2 AC for the duration.",
        "Frenzy — At 3rd level, Berserkers can make one additional melee attack per round while raging.",
        "Reckless Attack — Berserkers can trade AC for attack bonus (up to -5 AC / +5 attack).",
        "Damage Reduction — At 7th level, Berserkers gain DR 1/— which increases by 1 every 3 levels.",
        "Greater Rage — At 11th level, rage bonuses increase to +6 STR/CON.",
      ]
    ),{sort:400}),
    Object.assign(classPage("Cleric",
      "Devoted servants of their deity, Clerics wield divine magic to heal the living, destroy the undead, and shield the faithful. They are the backbone of any adventuring party.",
      8,"Medium (¾ × level)","Fortitude & Will","Light, Medium, Heavy armor + Shields","WIS",
      [
        "Divine Spellcasting — Clerics draw mana from their deity's favor. Mana pool = WIS modifier × level × 3.",
        "Turn/Rebuke Undead — Clerics can turn (or rebuke if evil) undead a number of times per day equal to 3 + CHA modifier.",
        "Lay on Hands (Paladin overlap) — At 4th level, Clerics can heal 1d8 HP per level once per day as a full-round action.",
        "Bonus Domain — At 1st level, choose a divine domain (Healing, Protection, War, etc.) for bonus spells and abilities.",
        "Deity Alignment — Clerics must remain within one step of their deity's alignment.",
      ]
    ),{sort:500}),
    Object.assign(classPage("Druid",
      "Druids are guardians of nature who draw power from the natural world. Their spells span healing, elemental damage, movement enhancement, and control — making them versatile solo adventurers.",
      8,"Medium (¾ × level)","Fortitude & Will","Light armor only","WIS",
      [
        "Nature Spellcasting — Druids cast from a WIS-based mana pool. Mana = WIS modifier × level × 3.",
        "Wilderness Stride — Druids move through natural difficult terrain without penalty.",
        "Animal Companion — At 4th level, Druids may bond with an animal companion.",
        "Nature's Wrath — At 6th level, Druids deal +1d6 bonus nature damage on attack spells vs. undead and constructs.",
        "Elemental Mastery — At 10th level, fire and cold spells bypass resistance once per encounter.",
        "Wolf Form — At 12th level, Druids can assume wolf form, doubling movement and gaining a bite attack.",
      ]
    ),{sort:600}),
    Object.assign(classPage("Enchanter",
      "The most intellectually powerful class in Norrath, Enchanters bend minds, warp time, and reshape reality. A skilled Enchanter can control entire battles through mezmerize, haste, and debuffs.",
      4,"Poor (½ × level)","Will only","None","INT",
      [
        "Arcane Spellcasting — INT-based mana pool. Mana = INT modifier × level × 3.",
        "Mezmerize — Enchanters are the premier control class; their mezmerize spells stop enemies in their tracks.",
        "Haste — Enchanters provide the best haste effects in the game, accelerating the entire party.",
        "Clarity — Enchanters regenerate the party's mana through Clarity-line spells.",
        "Charm — High-level Enchanters can temporarily charm powerful creatures to fight alongside the party.",
        "Rune Absorb — Enchanters place damage-absorbing runes on allies as a primary defensive tool.",
        "Illusions — Enchanters can disguise themselves and allies as other races for faction manipulation.",
      ]
    ),{sort:700}),
    Object.assign(classPage("Magician",
      "Masters of elemental summoning, Magicians conjure elemental pets, magical weapons, and equipment from raw planar energy. Their pets fight independently while the Magician nukes from range.",
      4,"Poor (½ × level)","Will only","None","INT",
      [
        "Elemental Pets — Magicians summon Earth, Water, Fire, or Air elementals as loyal combat companions.",
        "Arcane Spellcasting — INT-based mana pool. Elementals scale in power with the Magician's level.",
        "Summon Items — Magicians can conjure magical weapons, armor, and food/water from thin air.",
        "Call of the Hero — At level 5, Magicians can teleport willing allies to their location instantly.",
        "Burnout — Magicians buff their elemental pets to extreme combat effectiveness.",
        "Reclaim Energy — Dismiss pet to recover portion of spent mana as an emergency measure.",
      ]
    ),{sort:800}),
    Object.assign(classPage("Monk",
      "Monks are disciplined martial artists who channel inner spirit energy into devastating unarmed and weapons combat. They are the fastest moving class in Norrath and the only non-casters with Feign Death.",
      8,"Medium (¾ × level)","Fortitude, Reflex & Will","None (armor interferes with abilities)","None",
      [
        "Unarmed Strike — Monks deal escalating unarmed damage (1d6 at 1st level, up to 2d10 at 20th).",
        "Flurry of Blows — Once per round, a Monk may make one extra unarmed attack at -2.",
        "Feign Death — At 3rd level, Monks can feign death to drop aggro or escape pursuit.",
        "Evasion — At 2nd level, a successful Reflex save against area effects deals no damage instead of half.",
        "Diamond Skin — At 8th level, Monks gain DR 2/— that increases with level.",
        "Stunning Kick — At 4th level, Monk kicks can stun (Fort save negates, DC 10 + ½ level + WIS mod).",
        "Movement Speed — Monks gain +10 ft movement at levels 3, 6, 9, 12, 15 (max +50 ft).",
      ]
    ),{sort:900}),
    Object.assign(classPage("Necromancer",
      "Dark scholars of death, Necromancers command undead armies, drain life, and manipulate the boundary between life and death. They are devastating solo fighters but require careful resource management.",
      4,"Poor (½ × level)","Fortitude & Will","None","INT",
      [
        "Undead Command — Necromancers animate and control undead servants that grow in power with level.",
        "Lifetap — Drain HP from enemies to restore the Necromancer's own health.",
        "Dark Pact — Sacrifice HP to recover mana in emergencies.",
        "Feign Death — At level 5, Necromancers gain Feign Death to escape danger.",
        "Harmshield — A powerful but brief total damage immunity that can save a Necromancer from death.",
        "Splurt — The iconic escalating DoT; starts at 1 dmg/round and increases by 1 each round to 20.",
        "Lich Form — At high levels, partially transform into undead to continuously convert HP to mana.",
      ]
    ),{sort:1000}),
    Object.assign(classPage("Paladin",
      "Holy warriors in service to good-aligned deities, Paladins combine heavy armor and melee prowess with divine magic and auras. They are the best-protected class in Norrath.",
      10,"Full (= level)","Fortitude","Light, Medium, Heavy armor + Shields","WIS",
      [
        "Divine Grace — Paladins add their CHA modifier to all saving throws.",
        "Lay on Hands — Heal a creature for CHA modifier × level HP once per day as a full-round action.",
        "Smite Evil — Once per day per 5 levels, add CHA modifier to attack and level to damage vs. evil creatures.",
        "Turn Undead — As Clerics; uses CHA modifier.",
        "Aura of Courage — Allies within 30 ft are immune to mundane fear.",
        "Divine Spells — Paladins cast WIS-based healing, protection, and divine strike spells (limited list).",
        "Holy Avenger — At 15th level, Paladin's weapon is treated as a Holy Avenger dealing +2d6 vs. evil.",
      ]
    ),{sort:1100}),
    Object.assign(classPage("Ranger",
      "Skilled hunters and trackers, Rangers are the masters of wilderness combat. They excel against specific enemy types, use both melee and ranged weapons with equal skill, and cast nature spells.",
      10,"Full (= level)","Fortitude & Reflex","Light and Medium armor","WIS",
      [
        "Favored Enemy — At 1st level, choose an enemy type: +2 to attack, damage, and skill checks against that type.",
        "Track — Rangers can follow tracks as a standard action (Wilderness Lore check).",
        "Nature Spells — Rangers cast WIS-based nature spells (limited druid/shaman spell list).",
        "Dual Wield Mastery — Rangers reduce Two-Weapon Fighting penalties by 2.",
        "Camouflage — Rangers use the druid Camouflage spell at will at 4th level.",
        "Sneak Attack — Rangers gain a limited sneak attack (+1d6) when flanking a favored enemy.",
        "Evasion — At 9th level, Rangers gain the Monk's Evasion ability against area effects.",
      ]
    ),{sort:1200}),
    Object.assign(classPage("Rogue",
      "Rogues are the masters of stealth, deception, and precision strikes. A single well-placed Rogue backstab can drop a target before they have a chance to react.",
      6,"Medium (¾ × level)","Reflex","Light armor only","None",
      [
        "Sneak Attack — Deals +1d6 per 2 rogue levels when flanking or attacking a flat-footed target.",
        "Backstab — Once per round, a Rogue in melee can attempt a backstab: multiply one weapon die by ×2 at 5th level up to ×5 at 20th.",
        "Evasion — At 2nd level, successful Reflex saves against areas cause no damage.",
        "Uncanny Dodge — At 4th level, Rogues cannot be caught flat-footed.",
        "Trap Finding — Rogues can locate and disarm magical traps that others cannot detect.",
        "Poison Use — Rogues can apply poison to weapons without risk of poisoning themselves.",
        "Special Abilities — At 10th+, choose from Opportunist, Improved Evasion, Defensive Roll, etc.",
      ]
    ),{sort:1300}),
    Object.assign(classPage("Shadow Knight",
      "The dark mirror of the Paladin, Shadow Knights combine heavy armor and melee power with dark magic — lifetaps, fear, DoTs, and necrotic AEs. Terrifying tanks with offensive magic.",
      10,"Full (= level)","Fortitude","Light, Medium, Heavy armor + Shields","INT",
      [
        "Harm Touch — Once per day, deal CHA modifier × level necrotic damage to a target with a touch.",
        "Dark Magic — INT-based casting of necromancer and some enchantment spells.",
        "Lifetap Spells — Multiple lifetap spells restore the Shadow Knight's HP while damaging foes.",
        "Fear Spells — Shadow Knights can frighten enemies, sending them fleeing.",
        "Unholy Aura — At 5th level, allies within 10 ft gain +1 morale bonus to attack rolls.",
        "Death's Mark — At 8th level, cursed targets take +10% more damage from all sources.",
        "Lich Affinity — At high levels, can briefly enter Lich form to trade HP for mana.",
      ]
    ),{sort:1400}),
    Object.assign(classPage("Shaman",
      "Ancient spirit workers from Barbarian, Troll, Ogre, Iksar, and Vah Shir cultures, Shamans buff allies, debuff enemies, heal, and damage with spirit and nature magic. Versatile but mana-intensive.",
      8,"Medium (¾ × level)","Fortitude & Will","Light and Medium armor","WIS",
      [
        "Spirit Magic — WIS-based mana pool with an emphasis on long-duration buffs and powerful debuffs.",
        "Talisman Buffs — Shamans boost party stats (STR, STA, DEX) dramatically through talisman spells.",
        "Slow — Turgur's Insects and similar spells reduce enemy attack speed by 25-40%.",
        "Cannibalize — Sacrifice HP for mana; multiple tiers allow sustained casting at a cost.",
        "Cripple — The signature debuff: halves enemy speed and reduces DEX.",
        "Spirit of Wolf — Grants double movement speed; usable on entire party.",
        "Healing — Shamans have access to powerful single-target heals and group HoTs.",
      ]
    ),{sort:1500}),
    Object.assign(classPage("Warrior",
      "Warriors are pure melee combatants — the toughest, most damage-absorbent class in the game. With the highest hit points, best armor, and a full BAB, Warriors hold the line so others can act.",
      12,"Full (= level)","Fortitude","Light, Medium, Heavy armor + Shields","None",
      [
        "Weapon Specialization — At 4th level, Warriors gain +2 damage with one chosen weapon type.",
        "Bonus Feats — Warriors gain one additional combat feat every 2 levels.",
        "Shield Mastery — At 3rd level, shield bonus to AC increases by +1; again at 8th and 13th.",
        "Taunt — Warriors can force enemies to target them (CHA check vs. enemy Will DC).",
        "Combat Mastery — At 7th level, Warriors can make one free trip or disarm attempt per round.",
        "Defensive Stance — As a move action, Warriors adopt a defensive stance: +4 AC, -2 attack.",
        "Veteran's Edge — At 15th level, Warriors are immune to fear and gain +2 to all weapon damage.",
      ]
    ),{sort:1600}),
    Object.assign(classPage("Wizard",
      "The most powerful offensive spellcasters in Norrath, Wizards wield devastating elemental magic. They are fragile but their AE nukes and single-target bursts are unrivaled.",
      4,"Poor (½ × level)","Will only","None","INT",
      [
        "Arcane Spellcasting — INT-based mana pool. Highest spell levels and the hardest-hitting nukes.",
        "Elemental Specialization — At 3rd level, choose a specialization (Fire, Ice, Lightning); +1 die on those spells.",
        "Gate — Wizards can teleport to their bound location at any time as a full-round action.",
        "Translocate — Wizards can port individual targets to designated locations.",
        "Familiar — At 5th level, Wizards bond with an arcane familiar that grants +2 INT.",
        "Improved Rapid Casting — At 8th level, reduce casting time of any spell by one action once per round.",
        "Ancient Magic — At 15th+ level, Wizard spells become Ancient variants: +20% damage and ignore resistance.",
      ]
    ),{sort:1700}),
  ]
};

// ---------------------------------------------------------------------------
// CHAPTER 4 — ABILITY SCORES & SKILLS
// ---------------------------------------------------------------------------
const CH4_ABILITIES = {
  name: "Chapter 4: Ability Scores & Skills",
  pages: [
    {
      name: "Ability Scores", type: "text", sort: 100,
      text: { format: 1, content: `
${h2("The Six Ability Scores")}
${p("Every character has six ability scores that measure their core attributes. Modifiers derived from these scores affect nearly every roll in the game.")}
${table(
  ["Score","Abbr","Governs","Modifier Formula"],
  [
    ["Strength","STR","Melee attack/damage, Carry capacity","(Score − 10) ÷ 2, round down"],
    ["Dexterity","DEX","Ranged attack, AC, Reflex saves, Initiative","(Score − 10) ÷ 2, round down"],
    ["Constitution","CON","Hit points, Fortitude saves","(Score − 10) ÷ 2, round down"],
    ["Intelligence","INT","Spell mana (casters), Skill points, INT spells","(Score − 10) ÷ 2, round down"],
    ["Wisdom","WIS","Spell mana (divine), WIS spells, Will saves","(Score − 10) ÷ 2, round down"],
    ["Charisma","CHA","Faction reactions, Paladin/SK class features","(Score − 10) ÷ 2, round down"],
  ]
)}
${h3("Modifier Quick Reference")}
${table(
  ["Score","Modifier"],
  [[1,-5],[2,-4],[3,-4],[4,-3],[5,-3],[6,-2],[7,-2],[8,-1],[9,-1],[10,0],[11,0],[12,1],[13,1],[14,2],[15,2],[16,3],[17,3],[18,4],[19,4],[20,5],[21,5],[22,6],[23,6],[24,7],[25,7]].map(r=>[r[0],r[1]>=0?"+"+r[1]:r[1]])
)}` }
    },
    {
      name: "Skills", type: "text", sort: 200,
      text: { format: 1, content: `
${h2("Skills")}
${p("Skills represent trained or innate abilities. Each skill has a governing ability score. Your skill rank + ability modifier = total skill bonus.",
   "Skill points per level: 4 + INT modifier (minimum 1). At 1st level, multiply by 4.",
   "Class skills have a maximum rank of character level + 3. Cross-class skills have a maximum of half that.")}
${h3("Skill Check")}
${p("1d20 + skill rank + ability modifier + miscellaneous bonuses ≥ Difficulty Class (DC)")}
${h3("Common DCs")}
${table(["Task Difficulty","DC"],[["Easy",5],["Average",10],["Tough",15],["Challenging",20],["Formidable",25],["Heroic",30],["Nearly Impossible",40]])}
${h3("Skill Categories")}
${table(
  ["Category","Key Skills"],
  [
    ["Combat","1H Slashing, 2H Slashing, 1H Blunt, 2H Blunt, Piercing, Archery, Hand to Hand, Bash, Kick, Double Attack, Dual Wield, Disarm"],
    ["Defense","Dodge, Block, Parry, Riposte"],
    ["Stealth","Sneak, Hide, Safe Fall, Sense Heading"],
    ["Outdoor","Swimming, Forage, Fishing, Tracking, Wilderness Lore"],
    ["Magic","Meditate, Channeling, Concentration, Spell: Evocation/Alteration/Conjuration/Enchantment/Necromancy"],
    ["Perception","Listen, Spot, Search, Appraise, Read Lips"],
    ["Physical","Climb, Jump, Balance, Escape Artist, Tumble, Use Rope"],
    ["Social","Bluff, Diplomacy, Gather Information, Intimidation, Sense Motive, Taunt, Begging, Perform"],
    ["Tradeskills","Baking, Brewing, Blacksmithing, Tailoring, Jewelcrafting, Pottery, Tinkering, Alchemy"],
    ["Thievery","Pick Lock, Open Lock, Pick Pocket, Disguise, Forgery"],
  ]
)}` }
    },
  ]
};

// ---------------------------------------------------------------------------
// CHAPTER 5 — FEATS
// ---------------------------------------------------------------------------
const CH5_FEATS = {
  name: "Chapter 5: Feats",
  pages: [
    {
      name: "Feats Overview", type: "text", sort: 100,
      text: { format: 1, content: `
${h2("Feats")}
${p("Feats are special abilities that grant your character unique powers and options. You gain one feat at 1st level (Humans gain two), and one additional feat every three levels (3rd, 6th, 9th, etc.).",
   "Some feats have prerequisites — ability score minimums, other feats, or BAB requirements — that must be met before the feat can be selected.")}
${h3("Feat Categories")}
${ul([
  "<strong>General Feats</strong> — Broad utility feats available to any character.",
  "<strong>Combat Feats</strong> — Enhance melee and ranged combat options.",
  "<strong>Magic Feats</strong> — Enhance spellcasting ability and mana efficiency.",
  "<strong>Metamagic Feats</strong> — Modify spells in exchange for increased mana cost.",
  "<strong>Item Creation Feats</strong> — Allow creation of magical items and potions.",
  "<strong>Racial Feats</strong> — Feats available only to specific races.",
])}
${h3("Combat Feat Chain: Two-Weapon Fighting")}
${table(
  ["Feat","Prerequisite","Benefit"],
  [
    ["Two-Weapon Fighting","DEX 15","Reduce off-hand penalties: primary −2, off-hand −6"],
    ["Improved Two-Weapon Fighting","DEX 17, Two-WF, BAB +6","Gain a second off-hand attack at −5"],
    ["Two-Weapon Defense","DEX 15, Two-WF","+1 shield bonus to AC (+2 when total defense)"],
  ]
)}
${h3("Combat Feat Chain: Archery")}
${table(
  ["Feat","Prerequisite","Benefit"],
  [
    ["Point Blank Shot","—","+1 attack and damage within 30 ft"],
    ["Precise Shot","Point Blank Shot","No penalty for shooting into melee"],
    ["Rapid Shot","DEX 13, PBS","Extra ranged attack at −2 to all attacks"],
    ["Far Shot","Point Blank Shot","Ranged weapon range increments × 1.5"],
    ["Shot on the Run","DEX 13, Dodge, Mobility, PBS, BAB+4","Move before and after ranged attack"],
  ]
)}
${h3("Combat Feat Chain: Mobility")}
${table(
  ["Feat","Prerequisite","Benefit"],
  [
    ["Dodge","DEX 13","+1 dodge bonus to AC vs. one designated opponent per round"],
    ["Mobility","DEX 13, Dodge","+4 dodge AC vs. attacks of opportunity from movement"],
    ["Spring Attack","Dodge, Mobility, BAB+4","Move before and after a melee attack"],
    ["Whirlwind Attack","Dodge, Mobility, Spring Attack, Combat Expertise, BAB+4","Attack every adjacent opponent once"],
  ]
)}` }
    },
  ]
};

// ---------------------------------------------------------------------------
// CHAPTER 6 — COMBAT
// ---------------------------------------------------------------------------
const CH6_COMBAT = {
  name: "Chapter 6: Combat",
  pages: [
    {
      name: "Combat Basics", type: "text", sort: 100,
      text: { format: 1, content: `
${h2("Combat")}
${p("Combat in EQRPG is played in rounds. Each round represents 6 seconds of in-game time. On your turn you may take a standard action, a move action, and a free action (or two move actions).")}
${h3("Turn Structure")}
${ul([
  "<strong>Standard Action</strong> — Attack, cast a spell, use an item, administer first aid.",
  "<strong>Move Action</strong> — Move up to your speed, draw/sheathe a weapon, stand up from prone.",
  "<strong>Full-Round Action</strong> — Full attack (all iterative attacks), full-round spell.",
  "<strong>Free Action</strong> — Drop an item, speak, use a racial ability.",
  "<strong>Immediate/Reaction</strong> — Triggered outside your turn (e.g., Divine Aura).",
])}
${h3("Initiative")}
${p("At the start of combat, everyone rolls 1d20 + DEX modifier + any initiative bonuses. Act in descending order. Ties broken by DEX modifier, then re-roll.")}
${h3("Attack Roll")}
${p("1d20 + BAB + STR modifier (melee) or DEX modifier (ranged) + miscellaneous ≥ target's AC.")}
${h3("Armor Class")}
${p("AC = 10 + armor bonus + shield bonus + DEX modifier + natural armor + deflection + dodge + size modifier.")}
${h3("Saving Throws")}
${table(
  ["Save","Ability","Defends Against"],
  [
    ["Fortitude","CON","Poison, disease, death effects, energy drain"],
    ["Reflex","DEX","Area effects (fireballs, AE spells), traps"],
    ["Will","WIS","Mind-affecting spells, fear, charm, mezmerize"],
  ]
)}
${p("Save DC = 10 + spell level + caster's spellcasting ability modifier.")}` }
    },
    {
      name: "Damage & Conditions", type: "text", sort: 200,
      text: { format: 1, content: `
${h2("Damage")}
${p("When an attack hits, roll the weapon or spell damage dice and add relevant modifiers (STR for melee, spell ability for magic). Subtract the result from the target's HP.")}
${h3("Critical Hits")}
${p("Roll a natural 20 (or within the weapon's critical threat range): confirm by rolling again vs. AC. On confirmation, multiply the weapon die by the critical multiplier (×2 default, ×3 some weapons). Bonus damage dice (elemental, sneak attack) are not multiplied.")}
${h3("Hit Points & Death")}
${ul([
  "0 HP — Incapacitated (unconscious, disabled).",
  "Negative HP up to -CON score — Dying; lose 1 HP per round; stable on natural 20 CON check.",
  "At negative CON score — Dead.",
])}
${h3("Common Conditions")}
${table(
  ["Condition","Effect"],
  [
    ["Blinded","−2 AC; attacks made at 50% miss chance; lose DEX to AC"],
    ["Confused","Roll 1d8 each action: 1-2 attack nearest creature, 3-4 do nothing, 5-8 act normally"],
    ["Dazed","Lose standard action for one round; can still move"],
    ["Exhausted","Speed halved; −6 STR and DEX; after rest becomes Fatigued"],
    ["Fatigued","Speed −10 ft; −2 STR and DEX"],
    ["Frightened","Must flee; −2 attack, damage, saves, skill checks"],
    ["Mezzmerized","Cannot act; breaks on damage"],
    ["Paralyzed","Cannot move or act; DEX treated as 0; melee attackers gain +4 to hit"],
    ["Rooted","Cannot move; all other actions allowed"],
    ["Slowed","One fewer attack per round; −1 AC, −1 attack; move at half speed"],
    ["Stunned","Cannot act for 1 round; DEX to AC lost; attackers gain +2 to hit"],
  ]
)}` }
    },
    {
      name: "Iterative Attacks", type: "text", sort: 300,
      text: { format: 1, content: `
${h2("Multiple Attacks & Iterative Attacks")}
${p("At BAB +6/+1, full BAB characters gain additional attacks. Each iterative attack is at −5 from the previous.")}
${table(
  ["BAB Range","Attack Array"],
  [
    ["+1 to +5","1 attack"],
    ["+6 to +10","+6/+1"],
    ["+11 to +15","+11/+6/+1"],
    ["+16 to +20","+16/+11/+6/+1"],
  ]
)}
${p("You only get iterative attacks on a Full Attack action. If you move more than 5 ft in a round, you can only make a single attack.",
   "Two-weapon fighting grants additional off-hand attacks with penalties. Haste spells grant one extra attack at your full BAB.")}
${h3("Ranged Attacks in Melee")}
${p("Shooting or throwing into melee imposes a −4 penalty. The Precise Shot feat removes this penalty.")}` }
    },
  ]
};

// ---------------------------------------------------------------------------
// CHAPTER 7 — EQUIPMENT
// ---------------------------------------------------------------------------
const CH7_EQUIPMENT = {
  name: "Chapter 7: Equipment",
  pages: [
    {
      name: "Weapons", type: "text", sort: 100,
      text: { format: 1, content: `
${h2("Weapons")}
${h3("Simple Weapons")}
${table(
  ["Weapon","Damage","Type","Crit","Range","Notes"],
  [
    ["Club","1d6","Blunt","×2","—",""],
    ["Dagger","1d4","Piercing","19–20/×2","10 ft","Can throw"],
    ["Light Mace","1d6","Blunt","×2","—",""],
    ["Heavy Mace","1d8","Blunt","×2","—",""],
    ["Quarterstaff","1d6/1d6","Blunt","×2","—","Two-handed"],
    ["Shortspear","1d6","Piercing","×2","20 ft","Can throw"],
    ["Sling","1d4","Blunt","×2","50 ft","Ranged"],
    ["Light Crossbow","1d8","Piercing","19–20/×2","80 ft","Ranged"],
  ]
)}
${h3("Martial Weapons")}
${table(
  ["Weapon","Damage","Type","Crit","Notes"],
  [
    ["Short Sword","1d6","Slashing","19–20/×2","Light"],
    ["Rapier","1d6","Piercing","18–20/×2","Light, Finesse"],
    ["Longsword","1d8","Slashing","19–20/×2",""],
    ["Broad Sword","1d8","Slashing","19–20/×2",""],
    ["Scimitar","1d6","Slashing","18–20/×2","Light"],
    ["Battleaxe","1d8","Slashing","×3",""],
    ["Handaxe","1d6","Slashing","×3","Light, can throw"],
    ["Flail","1d8","Blunt","×2",""],
    ["Warhammer","1d8","Blunt","×3",""],
    ["Greatsword","2d6","Slashing","19–20/×2","Two-handed"],
    ["Greataxe","1d12","Slashing","×3","Two-handed"],
    ["Halberd","1d10","Slashing/Piercing","×3","Two-handed, reach"],
    ["Two-Handed Hammer","2d6","Blunt","×3","Two-handed"],
    ["Shortbow","1d6","Piercing","×3","60 ft, ranged"],
    ["Longbow","1d8","Piercing","×3","100 ft, ranged"],
    ["Composite Longbow","1d8+STR","Piercing","×3","100 ft, ranged"],
  ]
)}
${h3("Exotic Weapons")}
${table(
  ["Weapon","Damage","Type","Crit","Notes"],
  [
    ["Bastard Sword","1d10","Slashing","19–20/×2","One- or two-handed"],
    ["Hand Crossbow","1d4","Piercing","19–20/×2","30 ft ranged"],
    ["War Axe","1d8","Slashing","×3",""],
    ["Hand Wraps","1d4","Blunt","×2","Monk only; unarmed enhancement"],
    ["Kukri","1d4","Slashing","18–20/×2","Light"],
  ]
)}` }
    },
    {
      name: "Armor", type: "text", sort: 200,
      text: { format: 1, content: `
${h2("Armor")}
${h3("Light Armor")}
${table(
  ["Armor","AC Bonus","Max DEX","Check Penalty","Speed","Weight"],
  [
    ["Padded","1","8","0","30/20 ft","10 lb"],
    ["Cloth Armor","1","8","0","30/20 ft","10 lb"],
    ["Leather Armor","2","6","0","30/20 ft","15 lb"],
    ["Raw Silk Armor","3","5","-1","30/20 ft","20 lb"],
    ["Studded Leather","3","5","-1","30/20 ft","20 lb"],
    ["Chain Shirt","4","4","-2","30/20 ft","25 lb"],
  ]
)}
${h3("Medium Armor")}
${table(
  ["Armor","AC Bonus","Max DEX","Check Penalty","Speed","Weight"],
  [
    ["Hide Armor","3","4","-3","20/15 ft","25 lb"],
    ["Ring Mail","3","6","-1","20/15 ft","40 lb"],
    ["Scale Mail","4","3","-4","20/15 ft","30 lb"],
    ["Chainmail","5","2","-5","20/15 ft","40 lb"],
    ["Breastplate","5","3","-4","20/15 ft","30 lb"],
  ]
)}
${h3("Heavy Armor")}
${table(
  ["Armor","AC Bonus","Max DEX","Check Penalty","Speed","Weight"],
  [
    ["Splint Mail","6","0","-7","20/15 ft","45 lb"],
    ["Banded Mail","6","1","-6","20/15 ft","35 lb"],
    ["Half-Plate","7","0","-7","20/15 ft","50 lb"],
    ["Full Plate","8","1","-6","20/15 ft","50 lb"],
  ]
)}
${h3("Shields")}
${table(
  ["Shield","AC Bonus","Check Penalty","Weight"],
  [
    ["Buckler","+1","0","5 lb"],
    ["Small Steel Shield","+1","-1","6 lb"],
    ["Large Steel Shield","+2","-2","15 lb"],
    ["Tower Shield","+4","-10","45 lb"],
  ]
)}
${p("Armor Check Penalty applies to DEX- and STR-based skill checks while wearing that armor.")}` }
    },
  ]
};

// ---------------------------------------------------------------------------
// CHAPTER 8 — MAGIC & SPELLCASTING
// ---------------------------------------------------------------------------
const CH8_MAGIC = {
  name: "Chapter 8: Magic & Spellcasting",
  pages: [
    {
      name: "The Mana System", type: "text", sort: 100,
      text: { format: 1, content: `
${h2("The Mana System")}
${p("Unlike many d20 games, EQRPG uses a mana pool rather than spell slots. Every spell has a mana cost; casting the spell deducts that cost from your current mana. When you run out of mana, you cannot cast spells.",
   "Mana regenerates naturally over time. Out of combat, casters recover mana at a base rate of WIS or INT modifier + level per minute while Meditating. In combat, regeneration is slower and requires the Meditate skill.")}
${h3("Mana Pool")}
${table(
  ["Class","Mana Formula"],
  [
    ["Cleric / Druid / Shaman","WIS modifier × level × 3"],
    ["Enchanter / Magician / Necromancer / Wizard","INT modifier × level × 3"],
    ["Paladin / Shadow Knight / Ranger","Casting ability modifier × level × 2"],
    ["Beastlord","WIS modifier × level × 2"],
    ["Bard","No mana pool — Songs cost 0 mana and are sustained through Concentration"],
  ]
)}
${h3("Mana Regeneration")}
${ul([
  "<strong>Out of Combat (Meditate)</strong> — Sitting and meditating: recover (level + Meditate ranks ÷ 10) mana per round.",
  "<strong>Out of Combat (Resting)</strong> — Passive recovery: 1 mana per 2 rounds.",
  "<strong>In Combat</strong> — 1 mana per round base. Enchanter Clarity and Shaman Spirit Quickening improve this.",
  "<strong>Clarity</strong> — Enchanter buff: +3 mana/round for 30 minutes.",
  "<strong>Cannibalize (Shaman)</strong> — Trade HP for mana directly.",
])}` }
    },
    {
      name: "Casting Spells", type: "text", sort: 200,
      text: { format: 1, content: `
${h2("Casting Spells")}
${h3("Casting Time")}
${p("Most spells take 1 standard action. Some powerful spells require 2 or 3 actions (a full round). A 10-minute casting time requires uninterrupted concentration.")}
${h3("Concentration")}
${p("If a caster takes damage while casting, they must make a Concentration check (DC = 10 + damage dealt + spell level) or lose the spell without spending mana. A natural 1 always fails.")}
${h3("Recast Timer")}
${p("Some spells have a recast timer — a number of rounds that must pass before that same spell can be cast again. This is listed on the spell card.")}
${h3("Saving Throws vs. Spells")}
${p("Spell Save DC = 10 + spell level + caster's primary casting ability modifier (INT or WIS).",
   "A successful save typically negates the spell or halves the damage, depending on the spell description.")}
${h3("Spell Schools")}
${table(
  ["School","Description","Examples"],
  [
    ["Alteration","Transforms or changes existing things","Root, Slow, Spirit of Wolf, Cannibalize"],
    ["Abjuration","Wards and protection magic","Rune, Harmshield, Holy Armor, Minor Shielding"],
    ["Conjuration","Summons creatures, items, or matter","Earth Elemental, Envenomed Bolt, Turgur's Insects"],
    ["Divination","Reveals information","Detect Magic, Identify, Sense Undead"],
    ["Enchantment","Affects minds and emotions","Mesmerize, Beguile, Haste, Tashani"],
    ["Evocation","Raw energy and force","Fire Bolt, Fireball, Lightning Bolt, Ice Comet"],
    ["Illusion","False images and disguises","Camouflage, Illusion: Barbarian"],
    ["Necromancy","Death and undeath","Lifetap, Animate Dead, Feign Death, Lich"],
    ["Song","Bard magical melodies","Selo's Accelerating Chorus, Clarity Song"],
  ]
)}` }
    },
    {
      name: "Bard Songs", type: "text", sort: 300,
      text: { format: 1, content: `
${h2("Bard Songs")}
${p("Bards do not cast spells in the traditional sense. They perform songs that take effect immediately and are maintained through Concentration as long as the Bard continues to play or sing.",
   "A Bard can maintain one song with Concentration. Switching to a new song is a free action on the Bard's turn. Songs break if the Bard is silenced, stunned, killed, or stops concentrating.")}
${h3("Twisting Songs")}
${p("At 8th level, Bards gain the ability to twist — maintaining two songs simultaneously. At 14th level they can twist three. Each song after the first requires its own Concentration check each round (DC 15).")}
${h3("Song vs. Spell Interaction")}
${ul([
  "Songs are not spells and cannot be dispelled by Dispel Magic.",
  "Songs do not benefit from Metamagic feats.",
  "Songs that mezmerize are broken by any damage to the target, just like Enchanter mezmerize.",
  "Instruments provide a +2 bonus to song effects when played with the Play Instruments skill.",
])}` }
    },
  ]
};

// ---------------------------------------------------------------------------
// CHAPTER 9 — SPELL LISTS (by class)
// ---------------------------------------------------------------------------
const CH9_SPELLS = {
  name: "Chapter 9: Spell Lists",
  pages: [
    { name: "Spell Lists Overview", type: "text", sort: 100, text: { format: 1, content: `
${h2("Spell Lists by Class")}
${p("The following pages list all spells available to each spellcasting class, sorted by spell level. Full spell descriptions including mana cost, range, duration, and effect can be found in the <strong>EQ Spells</strong> compendium.",
   "Spells shared between classes appear on multiple class lists. A spell's stats do not change between classes.")}` } },
    { name: "Wizard Spells", type: "text", sort: 200, text: { format: 1, content: `
${h2("Wizard Spell List")}
${table(["Level","Spells"],[
  [1,"Burst of Flame, Detect Magic, Fire Bolt, Identify, Minor Shielding"],
  [2,"Chill Sight, Rune I, Shock of Ice"],
  [3,"Concussion, Phantom Wind"],
  [4,"Bind Affinity, Levitate, Root, Shock of Lightning"],
  [5,"Bind Affinity, Force Shock"],
  [6,"Mala"],
  [7,"Incinerate"],
  [8,"Annihilate, Translocate"],
  [9,"Fireball, Gate"],
  [10,"Thunder of Karana"],
  [12,"Conflagration"],
  [15,"Ice Comet"],
])}` } },
    { name: "Magician Spells", type: "text", sort: 300, text: { format: 1, content: `
${h2("Magician Spell List")}
${table(["Level","Spells"],[
  [1,"Detect Magic, Fire Bolt, Identify, Minor Shielding, Summon Drink, Summon Food"],
  [2,"Earth Elemental, Rune I"],
  [3,"Burnout, Concussion, Water Elemental"],
  [4,"Fire Elemental, Reclaim Energy, Root, Shock of Blades"],
  [5,"Burnout II, Call of the Hero, Force Shock"],
  [6,"Air Elemental, Greater Shielding"],
  [7,"Incinerate"],
  [8,"Burnout III"],
  [9,"Elemental Maelstrom, Gate"],
])}` } },
    { name: "Cleric Spells", type: "text", sort: 400, text: { format: 1, content: `
${h2("Cleric Spell List")}
${table(["Level","Spells"],[
  [1,"Bless, Courage, Minor Healing"],
  [2,"Cure Disease, Cure Poison, Light Healing, Smite Undead, Stun, Yaulp"],
  [3,"Divine Strike, Furor, Pacify, Symbol of Transal, Valor"],
  [4,"Bind Affinity, Divine Aura, Word of Pain"],
  [5,"Celestial Healing, Hammer of Striking, Healing, Holy Armor, Sanctuary"],
  [6,"Word of Divine Power"],
  [7,"Resurrection, Word of Vigor"],
  [8,"Word of Restoration"],
  [9,"Gate, Greater Healing"],
  [10,"Annul Magic"],
  [15,"Complete Heal"],
])}` } },
    { name: "Druid Spells", type: "text", sort: 500, text: { format: 1, content: `
${h2("Druid Spell List")}
${table(["Level","Spells"],[
  [1,"Firefist, Harmony, Nature's Touch"],
  [2,"Camouflage, Endure Cold, Endure Fire, Stinging Swarm"],
  [3,"Drifting Death, Regrowth, Skin like Rock, Snare"],
  [4,"Bind Affinity, Drones of Doom, Immolation of Ro, Invoke Lightning, Levitate, Root (Druid)"],
  [5,"Chloroblast, Spirit of Wolf, Succor"],
  [6,"Lightning Bolt"],
  [7,"Upheaval"],
  [8,"Regrowth of the Grove, Superior Camouflage, Winter's Roar"],
  [9,"Gate, Nature Walker's Behest"],
  [15,"Ancient Cry of Chaos"],
])}` } },
    { name: "Necromancer Spells", type: "text", sort: 600, text: { format: 1, content: `
${h2("Necromancer Spell List")}
${table(["Level","Spells"],[
  [1,"Dark Pact, Fear, Lifetap"],
  [2,"Animate Dead, Darkness, Numb the Dead"],
  [3,"Envenomed Bolt, Instill Doubt, Leach, Quivering Veil of Xarn"],
  [4,"Bind Affinity, Vampiric Embrace"],
  [5,"Dead Men Floating, Harmshield, Malignant Dead, Strangle"],
  [6,"Bond of Death, Invoke Death"],
  [7,"Rapture, Splurt"],
  [8,"Lich, Paralyzing Earth"],
  [9,"Demi Lich, Feign Death, Gate"],
  [12,"Death's Door"],
  [15,"Servant of Bones"],
])}` } },
    { name: "Enchanter Spells", type: "text", sort: 700, text: { format: 1, content: `
${h2("Enchanter Spell List")}
${table(["Level","Spells"],[
  [1,"Mesmerize, Minor Shielding, Shallow Breath"],
  [2,"Breeze, Rune, Whirl Till You Hurl"],
  [3,"Color Flux, Tepid Deeds"],
  [4,"Augmentation, Levitate, Tashani"],
  [5,"Haste, Illusion: Barbarian, Mana Conversion, Tashania"],
  [6,"Beguile, Glamour of Kintaz, Greater Shielding"],
  [7,"Ennui, Rapture"],
  [8,"Entrance"],
  [9,"Chaos Flux, Clarity"],
  [10,"Annul Magic"],
  [12,"Wave of Enfeeblement"],
])}` } },
    { name: "Shaman Spells", type: "text", sort: 800, text: { format: 1, content: `
${h2("Shaman Spell List")}
${table(["Level","Spells"],[
  [1,"Malise, Spirit Pouch, Talisman of Jasinth"],
  [2,"Endure Cold, Endure Fire, Listless Power"],
  [3,"Cannibalize, Endure Magic, Slow, Tepid Deeds"],
  [4,"Bind Affinity, Fleeting Fury, Plague, Turgur's Insects"],
  [5,"Cripple, Spirit of Bear, Spirit of Ox, Spirit of Wolf"],
  [6,"Cannibalize II, Prophetic Guard, Spirit Quickening"],
  [7,"Sha's Ferocity"],
  [8,"Sha's Legacy"],
  [9,"Gate, Kragg's Mending, Talisman of Tnarg"],
])}` } },
    { name: "Bard Songs", type: "text", sort: 900, text: { format: 1, content: `
${h2("Bard Song List")}
${table(["Level","Songs"],[
  [1,"Brusco's Boastful Bellow, Chant of Frost"],
  [2,"Selo's Accelerating Chorus"],
  [3,"Angstlich's Appalling Screech, Cassindra's Chant of Clarity"],
  [4,"Krafen's Chant of Poison, Verses of Victory"],
  [5,"Kylian's Soothing Serenade, Psalm of Veeshan"],
  [6,"McVaxius' Berserker Crescendo, Melody of Ervaj"],
  [7,"Niv's Melody of Preservation"],
  [8,"Cantata of Soothing"],
  [9,"Hymn of Restoration"],
])}` } },
    { name: "Paladin & Shadow Knight Spells", type: "text", sort: 1000, text: { format: 1, content: `
${h2("Paladin Spell List")}
${table(["Level","Spells"],[
  [1,"Bless, Courage, Holy Might, Sense Undead"],
  [2,"Light Healing, Smite Undead, Stun, Yaulp"],
  [3,"Divine Strike, Holy Valor, Ward Undead"],
  [4,"Divine Aura, Holy Armor"],
  [5,"Healing"],
  [6,"Holy Winds"],
  [7,"Hammer of Wrath"],
])}
${h2("Shadow Knight Spell List")}
${table(["Level","Spells"],[
  [1,"Dark Pact, Darkening, Infestation"],
  [2,"Engulfing Darkness, Spook the Dead"],
  [3,"Cascading Darkness, Leach, Quivering Veil of Xarn"],
  [4,"Gathering Dusk, Vampiric Curse"],
  [5,"Drain Soul"],
  [6,"—"],
  [7,"Breath of the Dead, Splurt"],
  [8,"Lich"],
])}` } },
    { name: "Ranger & Beastlord Spells", type: "text", sort: 1100, text: { format: 1, content: `
${h2("Ranger Spell List")}
${table(["Level","Spells"],[
  [2,"Camouflage, Endure Cold, Endure Fire, Foliage Shield"],
  [3,"Drifting Death, Flame Lick, Harmony, Snare"],
  [4,"Root (Druid), Warsong of Zek"],
  [5,"Eyes of the Wolf"],
  [6,"Ro's Smoldering Creep"],
])}
${h2("Beastlord Spell List")}
${table(["Level","Spells"],[
  [1,"Spirit Pouch, Talisman of Jasinth"],
  [2,"Bite of the Asp, Endure Cold, Endure Fire"],
  [3,"Snarl of the Beast"],
  [4,"Maelstrom of Ro"],
  [5,"Cripple, Ferocity of Irionu, Spirit of Bear, Spirit of Wolf"],
  [6,"Pack Hunt"],
])}` } },
  ]
};

// ---------------------------------------------------------------------------
// EXPORTS
// ---------------------------------------------------------------------------
export const PHB_JOURNALS = [
  CH1_INTRO,
  CH2_RACES,
  CH3_CLASSES,
  CH4_ABILITIES,
  CH5_FEATS,
  CH6_COMBAT,
  CH7_EQUIPMENT,
  CH8_MAGIC,
  CH9_SPELLS,
];
