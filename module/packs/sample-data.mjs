/**
 * Sample compendium content for EverQuest RPG.
 *
 * THIS FILE IS GENERATED. Edit the JSON sources in module/packs/source/
 * and rerun `node scripts/generate-sample-data.mjs`.
 */

// Source: module/packs/source/spells.json
export const SAMPLE_SPELLS = [
  {
    "name": "Aegis of Ro",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 15,
      "manaCost": 75,
      "school": "Abjuration [Fire]",
      "castingTime": "1 full round",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "1 round/level (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "than 20 ft. apart As shield of fire, except this spell grants a buff bonus of + 3 on saves against attacks with the [fire] descriptor, as well as fire resistance ( 14) and damage shield ( 8) for up to six targets of the caster's choice within range.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:15"
      ],
      "spellLine": "Shield of fire",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>than 20 ft. apart As shield of fire, except this spell grants a buff bonus of + 3 on saves against attacks with the [fire] descriptor, as well as fire resistance ( 14) and damage shield ( 8) for up to six targets of the caster's choice within range.</p>"
    }
  },
  {
    "name": "Air Elemental",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 50,
      "school": "Conjuration",
      "castingTime": "1 action",
      "range": "30 ft",
      "duration": "10 min/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Summons an air elemental companion to serve the caster.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "description": "<p>The magician shapes invisible currents of wind into a loyal air elemental servant.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": ""
    }
  },
  {
    "name": "Alter Plane: Hate",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 11,
      "manaCost": 50,
      "school": "Alteration [Teleportation]",
      "castingTime": "2 full rounds",
      "range": "C lose (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "20 ft. apart This specialized spell transports up to six targets within range to the Plane of Hate, the ho1ne of the god lnnoruuk. This jour- ney is not safe, even for those who worship the god of hate, and anyone who appears on this plane is likely to be attacked by powerful creatures upon arrival. Material Components: A Fulligran's soulstone (available for 200 gp, usually only in Neriak).",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:11"
      ],
      "spellLine": "Alter plane: Hate",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>20 ft. apart This specialized spell transports up to six targets within range to the Plane of Hate, the ho1ne of the god lnnoruuk. This jour- ney is not safe, even for those who worship the god of hate, and anyone who appears on this plane is likely to be attacked by powerful creatures upon arrival. Material Components: A Fulligran's soulstone (available for 200 gp, usually only in Neriak).</p>"
    }
  },
  {
    "name": "Alter Plane: Sky",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 11,
      "manaCost": 50,
      "school": "Alteration [Teleportation]",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "than 20 ft. apart This specialized spell transports up to six targets within range to the Plane of Sky, the home of Veeshan. Newcomers are generally safe upon arrival here. Material Components: A cloudy stone ofVeeshan (available for 200 gp, usually only in Erudin).",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:11"
      ],
      "spellLine": "Alter plane: Sky",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>than 20 ft. apart This specialized spell transports up to six targets within range to the Plane of Sky, the home of Veeshan. Newcomers are generally safe upon arrival here. Material Components: A cloudy stone ofVeeshan (available for 200 gp, usually only in Erudin).</p>"
    }
  },
  {
    "name": "Ancient Cry of Chaos",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 15,
      "manaCost": 175,
      "school": "Evocation",
      "castingTime": "1 action",
      "range": "100 ft",
      "duration": "Instantaneous",
      "damageFormula": "10d8",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "A massive eruption of chaotic nature energy deals 10d8 damage in a 40 ft radius; Reflex save for half.",
      "recastTime": 3,
      "classes": [
        "druid"
      ],
      "description": "<p>The druid channels the primal chaos from which all nature sprang, releasing a cataclysmic explosion of raw elemental fury.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "half",
      "classLevels": [
        "druid:15"
      ]
    }
  },
  {
    "name": "Angstlich's Appalling Screech",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 0,
      "school": "Bard Song [Fear, Mind-Affecting]",
      "castingTime": "1 action (song)",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "ld4 rounds (2d4 rounds with",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "AE mezmerizes up to 4 creatures in 20 ft radius; Will save negates each; broken by damage.",
      "recastTime": 0,
      "classes": [
        "bard"
      ],
      "description": "<p>Song Line: Angstlich' s appalling screech Instrument: Wind (Dex) wind instrument) Angstlich' s appalling screech produces waves of fear that causes affected beings to flee in terror if they fail a Will save. Affected creatures have a 50% cl1ance of dropping any carried items as they flee frotn the caster at their maxi1nu1n speed. If cor- nered, the creature cowers, but it defends itself if attacked, suffering a -2 penalty to all attack and damage rolls. The effects of the song persist for ld4 rounds, and they last twice that (2d4 rounds) if performed on a wind instrument.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "bard:3"
      ],
      "spellLine": "Angstlich's Appalling Screech"
    }
  },
  {
    "name": "Animate Dead",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 33,
      "school": "Conjuration (Summoning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "none",
      "effect": "Animates a skeleton servant that follows and fights for the caster.",
      "recastTime": 0,
      "classes": [],
      "description": "<p>Wrests a skeleton from the earth and binds it to your will.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": []
    }
  },
  {
    "name": "Annul Magic",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 13,
      "school": "Abjuration",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Dispels up to 4 active magical effects from the target. Most powerful effects require a dispel check.",
      "recastTime": 1,
      "classes": [
        "cleric",
        "enchanter",
        "magician"
      ],
      "description": "<p>Nee 13, Shm 14, Wiz 13 As cancel magic, except this spell allows the caster to make three dispel attempts, and there is no maximum caster level modifier for each roll. These attempts may be made either consecutively on the same effect or on three separate effects.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "cleric:10",
        "enchanter:10",
        "magician:13"
      ],
      "spellLine": "Cancel magic"
    }
  },
  {
    "name": "Arch-Shielding",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 11,
      "manaCost": 0,
      "school": "",
      "castingTime": "1 action",
      "range": "",
      "duration": "",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "+ 7 AC, + 36 hit points, magic resistance ( 8), and",
      "recastTime": 0,
      "classes": [
        "magician",
        "wizard"
      ],
      "classLevels": [
        "magician:11",
        "wizard:11"
      ],
      "spellLine": "Arch-Shielding",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>+ 7 AC, + 36 hit points, magic resistance ( 8), and</p>"
    }
  },
  {
    "name": "Augmentation",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 23,
      "school": "Alteration",
      "castingTime": "I action",
      "range": "Medium ( 100 ft. + 10 ft./level)",
      "duration": "IO minutes/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "+4 INT and +4 WIS to target for the duration.",
      "recastTime": 0,
      "classes": [
        "enchanter"
      ],
      "description": "<p>less) As augmentation, except this spell pro- vides haste (5), a +6 bonus to Dexterity, and a + 3 insight bonus to Armor Class, and the target regains ld6 hit points of subdual damage every round.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "enchanter:4"
      ],
      "spellLine": "Augmentation"
    }
  },
  {
    "name": "Bandoleer of Luclin",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 13,
      "manaCost": 10,
      "school": "Conjuration (Creation)",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "24 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: Pouch and 60 knives of Luclin 226 This spell creates a bandoleer containing 60 knives of Luclin, + 2 daggers that deal ld3+2 points of damage (including the + 2 enl1ancernent bonus), weighonlyone- tenth of a pound each, and have a range incre1nent of 15 feet. As created ite1ns, the belt and the knives vanish after 24 hours. Their temporary nature is apparent to anyone who looks at the1n.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:13"
      ],
      "spellLine": "Summon dagger",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: Pouch and 60 knives of Luclin 226 This spell creates a bandoleer containing 60 knives of Luclin, + 2 daggers that deal ld3+2 points of damage (including the + 2 enl1ancernent bonus), weighonlyone- tenth of a pound each, and have a range incre1nent of 15 feet. As created ite1ns, the belt and the knives vanish after 24 hours. Their temporary nature is apparent to anyone who looks at the1n.</p>"
    }
  },
  {
    "name": "Banish Summoned",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 12,
      "manaCost": 37,
      "school": "Evocation [Magic]",
      "castingTime": "1 action",
      "range": "Medium ( 100 ft. + 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "As ward summoned, except this spell deals (2d10+ 3 )xlO points of magic damage.",
      "recastTime": 1,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:12"
      ],
      "spellLine": "Ward summoned",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As ward summoned, except this spell deals (2d10+ 3 )xlO points of magic damage.</p>"
    }
  },
  {
    "name": "Banishment",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 15,
      "manaCost": 83,
      "school": "Evocation [Magic]",
      "castingTime": "1 action",
      "range": "Medium (100ft. + lOft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "As ward summoned, except this powerful spell annihilates the target along with any equipment and possessions it carries, much like disintegrate. Even if the target suc- ceedson the Will save, it suffers (2dlO)x10 points of magic damage. A creature slain by banishment is forever destroyed, and cannot be raised from the dead in any fashion. In addition, a foe killed with this spell does not yield any experience points. Material Components: A star ruby. BanishmentoF",
      "recastTime": 2,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:15"
      ],
      "spellLine": "Ward summoned",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As ward summoned, except this powerful spell annihilates the target along with any equipment and possessions it carries, much like disintegrate. Even if the target suc- ceedson the Will save, it suffers (2dlO)x10 points of magic damage. A creature slain by banishment is forever destroyed, and cannot be raised from the dead in any fashion. In addition, a foe killed with this spell does not yield any experience points. Material Components: A star ruby. BanishmentoF</p>"
    }
  },
  {
    "name": "Barrier of Combustion",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 17,
      "school": "Abjuration [Fire]",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "4 n1inutes (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "As shield of fire, except this spell gra.nts a buff bonus of + 2 on saves against attacks with the [fire] descriptor, as well as fire resistance (8) and damage shield (5).",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:10"
      ],
      "spellLine": "Shield of fire",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As shield of fire, except this spell gra.nts a buff bonus of + 2 on saves against attacks with the [fire] descriptor, as well as fire resistance (8) and damage shield (5).</p>"
    }
  },
  {
    "name": "Beguile",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 20,
      "school": "Alteration [Mind-Affecting]",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "1 d8 rounds or 8d 10 rounds (see",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Charms a humanoid target to fight for the caster; Will save negates.",
      "recastTime": 0,
      "classes": [
        "enchanter"
      ],
      "description": "<p>text) As charm, except this spell can affect creatures of CR 16 or less.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "enchanter:6"
      ],
      "spellLine": "Charm"
    }
  },
  {
    "name": "Bind Affinity",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 20,
      "school": "Alteration [Teleportation]",
      "castingTime": "1 full round",
      "range": "T ouch",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Binds target to their current location for future Gate use.",
      "recastTime": 2,
      "classes": [
        "cleric",
        "druid",
        "magician",
        "necromancer",
        "shaman",
        "wizard"
      ],
      "description": "<p>Shm 4, Wiz 4 Through this spell, the caster changes the target's bind point for the purposes of teleportation spells, especially gate. The creation of bind point is instantaneous and lasts until changed again by the use of this spell. A bind point may be anywhere a target of the spell desires to be \"bound,\" and it's at that point in space that he will appear when various teleportation effects are used upon him. This place can be anywhere, from the target's bed to his favorite pub; fro1n the entrance to the haunted caverns he's questing after to beside the door of his arch-enemy. The bind point is an exact point in space, though, including elevation. Thus, if the target is bound while under the effects of the spell levitate and 30 feet in the air, then he might regret his return to his bind point when he appears without a levitate spell in the future. If the spell is used on an unwilling opponent, a successful touch attack _is required and the victim receives a W 111 ~ save (DC 14 + caster's Int or Wis 1nodi- fier). Note that when cast at night, this spell can create a secondary bind location for necromancers for the purpose of the spell levant. Only a level 27th-level+ necro- 1nancer may have two bind locations, and then only when the necromancer hitnself casts bind affinity; whe11 it's cast during hours of darkness, the necromancer must indicate whether this bind point is his main (i.e., for gate) or secondary (i.e., for levant) point.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "cleric:4",
        "druid:4",
        "magician:4",
        "necromancer:4",
        "shaman:4",
        "wizard:4"
      ],
      "spellLine": "BinbAFFinity"
    }
  },
  {
    "name": "Bind Sight",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 8,
      "school": "Divination",
      "castingTime": "1 full round",
      "range": "Long ( 400 ft. + 40 ft./level)",
      "duration": "Concentration (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "As bind sight, except this spell also grants the caster (but not the host subject) ultravision, as well as a +6 bonus on all Spot checks.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:5"
      ],
      "spellLine": "Bind sight",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As bind sight, except this spell also grants the caster (but not the host subject) ultravision, as well as a +6 bonus on all Spot checks.</p>"
    }
  },
  {
    "name": "Bite of the Asp",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 14,
      "school": "Conjuration",
      "castingTime": "1 action",
      "range": "Pet",
      "duration": "Next attack",
      "damageFormula": "1d6",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "Warder pet's next attack injects poison dealing 1d6/round for 3 rounds; Fort save negates.",
      "recastTime": 0,
      "classes": [
        "beastlord"
      ],
      "description": "<p>The beastlord imbues their warder's claws or fangs with magically concentrated venom.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "beastlord:2"
      ]
    }
  },
  {
    "name": "Blaze",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 26,
      "school": "Evocation [Fire]",
      "castingTime": "1 action",
      "range": "Medium ( 100 ft. + 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "(6d10+3)*2",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "Deals (6d10+3)x2 fire damage; Reflex save halves.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "description": "<p>Chapter Ten: Spells As bum, except this spell deals ( 6d 1 O+ 3 )x2 points of fire datnage. Blesset&gt; Armor OF the</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "half",
      "classLevels": [
        "magician:9"
      ],
      "spellLine": "Bum"
    }
  },
  {
    "name": "Bless",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 8,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "30 ft",
      "duration": "10 min/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "+1 morale bonus to attack rolls and saves vs. fear for all allies in range.",
      "recastTime": 0,
      "classes": [
        "cleric",
        "paladin"
      ],
      "description": "<p>Divine inspiration steels the nerves and sharpens the aim of all nearby allies.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "cleric:1",
        "paladin:1"
      ]
    }
  },
  {
    "name": "Bolt of Flame",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 17,
      "school": "Evocation [Fire]",
      "castingTime": "1 action",
      "range": "Long ( 400 ft. + 40 ft./level)",
      "duration": "Instantan.eous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "As flame bolt, except this spell deals 8d 10 points of fire datnage. EverQuestRole-PlayingGamePlayer'sHanbbook",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:6"
      ],
      "spellLine": "Flame bolt",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As flame bolt, except this spell deals 8d 10 points of fire datnage. EverQuestRole-PlayingGamePlayer'sHanbbook</p>"
    }
  },
  {
    "name": "Bond of Death",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 48,
      "school": "Necromancy",
      "castingTime": "1 action",
      "range": "60 ft",
      "duration": "6 rounds",
      "damageFormula": "2d10",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "Deals 2d10 necrotic damage per round for 6 rounds; Fort save each round halves.",
      "recastTime": 0,
      "classes": [
        "necromancer"
      ],
      "description": "<p>A bond of death linked between necromancer and target drains life steadily until the target — or the bond — is broken.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "varies",
      "classLevels": [
        "necromancer:6"
      ]
    }
  },
  {
    "name": "Bonds of Force",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 12,
      "school": "Alteration [Magic]",
      "castingTime": "1 action",
      "range": "Medium ( 100 ft. + 10 ft./level)",
      "duration": "2 minutes",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "than 20 ft. apart As snare, except this spell affects up to six creatures, no two of which may be more than 20 feet apart. However, the Reflex save for this spell is standard (DC 1 7 + caster's Intelligence modifier).",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:8"
      ],
      "spellLine": "Snare",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>than 20 ft. apart As snare, except this spell affects up to six creatures, no two of which may be more than 20 feet apart. However, the Reflex save for this spell is standard (DC 1 7 + caster's Intelligence modifier).</p>"
    }
  },
  {
    "name": "Breath of the Dead",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 7,
      "manaCost": 52,
      "school": "Necromancy",
      "castingTime": "1 action",
      "range": "30 ft cone",
      "duration": "3 rounds",
      "damageFormula": "4d6",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "Cone of necrotic breath deals 4d6 damage and inflicts -2 to all saves for 3 rounds; Reflex save halves damage only.",
      "recastTime": 0,
      "classes": [
        "shadowknight"
      ],
      "description": "<p>The Shadow Knight exhales a cone of deadly necrotic miasma, withering all in its path.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "varies",
      "classLevels": [
        "shadowknight:7"
      ]
    }
  },
  {
    "name": "Breeze",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 29,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "10 minutes/level (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Target regenerates 1 mana per round for the duration.",
      "recastTime": 0,
      "classes": [
        "enchanter"
      ],
      "description": "<p>than 20 ft. apart As breeze, except the rate of rnana recov, ery granted by this spell is 1 mana every 2 minutes, and this spell affects up to six targets of the caster's choice within the range of the spell.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "enchanter:2"
      ],
      "spellLine": "Breeze"
    }
  },
  {
    "name": "Bristlebane's Bundle",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 12,
      "manaCost": 8,
      "school": "Conjuration (Creation)",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "24 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: Sumrnoned ite1ns This spell creates amusing items suitable for throwing a party: 20 bottles of ale, 20 small cakes, one firecracker, and one spin- ning bottle. These items appear at the magician's feet. The firecracker is a one-use item. It can be thrown (range incre1nent 20 feet), but has no harmful effect; the noise produced is sufficient to wake a sleeping creature or break a mes1nerization effect, however. The spinning bottle is a magic item that upon command causes the user to spin rapidly about for 1 round, becoming quite dizzy. The affected creature cannot target any creature with an attack or a spell while spinning, and must succeed at a Channeling check (DC 15 + spell level) to cast or maintain a spell. This ability of the spinning bottle can be used only once.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:12"
      ],
      "spellLine": "Summon drink",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: Sumrnoned ite1ns This spell creates amusing items suitable for throwing a party: 20 bottles of ale, 20 small cakes, one firecracker, and one spin- ning bottle. These items appear at the magician's feet. The firecracker is a one-use item. It can be thrown (range incre1nent 20 feet), but has no harmful effect; the noise produced is sufficient to wake a sleeping creature or break a mes1nerization effect, however. The spinning bottle is a magic item that upon command causes the user to spin rapidly about for 1 round, becoming quite dizzy. The affected creature cannot target any creature with an attack or a spell while spinning, and must succeed at a Channeling check (DC 15 + spell level) to cast or maintain a spell. This ability of the spinning bottle can be used only once.</p>"
    }
  },
  {
    "name": "Brusco's Boastful Bellow",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 0,
      "school": "Bard Song [Sonic]",
      "castingTime": "1 action (song)",
      "range": "C lose (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "Stuns target; Fort save negates.",
      "recastTime": 0,
      "classes": [
        "bard"
      ],
      "description": "<p>Song Line: Brusco's boastful bellow Instrument: None Brusco' s boastful bellow deals 1 d6 points of sonic damage + 1 point per 3 bard levels.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "half",
      "classLevels": [
        "bard:1"
      ],
      "spellLine": "Brusco's BoastFul Bellow"
    }
  },
  {
    "name": "Burn",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 3,
      "school": "Evocation [Fire]",
      "castingTime": "1 action",
      "range": "Medium ( 100 ft. + 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "1d10",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "A burst of fire ignites the target, dealing 1d10 fire damage; Reflex save halves.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "description": "<p>A burst of fire ignites the target, dealing ldlO points of fire damage.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "half",
      "classLevels": [
        "magician:2"
      ],
      "spellLine": "Bum"
    }
  },
  {
    "name": "Burnout",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 6,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "1 minute/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Grants elemental pet +4 STR and +4 DEX for the duration.",
      "recastTime": 2,
      "classes": [
        "magician"
      ],
      "description": "<p>This spell grants the caster's elemental pet a + 3 bonus to Srrengrh, a + 1 bonus to Annor Class, ru1d haste (2), which grants a+ 1 haste bonus to Armor Class and an exrra action every third round. Note that the haste gained fro1n this line of spells will stack with hasten- ing spells from other lines, such as alacrity, but the usual cap of haste (8) still applies.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "magician:4"
      ],
      "spellLine": "Burnout"
    }
  },
  {
    "name": "Burnout II",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 13,
      "school": "Alteration",
      "castingTime": "1 full round",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "1 minute/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Grants elemental pet +6 STR and +6 DEX for the duration.",
      "recastTime": 2,
      "classes": [
        "magician"
      ],
      "description": "<p>As burnout, except the pet gains +5 Stre11gth, + 2 AC, and haste ( 4), which grants a + 2 haste bonus to AC and 1 extra attack action every second round.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "magician:8"
      ],
      "spellLine": "Burnout"
    }
  },
  {
    "name": "Burnout III",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 12,
      "manaCost": 25,
      "school": "Alteratio11",
      "castingTime": "1 full round",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "1 minute/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "+8 STR, +8 DEX, and +4 AC to elemental pet for the duration.",
      "recastTime": 2,
      "classes": [
        "magician"
      ],
      "description": "<p>As burnout, except the pet gains + 7 Strength, + 3 AC, and haste (7), wh ich grants a + 3 haste bonus to AC and alter- nating 1 or 2 extra attack actions every second round.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "magician:12"
      ],
      "spellLine": "Burnout"
    }
  },
  {
    "name": "Burnout IV",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 14,
      "manaCost": 25,
      "school": "A lteration",
      "castingTime": "1 full round",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "1 minute/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "As burnout, except the pet gains +9 Strength, +4 AC, and haste (8), which grants a + 3 l1aste bonus to AC, alternat- ing 1 or 2 extra attack actions every second round, and -1 weapon delay.",
      "recastTime": 2,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:14"
      ],
      "spellLine": "Burnout",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As burnout, except the pet gains +9 Strength, +4 AC, and haste (8), which grants a + 3 l1aste bonus to AC, alternat- ing 1 or 2 extra attack actions every second round, and -1 weapon delay.</p>"
    }
  },
  {
    "name": "Burst of Flame",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 3,
      "school": "Evocation [Fire]",
      "castingTime": "1 action",
      "range": "Medium ( 100 ft. + 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "1d6",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "A burst of fire deals 1d6 fire damage; Fortitude save halves.",
      "recastTime": 1,
      "classes": [
        "druid",
        "magician"
      ],
      "description": "<p>As burst of flame, except th is spell deals ldl 2 points of fire da1nage.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "half",
      "classLevels": [
        "druid:1",
        "magician:1"
      ],
      "spellLine": "Burst of flame"
    }
  },
  {
    "name": "Cadeau of Flame",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 14,
      "manaCost": 26,
      "school": "Abjuration [Fire]",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "1 round/level (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "As shield of fire, except this spell grants a buff bonus of+ 3 on saves against attacks with the [fire] descriptor, as well as fire resistance ( 14) and da1nage shield ( 8).",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:14"
      ],
      "spellLine": "Shield of fire",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As shield of fire, except this spell grants a buff bonus of+ 3 on saves against attacks with the [fire] descriptor, as well as fire resistance ( 14) and da1nage shield ( 8).</p>"
    }
  },
  {
    "name": "Call of the Hero",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 13,
      "manaCost": 83,
      "school": "Conjuration (Sum1noning)",
      "castingTime": "2 full rounds",
      "range": "Up to 4 miles",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Teleports a willing target in line of sight to the caster's current location.",
      "recastTime": 3,
      "classes": [
        "magician"
      ],
      "description": "<p>Co11sidered by magicians to be one of their defining powers, this mighty spell transports one willing being with who1n the caster is familiar to the caster's loca- tioi1. The target creature appears instantly beside tl1e caster. The caster need not know the target's location within the 4- mile range of this spell. This inakes the spell an excellent option for rescuing those near death as well as for exploring danger- ous or unknown areas, although com1nunication over distances can be an • issue. Material Components: A pearl.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "magician:13"
      ],
      "spellLine": "Call of the hero"
    }
  },
  {
    "name": "Camouflage",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 2,
      "school": "Divination",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "See text (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Target becomes invisible while stationary. Invisibility breaks on movement or attack.",
      "recastTime": 0,
      "classes": [
        "ranger"
      ],
      "description": "<p>As invisibility, except that this spell only works outdoors.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "ranger:2"
      ],
      "spellLine": "Invisibility"
    }
  },
  {
    "name": "Cancel Magic",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 13,
      "school": "Abjuration",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Nee 5, Pal 5, Rng 4, Shd 5, Shm 5, Wiz 4 This spell can negate any one spell or spell-like effect in place on tl1e target, as long as the spell to be affected does not have a poison or disease descriptor. The caster inay choose a spell he knows to be in effect on the target ( this requires a Spellcraft check DC 15 + spell level) and attempt to cancel that specific spell. If the caster does not know a specific spell in place on the target creature, then cancel magic will cancel one random spell effect on the target: if multiple speils are cur- rently affecting the target, the11 randomly determine with a die roll the spell froin among those eligible that is targeted for cancellation. To determine whether this cancellation takes place, the caster 1nakes 234 a dispel check by rolling 1d20 + 1 per caster level (maximum + 10), opposed to a DC of 11 + the caster level of the being who cast tl1e spell to be dispelled. If suc- cessful, cancel magic instantly cancels the spell or spell-like effect. Cancel magic has no effect on spells of instantaneous duration, nor does it heal any damage already caused by the can- celled spell. This spell may also affect magic items by canceling their magical properties for 1d8 rounds, after which the ite1n recovers naturally. The magic item becomes a nor- mal, nonmagical object until it recovers. Attempts to cancel the magic of an item are inade against the item's caster level.",
      "recastTime": 1,
      "classes": [
        "magician",
        "wizard"
      ],
      "classLevels": [
        "magician:4",
        "wizard:4"
      ],
      "spellLine": "Cancel magic",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Nee 13, Shm 14, Wiz 13 As cancel magic, except this spell allows the caster to make three dispel attempts, and there is no maximum caster level modifier for each roll. These attempts may be made either consecutively on the same effect or on three separate effects.</p>"
    }
  },
  {
    "name": "Cannibalize",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 0,
      "school": "Alteration",
      "castingTime": "Free action (see text)",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "4d8",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Shaman loses 4d8 HP to recover 3d10 mana. Damage cannot be resisted.",
      "recastTime": 0,
      "classes": [
        "shaman"
      ],
      "description": "<p>With this spell (which costs no mana), the caster taps deeply into his own life force and converts 5 hit points into 6 mana. The process is actually painless, but does cause welts, bruises, and small lacera- tions to appear on the caster's body. If the caster reduces his hit points to O or less, he falls unconscious. Hit points converted to 1nana with this spell cannot be recovered by any means - including normal or 1nagical healing - until 12 hours after this spell is cast. Although the spell requires only a free action to cast, it may be cast no more than twice in a single round, and a second casting requires an attack action.</p>",
      "deliveryType": "attack",
      "attackMode": "ranged",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "shaman:3"
      ],
      "spellLine": "Cannibalize"
    }
  },
  {
    "name": "Cannibalize II",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 0,
      "school": "Alteration",
      "castingTime": "Free action",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "6d8",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Shaman loses 6d8 HP to recover 5d10 mana. Damage is unresistable.",
      "recastTime": 0,
      "classes": [
        "shaman"
      ],
      "description": "<p>As cannibalize, but the caster can convert 7 hit points into 9 mana points. Cannibalize Ill Alteration As cannibalize, but the caster can convert 9 hit points into 13 1nana.</p>",
      "deliveryType": "attack",
      "attackMode": "ranged",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "shaman:6"
      ],
      "spellLine": "Cannibalize"
    }
  },
  {
    "name": "Cantata of Soothing",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 0,
      "school": "Song",
      "castingTime": "1 action (song)",
      "range": "20 ft AE",
      "duration": "Concentration",
      "damageFormula": "",
      "healFormula": "2d6",
      "savingThrow": "",
      "effect": "All allies in range heal 2d6 HP per round while the song is maintained.",
      "recastTime": 0,
      "classes": [
        "bard"
      ],
      "description": "<p>A soothing, ancient cantata that mends the wounds of all allies who can hear the bard's song.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "bard:8"
      ]
    }
  },
  {
    "name": "Cascading Darkness",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 22,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "80 ft",
      "duration": "1 min/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Root-style snare reduces target movement to 0; Will save negates.",
      "recastTime": 0,
      "classes": [
        "shadowknight"
      ],
      "description": "<p>Cascading waves of supernatural darkness bind the target's legs, holding them completely immobile.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "shadowknight:3"
      ]
    }
  },
  {
    "name": "Cassindra's Chant of Clarity",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 0,
      "school": "Bard Song",
      "castingTime": "1 action (song)",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Performance",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Allies within range regenerate 2 mana per round while the song is maintained.",
      "recastTime": 0,
      "classes": [
        "bard"
      ],
      "description": "<p>Song Line: Cassindra' s chant of clarity Instrument: None While the bard performs Cassindra' s chant of clarity, all targeted spellcasters within range spend 10% less mana to cast spells. This mana savings adds to any other mana savings the caster might enjoy, such as from greater specialization or other similar abili- ties. For exa1nple, a caster using a spell from her school of greater specialization (10% less mana) who is also under the effects of Cassindra' s chant of clarity spends 20% less mana casting the spell. Cassi nt&gt;ra's Chorus OF Clarity Bard Song</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "bard:3"
      ],
      "spellLine": "Cassint>ra's Chant OF Clarity"
    }
  },
  {
    "name": "Cast Force",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 7,
      "manaCost": 20,
      "school": "Evocation [Force, Magic]",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "6d10",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "A burst of magical force explodes around the caster, dealing 6d10 magic damage to all within 10 feet; Reflex negates.",
      "recastTime": 1,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:7"
      ],
      "spellLine": "Project lightning",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As project lightning, except this spell cre- ates a burst of magical force that deals 6d 10 points of magic damage to all within 10 feet.</p>"
    }
  },
  {
    "name": "Cavorting Bones",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 4,
      "school": "Necromancy [Summoning]",
      "castingTime": "1 full round",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "10 minutes/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Summons a type 1 skeletal pet.",
      "recastTime": 0,
      "classes": [
        "necromancer"
      ],
      "classLevels": [
        "necromancer:1"
      ],
      "description": "<p>Summons a type 1 skeletal pet.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "saveDC": ""
    }
  },
  {
    "name": "Cazic Gate",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 7,
      "manaCost": 25,
      "school": "Alteration [Teleportation]",
      "castingTime": "",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Casting T ime: 1 full round This spell transports the caster unerringly to a pyramid within the heart of the very dangerous Temple of Cazic'Thule.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:7"
      ],
      "spellLine": "Gate",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Casting T ime: 1 full round This spell transports the caster unerringly to a pyramid within the heart of the very dangerous Temple of Cazic'Thule.</p>"
    }
  },
  {
    "name": "Cazic Portal",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 50,
      "school": "Alteration [Teleportation]",
      "castingTime": "3 full rounds",
      "range": "C lose (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "than 20 ft. apart The wizard who casts this spell teleports up to six targets of his choice within range to the pyramid within the heart of the very dangerous Temple of Cazic'Thule.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:9"
      ],
      "spellLine": "Gate",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>than 20 ft. apart The wizard who casts this spell teleports up to six targets of his choice within range to the pyramid within the heart of the very dangerous Temple of Cazic'Thule.</p>"
    }
  },
  {
    "name": "Celestial Healing",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 38,
      "school": "Alteration (Healing)",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "4 rounds (D) (see text)",
      "damageFormula": "",
      "healFormula": "7d10",
      "savingThrow": "fortitude",
      "effect": "Delayed effect that cures 7d10 hit points.",
      "recastTime": 1,
      "classes": [
        "cleric"
      ],
      "description": "<p>less) As celestial remedy, except this spell heals 7d10 points each round.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "cleric:5"
      ],
      "spellLine": "Celestial remedy"
    }
  },
  {
    "name": "Chant of Frost",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 0,
      "school": "Song",
      "castingTime": "1 action (song)",
      "range": "30 ft",
      "duration": "Concentration",
      "damageFormula": "1d4",
      "healFormula": "",
      "savingThrow": "",
      "effect": "All enemies in range take 1d4 cold damage per round while the song is maintained.",
      "recastTime": 0,
      "classes": [
        "bard"
      ],
      "description": "<p>A lilting, haunting melody draws the cold of the northlands, chilling all foes nearby.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "bard:1"
      ]
    }
  },
  {
    "name": "Chaos Flux",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 17,
      "school": "Evocation [Magic]",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "5d8",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Raw magical discharge deals 5d8 damage of a random element. No saving throw.",
      "recastTime": 1,
      "classes": [
        "enchanter"
      ],
      "description": "<p>As chaotic feedback, except this spell deals 8d 10 points of magic damage and its con- fusion effect lasts for ld6 rounds. Also, unlike earlier spells of tl-1e chaotic feedback line, a Will save completely negates the damage and confusion.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "enchanter:9"
      ],
      "spellLine": "Chaotic feedback"
    }
  },
  {
    "name": "Char",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 13,
      "manaCost": 43,
      "school": "Evocation [Fire]",
      "castingTime": "1 action",
      "range": "Medium ( 100 ft. + 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "Asbum,exceptthisspelldeals (4d6+ 1 )xlO points of fire damage.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:13"
      ],
      "spellLine": "Bum",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Asbum,exceptthisspelldeals (4d6+ 1 )xlO points of fire damage.</p>"
    }
  },
  {
    "name": "Chill Sight",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 13,
      "school": "Divination",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "10 minutes/level (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Grants the caster ultravision for the duration.",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "description": "<p>As serpent sight, except this spell affects only the caster and grants ultravision rather than infravision.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "wizard:10"
      ],
      "spellLine": "Serpent sight"
    }
  },
  {
    "name": "Chloroblast",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 29,
      "school": "Alteration (Healing)",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels).",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "4d8+4",
      "savingThrow": "will",
      "effect": "Heals target for 4d8+4 HP but deals 1d6 backlash damage to the caster.",
      "recastTime": 0,
      "classes": [
        "druid"
      ],
      "description": "<p>As minor healing, except this spell heals (3d6)x10 hit points.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "druid:5"
      ],
      "spellLine": "Minor healing"
    }
  },
  {
    "name": "Cinder Bolt",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 30,
      "school": "Evocation [Fire]",
      "castingTime": "1 action",
      "range": "Long ( 400 ft. + 40 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "As flame bolt, except this spell deals ( 7 d 1 O+ 2 )x2 points of fire damage.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:9"
      ],
      "spellLine": "Flame bolt",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As flame bolt, except this spell deals ( 7 d 1 O+ 2 )x2 points of fire damage.</p>"
    }
  },
  {
    "name": "Circle of Force",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 0,
      "school": "",
      "castingTime": "1 action",
      "range": "",
      "duration": "",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "(5d10+2)x2 fire damage in 25,foot radius.",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:9"
      ],
      "spellLine": "Circle of Force",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>(5d10+2)x2 fire damage in 25,foot radius.</p>"
    }
  },
  {
    "name": "Clarity",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 13,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "10 minutes/level (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Target regenerates 3 mana per combat round for the duration.",
      "recastTime": 0,
      "classes": [
        "enchanter"
      ],
      "description": "<p>As breeze, except the target recovers an additional 1 mana every 2 minutes.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "enchanter:9"
      ],
      "spellLine": "Breeze"
    }
  },
  {
    "name": "Cobalt Scar Gate",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 25,
      "school": "Alteration [Teleportation]",
      "castingTime": "1 full round",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "241 This spell transports the caster to the dragon circle in the Cobalt Scar deep in the heart of Velious.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:10"
      ],
      "spellLine": "Gate",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>241 This spell transports the caster to the dragon circle in the Cobalt Scar deep in the heart of Velious.</p>"
    }
  },
  {
    "name": "Cobalt Scar Portal",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 11,
      "manaCost": 50,
      "school": "Alteration [Teleportation]",
      "castingTime": "3 full rounds",
      "range": "C lose (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "than 20 ft. apart The caster transports up to six targets of her choice within range to the dragon circle in the Cobalt Scar.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:11"
      ],
      "spellLine": "Gate",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>than 20 ft. apart The caster transports up to six targets of her choice within range to the dragon circle in the Cobalt Scar.</p>"
    }
  },
  {
    "name": "Coldlight",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 1,
      "school": "Evocation [Cold, Light]",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "10 minutes/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Creates a ball of light.",
      "recastTime": 0,
      "classes": [
        "necromancer"
      ],
      "classLevels": [
        "necromancer:1"
      ],
      "description": "<p>Creates a ball of light.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "saveDC": ""
    }
  },
  {
    "name": "Color Flux",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 3,
      "school": "Divination [Light]",
      "castingTime": "Free action",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Stuns target with a burst of shifting color; Will save negates.",
      "recastTime": 0,
      "classes": [
        "enchanter"
      ],
      "description": "<p>= ~ ~ ~ ~:-:: ... ~~~ ' t;:&gt;J~~ ~,i~~\"F.r ~~~!iT.l{!J, ~-=~ F~:.:E::.:V~Er:_:Q~U=E~S;tR:.:o:.:l=E.·.:.P.;;.lay ~ in~g=G=a=l=Jl=E=Pl=ay==-Er_'s_H~a=n....;b_boo _..... .... l&lt;~~~ ~::- Recast Time: 2 rounds A rea: 5,ft.,radius burst Blinding bean1s of polychro1natic light are emitted i11 all directions from the body of the caster, stunning all other beings within 5 feet of the caster, foe and ally alike. Affected creatures who fail a Will save are stunned for an entire round, au, tomatically losing their next action. Stunned creatures cannot act and lose any positive Dexterity modifier to AC. Attackers gain a + 2 circumstance bonus 011 attacks against stunned creatures. Unless an opponent has some extraor, di nary protection, a sighted target cannot avoid the effects of this spell by declaring that l1e is fighting with his eyes closed - tl1e light emitted is so brilliant that it will penetrate closed eyelids. Beings unable to see are not affected by this spell.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "enchanter:3"
      ],
      "spellLine": "Color flux"
    }
  },
  {
    "name": "Column of Fire",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 11,
      "school": "Evocation [Fire]",
      "castingTime": "1 action",
      "range": "Medium ( 100 ft. + 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "This spell creates a blast of flame tl1at shoots downward, dealing 4d8 points of fire da1nage to all creatures within the area.",
      "recastTime": 1,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:4"
      ],
      "spellLine": "Column of fire",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>This spell creates a blast of flame tl1at shoots downward, dealing 4d8 points of fire da1nage to all creatures within the area.</p>"
    }
  },
  {
    "name": "Column of Frost",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 6,
      "school": "Evocation [Cold]",
      "castingTime": "1 action",
      "range": "Medium ( 100 ft. + 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "3d8",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "A freezing column crashes down in a 20-foot-radius cylinder, dealing 3d8 cold damage; Reflex save halves.",
      "recastTime": 1,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:3"
      ],
      "spellLine": "Column of frost",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>This spell creates a blast of icy cold that slmeks downward, dealing 3d8 points of cold damage to all creatures within the area.</p>"
    }
  },
  {
    "name": "Column of Lightning",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 7,
      "manaCost": 22,
      "school": "Evocation [Electricity)",
      "castingTime": "1 action",
      "range": "Medium (100 ft. + 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "7d10",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "A violent cascade of lightning crashes into a wide area, dealing 7d10 electricity damage; Reflex save halves.",
      "recastTime": 1,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:7"
      ],
      "spellLine": "Column of lightning",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>242 This spell creates a mad tangle of electric, ity that falls downward, dealing 7dl0 points of electrical damage to all creatures within the area.</p>"
    }
  },
  {
    "name": "Combine Gate",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 7,
      "manaCost": 25,
      "school": "Alteration [T eleport]",
      "castingTime": "1 full round",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "This spell transports the caster to the wizard spires in the Dreadlands of the continent Kunark.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:7"
      ],
      "spellLine": "Gate",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>This spell transports the caster to the wizard spires in the Dreadlands of the continent Kunark.</p>"
    }
  },
  {
    "name": "Combine Portal",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 50,
      "school": "Alteration [Teleportation]",
      "castingTime": "3 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "than 20 ft. apart The caster transports up to six targets of his choice within range to the wizard spires in the Dreadlands.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:9"
      ],
      "spellLine": "Gate",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>than 20 ft. apart The caster transports up to six targets of his choice within range to the wizard spires in the Dreadlands.</p>"
    }
  },
  {
    "name": "Common Gate",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 7,
      "manaCost": 25,
      "school": "A Iteration [Teleport]",
      "castingTime": "1 full round",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "This spell transports the caster to the pyra1nid in the West Co1n1nonlands.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:7"
      ],
      "spellLine": "Gate",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>This spell transports the caster to the pyra1nid in the West Co1n1nonlands.</p>"
    }
  },
  {
    "name": "Common Portal",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 50,
      "school": "Alteration [Teleportation]",
      "castingTime": "3 full rou11ds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "than 20 ft. apart The caster transports up to six targets of his choice within range to the pyramid in the West Commonlands.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:10"
      ],
      "spellLine": "Gate",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>than 20 ft. apart The caster transports up to six targets of his choice within range to the pyramid in the West Commonlands.</p>"
    }
  },
  {
    "name": "Complete Healing",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 15,
      "manaCost": 67,
      "school": "Alteration (Healing)",
      "castingTime": "1 full round",
      "range": "Close (25 ft. + 5 ft./2 levels).",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "none",
      "effect": "Heals all lost hit points.",
      "recastTime": 0,
      "classes": [
        "cleric"
      ],
      "description": "<p>As minor healing, except this spell heals the target up to his maximum hit point total.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "cleric:15"
      ],
      "spellLine": "Minor healing"
    }
  },
  {
    "name": "Concussion",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 4,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "If the target fails a Will save, it overlooks the wizard as a threat and will not attack the caster while another valid target remains and the wizard does not attack it again.",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "description": "<p>As calming visage, except if the target fails a Will save, this spell makes him overlook the wizard as a threat, so the target of the spell will not attack the caster as long as there is an alternative victim for him to consider and as long as the wizard does not attack the target again. This spell is use- less to a wizard who is fighting alone. For example, if the wizard and a warrior are fighting a froglok, and the wizard casts this spell on the froglok, if it fails a Will save, it will attack only the warrior until either the warrior is dead (and so the wizard is the only remaining opponent) or until the wizard attacks the froglok (at which point the froglok is free to choose its opponent as normal and may either attack the wizard or continue to battle the warrior).</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "wizard:10"
      ],
      "spellLine": "Calming visage"
    }
  },
  {
    "name": "Conflagration",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 11,
      "manaCost": 42,
      "school": "Evocation [Fire]",
      "castingTime": "1 action",
      "range": "Mediurn ( 100 ft. + 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "7d8",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "A massive conflagration erupts in a 20 ft radius dealing 7d8 fire damage; Reflex save for half.",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "description": "<p>As shock of fire, except this spell deals (4d6)x10 points of fire damage. Conglaciation OF</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "half",
      "classLevels": [
        "wizard:11"
      ],
      "spellLine": "Shock of fire"
    }
  },
  {
    "name": "Conjuration: Air",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 11,
      "manaCost": 33,
      "school": "Conjuration (Su1nmoning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "• Effect: One summoned creature As elementalkin: air, except the caster summons a type 10 air elemental.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:11"
      ],
      "spellLine": "Elementalkin: air",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>• Effect: One summoned creature As elementalkin: air, except the caster summons a type 10 air elemental.</p>"
    }
  },
  {
    "name": "Conjuration: Earth",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 11,
      "manaCost": 33,
      "school": "Conjuration (Summoning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One summoned creature As elementalkin: earth, except the caster sum1nons a type 10 earth elemental.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:11"
      ],
      "spellLine": "Elementalkin: earth",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One summoned creature As elementalkin: earth, except the caster sum1nons a type 10 earth elemental.</p>"
    }
  },
  {
    "name": "Conjuration: Fire",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 11,
      "manaCost": 33,
      "school": "Conjuration (Summoning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent {D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One summoned creature As elementalkin: fire, except the caster su1nmons a type 10 fire ele1nental.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:11"
      ],
      "spellLine": "Elementalkin: fire",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One summoned creature As elementalkin: fire, except the caster su1nmons a type 10 fire ele1nental.</p>"
    }
  },
  {
    "name": "Conjuration: Water",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 11,
      "manaCost": 33,
      "school": "Conjuration (Summoning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "• Effect: One summoned creature As elementalkin: water, except the caster summons a type 10 water elemental.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:11"
      ],
      "spellLine": "Elementalkin: water",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>• Effect: One summoned creature As elementalkin: water, except the caster summons a type 10 water elemental.</p>"
    }
  },
  {
    "name": "Cornucopia",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 7,
      "manaCost": 4,
      "school": "Conjuration (Creation)",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "24 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: 21 loaves of black bread As summon food, except this spell creates 21 loaves of bread.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:7"
      ],
      "spellLine": "Summon food",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: 21 loaves of black bread As summon food, except this spell creates 21 loaves of bread.</p>"
    }
  },
  {
    "name": "Courage",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 150,
      "school": "Abjuration",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "1 day (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "+2 morale bonus to STR and CON for the duration.",
      "recastTime": 0,
      "classes": [
        "cleric",
        "paladin"
      ],
      "description": "<p>As courage, except this spell protects the target with a +9 divine bonus to AC and a divine bonus of +275 hit points.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "cleric:1",
        "paladin:1"
      ],
      "spellLine": "Courage"
    }
  },
  {
    "name": "Cripple",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 38,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "Medium ( 100 ft. + 10 ft./level)",
      "duration": "1 minute/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "Target's speed is halved and DEX reduced by 4; Fort save negates.",
      "recastTime": 0,
      "classes": [
        "beastlord",
        "shaman"
      ],
      "description": "<p>As disempower, except this spell imposes a -11 penalty to Strength and Dexterity, a -10 penalty to Constitution, and a -5 penalty to Ar1nor Class.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "beastlord:5",
        "shaman:5"
      ],
      "spellLine": "Disempower"
    }
  },
  {
    "name": "Cure Disease",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 17,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "Cures one disease effect afflicting the touched creature.",
      "recastTime": 0,
      "classes": [
        "cleric"
      ],
      "description": "<p>less) As cure disease, except the dispel roll is ld20 + 1 per caster level with no 1naximum bonus due to level. In addition, a single casting of this spell allows the shaman to attempt to abolish any and all disease ef- fects on the target, although only one attempt per effect is allowed per casting.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "cleric:2"
      ],
      "spellLine": "Cure disease"
    }
  },
  {
    "name": "Cure Poison",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 17,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "Neutralizes one poison effect afflicting the touched creature.",
      "recastTime": 0,
      "classes": [
        "cleric"
      ],
      "description": "<p>• less) As cure poison, except the dispel roll is ld20 + 1 per caster level with no 1naxi- mum bonus due to level. In additio11, a single casting of this spell allows the cleric to attempt to abolish any and all poison effects on the target, although only 011e attempt per effect is allowed per casting.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "cleric:2"
      ],
      "spellLine": "Cure poison"
    }
  },
  {
    "name": "Dagger of Symbols",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 20,
      "school": "Conjuration (Creation)",
      "castingTime": "1 full round",
      "range": "Personal",
      "duration": "24 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: 1 dagger of symbols As summon dagger, except this spell creates a dagger of symbols, a + J dagger that, while held, also grants its wielder a + 1 bonus on saves against effects with the [disease], [magic], or (poison] descriptors, as well as bonuses of disease resistance (2), magic resistance (2), and poison resistance (2). EverQuestRole-PlayingGamePlayer'sHant>book",
      "recastTime": 1,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:9"
      ],
      "spellLine": "Summon dagger",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: 1 dagger of symbols As summon dagger, except this spell creates a dagger of symbols, a + J dagger that, while held, also grants its wielder a + 1 bonus on saves against effects with the [disease], [magic], or (poison] descriptors, as well as bonuses of disease resistance (2), magic resistance (2), and poison resistance (2). EverQuestRole-PlayingGamePlayer'sHant&gt;book</p>"
    }
  },
  {
    "name": "Dance of the Fireflies",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 2,
      "school": "Evocation [Light]",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "10 minutes/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Creates a globe of fireflies that sheds gentle light.",
      "recastTime": 0,
      "classes": [
        "druid"
      ],
      "classLevels": [
        "druid:1"
      ],
      "description": "<p>Creates a globe of fireflies.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "saveDC": ""
    }
  },
  {
    "name": "Dark Pact",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 1,
      "school": "Alteration [Magic]",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "See text (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "none",
      "effect": "Converts the caster's hit points into mana.",
      "recastTime": 2,
      "classes": [
        "necromancer",
        "shadowknight"
      ],
      "description": "<p>As dark pact, except this spell allows the transfer to take place at a greater rate. Each round, the caster converts 4 hit points into 2 mana.</p>",
      "deliveryType": "attack",
      "attackMode": "ranged",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "necromancer:3",
        "shadowknight:1"
      ],
      "spellLine": "Dark pact"
    }
  },
  {
    "name": "Darkening",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 42,
      "school": "Evocation [Force, Magic]",
      "castingTime": "1 action",
      "range": "Medium ( 100 ft. + 10 fc./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "Target suffers -2 to all saving throws and -1 AC; Will save negates.",
      "recastTime": 1,
      "classes": [
        "shadowknight"
      ],
      "description": "<p>As strike, except this spe ll deals (2d10+4 )xlO points of 1nagic damage.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "half",
      "classLevels": [
        "shadowknight:1"
      ],
      "spellLine": "Strike"
    }
  },
  {
    "name": "Darkness",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 14,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "80 ft",
      "duration": "1 min/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Slows target movement to half speed; Will save negates.",
      "recastTime": 0,
      "classes": [],
      "description": "<p>A shroud of unnatural darkness encumbers the target, dragging at their limbs.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "partial",
      "classLevels": []
    }
  },
  {
    "name": "Dead Men Floating",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 63,
      "school": "Abjuration [Poison]",
      "castingTime": "l full round",
      "range": "Medium (100 ft. + 10 ft./level)",
      "duration": "30 minutes/level (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "none",
      "effect": "Grants the Feign Death ability to every party member in range for the duration.",
      "recastTime": 1,
      "classes": [
        "necromancer"
      ],
      "description": "<p>A mass necromantic working grants the entire party the ability to convincingly feign death.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "necromancer:5"
      ]
    }
  },
  {
    "name": "Death's Door",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 12,
      "manaCost": 100,
      "school": "Necromancy",
      "castingTime": "1 action",
      "range": "60 ft",
      "duration": "3 rounds",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "Reduces target to 1 HP and prevents all healing for 3 rounds; Fort save negates.",
      "recastTime": 0,
      "classes": [
        "necromancer"
      ],
      "description": "<p>A death curse so powerful it can shatter the strongest warrior's vitality in an instant.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "necromancer:12"
      ]
    }
  },
  {
    "name": "Demi Lich",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 72,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "Self",
      "duration": "10 min/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "+6 INT, +4 AC, +2 to all saves; lose 3 HP per round but gain 5 mana per round.",
      "recastTime": 0,
      "classes": [
        "necromancer"
      ],
      "description": "<p>A near-complete transformation into demi-lich form — the necromancer teeters on the edge of true undeath.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "necromancer:9"
      ]
    }
  },
  {
    "name": "Detect Magic",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 5,
      "school": "Divination",
      "castingTime": "instant",
      "range": "30 ft",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Reveals magic auras on creatures, items, and areas within range.",
      "recastTime": 0,
      "classes": [
        "magician",
        "wizard"
      ],
      "description": "<p>A quick mental sweep that reveals the presence and school of magical auras nearby.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": ""
    }
  },
  {
    "name": "Diamondskin",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 11,
      "manaCost": 39,
      "school": "Abjuration",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "30 minutes/level (see text)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "As shieldskin, except this spell grants a buff bonus of ( 8d 1 O+ 2 )x2 te1nporary hit points. Material Components : A peridot.",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:11"
      ],
      "spellLine": "Diamondskin",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As shieldskin, except this spell grants a buff bonus of ( 8d 1 O+ 2 )x2 te1nporary hit points. Material Components : A peridot.</p>"
    }
  },
  {
    "name": "Dimensional Hole",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 20,
      "school": "Conjuration",
      "castingTime": "1 full round",
      "range": "Personal",
      "duration": "24 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: 1 pocket As dimensional pocket, except this spell creates a container equivalent in size to a large bag and the caster can only target himself.",
      "recastTime": 1,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:8"
      ],
      "spellLine": "Spirit pouch",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: 1 pocket As dimensional pocket, except this spell creates a container equivalent in size to a large bag and the caster can only target himself.</p>"
    }
  },
  {
    "name": "Dimensional Pocket",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 6,
      "school": "Conjuration (Summoning)",
      "castingTime": "1 full round",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "24 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: 1 pocket As spirit pouch, except this spell can be case on ocher creatures and creates the extradimensional container inside a target's pocket equivalent in size to a small bag. Items placed inside a dimen- sional pocket become effective ly weightless. The container disappears after 24 hours, as does everything inside of it at the time. Chapter Ten: Spells",
      "recastTime": 1,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:3"
      ],
      "spellLine": "Spirit pouch",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: 1 pocket As spirit pouch, except this spell can be case on ocher creatures and creates the extradimensional container inside a target's pocket equivalent in size to a small bag. Items placed inside a dimen- sional pocket become effective ly weightless. The container disappears after 24 hours, as does everything inside of it at the time. Chapter Ten: Spells</p>"
    }
  },
  {
    "name": "Disease Cloud",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 3,
      "school": "Necromancy [Disease]",
      "castingTime": "1 action",
      "range": "Medium (100 ft. + 10 ft./level)",
      "duration": "20 rounds",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "Deals 1 point of disease damage, plus 1 point every 2 rounds for 20 rounds.",
      "recastTime": 0,
      "classes": [
        "necromancer"
      ],
      "classLevels": [
        "necromancer:1"
      ],
      "description": "<p>1 point of disease damage, plus 1 point every 2 rounds for 20 rounds.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "partial",
      "saveDC": ""
    }
  },
  {
    "name": "Dismiss Summoned",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 15,
      "school": "Evocation [Magic]",
      "castingTime": "1 action",
      "range": "Medium (100 ft.+ 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "As ward summoned, except th is spell deals (7d6+ 1 )x2 points of magic damage. t>ismiss Unt>eat> Evocation [Magic]",
      "recastTime": 1,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:8"
      ],
      "spellLine": "Ward summoned",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As ward summoned, except th is spell deals (7d6+ 1 )x2 points of magic damage. t&gt;ismiss Unt&gt;eat&gt; Evocation [Magic]</p>"
    }
  },
  {
    "name": "Divine Aura",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 2,
      "school": "Abjuration",
      "castingTime": "Free action",
      "range": "Personal",
      "duration": "3 rounds (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Aura of divine protection grants +4 AC for the duration.",
      "recastTime": 15,
      "classes": [
        "cleric",
        "paladin"
      ],
      "description": "<p>less) Tl-1e caster calls upon his god to protect hitn in a time of need. For 3 full rounds, he becomes cotnpletely invul- nerable. Nothing can har1n or stun him during this time, including any spell or physi- cal attack. However, he hi1nself cannot attack or cast spells. Spells in the taper enchantment line do not dispel this effect. Note that eve11 benefi- cial spells, such as healing magic, cannot affect the caster during tl1is spell's duration.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "cleric:4",
        "paladin:4"
      ],
      "spellLine": "Divine aura"
    }
  },
  {
    "name": "Divine Strike",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 18,
      "school": "Evocation",
      "castingTime": "1 action",
      "range": "40 ft",
      "duration": "Instantaneous",
      "damageFormula": "2d6",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Calls down a searing bolt of holy light on the target.",
      "recastTime": 0,
      "classes": [
        "cleric",
        "paladin"
      ],
      "description": "<p>Calls down a searing bolt of holy light upon the unholy.</p>",
      "deliveryType": "attack",
      "attackMode": "ranged",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "cleric:3",
        "paladin:3"
      ]
    }
  },
  {
    "name": "Drain Soul",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 36,
      "school": "Necromancy",
      "castingTime": "1 action",
      "range": "60 ft",
      "duration": "Instantaneous",
      "damageFormula": "3d8+5",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Drains 3d8+5 HP from target; Shadow Knight heals for the same amount.",
      "recastTime": 0,
      "classes": [
        "shadowknight"
      ],
      "description": "<p>The Shadow Knight reaches out with dark power, ripping the very soul-force from their enemy.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "shadowknight:5"
      ]
    }
  },
  {
    "name": "Drifting Death",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 33,
      "school": "Conjuration (Summoning) [Magic]",
      "castingTime": "1 action",
      "range": "Medium (100 ft. + 10 ft./level)",
      "duration": "9 rounds",
      "damageFormula": "3d10",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "Deals 3d10 magic damage each round for 9 rounds.",
      "recastTime": 0,
      "classes": [
        "ranger"
      ],
      "description": "<p>A cloud of venomous insects and wasting magic follows the target, slowly eating away at body and spirit.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "half",
      "classLevels": [
        "ranger:3"
      ]
    }
  },
  {
    "name": "Drones of Doom",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 22,
      "school": "Conjuration",
      "castingTime": "1 action",
      "range": "50 ft",
      "duration": "Instantaneous",
      "damageFormula": "2d6",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Summons a swarm of insects that tear at the target.",
      "recastTime": 0,
      "classes": [
        "druid"
      ],
      "description": "<p>Summons a swarm of voracious insects to tear at the target.</p>",
      "deliveryType": "attack",
      "attackMode": "ranged",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "druid:4"
      ]
    }
  },
  {
    "name": "Dyzil's Deafening Decoy",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 13,
      "manaCost": 0,
      "school": "",
      "castingTime": "1 action",
      "range": "",
      "duration": "",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Summons fearso1ne fire ele1nental pee.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:13"
      ],
      "spellLine": "Dyzil's Deafening Decoy",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Summons fearso1ne fire ele1nental pee.</p>"
    }
  },
  {
    "name": "Earth Elemental",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 20,
      "school": "Conjuration",
      "castingTime": "1 action",
      "range": "30 ft",
      "duration": "10 min/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Summons an earth elemental companion to serve the caster.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "description": "<p>The magician calls stone and soil to life, binding an earth elemental as a loyal pet.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": ""
    }
  },
  {
    "name": "Elemental Armor",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 11,
      "manaCost": 17,
      "school": "Abjuration [Cold, Fire]",
      "castingTime": "1 full round",
      "range": "Personal",
      "duration": "10 ,ninutes/level (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "As elemental shield, except the caster gains + 3 on cold and fire saves, and cold and fire resistance ( 12).",
      "recastTime": 0,
      "classes": [
        "magician",
        "wizard"
      ],
      "classLevels": [
        "magician:11",
        "wizard:11"
      ],
      "spellLine": "Elemental shield",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As elemental shield, except the caster gains + 3 on cold and fire saves, and cold and fire resistance ( 12).</p>"
    }
  },
  {
    "name": "Elemental Maelstrom",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 11,
      "manaCost": 40,
      "school": "Evocation [Cold, Electricity, Fire, Magic]",
      "castingTime": "1 full rou11d",
      "range": "Medium ( 100 ft. + 10 ft./level)",
      "duration": "6 rounds",
      "damageFormula": "4d8+4",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "Unleashes an elemental maelstrom dealing 4d8+4 to all enemies in 30 ft radius; Reflex save for half.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "description": "<p>This spell calls evokes a tiny but fierce storm of magical wind, fire, lightning and hail that settles around a single target, dealing (6dlO)x2 points of damage in the round the spell is cast, and 3d10 addi- tional points of damage each round for the next 5 rounds. This damage is composed of equal parts cold, electricity, fire, and magic, so an immunity or resistance to any one type cannot negate more than one quarter of the maelstrom's total dam- age each round. ZS4 An initial Fortitude save will halve all damage (before dividing it into 4 types).</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "half",
      "classLevels": [
        "magician:11"
      ],
      "spellLine": "Elemental maelstrom"
    }
  },
  {
    "name": "Elemental Shield",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 17,
      "school": "Abjuration [Cold, Fire]",
      "castingTime": "1 full round",
      "range": "Personal",
      "duration": "10 ,ninutes/level (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "As elemental shield, except the caster gains + 3 on cold and fire saves, and cold and fire resistance ( 12).",
      "recastTime": 0,
      "classes": [
        "magician",
        "wizard"
      ],
      "classLevels": [
        "magician:6",
        "wizard:6"
      ],
      "spellLine": "Elemental shield",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As elemental shield, except the caster gains + 3 on cold and fire saves, and cold and fire resistance ( 12).</p>"
    }
  },
  {
    "name": "Elemental: Air",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 20,
      "school": "Conjuration (Summoning)",
      "castingTime": "2 full rounds",
      "range": "C lose (25 ft. + 5 ft./2 levels)",
      "duration": "Perma11ent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One su1n1noned creature As elementalkin: air, except the castersu1n- mons a type 3 air elernental.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:4"
      ],
      "spellLine": "Elementalkin: air",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One su1n1noned creature As elementalkin: air, except the castersu1n- mons a type 3 air elernental.</p>"
    }
  },
  {
    "name": "Elemental: Earth",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 20,
      "school": "Conjuration (Surnmoning)",
      "castingTime": "2 full rounds",
      "range": "C lose (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One sumn1oned creature As elementalkin: earth, except the caster summons a type 3 earth elemental. •",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:4"
      ],
      "spellLine": "Elementalkin: earth",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One sumn1oned creature As elementalkin: earth, except the caster summons a type 3 earth elemental. •</p>"
    }
  },
  {
    "name": "Elemental: Fire",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 20,
      "school": "Conjuration (Sum1noning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One summoned creature As elementalkin: fire, except the caster summons a type 3 fire elemental.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:4"
      ],
      "spellLine": "Elementalkin: fire",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One summoned creature As elementalkin: fire, except the caster summons a type 3 fire elemental.</p>"
    }
  },
  {
    "name": "Elemental: Water",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 20,
      "school": "Conjuration (Summoning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (0)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One summoned creature As elementalkin: water, except the caster summons a type 3 water elemental. Elnerick's Electrical",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:4"
      ],
      "spellLine": "Elementalkin: water",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One summoned creature As elementalkin: water, except the caster summons a type 3 water elemental. Elnerick's Electrical</p>"
    }
  },
  {
    "name": "Elementaling: Air",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 13,
      "school": "Conjuration (Sum1noning)",
      "castingTime": "1 full round",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One su,nmoned creature As elementalkin: air, except the castersum- 1nons a type 2 air elernental.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:3"
      ],
      "spellLine": "Elementalkin: air",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One su,nmoned creature As elementalkin: air, except the castersum- 1nons a type 2 air elernental.</p>"
    }
  },
  {
    "name": "Elementaling: Earth",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 13,
      "school": "Conjuration (Su1nmoni11g)",
      "castingTime": "1 full round",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One summoned creature As elementalkin: earth, except the caster sumtnons a type 2 earth elemental.",
      "recastTime": 11,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:3"
      ],
      "spellLine": "Elementalkin: earth",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One summoned creature As elementalkin: earth, except the caster sumtnons a type 2 earth elemental.</p>"
    }
  },
  {
    "name": "Elementaling: Fire",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 13,
      "school": "Conjuration (Summoning)",
      "castingTime": "1 full round",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One summoned creature As elementalkin: fire, except the caster summons a type 2 fire elemental.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:3"
      ],
      "spellLine": "Elementalkin: fire",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One summoned creature As elementalkin: fire, except the caster summons a type 2 fire elemental.</p>"
    }
  },
  {
    "name": "Elementaling: Water",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 13,
      "school": "Conjuration (Sum1noning)",
      "castingTime": "1 full round",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One summoned creature , EvuQuestRole-PlayingGamePlayer'sHanbbook As elementalkin: water, except the caster summons a type 2 water elemental.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:3"
      ],
      "spellLine": "Elementalkin: water",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One summoned creature , EvuQuestRole-PlayingGamePlayer'sHanbbook As elementalkin: water, except the caster summons a type 2 water elemental.</p>"
    }
  },
  {
    "name": "Elementalkin: Air",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 33,
      "school": "Conjuration (Su1nmoning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "• Effect: One summoned creature As elementalkin: air, except the caster summons a type 10 air elemental.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:2"
      ],
      "spellLine": "Elementalkin: air",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>• Effect: One summoned creature As elementalkin: air, except the caster summons a type 10 air elemental.</p>"
    }
  },
  {
    "name": "Elementalkin: Earth",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 33,
      "school": "Conjuration (Summoning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One summoned creature As elementalkin: earth, except the caster sum1nons a type 10 earth elemental.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:2"
      ],
      "spellLine": "Elementalkin: earth",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One summoned creature As elementalkin: earth, except the caster sum1nons a type 10 earth elemental.</p>"
    }
  },
  {
    "name": "Elementalkin: Fire",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 33,
      "school": "Conjuration (Summoning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent {D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One summoned creature As elementalkin: fire, except the caster su1nmons a type 10 fire ele1nental.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:2"
      ],
      "spellLine": "Elementalkin: fire",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One summoned creature As elementalkin: fire, except the caster su1nmons a type 10 fire ele1nental.</p>"
    }
  },
  {
    "name": "Elementalkin: Water",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 33,
      "school": "Conjuration (Summoning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "• Effect: One summoned creature As elementalkin: water, except the caster summons a type 10 water elemental.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:2"
      ],
      "spellLine": "Elementalkin: water",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>• Effect: One summoned creature As elementalkin: water, except the caster summons a type 10 water elemental.</p>"
    }
  },
  {
    "name": "Elnerick's Entombment of Ice",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 38,
      "school": "Evocation [Cold]",
      "castingTime": "1 action",
      "range": "Medium (100 ft. + 10 ft./level)",
      "duration": "Up to 5 rounds",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "- - Chapter Ten: Spells ~~~ ~======---,~..:::=:.7\"\"\".,...,.....,,.,...,_~===-:=.~ ---' ~.A-.' This spell encases the target creature in a thick layer of ice. If the target fails his Reflex saving throw, he suffers (8dlO)x2 points of cold da1nage immediately and is held fast in his current position. The ice may be damaged normally by attacks (see \"Attacking an Object\" in Chapter 12: Combat), and has a hardness of 1 and 50 hit points. In the target's first rou11d following the casting of this spell, and each round thereafter, he may attempt to use a move action to break free, but this requires a Strength check with a OC equal to the ice's current hit points. If the check fails, the victi1n can take no other action that re- quires movement. In subsequent rounds, the target takes no further damage, and the ice melts away, losing 10 hit points every round u11til it reaches 0, at which point the ice is cotnpletely melted. The magically created ice will not last longer than 5 rounds even in frigid cli- mates, but its melting may be hastened by very high local te1nperatures, at the GM's discretion. Damage of any type will affect the en- tombed target only if the attack does enough damage to destroy the ice - any damage ren1aining fro1n the attack be- yond that which reduced the ice to O hit points is dealt to the creature instead. Otherwise, the attack is considered to have hit the ice (and will lower the en- tombed creature's escape DC appropriately). Other types of targetable spells such as weaken or mana sieve rnay be cast at the entombed target as normal.",
      "recastTime": 1,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:10"
      ],
      "spellLine": "Elnerick' s entombment of ice",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>- - Chapter Ten: Spells ~~~ ~======---,~..:::=:.7\"\"\".,...,.....,,.,...,_~===-:=.~ ---' ~.A-.' This spell encases the target creature in a thick layer of ice. If the target fails his Reflex saving throw, he suffers (8dlO)x2 points of cold da1nage immediately and is held fast in his current position. The ice may be damaged normally by attacks (see \"Attacking an Object\" in Chapter 12: Combat), and has a hardness of 1 and 50 hit points. In the target's first rou11d following the casting of this spell, and each round thereafter, he may attempt to use a move action to break free, but this requires a Strength check with a OC equal to the ice's current hit points. If the check fails, the victi1n can take no other action that re- quires movement. In subsequent rounds, the target takes no further damage, and the ice melts away, losing 10 hit points every round u11til it reaches 0, at which point the ice is cotnpletely melted. The magically created ice will not last longer than 5 rounds even in frigid cli- mates, but its melting may be hastened by very high local te1nperatures, at the GM's discretion. Damage of any type will affect the en- tombed target only if the attack does enough damage to destroy the ice - any damage ren1aining fro1n the attack be- yond that which reduced the ice to O hit points is dealt to the creature instead. Otherwise, the attack is considered to have hit the ice (and will lower the en- tombed creature's escape DC appropriately). Other types of targetable spells such as weaken or mana sieve rnay be cast at the entombed target as normal.</p>"
    }
  },
  {
    "name": "Endure Cold",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 67,
      "school": "Abjuration",
      "castingTime": "1 full round",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "1 day",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "+5 resistance to cold damage and +2 to saving throws vs. cold effects.",
      "recastTime": 0,
      "classes": [
        "beastlord",
        "druid",
        "necromancer",
        "ranger",
        "shaman"
      ],
      "description": "<p>than 20 ft. apart As endure cold, except this spell grants up to six targets a + 5 bonus on saves against effects with the [cold] or [fire] descriptors, and cold and fire resistance (22).</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "beastlord:2",
        "druid:3",
        "necromancer:1",
        "ranger:2",
        "shaman:2"
      ],
      "spellLine": "Endure cold"
    }
  },
  {
    "name": "Endure Fire",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 3,
      "school": "Abjuration",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "10 minutes/level (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "+5 resistance to fire damage and +2 to saving throws vs. fire effects.",
      "recastTime": 1,
      "classes": [
        "beastlord",
        "druid",
        "ranger",
        "shaman"
      ],
      "description": "<p>less) As endure cold, except this spell's benefits apply against attacks, spells, or abilities with the [fire] descriptor.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "beastlord:2",
        "druid:1",
        "ranger:2",
        "shaman:2"
      ],
      "spellLine": "Endure cold"
    }
  },
  {
    "name": "Endure Magic",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 33,
      "school": "Abjuration [Magic]",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "10 minutes/level (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "+5 resistance to magic damage and +2 to magic saving throws.",
      "recastTime": 0,
      "classes": [
        "shaman"
      ],
      "description": "<p>EverQuestRole-l'layingGamel'layer'sHant&gt;book than 20 ft. apart As endure magic, except the caster can affect up to six creatures within range who gain the benefits of a buff bonus of+ 5 to saves against rnagic, and magic resistance ( 22).</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "shaman:3"
      ],
      "spellLine": "Endure magic"
    }
  },
  {
    "name": "Energy Storm",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 27,
      "school": "Evocation [Magic]",
      "castingTime": "1 action",
      "range": "Medium (100 ft. + 10 ft./level)",
      "duration": "3 rounds",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "As lightning storm, except this spell creates waves of multicolored magical energy that rain down on the affected area, each deal- ing 6d 10 points of magic damage.",
      "recastTime": 3,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:8"
      ],
      "spellLine": "Lightning storm",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As lightning storm, except this spell creates waves of multicolored magical energy that rain down on the affected area, each deal- ing 6d 10 points of magic damage.</p>"
    }
  },
  {
    "name": "Engulfing Darkness",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 16,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "80 ft",
      "duration": "1 min/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Target cannot move from their current location (snare); Will save negates.",
      "recastTime": 0,
      "classes": [
        "shadowknight"
      ],
      "description": "<p>Tendrils of supernatural darkness wrap around the target's legs, holding them completely immobile.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "shadowknight:2"
      ]
    }
  },
  {
    "name": "Ennui",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 7,
      "manaCost": 48,
      "school": "Enchantment",
      "castingTime": "1 action",
      "range": "60 ft",
      "duration": "1d4+1 rounds",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Stuns target and slows their recovery; Will save halves duration.",
      "recastTime": 0,
      "classes": [
        "enchanter"
      ],
      "description": "<p>A crushing wave of magical ennui robs the target of their will to act, leaving them stunned and listless.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "varies",
      "classLevels": [
        "enchanter:7"
      ]
    }
  },
  {
    "name": "Enstill",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 10,
      "school": "Alteration [Magic]",
      "castingTime": "1 action",
      "range": "Medium (100ft. + lOft./level)",
      "duration": "2d8 rounds (see text)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "Wiz 6 As root, except as above.",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:6"
      ],
      "spellLine": "Root",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Wiz 6 As root, except as above.</p>"
    }
  },
  {
    "name": "Enticement of Flame",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 11,
      "manaCost": 40,
      "school": "Evocation [Fire]",
      "castingTime": "I full round",
      "range": "Medium (100 ft. + 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "As lure of frost, except this spell has a longer casting time and deals (8dlO)x2 points of fire dainage that cannot be resisted; creatures immune to fire take no damage.",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:11"
      ],
      "spellLine": "Lure of frost",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As lure of frost, except this spell has a longer casting time and deals (8dlO)x2 points of fire dainage that cannot be resisted; creatures immune to fire take no damage.</p>"
    }
  },
  {
    "name": "Entrance",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 14,
      "school": "Conjuration [Mind,Affecting]",
      "castingTime": "1 action",
      "range": "Medium ( 100 ft. + 10 ft./level)",
      "duration": "12 rounds",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Powerful mezmerize holds one target for up to 2 min/level; Will save negates; broken by damage.",
      "recastTime": 1,
      "classes": [
        "enchanter"
      ],
      "description": "<p>As mesmerize, except that the duration is longer and, if the mesmerization effect runs its full course, the target forgets the period 3 minutes prior to this spell's casting.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "enchanter:8"
      ],
      "spellLine": "Mesmerize"
    }
  },
  {
    "name": "Envenomed Bolt",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 53,
      "school": "Conjuration (Sum1noning) [Poison]",
      "castingTime": "1 full round",
      "range": "Medium (100 ft. + 10 ft./level)",
      "duration": "7 rounds",
      "damageFormula": "1d4",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "Target takes 1d4 poison damage per round; Fort save each round negates that round's damage.",
      "recastTime": 0,
      "classes": [],
      "description": "<p>Effect: Ray As poison bolt, except tl,e target takes 6d10 points of poison damage immedi, ately (Fort l,alf), then takes an additional 6d 10 points of poison damage (3d 10 if the initial save was successful) per round until the spell ends or is dispelled.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "half",
      "classLevels": [],
      "spellLine": "Poison bolt"
    }
  },
  {
    "name": "Evacuate Faydark",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 50,
      "school": "A lteration [Teleportation]",
      "castingTime": "1 full round",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "than 20 ft. apart The caster transports up to six targets of his choice within range to the spires of Greater Faydark. Because this spell is cast so much more quickly than other group teleports, there is a chance that someone (including the caster himself) could be left behind. Each character evacuating has a 5% chance of being left behind. Each target should roll ld20, and on a result of 1, that creature has been left behind.",
      "recastTime": 1,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:9"
      ],
      "spellLine": "Gate",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>than 20 ft. apart The caster transports up to six targets of his choice within range to the spires of Greater Faydark. Because this spell is cast so much more quickly than other group teleports, there is a chance that someone (including the caster himself) could be left behind. Each character evacuating has a 5% chance of being left behind. Each target should roll ld20, and on a result of 1, that creature has been left behind.</p>"
    }
  },
  {
    "name": "Evacuate Nektulos",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 11,
      "manaCost": 50,
      "school": "Alteration [Teleportation]",
      "castingTime": "1 full round",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "than 20 ft. apart The caster transports up to six targets of his choice within range to the pyramid in Nektulos Forest. Because this spell is cast so much 1nore quickly than other group teleports, there is a chance that someone ( including the caster himself) could be left behind. Each character evacuating has a 5% chance of being left behind. Each target should roll ld20, and on a result of 1, that creature has been left behind.",
      "recastTime": 1,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:11"
      ],
      "spellLine": "Gate",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>than 20 ft. apart The caster transports up to six targets of his choice within range to the pyramid in Nektulos Forest. Because this spell is cast so much 1nore quickly than other group teleports, there is a chance that someone ( including the caster himself) could be left behind. Each character evacuating has a 5% chance of being left behind. Each target should roll ld20, and on a result of 1, that creature has been left behind.</p>"
    }
  },
  {
    "name": "Evacuate North",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 50,
      "school": "A lteration [Teleportation]",
      "castingTime": "1 full round",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "than 20 ft. apart The caster transports up to six targets of her choice within range to the spires in the Plains ofKarana. Because this spell is cast so much 1nore quickly than other group teleports, there is a chance that someone ( including the caster himself) could be left behind. Each character evacuating has a 5 % chance of being left behind. Each target should roll 1 d20, and on a result of 1, that creature has been left behind.",
      "recastTime": 1,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:8"
      ],
      "spellLine": "Gate",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>than 20 ft. apart The caster transports up to six targets of her choice within range to the spires in the Plains ofKarana. Because this spell is cast so much 1nore quickly than other group teleports, there is a chance that someone ( including the caster himself) could be left behind. Each character evacuating has a 5 % chance of being left behind. Each target should roll 1 d20, and on a result of 1, that creature has been left behind.</p>"
    }
  },
  {
    "name": "Evacuate Ro",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 50,
      "school": "Alteration [Teleportation]",
      "castingTime": "1 full round",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "than 20 ft. apart The caster transports up to six targets of his choice within range to the pyramid far south in the Ro Desert. Because this spell is cast so much more quickly than other group teleports, there is a chance that someone (including the caster himself) could be left behind. Each character evacuating has a 5% chance of being left behind. Each target should roll ld20, and on a result of 1, that creature has been left behind.",
      "recastTime": 1,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:10"
      ],
      "spellLine": "Gate",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>than 20 ft. apart The caster transports up to six targets of his choice within range to the pyramid far south in the Ro Desert. Because this spell is cast so much more quickly than other group teleports, there is a chance that someone (including the caster himself) could be left behind. Each character evacuating has a 5% chance of being left behind. Each target should roll ld20, and on a result of 1, that creature has been left behind.</p>"
    }
  },
  {
    "name": "Everfount",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 7,
      "manaCost": 5,
      "school": "Conjuration (Creation)",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "24 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: 7 gallons of water As summon drink, except this spell creates 7 gallons of water.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:7"
      ],
      "spellLine": "Summon drink",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: 7 gallons of water As summon drink, except this spell creates 7 gallons of water.</p>"
    }
  },
  {
    "name": "Exile Summoned",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 14,
      "manaCost": 42,
      "school": "Evocation [Magic]",
      "castingTime": "1 action",
      "range": "Medium (100 ft. + 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "As ward summoned, except this spell deals (4d6+2)x10 points of magic damage.",
      "recastTime": 1,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:14"
      ],
      "spellLine": "Ward summoned",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As ward summoned, except this spell deals (4d6+2)x10 points of magic damage.</p>"
    }
  },
  {
    "name": "Expedience",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 7,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "1 minute/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "As spirit of wolf, except this spell may be cast only upon the caster's summoned elemental pet, allowing the pet to move 20% faster than its base speed (in any 1nedium).",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:8"
      ],
      "spellLine": "Spirit of wolf",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As spirit of wolf, except this spell may be cast only upon the caster's summoned elemental pet, allowing the pet to move 20% faster than its base speed (in any 1nedium).</p>"
    }
  },
  {
    "name": "Expel Summoned",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 22,
      "school": "Evocation [Magic]",
      "castingTime": "1 action",
      "range": "Medium ( 100 ft. + 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "As ward summoned, except this spell deals (6d10+ 3 )x2 points of magic damage.",
      "recastTime": 1,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:10"
      ],
      "spellLine": "Ward summoned",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As ward summoned, except this spell deals (6d10+ 3 )x2 points of magic damage.</p>"
    }
  },
  {
    "name": "Expulse Summoned",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 10,
      "school": "Evocation [Magic]",
      "castingTime": "1 action",
      "range": "Medium (100 ft.+ 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "2S9 As ward summoned, except this spell deals 6d 10 points of magic damage.",
      "recastTime": 1,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:6"
      ],
      "spellLine": "Ward summoned",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>2S9 As ward summoned, except this spell deals 6d 10 points of magic damage.</p>"
    }
  },
  {
    "name": "Eye of Tallon",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 14,
      "manaCost": 11,
      "school": "Conjuration (Summoning)",
      "castingTime": "1 full round",
      "range": "Unlimited",
      "duration": "5 rounds",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "• Effect: Magical sensor As eye of Zomm, except that the magical sensor is invisible, grants the caster a + 2 bonus on all Spot and Search checks made through the eye, and can detect invisible objects continuously, as the spell see invisible. Any creature with Intelligence 12 or higher can notice the eye of Tallon by making a Scry check or an Intelligence check (DC 20). Spells chat detect scrying can also notice the eye.",
      "recastTime": 2,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:14"
      ],
      "spellLine": "Eye of Zomm",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>• Effect: Magical sensor As eye of Zomm, except that the magical sensor is invisible, grants the caster a + 2 bonus on all Spot and Search checks made through the eye, and can detect invisible objects continuously, as the spell see invisible. Any creature with Intelligence 12 or higher can notice the eye of Tallon by making a Scry check or an Intelligence check (DC 20). Spells chat detect scrying can also notice the eye.</p>"
    }
  },
  {
    "name": "Eye of Zomm",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 11,
      "school": "Conjuration (Summoning)",
      "castingTime": "1 full round",
      "range": "Unlimited",
      "duration": "5 rounds",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "• Effect: Magical sensor As eye of Zomm, except that the magical sensor is invisible, grants the caster a + 2 bonus on all Spot and Search checks made through the eye, and can detect invisible objects continuously, as the spell see invisible. Any creature with Intelligence 12 or higher can notice the eye of Tallon by making a Scry check or an Intelligence check (DC 20). Spells chat detect scrying can also notice the eye.",
      "recastTime": 2,
      "classes": [
        "magician",
        "wizard"
      ],
      "classLevels": [
        "magician:3",
        "wizard:3"
      ],
      "spellLine": "Eye of Zomm",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>• Effect: Magical sensor As eye of Zomm, except that the magical sensor is invisible, grants the caster a + 2 bonus on all Spot and Search checks made through the eye, and can detect invisible objects continuously, as the spell see invisible. Any creature with Intelligence 12 or higher can notice the eye of Tallon by making a Scry check or an Intelligence check (DC 20). Spells chat detect scrying can also notice the eye.</p>"
    }
  },
  {
    "name": "Eyes of the Wolf",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 28,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "Self",
      "duration": "10 min/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Grants low-light vision, the ability to see invisible, and +5 to Spot checks.",
      "recastTime": 0,
      "classes": [
        "ranger"
      ],
      "description": "<p>The ranger borrows the keen supernatural vision of the wolf, piercing darkness and illusion alike.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "ranger:5"
      ]
    }
  },
  {
    "name": "Fade",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 2,
      "school": "Alteration [Teleportation]",
      "castingTime": "Free action",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "This spell will not teleport the caster very far, and even then it sends him in a ran- do1n direction, but in times of duress, this quick-casting spell can save his life. Make two dice rolls to determine the direction and distance of tl1e teleportation. A d4 roll determines direction: 1 = north, 2 = south, 3 = east, 4 = west, and (ld10)x5 detertnines the distance in feet. Note that the spell will not teleport the caster through structures, such as walls or doors. If the direction of the teleportation is blocked by such a structure, then the caster will appear next to it even if the distance roll indicated he should have teleported farther. For this reason, the spell works best outdoors.",
      "recastTime": 1,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:2"
      ],
      "spellLine": "Gate",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>This spell will not teleport the caster very far, and even then it sends him in a ran- do1n direction, but in times of duress, this quick-casting spell can save his life. Make two dice rolls to determine the direction and distance of tl1e teleportation. A d4 roll determines direction: 1 = north, 2 = south, 3 = east, 4 = west, and (ld10)x5 detertnines the distance in feet. Note that the spell will not teleport the caster through structures, such as walls or doors. If the direction of the teleportation is blocked by such a structure, then the caster will appear next to it even if the distance roll indicated he should have teleported farther. For this reason, the spell works best outdoors.</p>"
    }
  },
  {
    "name": "Fay Gate",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 0,
      "school": "",
      "castingTime": "1 action",
      "range": "",
      "duration": "",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Transports caster to Greater Faydark.",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:6"
      ],
      "spellLine": "Fay Gate",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Transports caster to Greater Faydark.</p>"
    }
  },
  {
    "name": "Fay Portal",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 50,
      "school": "Alteration [Teleportation]",
      "castingTime": "3 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "than 20 ft. apart Chapter Ten: Spells The caster transports up to six targets of her choice within range to the wizard spires in Greater Faydark.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:8"
      ],
      "spellLine": "Gate",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>than 20 ft. apart Chapter Ten: Spells The caster transports up to six targets of her choice within range to the wizard spires in Greater Faydark.</p>"
    }
  },
  {
    "name": "Fear",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 12,
      "school": "Alteration [Compulsion, Fear]",
      "castingTime": "1 action",
      "range": "Medium ( 100 ft. + 10 ft./level)",
      "duration": "ld6 rounds",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Target flees in uncontrolled terror for 2 rounds. Save: Will negates.",
      "recastTime": 0,
      "classes": [
        "necromancer"
      ],
      "description": "<p>As fear, except this spell has a greater potential duration.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "necromancer:2"
      ],
      "spellLine": "Fear"
    }
  },
  {
    "name": "Feign Death",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 20,
      "school": "Abjuration",
      "castingTime": "Free action",
      "range": "Personal",
      "duration": "1 hour/level ( D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Caster appears dead to all NPCs. Breaks if caster moves or acts.",
      "recastTime": 1,
      "classes": [
        "necromancer"
      ],
      "description": "<p>As feign death, except this spell has a longer duration as well as shorter casting and recast times. In addition, the Will save DC for those trying to see through the spell is 22 + ( the caster's Intelligence modifier x3 ).</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "necromancer:9"
      ],
      "spellLine": "Feign death"
    }
  },
  {
    "name": "Ferocity of Irionu",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 32,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "Pet range",
      "duration": "2 min/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "+4 STR, +4 DEX, and +2 additional attacks per round to warder pet.",
      "recastTime": 0,
      "classes": [
        "beastlord"
      ],
      "description": "<p>Named for a legendary beastlord, this buff drives the warder into a state of extraordinary ferocity.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "beastlord:5"
      ]
    }
  },
  {
    "name": "Fingers of Fire",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 8,
      "school": "Evocation [Fire]",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "long, centered on caster's hand A sheet of fla1nes shoots from the caster's outstretched ha11d, dealing 3d8 points of fire da1nage to all creatures within the affected area (Reflex half). The caster is unhar1ned.",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:3"
      ],
      "spellLine": "Fingers of fire",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>long, centered on caster's hand A sheet of fla1nes shoots from the caster's outstretched ha11d, dealing 3d8 points of fire da1nage to all creatures within the affected area (Reflex half). The caster is unhar1ned.</p>"
    }
  },
  {
    "name": "Fire Bolt",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 7,
      "school": "Evocation [Fire]",
      "castingTime": "1 action",
      "range": "Long ( 400 ft. + 40 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "1d6",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "Hurl a bolt of arcane fire at a target within range.",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "description": "<p>As flame bolt, except this spell deals 4d8 points of fire darnage.</p>",
      "deliveryType": "attack",
      "attackMode": "ranged",
      "attackBonus": 0,
      "saveEffect": "half",
      "classLevels": [
        "wizard:3"
      ],
      "spellLine": "Flame bolt"
    }
  },
  {
    "name": "Fire Elemental",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 35,
      "school": "Conjuration",
      "castingTime": "1 action",
      "range": "30 ft",
      "duration": "10 min/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Summons a fire elemental companion to serve the caster.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "description": "<p>Living flame is shaped and bound by the magician's will into a fire elemental servant.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": ""
    }
  },
  {
    "name": "Fire Flux",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 33,
      "school": "Evocation [Fire]",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "As fire flux, except thisspelldeals (5dlO)x2 points of fire da1nage.",
      "recastTime": 1,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:2"
      ],
      "spellLine": "Fire flux",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As fire flux, except thisspelldeals (5dlO)x2 points of fire da1nage.</p>"
    }
  },
  {
    "name": "Fire Spiral of Al'Kabor",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 25,
      "school": "Evocation [Fire]",
      "castingTime": "1 action",
      "range": "Medium (100 ft.+ 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "As frost spiral of Al'Kabor, except this spell creates a swirling spiral of flames that deals 5d10 points of fire damage.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:6"
      ],
      "spellLine": "Frost spiral of Al'Kabor",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As frost spiral of Al'Kabor, except this spell creates a swirling spiral of flames that deals 5d10 points of fire damage.</p>"
    }
  },
  {
    "name": "Firefist",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 5,
      "school": "Evocation",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "1 minute/level (D)",
      "damageFormula": "1d6",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "A fist-sized ball of natural fire strikes the target.",
      "recastTime": 0,
      "classes": [
        "druid"
      ],
      "description": "<p>The caster's hands flicker with flames that grant a + 1 bonus on all 1nelee attacks, whether armed or unarrned.</p>",
      "deliveryType": "attack",
      "attackMode": "ranged",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "druid:3"
      ],
      "spellLine": "Firefist"
    }
  },
  {
    "name": "Firestorm",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 10,
      "school": "Evocation [Fire]",
      "castingTime": "1 action",
      "range": "Medium (100 ft. + 10 ft./level)",
      "duration": "3 rounds",
      "damageFormula": "4d6",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "Waves of fire rain through a 20-foot-radius area for 3 rounds, each wave dealing 4d6 fire damage; Reflex save halves each round.",
      "recastTime": 3,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:4"
      ],
      "spellLine": "Firestorm",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>A wave of fire rains down on the affected area each round, each wave dealing 4d6 points of fire damage to anyone within the area. A Reflex save is allowed each round for half damage.</p>"
    }
  },
  {
    "name": "Flame Arc",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 33,
      "school": "Evocation [Fire]",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "As fire flux, except thisspelldeals (5dlO)x2 points of fire da1nage.",
      "recastTime": 1,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:10"
      ],
      "spellLine": "Fire flux",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As fire flux, except thisspelldeals (5dlO)x2 points of fire da1nage.</p>"
    }
  },
  {
    "name": "Flame Bolt",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 17,
      "school": "Evocation [Fire]",
      "castingTime": "1 action",
      "range": "Long ( 400 ft. + 40 ft./level)",
      "duration": "Instantan.eous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "As flame bolt, except this spell deals 8d 10 points of fire datnage. EverQuestRole-PlayingGamePlayer'sHanbbook",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:3"
      ],
      "spellLine": "Flame bolt",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As flame bolt, except this spell deals 8d 10 points of fire datnage. EverQuestRole-PlayingGamePlayer'sHanbbook</p>"
    }
  },
  {
    "name": "Flame Flux",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 7,
      "manaCost": 20,
      "school": "Evocation [Fire]",
      "castingTime": "",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "Casting T ime: 1 action As fire flux, except this spell deals 6d 10 points of fire damage. EverQuestRole-PlayingGamePlayer'sHanbbook",
      "recastTime": 1,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:7"
      ],
      "spellLine": "Fire flux",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Casting T ime: 1 action As fire flux, except this spell deals 6d 10 points of fire damage. EverQuestRole-PlayingGamePlayer'sHanbbook</p>"
    }
  },
  {
    "name": "Flame Lick",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 42,
      "school": "Evocation [Fire]",
      "castingTime": "1 action",
      "range": "Medium ( 100 ft. + 10 ft./level)",
      "duration": "10 rounds",
      "damageFormula": "1d6",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "Target takes 1d6 fire damage per round for 3 rounds; Fort save each round halves.",
      "recastTime": 0,
      "classes": [
        "druid",
        "ranger"
      ],
      "description": "<p>As flame lick, except this spell deals 3d 10 points of fire da1nage per round for 10 rounds, and the AC penalty is -3 unless the target makes its Will save. Addition- ally, breath of Ro reduces the target's ability to resist other fire-based effects, although this component of tl-le spell is negated if the target's initial Fortitude save is suc- cessful. A failed save grants a penalty of fire resistance (-12) and a -3 penalty on saves against effects with the [fire] de- scriptor. A resistance penalty can never reduce a target's resistance to less than (0). Focus: A fire beetle eye.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "varies",
      "classLevels": [
        "druid:1",
        "ranger:3"
      ],
      "spellLine": "Flame lick"
    }
  },
  {
    "name": "Flame Shock",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 12,
      "school": "Evocation [Fire]",
      "castingTime": "1 action",
      "range": "Medium ( 100 ft. + 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "As shock of fire, except this spell deals 6d10 points of fire damage.",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:5"
      ],
      "spellLine": "Shock of fire",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As shock of fire, except this spell deals 6d10 points of fire damage.</p>"
    }
  },
  {
    "name": "Flare",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 1,
      "school": "Evocation [Light]",
      "castingTime": "1 action",
      "range": "Long ( 400 ft. + 40 ft./level)",
      "duration": "Instantaneous (see text)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Effect: Creates a light This spell creates a s1nall ball of illusory flame that fires away from the caster toward a chosen target within range, dis- sipating when it reaches the target. The caster need not know the target's loca- tion ( in fact, this spell is usually used when the caster does not know the direc- tion to the target), but he does need to be familiar with the target or at least to have seen it within the past hour. This flare travels slowly enough that the caster can easily track its progress with the naked eye (approximately 100 feet per second). If the chosen target is not within range, then the spell fails and the flare never materializes. The flare is not real fire, although it does provide illumination in a 5-foot radius, and cannot inflict any damage.",
      "recastTime": 3,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:1"
      ],
      "spellLine": "Flare",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: Creates a light This spell creates a s1nall ball of illusory flame that fires away from the caster toward a chosen target within range, dis- sipating when it reaches the target. The caster need not know the target's loca- tion ( in fact, this spell is usually used when the caster does not know the direc- tion to the target), but he does need to be familiar with the target or at least to have seen it within the past hour. This flare travels slowly enough that the caster can easily track its progress with the naked eye (approximately 100 feet per second). If the chosen target is not within range, then the spell fails and the flare never materializes. The flare is not real fire, although it does provide illumination in a 5-foot radius, and cannot inflict any damage.</p>"
    }
  },
  {
    "name": "Fleeting Fury",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 3,
      "school": "Abjuration",
      "castingTime": "Free action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "3 rounds (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "+30 ft movement speed and +1 additional attack per round for the duration.",
      "recastTime": 2,
      "classes": [
        "shaman"
      ],
      "description": "<p>As fieetingfury, except this spell grants +5 Strength and Dexterity, and + 1 AC.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "shaman:4"
      ],
      "spellLine": "Fleeting fury"
    }
  },
  {
    "name": "Foliage Shield",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 14,
      "school": "Divination",
      "castingTime": "I fu ll round",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "See text (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "none",
      "effect": "+2 natural AC bonus while in forest or outdoor terrain.",
      "recastTime": 0,
      "classes": [
        "ranger"
      ],
      "description": "<p>two more than 20 ft. apart As invisibility, except this spell allows the caster to target up to 6 creatures within range. The duration of tl1e spell is deter- mined separately for each affected creature.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "ranger:2"
      ],
      "spellLine": "Invisibility"
    }
  },
  {
    "name": "Force Shock",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 7,
      "manaCost": 36,
      "school": "Evocation [Force, Magic]",
      "castingTime": "1 action",
      "range": "Medium (100 ft. + 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "(5d10)*2",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "Deals (5d10)x2 magic damage and may interrupt the target.",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "description": "<p>As force shock, except this spell deals (2d 10+4 )xl O points of 1nagic damage and stuns the target for I round.</p>",
      "deliveryType": "attack",
      "attackMode": "ranged",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "wizard:7"
      ],
      "spellLine": "Force shock"
    }
  },
  {
    "name": "Force Spiral of Al'Kabor",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 0,
      "school": "",
      "castingTime": "1 action",
      "range": "",
      "duration": "",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "(7d6+ 1 )x2 magic damage in a 30,foot",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:10"
      ],
      "spellLine": "Force Spiral of Al'Kabor",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>(7d6+ 1 )x2 magic damage in a 30,foot</p>"
    }
  },
  {
    "name": "Force Strike",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 11,
      "manaCost": 42,
      "school": "Evocation [Force, Magic]",
      "castingTime": "",
      "range": "Medium (100 ft. + 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "Casting T ime: 1 action As force shock, except this spell deals (4d6)x10 points of magic damage.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:11"
      ],
      "spellLine": "Force shock",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Casting T ime: 1 action As force shock, except this spell deals (4d6)x10 points of magic damage.</p>"
    }
  },
  {
    "name": "Frost Bolt",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 2,
      "school": "Evocation [Cold]",
      "castingTime": "1 action",
      "range": "Long ( 400 ft. + 40 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "1d8",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "A pale blue ray lashes out at the target; on a hit it deals 1d8 cold damage.",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:1"
      ],
      "spellLine": "Frost bolt",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "attack",
      "attackMode": "ranged",
      "attackBonus": 0,
      "description": "<p>Effect: Ray A pale blue ray springs forth from the caster's hand; the caster must succeed in a ranged touch attack to strike the target. The target takes ld8 points of cold dam- age if struck.</p>"
    }
  },
  {
    "name": "Frost Shock",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 18,
      "school": "Evocation [Cold]",
      "castingTime": "1 action",
      "range": "Medium (100 ft.+ 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "------ As shock of frost, except this spell deals (5dlO)x2 points of cold damage. FrostSpiralot=",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:6"
      ],
      "spellLine": "Shock of frost",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>------ As shock of frost, except this spell deals (5dlO)x2 points of cold damage. FrostSpiralot=</p>"
    }
  },
  {
    "name": "Frost Spiral of Al'Kabor",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 29,
      "school": "Chapter Ten: Spells",
      "castingTime": "1 action",
      "range": "Medium ( 100 ft. + 10 ft./level)",
      "duration": "Insta11taneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "As frost spiral of Al'Kabor, except this spell causes rockets of flame to explode out- ward to a radius of 25 feet, dealing (5d10+2)x2 points of damage to all in the area, half of which is fire damage and the other half blunt force.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:4"
      ],
      "spellLine": "Frost spiral of Al'Kabor",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As frost spiral of Al'Kabor, except this spell causes rockets of flame to explode out- ward to a radius of 25 feet, dealing (5d10+2)x2 points of damage to all in the area, half of which is fire damage and the other half blunt force.</p>"
    }
  },
  {
    "name": "Frost Storm",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 11,
      "manaCost": 52,
      "school": "Evocation [Cold]",
      "castingTime": "1 full round",
      "range": "Medium (100 ft.+ 10 ft./level)",
      "duration": "3 rounds",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "As cascade of hail, except that each wave deals (6dlO)x2 points of cold damage and the area of effect is slightly larger.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:11"
      ],
      "spellLine": "Cascade of hail",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As cascade of hail, except that each wave deals (6dlO)x2 points of cold damage and the area of effect is slightly larger.</p>"
    }
  },
  {
    "name": "Furor",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 3,
      "school": "Evocation [Force, Magic]",
      "castingTime": "1 action",
      "range": "Medium ( 100 ft. + 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "+2 to attack rolls and +1d6 bonus damage on all melee attacks for the duration.",
      "recastTime": 0,
      "classes": [
        "cleric"
      ],
      "description": "<p>As strike, except this spell deals 2d8 points of 1nagic damage.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "half",
      "classLevels": [
        "cleric:3"
      ],
      "spellLine": "Strike"
    }
  },
  {
    "name": "Garrison's Mighty Mana Shock",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 15,
      "school": "Evocation [Magic]",
      "castingTime": "1 action",
      "range": "Medium (100ft. + lO ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "A fine spray of charged magical energy assaults a single target with in range, deal- ing 8dl0 points of magic damage. Garrison's Superior",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:5"
      ],
      "spellLine": "Garrison's mighty mana shock",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>A fine spray of charged magical energy assaults a single target with in range, deal- ing 8dl0 points of magic damage. Garrison's Superior</p>"
    }
  },
  {
    "name": "Gate",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 25,
      "school": "Alteration [Teleportation]",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Teleports the caster instantly to their bind point. If no bind point is set, the caster returns to their current home or place of birth.",
      "recastTime": 2,
      "classes": [
        "cleric",
        "druid",
        "magician",
        "necromancer",
        "shaman",
        "wizard"
      ],
      "description": "<p>Casting T ime: 1 full round This spell transports the caster unerringly to a pyramid within the heart of the very dangerous Temple of Cazic'Thule.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "cleric:9",
        "druid:9",
        "magician:2",
        "necromancer:9",
        "shaman:9",
        "wizard:2"
      ],
      "spellLine": "Gate",
      "saveDC": ""
    }
  },
  {
    "name": "Gathering Dusk",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 28,
      "school": "Necromancy",
      "castingTime": "1 action",
      "range": "Self (20 ft AE)",
      "duration": "1 min/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Generates a massive surge of threat/aggro and reduces all nearby enemies' saving throws by 2.",
      "recastTime": 0,
      "classes": [
        "shadowknight"
      ],
      "description": "<p>An aura of death and menace radiates from the Shadow Knight, drawing all attacks and weakening nearby foes.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "shadowknight:4"
      ]
    }
  },
  {
    "name": "Gaze",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 2,
      "school": "Divination",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "1 round/level (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "As glimpse, except this spell has a longer duration and the caster can see one loca- tion up to 200 feet away. Further, this spell grants a + 2 circumstance bonus on Spot checks made within 50 feet of the caster.",
      "recastTime": 1,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:4"
      ],
      "spellLine": "Glimpse",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As glimpse, except this spell has a longer duration and the caster can see one loca- tion up to 200 feet away. Further, this spell grants a + 2 circumstance bonus on Spot checks made within 50 feet of the caster.</p>"
    }
  },
  {
    "name": "Gift of Xev",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 13,
      "manaCost": 10,
      "school": "Conjuration (Creation)",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "24 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One summoned container and contents This spell creates a field survival kit: a bag chat is a weightless extradimensional con- tainer holding 21 loaves of black bread, 7 jugs of water (1 gallon each), and 20 bandages. Items inside the bag do not count toward the user's encumbrance. The container disappears after 24 hours, how- ever, and any items within also vanish.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:13"
      ],
      "spellLine": "Spirit pouch",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One summoned container and contents This spell creates a field survival kit: a bag chat is a weightless extradimensional con- tainer holding 21 loaves of black bread, 7 jugs of water (1 gallon each), and 20 bandages. Items inside the bag do not count toward the user's encumbrance. The container disappears after 24 hours, how- ever, and any items within also vanish.</p>"
    }
  },
  {
    "name": "Glamour of Kintaz",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 35,
      "school": "Enchantment",
      "castingTime": "1 action",
      "range": "Touch",
      "duration": "1 hour",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "+5 CHA and improved NPC faction reactions for the duration.",
      "recastTime": 0,
      "classes": [
        "enchanter"
      ],
      "description": "<p>Kintaz's legendary glamour transforms the target into a figure of irresistible charisma and allure.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "enchanter:6"
      ]
    }
  },
  {
    "name": "Glimpse",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 4,
      "school": "Divination",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "1 round/level (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "This spell allows the caster to target a point up to 50 feet away, seeing that location as if it were only 5 feet away; thus, the caster does not suffer the usual range penalty on Spot checks to examine or locate objects or creatures in the targeted location. Any obstacles hinder the view as normal.",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:2"
      ],
      "spellLine": "Glimpse",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As glimpse, except this spell can be cast upon another, allowing the target to see one location up to 1000 feet away. Fur- ther, this spell grants a +6 circumstance bonus on Spot checks 1nade within 200 feet of the target.</p>"
    }
  },
  {
    "name": "Gravity Flux",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 11,
      "manaCost": 56,
      "school": "Alteration/Evocation [Magic]",
      "castingTime": "1 action",
      "range": "Medium ( 100 ft. + 10 ft./level)",
      "duration": "See text",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "Th is spell causes a burst of magical energy that deals (5dl0)x2 points of magic damage (Fort half) to those within its area of effect. Worse, gravity flux reverses gravity within the area of the spell, causing unattached objects and crea- tures to \"fall\" upward, reaching a heigl1t of I 00 feet before plunging downward once again. If creatures strike a solid obstacle (likely a ceil- ing), theysufferthesameamoL1ntofda1nageas if they'd fallen the same distance, and they then fall downward again (see \"Falling Dam- age\" in Chapter 12: Combat). There is no save co avoid the falling damage, although the Safe Fall or Tumble skill may apply, nor will spell resistance or magic resistance overcome this aspect of gravity flux. If there is something heavy to grab onto, creatures within the area of reversed gravity can 1nake a Reflex save against the spell's save DC to secure themselves and keep from falling (although they are still affected fully by the change in gravity). Creatures chat can fly or levitate can automatically keep themselves from fall- ing with a similar Reflex save; in chis case, however, a save is required each time the gravity changes direction, so two Reflex saves are required for such creatures to avoid the falling damage completely. Enchanters learn to cast this spell using powers of alteration, while wizards learn it as an evocation.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:11"
      ],
      "spellLine": "Gravity flux",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Th is spell causes a burst of magical energy that deals (5dl0)x2 points of magic damage (Fort half) to those within its area of effect. Worse, gravity flux reverses gravity within the area of the spell, causing unattached objects and crea- tures to \"fall\" upward, reaching a heigl1t of I 00 feet before plunging downward once again. If creatures strike a solid obstacle (likely a ceil- ing), theysufferthesameamoL1ntofda1nageas if they'd fallen the same distance, and they then fall downward again (see \"Falling Dam- age\" in Chapter 12: Combat). There is no save co avoid the falling damage, although the Safe Fall or Tumble skill may apply, nor will spell resistance or magic resistance overcome this aspect of gravity flux. If there is something heavy to grab onto, creatures within the area of reversed gravity can 1nake a Reflex save against the spell's save DC to secure themselves and keep from falling (although they are still affected fully by the change in gravity). Creatures chat can fly or levitate can automatically keep themselves from fall- ing with a similar Reflex save; in chis case, however, a save is required each time the gravity changes direction, so two Reflex saves are required for such creatures to avoid the falling damage completely. Enchanters learn to cast this spell using powers of alteration, while wizards learn it as an evocation.</p>"
    }
  },
  {
    "name": "Great Divide Gate",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 25,
      "school": "Alteration [Teleportation]",
      "castingTime": "1 full round",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "This spell transports the caster to the dragon circle in the Great Divide of Velious.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:8"
      ],
      "spellLine": "Gate",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>This spell transports the caster to the dragon circle in the Great Divide of Velious.</p>"
    }
  },
  {
    "name": "Great Divide Portal",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 50,
      "school": "Alteration [Teleportation]",
      "castingTime": "3 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "than 20 ft. apart The caster transports up to six targets of her choice within range to the dragon circle i11 tl1e Great Divide of Velious. Greater Conjuration:",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:10"
      ],
      "spellLine": "Gate",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>than 20 ft. apart The caster transports up to six targets of her choice within range to the dragon circle i11 tl1e Great Divide of Velious. Greater Conjuration:</p>"
    }
  },
  {
    "name": "Greater Conjuration: Air",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 12,
      "manaCost": 0,
      "school": "",
      "castingTime": "1 action",
      "range": "",
      "duration": "",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Calls a type 11 air elemental pee.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:12"
      ],
      "spellLine": "Greater Conjuration: Air",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Calls a type 11 air elemental pee.</p>"
    }
  },
  {
    "name": "Greater Conjuration: Earth",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 12,
      "manaCost": 0,
      "school": "",
      "castingTime": "1 action",
      "range": "",
      "duration": "",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Calls a type 11 earth elemental pet.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:12"
      ],
      "spellLine": "Greater Conjuration: Earth",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Calls a type 11 earth elemental pet.</p>"
    }
  },
  {
    "name": "Greater Conjuration: Fire",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 12,
      "manaCost": 0,
      "school": "",
      "castingTime": "1 action",
      "range": "",
      "duration": "",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Calls a type 11 fire elemental pet.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:12"
      ],
      "spellLine": "Greater Conjuration: Fire",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Calls a type 11 fire elemental pet.</p>"
    }
  },
  {
    "name": "Greater Conjuration: Water",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 12,
      "manaCost": 0,
      "school": "",
      "castingTime": "1 action",
      "range": "",
      "duration": "",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Calls a type 11 water elemental pet.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:12"
      ],
      "spellLine": "Greater Conjuration: Water",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Calls a type 11 water elemental pet.</p>"
    }
  },
  {
    "name": "Greater Healing",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 25,
      "school": "Alteration (Healing)",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "(8d10)*2",
      "savingThrow": "will",
      "effect": "Heals 8d10x2 hit points.",
      "recastTime": 0,
      "classes": [
        "cleric"
      ],
      "description": "<p>Shm8 As minor healing, except this spell heals (8dlO)x2 hit points.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "cleric:9"
      ],
      "spellLine": "Minor healing"
    }
  },
  {
    "name": "Greater Shielding",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 20,
      "school": "Abjuration",
      "castingTime": "1 full round",
      "range": "Personal",
      "duration": "30 minutes/level (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Grants 30 temporary HP that are lost first before regular HP.",
      "recastTime": 0,
      "classes": [
        "enchanter",
        "magician",
        "wizard"
      ],
      "description": "<p>As minor shielding, except this spell grants a +6 armor bonus to AC, a buff bonus of +25 hit points, magic resistance (6), and a+ 2 bonus on saves against magic attacks. Greater Summoning:</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "enchanter:6",
        "magician:9",
        "wizard:9"
      ],
      "spellLine": "Minor shielding"
    }
  },
  {
    "name": "Greater Summoning: Air",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 0,
      "school": "",
      "castingTime": "1 action",
      "range": "",
      "duration": "",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Calls a type 7 air elemental pet.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:8"
      ],
      "spellLine": "Greater Summoning: Air",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Calls a type 7 air elemental pet.</p>"
    }
  },
  {
    "name": "Greater Summoning: Earth",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 0,
      "school": "",
      "castingTime": "1 action",
      "range": "",
      "duration": "",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Calls a type 7 earth el-",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:8"
      ],
      "spellLine": "Greater Summoning: Earth",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Calls a type 7 earth el-</p>"
    }
  },
  {
    "name": "Greater Summoning: Fire",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 0,
      "school": "",
      "castingTime": "1 action",
      "range": "",
      "duration": "",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Calls a type 7 fire elemen-",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:8"
      ],
      "spellLine": "Greater Summoning: Fire",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Calls a type 7 fire elemen-</p>"
    }
  },
  {
    "name": "Greater Summoning: Water",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 0,
      "school": "",
      "castingTime": "1 action",
      "range": "",
      "duration": "",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Calls a type 7 water",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:8"
      ],
      "spellLine": "Greater Summoning: Water",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Calls a type 7 water</p>"
    }
  },
  {
    "name": "Greater Vocaration: Air",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 15,
      "manaCost": 0,
      "school": "",
      "castingTime": "1 action",
      "range": "",
      "duration": "",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Calls a type 13 air elemental pet.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:15"
      ],
      "spellLine": "Greater Vocaration: Air",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Calls a type 13 air elemental pet.</p>"
    }
  },
  {
    "name": "Greater Vocaration: Earth",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 15,
      "manaCost": 0,
      "school": "",
      "castingTime": "1 action",
      "range": "",
      "duration": "",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Calls a type 13 earth",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:15"
      ],
      "spellLine": "Greater Vocaration: Earth",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Calls a type 13 earth</p>"
    }
  },
  {
    "name": "Greater Vocaration: Fire",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 15,
      "manaCost": 0,
      "school": "",
      "castingTime": "1 action",
      "range": "",
      "duration": "",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Calls a type 13 fire elemental pet.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:15"
      ],
      "spellLine": "Greater Vocaration: Fire",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Calls a type 13 fire elemental pet.</p>"
    }
  },
  {
    "name": "Greater Vocaration: Water",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 15,
      "manaCost": 0,
      "school": "",
      "castingTime": "1 action",
      "range": "",
      "duration": "",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Calls a type 13 water",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:15"
      ],
      "spellLine": "Greater Vocaration: Water",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Calls a type 13 water</p>"
    }
  },
  {
    "name": "Halo of Light",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 7,
      "school": "Conjuration (Creation) [Light]",
      "castingTime": "1 action",
      "range": "Caster",
      "duration": "24 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: 1 headband This spell creates a glowing headband upon the caster's head. This headband casts light equivalent to a lantern (30-ft. radius), but gives off no heat. It takes up the slot used for a headband, hat, or hel- met, so any item otherwise worn by the caster in that slot must be removed before casting this spell, or else the spell will fail and the n1ana still be spent. The headband can be given to another to wear. As a created item, the halo of light van- ishes after 24 hours.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:4"
      ],
      "spellLine": "Summon wisp",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: 1 headband This spell creates a glowing headband upon the caster's head. This headband casts light equivalent to a lantern (30-ft. radius), but gives off no heat. It takes up the slot used for a headband, hat, or hel- met, so any item otherwise worn by the caster in that slot must be removed before casting this spell, or else the spell will fail and the n1ana still be spent. The headband can be given to another to wear. As a created item, the halo of light van- ishes after 24 hours.</p>"
    }
  },
  {
    "name": "Hammer of Striking",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 35,
      "school": "Evocation",
      "castingTime": "1 action",
      "range": "60 ft",
      "duration": "Instantaneous",
      "damageFormula": "3d8+3d6",
      "healFormula": "",
      "savingThrow": "",
      "effect": "A divine hammer deals 3d8 bludgeoning + 2d6 divine damage to the target.",
      "recastTime": 0,
      "classes": [
        "cleric"
      ],
      "description": "<p>The cleric calls down a blazing divine hammer from the heavens to smite their foe.</p>",
      "deliveryType": "attack",
      "attackMode": "ranged",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "cleric:5"
      ]
    }
  },
  {
    "name": "Hammer of Wrath",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 7,
      "manaCost": 25,
      "school": "Conjuration (Creation)",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "24 hours",
      "damageFormula": "4d10+5",
      "healFormula": "",
      "savingThrow": "",
      "effect": "A divine hammer of wrath falls upon the target dealing 4d10+5 divine damage.",
      "recastTime": 2,
      "classes": [
        "paladin"
      ],
      "description": "<p>As hammer of wrath, except the weapon su1n1noned is in all respects a +2 warhammer. 272</p>",
      "deliveryType": "attack",
      "attackMode": "ranged",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "paladin:7"
      ],
      "spellLine": "Hammer of wrath"
    }
  },
  {
    "name": "Harmony",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 4,
      "school": "Abjuration [Mind-Affecting]",
      "castingTime": "1 action",
      "range": "Mediutn (100ft. + lOft./level)",
      "duration": "2 minutes (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Pacifies a creature; Will save negates. Target will not attack unless attacked first (lull).",
      "recastTime": 2,
      "classes": [
        "druid",
        "ranger"
      ],
      "description": "<p>This spell sends peace into the hearts of targets and calms their spirits. Creatures caught in the burstwhofail toresistthespellcannottakeany actions, but can defend themselves normally. The spell breaks if the target creature suffers datnage fron1 any type of attack or falls victim to any aggressive action, including spells that do not deal damage but otherwise \"injure\" the target, such as weaken. The caster can use this spell to attempt to engage a group of 1nonstersone ata time rather than all at once. He can cast harmony upon them, then attack wl1ichever one he chooses to fight first. The others will remain pacified until he attacks them personally or until the spell duration ends. However, if so1neone under the effects of hannony has reason to feel threatened (e.g., an enemy is near him with weapon drawn) or witnesses an attack on an ally, then that target gains a Will save against the effects of the spell. This save may thereaf, ter be attempted every round during which such circu1nstances continue to exist. Once the spell ends, targets will resume their prior level of aggression. If theywitnes.c;ed enemies in the area or ene1nies attacking their allies while they were pacified by hannony, then they will respond appropriately (as.c;u1n, ing they did not already succeed at a Will save to break the spell). If they are intelligent creatures, the targets might respond by seek, ing out the enemies, raising an alarm, etc. However, creatures who did not see the spellcaster and were not subjected to attacks and did not witness any fighting will not have any idea that they have been affected by this spell. Creatures who resist the spell may at, tempt a Wisdom check (DC 10 + caster's Cha) to determine whether they are aware of resisting harmony. Harmony may becastonlyoutdoors. Within any interior space, even a cave, the spell auto1natically fails, though no mana is ex, pended. In addition, any creature already engaged in battle ( defined as having taken damage, having been victim to an aggressive action or having perceived enemies and acted at least once in the current combat's initiative sequence) cannot be affected by this spell. Thus the spell can rarely be used against the same target twice, unless no one took visible or direct action against the target during or after the fi.rst hannony.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "druid:2",
        "ranger:3"
      ],
      "spellLine": "Harmony"
    }
  },
  {
    "name": "Harmshield",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 14,
      "school": "Abjuration",
      "castingTime": "Free action",
      "range": "Personal",
      "duration": "3 rounds (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "none",
      "effect": "Caster is immune to all damage for the duration. Stunning the caster ends the effect immediately.",
      "recastTime": 0,
      "classes": [
        "necromancer"
      ],
      "description": "<p>A necromantic ward of absolute protection surrounds the caster, deflecting all harm.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "necromancer:5"
      ]
    }
  },
  {
    "name": "Harvest",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 0,
      "school": "Alteration",
      "castingTime": "2 full rounds",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "The caster draws ambient magical energy into herself, instantly adding 2 mana per caster level to her mana pool, then becomes stunned for 2 rounds.",
      "recastTime": 3,
      "classes": [
        "wizard"
      ],
      "description": "<p>• EverQuestRole-PlayingGamePlayer'sHanbbool&lt; ~~ Saving T hrow: None This spell turns the caster into a living mana 1nagnet, allowing her to instantly attract and absorb mana fro1n the envirorunent and add it to her mana pool. The caster may instantly add 2 mana per caster level to her current n1ana pool. However, this process is traumatiz- ing, and the caster is stunned for 2 rounds after casting this spell.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "wizard:9"
      ],
      "spellLine": "Harvest"
    }
  },
  {
    "name": "Haste",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 35,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "touch",
      "duration": "10 minutes",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Target gains one additional melee attack per round for the duration.",
      "recastTime": 0,
      "classes": [
        "enchanter"
      ],
      "description": "<p>Accelerates the target's movements and reflexes to blinding speed.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "enchanter:5"
      ]
    }
  },
  {
    "name": "Healing",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 10,
      "school": "Alteration (Healing)",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "6d10",
      "savingThrow": "will",
      "effect": "Heals 6d10 hit points.",
      "recastTime": 0,
      "classes": [
        "cleric",
        "paladin"
      ],
      "description": "<p>Shm5 As minor healing, except this spell heals 6d 10 hit points.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "cleric:5",
        "paladin:5"
      ],
      "spellLine": "Minor healing"
    }
  },
  {
    "name": "Heat Sight",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 5,
      "school": "Divination",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "1 hour/level (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Grants the caster infravision for the duration.",
      "recastTime": 1,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:5"
      ],
      "spellLine": "Serpent sight",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As serpent sight, except as noted above.</p>"
    }
  },
  {
    "name": "Holy Armor",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 25,
      "school": "Abjuration",
      "castingTime": "1 full round",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "10 minutes/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "+4 sacred AC bonus for the duration.",
      "recastTime": 0,
      "classes": [
        "cleric",
        "paladin"
      ],
      "description": "<p>As holy armor, except this spell grants damage reduction 13/- .</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "cleric:5",
        "paladin:4"
      ],
      "spellLine": "Holy armor"
    }
  },
  {
    "name": "Holy Might",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 10,
      "school": "Evocation [Force, Magic]",
      "castingTime": "1 full round",
      "range": "C lose (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "1d8",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "1d8 + caster level divine damage to undead or evil creatures.",
      "recastTime": 3,
      "classes": [
        "paladin"
      ],
      "description": "<p>As stun, except this spell also deals 4d 10 points of magic damage (halved if the Fort save was successful), and, if the save is failed, the target is stunned for 1 round.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "half",
      "classLevels": [
        "paladin:1"
      ],
      "spellLine": "Stun"
    }
  },
  {
    "name": "Holy Valor",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 15,
      "school": "Abjuration",
      "castingTime": "1 action",
      "range": "30 ft",
      "duration": "10 min/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Allies within range gain +2 on all saving throws vs. evil.",
      "recastTime": 0,
      "classes": [
        "paladin"
      ],
      "description": "<p>Divine valor radiates from the paladin, fortifying nearby allies against evil influence.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "paladin:3"
      ]
    }
  },
  {
    "name": "Holy Winds",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 45,
      "school": "Evocation",
      "castingTime": "1 action",
      "range": "Self (30 ft AE)",
      "duration": "1d4 rounds",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "AE blast stuns all enemies in 30 ft for 1d4 rounds; Fort save negates each.",
      "recastTime": 0,
      "classes": [
        "paladin"
      ],
      "description": "<p>Gale-force holy winds radiate outward from the paladin, stunning all nearby enemies in a burst of divine fury.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "paladin:6"
      ]
    }
  },
  {
    "name": "Hymn of Restoration",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 0,
      "school": "Bard Song",
      "castingTime": "1 action (song)",
      "range": "Close (25 ft. + 5 fc./2 levels)",
      "duration": "Performance",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "Cures 1 point of damage plus 1 point per 10 bard levels each round. A successful stringed instrument use doubles the healing.",
      "recastTime": 0,
      "classes": [
        "bard"
      ],
      "description": "<p>Song Line: Hymn of restoration Instrument: String (Dex) less) The bard cures 1 point of damage+ 1 point per 10 bard levels each round with hymn of resto- ration. The bard cures twice that amount with a successful use of a stringed instrument.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "bard:2"
      ],
      "spellLine": "Hymn OF R€storation"
    }
  },
  {
    "name": "Ice Comet",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 15,
      "manaCost": 110,
      "school": "Evocation [Cold]",
      "castingTime": "2 actions",
      "range": "100 ft",
      "duration": "Instantaneous",
      "damageFormula": "(4d10)*10",
      "healFormula": "",
      "savingThrow": "",
      "effect": "A crushing comet of supernatural ice smashes into the target for (4d10)x10 cold damage.",
      "recastTime": 3,
      "classes": [
        "wizard"
      ],
      "description": "<p>A massive shard of magical ice plunges from the heavens and detonates across the target in a burst of killing frost.</p>",
      "deliveryType": "attack",
      "attackMode": "ranged",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "wizard:15"
      ]
    }
  },
  {
    "name": "Ice Shock",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 27,
      "school": "Evocation [Cold]",
      "castingTime": "1 action",
      "range": "Mediun1 ( 100 ft. + 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": ". As shock of frost, except this spell deals (7dl0+2)x2 points of cold damage.",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:9"
      ],
      "spellLine": "Shock of frost",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>. As shock of frost, except this spell deals (7dl0+2)x2 points of cold damage.</p>"
    }
  },
  {
    "name": "Iceclad Gate",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 25,
      "school": "Alteration [Teleportation]",
      "castingTime": "1 full round",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "This spell transports the caster co the dragon circle in the lceclad Ocean.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:8"
      ],
      "spellLine": "Gate",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>This spell transports the caster co the dragon circle in the lceclad Ocean.</p>"
    }
  },
  {
    "name": "Iceclad Portal",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 50,
      "school": "A lteration [Teleportation]",
      "castingTime": "3 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "than 20 ft. apart The caster transports up to six targets of her choice within range co the dragon circle in the Iceclad Ocean of Velious.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:9"
      ],
      "spellLine": "Gate",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>than 20 ft. apart The caster transports up to six targets of her choice within range co the dragon circle in the Iceclad Ocean of Velious.</p>"
    }
  },
  {
    "name": "Icestrike",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 0,
      "school": "Evocation [Cold]",
      "castingTime": "1 action",
      "range": "",
      "duration": "3 rounds",
      "damageFormula": "1d10",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Rain of 1d10 cold damage each round for 3 rounds.",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:2"
      ],
      "spellLine": "Icestrike",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Rain of 1d10 cold damage each round for 3 rounds.</p>"
    }
  },
  {
    "name": "Identify",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 8,
      "school": "Divination",
      "castingTime": "1 action",
      "range": "Touch",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Reveals all magical properties of a touched item.",
      "recastTime": 0,
      "classes": [
        "magician",
        "wizard"
      ],
      "description": "<p>This spell is cast while touching a magic item about which the caster warlts to learn more. Veins of electric blue light dance across the object then leap up the caster's forehead. These spindly ligl1ts communi- cate information regarding the basic functioning of the magic item to the caster, including the item's general properties ( i.e., its enhancement bonus, if any, to attack and/or damage rolls), as well as the number of charges ( if any) it has remaining, if applicable. In addition, an image comes into the caster's mind revealing something of the item's history. This vision 1nay de- scribe the purpose of the object, or its previous owner, or perhaps what someone used it for 1nost recently. The GM deter- mines what infonnation the caster receives, and, at the GM's discretion, multiple cast- ings of this spell might reveal progressively more information.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "magician:5",
        "wizard:5"
      ],
      "spellLine": "Identify"
    }
  },
  {
    "name": "Illusion: Barbarian",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 5,
      "school": "Divination",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "1 hour/level (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Disguises caster as a Barbarian for purposes of faction and social interaction.",
      "recastTime": 1,
      "classes": [
        "enchanter"
      ],
      "description": "<p>As minor illusion, except the caster for all intents and purposes beco1nes a barbarian of the same gender, gaining all racial abili- ties and modifiers for that race, as described in Chapter 2: Races. The caster also loses all special abilities and racial modifiers for her own race while transformed. Others will have an initial faction reaction based on the caster's new, illusory race.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "enchanter:5"
      ],
      "spellLine": "Minor illusion"
    }
  },
  {
    "name": "Immobilize",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 13,
      "school": "Alteration [Magic]",
      "castingTime": "1 action",
      "range": "Medium ( 100 ft. + 10 ft./level)",
      "duration": "ldlO rounds (see text)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "Wiz 10 As root, except this is much easier co cast than most other spells in the root line, so the caster gains a+ 2 bonus to any Channel- ing check when casting immobilize.",
      "recastTime": 1,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:10"
      ],
      "spellLine": "Root",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Wiz 10 As root, except this is much easier co cast than most other spells in the root line, so the caster gains a+ 2 bonus to any Channel- ing check when casting immobilize.</p>"
    }
  },
  {
    "name": "Immolation of Ro",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 28,
      "school": "Evocation",
      "castingTime": "1 action",
      "range": "80 ft",
      "duration": "1 round/level",
      "damageFormula": "1d6",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "Target takes 1d6 fire damage per round; Fort save halves each round's damage.",
      "recastTime": 0,
      "classes": [
        "druid"
      ],
      "description": "<p>The fires of Ro himself engulf the target, burning relentlessly until the spell expires.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "varies",
      "classLevels": [
        "druid:4"
      ]
    }
  },
  {
    "name": "Incinerate Bones",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 11,
      "manaCost": 35,
      "school": "Alteration [Fire]",
      "castingTime": "1 full round",
      "range": "Medium (100 ft. + 10 ft./level)",
      "duration": "See text",
      "damageFormula": "(2d10)*10",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Deals (2d10)x10 fire damage and interrupts casting. Unlike ignite bones, the target does not transform into a skeleton.",
      "recastTime": 2,
      "classes": [
        "necromancer"
      ],
      "description": "<p>Necromantic fire surges through the victim, scorching flesh and disrupting spellcasting without reducing the target to a skeleton.</p>",
      "deliveryType": "attack",
      "attackMode": "ranged",
      "attackBonus": 0,
      "saveEffect": ""
    }
  },
  {
    "name": "Inferno Shield",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 20,
      "school": "Abjuration [Fire]",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "3 minutes (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "As shield of fire, except this spell grants a buff bonus of+ 1 on saves against attacks with the [fire] descriptor, as well as fire resistance ( 6) and damage shield ( 4).",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:8"
      ],
      "spellLine": "Shield of fire",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As shield of fire, except this spell grants a buff bonus of+ 1 on saves against attacks with the [fire] descriptor, as well as fire resistance ( 6) and damage shield ( 4).</p>"
    }
  },
  {
    "name": "Inferno Shock",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 22,
      "school": "Evocation [Fire]",
      "castingTime": "1 action",
      "range": "Medium ( 100 ft. + 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "As shock of fire, except this spell deals (6d10)x2 poir.ts of fire damage. Chapter Ten: Spells ~===--______,;,.;...:._,;__~-=------~=---",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:8"
      ],
      "spellLine": "Shock of fire",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As shock of fire, except this spell deals (6d10)x2 poir.ts of fire damage. Chapter Ten: Spells ~===--______,;,.;...:._,;__~-=------~=---</p>"
    }
  },
  {
    "name": "Infestation",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 10,
      "school": "Necromancy",
      "castingTime": "1 action",
      "range": "Touch",
      "duration": "1 min/level",
      "damageFormula": "1d4",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Target takes 1d4 disease damage per round for the duration.",
      "recastTime": 0,
      "classes": [
        "shadowknight"
      ],
      "description": "<p>Dark energy infests the target with a rotting magical disease that eats away at flesh.</p>",
      "deliveryType": "attack",
      "attackMode": "melee",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "shadowknight:1"
      ]
    }
  },
  {
    "name": "Instill Doubt",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 20,
      "school": "Enchantment",
      "castingTime": "1 action",
      "range": "60 ft",
      "duration": "1d4 rounds",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Target flees in magical fear for 1d4 rounds; Will save negates.",
      "recastTime": 0,
      "classes": [],
      "description": "<p>The necromancer sows seeds of primal terror in the target's mind, sending them fleeing in blind panic.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": []
    }
  },
  {
    "name": "Invisibility",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 2,
      "school": "Divination",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "See text (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Light shifts and warps, fooling the visual senses of living creatures into not seeing the target of the spell. The target does not become invisible to undead. The spell ends if the recipient casts any spell or attacks any creature directly, although he is free to interact with objects in any way. His equipment van ishes as well while he continues to carry it. If the recipient sets down or drops an object, the object becomes visible. If the recipient picks up an object, it disappears if tucked into folds of clothing, a pouch, or a pocket. Any object that trails 1nore than 5 feet from the recipient, such as a dangling rope or the train of a gown, beco1nes visible. However, all other sensory evidence of the recipient's presence remains. For ex- ample, he still makes noise when he opens a door and leaves 1nuddy footprints in wet earth, as normal. When invisibility is cast, the GM deter- 1nines its duration secretly based on the chart below: d4 Result 1 Duration 1d10 rounds 2 3 4 ldlO minutes 1d6x10 minutes 1d8 hours Two rounds prior to this spell and those of this line reaching the end of its dura- tion, the character under the influence of the spell will feel themselves reappearing and realize that the spell's affect is fading.",
      "recastTime": 0,
      "classes": [
        "magician",
        "wizard"
      ],
      "classLevels": [
        "magician:3",
        "wizard:5"
      ],
      "spellLine": "Invisibility",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As invisibility, except that this spell only works outdoors.</p>"
    }
  },
  {
    "name": "Invisibility to Undead",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 6,
      "school": "Divination",
      "castingTime": "1 action",
      "range": "See text",
      "duration": "See text (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Wiz 9 As invisibility, except the target is made invisible only to undead creatures. Shadow knights and wizards 1nay cast this spell only upon themselves. Other classes that can cast this spell may target any willing creature within close range (25 ft. + 5 ft./2 levels).",
      "recastTime": 1,
      "classes": [
        "necromancer",
        "wizard"
      ],
      "classLevels": [
        "necromancer:1",
        "wizard:9"
      ],
      "spellLine": "Invisibility",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Wiz 9 As invisibility, except the target is made invisible only to undead creatures. Shadow knights and wizards 1nay cast this spell only upon themselves. Other classes that can cast this spell may target any willing creature within close range (25 ft. + 5 ft./2 levels).</p>"
    }
  },
  {
    "name": "Invoke Death",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 55,
      "school": "Necromancy",
      "castingTime": "1 action",
      "range": "30 ft",
      "duration": "10 min/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Raises a skeleton or zombie warrior to serve the necromancer.",
      "recastTime": 0,
      "classes": [
        "necromancer"
      ],
      "description": "<p>A command that rips a powerful undead warrior from the realm of death to serve.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "necromancer:6"
      ]
    }
  },
  {
    "name": "Invoke Lightning",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 5,
      "school": "Evocation [Electricity]",
      "castingTime": "1 action",
      "range": "Medium (100 ft.+ 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "3d6",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "Calls down a bolt of lightning dealing 3d6 damage; Reflex save for half.",
      "recastTime": 1,
      "classes": [
        "druid"
      ],
      "description": "<p>than 15 ft. apart. This spell creates four clusters of electrical bolts that may target up to four separate creatures, each cluster dealing 2d 10 points of electrical damage. Up to two clusters may target any one creature, but no more, regardless of the target's size. This spell can only be cast outdoors under an open sky.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "half",
      "classLevels": [
        "druid:4"
      ],
      "spellLine": "Invoke lightning"
    }
  },
  {
    "name": "Krafen's Chant of Poison",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 0,
      "school": "Song",
      "castingTime": "1 action (song)",
      "range": "30 ft",
      "duration": "Concentration",
      "damageFormula": "1d6",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "All enemies in range take 1d6 poison damage per round; Fort save halves.",
      "recastTime": 0,
      "classes": [
        "bard"
      ],
      "description": "<p>Krafen's sinister melody saturates the air with spectral poison that sickens all nearby foes.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "varies",
      "classLevels": [
        "bard:4"
      ]
    }
  },
  {
    "name": "Kragg's Mending",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 68,
      "school": "Alteration",
      "castingTime": "2 actions",
      "range": "Touch",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "6d8+10",
      "savingThrow": "",
      "effect": "Heals target for 6d8+10 HP.",
      "recastTime": 0,
      "classes": [
        "shaman"
      ],
      "description": "<p>The legendary healer Kragg's most potent working, pouring massive restorative energy into a single target.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "shaman:9"
      ]
    }
  },
  {
    "name": "Kylian's Soothing Serenade",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 0,
      "school": "Song",
      "castingTime": "1 action (song)",
      "range": "60 ft",
      "duration": "Concentration",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Mezmerizes a single target; Will save negates. Effect broken by damage.",
      "recastTime": 0,
      "classes": [
        "bard"
      ],
      "description": "<p>A hauntingly beautiful melody from the bard Kylian captures a single target in entranced stillness.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "bard:5"
      ]
    }
  },
  {
    "name": "Lava Bolt",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 12,
      "manaCost": 50,
      "school": "Evocation [Fire]",
      "castingTime": "1 full round",
      "range": "Long ( 400 ft. + 40 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "As flame bolt, except the casting time is longer and this spell deals (3d 10 )x 10 points of fire damage.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:12"
      ],
      "spellLine": "Flame bolt",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As flame bolt, except the casting time is longer and this spell deals (3d 10 )x 10 points of fire damage.</p>"
    }
  },
  {
    "name": "Lava Storm",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 33,
      "school": "Evocation [Fire]",
      "castingTime": "1 action",
      "range": "Medium (100 ft. + 10 ft./level)",
      "duration": "3 rounds",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "As firestorm, except that each wave deals 7dl0 points of fire damage. I",
      "recastTime": 3,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:9"
      ],
      "spellLine": "Firestorm",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As firestorm, except that each wave deals 7dl0 points of fire damage. I</p>"
    }
  },
  {
    "name": "Leach",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 60,
      "school": "Alteration [Magic]",
      "castingTime": "1 full round",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "9 rounds",
      "damageFormula": "2d6",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "Drains 2d6 HP from the target. The caster regains HP equal to the damage dealt.",
      "recastTime": 2,
      "classes": [
        "shadowknight"
      ],
      "description": "<p>As leach, except this spell transfers 3d 10 hit points per round.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "half",
      "classLevels": [
        "shadowknight:3"
      ],
      "spellLine": "Leach"
    }
  },
  {
    "name": "Leatherskin",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 7,
      "manaCost": 14,
      "school": "Abjuration",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "30 minutes/level (see text)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "As shieldskin, except this spell grants a buff bonus of 7d10 temporary hit points. Material Components: A bloodstone.",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:7"
      ],
      "spellLine": "Shieldskin",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As shieldskin, except this spell grants a buff bonus of 7d10 temporary hit points. Material Components: A bloodstone.</p>"
    }
  },
  {
    "name": "Lesser Conjuration: Air",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 33,
      "school": "Conjuration (Summoning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One su1nmoned creature As elementalkin: air, except the caster sum, 1nons a type 9 air elemental. Lesser Conjuration:",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:10"
      ],
      "spellLine": "Elementalkin: air",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One su1nmoned creature As elementalkin: air, except the caster sum, 1nons a type 9 air elemental. Lesser Conjuration:</p>"
    }
  },
  {
    "name": "Lesser Conjuration: Earth",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 33,
      "school": "Conjuration (Summoning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One su1nmoned creature As elementalkin: air, except the caster sum, 1nons a type 9 air elemental. Lesser Conjuration:",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:10"
      ],
      "spellLine": "Elementalkin: air",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One su1nmoned creature As elementalkin: air, except the caster sum, 1nons a type 9 air elemental. Lesser Conjuration:</p>"
    }
  },
  {
    "name": "Lesser Conjuration: Fire",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 33,
      "school": "Conjuration (Summoning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One su1nmoned creature As elementalkin: air, except the caster sum, 1nons a type 9 air elemental. Lesser Conjuration:",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:10"
      ],
      "spellLine": "Elementalkin: air",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One su1nmoned creature As elementalkin: air, except the caster sum, 1nons a type 9 air elemental. Lesser Conjuration:</p>"
    }
  },
  {
    "name": "Lesser Conjuration: Water",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 33,
      "school": "Conjuration (Summoning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One su1nmoned creature As elementalkin: air, except the caster sum, 1nons a type 9 air elemental. Lesser Conjuration:",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:10"
      ],
      "spellLine": "Elementalkin: air",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One su1nmoned creature As elementalkin: air, except the caster sum, 1nons a type 9 air elemental. Lesser Conjuration:</p>"
    }
  },
  {
    "name": "Lesser Shielding",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 4,
      "school": "Abjuration",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "10 minutes/level (0)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "As minor shielding, except this spell grants a + 3 armor bonus to AC, a buff bonus of + 7 hit points, 1nagic resistance ( 4), and a + 1 bonus on saves against magic attacks.",
      "recastTime": 0,
      "classes": [
        "magician",
        "wizard"
      ],
      "classLevels": [
        "magician:3",
        "wizard:3"
      ],
      "spellLine": "Minor shielding",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As minor shielding, except this spell grants a + 3 armor bonus to AC, a buff bonus of + 7 hit points, 1nagic resistance ( 4), and a + 1 bonus on saves against magic attacks.</p>"
    }
  },
  {
    "name": "Lesser Summoning: Air",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 33,
      "school": "Conjuration (Su1n1noning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One sum1noned creature As elementalkin: air, except the caster sum, 1nons a type 5 air elemental. Lesser Summoning:",
      "recastTime": 11,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:6"
      ],
      "spellLine": "Elementalkin: air",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One sum1noned creature As elementalkin: air, except the caster sum, 1nons a type 5 air elemental. Lesser Summoning:</p>"
    }
  },
  {
    "name": "Lesser Summoning: Earth",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 33,
      "school": "Conjuration (Su1n1noning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One sum1noned creature As elementalkin: air, except the caster sum, 1nons a type 5 air elemental. Lesser Summoning:",
      "recastTime": 11,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:6"
      ],
      "spellLine": "Elementalkin: air",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One sum1noned creature As elementalkin: air, except the caster sum, 1nons a type 5 air elemental. Lesser Summoning:</p>"
    }
  },
  {
    "name": "Lesser Summoning: Fire",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 33,
      "school": "Conjuration (Su1n1noning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One sum1noned creature As elementalkin: air, except the caster sum, 1nons a type 5 air elemental. Lesser Summoning:",
      "recastTime": 11,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:6"
      ],
      "spellLine": "Elementalkin: air",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One sum1noned creature As elementalkin: air, except the caster sum, 1nons a type 5 air elemental. Lesser Summoning:</p>"
    }
  },
  {
    "name": "Lesser Summoning: Water",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 33,
      "school": "Conjuration (Su1n1noning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One sum1noned creature As elementalkin: air, except the caster sum, 1nons a type 5 air elemental. Lesser Summoning:",
      "recastTime": 11,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:6"
      ],
      "spellLine": "Elementalkin: air",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One sum1noned creature As elementalkin: air, except the caster sum, 1nons a type 5 air elemental. Lesser Summoning:</p>"
    }
  },
  {
    "name": "Levitate",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 6,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "1 minute/level (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Target levitates, ignoring ground effects and moving freely in 3 dimensions.",
      "recastTime": 1,
      "classes": [
        "druid",
        "enchanter",
        "wizard"
      ],
      "description": "<p>Through this spell, the target gains the abilitytofloataboveground level, roughly 3 feet in the air, and to sink more slowly into liquid bodies (if desired). As a move action, the target of the spell may choose to either ascend or descend in a vertical line at the rate of 5 feet per round. The spell also negates 1nost terrain pen- alties, allowing the target to move at his nor1nal 1naximum overland speed regard- less of terrain. The target can also cross water or other nonsolid surfaces as long as he keeps 1noving; if he stops, he will begin to sink into the liquid at a rate of 1 foot per round. Also, should the target step off a cliff or other elevated position, he de- scends at the rate of 1 foot per round ifhe does not concentrate to abate that move- ment or to hasten it. A target under the effects of levitate knows when the spell is about to end; he begins to feel slightly heavier and sluggish about 1 minute prior to the end of the duration. Material Component: One bat's wing.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "varies",
      "classLevels": [
        "druid:4",
        "enchanter:4",
        "wizard:7"
      ],
      "spellLine": "Levitate"
    }
  },
  {
    "name": "Lich",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 1,
      "school": "Alteration [Magic]",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "(D) (see text)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "+4 INT, +2 AC; lose 2 HP per round but gain 3 mana per round.",
      "recastTime": 2,
      "classes": [
        "necromancer",
        "shadowknight"
      ],
      "description": "<p>As call of bones, except this spell allows the caster to convert 8 hit points into 5 1nana each round.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "necromancer:8",
        "shadowknight:8"
      ],
      "spellLine": "Dark pact"
    }
  },
  {
    "name": "Lifetap",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 33,
      "school": "Alteration [Magic]",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "1d6",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "Drains 1d6 HP from target; caster regains HP equal to damage dealt.",
      "recastTime": 0,
      "classes": [
        "necromancer"
      ],
      "description": "<p>As life tap, except this spells deals (7d10+2)x2 points of rnagic damage and transfers that a1nount to the caster.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "half",
      "classLevels": [
        "necromancer:1"
      ],
      "spellLine": "Lifetap"
    }
  },
  {
    "name": "Light Healing",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 5,
      "school": "Alteration (Healing)",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "2d8+2",
      "savingThrow": "will",
      "effect": "Heals 2d8+2 HP.",
      "recastTime": 0,
      "classes": [
        "cleric",
        "paladin"
      ],
      "description": "<p>Shm3 - As minor healing, except this spell heals 4d6 hit points.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "cleric:2",
        "paladin:2"
      ],
      "spellLine": "Minor healing"
    }
  },
  {
    "name": "Lightning Bolt",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 14,
      "school": "Evocation [Electricity]",
      "castingTime": "1 action",
      "range": "Long ( 400 ft. + 40 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "4d6",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "A bolt of lightning streaks along a 120 ft line; Reflex save for half damage.",
      "recastTime": 1,
      "classes": [
        "druid",
        "wizard"
      ],
      "description": "<p>Effect: Ray Th is spell sends a slim bolt of lightning streaking straight at one target within range. A ranged touch attack is r-equired for the bolt to hit. If it hits, the bolt deals 7 d 10 points of electrical da1nage.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "half",
      "classLevels": [
        "druid:6",
        "wizard:5"
      ],
      "spellLine": "Lightning bolt"
    }
  },
  {
    "name": "Lightning Shock",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 30,
      "school": "Evocation [Electricity]",
      "castingTime": "1 action",
      "range": "Medium (100 ft. + 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "As shock of Ughtning, except this spell deals ( 8d 1 O+ 2 )x2 points of electrical damage.",
      "recastTime": 1,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:10"
      ],
      "spellLine": "Shock of lightning",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As shock of Ughtning, except this spell deals ( 8d 1 O+ 2 )x2 points of electrical damage.</p>"
    }
  },
  {
    "name": "Lightning Storm",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 7,
      "manaCost": 27,
      "school": "Evocation [Magic]",
      "castingTime": "1 action",
      "range": "Medium (100 ft. + 10 ft./level)",
      "duration": "3 rounds",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "As lightning storm, except this spell creates waves of multicolored magical energy that rain down on the affected area, each deal- ing 6d 10 points of magic damage.",
      "recastTime": 3,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:7"
      ],
      "spellLine": "Lightning storm",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As lightning storm, except this spell creates waves of multicolored magical energy that rain down on the affected area, each deal- ing 6d 10 points of magic damage.</p>"
    }
  },
  {
    "name": "Listless Power",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 15,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "Medium (100 ft.+ 10 ft./level)",
      "duration": "1 minute/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "Reduces target STR by 4; Fort save negates.",
      "recastTime": 0,
      "classes": [
        "shaman"
      ],
      "description": "<p>PJs disempower, except the target suffers a -7 penalty to Strength and Dexterity and a -3 penalty to Armor Class.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "shaman:2"
      ],
      "spellLine": "Disempower"
    }
  },
  {
    "name": "Locate Corpse",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 1,
      "school": "Divination",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "The caster senses the direction to the nearest corpse.",
      "recastTime": 0,
      "classes": [
        "necromancer"
      ],
      "classLevels": [
        "necromancer:1"
      ],
      "description": "<p>Caster senses direction to nearest corpse.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "saveDC": ""
    }
  },
  {
    "name": "Lull Animal",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 2,
      "school": "Enchantment [Mind-Affecting]",
      "castingTime": "1 action",
      "range": "Medium (100 ft. + 10 ft./level)",
      "duration": "2 minutes (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Hypnotizes an animal, beast, or vermin.",
      "recastTime": 0,
      "classes": [
        "druid"
      ],
      "classLevels": [
        "druid:1"
      ],
      "description": "<p>Hypnotizes animal, beast, or vermin.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "saveDC": ""
    }
  },
  {
    "name": "Maelstrom of Ro",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 26,
      "school": "Evocation",
      "castingTime": "1 action",
      "range": "60 ft",
      "duration": "Instantaneous",
      "damageFormula": "2d8",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "2d8 fire damage to all enemies in 20 ft radius; Reflex save for half.",
      "recastTime": 0,
      "classes": [
        "beastlord"
      ],
      "description": "<p>The beastlord channels the primal fire of Ro into a spiraling maelstrom that scorches all nearby foes.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "half",
      "classLevels": [
        "beastlord:4"
      ]
    }
  },
  {
    "name": "Magnify",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 4,
      "school": "Divination",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "1 minute/level (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "289 As creeping vision, except the duration is longer and the caster also gains ultravision.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:8"
      ],
      "spellLine": "Glimpse",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>289 As creeping vision, except the duration is longer and the caster also gains ultravision.</p>"
    }
  },
  {
    "name": "Major Shielding",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 7,
      "manaCost": 13,
      "school": "Abjuration",
      "castingTime": "I action",
      "range": "Personal",
      "duration": "10 minutes/level (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "As minor shielding, except this spell grants a +5 armor bonus to AC, a buff bonus of + 18 hit points, magic resistance (6), and a+ 2 bonus on saves against 1nagic attacks.",
      "recastTime": 0,
      "classes": [
        "magician",
        "wizard"
      ],
      "classLevels": [
        "magician:7",
        "wizard:7"
      ],
      "spellLine": "Minor shielding",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As minor shielding, except this spell grants a +5 armor bonus to AC, a buff bonus of + 18 hit points, magic resistance (6), and a+ 2 bonus on saves against 1nagic attacks.</p>"
    }
  },
  {
    "name": "Mala",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 15,
      "manaCost": 58,
      "school": "Alteration [Magic]",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "1 minute/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Target suffers -2 to all saving throws and magical resistances; Fortitude save negates.",
      "recastTime": 2,
      "classes": [
        "magician"
      ],
      "description": "<p>As malise, except the target suffers a - 3 save penalty and resistance (-14) against acid, cold, electricity, fire, magic, or poi- son effects, and a-2 save penalty to saves against sonic attacks, as well as sonic resistance (-6). In addition, note that this spell is irresistible.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "magician:15"
      ],
      "spellLine": "Malise"
    }
  },
  {
    "name": "Malignant Dead",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 38,
      "school": "Enchantment",
      "castingTime": "1 action",
      "range": "60 ft",
      "duration": "1 min/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Charms one undead creature to obey the caster's commands; Will save negates.",
      "recastTime": 0,
      "classes": [
        "necromancer"
      ],
      "description": "<p>A powerful compulsion bends an undead creature's animating will entirely to the necromancer's service.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "necromancer:5"
      ]
    }
  },
  {
    "name": "Malise",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 58,
      "school": "Alteration [Magic]",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "1 minute/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "Reduces target STR and DEX by 4; Fort save negates.",
      "recastTime": 2,
      "classes": [
        "magician",
        "shaman"
      ],
      "description": "<p>As malise, except the target suffers a - 3 save penalty and resistance (-14) against acid, cold, electricity, fire, magic, or poi- son effects, and a-2 save penalty to saves against sonic attacks, as well as sonic resistance (-6). In addition, note that this spell is irresistible.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "magician:7",
        "shaman:1"
      ],
      "spellLine": "Malise"
    }
  },
  {
    "name": "Malisement",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 11,
      "manaCost": 17,
      "school": "Alteration [Magic]",
      "castingTime": "1 action",
      "range": "C lose (25 ft. + 5 ft./2 levels)",
      "duration": "1 minute/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "As malise, except the target suffers a -4 save penalty and resistance (-16) against acid, cold, electricity, fire, magic, or poi- so11 effects, and a -2 save penalty to saves against sonic attacks, as well as sonic resistance (-8).",
      "recastTime": 1,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:11"
      ],
      "spellLine": "Malise",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As malise, except the target suffers a -4 save penalty and resistance (-16) against acid, cold, electricity, fire, magic, or poi- so11 effects, and a -2 save penalty to saves against sonic attacks, as well as sonic resistance (-8).</p>"
    }
  },
  {
    "name": "Malosi",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 13,
      "manaCost": 29,
      "school": "Alteration [Magic]",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "1 minute/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "As malise, except the target suffers a -6 save penalty and resistance (-24) against acid, cold, electricity, fire, magic, or poi- son effects, and a-3 save penalty to saves against sonic attacks, as well as sonic resistance (-12).",
      "recastTime": 1,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:13"
      ],
      "spellLine": "Malise",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As malise, except the target suffers a -6 save penalty and resistance (-24) against acid, cold, electricity, fire, magic, or poi- son effects, and a-3 save penalty to saves against sonic attacks, as well as sonic resistance (-12).</p>"
    }
  },
  {
    "name": "Malosini",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 14,
      "manaCost": 33,
      "school": "Alteration [Magic]",
      "castingTime": "Free action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "1 minute/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "As malise, except the target suffers a -6 save penalty and resistance (-24) against acid, cold, electricity, fire, magic, or poi- son effects, and a -3 save penalty to saves against sonic attacks, as well as sonic resistance (-12). This spell has a casting time of a free action, but if it's to be cast a second time in the same round, an attack action is required for the second casting.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:14"
      ],
      "spellLine": "Malise",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As malise, except the target suffers a -6 save penalty and resistance (-24) against acid, cold, electricity, fire, magic, or poi- son effects, and a -3 save penalty to saves against sonic attacks, as well as sonic resistance (-12). This spell has a casting time of a free action, but if it's to be cast a second time in the same round, an attack action is required for the second casting.</p>"
    }
  },
  {
    "name": "Mana Conversion",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 0,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "Touch",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Transfers up to 50 mana from the caster directly to the touched target.",
      "recastTime": 0,
      "classes": [
        "enchanter"
      ],
      "description": "<p>The enchanter funnels their own arcane energy into another spellcaster who needs it more urgently.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "enchanter:5"
      ]
    }
  },
  {
    "name": "Manastorm",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 15,
      "manaCost": 71,
      "school": "Evocation [Magic]",
      "castingTime": "1 full round",
      "range": "Medium (100 ft.+ 10 ft./level)",
      "duration": "3 rounds",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "- As tears of Druzzil, except the casting titne is slightly longer, and each wave deals ( 4d6+ 1)x10 points of cold damage and drains 8 mana from the mana pool ( if any) of anyone within the area. A Fortitude save is allowed each round for half damage and half mana loss ( one save for both effects). Magic resistance has no effect on the mana loss.",
      "recastTime": 3,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:15"
      ],
      "spellLine": "Tears of Druzzil",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>- As tears of Druzzil, except the casting titne is slightly longer, and each wave deals ( 4d6+ 1)x10 points of cold damage and drains 8 mana from the mana pool ( if any) of anyone within the area. A Fortitude save is allowed each round for half damage and half mana loss ( one save for both effects). Magic resistance has no effect on the mana loss.</p>"
    }
  },
  {
    "name": "Markar's Relocation",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 50,
      "school": "Alteration [Teleportation]",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "than 20 ft. apart The caster transports up to six willing tar- gets to a location in the southwestern portion of the Emerald Jungle between the cliff rises toward the Field of Bone and the marshy region known as T rakanon's Teeth. This destination is not entirely safe.",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:10"
      ],
      "spellLine": "Markar's Relocation",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>than 20 ft. apart The caster transports up to six willing tar- gets to a location in the southwestern portion of the Emerald Jungle between the cliff rises toward the Field of Bone and the marshy region known as T rakanon's Teeth. This destination is not entirely safe.</p>"
    }
  },
  {
    "name": "McVaxius' Berserker Crescendo",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 0,
      "school": "Bard Song",
      "castingTime": "1 action (song)",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Performance",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Targets gain haste (3), a +1 haste bonus to AC, 1 extra attack action every third round, -1 weapon delay, and a +4 Strength buff bonus. A brass instrument increases the Strength bonus to +6.",
      "recastTime": 0,
      "classes": [
        "bard"
      ],
      "description": "<p>McVaxius' legendary battle crescendo drives allies into a frenzy of accelerated attacks.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "bard:9"
      ]
    }
  },
  {
    "name": "Melody of Ervaj",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 11,
      "manaCost": 0,
      "school": "Bard Song",
      "castingTime": "1 action (song)",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Performance",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Provides haste (1). This haste bonus stacks with other haste effects, even another bard song.",
      "recastTime": 0,
      "classes": [
        "bard"
      ],
      "description": "<p>Song Line: Melody of Ervaj Instrument: Brass (Con; instru1nent re- quired) Melody of Ervaj provides a haste ( 1) effect; however, its haste bonus stacks with all other haste effects, even another bard song. Tb.us a bard might twist melody of Ervaj with verses of victory to grant a total bonus of haste (5) from her songs, which might then further combine with haste froin a spell and a magic item.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "bard:11"
      ],
      "spellLine": "Melot:>y OF Ervaj"
    }
  },
  {
    "name": "Mesmerize",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 21,
      "school": "Conjuration [Mind-Affecting]",
      "castingTime": "1 action",
      "range": "Medium (100 ft. + 10 ft./level)",
      "duration": "16 rounds",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Target is mesmerized and cannot act. Breaks immediately if attacked. Save: Will negates.",
      "recastTime": 1,
      "classes": [
        "enchanter"
      ],
      "description": "<p>As mesmerize, except that the duration is longer and, if the mesmerization effect runs its full course, the target forgets the period 4 1ninutes prior to this spell's casting.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "enchanter:1"
      ],
      "spellLine": "Mesmerize"
    }
  },
  {
    "name": "Minor Conjuration: Air",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 33,
      "school": "Conjuration (Summoning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One sum1noned creature As elementalkin: air, except the caster sum- mons a type 8 air elemental Minor Conjuration:",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:9"
      ],
      "spellLine": "Elementalkin: air",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One sum1noned creature As elementalkin: air, except the caster sum- mons a type 8 air elemental Minor Conjuration:</p>"
    }
  },
  {
    "name": "Minor Conjuration: Earth",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 33,
      "school": "Conjuration (Summoning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One sum1noned creature As elementalkin: air, except the caster sum- mons a type 8 air elemental Minor Conjuration:",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:9"
      ],
      "spellLine": "Elementalkin: air",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One sum1noned creature As elementalkin: air, except the caster sum- mons a type 8 air elemental Minor Conjuration:</p>"
    }
  },
  {
    "name": "Minor Conjuration: Fire",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 33,
      "school": "Conjuration (Summoning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One sum1noned creature As elementalkin: air, except the caster sum- mons a type 8 air elemental Minor Conjuration:",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:9"
      ],
      "spellLine": "Elementalkin: air",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One sum1noned creature As elementalkin: air, except the caster sum- mons a type 8 air elemental Minor Conjuration:</p>"
    }
  },
  {
    "name": "Minor Conjuration: Water",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 33,
      "school": "Conjuration (Summoning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One sum1noned creature As elementalkin: air, except the caster sum- mons a type 8 air elemental Minor Conjuration:",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:9"
      ],
      "spellLine": "Elementalkin: air",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One sum1noned creature As elementalkin: air, except the caster sum- mons a type 8 air elemental Minor Conjuration:</p>"
    }
  },
  {
    "name": "Minor Familiar",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 88,
      "school": "Conjuration (Summoning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Until dismissed (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One summoned creature As minor familiar, except this spell sum- mons a type 3 familiar. As long as the familiar remains within the spell's range of the caster, the caster gains the following benefits: a + 3 bonus on all Channeling skill checks, + 2 on all saves, and a bonus of resistance (8) against any type of spell or spell-like attack that has a descriptor, such as [magic] or [poi- son]. In addition, this close proximity of the familiar allows the caster to regain 1 point of mana every 5 minutes in addition to any other nor1nal or magical mana recovery, and the caster's mana pool and current mana increase by 12.",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:8"
      ],
      "spellLine": "Minor familiar",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One summoned creature As minor familiar, except this spell sum- mons a type 3 familiar. As long as the familiar remains within the spell's range of the caster, the caster gains the following benefits: a + 3 bonus on all Channeling skill checks, + 2 on all saves, and a bonus of resistance (8) against any type of spell or spell-like attack that has a descriptor, such as [magic] or [poi- son]. In addition, this close proximity of the familiar allows the caster to regain 1 point of mana every 5 minutes in addition to any other nor1nal or magical mana recovery, and the caster's mana pool and current mana increase by 12.</p>"
    }
  },
  {
    "name": "Minor Healing",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 21,
      "school": "Alteration (Healing)",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "1d8+1",
      "savingThrow": "will",
      "effect": "Channels divine energy to mend a creature's wounds.",
      "recastTime": 0,
      "classes": [
        "cleric",
        "druid"
      ],
      "description": "<p>As minor healing, except this spell heals only the caster's pet, curing (3d6+ 1 )xl 0 hit points.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "cleric:1",
        "druid:1"
      ],
      "spellLine": "Minor healing"
    }
  },
  {
    "name": "Minor Shielding",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 20,
      "school": "Abjuration",
      "castingTime": "1 full round",
      "range": "Personal",
      "duration": "30 minutes/level (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Grants 10 temporary HP that are lost first before regular HP.",
      "recastTime": 0,
      "classes": [
        "enchanter",
        "magician",
        "necromancer",
        "wizard"
      ],
      "description": "<p>As minor shielding, except this spell grants a +6 armor bonus to AC, a buff bonus of +25 hit points, magic resistance (6), and a+ 2 bonus on saves against magic attacks. Greater Summoning:</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "enchanter:1",
        "magician:1",
        "necromancer:1",
        "wizard:1"
      ],
      "spellLine": "Minor shielding"
    }
  },
  {
    "name": "Minor Summoning: Air",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 27,
      "school": "Conjuration (Summoning)",
      "castingTime": "2 full rounds",
      "range": "C lose (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One summoned creature Aselementalkin: air, except thecastersu1n- mons a type 4 air elemental. Minor Summoning:",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:5"
      ],
      "spellLine": "Elementalkin: air",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One summoned creature Aselementalkin: air, except thecastersu1n- mons a type 4 air elemental. Minor Summoning:</p>"
    }
  },
  {
    "name": "Minor Summoning: Earth",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 27,
      "school": "Conjuration (Summoning)",
      "castingTime": "2 full rounds",
      "range": "C lose (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One summoned creature Aselementalkin: air, except thecastersu1n- mons a type 4 air elemental. Minor Summoning:",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:5"
      ],
      "spellLine": "Elementalkin: air",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One summoned creature Aselementalkin: air, except thecastersu1n- mons a type 4 air elemental. Minor Summoning:</p>"
    }
  },
  {
    "name": "Minor Summoning: Fire",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 27,
      "school": "Conjuration (Summoning)",
      "castingTime": "2 full rounds",
      "range": "C lose (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One summoned creature Aselementalkin: air, except thecastersu1n- mons a type 4 air elemental. Minor Summoning:",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:5"
      ],
      "spellLine": "Elementalkin: air",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One summoned creature Aselementalkin: air, except thecastersu1n- mons a type 4 air elemental. Minor Summoning:</p>"
    }
  },
  {
    "name": "Minor Summoning: Water",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 27,
      "school": "Conjuration (Summoning)",
      "castingTime": "2 full rounds",
      "range": "C lose (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One summoned creature Aselementalkin: air, except thecastersu1n- mons a type 4 air elemental. Minor Summoning:",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:5"
      ],
      "spellLine": "Elementalkin: air",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One summoned creature Aselementalkin: air, except thecastersu1n- mons a type 4 air elemental. Minor Summoning:</p>"
    }
  },
  {
    "name": "Modulating Rod",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 33,
      "school": "Conjuration (Creation)",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "24 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One modulating rod This spell creates a modulating rod, a Me- dium-size blunt weapon equivalent to a + 1 light mace, in the hand of the caster. The rod also has a special mana conver- sion ability, which the wielder can activate with a command word (a standard action that provokes no attacks of opportunity): the rod transforms 40 hit points into 25 mana that can be added immediately to the mana pool of the wielder's choice. The mana may be split this 25 mana between pools in whatever fashion he desires. This power can be used only once, and the power will not function if the user is in possession of more than one modulat- ing rod. As a created object, the modulating rod vanishes after 24 hours. Its temporary na- ture is apparent to anyone who looks at it.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:10"
      ],
      "spellLine": "Modulating rod",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One modulating rod This spell creates a modulating rod, a Me- dium-size blunt weapon equivalent to a + 1 light mace, in the hand of the caster. The rod also has a special mana conver- sion ability, which the wielder can activate with a command word (a standard action that provokes no attacks of opportunity): the rod transforms 40 hit points into 25 mana that can be added immediately to the mana pool of the wielder's choice. The mana may be split this 25 mana between pools in whatever fashion he desires. This power can be used only once, and the power will not function if the user is in possession of more than one modulat- ing rod. As a created object, the modulating rod vanishes after 24 hours. Its temporary na- ture is apparent to anyone who looks at it.</p>"
    }
  },
  {
    "name": "Monster Summoning I",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 33,
      "school": "Conjuration (Su1nmoning)",
      "castingTime": "2 fu ll rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One summoned creature This spell conjures a monster of a random type from among those creatures found within 4 miles of the caster's current loca- tion to attack the caster's enemies. However, the creature summoned will always have 16 Hit Dice, even if its racial type cannot normally have 16 HD. Thus, if cast in the East Common lands, the spell would create a 16-HD version of any monster that lives in chat area, from a lowly fire beetle to a griffon. The creature appears wherever the caster designates within the spell's range and acts as the caster's pet (see the \"Pets\" sidebar in Chapter 8: Using Magic). The pet attacks the caster's opponents to the best of its ability, and can be directed not to attack or to attack only particular ene1nies, to return to the caster's side, to guard the caster, or to perform other actions. The creature 1nay be equipped with weapons and shields once it is summoned. However, any equipment it uses disap- pears along with the creature when it is destroyed or dismissed. A caster can have only one summoned pet at a time. The summoned monster is permanent, remaining until dismissed by the caster ( or by the caster's reclaim energy spell) or destroyed. The monster is considered a summoned creature for the purposes of determining what spells and abilities will affect it. MaterialComponents: Apieceofmalachite.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:9"
      ],
      "spellLine": "Monster summoning I",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One summoned creature This spell conjures a monster of a random type from among those creatures found within 4 miles of the caster's current loca- tion to attack the caster's enemies. However, the creature summoned will always have 16 Hit Dice, even if its racial type cannot normally have 16 HD. Thus, if cast in the East Common lands, the spell would create a 16-HD version of any monster that lives in chat area, from a lowly fire beetle to a griffon. The creature appears wherever the caster designates within the spell's range and acts as the caster's pet (see the \"Pets\" sidebar in Chapter 8: Using Magic). The pet attacks the caster's opponents to the best of its ability, and can be directed not to attack or to attack only particular ene1nies, to return to the caster's side, to guard the caster, or to perform other actions. The creature 1nay be equipped with weapons and shields once it is summoned. However, any equipment it uses disap- pears along with the creature when it is destroyed or dismissed. A caster can have only one summoned pet at a time. The summoned monster is permanent, remaining until dismissed by the caster ( or by the caster's reclaim energy spell) or destroyed. The monster is considered a summoned creature for the purposes of determining what spells and abilities will affect it. MaterialComponents: Apieceofmalachite.</p>"
    }
  },
  {
    "name": "Monster Summoning II",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 12,
      "manaCost": 33,
      "school": "Conjuration (Summoning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One su1nmoned creature As Monster summoning I, except the sum- moned creature has 24 Hit Dice. MaterialComponents: Apiece of malachite.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:12"
      ],
      "spellLine": "Monster summoning I",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One su1nmoned creature As Monster summoning I, except the sum- moned creature has 24 Hit Dice. MaterialComponents: Apiece of malachite.</p>"
    }
  },
  {
    "name": "Monster Summoning III",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 15,
      "manaCost": 33,
      "school": "Conjuration (Summoning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One summoned creature As Monster summoning I, except the sum- moned creature has 30 H it Dice. MaterialComponents: Apieceofmalachite.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:15"
      ],
      "spellLine": "Monster summoning I",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One summoned creature As Monster summoning I, except the sum- moned creature has 30 H it Dice. MaterialComponents: Apieceofmalachite.</p>"
    }
  },
  {
    "name": "Muzzle of Mardu",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 14,
      "manaCost": 17,
      "school": "Conjuration",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "24 hours (see text)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: 1 muzzle of Mar du This spell creates a muzzle of Mardu, a magic mask that may be conjured upon any su1nmoned pet (including those sum- moned by other classes), granting that creature haste ( 1). As this l1aste is from an item, it will stack with any haste spell and/ or bard song. As a created item, the muzzle ofMardu vanishes after 24 hours. The muzzle of Mardu is also destroyed if the pet wearing it is killed.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:14"
      ],
      "spellLine": "Muzzle of Mardu",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: 1 muzzle of Mar du This spell creates a muzzle of Mardu, a magic mask that may be conjured upon any su1nmoned pet (including those sum- moned by other classes), granting that creature haste ( 1). As this l1aste is from an item, it will stack with any haste spell and/ or bard song. As a created item, the muzzle ofMardu vanishes after 24 hours. The muzzle of Mardu is also destroyed if the pet wearing it is killed.</p>"
    }
  },
  {
    "name": "Nature Walker's Behest",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 68,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "30 ft",
      "duration": "5 min/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Summons a powerful nature spirit (equivalent to a CR 8 creature) to fight alongside the druid.",
      "recastTime": 0,
      "classes": [
        "druid"
      ],
      "description": "<p>The druid calls upon the oldest nature spirits, compelling a powerful elemental guardian to answer their behest.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "druid:9"
      ]
    }
  },
  {
    "name": "Nature's Touch",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 67,
      "school": "Alteration (Healing)",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "1d8+2",
      "savingThrow": "will",
      "effect": "Channel the regenerative power of nature to heal wounds.",
      "recastTime": 0,
      "classes": [
        "druid"
      ],
      "description": "<p>As minor healing, except this spell heals (5d6+2)x10 hit points. NatureWall&lt;.er's Behest</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "druid:15"
      ],
      "spellLine": "Minor healing"
    }
  },
  {
    "name": "Nek Gate",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 7,
      "manaCost": 25,
      "school": "Alteration [Teleportation]",
      "castingTime": "1 full round",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "This spell transports the caster to the pyramid within the Nektulos Forest.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:7"
      ],
      "spellLine": "Gate",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>This spell transports the caster to the pyramid within the Nektulos Forest.</p>"
    }
  },
  {
    "name": "Nek Portal",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 50,
      "school": "Alteration [Teleportation]",
      "castingTime": "3 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "than 20 ft. apart The caster transports up to six targets of her choice within range to the pyra1nid in the Nektulos Forest.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:9"
      ],
      "spellLine": "Gate",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>than 20 ft. apart The caster transports up to six targets of her choice within range to the pyra1nid in the Nektulos Forest.</p>"
    }
  },
  {
    "name": "Nexus Gate",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 25,
      "school": "Alteration [Teleportation]",
      "castingTime": "1 full round",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "T his spell transports the caster to the Nexus on the moon of Luclin.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:6"
      ],
      "spellLine": "Gate",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>T his spell transports the caster to the Nexus on the moon of Luclin.</p>"
    }
  },
  {
    "name": "Nexus Portal",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 50,
      "school": "Alteration [Teleportation]",
      "castingTime": "3 full rounds",
      "range": "C lose (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "than 20 ft. apart T he caster transports up to six targets of his choice within range to the Nexus on the moon of Luclin.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:8"
      ],
      "spellLine": "Gate",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>than 20 ft. apart T he caster transports up to six targets of his choice within range to the Nexus on the moon of Luclin.</p>"
    }
  },
  {
    "name": "Niv's Melody of Preservation",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 0,
      "school": "Bard Song",
      "castingTime": "1 action (song)",
      "range": "C lose (25 ft. + 5 ft./2 levels)",
      "duration": "Performance",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "Provides +3 Strength, +1 insight bonus on attack rolls, healing 2 points per round, and spell resistance equal to bard level + 4. With a successful stringed instrument use, these improve to +5 Strength, +2 attack, healing 4 per round, and spell resistance equal to bard level + 6.",
      "recastTime": 0,
      "classes": [
        "bard"
      ],
      "description": "<p>Song Line: Niv' s melody of preservation Instrument: String (Dex) less) Niv's melody of preservation provides an array of benefits, including a + 3 bonus to Strength, a+ 1 insight bonus on attack rolls and 2 points of healing per round of perfor- mance. Finally, Niv' s melody of preservation grants its targets spell resistance (bard's level + 4). Successful use of a stringed instrument increases the bonuses to a +5 bonus to Strength, a + 2 insight bonus on attack rolls, 4 points of healing per round and spell resistance (bard's level+ 6).</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "bard:10"
      ],
      "spellLine": "Niv's Melot>y OF Preservation"
    }
  },
  {
    "name": "North Gate",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 25,
      "school": "Alteration [Teleportation]",
      "castingTime": "1 fu ll round",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "This spell transports the caster to the wizard spires north of the river that di- vides the Plains of Karana.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:6"
      ],
      "spellLine": "Gate",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>This spell transports the caster to the wizard spires north of the river that di- vides the Plains of Karana.</p>"
    }
  },
  {
    "name": "North Portal",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 50,
      "school": "Alteration [Teleportation]",
      "castingTime": "3 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "than 20 ft. apart The caster transports up to six targets of her choice within range to the wizard spires in North Karana.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:8"
      ],
      "spellLine": "Gate",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>than 20 ft. apart The caster transports up to six targets of her choice within range to the wizard spires in North Karana.</p>"
    }
  },
  {
    "name": "Nullify Magic",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 0,
      "school": "",
      "castingTime": "1 action",
      "range": "",
      "duration": "",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Cancels the effects of two spells or items.",
      "recastTime": 0,
      "classes": [
        "magician",
        "wizard"
      ],
      "classLevels": [
        "magician:9",
        "wizard:9"
      ],
      "spellLine": "Nullify Magic",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Cancels the effects of two spells or items.</p>"
    }
  },
  {
    "name": "Numb the Dead",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 3,
      "school": "Abjuration",
      "castingTime": "1 action",
      "range": "Mediu1n (100 ft.+ 10 ft./level)",
      "duration": "Concentration, up to 1 round/",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Reduces an undead creature's AC and saving throws by 2 each.",
      "recastTime": 1,
      "classes": [],
      "description": "<p>level (D) As lull, except this spell affects undead only. Material Component: A finger,sized piece of bone.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [],
      "spellLine": "Numb the dead"
    }
  },
  {
    "name": "Numbing Cold",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 52,
      "school": "Evocation [Cold]",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "As numbing cold, except this spell deals (2d10+ 3 )xlO points of cold damage to all within a 15,foot radius. l{eshuval's",
      "recastTime": 1,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:1"
      ],
      "spellLine": "Numbing cold",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As numbing cold, except this spell deals (2d10+ 3 )xlO points of cold damage to all within a 15,foot radius. l{eshuval's</p>"
    }
  },
  {
    "name": "O'Keil's Embers",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 6,
      "school": "Abjuration [Fire]",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "1 minute (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "As shield of fire, except this wizard version of the spell grants a buff bonus of + 1 on saves against attacks with the [fire] de, scriptor, as well as fire resistance ( 4) and damage shield (2). O'l<eil's Flicl<ering",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:4"
      ],
      "spellLine": "Shield of fire",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As shield of fire, except this wizard version of the spell grants a buff bonus of + 1 on saves against attacks with the [fire] de, scriptor, as well as fire resistance ( 4) and damage shield (2). O'l&lt;eil's Flicl&lt;ering</p>"
    }
  },
  {
    "name": "O'Keil's Flickering Flame",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 0,
      "school": "",
      "castingTime": "1 action",
      "range": "",
      "duration": "",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Grants + 1 on saves against",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:9"
      ],
      "spellLine": "O'Keil's Flickering Flame",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Grants + 1 on saves against</p>"
    }
  },
  {
    "name": "O'Keil's Radiation",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 0,
      "school": "Abjuration [Fire]",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "5 rounds (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "As shield of fire, except this wizard version of the spell grants a buff bonus of+ 1 on saves against attacks with the [fire] descriptor, as well as fire resistance (2) and damage shield ( 1)",
      "recastTime": 1,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:2"
      ],
      "spellLine": "Shield of fire",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As shield of fire, except this wizard version of the spell grants a buff bonus of+ 1 on saves against attacks with the [fire] descriptor, as well as fire resistance (2) and damage shield ( 1)</p>"
    }
  },
  {
    "name": "Pacify",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 17,
      "school": "Alteration [Mi11d,Affecting]",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "4 minutes",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Pacifies one creature (lull), preventing it from attacking unless attacked first; Will save negates.",
      "recastTime": 1,
      "classes": [
        "cleric"
      ],
      "description": "<p>As lull, except this spell has a longer duration and the target suffers a penalty to the Will save equal to the caster's Cl1a, risma 1nodifier.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "cleric:3"
      ],
      "spellLine": "Lull"
    }
  },
  {
    "name": "Pack Hunt",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 40,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "Self",
      "duration": "2 min/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Both the beastlord and their warder gain +2 attack and +2d6 bonus damage when attacking the same target.",
      "recastTime": 0,
      "classes": [
        "beastlord"
      ],
      "description": "<p>Beastlord and warder synchronize their attacks with preternatural coordination, each strike empowering the other.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "beastlord:6"
      ]
    }
  },
  {
    "name": "Panic Animal",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 2,
      "school": "Enchantment [Fear, Mind-Affecting]",
      "castingTime": "1 action",
      "range": "Medium (100 ft. + 10 ft./level)",
      "duration": "1d6 rounds",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Instills supernatural fear in an animal.",
      "recastTime": 0,
      "classes": [
        "druid"
      ],
      "classLevels": [
        "druid:1"
      ],
      "description": "<p>Instills supernatural fear in animal.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "saveDC": ""
    }
  },
  {
    "name": "Paralyzing Earth",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 17,
      "school": "Alteration [Magic]",
      "castingTime": "1 action",
      "range": "Medium ( 100 ft. + 10 ft./level)",
      "duration": "3d10 rounds (see text)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "Paralyzes target completely for 1d4 rounds; Will save negates.",
      "recastTime": 1,
      "classes": [
        "necromancer"
      ],
      "description": "<p>Wiz 12 As root, except as above.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "necromancer:8"
      ],
      "spellLine": "Root"
    }
  },
  {
    "name": "Phantom Armor",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 13,
      "manaCost": 38,
      "school": "Abjuration",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "30 minutes/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "As phantom leather, except this spell grants damage reduction 11/- and fast healing ( 1). Material Component: 4 cat's eye agates.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:13"
      ],
      "spellLine": "Phantom leather",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As phantom leather, except this spell grants damage reduction 11/- and fast healing ( 1). Material Component: 4 cat's eye agates.</p>"
    }
  },
  {
    "name": "Phantom Chain",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 17,
      "school": "Abjuration",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "30 minutes/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "As phantom leather, except this spell grants damage reduction 7 /-and allows the caster to heal 1 hit point per minute. Material Component: 2 cat's eye agates.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:8"
      ],
      "spellLine": "Phantom leather",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As phantom leather, except this spell grants damage reduction 7 /-and allows the caster to heal 1 hit point per minute. Material Component: 2 cat's eye agates.</p>"
    }
  },
  {
    "name": "Phantom Leather",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 38,
      "school": "Abjuration",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "30 minutes/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "As phantom leather, except this spell grants damage reduction 11/- and fast healing ( 1). Material Component: 4 cat's eye agates.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:5"
      ],
      "spellLine": "Phantom leather",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As phantom leather, except this spell grants damage reduction 11/- and fast healing ( 1). Material Component: 4 cat's eye agates.</p>"
    }
  },
  {
    "name": "Phantom Plate",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 11,
      "manaCost": 33,
      "school": "Abjuration",
      "castingTime": "1 full round",
      "range": "Personal",
      "duration": "30 minutes/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "As phantom leather, except this spell grants damage reduction 9/-and allows the caster to heal 1 hit point every 5 rounds. Material Component: 3 cat's eye agates.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:11"
      ],
      "spellLine": "Phantom leather",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As phantom leather, except this spell grants damage reduction 9/-and allows the caster to heal 1 hit point every 5 rounds. Material Component: 3 cat's eye agates.</p>"
    }
  },
  {
    "name": "Phantom Wind",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 18,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "80 ft",
      "duration": "1 min/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Roots target in place; Will save negates.",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "description": "<p>An invisible wall of wind slams into the target, pinning them in place with crushing force.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates"
    }
  },
  {
    "name": "Pillar of Fire",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 14,
      "school": "Evocation [Fire]",
      "castingTime": "1 action",
      "range": "Medium (100ft. + lOft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "Chapter Ten: Spells As column of fire, except this spell deals 5d 10 points of fire damage.",
      "recastTime": 1,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:5"
      ],
      "spellLine": "Column of fire",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Chapter Ten: Spells As column of fire, except this spell deals 5d 10 points of fire damage.</p>"
    }
  },
  {
    "name": "Plague",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 50,
      "school": "Conjuration [Disease]",
      "castingTime": "1 full round",
      "range": "Medium (100 ft. + 10 ft./level)",
      "duration": "21 rounds",
      "damageFormula": "1d8",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "Infects target with a magical disease dealing 1d8 damage per round; Fort save each round negates that round's damage.",
      "recastTime": 0,
      "classes": [
        "shaman"
      ],
      "description": "<p>As sicken, except that the affected crea- ture irnmediately takes 4d 10 points of disease damage (Fort half), and takes an additional 2d10 points of disease dan1age (ldlO if the initial save was successful) each round thereafter, until the spell ends or is countered.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "half",
      "classLevels": [
        "shaman:4"
      ],
      "spellLine": "Sicken"
    }
  },
  {
    "name": "Pouch of Quellious",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 14,
      "manaCost": 10,
      "school": "Conjuration (Creation/Summoning)",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: Pouch and 60 shurikens of Quellious This spell creates a small pouch containing 60 shurikens of Quellious, which are + 1 shurikens. Further, the pouch of Quellious itself grants a + 2 enhancement bonus to the bearer's Dexterity as long as it is held. As created items, the pouch and shurikens vanish after 24 hours. Their temporary nature is apparent to anyone who looks at them.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:14"
      ],
      "spellLine": "Summon arrows",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: Pouch and 60 shurikens of Quellious This spell creates a small pouch containing 60 shurikens of Quellious, which are + 1 shurikens. Further, the pouch of Quellious itself grants a + 2 enhancement bonus to the bearer's Dexterity as long as it is held. As created items, the pouch and shurikens vanish after 24 hours. Their temporary nature is apparent to anyone who looks at them.</p>"
    }
  },
  {
    "name": "Project Lightning",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 20,
      "school": "Evocation [Force, Magic]",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "4d10",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "A crackling burst erupts from the caster in a 10-foot radius, dealing 4d10 electricity damage; Reflex save halves.",
      "recastTime": 1,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:5"
      ],
      "spellLine": "Project lightning",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As project lightning, except this spell cre- ates a burst of magical force that deals 6d 10 points of magic damage to all within 10 feet.</p>"
    }
  },
  {
    "name": "Prophetic Guard",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 42,
      "school": "Abjuration",
      "castingTime": "1 action",
      "range": "20 ft AE",
      "duration": "10 min/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "All allies in range gain +2 AC and +2 to all saving throws.",
      "recastTime": 0,
      "classes": [
        "shaman"
      ],
      "description": "<p>Spirit seers surround the shaman's allies with prophetic wards, fortifying their defenses.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "shaman:6"
      ]
    }
  },
  {
    "name": "Psalm of Veeshan",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 0,
      "school": "Song",
      "castingTime": "1 action (song)",
      "range": "30 ft AE",
      "duration": "Concentration",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Allies in range gain +5 resistance to fire, cold, and magic damage while the song is maintained.",
      "recastTime": 0,
      "classes": [
        "bard"
      ],
      "description": "<p>A soaring tribute to Veeshan, Crystalline Dragon of the North, wraps allies in elemental resistance.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "bard:5"
      ]
    }
  },
  {
    "name": "Quiver of Marr",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 13,
      "manaCost": 10,
      "school": "Conjuration (Creation/Summoning)",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "24 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: Quiver and 60 arrows This spell creates a quiver containing 60 arrows. The arrows can be for a longbow or shortbow, as the caster decides, but all the created arrows are of the same type. The arrows are treated as + 1 1nagic weapons for the purpose of determining their effects on creatures with damage reduction, although the arrows do not actually grant a bonus to the archer's attack or damage rolls. As created items, the quiver and arrows vanish after 24 hours. Their temporary nature is apparent to anyone who looks at them.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:13"
      ],
      "spellLine": "Summon arrows",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: Quiver and 60 arrows This spell creates a quiver containing 60 arrows. The arrows can be for a longbow or shortbow, as the caster decides, but all the created arrows are of the same type. The arrows are treated as + 1 1nagic weapons for the purpose of determining their effects on creatures with damage reduction, although the arrows do not actually grant a bonus to the archer's attack or damage rolls. As created items, the quiver and arrows vanish after 24 hours. Their temporary nature is apparent to anyone who looks at them.</p>"
    }
  },
  {
    "name": "Quivering Veil of Xarn",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 23,
      "school": "Abjuration [Magic]",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "4 rounds (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "An undead ally encased in this veil reflects 50% of damage taken back to their attacker.",
      "recastTime": 0,
      "classes": [
        "shadowknight"
      ],
      "description": "<p>Recast Time: 10 minutes As divine barrier, except the necromancer regains 2d10 hit points per round and gains damage shield (9).</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "shadowknight:3"
      ],
      "spellLine": "Divine aura"
    }
  },
  {
    "name": "Rage of Zomm",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 13,
      "manaCost": 33,
      "school": "Conjuration (Summoning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One sum1noned creature As elementalkin: earth, except this spell sumrnons a trembler, a powerful earth elemental companion that attacks a single enemy of the caster. The trembler attacks the assigned target until either the trem- bler, its summoner, or its target is killed or incapacitated, at which point it disap- pears immediately. See the \"trembler\" entry in EverQuest: Monsters ofNorrath for 1nore information.",
      "recastTime": 2,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:13"
      ],
      "spellLine": "Elementalkin: earth",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One sum1noned creature As elementalkin: earth, except this spell sumrnons a trembler, a powerful earth elemental companion that attacks a single enemy of the caster. The trembler attacks the assigned target until either the trem- bler, its summoner, or its target is killed or incapacitated, at which point it disap- pears immediately. See the \"trembler\" entry in EverQuest: Monsters ofNorrath for 1nore information.</p>"
    }
  },
  {
    "name": "Rain of Blades",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 10,
      "school": "Evocation [Magic]",
      "castingTime": "1 action",
      "range": "Medium ( 100 ft. + 10 ft./level)",
      "duration": "3 rounds",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "Sharp blades of magical energy rain down in a wave over the affected area each round, each wave dealing 4d6 points of magic slashing da1nage to all within the area. A Reflex save is allowed each round for half damage.",
      "recastTime": 3,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:4"
      ],
      "spellLine": "Rain of blades",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Sharp blades of magical energy rain down in a wave over the affected area each round, each wave dealing 4d6 points of magic slashing da1nage to all within the area. A Reflex save is allowed each round for half damage.</p>"
    }
  },
  {
    "name": "Rain of Fire",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 21,
      "school": "Evocation [Fire]",
      "castingTime": "1 action",
      "range": "Medium ( 100 ft. + 10 ft./level)",
      "duration": "3 rounds",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "As firestorm, except that each wave deals 4d 10 points of fire damage.",
      "recastTime": 3,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:6"
      ],
      "spellLine": "Firestorm",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As firestorm, except that each wave deals 4d 10 points of fire damage.</p>"
    }
  },
  {
    "name": "Rain of Lava",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 42,
      "school": "Evocation [Fire]",
      "castingTime": "1 action",
      "range": "Medium (100 ft.+ 10 ft./level)",
      "duration": "3 rounds",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "As firestorm, except that each wave deals (5d10)x2 points of fire damage.",
      "recastTime": 3,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:10"
      ],
      "spellLine": "Firestorm",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As firestorm, except that each wave deals (5d10)x2 points of fire damage.</p>"
    }
  },
  {
    "name": "Rain of Spikes",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 27,
      "school": "Evocation [Magic]",
      "castingTime": "1 action",
      "range": "Medium (100 ft.+ 10 ft./level)",
      "duration": "3 rounds",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "As rain of blades, except that this spell creates spikes of magical energy and each wave deals (5d 1 O)x2 points of 1nagic pierc- ing da1nage. Chapter Ten: Spells",
      "recastTime": 3,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:8"
      ],
      "spellLine": "Rain of blades",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As rain of blades, except that this spell creates spikes of magical energy and each wave deals (5d 1 O)x2 points of 1nagic pierc- ing da1nage. Chapter Ten: Spells</p>"
    }
  },
  {
    "name": "Rain of Swords",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 12,
      "manaCost": 62,
      "school": "Evocation [Magic]",
      "castingTime": "1 action",
      "range": "Medium ( 100 ft. + 10 ft./level)",
      "duration": "3 rounds",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "As rain of blades, except that this spell deals (7d10+2)x2 points of magic slash- ing damage.",
      "recastTime": 3,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:12"
      ],
      "spellLine": "Rain of blades",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As rain of blades, except that this spell deals (7d10+2)x2 points of magic slash- ing damage.</p>"
    }
  },
  {
    "name": "Rapture",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 7,
      "manaCost": 85,
      "school": "Conjuration [Mind-Affecting]",
      "castingTime": "1 action",
      "range": "Mediu1n (100 ft.+ 10 ft./level)",
      "duration": "4 rounds",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Mezmerizes up to 3 creatures simultaneously; Will save negates for each.",
      "recastTime": 4,
      "classes": [
        "enchanter",
        "necromancer"
      ],
      "description": "<p>As mesmerize, except that this spell is very difficult to resist: the Will save DC is 25 + ( the enchanter's Int 1nodifier x2) + ( the enchanter's Cha 1nodifier x2) + any addi- tional modifiers ( for magic i terns, etc.).</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "enchanter:7",
        "necromancer:7"
      ],
      "spellLine": "Mesmerize"
    }
  },
  {
    "name": "Reclaim Energy",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 1,
      "school": "Conjuration (Summoning)",
      "castingTime": "1 action",
      "range": "Medium ( 100 ft. + 10 fc./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Dismisses elemental pet and recovers mana equal to 50% of the pet's remaining HP.",
      "recastTime": 0,
      "classes": [
        "magician",
        "necromancer"
      ],
      "description": "<p>With a spoken word and the wave of a hand, the caster dismisses a summoned companion and recovers half of the mana cost (rounded down) originally spent to summon the creature.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "magician:1",
        "necromancer:1"
      ],
      "spellLine": "Reclaim energ;y"
    }
  },
  {
    "name": "Regrowth",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 50,
      "school": "Alteration",
      "castingTime": "1 full round",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "10 rninutes",
      "damageFormula": "",
      "healFormula": "2d4",
      "savingThrow": "will",
      "effect": "Target heals 2d4 HP per round for the duration (HoT).",
      "recastTime": 0,
      "classes": [],
      "description": "<p>As regeneration, except this spell grants fast healing (3). Regrowth OF bah</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [],
      "spellLine": "Regeneration"
    }
  },
  {
    "name": "Regrowth of the Grove",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 100,
      "school": "Alteration (Healing)",
      "castingTime": "1 full round",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "10 minutes",
      "damageFormula": "",
      "healFormula": "3d6",
      "savingThrow": "will",
      "effect": "All allies in 20 ft heal 3d6 HP per round for 3 rounds (group HoT).",
      "recastTime": 1,
      "classes": [
        "druid"
      ],
      "description": "<p>T arget: Up to six targets, no two more than 20 ft. apart As regrowth, except this spell affects up to six targets. The skin of the targets assumes a greenish tint as the powerful regenera- tive forces of nature are set to work within them.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "druid:8"
      ],
      "spellLine": "Regeneration"
    }
  },
  {
    "name": "Renew Elements",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 4,
      "school": "Alteration (Healing)",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "This spell heals the caster's elemental pet of 3d 10 hit points of damage.",
      "recastTime": 1,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:3"
      ],
      "spellLine": "Renew elements",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>This spell heals the caster's elemental pet of 3d 10 hit points of damage.</p>"
    }
  },
  {
    "name": "Renew Summoning",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 17,
      "school": "Alteration (Healing)",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "As renew elements, except this spell heals (5d 1 O+ 2 )x2 hit points.",
      "recastTime": 1,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:6"
      ],
      "spellLine": "Renew elements",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As renew elements, except this spell heals (5d 1 O+ 2 )x2 hit points.</p>"
    }
  },
  {
    "name": "Resistant Skin",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 0,
      "school": "Abjuration [Disease, Poison]",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "10 minutes/level (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "EverQuestRole-PlayingGamePlayer'sHanbbook By 1nagically fortifying the skin, this spell grants a bonus of+ 1 to saves against disease and poison as well as granting a bonus to disease and poison resistance (6).",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:4"
      ],
      "spellLine": "Resistant skin",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>EverQuestRole-PlayingGamePlayer'sHanbbook By 1nagically fortifying the skin, this spell grants a bonus of+ 1 to saves against disease and poison as well as granting a bonus to disease and poison resistance (6).</p>"
    }
  },
  {
    "name": "Resurrection",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 7,
      "manaCost": 117,
      "school": "Alteration",
      "castingTime": "1 full round",
      "range": "T ouch",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Raises a dead creature back to life, restoring 50% of lost XP.",
      "recastTime": 3,
      "classes": [
        "cleric"
      ],
      "description": "<p>As reanimation, except this spell also re- stores 90% of the experience points lost as a result of dying.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "cleric:7"
      ],
      "spellLine": "Reanimation"
    }
  },
  {
    "name": "Ro Gate",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 7,
      "manaCost": 25,
      "school": "Alteration [T eleport]",
      "castingTime": "1 full round",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "This spell transports the caster to the nearly buried pyramid in the northern part of the Ro Desert.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:7"
      ],
      "spellLine": "Gate",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>This spell transports the caster to the nearly buried pyramid in the northern part of the Ro Desert.</p>"
    }
  },
  {
    "name": "Ro Portal",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 50,
      "school": "Alteration [T eleport]",
      "castingTime": "3 full rounds",
      "range": "C lose (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "than 20 ft. apart The caster transports up to six targets of her choice within range to the sand-swept pyramid in the northern reaches of the Ro Desert.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:10"
      ],
      "spellLine": "Gate",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>than 20 ft. apart The caster transports up to six targets of her choice within range to the sand-swept pyramid in the northern reaches of the Ro Desert.</p>"
    }
  },
  {
    "name": "Ro's Smoldering Creep",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 40,
      "school": "Evocation",
      "castingTime": "1 action",
      "range": "80 ft",
      "duration": "1 min/level",
      "damageFormula": "2d8",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Creates a 10 ft patch of smoldering ground. Any creature entering or ending their turn there takes 2d8 fire damage.",
      "recastTime": 0,
      "classes": [
        "ranger"
      ],
      "description": "<p>Ro's own fire creeps along the ground in a designated area, punishing any who dare walk through it.</p>",
      "deliveryType": "attack",
      "attackMode": "ranged",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "ranger:6"
      ]
    }
  },
  {
    "name": "Rod of Mystical Transvergence",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 13,
      "manaCost": 67,
      "school": "Conjuration (Creation)",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "24 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Creates a rod of mystical transvergence equivalent to a +2 light mace with 3 uses of improved mana conversion.",
      "recastTime": 1,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:13"
      ],
      "spellLine": "Modulating rod",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As modulating rod, except the rod of mystical transvergence is equivalent to a +2 light mace and holds 3 uses of improved mana conversion, allowing the caster to gain 35 mana for an expenditure of 50 hit points.</p>"
    }
  },
  {
    "name": "Root",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 22,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "100 ft",
      "duration": "1 min/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "Immobilizes target; Reflex save or held in place.",
      "recastTime": 0,
      "classes": [
        "magician",
        "wizard"
      ],
      "description": "<p>Crackling magical bonds slam into the target, rooting them to the ground.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "varies"
    }
  },
  {
    "name": "Root (Druid)",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 12,
      "school": "Alteration [Magic]",
      "castingTime": "1 action",
      "range": "Medium (100 ft. + 10 ft./level)",
      "duration": "3d10 rounds (see text)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "Target is rooted in place and cannot move. Save: Fortitude negates.",
      "recastTime": 1,
      "classes": [
        "druid",
        "ranger",
        "wizard"
      ],
      "description": "<p>As grasping roots, except this spell deals (5dlO)x2 points of magic damage, no save. This spell is also much easier to cast than most other spells in the root line, so the caster gains a+ 2 bonus to any Channeling check when casting engorging roots. EngulFing t&gt;arl&lt;.ness</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "druid:4",
        "ranger:4",
        "wizard:2"
      ],
      "spellLine": "Root"
    }
  },
  {
    "name": "Rune",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 25,
      "school": "Abjuration",
      "castingTime": "Free action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "1 minute/level (see text)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "As rune, but this spell grants a buff bonus of 8dl0 tetnporary hit points and can be cast as a free action. In addition, no 1nate- rial component is required.",
      "recastTime": 6,
      "classes": [
        "enchanter"
      ],
      "classLevels": [
        "enchanter:2"
      ],
      "spellLine": "Rune",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As rune, but this spell grants a buff bonus of 8dl0 tetnporary hit points and can be cast as a free action. In addition, no 1nate- rial component is required.</p>"
    }
  },
  {
    "name": "Rune I",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 8,
      "school": "Abjuration",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "10 minutes/level (see text)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Grants 6d6 temporary hit points. Temporary hit points from the rune line do not stack with other buff bonus hit points, and a creature protected by rune cannot be affected by lifetap-line spells.",
      "recastTime": 0,
      "classes": [
        "enchanter"
      ],
      "description": "<p>A glowing runic ward absorbs incoming damage, protecting the target until the rune's capacity is exhausted.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates"
    }
  },
  {
    "name": "Sanctuary",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 4,
      "school": "Divination",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "1 day",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Target cannot be attacked unless they attack first.",
      "recastTime": 1,
      "classes": [
        "cleric"
      ],
      "description": "<p>tion, with a radius of 25 ft. + 5 ft./2 levels (see text) As sentinel, except this spell alerts the caster only to undead who pass through the warded area. This spell also lasts a great deal longer than sentinel.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "cleric:5"
      ],
      "spellLine": "Sentinel"
    }
  },
  {
    "name": "Scars of Sigil",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 13,
      "manaCost": 30,
      "school": "Evocation [Fire]",
      "castingTime": "1 action",
      "range": "Long ( 400 ft. + 40 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "As flame bolt, except this spell deals (3d6+ 1)x10 points of fire da1nage.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:13"
      ],
      "spellLine": "Flame bolt",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As flame bolt, except this spell deals (3d6+ 1)x10 points of fire da1nage.</p>"
    }
  },
  {
    "name": "Scintillation",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 13,
      "manaCost": 145,
      "school": "Evocation [Fire]",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "As fire flux, except this spell l1as a greater area and deals ( 2d 1 O+ 3 )x 10 points of fire damage. Scirocco Evocation [Fire]",
      "recastTime": 1,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:13"
      ],
      "spellLine": "Fire flux",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As fire flux, except this spell l1as a greater area and deals ( 2d 1 O+ 3 )x 10 points of fire damage. Scirocco Evocation [Fire]</p>"
    }
  },
  {
    "name": "Scirocco",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 14,
      "manaCost": 0,
      "school": "",
      "castingTime": "1 action",
      "range": "",
      "duration": "",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Rain of ( 4d6 )x 10 da1nage (half fire, half",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:14"
      ],
      "spellLine": "Scirocco",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Rain of ( 4d6 )x 10 da1nage (half fire, half</p>"
    }
  },
  {
    "name": "See Invisible",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 6,
      "school": "Divination",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "10 minutes/level (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Grants the target the ability to see invisible, astral, and ethereal creatures or objects.",
      "recastTime": 0,
      "classes": [
        "magician",
        "wizard"
      ],
      "classLevels": [
        "magician:5",
        "wizard:2"
      ],
      "spellLine": "See invisible",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As see invisible, except this spell affects only the caster. Deadeye also grants the caster infravision.</p>"
    }
  },
  {
    "name": "Seeking Flame of Seukor",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 15,
      "manaCost": 0,
      "school": "",
      "castingTime": "1 action",
      "range": "",
      "duration": "",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "(3d10+4 )xlO fire damage.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:15"
      ],
      "spellLine": "Seeking Flame of Seukor",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>(3d10+4 )xlO fire damage.</p>"
    }
  },
  {
    "name": "Selo's Accelerating Chorus",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 0,
      "school": "Bard Song",
      "castingTime": "1 action (song)",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Performance + 2d4 minutes",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Grants +20 ft movement speed to all allies within range while song is maintained.",
      "recastTime": 0,
      "classes": [
        "bard"
      ],
      "description": "<p>Song Line: Selo' s accelerando Instrument: Percussion (Dex; instrument required) Selo' s accelerating chorus is identical to Selo' s accelerando except that a percussion instru- ment is required to play the chorus, and the song's effect last for 2d4 minutes after the performance ends. Like Selo' s accelerando, this song 1nakes an ungodly racket when played.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "bard:2"
      ],
      "spellLine": "S€Lo's Acc€L€rating Chorus"
    }
  },
  {
    "name": "Sense Animal",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 1,
      "school": "Divination",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "The caster senses the direction to the nearest animal, beast, or vermin.",
      "recastTime": 0,
      "classes": [
        "druid"
      ],
      "classLevels": [
        "druid:1"
      ],
      "description": "<p>Caster senses direction to nearest animal, beast, or vermin.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "saveDC": ""
    }
  },
  {
    "name": "Sense Summoned",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 1,
      "school": "Divination",
      "castingTime": "1 action",
      "range": "Long ( 400 ft. + 40 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "radius of 400 ft. + 40 ft./level As sense animal, except the caster learns the direction and nature of the nearest summoned creature within range. 313",
      "recastTime": 0,
      "classes": [
        "magician",
        "wizard"
      ],
      "classLevels": [
        "magician:2",
        "wizard:3"
      ],
      "spellLine": "Sense animal",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>radius of 400 ft. + 40 ft./level As sense animal, except the caster learns the direction and nature of the nearest summoned creature within range. 313</p>"
    }
  },
  {
    "name": "Sense Undead",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 5,
      "school": "Divination",
      "castingTime": "1 action",
      "range": "60 ft",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Detects all undead creatures within range.",
      "recastTime": 0,
      "classes": [
        "paladin"
      ],
      "description": "<p>A divine sense sweeps the area, pinpointing the cold presence of the undead.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "paladin:1"
      ]
    }
  },
  {
    "name": "Servant of Bones",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 15,
      "manaCost": 88,
      "school": "Conjuration (Sum1noning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Summons a powerful skeleton champion (CR 10) that serves permanently until destroyed.",
      "recastTime": 0,
      "classes": [
        "necromancer"
      ],
      "description": "<p>Effect: One su1n1noned creature As cavorting bon.es, except the caster su1n- n1ons a type 14 skeleton. Material Components: 2 finger-sized pieces of bone.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "necromancer:15"
      ],
      "spellLine": "Cavorting bones"
    }
  },
  {
    "name": "Sha's Ferocity",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 7,
      "manaCost": 58,
      "school": "Alteration",
      "castingTime": "1 full round",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "1 minute/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "+4 STR, +4 DEX, +2 additional attacks per round, and +20 ft movement speed.",
      "recastTime": 5,
      "classes": [
        "shaman"
      ],
      "description": "<p>As Yekan' s quickening, except this spell grants a + 13 bonus to Strength, a + 10 natural armor bonus to AC, a +6 attack bonus, and haste ( 8), which grants a+ 3 haste bonus to AC, alter- nating 1 or 2 extra attack actions every second round, and -1 weapon delay.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "shaman:7"
      ],
      "spellLine": "Yekan's quickening"
    }
  },
  {
    "name": "Sha's Legacy",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 65,
      "school": "Conjuration",
      "castingTime": "1 action",
      "range": "60 ft",
      "duration": "Instantaneous",
      "damageFormula": "6d6",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Summons a spirit swarm dealing 6d6 damage to the primary target and nearby enemies.",
      "recastTime": 0,
      "classes": [
        "shaman"
      ],
      "description": "<p>The shaman calls upon the spirit of the legendary Sha, unleashing a devastating swarm of ancestral spirits.</p>",
      "deliveryType": "attack",
      "attackMode": "ranged",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "shaman:8"
      ]
    }
  },
  {
    "name": "Shadow Step",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 2,
      "school": "Alteration [Teleportation]",
      "castingTime": "Free action",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "As fade, except the distance teleported is (ldlOO)x5 feet.",
      "recastTime": 1,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:3"
      ],
      "spellLine": "Gate",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As fade, except the distance teleported is (ldlOO)x5 feet.</p>"
    }
  },
  {
    "name": "Shallow Breath",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 42,
      "school": "Alteration [Magic]",
      "castingTime": "1 full round",
      "range": "Medium ( 100 ft. + 10 ft./level)",
      "duration": "20 rounds",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Reduces target's endurance/stamina regeneration by half; Will save negates.",
      "recastTime": 0,
      "classes": [
        "enchanter"
      ],
      "description": "<p>This spell i1nmediately inflicts 6d6 points of magic damage upon the target and inflicts an additional 2d8 points of 1nagic damage each round for the duration of the spell. All damage is halved with an initial Fortitude save, which also negates the additio11al effects of the spell: a-7 penalty to Strength and a-7 penalty to Dexterity.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "enchanter:1"
      ],
      "spellLine": "Shallow breath"
    }
  },
  {
    "name": "Shield of Fire",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 75,
      "school": "Abjuration [Fire]",
      "castingTime": "1 full round",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "1 round/level (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "than 20 ft. apart As shield of fire, except this spell grants a buff bonus of + 3 on saves against attacks with the [fire] descriptor, as well as fire resistance ( 14) and damage shield ( 8) for up to six targets of the caster's choice within range.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:3"
      ],
      "spellLine": "Shield of fire",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>than 20 ft. apart As shield of fire, except this spell grants a buff bonus of + 3 on saves against attacks with the [fire] descriptor, as well as fire resistance ( 14) and damage shield ( 8) for up to six targets of the caster's choice within range.</p>"
    }
  },
  {
    "name": "Shield of Flame",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 10,
      "school": "Abjuration [Fire]",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "2 minutes (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "As shield of fire, except this spell grants a buff bonus of + 1 on saves against attacks with the [fire] descriptor, as well as fire resistance ( 6) and da1nage shield (3 ).",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:6"
      ],
      "spellLine": "Shield of fire",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As shield of fire, except this spell grants a buff bonus of + 1 on saves against attacks with the [fire] descriptor, as well as fire resistance ( 6) and da1nage shield (3 ).</p>"
    }
  },
  {
    "name": "Shield of Lava",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 12,
      "manaCost": 20,
      "school": "Abjuration [Fire, see text]",
      "castingTime": "1 full round",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "5 minutes (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "As shield of fire, except this spell grants a buff bonus of + 2 on saves against attacks with the [fire] descriptor, as well as fire resistance (10) and damage shield (6).",
      "recastTime": 1,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:12"
      ],
      "spellLine": "Shield of fire",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As shield of fire, except this spell grants a buff bonus of + 2 on saves against attacks with the [fire] descriptor, as well as fire resistance (10) and damage shield (6).</p>"
    }
  },
  {
    "name": "Shield of the Magi",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 13,
      "manaCost": 50,
      "school": "Abjuration",
      "castingTime": "2 full rounds",
      "range": "Personal",
      "duration": "1 day (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "As minor shielding, except this spell grants a +8 armor bonus to AC, a buff bonus of +60 hit points, magic resistance ( 10), and a+ 3 bonus on saves against magic attacks. 316 -",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:13"
      ],
      "spellLine": "Minor shielding",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As minor shielding, except this spell grants a +8 armor bonus to AC, a buff bonus of +60 hit points, magic resistance ( 10), and a+ 3 bonus on saves against magic attacks. 316 -</p>"
    }
  },
  {
    "name": "Shielding",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 8,
      "school": "Abjuration [Magic]",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "10 minutes/level (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "As minor shielding, except this spell grants a +4 armor bonus to AC, a buff bonus of + 12 hit points, magic resistance (6), and a+ 1 bonus on saves against magic attacks.",
      "recastTime": 0,
      "classes": [
        "magician",
        "wizard"
      ],
      "classLevels": [
        "magician:5",
        "wizard:5"
      ],
      "spellLine": "Minor shielding",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As minor shielding, except this spell grants a +4 armor bonus to AC, a buff bonus of + 12 hit points, magic resistance (6), and a+ 1 bonus on saves against magic attacks.</p>"
    }
  },
  {
    "name": "Shieldskin",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 14,
      "school": "Abjuration",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "30 minutes/level (see text)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Bolsters the caster with 6d6 temporary hit points. Damage is taken from these temporary hit points first, and they cannot be healed.",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "description": "<p>As shieldskin, except this spell grants a buff bonus of 7d10 temporary hit points. Material Components: A bloodstone.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "wizard:5"
      ],
      "spellLine": "Shieldskin"
    }
  },
  {
    "name": "Shifting Sight",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 5,
      "school": "Divination",
      "castingTime": "1 action",
      "range": "Long ( 400 ft. + 40 ft./level)",
      "duration": "Concentration (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "As bind sight, except this spell also grants the caster (not the host subject) infra vision.",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:10"
      ],
      "spellLine": "Bind sight",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As bind sight, except this spell also grants the caster (not the host subject) infra vision.</p>"
    }
  },
  {
    "name": "Shock of Blades",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 5,
      "school": "Conjuration (Summoning) [Magic]",
      "castingTime": "1 action",
      "range": "Medium ( 100 ft. + 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "3d10",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "Deals 3d10 slashing damage; Reflex save halves.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "description": "<p>The target of this spell is lacerated by a stream of magical shards that deal 3d8 points of magic slashing damage (Ref half) and, on a failed save, the target is also interrupted. (An interrupted creature loses one action and cannot cast spells in its next tum.)</p>",
      "deliveryType": "attack",
      "attackMode": "ranged",
      "attackBonus": 0,
      "saveEffect": "half",
      "classLevels": [
        "magician:3"
      ],
      "spellLine": "Shock of blades"
    }
  },
  {
    "name": "Shock of Fiery Blades",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 15,
      "manaCost": 56,
      "school": "Conjuration (Summoning) [Fire, Magic]",
      "castingTime": "1 full round",
      "range": "Medium ( 100 ft. + 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "As shock of blades, except this spell con- jures flaming shards that deal (3d6 )x 10 points of fire damage and (3d6)xl0points of magic damage. Thus, a creature im- mune to either fire or magic still takes half damage (or one-quarter with a successful Reflex save).",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:15"
      ],
      "spellLine": "Shock of blades",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As shock of blades, except this spell con- jures flaming shards that deal (3d6 )x 10 points of fire damage and (3d6)xl0points of magic damage. Thus, a creature im- mune to either fire or magic still takes half damage (or one-quarter with a successful Reflex save).</p>"
    }
  },
  {
    "name": "Shock of Fire",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 42,
      "school": "Evocation [Fire]",
      "castingTime": "1 action",
      "range": "Mediurn ( 100 ft. + 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "As shock of fire, except this spell deals (4d6)x10 points of fire damage. Conglaciation OF",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:2"
      ],
      "spellLine": "Shock of fire",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As shock of fire, except this spell deals (4d6)x10 points of fire damage. Conglaciation OF</p>"
    }
  },
  {
    "name": "Shock of Flame",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 12,
      "school": "Evocation [Fire]",
      "castingTime": "1 action",
      "range": "Medium (100 ft. + 10 ft./level)",
      "duration": "Instantan.eous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "As bum, except this spell deals 6d 10 points of fire damage.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:5"
      ],
      "spellLine": "Bum",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As bum, except this spell deals 6d 10 points of fire damage.</p>"
    }
  },
  {
    "name": "Shock of Frost",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 36,
      "school": "Evocation [Cold]",
      "castingTime": "1 action",
      "range": "Medium ( I 00 ft. + 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "As shock of frost, except this spell deals (4d6+2)x10 points of cold damage.",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:1"
      ],
      "spellLine": "Shock of frost",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As shock of frost, except this spell deals (4d6+2)x10 points of cold damage.</p>"
    }
  },
  {
    "name": "Shock of Ice",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 5,
      "school": "Evocation [Cold]",
      "castingTime": "1 action",
      "range": "Medium (100 ft. + 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "1d8+1",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "A spike of magical ice deals 1d8+1 cold damage.",
      "recastTime": 1,
      "classes": [
        "wizard"
      ],
      "description": "<p>As shock of frost, except this spell deals 3d10 points of cold damage.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "half",
      "classLevels": [
        "wizard:3"
      ],
      "spellLine": "Shock of frost"
    }
  },
  {
    "name": "Shock of Lightning",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 88,
      "school": "Evocation [Electricity]",
      "castingTime": "1 full round",
      "range": "Medium (100 ft.+ 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "5d10",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "Deals 5d10 electrical damage; Reflex save halves.",
      "recastTime": 1,
      "classes": [
        "wizard"
      ],
      "description": "<p>As shock of lightning, except this spell deals (5d 10+4 )x 10 points of electrical damage. Elnericl&lt;.'s</p>",
      "deliveryType": "attack",
      "attackMode": "ranged",
      "attackBonus": 0,
      "saveEffect": "half",
      "classLevels": [
        "wizard:4"
      ],
      "spellLine": "Shock of lightning"
    }
  },
  {
    "name": "Shock of Spikes",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 7,
      "manaCost": 18,
      "school": "Conjuration (Summoning) [Magic]",
      "castingTime": "1 action",
      "range": "Medium (100 ft. + 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "As shock of blades, except this spell pro, duces a stream of pointed magical spikes tl1at deal (5d10)x2 points of magic pierc, ing damage.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:7"
      ],
      "spellLine": "Shock of blades",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As shock of blades, except this spell pro, duces a stream of pointed magical spikes tl1at deal (5d10)x2 points of magic pierc, ing damage.</p>"
    }
  },
  {
    "name": "Shock of Steel",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 14,
      "manaCost": 46,
      "school": "Conjuration (Summoning) [Magic]",
      "castingTime": "",
      "range": "Medium (100 ft.+ 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "Casting T ime: 1 action As shock of blades, except the target takes (5d6 )x 10 points of 1nagic slashing damage.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:14"
      ],
      "spellLine": "Shock of blades",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Casting T ime: 1 action As shock of blades, except the target takes (5d6 )x 10 points of 1nagic slashing damage.</p>"
    }
  },
  {
    "name": "Shock of Swords",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 11,
      "manaCost": 42,
      "school": "Conjuration (Summoning) [Magic)",
      "castingTime": "1 full round",
      "range": "Medium (100 ft. + 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "As shock of blades, except this spell has a slightly longer casting time but deals (2dl0+3)xl0 points of magic slashing damage.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:11"
      ],
      "spellLine": "Shock of blades",
      "saveEffect": "varies",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As shock of blades, except this spell has a slightly longer casting time but deals (2dl0+3)xl0 points of magic slashing damage.</p>"
    }
  },
  {
    "name": "Shock Spiral of Al'Kabor",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 0,
      "school": "",
      "castingTime": "1 action",
      "range": "",
      "duration": "",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "7d10 electrical damage in a 25,foot radius.",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:8"
      ],
      "spellLine": "Shock Spiral of Al'Kabor",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>7d10 electrical damage in a 25,foot radius.</p>"
    }
  },
  {
    "name": "Sight",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 4,
      "school": "Divination",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "1 minute/level (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "As glimpse, but with a longer duration, infravision, and greater telescopic range.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:6"
      ],
      "spellLine": "Glimpse",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As glimpse, except this spell has a longer duration and grants the caster infravision, and the caster can see one location up to 500 feet away. Further, this spell grants a +4 circumstance bonus on Spot checks made within 100 feet of the caster.</p>"
    }
  },
  {
    "name": "Siphon Strength",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 3,
      "school": "Necromancy",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "1 minute/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "Target suffers -3 Str and the caster gains +3 Str.",
      "recastTime": 0,
      "classes": [
        "necromancer"
      ],
      "classLevels": [
        "necromancer:1"
      ],
      "description": "<p>Target suffers -3 Str, caster gains +3 Str.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "saveDC": ""
    }
  },
  {
    "name": "Skin like Rock",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 10,
      "school": "Abjuration",
      "castingTime": "1 action",
      "range": "C lose (25 ft. + 5 ft./2 levels)",
      "duration": "10 minutes/level (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Target gains +3 natural AC bonus.",
      "recastTime": 2,
      "classes": [],
      "description": "<p>The target's skin hardens to the toughness of stone, deflecting physical blows.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": []
    }
  },
  {
    "name": "Skin Like Wood",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 3,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "10 minutes/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Grants the target +1 AC and +3 hit points.",
      "recastTime": 0,
      "classes": [
        "druid"
      ],
      "classLevels": [
        "druid:1"
      ],
      "description": "<p>Grants target +1 AC and +3 hit points.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "saveDC": ""
    }
  },
  {
    "name": "Slow",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 20,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "40 ft",
      "duration": "5 minutes",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "Target's attack speed is reduced by 25%. Save: Fortitude negates.",
      "recastTime": 0,
      "classes": [
        "shaman"
      ],
      "description": "<p>Warps time around the target, turning swift attacks into sluggish ones.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "shaman:3"
      ]
    }
  },
  {
    "name": "Smite Undead",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 15,
      "school": "Evocation",
      "castingTime": "1 action",
      "range": "60 ft",
      "duration": "Instantaneous",
      "damageFormula": "2d8",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Deals 2d8 divine damage to undead only; no effect on living targets.",
      "recastTime": 0,
      "classes": [
        "cleric",
        "paladin"
      ],
      "description": "<p>A bolt of pure divine energy sears through undead flesh and bone.</p>",
      "deliveryType": "attack",
      "attackMode": "ranged",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "cleric:2",
        "paladin:2"
      ]
    }
  },
  {
    "name": "Snare",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 21,
      "school": "Alteration [Magic]",
      "castingTime": "1 action",
      "range": "Mediu1n (100 ft.+ 10 ft./level).",
      "duration": "2 n1inutes",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "Target's movement speed is reduced by 50%. Save: Reflex negates.",
      "recastTime": 11,
      "classes": [
        "druid",
        "ranger"
      ],
      "description": "<p>than 20 ft. apart As snare, except this spell affects up to six creatures, no two of which may be more than 20 feet apart, and the target's rnove- n1ent rate is reduced to one-third 11or1nal. However, the Reflex save agait1st tl1is spell is standard (DC 23 + caster's Intelli- ge11ce 1nodifier).</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "druid:1",
        "ranger:3"
      ],
      "spellLine": "Snare"
    }
  },
  {
    "name": "Snarl of the Beast",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 18,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "Pet range",
      "duration": "3 min/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "+3 STR and +3 DEX to warder pet for the duration.",
      "recastTime": 0,
      "classes": [
        "beastlord"
      ],
      "description": "<p>The beastlord channels feral energy into their warder, sharpening its reflexes and strengthening its muscles.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "beastlord:3"
      ]
    }
  },
  {
    "name": "Spear of Warding",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 12,
      "school": "Conjuration (Sum1noning)",
      "castingTime": "1 full round",
      "range": "Close ( 25 ft. + 5 fc./2 levels)",
      "duration": "24 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: 1 spear of warding This spell creates a spear of warding, a magic bronze shortspear that, while held, also grants its wielder a + 1 bonus on saves against effects with the [cold] or [fire] descriptors, as well as a bonus of cold resistance (2) and fire resistance (2). The spear is treated as + 1 magic weapon for the purpose of determining its effects on creatures with damage reduction, although the spear does not actually grant a bonus to the wielder's attack or damage rolls. As a created item, the spear of warding vanishes after 24 hours. Its temporary na, cure is apparent to anyone who looks at it.",
      "recastTime": 1,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:6"
      ],
      "spellLine": "Staff of tracing",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: 1 spear of warding This spell creates a spear of warding, a magic bronze shortspear that, while held, also grants its wielder a + 1 bonus on saves against effects with the [cold] or [fire] descriptors, as well as a bonus of cold resistance (2) and fire resistance (2). The spear is treated as + 1 magic weapon for the purpose of determining its effects on creatures with damage reduction, although the spear does not actually grant a bonus to the wielder's attack or damage rolls. As a created item, the spear of warding vanishes after 24 hours. Its temporary na, cure is apparent to anyone who looks at it.</p>"
    }
  },
  {
    "name": "Sphere of Light",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 2,
      "school": "Conjuration (Summoning) [Light]",
      "castingTime": "1 action",
      "range": "5 f eec",
      "duration": "Up to 12 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: 20,fc.,radius light - - ------==----- The caster summons a fist-sized globe of dweomer-glow tl1at casts light out to a 20- foot radius. The globe will never stray farther from the caster tl1an 5 feet, but within that area, the caster can direct the globe's location. The globe does not shed light in an area of magical darkness and it disappears when the sun next rises or sets.",
      "recastTime": 1,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:1"
      ],
      "spellLine": "Sphere of light",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: 20,fc.,radius light - - ------==----- The caster summons a fist-sized globe of dweomer-glow tl1at casts light out to a 20- foot radius. The globe will never stray farther from the caster tl1an 5 feet, but within that area, the caster can direct the globe's location. The globe does not shed light in an area of magical darkness and it disappears when the sun next rises or sets.</p>"
    }
  },
  {
    "name": "Spirit of Bear",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 13,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "10 minutes/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "+4 STR and +30 maximum HP for the duration.",
      "recastTime": 0,
      "classes": [
        "beastlord",
        "shaman"
      ],
      "description": "<p>less) As spirit of bear, except this spell grants a +6 buff bonus to Constitution.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "beastlord:5",
        "shaman:5"
      ],
      "spellLine": "Spirit of bear"
    }
  },
  {
    "name": "Spirit of Ox",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 10,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "C lose (25 ft. + 5 ft./2 levels)",
      "duration": "10 minutes/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "+4 STA, +20 maximum HP, and +2 to Fortitude saves.",
      "recastTime": 0,
      "classes": [
        "shaman"
      ],
      "description": "<p>less) As spirit of bear, except this spell grants a +6 buff bonus to Constitution.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "shaman:5"
      ],
      "spellLine": "Spirit of bear"
    }
  },
  {
    "name": "Spirit of Wolf",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 7,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "1 minute/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "Target's movement speed is doubled for the duration.",
      "recastTime": 0,
      "classes": [
        "beastlord",
        "druid",
        "shaman"
      ],
      "description": "<p>As spirit of wolf, except this spell may be cast only upon the caster's summoned elemental pet, allowing the pet to move 20% faster than its base speed (in any 1nedium).</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "varies",
      "classLevels": [
        "beastlord:5",
        "druid:5",
        "shaman:5"
      ],
      "spellLine": "Spirit of wolf"
    }
  },
  {
    "name": "Spirit Pouch",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 20,
      "school": "Conjuration",
      "castingTime": "1 full round",
      "range": "Personal",
      "duration": "24 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "+2 WIS and +10 maximum mana for the duration.",
      "recastTime": 1,
      "classes": [
        "beastlord",
        "shaman"
      ],
      "description": "<p>Effect: 1 pocket As dimensional pocket, except this spell creates a container equivalent in size to a large bag and the caster can only target himself.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "beastlord:1",
        "shaman:1"
      ],
      "spellLine": "Spirit pouch"
    }
  },
  {
    "name": "Spirit Quickening",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 8,
      "school": "Alteration",
      "castingTime": "1 full round",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "1 minute/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Target gains +30 ft movement speed and +2 attacks per round (haste).",
      "recastTime": 2,
      "classes": [
        "shaman"
      ],
      "description": "<p>A shaman may cast this spell only on his wolf spirit pet. For the duration of the spell, the pet gains the following: a +6 bonus to Strength, a + 3 bonus to Armor C lass, and haste (3 ), which grants a + 1 haste bonus to AC, 1 extra attack action every third round, and -1 weapon delay.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "shaman:6"
      ],
      "spellLine": "Spirit quickening"
    }
  },
  {
    "name": "Splurt",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 7,
      "manaCost": 40,
      "school": "Alteration [Magic]",
      "castingTime": "1 action",
      "range": "Medium ( 100 ft. + 10 ft./level)",
      "duration": "16 rounds",
      "damageFormula": "1",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "Starts at 1 damage/round and increases by 1 each round to a maximum of 20 damage/round. Lasts until dispelled or target dies.",
      "recastTime": 0,
      "classes": [
        "necromancer",
        "shadowknight"
      ],
      "description": "<p>This spell sends necro1nantic energies surg, ing uncontrollably through the target, inflicting a random but generally increas, ing a1nount of 1nagic damage upon the target. Moving out of range does not help - once the spell has taken effect, its progress can be stopped only by dispelling or similar means. The target takes ld4 points of magic da1nage in the round the spell is cast, but the da1nage escalates every round as shown on the following chart: Round 1 Magic Damage 1d4 2 3 4 5 6 7 8 9 10 1d6 1d8 ldlO 1d12 1d20 2d12 3d10 4d8 4d10 11 12 13 14 15 16 6d8 5d10 6d10 7d10 8d10 10d10 An initial Fortitude save halves the damage suffered during each subsequent round of the spell's duration.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "half",
      "classLevels": [
        "necromancer:7",
        "shadowknight:7"
      ],
      "spellLine": "Splurt"
    }
  },
  {
    "name": "Spook the Dead",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 2,
      "school": "Alteration [Compulsion, Fear]",
      "castingTime": "1 action",
      "range": "Medium (100 ft. + 10 ft./level)",
      "duration": "ld4 rounds",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Causes undead to flee in terror; Will save negates.",
      "recastTime": 1,
      "classes": [
        "shadowknight"
      ],
      "description": "<p>Paradoxically, the Shadow Knight uses necromantic energy to terrify undead, sending them fleeing.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "shadowknight:2"
      ]
    }
  },
  {
    "name": "Staff of Runes",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 7,
      "manaCost": 10,
      "school": "Conjuration (Creation)",
      "castingTime": "1 full round",
      "range": "Personal",
      "duration": "24 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: 1 staff of runes This spell creates a staff of runes, a +1 quarterstaff that also holds one charge of cancel magic, which the wielder may acti- vate with a com1nand word ( use the caster's level for roll determining the effective- ness of the cancel magic). As a created item, the staff of runes vanishes after 24 hours. Its te1nporary na- ture is apparent to anyone who looks at it.",
      "recastTime": 1,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:7"
      ],
      "spellLine": "Staff of tracing",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: 1 staff of runes This spell creates a staff of runes, a +1 quarterstaff that also holds one charge of cancel magic, which the wielder may acti- vate with a com1nand word ( use the caster's level for roll determining the effective- ness of the cancel magic). As a created item, the staff of runes vanishes after 24 hours. Its te1nporary na- ture is apparent to anyone who looks at it.</p>"
    }
  },
  {
    "name": "Staff of Symbols",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 13,
      "school": "Conjuration (Creation)",
      "castingTime": "1 full round",
      "range": "Personal",
      "duration": "24 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: 1 staff of symbols TI1is spell creates a staff of symbols, a + 1 quarterstaff that also holds 4 charges of see invisible, which the wielder may activate with a com1nand word. As a created ite1n, the staff of symbols van- ishes after 24 hours. Its te1nporary nature is apparent to anyone who looks at it.",
      "recastTime": 1,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:9"
      ],
      "spellLine": "Staff of tracing",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: 1 staff of symbols TI1is spell creates a staff of symbols, a + 1 quarterstaff that also holds 4 charges of see invisible, which the wielder may activate with a com1nand word. As a created ite1n, the staff of symbols van- ishes after 24 hours. Its te1nporary nature is apparent to anyone who looks at it.</p>"
    }
  },
  {
    "name": "Staff of Tracing",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 12,
      "school": "Conjuration (Sum1noning)",
      "castingTime": "1 full round",
      "range": "Close ( 25 ft. + 5 fc./2 levels)",
      "duration": "24 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: 1 spear of warding This spell creates a spear of warding, a magic bronze shortspear that, while held, also grants its wielder a + 1 bonus on saves against effects with the [cold] or [fire] descriptors, as well as a bonus of cold resistance (2) and fire resistance (2). The spear is treated as + 1 magic weapon for the purpose of determining its effects on creatures with damage reduction, although the spear does not actually grant a bonus to the wielder's attack or damage rolls. As a created item, the spear of warding vanishes after 24 hours. Its temporary na, cure is apparent to anyone who looks at it.",
      "recastTime": 1,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:3"
      ],
      "spellLine": "Staff of tracing",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: 1 spear of warding This spell creates a spear of warding, a magic bronze shortspear that, while held, also grants its wielder a + 1 bonus on saves against effects with the [cold] or [fire] descriptors, as well as a bonus of cold resistance (2) and fire resistance (2). The spear is treated as + 1 magic weapon for the purpose of determining its effects on creatures with damage reduction, although the spear does not actually grant a bonus to the wielder's attack or damage rolls. As a created item, the spear of warding vanishes after 24 hours. Its temporary na, cure is apparent to anyone who looks at it.</p>"
    }
  },
  {
    "name": "Staff of Warding",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 7,
      "school": "Conjuration (Creation)",
      "castingTime": "1 full round",
      "range": "Personal",
      "duration": "24 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: 1 staff of warding This spell creates a staff of warding, a magic quarterstaff that holds 5 charges of the gaze spell, which the wielder may activate with a command word. As a created item, the staff of warding vanishes after 24 hours. Its temporary na- ture is apparent to anyone who looks at it. •",
      "recastTime": 1,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:5"
      ],
      "spellLine": "Staff of tracing",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: 1 staff of warding This spell creates a staff of warding, a magic quarterstaff that holds 5 charges of the gaze spell, which the wielder may activate with a command word. As a created item, the staff of warding vanishes after 24 hours. Its temporary na- ture is apparent to anyone who looks at it. •</p>"
    }
  },
  {
    "name": "Steelskin",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 25,
      "school": "Abjuration",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "30 minutes/level (see text)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "As shieldskin, except this spell grants a buff bonus of (6d10)x2 temporary hit points. Material Components: A jasper.",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:9"
      ],
      "spellLine": "Shieldskin",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As shieldskin, except this spell grants a buff bonus of (6d10)x2 temporary hit points. Material Components: A jasper.</p>"
    }
  },
  {
    "name": "Stinging Swarm",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 17,
      "school": "Conjuration (Summoning) [Magic]",
      "castingTime": "1 action",
      "range": "Medium ( 100 ft. + 10 ft./level)",
      "duration": "11 rounds",
      "damageFormula": "1d4",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "A swarm of conjured insects deals 1d4 damage per round; Fort save each round negates.",
      "recastTime": 0,
      "classes": [],
      "description": "<p>As stinging swarm, except the swarm deals 1d10 points of magic damage each round for 11 rounds.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "half",
      "classLevels": [],
      "spellLine": "Stinging swarm"
    }
  },
  {
    "name": "Strangle",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 36,
      "school": "Necromancy",
      "castingTime": "1 action",
      "range": "60 ft",
      "duration": "1 min/level",
      "damageFormula": "1d8",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "A stacking curse that deals 1d8 damage per round; can stack up to 3 times on the same target. Fort save negates each application.",
      "recastTime": 0,
      "classes": [
        "necromancer"
      ],
      "description": "<p>Invisible hands of death close around the target's throat, dealing persistent necrotic damage.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "necromancer:5"
      ]
    }
  },
  {
    "name": "Stun",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 33,
      "school": "Evocation [Force, Magic]",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "Target is stunned and unable to act for 1 round. Save: Fortitude negates.",
      "recastTime": 4,
      "classes": [
        "cleric",
        "paladin"
      ],
      "description": "<p>As stun, except this spell deals (6dlO)x2 points of magic damage, and, if the save is failed, the target is stunned for 1 d2 rounds.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "half",
      "classLevels": [
        "cleric:2",
        "paladin:2"
      ],
      "spellLine": "Stun"
    }
  },
  {
    "name": "Succor",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 50,
      "school": "Alteration [Teleporcacion]",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 fc./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Transports the entire party to a safe location within the current zone.",
      "recastTime": 1,
      "classes": [
        "druid"
      ],
      "description": "<p>T arget: Up to six creatures, no two more than 20 ft. apart f:.s egress, except this spell transports up to six targets.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "druid:5"
      ],
      "spellLine": "Egress"
    }
  },
  {
    "name": "Summon Arrows",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 10,
      "school": "Conjuration (Creation/Summoning)",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: Pouch and 60 shurikens of Quellious This spell creates a small pouch containing 60 shurikens of Quellious, which are + 1 shurikens. Further, the pouch of Quellious itself grants a + 2 enhancement bonus to the bearer's Dexterity as long as it is held. As created items, the pouch and shurikens vanish after 24 hours. Their temporary nature is apparent to anyone who looks at them.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:6"
      ],
      "spellLine": "Summon arrows",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: Pouch and 60 shurikens of Quellious This spell creates a small pouch containing 60 shurikens of Quellious, which are + 1 shurikens. Further, the pouch of Quellious itself grants a + 2 enhancement bonus to the bearer's Dexterity as long as it is held. As created items, the pouch and shurikens vanish after 24 hours. Their temporary nature is apparent to anyone who looks at them.</p>"
    }
  },
  {
    "name": "Summon Bandages",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 2,
      "school": "Conjuration (Creation)",
      "castingTime": "1 fu ll round",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "24 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: 20 arrows This spell creates 20 arrows. The arrows can be for a longbow or shorcbow, as the caster decides, but all the created arrows are of the same type. The arrows are treated as + 1 magic weapons for the purpose of decennil1ing their effects on creatures with damage reduction, although the arrows do not actually grant a bonus to the archer's attack or damage rolls. As created items, the arrows vanish after 24 hours. Their temporary nature is apparent to anyone who looks at them. Summon Bant>ages Conjuration (Creation) Effect: 1 bandage + 1 bandage/level This spell creates bandages that can be used to bind wounds. The caster can cre- ate one bandage plus one additional bandage per caster level. The bandages appear in the caster's hand. Unused bandages degrade after 24 hours. Their temporary nature is apparent to anyone who looks at che1n. However, wounds that have been treated with cre- ated bandages do not reopen.",
      "recastTime": 1,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:2"
      ],
      "spellLine": "Summon bandages",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: 20 arrows This spell creates 20 arrows. The arrows can be for a longbow or shorcbow, as the caster decides, but all the created arrows are of the same type. The arrows are treated as + 1 magic weapons for the purpose of decennil1ing their effects on creatures with damage reduction, although the arrows do not actually grant a bonus to the archer's attack or damage rolls. As created items, the arrows vanish after 24 hours. Their temporary nature is apparent to anyone who looks at them. Summon Bant&gt;ages Conjuration (Creation) Effect: 1 bandage + 1 bandage/level This spell creates bandages that can be used to bind wounds. The caster can cre- ate one bandage plus one additional bandage per caster level. The bandages appear in the caster's hand. Unused bandages degrade after 24 hours. Their temporary nature is apparent to anyone who looks at che1n. However, wounds that have been treated with cre- ated bandages do not reopen.</p>"
    }
  },
  {
    "name": "Summon Coldstone",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 12,
      "school": "Conjuration (Creation)",
      "castingTime": "2 full rounds",
      "range": "C lose (25 ft. + 5 ft./2 levels)",
      "duration": "24 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: 1 coldstone As heatstone, except the coldstone casts a dim blue light and grants its possessor ultravision to a range of 120 feet rather than infravision. The light shed by the coldstone is equivalent to that of a candle (5-foot-radius illu1ninacion). The magi- cian may give a coldstone to another creature.",
      "recastTime": 2,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:8"
      ],
      "spellLine": "Summon heatstone",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: 1 coldstone As heatstone, except the coldstone casts a dim blue light and grants its possessor ultravision to a range of 120 feet rather than infravision. The light shed by the coldstone is equivalent to that of a candle (5-foot-radius illu1ninacion). The magi- cian may give a coldstone to another creature.</p>"
    }
  },
  {
    "name": "Summon Companion",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 8,
      "school": "Conjuration (Summoning)",
      "castingTime": "1 action",
      "range": "Up to 4 miles",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "8, Shm 11 This spell calls the caster's sum1noned companion (\"pet\") to the caster's side from any current location within range. The pee cannot be in combat or in pursuit of an enemy at the time; it must be calm to be able to respond to the magical sum- mons. The summoned pet appears beside the caster and returns to its default orders. Chapter Ten: Spells",
      "recastTime": 1,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:10"
      ],
      "spellLine": "Summon companion",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>8, Shm 11 This spell calls the caster's sum1noned companion (\"pet\") to the caster's side from any current location within range. The pee cannot be in combat or in pursuit of an enemy at the time; it must be calm to be able to respond to the magical sum- mons. The summoned pet appears beside the caster and returns to its default orders. Chapter Ten: Spells</p>"
    }
  },
  {
    "name": "Summon Dagger",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 10,
      "school": "Conjuration (Creation)",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "24 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: Pouch and 60 knives of Luclin 226 This spell creates a bandoleer containing 60 knives of Luclin, + 2 daggers that deal ld3+2 points of damage (including the + 2 enl1ancernent bonus), weighonlyone- tenth of a pound each, and have a range incre1nent of 15 feet. As created ite1ns, the belt and the knives vanish after 24 hours. Their temporary nature is apparent to anyone who looks at the1n.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:1"
      ],
      "spellLine": "Summon dagger",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: Pouch and 60 knives of Luclin 226 This spell creates a bandoleer containing 60 knives of Luclin, + 2 daggers that deal ld3+2 points of damage (including the + 2 enl1ancernent bonus), weighonlyone- tenth of a pound each, and have a range incre1nent of 15 feet. As created ite1ns, the belt and the knives vanish after 24 hours. Their temporary nature is apparent to anyone who looks at the1n.</p>"
    }
  },
  {
    "name": "Summon Drink",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 4,
      "school": "Conjuration (Creation)",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "24 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "none",
      "effect": "Creates a gallon of pure water.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "description": "<p>Effect: 4 gallons of water As summon drink, except this spell creates 4 gallons of water.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "magician:1"
      ],
      "spellLine": "Summon drink"
    }
  },
  {
    "name": "Summon Elemental Blanket",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 11,
      "manaCost": 37,
      "school": "Conjuration (Creation)",
      "castingTime": "Free action",
      "range": "Personal",
      "duration": "24 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: 1 summoned cloak This spell creates a magic cloak that grants its wearer a + I bonus on saves agai11st effects with the [cold], [fire], or [magic] descriptors, as well as cold resistance (6), fire resistance ( 6), and 1nagic resistance ( 6). The cloak appears in the casters hands and may be given away to others. As a created ite1n, the elemental blanket vanishes after 24 hours. Its tetnporary na- ture is apparent to anyone who looks at it. Summon Elemental",
      "recastTime": 1,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:11"
      ],
      "spellLine": "Summon elemental blanket",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: 1 summoned cloak This spell creates a magic cloak that grants its wearer a + I bonus on saves agai11st effects with the [cold], [fire], or [magic] descriptors, as well as cold resistance (6), fire resistance ( 6), and 1nagic resistance ( 6). The cloak appears in the casters hands and may be given away to others. As a created ite1n, the elemental blanket vanishes after 24 hours. Its tetnporary na- ture is apparent to anyone who looks at it. Summon Elemental</p>"
    }
  },
  {
    "name": "Summon Elemental Defender",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 0,
      "school": "",
      "castingTime": "1 action",
      "range": "",
      "duration": "",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Creates magic shield.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:4"
      ],
      "spellLine": "Summon Elemental Defender",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Creates magic shield.</p>"
    }
  },
  {
    "name": "Summon Fang",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 7,
      "school": "Co11juration ( Creation)",
      "castingTime": "1 full round",
      "range": "Personal",
      "duration": "24 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: 1 giant snake fang This spell creates a giant snake fang, a piercing weapon. It may be used by caster or given to another creature. The fang is treated as a + 1 magic weapon for the purpose of determining its effects on crea- tures with damage reduction, although the fang does not actually grant a bonus to the wielder's attack or damage rolls. As a created item, the snake fang van- ishes after 24 hours. Its temporary nature is apparent to anyone who looks at it. Giant snake fang: I-handed piercing; Ding ld6, Size S, Wt 5, Dly 3.",
      "recastTime": 1,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:4"
      ],
      "spellLine": "Summon dagger",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: 1 giant snake fang This spell creates a giant snake fang, a piercing weapon. It may be used by caster or given to another creature. The fang is treated as a + 1 magic weapon for the purpose of determining its effects on crea- tures with damage reduction, although the fang does not actually grant a bonus to the wielder's attack or damage rolls. As a created item, the snake fang van- ishes after 24 hours. Its temporary nature is apparent to anyone who looks at it. Giant snake fang: I-handed piercing; Ding ld6, Size S, Wt 5, Dly 3.</p>"
    }
  },
  {
    "name": "Summon Food",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 4,
      "school": "Conjuration (Creation)",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "24 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "none",
      "effect": "Creates 3 loaves of black bread.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "description": "<p>Effect: 4 loaves of black bread As summon food, except this spell creates 12 loaves of bread.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "magician:1"
      ],
      "spellLine": "Summon food"
    }
  },
  {
    "name": "Summon Heatstone",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 12,
      "school": "Conjuration (Creation)",
      "castingTime": "2 full rounds",
      "range": "C lose (25 ft. + 5 ft./2 levels)",
      "duration": "24 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: 1 coldstone As heatstone, except the coldstone casts a dim blue light and grants its possessor ultravision to a range of 120 feet rather than infravision. The light shed by the coldstone is equivalent to that of a candle (5-foot-radius illu1ninacion). The magi- cian may give a coldstone to another creature.",
      "recastTime": 2,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:5"
      ],
      "spellLine": "Summon heatstone",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: 1 coldstone As heatstone, except the coldstone casts a dim blue light and grants its possessor ultravision to a range of 120 feet rather than infravision. The light shed by the coldstone is equivalent to that of a candle (5-foot-radius illu1ninacion). The magi- cian may give a coldstone to another creature.</p>"
    }
  },
  {
    "name": "Summon Phantom Chain",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 0,
      "school": "",
      "castingTime": "1 action",
      "range": "",
      "duration": "",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Creates chainmail armor.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:8"
      ],
      "spellLine": "Summon Phantom Chain",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Creates chainmail armor.</p>"
    }
  },
  {
    "name": "Summon Phantom Leather",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 17,
      "school": "Conjuration (Creation)",
      "castingTime": "1 full round",
      "range": "Personal",
      "duration": "24 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: I set of chainmail armor As summon phantom leather, except that the caster creates a suit of chainmail. Summon Phantom",
      "recastTime": 1,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:6"
      ],
      "spellLine": "Summon phantom leather",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: I set of chainmail armor As summon phantom leather, except that the caster creates a suit of chainmail. Summon Phantom</p>"
    }
  },
  {
    "name": "Summon Phantom Plate",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 0,
      "school": "",
      "castingTime": "1 action",
      "range": "",
      "duration": "",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Creates half-plate artnor.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:10"
      ],
      "spellLine": "Summon Phantom Plate",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Creates half-plate artnor.</p>"
    }
  },
  {
    "name": "Summon Ring of Flight",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 17,
      "school": "Conjuration (Creation)",
      "castingTime": "1 full round",
      "range": "Personal",
      "duration": "24 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: 1 ring of flight This spell creates a ring of flight, a magic ring that contains 2 charges of the levitate spell, which the wearer activates with a command word (a standard action that provokes no attacks of opportunity). The levitate effect lasts for 10 minutes and may be cast upon any creature within range of the wearer. The ring 1nay be given to another to use. As a created item, the ring of flight van- ishes after 24 hours. Its te1nporary nature is apparent to anyone who looks at it. Summon Short> OF the",
      "recastTime": 1,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:10"
      ],
      "spellLine": "Summon ring of flight",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: 1 ring of flight This spell creates a ring of flight, a magic ring that contains 2 charges of the levitate spell, which the wearer activates with a command word (a standard action that provokes no attacks of opportunity). The levitate effect lasts for 10 minutes and may be cast upon any creature within range of the wearer. The ring 1nay be given to another to use. As a created item, the ring of flight van- ishes after 24 hours. Its te1nporary nature is apparent to anyone who looks at it. Summon Short&gt; OF the</p>"
    }
  },
  {
    "name": "Summon Shard of the Core",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 0,
      "school": "",
      "castingTime": "1 action",
      "range": "",
      "duration": "",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Creates magic stone that grants cold",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:9"
      ],
      "spellLine": "Summon Shard of the Core",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Creates magic stone that grants cold</p>"
    }
  },
  {
    "name": "Summon Throwing Daggers",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 0,
      "school": "",
      "castingTime": "1 action",
      "range": "",
      "duration": "",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Creates 20 magic throw-",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:5"
      ],
      "spellLine": "Summon Throwing Daggers",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Creates 20 magic throw-</p>"
    }
  },
  {
    "name": "Summon Waterstone",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 7,
      "school": "Conjuration (Creation)",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "24 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: 1 waterstone T his spell creates a waterstone, a 1nagic item that confers the benefits of the en- during breath spell on its possessor with a command word (a standard action that provokes no attacks of opportunity). The caster may give a waterstone to another creature. Once the waterstone has been activated, it vanishes. As a sum1noned ite1n, the waterstone vanishes after 24 hours if not used prior to that time. Its temporary nature is appar- ent to anyone who looks at it.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:6"
      ],
      "spellLine": "Summon waterstone",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: 1 waterstone T his spell creates a waterstone, a 1nagic item that confers the benefits of the en- during breath spell on its possessor with a command word (a standard action that provokes no attacks of opportunity). The caster may give a waterstone to another creature. Once the waterstone has been activated, it vanishes. As a sum1noned ite1n, the waterstone vanishes after 24 hours if not used prior to that time. Its temporary nature is appar- ent to anyone who looks at it.</p>"
    }
  },
  {
    "name": "Summon Wisp",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 7,
      "school": "Conjuration (Creation) [Light]",
      "castingTime": "1 action",
      "range": "Caster",
      "duration": "24 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: 1 headband This spell creates a glowing headband upon the caster's head. This headband casts light equivalent to a lantern (30-ft. radius), but gives off no heat. It takes up the slot used for a headband, hat, or hel- met, so any item otherwise worn by the caster in that slot must be removed before casting this spell, or else the spell will fail and the n1ana still be spent. The headband can be given to another to wear. As a created item, the halo of light van- ishes after 24 hours.",
      "recastTime": 2,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:2"
      ],
      "spellLine": "Summon wisp",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: 1 headband This spell creates a glowing headband upon the caster's head. This headband casts light equivalent to a lantern (30-ft. radius), but gives off no heat. It takes up the slot used for a headband, hat, or hel- met, so any item otherwise worn by the caster in that slot must be removed before casting this spell, or else the spell will fail and the n1ana still be spent. The headband can be given to another to wear. As a created item, the halo of light van- ishes after 24 hours.</p>"
    }
  },
  {
    "name": "Summoning: Air",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 7,
      "manaCost": 40,
      "school": "Conjuration (Summoning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One summoned creature As elementalkin: air, except the caster su1n- mo11s a type 6 air ele1nental.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:7"
      ],
      "spellLine": "Elementalkin: air",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One summoned creature As elementalkin: air, except the caster su1n- mo11s a type 6 air ele1nental.</p>"
    }
  },
  {
    "name": "Summoning: Earth",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 7,
      "manaCost": 40,
      "school": "Conjuration (Summoning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One summoned creature As elementalkin: earth, except the caster su1nmons a type 6 earth elemental.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:7"
      ],
      "spellLine": "Elementalkin: earth",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One summoned creature As elementalkin: earth, except the caster su1nmons a type 6 earth elemental.</p>"
    }
  },
  {
    "name": "Summoning: Fire",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 7,
      "manaCost": 40,
      "school": "Conjuration (Summoning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One su1nmoned creature As elementalkin: fire, except the caster summons a type 6 fire elemental.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:7"
      ],
      "spellLine": "Elementalkin: fire",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One su1nmoned creature As elementalkin: fire, except the caster summons a type 6 fire elemental.</p>"
    }
  },
  {
    "name": "Summoning: Water",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 7,
      "manaCost": 40,
      "school": "Conjuration (Su1nmoning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One su1nmoned creature As elementalkin: water, except the caster su1nmons a type 6 water elemental. Summon Phantom",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:7"
      ],
      "spellLine": "Elementalkin: water",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One su1nmoned creature As elementalkin: water, except the caster su1nmons a type 6 water elemental. Summon Phantom</p>"
    }
  },
  {
    "name": "Superior Camouflage",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 7,
      "school": "Divination",
      "castingTime": "1 action",
      "range": "C lose (25 ft. + 5 ft./2 levels)",
      "duration": "See text (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Renders the caster and all their equipment completely invisible until they attack or cast a spell.",
      "recastTime": 1,
      "classes": [
        "druid"
      ],
      "description": "<p>The druid becomes one with the natural world — utterly invisible until the moment they choose to act.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "druid:8"
      ]
    }
  },
  {
    "name": "Sword of Runes",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 12,
      "school": "Conjuration (Creation)",
      "castingTime": "1 full round",
      "range": "Personal",
      "duration": "24 hours",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: 1 sword of runes This spell creates a sword of runes, a magic short sword that is treated as a + 1 magic weapon for the purpose of detennining its effects on creatures with damage reduc, tion, although the staff does not actually grant a bonus to the wielder's attack or da1nage rolls. In addition, the sword of runes has a proc effect of the spell ward summoned with a Proc 0Cof22 (see \"Process Effects\" in Chapter 12: Combat). The sword may be given to another to wield. As a created item, the sword of runes vanishes after 24 hours. Its temporary na, cure is apparent to anyone who looks at it.",
      "recastTime": 1,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:8"
      ],
      "spellLine": "Summon dagger",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: 1 sword of runes This spell creates a sword of runes, a magic short sword that is treated as a + 1 magic weapon for the purpose of detennining its effects on creatures with damage reduc, tion, although the staff does not actually grant a bonus to the wielder's attack or da1nage rolls. In addition, the sword of runes has a proc effect of the spell ward summoned with a Proc 0Cof22 (see \"Process Effects\" in Chapter 12: Combat). The sword may be given to another to wield. As a created item, the sword of runes vanishes after 24 hours. Its temporary na, cure is apparent to anyone who looks at it.</p>"
    }
  },
  {
    "name": "Symbol of Transal",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 96,
      "school": "Abjuration",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "30 minutes/level (see text)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Target regenerates 2 mana per round for the duration.",
      "recastTime": 0,
      "classes": [
        "cleric"
      ],
      "description": "<p>than 20 ft. apart As symbol of Transal, except this spell grants up to six targets ( 4d6+ 1)x10 bonus hit points. Material Components: 3 peridots.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "cleric:3"
      ],
      "spellLine": "Symbol of Transal"
    }
  },
  {
    "name": "Talisman of Jasinth",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 25,
      "school": "Abjuration",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "10 minutes/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "+2 STA and +15 maximum HP for the duration.",
      "recastTime": 1,
      "classes": [
        "beastlord",
        "shaman"
      ],
      "description": "<p>than 20 ft. apart less) As endure cold, except this spell grants up to six targets a +4 bonus to saves against effects with the [disease] descriptor and also grants a buff bonus of disease resis, ranee ( 18),</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "beastlord:1",
        "shaman:1"
      ],
      "spellLine": "Endure cold"
    }
  },
  {
    "name": "Talisman of Tnarg",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 42,
      "school": "Alteratio11",
      "castingTime": "1 full round",
      "range": "Close (25 ft. + 5 ft./level)",
      "duration": "30 minutes/level",
      "damageFormula": "",
      "healFormula": "5d8+15",
      "savingThrow": "will",
      "effect": "An ancient shaman prayer channels massive healing power.",
      "recastTime": 1,
      "classes": [
        "shaman"
      ],
      "description": "<p>EverQuestRole-PlayingGamePLayer'sHanbbook As talisman of T narg, except the target gains 62 bonus hit points.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "shaman:9"
      ],
      "spellLine": "Talisman of Tnarg"
    }
  },
  {
    "name": "Tashani",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 3,
      "school": "Abjuration [Magic]",
      "castingTime": "Free action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "1 minute/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Reduces target's magic resistance by –10; Will save negates.",
      "recastTime": 0,
      "classes": [
        "enchanter"
      ],
      "description": "<p>As tashan, except this spell itnposes 1nagic resistance (-8) and magic save -2.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "enchanter:4"
      ],
      "spellLine": "T ashan"
    }
  },
  {
    "name": "Tashania",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 5,
      "manaCost": 5,
      "school": "Abjuration [Magic]",
      "castingTime": "Free action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "1 minute/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Reduces magic resistance of all enemies in 20 ft radius by –10; Will save negates each.",
      "recastTime": 0,
      "classes": [
        "enchanter"
      ],
      "description": "<p>As tashan, except this spell imposes 1nagic resistance (-12) and magic save -3.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "enchanter:5"
      ],
      "spellLine": "T ashan"
    }
  },
  {
    "name": "Tepid Deeds",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 17,
      "school": "A lteration [Magic]",
      "castingTime": "1 action",
      "range": "C lose (25 ft. + 5 ft./2 levels)",
      "duration": "1 n1inute/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Slows target's attack speed by 25%; Will save negates.",
      "recastTime": 0,
      "classes": [
        "enchanter",
        "shaman"
      ],
      "description": "<p>z EverQuestRole-PlayingGamePlayer'sHanbbook &amp;Cl 5 ,P J I I !l C J $!£ This spell imposes slow ( 4) on the target, causing it to suffer a -2 slow penalty to AC, the loss of 1 attack of opportunity every second round, the inability to make full-round attack actions, and the loss of 1 attack every third round.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "enchanter:3",
        "shaman:3"
      ],
      "spellLine": "Drowsy"
    }
  },
  {
    "name": "Thunder of Karana",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 13,
      "school": "A lteration",
      "castingTime": "1 action",
      "range": "Medium (100ft. + lOft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "Drains 17 mana from the target and interrupts casting.",
      "recastTime": 3,
      "classes": [
        "paladin"
      ],
      "description": "<p>As mana sieve, except this spell drains 17 rnana. In addition, if the target fails its Fortitude save, it will be interrupted. (An interrupted creature loses one action and cannot cast spells in its next tum.)</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "paladin:6"
      ],
      "spellLine": "Mana sieve"
    }
  },
  {
    "name": "Thunder Strike",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 25,
      "school": "Evocation [Force, Magic]",
      "castingTime": "1 action",
      "range": "Medium (100ft. + lOft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "As force shock, except this spell deals ( 6d 1 O+ 3 )x2 magic damage.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:8"
      ],
      "spellLine": "Force shock",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As force shock, except this spell deals ( 6d 1 O+ 3 )x2 magic damage.</p>"
    }
  },
  {
    "name": "Thunderclap",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 9,
      "manaCost": 29,
      "school": "Evocation [Electricity]",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "As project lightning, except this spell deals (6dlO)x2 points of electrical damage. Further, those who fail the initial Reflex save are also interrupted. (An interrupted creature loses one action and cannot cast spells in its next turn.)",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:9"
      ],
      "spellLine": "Project lightning",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As project lightning, except this spell deals (6dlO)x2 points of electrical damage. Further, those who fail the initial Reflex save are also interrupted. (An interrupted creature loses one action and cannot cast spells in its next turn.)</p>"
    }
  },
  {
    "name": "Tishan's Clash",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 0,
      "school": "Evocation [Magic]",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "1 round",
      "damageFormula": "6d6",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "A bolt of chaotic magic deals 6d6 magic damage; Will save halves, and a failed save also stuns the target for 1 round.",
      "recastTime": 3,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:6"
      ],
      "spellLine": "Tishan' s clash",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>· Mana: 11 This spell fires a bolt of chaotic energy that deals 6d6 points of 1nagic damage (Will half). Additionally, if the creature Chapter Ten: Spells fails its saving throw, it is stunned for 1 round. A stunned creature cannot act and loses any positive Dexterity modifier to AC. Attackers gain + 2 bonuses to attack a stunned creature.</p>"
    }
  },
  {
    "name": "Tishan's Relocation",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 50,
      "school": "Alteration [Teleportation]",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "than 20 ft. apart The caster transports up to six willing creatures to a location within the Skyfire Mountains near a pass to the Burning Woods. This destination is not entirely safe.",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:10"
      ],
      "spellLine": "Tishan's Relocation",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>than 20 ft. apart The caster transports up to six willing creatures to a location within the Skyfire Mountains near a pass to the Burning Woods. This destination is not entirely safe.</p>"
    }
  },
  {
    "name": "Tox Gate",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 25,
      "school": "Alteration [Teleportation]",
      "castingTime": "1 full round",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "This spell transports the caster to the wizard spires along the southern edge of the T oxxulia Forest.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:6"
      ],
      "spellLine": "Gate",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>This spell transports the caster to the wizard spires along the southern edge of the T oxxulia Forest.</p>"
    }
  },
  {
    "name": "Tox Portal",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 0,
      "school": "",
      "castingTime": "1 action",
      "range": "",
      "duration": "",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Group teleports to the Toxxulia Forest.",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:8"
      ],
      "spellLine": "Tox Portal",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Group teleports to the Toxxulia Forest.</p>"
    }
  },
  {
    "name": "Translocate",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 12,
      "manaCost": 33,
      "school": "Alteration [Teleportation]",
      "castingTime": "1 full round",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Teleports one willing touched creature to its bind point without moving the caster.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "description": "<p>The wizard folds space around an ally, sending that traveler back to a bound sanctuary while the caster remains in place.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": ""
    }
  },
  {
    "name": "Translocate: Cazic",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 11,
      "manaCost": 38,
      "school": "Alteration [Teleportation]",
      "castingTime": "2 full rounds",
      "range": "C lose (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "The caster transports one willing target to the pyra1nid inside Cazic'Thule. Translocate: Cobalt",
      "recastTime": 1,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:11"
      ],
      "spellLine": "Translocate",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>The caster transports one willing target to the pyra1nid inside Cazic'Thule. Translocate: Cobalt</p>"
    }
  },
  {
    "name": "Translocate: Combine",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 38,
      "school": "Alteration [Teleportation]",
      "castingTime": "2 full rounds",
      "range": "C lose (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "R ecast: 1 round The caster transports one willing target to the spires in the Dread lands of Kunark.",
      "recastTime": 0,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:10"
      ],
      "spellLine": "Translocate",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>R ecast: 1 round The caster transports one willing target to the spires in the Dread lands of Kunark.</p>"
    }
  },
  {
    "name": "Translocate: Commons",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 11,
      "manaCost": 38,
      "school": "Alteration [Teleportation]",
      "castingTime": "2 full rounds",
      "range": "C lose (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "The caster transports one willing target to the pyramid in the West Common lands.",
      "recastTime": 1,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:11"
      ],
      "spellLine": "Translocate",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>The caster transports one willing target to the pyramid in the West Common lands.</p>"
    }
  },
  {
    "name": "Translocate: Fay",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 38,
      "school": "Alteration [Teleportation]",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "The caster transports one willing target to the spires of Greater Faydark. Translocate: Great",
      "recastTime": 1,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:10"
      ],
      "spellLine": "Translocate",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>The caster transports one willing target to the spires of Greater Faydark. Translocate: Great</p>"
    }
  },
  {
    "name": "Translocate: Nek",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 11,
      "manaCost": 38,
      "school": "Alteration [Teleportation]",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "The caster transports one willing target to the pyramid inside the Nektulous Forest.",
      "recastTime": 1,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:11"
      ],
      "spellLine": "Translocate",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>The caster transports one willing target to the pyramid inside the Nektulous Forest.</p>"
    }
  },
  {
    "name": "Translocate: Nexus",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 38,
      "school": "Alteration [Teleportation]",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "The caster transports one willing target to the Nexus on the moon Luclin. 339",
      "recastTime": 1,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:10"
      ],
      "spellLine": "Translocate",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>The caster transports one willing target to the Nexus on the moon Luclin. 339</p>"
    }
  },
  {
    "name": "Translocate: North",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 38,
      "school": "A lteration [Teleportation]",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "The caster transports one willing target to the spires in the northern Plains ofKarana.",
      "recastTime": 1,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:10"
      ],
      "spellLine": "Translocate",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>The caster transports one willing target to the spires in the northern Plains ofKarana.</p>"
    }
  },
  {
    "name": "Translocate: Ro",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 11,
      "manaCost": 38,
      "school": "Alteration [Teleportation]",
      "castingTime": "2 full rounds",
      "range": "C lose (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "The caster transports one willing target to the pyramid in the north of the Ro Desert.",
      "recastTime": 1,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:11"
      ],
      "spellLine": "Trans locate",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>The caster transports one willing target to the pyramid in the north of the Ro Desert.</p>"
    }
  },
  {
    "name": "Translocate: Tox",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 38,
      "school": "Alteration [Teleportation]",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "The caster transports one willing target to the spires in Toxxulia Forest. Translocate:",
      "recastTime": 1,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:10"
      ],
      "spellLine": "Translocate",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>The caster transports one willing target to the spires in Toxxulia Forest. Translocate:</p>"
    }
  },
  {
    "name": "Transon's Elemental Infusion",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 13,
      "manaCost": 0,
      "school": "",
      "castingTime": "1 action",
      "range": "",
      "duration": "",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Heals (2d10+ 3 )xlO hit points to",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:13"
      ],
      "spellLine": "Transon's Elemental Infusion",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Heals (2d10+ 3 )xlO hit points to</p>"
    }
  },
  {
    "name": "Transon's Elemental Renewal",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 15,
      "manaCost": 0,
      "school": "",
      "castingTime": "1 action",
      "range": "",
      "duration": "",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Heals (5d6+ 1 )x l O hit points to",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:15"
      ],
      "spellLine": "Transon's Elemental Renewal",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Heals (5d6+ 1 )x l O hit points to</p>"
    }
  },
  {
    "name": "Transon's Phantasmal Protection",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 14,
      "manaCost": 0,
      "school": "",
      "castingTime": "1 action",
      "range": "",
      "duration": "",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Caster gains DR",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:14"
      ],
      "spellLine": "Transon's Phantasmal Protection",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Caster gains DR</p>"
    }
  },
  {
    "name": "True North",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 1,
      "manaCost": 1,
      "school": "Divination",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "The caster instantly senses the direction of true north.",
      "recastTime": 1,
      "classes": [
        "druid",
        "magician",
        "wizard"
      ],
      "classLevels": [
        "druid:1",
        "magician:1",
        "wizard:1"
      ],
      "spellLine": "True north",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Pal 1, Rng 1, Shm 1, Wiz 1 This spel I allows the caster to sense which direction is north.</p>"
    }
  },
  {
    "name": "Turgur's Insects",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 42,
      "school": "Alteration [Magic]",
      "castingTime": "1 action",
      "range": "C lose (25 ft. + 5 ft./2 levels)",
      "duration": "1 minute/level",
      "damageFormula": "1d4",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Slows target's attack speed by 30% and deals 1d4 damage per round. Fort save negates the slow.",
      "recastTime": 1,
      "classes": [
        "shaman"
      ],
      "description": "<p>C.omponents: V, S A swann of bugs rises up and surrounds the target, causing a distraction that i1nposes slow (6), ora-3 slow penalty to AC, loss of 2 attacks of opportunity per round, inabil- ity to make full-round attack actions, and the loss of 1 attack every second round. TurningoFthe</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "shaman:4"
      ],
      "spellLine": "Drowsy"
    }
  },
  {
    "name": "Upheaval",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 7,
      "manaCost": 104,
      "school": "Evocation",
      "castingTime": "1 action",
      "range": "Long ( 400 ft. + 40 ft./level)",
      "duration": "1 round",
      "damageFormula": "4d8+4",
      "healFormula": "",
      "savingThrow": "",
      "effect": "The earth erupts violently in a 20 ft radius dealing 4d8+4 damage; Reflex save for half.",
      "recastTime": 4,
      "classes": [
        "druid"
      ],
      "description": "<p>As tremor, except this spell has a much larger area and greater range.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "druid:7"
      ],
      "spellLine": "Tremor"
    }
  },
  {
    "name": "Valiant Companion",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 15,
      "manaCost": 33,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "Long ( 400 ft. + 40 ft./level)",
      "duration": "1 round/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "A magician may cast this spell only upon his own ele1nental pet, making it com- pletely im1nune to any effect with the [fear] descriptor.",
      "recastTime": 2,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:15"
      ],
      "spellLine": "Valiant companion",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>A magician may cast this spell only upon his own ele1nental pet, making it com- pletely im1nune to any effect with the [fear] descriptor.</p>"
    }
  },
  {
    "name": "Valor",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 15,
      "school": "Abjuration",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "30 minutes/level (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Target gains +2 AC and +2 on all saving throws.",
      "recastTime": 0,
      "classes": [
        "cleric"
      ],
      "description": "<p>As courage, except this spell grants+ 3 AC and + 50 hit points.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "cleric:3"
      ],
      "spellLine": "Courage"
    }
  },
  {
    "name": "Vampiric Curse",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 24,
      "school": "Alteration [Magic]",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "9 rounds",
      "damageFormula": "2d8",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "Drains 2d8 HP from target; Shadow Knight heals for the same amount.",
      "recastTime": 2,
      "classes": [
        "shadowknight"
      ],
      "description": "<p>342 As leach, except this spell transfers ld12 hit points per round.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "half",
      "classLevels": [
        "shadowknight:4"
      ],
      "spellLine": "Leach"
    }
  },
  {
    "name": "Vampiric Embrace",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 17,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "1 minute/level",
      "damageFormula": "1d8",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Drains 1d8 HP per round from target; caster heals 50% of drain each round.",
      "recastTime": 1,
      "classes": [
        "necromancer"
      ],
      "description": "<p>Casting T ime: 1 action As vampiric embrace, except this effect has a Proc DC 21 and drains 5 mana from the target and transfers that amount to the caster.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "necromancer:4"
      ],
      "spellLine": "Vampiric embrace"
    }
  },
  {
    "name": "Velocity",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 14,
      "manaCost": 10,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "C lose (25 ft. + 5 ft./2 levels)",
      "duration": "10 minutes/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "As expedience, except the pet gains a 50% increase to all base speeds.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:14"
      ],
      "spellLine": "Spirit of wolf",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As expedience, except the pet gains a 50% increase to all base speeds.</p>"
    }
  },
  {
    "name": "Verses of Victory",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 0,
      "school": "Song",
      "castingTime": "1 action (song)",
      "range": "30 ft",
      "duration": "Concentration",
      "damageFormula": "",
      "healFormula": "3",
      "savingThrow": "",
      "effect": "Allies within range regenerate 3 HP per round while the song is maintained.",
      "recastTime": 0,
      "classes": [
        "bard"
      ],
      "description": "<p>A triumphant song of victory bolsters the spirits and health of all nearby allies.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "bard:4"
      ]
    }
  },
  {
    "name": "Vocarate: Air",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 13,
      "manaCost": 50,
      "school": "Conjuration (Summoning)",
      "castingTime": "2 full rounds",
      "range": "C lose (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One su1n1noned creature Aselementalkin: air, except the castersun1- 1nons a type 12 air elemental.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:13"
      ],
      "spellLine": "Elementalkin: air",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One su1n1noned creature Aselementalkin: air, except the castersun1- 1nons a type 12 air elemental.</p>"
    }
  },
  {
    "name": "Vocarate: Earth",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 13,
      "manaCost": 50,
      "school": "Conjuration (Sum1noni11g)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Pern1anent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One summoned creature As elementalkin: earth, except the caster summons a type 12 earth ele1nental.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:13"
      ],
      "spellLine": "Elementalkin: earth",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One summoned creature As elementalkin: earth, except the caster summons a type 12 earth ele1nental.</p>"
    }
  },
  {
    "name": "Vocarate: Fire",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 13,
      "manaCost": 50,
      "school": "Conjuration (Su1nmoning)",
      "castingTime": "2 full rounds",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Permanent (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Effect: One su1nmoned creature As elementalkin: fire, except the caster sum1nons a type 13 fire elemental.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:13"
      ],
      "spellLine": "Elementalkin: fire",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One su1nmoned creature As elementalkin: fire, except the caster sum1nons a type 13 fire elemental.</p>"
    }
  },
  {
    "name": "Vocarate: Water",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 13,
      "manaCost": 2,
      "school": "Conjuration (Sum1noning)",
      "castingTime": "1 full round",
      "range": "Long ( 400 ft. + 40 ft./level)",
      "duration": "Concentration (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "Effect: One su1n1noned creature As elementalkin: water, except the caster summons a type 13 water elemental. VoiceGraFt Divination As sight graft, except this spell allows the caster to speak through her pet. It's not necessary for tl1e pet to be able to physi- cally form the appropriate sounds, as the sound is transferred rnagically.",
      "recastTime": 2,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:13"
      ],
      "spellLine": "Bind sight",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>Effect: One su1n1noned creature As elementalkin: water, except the caster summons a type 13 water elemental. VoiceGraFt Divination As sight graft, except this spell allows the caster to speak through her pet. It's not necessary for tl1e pet to be able to physi- cally form the appropriate sounds, as the sound is transferred rnagically.</p>"
    }
  },
  {
    "name": "Waking Lands Portal",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 11,
      "manaCost": 50,
      "school": "A lteration [Teleportation]",
      "castingTime": "3 full rounds",
      "range": "C lose (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "than 20 ft. apart The caster transports up to six targets of her choice within range to the dragon circle in the Waking Lands of Yelious.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:11"
      ],
      "spellLine": "Gate",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>than 20 ft. apart The caster transports up to six targets of her choice within range to the dragon circle in the Waking Lands of Yelious.</p>"
    }
  },
  {
    "name": "Ward Summoned",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 83,
      "school": "Evocation [Magic]",
      "castingTime": "1 action",
      "range": "Medium (100ft. + lOft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "As ward summoned, except this powerful spell annihilates the target along with any equipment and possessions it carries, much like disintegrate. Even if the target suc- ceedson the Will save, it suffers (2dlO)x10 points of magic damage. A creature slain by banishment is forever destroyed, and cannot be raised from the dead in any fashion. In addition, a foe killed with this spell does not yield any experience points. Material Components: A star ruby. BanishmentoF",
      "recastTime": 2,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:4"
      ],
      "spellLine": "Ward summoned",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As ward summoned, except this powerful spell annihilates the target along with any equipment and possessions it carries, much like disintegrate. Even if the target suc- ceedson the Will save, it suffers (2dlO)x10 points of magic damage. A creature slain by banishment is forever destroyed, and cannot be raised from the dead in any fashion. In addition, a foe killed with this spell does not yield any experience points. Material Components: A star ruby. BanishmentoF</p>"
    }
  },
  {
    "name": "Ward Undead",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 125,
      "school": "Evocation [Magic]",
      "castingTime": "1 action",
      "range": "Medium ( 100 ft. + 10 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "All undead within 30 ft flee for the duration; Will save negates for each.",
      "recastTime": 2,
      "classes": [
        "paladin"
      ],
      "description": "<p>Casting T ime: 1 action As ward undead, except this powerful spell annihilates the target along with any equipment and possessions it carries, much like disintegrate. Even if the target suc- ceeds on the Will save, it suffers (2d10)x10 points of magic damage. A creature slain by banishment is forever destroyed, and cannot be raised from the dead (or re- turned to unlife) in any fashion. In addition, a foe killed with this spell does not yield any experience points. Material Components: A star ruby.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "half",
      "classLevels": [
        "paladin:3"
      ],
      "spellLine": "Ward undead"
    }
  },
  {
    "name": "Warsong of Zek",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 26,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "Self",
      "duration": "2 min/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "+2 attack, +2 damage with all weapons, and +30 ft movement speed for the duration.",
      "recastTime": 0,
      "classes": [
        "ranger"
      ],
      "description": "<p>The Warsong of Zek, god of tactics and war, fills the ranger with martial excellence.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "ranger:4"
      ]
    }
  },
  {
    "name": "Water Elemental",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 3,
      "manaCost": 25,
      "school": "Conjuration",
      "castingTime": "1 action",
      "range": "30 ft",
      "duration": "10 min/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "Summons a water elemental companion to serve the caster.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "description": "<p>Flowing water coalesces into a loyal water elemental under the magician's command.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": ""
    }
  },
  {
    "name": "Wave of Enfeeblement",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 12,
      "manaCost": 7,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "20 ft. radius centered on caster",
      "duration": "1 rou1,d/level",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "AE cone: all enemies suffer -4 STR, -4 DEX, and -2 to all saves; Will save negates each.",
      "recastTime": 1,
      "classes": [
        "enchanter"
      ],
      "description": "<p>cept the caster As weaken, except this spell i1nposes a -4 buff penalty to Strength to all creatures within the area of effect. This spell affects friends as well as foes ( though not the caster himself), so the necromancer needs to be careful when casti1,g it.</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "enchanter:12"
      ],
      "spellLine": "Weaken"
    }
  },
  {
    "name": "West Karana Gate",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 7,
      "manaCost": 25,
      "school": "A lteration [Teleportation]",
      "castingTime": "1 full round",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "This spell transports the caster to tl,e pyra1nid in the western portion of the Plains of Karana.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:7"
      ],
      "spellLine": "Gate",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>This spell transports the caster to tl,e pyra1nid in the western portion of the Plains of Karana.</p>"
    }
  },
  {
    "name": "West Karana Portal",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 10,
      "manaCost": 50,
      "school": "Alteration [Teleportation]",
      "castingTime": "3 full rounds",
      "range": "C lose (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "than 20 ft. apart The caster transports up to six targets of her choice within range to the pyra1nid in the western Plains of Karana.",
      "recastTime": 2,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:10"
      ],
      "spellLine": "Gate",
      "saveEffect": "negates",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>than 20 ft. apart The caster transports up to six targets of her choice within range to the pyra1nid in the western Plains of Karana.</p>"
    }
  },
  {
    "name": "Whirl Till You Hurl",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 25,
      "school": "Alteration",
      "castingTime": "1 action",
      "range": "Medium (100ft. + lOft./level)",
      "duration": "2 rounds",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "AE stuns/mezzes up to 3 targets in 20 ft radius for 1d4 rounds; Will save negates each.",
      "recastTime": 1,
      "classes": [
        "enchanter"
      ],
      "description": "<p>2S2 As whirl till you hurl, except that at the end of tl1e spell the target must make an addi- tional Fortitude save of DC 12 + caster's level or be nauseated for an additional ld4 rounds. byzil's beaFening</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "enchanter:2"
      ],
      "spellLine": "Whirl till you hurl"
    }
  },
  {
    "name": "Winter's Roar",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 25,
      "school": "Evocation [Cold]",
      "castingTime": "1 action",
      "range": "Long ( 400 ft. + 40 ft./level)",
      "duration": "Instantaneous",
      "damageFormula": "5d6",
      "healFormula": "",
      "savingThrow": "reflex",
      "effect": "A cone of freezing air deals 5d6 cold damage; Reflex save for half.",
      "recastTime": 0,
      "classes": [
        "druid"
      ],
      "description": "<p>• As frost rift, except the range is longer and this spell deals ( 6d 1 O+ 3 )x2 points of cold</p>",
      "deliveryType": "save",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "half",
      "classLevels": [
        "druid:8"
      ],
      "spellLine": "Frost rift"
    }
  },
  {
    "name": "Word of Divine Power",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 6,
      "manaCost": 38,
      "school": "Evocation",
      "castingTime": "1 action",
      "range": "30 ft AE",
      "duration": "Instantaneous",
      "damageFormula": "3d8",
      "healFormula": "",
      "savingThrow": "",
      "effect": "A burst of divine power deals 3d8 damage to undead and evil creatures in the area.",
      "recastTime": 0,
      "classes": [
        "cleric"
      ],
      "description": "<p>A spoken word of sacred authority crashes outward as a wave of punishing divine force.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "",
      "classLevels": [
        "cleric:6"
      ]
    }
  },
  {
    "name": "Word of Pain",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 4,
      "manaCost": 50,
      "school": "Evocation [Magic]",
      "castingTime": "1 action",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "2d8",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "Deals 2d8 divine damage in a 20 ft radius around the target point.",
      "recastTime": 2,
      "classes": [
        "cleric"
      ],
      "description": "<p>As word of pain, except this spell deals (7d10+ 2)x2 points of magicda1nage to all within 30 feet.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "half",
      "classLevels": [
        "cleric:4"
      ],
      "spellLine": "Word of pain"
    }
  },
  {
    "name": "Word of Restoration",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 150,
      "school": "Alteration (Healing)",
      "castingTime": "l action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "(4d6)*10",
      "savingThrow": "will",
      "effect": "Heals allies for (4d6)x10 hit points and cures disease and poison effects.",
      "recastTime": 0,
      "classes": [
        "cleric"
      ],
      "description": "<p>than 40 ft. apart As word of health, except each of up to six targets is healed of ( 4d6 )x IO hit points of damage. In addition, each target is af, fected as though the spells abolish disease and abolish poison l1ad bee11 cast on it.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "cleric:8"
      ],
      "spellLine": "Word of health"
    }
  },
  {
    "name": "Word of Vigor",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 7,
      "manaCost": 125,
      "school": "Alteration (Healing)",
      "castingTime": "1 action",
      "range": "Close (25 ft. + 5 ft./2 levels)",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "(4d6)*10",
      "savingThrow": "will",
      "effect": "Heals allies for (4d6)x10 hit points and negates fatigue for the duration described in the PHB.",
      "recastTime": 0,
      "classes": [
        "cleric"
      ],
      "description": "<p>Vital restorative energy ripples through the cleric's allies in a broad prayer of strength.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "cleric:7"
      ]
    }
  },
  {
    "name": "Wrath of the Elements",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 14,
      "manaCost": 44,
      "school": "Evocation [Cold, Electricity, Fire, Magic]",
      "castingTime": "1 full round",
      "range": "Medium (100 ft.+ 10 ft./level)",
      "duration": "6 rounds",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "fortitude",
      "effect": "As elemental maelstrom, except this spell deals ( 7 d 1 O+ 2 )x2 points of da1nage the round the spell is cast, plus 4d 10 points of damage each round for the next 5 rounds.",
      "recastTime": 0,
      "classes": [
        "magician"
      ],
      "classLevels": [
        "magician:14"
      ],
      "spellLine": "Elemental maelstrom",
      "saveEffect": "half",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>As elemental maelstrom, except this spell deals ( 7 d 1 O+ 2 )x2 points of da1nage the round the spell is cast, plus 4d 10 points of damage each round for the next 5 rounds.</p>"
    }
  },
  {
    "name": "Yaulp",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 2,
      "manaCost": 1,
      "school": "Abjuration",
      "castingTime": "Free action",
      "range": "Personal",
      "duration": "3 rounds (D)",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "will",
      "effect": "+1 additional attack per round and +2 STR for the duration.",
      "recastTime": 3,
      "classes": [
        "cleric",
        "paladin"
      ],
      "description": "<p>A divine war cry channels holy energy into the caster's combat prowess, granting extraordinary speed and strength.</p>",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "saveEffect": "negates",
      "classLevels": [
        "cleric:2",
        "paladin:2"
      ]
    }
  },
  {
    "name": "Yonder",
    "type": "spell",
    "img": "",
    "system": {
      "spellLevel": 8,
      "manaCost": 2,
      "school": "Alteration [Teleportation]",
      "castingTime": "Free action",
      "range": "Personal",
      "duration": "Instantaneous",
      "damageFormula": "",
      "healFormula": "",
      "savingThrow": "",
      "effect": "• As fade, except the distance traveled is ( 1d100 )x 10 feet. In addition, if the caster can make a successful Will save (DC15), then she can control the direction the spell takes her. Otherwise, it is random as per shadow step. ZevFeer's The Ft OF",
      "recastTime": 1,
      "classes": [
        "wizard"
      ],
      "classLevels": [
        "wizard:8"
      ],
      "spellLine": "Gate",
      "saveEffect": "",
      "saveDC": "",
      "deliveryType": "utility",
      "attackMode": "",
      "attackBonus": 0,
      "description": "<p>• As fade, except the distance traveled is ( 1d100 )x 10 feet. In addition, if the caster can make a successful Will save (DC15), then she can control the direction the spell takes her. Otherwise, it is random as per shadow step. ZevFeer's The Ft OF</p>"
    }
  }
];

// Source: module/packs/source/feats.json
export const SAMPLE_FEATS = [
  {
    "name": "Alertness",
    "type": "feat",
    "system": {
      "description": "<p>You are especially perceptive and difficult to surprise.</p>",
      "category": "general",
      "categories": [
        "general"
      ],
      "prerequisites": "None",
      "benefit": "You gain a +2 bonus on all Listen and Spot checks.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Ambidexterity",
    "type": "feat",
    "system": {
      "description": "<p>You use either hand with equal confidence.</p>",
      "category": "general",
      "categories": [
        "general"
      ],
      "prerequisites": "Dex 15",
      "benefit": "You ignore the normal penalties for using your off hand.",
      "normal": "",
      "special": "This feat helps offset two-weapon fighting penalties.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Armor Proficiency (heavy)",
    "type": "feat",
    "system": {
      "description": "<p>The character is proficient with heavy armors, including banded and plate armors.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Armor Proficiency (light), Armor Proficiency (medium).",
      "benefit": "When a character wears a type of armor with which the character is proficient, the armor check penalty applies only to Balance, Climb, Escape Artist, Hide, Jump, Pick Pocket, Safe Fall, Sneak, and Tumble checks.",
      "normal": "A character who is wearing armor with which he is not proficient suffers its armor check penalty on attack rolls and on all skill checks that involve moving, including Ride.",
      "special": "Instead of an armor check penalty, a swimming character suffers a penalty of -1 to all Swim checks for each 5 pounds of gear she is carrying or wearing.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Passive armor-use proficiency rules."
      }
    }
  },
  {
    "name": "Armor Proficiency (light)",
    "type": "feat",
    "system": {
      "description": "<p>The character is proficient with light armors, including cloth and leather armors.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "None",
      "benefit": "When a character wears a type of armor with which the character is proficient, the armor check penalty applies only to Balance, Climb, Escape Artist, Hide, Jump, Pick Pocket, Safe Fall, Sneak, and Tumble checks.",
      "normal": "A character who is wearing armor with which he is not proficient suffers its armor check penalty on attack rolls and on all skill checks that involve moving, including Ride.",
      "special": "Instead of an armor check penalty, a swimming character suffers a penalty of -1 to all Swim checks for each 5 pounds of gear she is carrying or wearing.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Passive armor-use proficiency rules."
      }
    }
  },
  {
    "name": "Armor Proficiency (medium)",
    "type": "feat",
    "system": {
      "description": "<p>The character is proficient with medium armors, including ring mail and chain.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Armor Proficiency (light).",
      "benefit": "When a character wears a type of armor with which the character is proficient, the armor check penalty applies only to Balance, Climb, Escape Artist, Hide, Jump, Pick Pocket, Safe Fall, Sneak, and Tumble checks.",
      "normal": "A character who is wearing armor with which she is not proficient suffers its armor check penalty on attack rolls and on all skill checks that involve moving, including Ride.",
      "special": "Instead of an armor check penalty, a swimming character suffers a penalty of -1 to all Swim checks for each 5 pounds of gear she is carrying or wearing.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Passive armor-use proficiency rules."
      }
    }
  },
  {
    "name": "Bash",
    "type": "feat",
    "system": {
      "description": "<p>You know how to turn a shield into an offensive weapon.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Shield Proficiency",
      "benefit": "You can make shield bash attacks without losing your shield bonus to AC. Shield bashes deal 1d4 damage for Medium creatures.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": ""
      }
    }
  },
  {
    "name": "Beggar",
    "type": "feat",
    "system": {
      "description": "<p>You know how to draw pity and part strangers from their spare coins.</p>",
      "category": "general",
      "categories": [
        "general"
      ],
      "prerequisites": "None",
      "benefit": "You gain a +4 bonus on Diplomacy checks made to beg, and successful begging yields twice the normal coin.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Blind-Fight",
    "type": "feat",
    "system": {
      "description": "<p>You can fight effectively even when vision fails you.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "None",
      "benefit": "In melee, you may reroll one miss chance due to concealment and invisible attackers gain fewer advantages against you.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Brutish",
    "type": "feat",
    "system": {
      "description": "<p>Your sheer menace carries more weight than polished words.</p>",
      "category": "general",
      "categories": [
        "general"
      ],
      "prerequisites": "None",
      "benefit": "You may use your Strength modifier instead of Charisma on Intimidate checks.",
      "normal": "",
      "special": "Ogres and trolls may add both Strength and Charisma modifiers on Intimidate checks if they wish.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Cleave",
    "type": "feat",
    "system": {
      "description": "<p>You carry a killing blow through into the next enemy.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Str 13, Power Attack",
      "benefit": "If you drop a foe in melee, you gain an immediate extra melee attack against another nearby target.",
      "normal": "",
      "special": "You may use Cleave once per round.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Combat Casting",
    "type": "feat",
    "system": {
      "description": "<p>The character is trained to cast spells in combat.</p>",
      "category": "mystic",
      "categories": [
        "mystic"
      ],
      "prerequisites": "None",
      "benefit": "The character gets a +4 bonus to Channeling checks made to cast a spell while on the defensive.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Only applies while casting defensively."
      }
    }
  },
  {
    "name": "Combat Reflexes",
    "type": "feat",
    "system": {
      "description": "<p>You are quick to exploit openings in battle.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "None",
      "benefit": "The character may make a number of additional attacks of opportunity each round equal to her Dexterity modifier, but still may make only one attack of opportunity per enemy. The character may also make attacks of opportunity while flat-footed.",
      "normal": "A character without this feat can make only one attack of opportunity each round, and cannot do so while flat-footed.",
      "special": "A rogue with the Combat Reflexes feat who uses her opportunist ability forgoes all other attacks of opportunity in that same round.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Rules engine support needed for extra reactions and flat-footed exceptions."
      }
    }
  },
  {
    "name": "Deflect Arrows",
    "type": "feat",
    "system": {
      "description": "<p>You can knock missiles from the air with practiced precision.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Dex 13, Hand to Hand",
      "benefit": "Once per round, with one hand free, you may deflect one ranged weapon that would otherwise hit you.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Dodge",
    "type": "feat",
    "system": {
      "description": "<p>You are skilled at avoiding an enemy's attacks.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Dex 13",
      "benefit": "Choose one opponent during your action and gain a +1 dodge bonus to AC against that opponent.",
      "normal": "",
      "special": "Dodge bonuses stack with each other, unlike most other types of bonuses.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 1,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": true,
        "needsToggle": false,
        "notes": "Requires selecting one opponent each round."
      }
    }
  },
  {
    "name": "Double Attack",
    "type": "feat",
    "system": {
      "description": "<p>Your fighting rhythm lets you strike more often than normal.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Monk 9+, paladin 12+, ranger 12+, rogue 11+, shadow knight 12+, or warrior 9+.",
      "benefit": "Your iterative attacks are calculated as if your weapon delay were one point lower.",
      "normal": "",
      "special": "Monks gain this feat as a bonus feat at 9th level.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Derived attack sequence changes by weapon delay."
      }
    }
  },
  {
    "name": "Dual Wield",
    "type": "feat",
    "system": {
      "description": "<p>You have developed a naturalized two-weapon fighting style.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Bard 11+, beastlord 8+, monk 1+, ranger 11+, rogue 8+, or warrior 7+.",
      "benefit": "The character may wield a one-handed melee weapon in each hand. He must declare one weapon to be his primary weapon and the other his off-hand weapon. When taking an attack or full attack action, the character gains one additional attack with his off-hand weapon at his full attack bonus, but with a flat -5 penalty.",
      "normal": "",
      "special": "Monks receive this feat as a bonus feat at 1st level. Beastlords receive this feat as a bonus feat at 8th level. A character who possesses both the Improved Two-Weapon Fighting and Dual Wield feats may make two attacks with his off-hand weapon at -5 and -10, respectively.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Needs dual-wield attack mode and off-hand sequence support."
      }
    }
  },
  {
    "name": "Endurance",
    "type": "feat",
    "system": {
      "description": "<p>You can keep going long after others would collapse.</p>",
      "category": "general",
      "categories": [
        "general"
      ],
      "prerequisites": "None",
      "benefit": "You gain a +4 bonus on checks and saves related to extended physical exertion, and you function better while fatigued or exhausted.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Enlarge Spell",
    "type": "feat",
    "system": {
      "description": "<p>You expand a spell's reach by feeding it extra mana.</p>",
      "category": "metamagic",
      "categories": [
        "metamagic",
        "mystic"
      ],
      "prerequisites": "Ability to cast spells",
      "benefit": "An enlarged spell has its range doubled. It costs 50% more mana to cast.",
      "normal": "",
      "special": "A spellcaster must decide whether he will enhance a spell with a metamagic feat when he prepares the spell, not when he casts it.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Prepared metamagic option that alters range and mana cost."
      }
    }
  },
  {
    "name": "Extend Spell",
    "type": "feat",
    "system": {
      "description": "<p>You sustain your spells longer with additional mana.</p>",
      "category": "metamagic",
      "categories": [
        "metamagic",
        "mystic"
      ],
      "prerequisites": "Ability to cast spells",
      "benefit": "An extended spell lasts 150% of its normal duration. It costs 50% more mana to cast.",
      "normal": "",
      "special": "A spellcaster must decide whether he will enhance a spell with a metamagic feat when he prepares the spell, not when he casts it.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Prepared metamagic option that alters duration and mana cost."
      }
    }
  },
  {
    "name": "Far Shot",
    "type": "feat",
    "system": {
      "description": "<p>You keep accuracy over much longer ranged shots.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Point Blank Shot",
      "benefit": "Projectile weapon range increments increase by one-half and thrown weapon range increments are doubled.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Finishing Blow",
    "type": "feat",
    "system": {
      "description": "<p>The character has mastered the art of the lethal blow and often kills or incapacitates a badly wounded creature with a single vicious attack.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Character level 21+.",
      "benefit": "Any melee attack by the character that successfully reduces a target's current hit points to 25% of its normal total or less has a chance of felling the target instantly. If the 25% current hit point condition is met, the target must make a Fortitude save (DC 10 + 1/2 the attacking character's level) or be reduced instantly to -1 hit points.",
      "normal": "",
      "special": "Shadow knights receive this feat as a bonus feat at 4th level, regardless of the feat's usual level requirement.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Triggered on melee damage threshold; requires target HP awareness and forced save resolution."
      }
    }
  },
  {
    "name": "Great Cleave",
    "type": "feat",
    "system": {
      "description": "<p>You can cut through groups of enemies without losing momentum.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Str 13, Power Attack, Cleave, BAB +4",
      "benefit": "As Cleave, except there is no limit to the number of extra attacks you may gain in a round.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Great Fortitude",
    "type": "feat",
    "system": {
      "description": "<p>Your body is especially resilient against poison, disease, and physical hardship.</p>",
      "category": "general",
      "categories": [
        "general"
      ],
      "prerequisites": "None",
      "benefit": "You gain a +2 bonus on all Fortitude saving throws.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 2,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Passive Fortitude save bonus."
      }
    }
  },
  {
    "name": "Hand to Hand",
    "type": "feat",
    "system": {
      "description": "<p>You are trained in effective unarmed combat.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "None",
      "benefit": "The character is considered to be armed even when unarmed: armed opponents do not get attacks of opportunity when the character attacks them unarmed, and the character himself gets an attack of opportunity against any opponent who makes an unarmed attack against him.",
      "normal": "",
      "special": "Beastlords and monks receive this feat as a bonus feat at 1st level.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Passive unarmed-threat rules once unarmed automation exists."
      }
    }
  },
  {
    "name": "Healing Adept",
    "type": "feat",
    "system": {
      "description": "<p>The character is an extremely powerful healer.</p>",
      "category": "mystic",
      "categories": [
        "mystic"
      ],
      "prerequisites": "Caster level 21+.",
      "benefit": "Whenever the character casts a spell that heals hit points, the number of hit points restored by the spell is increased by 25%.",
      "normal": "",
      "special": "The prerequisite for this feat refers to caster level, not class level, so hybrid character classes must be 25th level or higher to receive this feat.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Passive modifier to healing spell totals."
      }
    }
  },
  {
    "name": "Heighten Spell",
    "type": "feat",
    "system": {
      "description": "<p>The character has learned to fuel spells with extra mana, making them more powerful.</p>",
      "category": "metamagic",
      "categories": [
        "metamagic",
        "mystic"
      ],
      "prerequisites": "None",
      "benefit": "A heightened spell has a higher spell level than normal (up to 15th level). Unlike other metamagic feats, Heighten Spell actually increases the effective level of the spell that it modifies. All effects dependent on spell level are calculated according to the heightened level.",
      "normal": "",
      "special": "The heightened spell costs 100% more mana to cast for every additional spell level.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Prepared metamagic option that changes effective spell level and mana cost."
      }
    }
  },
  {
    "name": "Improved Bash",
    "type": "feat",
    "system": {
      "description": "<p>The character delivers particularly powerful bash attacks.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Str 13+, Bash, base attack bonus +6 or higher.",
      "benefit": "As the Bash feat, except that damage is increased to 1d8 for Large characters, 1d6 for Medium-size characters, and 1d4 for Small characters, and there is a chance the attack may stun its target. If the shield bash attack does 8 or more points of damage, it forces the target to make a Fortitude save (DC 10 + basher's Str modifier) or be dazed for 1 round.",
      "normal": "",
      "special": "The benefits of this feat do not stack with those from the Hand to Hand or Improved Hand to Hand feats. Improved Bash attacks are considered armed attacks.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Extends Bash attack mode with conditional daze rider."
      }
    }
  },
  {
    "name": "Improved Critical",
    "type": "feat",
    "system": {
      "description": "<p>The character has learned to strike vital blows more often with a chosen weapon.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Proficient with weapon, base attack bonus +8 or higher.",
      "benefit": "The character chooses a particular type of weapon. When using this selected type of weapon, the character's threat range is doubled.",
      "normal": "",
      "special": "The character can gain this feat multiple times. The effects do not stack. Each time a character takes the feat, it applies to a new weapon. Keen effects are additive to the base threat range rather than multiplicative.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": true,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Choice of weapon required; changes critical threat range."
      }
    }
  },
  {
    "name": "Improved Disarm",
    "type": "feat",
    "system": {
      "description": "<p>You are especially adept at stripping weapons from opponents.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Parry.",
      "benefit": "When the character attempts to disarm a defender, he does not draw an attack of opportunity from the defender, nor does the defender have an opportunity to disarm him as a result of the failed disarm attempt.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Only applies when using disarm maneuver flow."
      }
    }
  },
  {
    "name": "Improved Dodge",
    "type": "feat",
    "system": {
      "description": "<p>The character can make a special effort to avoid being hit by one or more foes.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Dex 13+, Dodge, base attack bonus +6 or higher.",
      "benefit": "During the character's action, she designates an opponent and receives a +2 dodge bonus to Armor Class against attacks from that opponent or designates two opponents and receives a +1 dodge bonus against each of them. Because dodge bonuses stack, the character may also apply the bonus gained from the Dodge feat independently.",
      "normal": "",
      "special": "A condition that makes a character lose her Dexterity bonus to Armor Class also makes her lose all dodge bonuses. Dodge bonuses stack with each other, unlike most other types of bonuses.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": true,
        "needsToggle": false,
        "notes": "Requires selecting one or two opponents each round."
      }
    }
  },
  {
    "name": "Improved Hand to Hand",
    "type": "feat",
    "system": {
      "description": "<p>The character is a skilled unarmed fighter.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Hand to Hand.",
      "benefit": "The character's base unarmed damage increases by one die-size increment and the character may choose to deal either real or subdual damage with unarmed attacks at no penalty.",
      "normal": "",
      "special": "Beastlords receive this feat as a bonus feat at 3rd level, and monks at 2nd level.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Passive upgrade to unarmed damage and damage-type choice."
      }
    }
  },
  {
    "name": "Improved Healing",
    "type": "feat",
    "system": {
      "description": "<p>The character heals at an unusually fast rate.</p>",
      "category": "general",
      "categories": [
        "general"
      ],
      "prerequisites": "Character level 1+.",
      "benefit": "When determining how many hit points the character recovers through natural healing, treat him as if he were 5 levels higher.",
      "normal": "",
      "special": "A character with fast healing recovers hit points on a per-hour basis rather than per-day; use the same +5 effective levels there as well.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Passive modifier to natural healing calculations."
      }
    }
  },
  {
    "name": "Improved Initiative",
    "type": "feat",
    "system": {
      "description": "<p>You act more quickly than most when battle begins.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "None",
      "benefit": "You gain a +4 bonus on initiative checks.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 4,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Passive initiative bonus."
      }
    }
  },
  {
    "name": "Improved Parry",
    "type": "feat",
    "system": {
      "description": "<p>You fight in a highly defensive style without giving up total offense.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Int 13, Parry",
      "benefit": "When attacking in melee, you may take up to a -10 penalty on attack rolls and gain the same amount as a dodge bonus to AC until your next action.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Expanded Parry option with larger attack-for-AC trade."
      }
    }
  },
  {
    "name": "Improved Resistance",
    "type": "feat",
    "system": {
      "description": "<p>The character has developed powerful resistance to one attack form.</p>",
      "category": "general",
      "categories": [
        "general"
      ],
      "prerequisites": "Character level 21+, Resistance (for the same attack type).",
      "benefit": "The character may select any resistance type for which he has already purchased the Resistance feat and his resistance to that type becomes a bonus of resistance (8). The character's saving throw bonus to that type of attack also increases to +4.",
      "normal": "",
      "special": "The character can gain this feat multiple times. The effects do not stack. Each time the character takes the feat, it applies to a new resistance type for which the character must already have the Resistance feat.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": true,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Choice of already-owned resistance type required; passive once chosen."
      }
    }
  },
  {
    "name": "Improved Slam",
    "type": "feat",
    "system": {
      "description": "<p>The character delivers particularly powerful slam attacks.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Str 13+, Slam feat or natural slam attack, base attack bonus +6 or higher.",
      "benefit": "The character's slam damage is increased by one die-size increment, and if the slam does 8 or more points of damage it forces the target to make a Fortitude save (DC 10 + attacker's Str modifier) or be dazed for 1 round.",
      "normal": "",
      "special": "The benefits of this feat do not stack with those from the Hand to Hand or Improved Hand to Hand feats, as slam attacks are considered armed attacks. Creatures with natural slam attacks can take this feat.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Extends slam attack mode with conditional daze rider."
      }
    }
  },
  {
    "name": "Improved Trip",
    "type": "feat",
    "system": {
      "description": "<p>You capitalize instantly when you put an enemy on the ground.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Int 13, Parry",
      "benefit": "You do not provoke an attack of opportunity when tripping, and if you trip a foe you gain an immediate melee attack against that foe.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Improved Two-Weapon Fighting",
    "type": "feat",
    "system": {
      "description": "<p>The character has trained extensively in the art of fighting with two weapons.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Two-Weapon Fighting and Ambidexterity feats or Dual Wield feat; base attack bonus +9 or higher.",
      "benefit": "This feat allows a masterful fighter to make an additional off-hand attack whenever he is fighting with two weapons during a full-round iterative attack action. This additional off-hand attack suffers a further -5 penalty in addition to the penalty for the character's first off-hand attack.",
      "normal": "See \"Attacking with Two Weapons\" in Chapter 12: Combat.",
      "special": "With Dual Wield and Improved Two-Weapon Fighting, a character makes two additional off-hand attacks at -5 and -10. With Two-Weapon Fighting, Ambidexterity, and Improved Two-Weapon Fighting, the off-hand attacks are at -2 and -7 while primary iterative attacks still take the normal two-weapon penalties.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Adds secondary off-hand attack sequence to full attacks."
      }
    }
  },
  {
    "name": "Iron Will",
    "type": "feat",
    "system": {
      "description": "<p>Your force of personality and discipline make you hard to bend.</p>",
      "category": "general",
      "categories": [
        "general"
      ],
      "prerequisites": "None",
      "benefit": "You gain a +2 bonus on all Will saving throws.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 2,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Passive Will save bonus."
      }
    }
  },
  {
    "name": "Leadership",
    "type": "feat",
    "system": {
      "description": "<p>Your reputation and bearing inspire others to serve your cause.</p>",
      "category": "general",
      "categories": [
        "general"
      ],
      "prerequisites": "Character level 6",
      "benefit": "You attract a loyal cohort and followers according to your Leadership score.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Lightning Reflexes",
    "type": "feat",
    "system": {
      "description": "<p>Your reactions are faster than most and you avoid danger instinctively.</p>",
      "category": "general",
      "categories": [
        "general"
      ],
      "prerequisites": "None",
      "benefit": "You gain a +2 bonus on all Reflex saving throws.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 2,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Passive Reflex save bonus."
      }
    }
  },
  {
    "name": "Mental Clarity",
    "type": "feat",
    "system": {
      "description": "<p>The character recovers mana at an unusually quick rate.</p>",
      "category": "mystic",
      "categories": [
        "mystic"
      ],
      "prerequisites": "Meditation (15+ ranks).",
      "benefit": "When determining how rapidly the character recovers mana, treat him as if he had 5 more ranks of the Meditation skill than he actually does.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Passive modifier to mana recovery calculations."
      }
    }
  },
  {
    "name": "Mobility",
    "type": "feat",
    "system": {
      "description": "<p>The character is trained to avoid dropping guard when moving in melee combat.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Dex 13+, Dodge.",
      "benefit": "The character gets a +4 dodge bonus to Armor Class against attacks of opportunity provoked by moving out of or within a threatened area.",
      "normal": "",
      "special": "A condition that makes a character lose his Dexterity bonus to Armor Class also makes him lose all dodge bonuses. Dodge bonuses stack with each other.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Passive modifier to movement-provoked attacks of opportunity."
      }
    }
  },
  {
    "name": "Mounted Archery",
    "type": "feat",
    "system": {
      "description": "<p>The character is trained to make ranged attacks from horseback.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Mounted Combat, Ride (4+ ranks).",
      "benefit": "The penalty the character suffers when using a ranged weapon from horseback is halved to -2 instead of -4 if her mount is taking a double move, or -4 instead of -8 if her mount is running.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Passive mounted ranged penalty reduction."
      }
    }
  },
  {
    "name": "Mounted Combat",
    "type": "feat",
    "system": {
      "description": "<p>The character is trained to fight in melee from a mount.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Ride (4+ ranks).",
      "benefit": "Once per round when the character's mount is hit in combat, the character may make a Ride check to negate the hit. The hit is negated if the character's Ride check is greater than the attack roll.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Reactive defense against hits on a mount."
      }
    }
  },
  {
    "name": "Mystic Capacity",
    "type": "feat",
    "system": {
      "description": "<p>The character has a particularly great capacity for preparing and retaining spells or songs.</p>",
      "category": "mystic",
      "categories": [
        "mystic"
      ],
      "prerequisites": "Ability to cast 1st-level spells.",
      "benefit": "The character gains one additional spell or song preparation slot, allowing the character to have one more prepared at a time.",
      "normal": "",
      "special": "This feat may be taken a maximum of eight times.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Passive increase to prepared spell or song capacity."
      }
    }
  },
  {
    "name": "Parry",
    "type": "feat",
    "system": {
      "description": "<p>You are practiced at turning offense into defense.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Int 13",
      "benefit": "When attacking in melee, you may take up to a -5 penalty on attack rolls and gain the same amount as a dodge bonus to AC until your next action.",
      "normal": "A character without the Parry feat can fight defensively while using the attack or full attack action, taking a -4 penalty on attacks and thus gaining a +2 dodge bonus to Armor Class.",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "User-selected attack penalty for AC trade each round."
      }
    }
  },
  {
    "name": "Point Blank Shot",
    "type": "feat",
    "system": {
      "description": "<p>You are especially accurate with nearby ranged targets.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "None",
      "benefit": "The character gets a +1 bonus to attack and damage rolls with ranged weapons at ranges of up to 30 feet.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Passive range-based modifier."
      }
    }
  },
  {
    "name": "Power Attack",
    "type": "feat",
    "system": {
      "description": "<p>You can trade accuracy for devastating force.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Str 13",
      "benefit": "Before making melee attacks, you may take a penalty on attack rolls up to your base attack bonus and add the same number to melee damage rolls.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "User-selected attack penalty to damage trade each round."
      }
    }
  },
  {
    "name": "Precise Shot",
    "type": "feat",
    "system": {
      "description": "<p>You place ranged attacks accurately even in crowded fights.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Point Blank Shot",
      "benefit": "You ignore the normal -4 penalty for firing or throwing into melee.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Quest Spell",
    "type": "feat",
    "system": {
      "description": "<p>The character has learned to buffer spells with extra mana, making them safe for members of a questing group.</p>",
      "category": "metamagic",
      "categories": [
        "metamagic",
        "mystic"
      ],
      "prerequisites": "None",
      "benefit": "When preparing a spell with the Quest Spell metamagic feat, a spellcaster may designate up to five other creatures as being part of his questing party. Quest spells never harm, affect, or hamper members of the spellcaster's questing party even if they are caught within the spell's area or effect.",
      "normal": "",
      "special": "A quest spell requires 50% more mana than the spell normally costs. The caster may apply this feat multiple times to the same casting, selecting 5 additional creatures for the questing party and paying 50% additional mana per use.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": true,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Prepared metamagic option that requires selected protected party members."
      }
    }
  },
  {
    "name": "Quick Draw",
    "type": "feat",
    "system": {
      "description": "<p>The character can draw a weapon with remarkable speed.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Base attack bonus +1 or higher.",
      "benefit": "The character can draw a weapon as a free action instead of as a move action.",
      "normal": "",
      "special": "The character does not draw attacks of opportunity for doing so.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Passive action economy rule for drawing weapons."
      }
    }
  },
  {
    "name": "Quicken Spell",
    "type": "feat",
    "system": {
      "description": "<p>You unleash prepared magic with startling speed.</p>",
      "category": "metamagic",
      "categories": [
        "metamagic",
        "mystic"
      ],
      "prerequisites": "Ability to cast spells",
      "benefit": "A spell that normally takes 1 action becomes a free action. A quickened spell costs 300% more mana to cast.",
      "normal": "",
      "special": "You may cast only one quickened spell per round.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Prepared metamagic option that changes casting time and mana cost."
      }
    }
  },
  {
    "name": "Rapid Shot",
    "type": "feat",
    "system": {
      "description": "<p>The character can make ranged attacks much more quickly than most.</p>",
      "category": "general",
      "categories": [
        "general"
      ],
      "prerequisites": "Dex 13+, Point Blank Shot.",
      "benefit": "The character may make one extra attack per round with a ranged weapon. The attack is at the character's highest base attack bonus, but each attack (the extra one and the normal ones) suffers a -2 penalty. The character must take a full attack action to use this feat.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Optional ranged full-attack mode that changes attack sequence and penalties."
      }
    }
  },
  {
    "name": "Resistance",
    "type": "feat",
    "system": {
      "description": "<p>Your body and spirit have adapted against a particular form of harm.</p>",
      "category": "general",
      "categories": [
        "general"
      ],
      "prerequisites": "Character level 11",
      "benefit": "Choose acid, cold, disease, electricity, fire, magic, poison, or sonic. You gain resistance 4 against that attack type and a +2 bonus on related saves.",
      "normal": "",
      "special": "You may take this feat multiple times, choosing a different resistance type each time.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": true,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Choice of resistance type required; passive resistance and save bonus once chosen."
      }
    }
  },
  {
    "name": "Ride-By Attack",
    "type": "feat",
    "system": {
      "description": "<p>You make swift mounted strikes without stopping beside the enemy.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Mounted Combat, Ride 4 ranks",
      "benefit": "When mounted and charging, you may move, attack, and then continue moving in the same line without provoking from the target you attacked.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Mounted charge sequencing support required."
      }
    }
  },
  {
    "name": "Riposte",
    "type": "feat",
    "system": {
      "description": "<p>The character has trained to retaliate quickly when an opponent misses in melee.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Bard 29+, beastlord 20+, monk 18+, paladin 16+, ranger 18+, rogue 16+, shadow knight 16+, or warrior 14+.",
      "benefit": "A character with the Riposte feat may take an attack of opportunity against any opponent who attacks and misses him in melee combat. The character must be threatening the space the opponent occupies, and the riposte attack counts against the total number of attacks of opportunity the character may make each round.",
      "normal": "",
      "special": "Only one attack of opportunity can be made against any single opponent in a round, whether the attack of opportunity is due to Riposte or some other provocation.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Reaction trigger on melee miss; needs attack-of-opportunity engine support."
      }
    }
  },
  {
    "name": "Run",
    "type": "feat",
    "system": {
      "description": "<p>You cover ground with exceptional speed.</p>",
      "category": "general",
      "categories": [
        "general"
      ],
      "prerequisites": "None",
      "benefit": "You run five times your normal speed instead of four times and gain improved distance on running jumps.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "School Specialization",
    "type": "feat",
    "system": {
      "description": "<p>You have deep expertise in one branch of magical study.</p>",
      "category": "mystic",
      "categories": [
        "mystic"
      ],
      "prerequisites": "Ability to cast 2nd-level spells, must know at least one spell from the school to be specialized in.",
      "benefit": "The character picks one school of magic (abjuration, alteration, conjuration, divination, or evocation). The character gets a +2 bonus to all Channeling and Spellcraft checks made involving spells or effects from that school.",
      "normal": "",
      "special": "You may take this feat multiple times, choosing a different school each time.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": true,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Choice of school required at acquisition."
      }
    }
  },
  {
    "name": "Shield Proficiency",
    "type": "feat",
    "system": {
      "description": "<p>You are trained in the effective use of shields.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "None",
      "benefit": "You use shields without suffering their armor check penalty on attacks and most movement-related skill checks.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Shot on the Run",
    "type": "feat",
    "system": {
      "description": "<p>You can fire while in motion without planting your feet.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Dex 13, Dodge, Mobility, Point Blank Shot",
      "benefit": "When making a ranged attack, you may move before and after the attack as long as total movement does not exceed your speed.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Movement-attack-movement sequencing support required."
      }
    }
  },
  {
    "name": "Silent Spell",
    "type": "feat",
    "system": {
      "description": "<p>You have learned to shape spells without speaking aloud.</p>",
      "category": "metamagic",
      "categories": [
        "metamagic",
        "mystic"
      ],
      "prerequisites": "Ability to cast spells",
      "benefit": "A silent spell can be cast without verbal components. It costs 50% more mana to cast.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Prepared metamagic option that changes component requirements and mana cost."
      }
    }
  },
  {
    "name": "Skill Talent",
    "type": "feat",
    "system": {
      "description": "<p>You possess unusual talent in one chosen field.</p>",
      "category": "general",
      "categories": [
        "general"
      ],
      "prerequisites": "None",
      "benefit": "Choose one skill. You gain a +3 bonus on all checks with that skill.",
      "normal": "",
      "special": "You may take this feat multiple times. Each time it applies to a different skill.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": true,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Slam",
    "type": "feat",
    "system": {
      "description": "<p>Your body itself is a weapon capable of crushing blows.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Large size or larger",
      "benefit": "The character may make a slam attack either as an attack action or as an additional attack within a full attack action. The slam attack is always at the character's highest attack bonus, although if it is used as part of a full attack action, the slam and all other attacks made during the round suffer a -2 penalty to the attack roll.",
      "normal": "Without the Slam feat, a character making an attack without a weapon is considered unarmed, and attacking unarmed provokes attacks of opportunity.",
      "special": "Ogres and trolls receive this feat as a bonus feat at 1st level. Barbarians also receive this feat at 1st level, despite the fact that they are not technically Large creatures. The benefits of this feat do not stack with those from the Hand to Hand or Improved Hand to Hand feats, as slam attacks are not considered unarmed attacks.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Adds an alternate or bonus slam attack routine."
      }
    }
  },
  {
    "name": "Spell Focus",
    "type": "feat",
    "system": {
      "description": "<p>Your magic in one chosen school is more difficult to resist.</p>",
      "category": "mystic",
      "categories": [
        "mystic"
      ],
      "prerequisites": "None",
      "benefit": "The character chooses a school of magic, such as conjuration. All saving throw DCs for spells she casts from the selected school are increased by +2.",
      "normal": "",
      "special": "The character can gain this feat multiple times. Its effects do not stack. Each time the character takes the feat, it applies to a new school of magic.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": true,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Choice of school required; then passive spell DC bonus."
      }
    }
  },
  {
    "name": "Spirited Charge",
    "type": "feat",
    "system": {
      "description": "<p>The character is particularly proficient with mounted charges.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Mounted Combat, Ride-By Attack, Ride (8+ ranks).",
      "benefit": "When mounted and using the charge action, the character deals double damage with a melee weapon or triple damage with a lance.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Passive mounted charge damage multiplier once mounted charge flow exists."
      }
    }
  },
  {
    "name": "Spring Attack",
    "type": "feat",
    "system": {
      "description": "<p>You can dart in, strike, and pull back before the counter comes.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Dex 13, Dodge, Mobility, BAB +4",
      "benefit": "When using the attack action with a melee weapon, the character can move both before and after the attack, provided that his total distance moved is not greater than his speed. Moving in this way does not provoke an attack of opportunity from the defender the character attacks.",
      "normal": "",
      "special": "The character can't use this feat if he is in heavy armor.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Movement-attack-movement sequencing support required."
      }
    }
  },
  {
    "name": "Still Spell",
    "type": "feat",
    "system": {
      "description": "<p>You cast spells without visible hand movements by spending more mana.</p>",
      "category": "metamagic",
      "categories": [
        "metamagic",
        "mystic"
      ],
      "prerequisites": "Ability to cast spells",
      "benefit": "A still spell can be cast without somatic components. It costs 50% more mana to cast.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Prepared metamagic option that changes component requirements and mana cost."
      }
    }
  },
  {
    "name": "Sunder",
    "type": "feat",
    "system": {
      "description": "<p>You are practiced at breaking the weapons of your foes.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Str 13, Power Attack",
      "benefit": "You do not provoke an attack of opportunity when striking an opponent's weapon.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Swift",
    "type": "feat",
    "system": {
      "description": "<p>The character is unusually fleet of foot.</p>",
      "category": "general",
      "categories": [
        "general"
      ],
      "prerequisites": "Dex 13+, Run.",
      "benefit": "The character's base speed is increased by 10 feet.",
      "normal": "",
      "special": "This feat may be taken only once.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Passive base speed increase."
      }
    }
  },
  {
    "name": "Toughened",
    "type": "feat",
    "system": {
      "description": "<p>You are unusually hard to kill.</p>",
      "category": "general",
      "categories": [
        "general"
      ],
      "prerequisites": "None",
      "benefit": "The character gains a number of hit points equal to 1 + the character's base Fortitude save bonus. This bonus to hit points increases retroactively as the character gains levels and his base Fortitude save increases.",
      "normal": "",
      "special": "A character may gain this feat only one time.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Passive hit point scaling by base Fortitude save."
      }
    }
  },
  {
    "name": "Track",
    "type": "feat",
    "system": {
      "description": "<p>You can read the ground and the wild like a book.</p>",
      "category": "general",
      "categories": [
        "general"
      ],
      "prerequisites": "Wilderness Lore 1 rank",
      "benefit": "You may use Wilderness Lore to find and follow tracks and gather details about those who made them.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Skill procedure automation, not passive combat math."
      }
    }
  },
  {
    "name": "Trample",
    "type": "feat",
    "system": {
      "description": "<p>You can overrun enemies beneath your mount's weight and momentum.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Mounted Combat, Ride 4 ranks",
      "benefit": "When mounted, creatures you overrun may not choose to avoid your mount, and your mount may make a hoof attack if it knocks them down.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Two-Weapon Fighting",
    "type": "feat",
    "system": {
      "description": "<p>You are trained in the fundamentals of two-weapon combat.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "None",
      "benefit": "Your penalties for fighting with two weapons are reduced by 2.",
      "normal": "",
      "special": "This feat has no effect when using the Dual Wield feat.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Weapon Class Proficiency (Archery)",
    "type": "feat",
    "system": {
      "description": "<p>The character is trained in the use of a propelled ranged weapon, such as a shortbow or a sling.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "None",
      "benefit": "The character makes attack rolls with the chosen weapon normally.",
      "normal": "A character who uses a weapon without being proficient with it suffers a -4 penalty on attack rolls.",
      "special": "Paladins, rangers, rogues, shadow knights, and warriors begin play proficient with all weapons in the archery category. The character can gain this feat multiple times. Each time the character takes the feat, it applies to a new weapon.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Passive proficiency for the selected weapon class item."
      }
    }
  },
  {
    "name": "Weapon Class Proficiency (Hand-to-Hand)",
    "type": "feat",
    "system": {
      "description": "<p>This feat acts as Weapon Class Proficiency (Archery), except that it applies to hand-to-hand weapons.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "None",
      "benefit": "The character makes attack rolls with the chosen hand-to-hand weapon normally.",
      "normal": "A character who uses a weapon without being proficient with it suffers a -4 penalty on attack rolls.",
      "special": "Beastlords, monks, and warriors begin play proficient with all weapons in the hand-to-hand category.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Passive proficiency for the selected weapon class item."
      }
    }
  },
  {
    "name": "Weapon Class Proficiency (One-Handed Blunt)",
    "type": "feat",
    "system": {
      "description": "<p>This feat acts as Weapon Class Proficiency (Archery), except that it applies to one-handed blunt weapons.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "None",
      "benefit": "The character makes attack rolls with the chosen one-handed blunt weapon normally.",
      "normal": "A character who uses a weapon without being proficient with it suffers a -4 penalty on attack rolls.",
      "special": "Bards, beastlords, clerics, druids, monks, paladins, rangers, rogues, shadow knights, shamans, and warriors begin play proficient with all weapons in the one-handed blunt category. Enchanters, magicians, necromancers, and wizards begin play proficient with all simple weapons in the one-handed blunt category.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Passive proficiency for the selected weapon class item."
      }
    }
  },
  {
    "name": "Weapon Class Proficiency (One-Handed Slashing)",
    "type": "feat",
    "system": {
      "description": "<p>This feat acts as Weapon Class Proficiency (Archery), except that it applies to one-handed slashing weapons.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "None",
      "benefit": "The character makes attack rolls with the chosen one-handed slashing weapon normally.",
      "normal": "A character who uses a weapon without being proficient with it suffers a -4 penalty on attack rolls.",
      "special": "Bards, paladins, rangers, rogues, shadow knights, and warriors begin play proficient with all weapons in the one-handed slashing category. Druids begin play proficient with scimitars.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Passive proficiency for the selected weapon class item."
      }
    }
  },
  {
    "name": "Weapon Class Proficiency (Piercing)",
    "type": "feat",
    "system": {
      "description": "<p>This feat acts as Weapon Class Proficiency (Archery), except that it applies to piercing weapons.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "None",
      "benefit": "The character makes attack rolls with the chosen piercing weapon normally.",
      "normal": "A character who uses a weapon without being proficient with it suffers a -4 penalty on attack rolls.",
      "special": "Bards, beastlords, rangers, rogues, shadow knights, shamans, and warriors begin play proficient with all weapons in the piercing category. Enchanters, magicians, necromancers, and wizards begin play proficient with all simple weapons in the piercing category.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Passive proficiency for the selected weapon class item."
      }
    }
  },
  {
    "name": "Weapon Class Proficiency (Throwing)",
    "type": "feat",
    "system": {
      "description": "<p>This feat acts as Weapon Class Proficiency (Archery), except that it applies to thrown weapons.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "None",
      "benefit": "The character makes attack rolls with the chosen thrown weapon normally.",
      "normal": "A character who uses a weapon without being proficient with it suffers a -4 penalty on attack rolls.",
      "special": "A character might be proficient at throwing a weapon but not in wielding it in melee, or the reverse. Bards, beastlords, monks, rangers, rogues, and warriors begin play proficient with all weapons in the throwing category. Enchanters, magicians, necromancers, and wizards begin play proficient with all simple weapons in the throwing category.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Passive proficiency for the selected weapon class item."
      }
    }
  },
  {
    "name": "Weapon Class Proficiency (Two-Handed Blunt)",
    "type": "feat",
    "system": {
      "description": "<p>This feat acts as Weapon Class Proficiency (Archery), except that it applies to two-handed blunt weapons.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "None",
      "benefit": "The character makes attack rolls with the chosen two-handed blunt weapon normally.",
      "normal": "A character who uses a weapon without being proficient with it suffers a -4 penalty on attack rolls.",
      "special": "Such weapons include all blunt melee weapons that are one size larger than the character. Beastlords, clerics, druids, monks, rangers, shamans, and warriors begin play proficient with all weapons in the two-handed blunt category. Enchanters, magicians, necromancers, and wizards begin play proficient with all simple weapons in the two-handed blunt category.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Passive proficiency for the selected weapon class item."
      }
    }
  },
  {
    "name": "Weapon Class Proficiency (Two-Handed Slashing)",
    "type": "feat",
    "system": {
      "description": "<p>This feat acts as Weapon Class Proficiency (Archery), except that it applies to two-handed slashing weapons.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "None",
      "benefit": "The character makes attack rolls with the chosen two-handed slashing weapon normally.",
      "normal": "A character who uses a weapon without being proficient with it suffers a -4 penalty on attack rolls.",
      "special": "Such weapons include all slashing melee weapons that are one size larger than the character. Paladins, shadow knights, and warriors begin play proficient with all weapons in the two-handed slashing category.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Passive proficiency for the selected weapon class item."
      }
    }
  },
  {
    "name": "Weapon Finesse",
    "type": "feat",
    "system": {
      "description": "<p>You fight with speed and precision instead of brute force.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Proficient with weapon, base attack bonus +1 or higher.",
      "benefit": "The character chooses a particular quick delay or faster weapon (one with a delay of 4 or less, such as a dagger or rapier). With the selected weapon type, the character may apply her Dexterity modifier instead of her Strength modifier on attack rolls.",
      "normal": "",
      "special": "The character applies the armor check penalty of any shield she wears to her attack rolls while using this feat. The character can gain this feat multiple times. Each time a character takes the feat, it applies to a new weapon.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": true,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Choice of eligible weapon required; changes attack ability and shield interaction."
      }
    }
  },
  {
    "name": "Weapon Focus",
    "type": "feat",
    "system": {
      "description": "<p>You have honed your skill with one chosen weapon above the rest.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Proficient with weapon, BAB +1",
      "benefit": "The character chooses a particular type of weapon, such as a broad sword or a sling. The character adds +1 to all attack rolls she makes using the selected type of weapon. A character can choose unarmed strike or grapple for Weapon Focus, and can even choose ranged touch spells or melee touch spells.",
      "normal": "",
      "special": "The character can gain this feat multiple times. Its effects do not stack. Each time the character takes the feat, it applies to a new weapon.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": true,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Choice of weapon or attack form required."
      }
    }
  },
  {
    "name": "Weapon Specialization",
    "type": "feat",
    "system": {
      "description": "<p>You are exceptionally dangerous with one chosen weapon.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Weapon Focus, ranger 8 (archery only), rogue 10 (piercing only), or warrior 4",
      "benefit": "The character chooses a particular type of weapon with which he already has the Weapon Focus feat. The character gets a +2 bonus on all damage rolls with the chosen weapon. Rogues or warriors using this feat with a ranged weapon only receive the bonus if the target is within 30 feet. Rangers may take this feat only with an archery weapon and get the damage bonus against any target within one range increment of their weapon.",
      "normal": "",
      "special": "The character can gain this feat multiple times. Its effects do not stack. Each time the character takes the feat, it applies to a new weapon. A rogue who qualifies for this feat may select any piercing weapon, including archery weapons or throwing weapons with the piercing designation.",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": true,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Choice of qualifying weapon required; ranged limits depend on class and distance."
      }
    }
  },
  {
    "name": "Whirlwind Attack",
    "type": "feat",
    "system": {
      "description": "<p>You can strike every nearby foe in one sweeping assault.</p>",
      "category": "combat",
      "categories": [
        "combat"
      ],
      "prerequisites": "Int 13, Dex 13, Dodge, Mobility, Parry, Spring Attack, BAB +4",
      "benefit": "As a full attack, you may give up your normal attacks to make one melee attack at full bonus against each adjacent opponent.",
      "normal": "",
      "special": "",
      "bonuses": {
        "fort": 0,
        "reflex": 0,
        "will": 0,
        "init": 0,
        "ac": 0,
        "hp": 0,
        "attack": 0
      },
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  }
];

// Source: module/packs/source/skills.json
export const SAMPLE_SKILLS = [
  {
    "name": "Alcohol Tolerance",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "con",
      "classSkill": false,
      "armorCheckPenalty": false,
      "description": "<p>Resist the effects of drink and other bodily impairments brought on by heavy alcohol consumption.</p>"
    }
  },
  {
    "name": "Animal Empathy",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "cha",
      "classSkill": false,
      "armorCheckPenalty": false,
      "trainedOnly": true,
      "description": "<p>Influence the attitude of animals and calm or direct them without violence.</p>"
    }
  },
  {
    "name": "Appraise",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "int",
      "classSkill": false,
      "armorCheckPenalty": false,
      "description": "<p>Estimate the market value of goods, art objects, jewelry, and other valuables.</p>"
    }
  },
  {
    "name": "Balance",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "dex",
      "classSkill": false,
      "armorCheckPenalty": true,
      "description": "<p>Keep your footing on narrow, angled, or slippery surfaces.</p>"
    }
  },
  {
    "name": "Bluff",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "cha",
      "classSkill": false,
      "armorCheckPenalty": false,
      "languageDependent": true,
      "description": "<p>Mislead, feint, or otherwise deceive another creature through word and demeanor.</p>"
    }
  },
  {
    "name": "Channeling",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "con",
      "classSkill": false,
      "armorCheckPenalty": false,
      "description": "<p>Maintain the focus needed to complete a spell while distracted, endangered, or physically threatened.</p>"
    }
  },
  {
    "name": "Climb",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "str",
      "classSkill": false,
      "armorCheckPenalty": true,
      "description": "<p>Scale walls, ropes, trees, cliffs, and other steep surfaces.</p>"
    }
  },
  {
    "name": "Diplomacy",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "cha",
      "classSkill": false,
      "armorCheckPenalty": false,
      "languageDependent": true,
      "description": "<p>Negotiate, haggle, persuade, or beg without resorting to threats or force.</p>"
    }
  },
  {
    "name": "Disable Device",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "int",
      "classSkill": false,
      "armorCheckPenalty": false,
      "trainedOnly": true,
      "description": "<p>Disarm, jam, or sabotage locks, traps, and delicate mechanisms.</p>"
    }
  },
  {
    "name": "Disguise",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "cha",
      "classSkill": false,
      "armorCheckPenalty": false,
      "languageDependent": true,
      "description": "<p>Alter your appearance convincingly enough to pass as someone or something else.</p>"
    }
  },
  {
    "name": "Escape Artist",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "dex",
      "classSkill": false,
      "armorCheckPenalty": true,
      "description": "<p>Slip out of bonds, shackles, grapples, and other restraints.</p>"
    }
  },
  {
    "name": "Forgery",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "int",
      "classSkill": false,
      "armorCheckPenalty": false,
      "description": "<p>Create or detect false documents, seals, and handwriting.</p>"
    }
  },
  {
    "name": "Gather Information",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "cha",
      "classSkill": false,
      "armorCheckPenalty": false,
      "languageDependent": true,
      "description": "<p>Learn rumors, secrets, and local talk by asking around and listening well.</p>"
    }
  },
  {
    "name": "Handle Animal",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "cha",
      "classSkill": false,
      "armorCheckPenalty": false,
      "trainedOnly": true,
      "description": "<p>Rear, train, calm, and direct domestic animals and beasts under your care.</p>"
    }
  },
  {
    "name": "Heal",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "wis",
      "classSkill": false,
      "armorCheckPenalty": false,
      "description": "<p>Stabilize allies, bind wounds, provide long-term care, and treat disease or poison.</p>"
    }
  },
  {
    "name": "Hide",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "dex",
      "classSkill": false,
      "armorCheckPenalty": true,
      "description": "<p>Remain unseen by using cover, shadows, and concealment.</p>"
    }
  },
  {
    "name": "Intimidate",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "cha",
      "classSkill": false,
      "armorCheckPenalty": false,
      "languageDependent": true,
      "description": "<p>Threaten, cow, or bully another creature into backing down.</p>"
    }
  },
  {
    "name": "Jump",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "str",
      "classSkill": false,
      "armorCheckPenalty": true,
      "description": "<p>Leap over gaps, obstacles, and hazards, or spring upward to higher ledges.</p>"
    }
  },
  {
    "name": "Knowledge (Art and Literature)",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "int",
      "classSkill": false,
      "armorCheckPenalty": false,
      "description": "<p>Recall artists, texts, songs, ballads, legends, and other cultural works.</p>"
    }
  },
  {
    "name": "Knowledge (Folklore)",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "int",
      "classSkill": false,
      "armorCheckPenalty": false,
      "description": "<p>Recall myths, superstitions, folk remedies, and cultural tales.</p>"
    }
  },
  {
    "name": "Knowledge (Geography)",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "int",
      "classSkill": false,
      "armorCheckPenalty": false,
      "description": "<p>Recall lands, cities, landmarks, routes, and the peoples who dwell there.</p>"
    }
  },
  {
    "name": "Knowledge (Local Lore)",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "int",
      "classSkill": false,
      "armorCheckPenalty": false,
      "description": "<p>Recall local customs, laws, notable residents, and city politics.</p>"
    }
  },
  {
    "name": "Knowledge (Monster Lore)",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "int",
      "classSkill": false,
      "armorCheckPenalty": false,
      "description": "<p>Recall a creature type's habits, habitat, strengths, and weaknesses.</p>"
    }
  },
  {
    "name": "Knowledge (Mysticism)",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "int",
      "classSkill": false,
      "armorCheckPenalty": false,
      "description": "<p>Recall magical traditions, symbols, prophecy, and arcane mysteries.</p>"
    }
  },
  {
    "name": "Knowledge (Nature)",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "int",
      "classSkill": false,
      "armorCheckPenalty": false,
      "description": "<p>Recall flora, fauna, weather, seasons, and other natural cycles.</p>"
    }
  },
  {
    "name": "Knowledge (Planar Travel)",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "int",
      "classSkill": false,
      "armorCheckPenalty": false,
      "description": "<p>Recall planes, planar hazards, inhabitants, and methods of travel between them.</p>"
    }
  },
  {
    "name": "Knowledge (Religion)",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "int",
      "classSkill": false,
      "armorCheckPenalty": false,
      "description": "<p>Recall gods, churches, dogma, sacred history, and religious practices.</p>"
    }
  },
  {
    "name": "Knowledge (Street Smarts)",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "int",
      "classSkill": false,
      "armorCheckPenalty": false,
      "description": "<p>Recall gangs, fences, criminal customs, and the unwritten rules of the streets.</p>"
    }
  },
  {
    "name": "Knowledge (Warcraft)",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "int",
      "classSkill": false,
      "armorCheckPenalty": false,
      "description": "<p>Recall tactics, commanders, battle doctrine, and the history of war.</p>"
    }
  },
  {
    "name": "Language",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "int",
      "classSkill": false,
      "armorCheckPenalty": false,
      "trainedOnly": true,
      "description": "<p>Speak, understand, or decipher tongues beyond the ones you begin with.</p>"
    }
  },
  {
    "name": "Listen",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "wis",
      "classSkill": false,
      "armorCheckPenalty": false,
      "description": "<p>Notice distant, faint, or hidden sounds.</p>"
    }
  },
  {
    "name": "Meditation",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "int",
      "classSkill": false,
      "armorCheckPenalty": false,
      "description": "<p>Recover mana through focused rest; in play this follows the caster's appropriate casting tradition.</p>"
    }
  },
  {
    "name": "Perform",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "cha",
      "classSkill": false,
      "armorCheckPenalty": false,
      "description": "<p>Entertain through song, story, acting, dance, or other performance arts.</p>"
    }
  },
  {
    "name": "Pick Lock",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "dex",
      "classSkill": false,
      "armorCheckPenalty": false,
      "trainedOnly": true,
      "description": "<p>Open mechanical locks using thieves' tools and a practiced hand.</p>"
    }
  },
  {
    "name": "Pick Pocket",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "dex",
      "classSkill": false,
      "armorCheckPenalty": false,
      "trainedOnly": true,
      "description": "<p>Lift small items from another creature without being noticed.</p>"
    }
  },
  {
    "name": "Play Brass Instrument",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "con",
      "classSkill": false,
      "armorCheckPenalty": false,
      "trainedOnly": true,
      "description": "<p>Play horns and other brass instruments with proper breath, tone, and control.</p>"
    }
  },
  {
    "name": "Play Percussion Instrument",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "dex",
      "classSkill": false,
      "armorCheckPenalty": false,
      "trainedOnly": true,
      "description": "<p>Play drums and other percussion instruments with rhythm and precision.</p>"
    }
  },
  {
    "name": "Play String Instrument",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "dex",
      "classSkill": false,
      "armorCheckPenalty": false,
      "trainedOnly": true,
      "description": "<p>Play lutes, harps, and other stringed instruments with practiced technique.</p>"
    }
  },
  {
    "name": "Play Wind Instrument",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "dex",
      "classSkill": false,
      "armorCheckPenalty": false,
      "trainedOnly": true,
      "description": "<p>Play flutes and other wind instruments with clean control and articulation.</p>"
    }
  },
  {
    "name": "Profession",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "wis",
      "classSkill": false,
      "armorCheckPenalty": false,
      "trainedOnly": true,
      "description": "<p>Practice a trade or calling such as sailor, herbalist, miner, or scribe.</p>"
    }
  },
  {
    "name": "Read Lips",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "int",
      "classSkill": false,
      "armorCheckPenalty": false,
      "trainedOnly": true,
      "languageDependent": true,
      "description": "<p>Infer speech by carefully observing a speaker's mouth and expression.</p>"
    }
  },
  {
    "name": "Ride",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "dex",
      "classSkill": false,
      "armorCheckPenalty": false,
      "description": "<p>Guide, control, and fight effectively from the saddle.</p>"
    }
  },
  {
    "name": "Safe Fall",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "dex",
      "classSkill": false,
      "armorCheckPenalty": true,
      "description": "<p>Reduce falling damage and land more safely when dropped from height.</p>"
    }
  },
  {
    "name": "Search",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "int",
      "classSkill": false,
      "armorCheckPenalty": false,
      "description": "<p>Find hidden doors, concealed objects, and careful signs of tampering.</p>"
    }
  },
  {
    "name": "Sense Heading",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "wis",
      "classSkill": false,
      "armorCheckPenalty": false,
      "description": "<p>Maintain your bearings and know direction without obvious markers.</p>"
    }
  },
  {
    "name": "Sense Motive",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "wis",
      "classSkill": false,
      "armorCheckPenalty": false,
      "description": "<p>Discern lies, hostility, hidden agendas, and social intent.</p>"
    }
  },
  {
    "name": "Sneak",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "dex",
      "classSkill": false,
      "armorCheckPenalty": true,
      "description": "<p>Move quietly enough to avoid notice while traveling or closing on a target.</p>"
    }
  },
  {
    "name": "Spellcraft",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "int",
      "classSkill": false,
      "armorCheckPenalty": false,
      "description": "<p>Identify spells, understand magical workings, and interpret arcane signs.</p>"
    }
  },
  {
    "name": "Spot",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "wis",
      "classSkill": false,
      "armorCheckPenalty": false,
      "description": "<p>Notice hidden creatures, small details, and things out of place.</p>"
    }
  },
  {
    "name": "Swim",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "str",
      "classSkill": false,
      "armorCheckPenalty": true,
      "description": "<p>Move through water, keep afloat, and survive strong currents.</p>"
    }
  },
  {
    "name": "Taunt",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "cha",
      "classSkill": false,
      "armorCheckPenalty": false,
      "description": "<p>Draw attention, provoke an enemy, or goad a foe into reacting badly.</p>"
    }
  },
  {
    "name": "Trade Skill",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "int",
      "classSkill": false,
      "armorCheckPenalty": false,
      "isTradeskill": true,
      "trainedOnly": true,
      "description": "<p>Practice a chosen craft or trade; this broad entry covers the standard non-specialized crafts of Norrath.</p>"
    }
  },
  {
    "name": "Trade Skill (Alchemy)",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "int",
      "classSkill": false,
      "armorCheckPenalty": false,
      "isTradeskill": true,
      "trainedOnly": true,
      "description": "<p>Mix magical compounds, tonics, reagents, and other alchemical creations.</p>"
    }
  },
  {
    "name": "Trade Skill (Tinkering)",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "int",
      "classSkill": false,
      "armorCheckPenalty": false,
      "isTradeskill": true,
      "trainedOnly": true,
      "description": "<p>Construct and repair intricate mechanisms, gadgets, and gnomish devices.</p>"
    }
  },
  {
    "name": "Tumble",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "dex",
      "classSkill": false,
      "armorCheckPenalty": true,
      "trainedOnly": true,
      "description": "<p>Roll, dive, and twist through danger without exposing yourself to easy strikes.</p>"
    }
  },
  {
    "name": "Undead Empathy",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "cha",
      "classSkill": false,
      "armorCheckPenalty": false,
      "trainedOnly": true,
      "description": "<p>Influence the behavior of mindless undead through force of presence and necromantic understanding.</p>"
    }
  },
  {
    "name": "Use Rope",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "dex",
      "classSkill": false,
      "armorCheckPenalty": false,
      "description": "<p>Tie secure knots, lash gear, and work quickly with rope under pressure.</p>"
    }
  },
  {
    "name": "Wilderness Lore",
    "type": "skill",
    "img": "",
    "system": {
      "ability": "wis",
      "classSkill": false,
      "armorCheckPenalty": false,
      "description": "<p>Read terrain, survive in the wild, and follow signs left by creatures and weather.</p>"
    }
  }
];

// Source: module/packs/source/weapons.json
export const SAMPLE_WEAPONS = [
  {
    "name": "Club",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A rough wooden club. The PHB treats it as a simple blunt weapon that can also be thrown.</p>",
      "damage": "1d6",
      "damageType": "bludgeoning",
      "damageTypes": [
        "bludgeoning"
      ],
      "attackBonus": 0,
      "range": 10,
      "weight": 3,
      "price": 0,
      "delay": 5,
      "critRange": 20,
      "critMult": 2,
      "equipped": false,
      "properties": [
        "thrown"
      ],
      "phbName": "Club",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "simple",
      "combatClass": "melee",
      "size": "medium",
      "handedness": "one-handed",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Light Mace",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A simple light mace with a balanced head for one-handed strikes.</p>",
      "damage": "1d6",
      "damageType": "bludgeoning",
      "damageTypes": [
        "bludgeoning"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 6,
      "price": 5,
      "delay": 5,
      "critRange": 20,
      "critMult": 2,
      "equipped": false,
      "properties": [],
      "phbName": "Mace, light",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "simple",
      "combatClass": "melee",
      "size": "medium",
      "handedness": "one-handed",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Heavy Mace",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A heavier mace for crushing armor and bone.</p>",
      "damage": "1d8",
      "damageType": "bludgeoning",
      "damageTypes": [
        "bludgeoning"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 12,
      "price": 12,
      "delay": 5,
      "critRange": 20,
      "critMult": 2,
      "equipped": false,
      "properties": [],
      "phbName": "Mace, heavy",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "simple",
      "combatClass": "melee",
      "size": "medium",
      "handedness": "one-handed",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Morningstar",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A spiked mace head that deals both blunt and piercing damage.</p>",
      "damage": "1d10",
      "damageType": "bludgeoning",
      "damageTypes": [
        "bludgeoning",
        "piercing"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 8,
      "price": 8,
      "delay": 6,
      "critRange": 20,
      "critMult": 2,
      "equipped": false,
      "properties": [
        "dual-damage"
      ],
      "phbName": "Morningstar",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "simple",
      "combatClass": "melee",
      "size": "medium",
      "handedness": "one-handed",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Dagger",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A short utility blade favored as a backup or throwing weapon.</p>",
      "damage": "1d3",
      "damageType": "piercing",
      "damageTypes": [
        "piercing"
      ],
      "attackBonus": 0,
      "range": 10,
      "weight": 1,
      "price": 2,
      "delay": 4,
      "critRange": 19,
      "critMult": 2,
      "equipped": false,
      "properties": [
        "thrown",
        "finesse"
      ],
      "phbName": "Dagger",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "simple",
      "combatClass": "melee",
      "size": "tiny",
      "handedness": "light",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Shortspear",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A one-handed spear that may also be thrown.</p>",
      "damage": "1d6",
      "damageType": "piercing",
      "damageTypes": [
        "piercing"
      ],
      "attackBonus": 0,
      "range": 20,
      "weight": 3,
      "price": 2,
      "delay": 5,
      "critRange": 20,
      "critMult": 3,
      "equipped": false,
      "properties": [
        "thrown",
        "brace"
      ],
      "phbName": "Shortspear",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "simple",
      "combatClass": "melee",
      "size": "medium",
      "handedness": "one-handed",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Quarterstaff",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A double weapon. The current automation uses the primary 1d6 end and notes the off-hand end in its properties.</p>",
      "damage": "1d6",
      "damageType": "bludgeoning",
      "damageTypes": [
        "bludgeoning"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 4,
      "price": 0,
      "delay": 5,
      "critRange": 20,
      "critMult": 2,
      "equipped": false,
      "properties": [
        "double"
      ],
      "phbName": "Quarterstaff",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "simple",
      "combatClass": "melee",
      "size": "large",
      "handedness": "double",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": true,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Double weapon. Off-hand attack uses the second 1d6 end and two-weapon rules."
      }
    }
  },
  {
    "name": "Spear",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A two-handed spear suitable for melee or throwing.</p>",
      "damage": "1d8",
      "damageType": "piercing",
      "damageTypes": [
        "piercing"
      ],
      "attackBonus": 0,
      "range": 20,
      "weight": 5,
      "price": 4,
      "delay": 5,
      "critRange": 20,
      "critMult": 3,
      "equipped": false,
      "properties": [
        "thrown"
      ],
      "phbName": "Spear",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "simple",
      "combatClass": "melee",
      "size": "large",
      "handedness": "two-handed",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Dart",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A weighted throwing dart, effectively a very small javelin.</p>",
      "damage": "1d3",
      "damageType": "piercing",
      "damageTypes": [
        "piercing"
      ],
      "attackBonus": 0,
      "range": 20,
      "weight": 0.5,
      "price": 0.5,
      "delay": 5,
      "critRange": 20,
      "critMult": 2,
      "equipped": false,
      "properties": [
        "thrown"
      ],
      "phbName": "Dart",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "simple",
      "combatClass": "ranged",
      "size": "small",
      "handedness": "light",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Sling",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A simple sling. Stones are weaker than bullets, but the base profile assumes sling bullets.</p>",
      "damage": "1d4",
      "damageType": "bludgeoning",
      "damageTypes": [
        "bludgeoning"
      ],
      "attackBonus": 0,
      "range": 50,
      "weight": 0,
      "price": 0,
      "delay": 6,
      "critRange": 20,
      "critMult": 2,
      "equipped": false,
      "properties": [
        "projectile",
        "ammo:sling-bullets"
      ],
      "phbName": "Sling",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "simple",
      "combatClass": "ranged",
      "size": "small",
      "handedness": "ranged",
      "automation": {
        "safeDirect": true,
        "needsAmmo": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Primary damage assumes sling bullets. Stones are a weaker improvised ammunition option."
      }
    }
  },
  {
    "name": "Javelin",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A light flexible spear designed for throwing. In melee it is nonproficient by the PHB.</p>",
      "damage": "1d6",
      "damageType": "piercing",
      "damageTypes": [
        "piercing"
      ],
      "attackBonus": 0,
      "range": 30,
      "weight": 2,
      "price": 1,
      "delay": 5,
      "critRange": 20,
      "critMult": 2,
      "equipped": false,
      "properties": [
        "thrown"
      ],
      "phbName": "Javelin",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "simple",
      "combatClass": "ranged",
      "size": "medium",
      "handedness": "light",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "PHB notes melee use is nonproficient and suffers a -4 attack penalty."
      }
    }
  },
  {
    "name": "Gauntlet",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>Metal gloves that let unarmed strikes deal normal rather than subdual damage.</p>",
      "damage": "1d3",
      "damageType": "bludgeoning",
      "damageTypes": [
        "bludgeoning"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 2,
      "price": 2,
      "delay": 4,
      "critRange": 20,
      "critMult": 2,
      "equipped": false,
      "properties": [],
      "phbName": "Gauntlet",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "simple",
      "combatClass": "melee",
      "size": "tiny",
      "handedness": "light",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Brass Knuckles",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A fitted ring of heavy metal that adds crushing force to punches.</p>",
      "damage": "1d3",
      "damageType": "bludgeoning",
      "damageTypes": [
        "bludgeoning"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 2,
      "price": 1,
      "delay": 4,
      "critRange": 20,
      "critMult": 2,
      "equipped": false,
      "properties": [],
      "phbName": "Brass knuckles",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "simple",
      "combatClass": "melee",
      "size": "tiny",
      "handedness": "light",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Punching Dagger",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A punch dagger that drives the blade with the force of the wielder's strike.</p>",
      "damage": "1d3",
      "damageType": "piercing",
      "damageTypes": [
        "piercing"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 2,
      "price": 2,
      "delay": 4,
      "critRange": 20,
      "critMult": 3,
      "equipped": false,
      "properties": [],
      "phbName": "Dagger, punching",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "simple",
      "combatClass": "melee",
      "size": "tiny",
      "handedness": "light",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Spiked Gauntlet",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A spiked gauntlet counts as an armed attack and cannot be disarmed normally.</p>",
      "damage": "1d3",
      "damageType": "piercing",
      "damageTypes": [
        "piercing"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 2,
      "price": 5,
      "delay": 4,
      "critRange": 20,
      "critMult": 2,
      "equipped": false,
      "properties": [],
      "phbName": "Gauntlet, spiked",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "simple",
      "combatClass": "melee",
      "size": "tiny",
      "handedness": "light",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Kukri",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A heavy curved dagger with an inward cutting edge.</p>",
      "damage": "1d4",
      "damageType": "slashing",
      "damageTypes": [
        "slashing"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 3,
      "price": 8,
      "delay": 4,
      "critRange": 18,
      "critMult": 2,
      "equipped": false,
      "properties": [],
      "phbName": "Kukri",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "tiny",
      "handedness": "light",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Throwing Axe",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A lighter axe balanced specifically for throwing.</p>",
      "damage": "1d6",
      "damageType": "slashing",
      "damageTypes": [
        "slashing"
      ],
      "attackBonus": 0,
      "range": 10,
      "weight": 4,
      "price": 8,
      "delay": 5,
      "critRange": 20,
      "critMult": 2,
      "equipped": false,
      "properties": [
        "thrown"
      ],
      "phbName": "Axe, throwing",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "ranged",
      "size": "small",
      "handedness": "light",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Clawed Handwrap",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>Three claw-like blades fixed to the back of the hand.</p>",
      "damage": "1d4",
      "damageType": "slashing",
      "damageTypes": [
        "slashing"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 2,
      "price": 12,
      "delay": 4,
      "critRange": 20,
      "critMult": 2,
      "equipped": false,
      "properties": [],
      "phbName": "Clawed handwrap",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "small",
      "handedness": "light",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Light Hammer",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A small war hammer light enough to throw.</p>",
      "damage": "1d4",
      "damageType": "bludgeoning",
      "damageTypes": [
        "bludgeoning"
      ],
      "attackBonus": 0,
      "range": 20,
      "weight": 2,
      "price": 1,
      "delay": 5,
      "critRange": 20,
      "critMult": 2,
      "equipped": false,
      "properties": [
        "thrown"
      ],
      "phbName": "Hammer, light",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "ranged",
      "size": "small",
      "handedness": "light",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Handaxe",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A one-handed axe suited for close combat.</p>",
      "damage": "1d6",
      "damageType": "slashing",
      "damageTypes": [
        "slashing"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 5,
      "price": 6,
      "delay": 5,
      "critRange": 20,
      "critMult": 3,
      "equipped": false,
      "properties": [],
      "phbName": "Handaxe",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "small",
      "handedness": "light",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Kama",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A short sickle-like martial weapon.</p>",
      "damage": "1d4",
      "damageType": "slashing",
      "damageTypes": [
        "slashing"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 2,
      "price": 2,
      "delay": 4,
      "critRange": 20,
      "critMult": 2,
      "equipped": false,
      "properties": [],
      "phbName": "Kama",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "small",
      "handedness": "light",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Nunchaku",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>Two short sticks linked by rope or chain.</p>",
      "damage": "1d4",
      "damageType": "bludgeoning",
      "damageTypes": [
        "bludgeoning"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 2,
      "price": 2,
      "delay": 4,
      "critRange": 20,
      "critMult": 2,
      "equipped": false,
      "properties": [],
      "phbName": "Nunchaku",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "small",
      "handedness": "light",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Light Pick",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A light war pick focused on armor-piercing strikes.</p>",
      "damage": "1d4",
      "damageType": "piercing",
      "damageTypes": [
        "piercing"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 4,
      "price": 4,
      "delay": 5,
      "critRange": 20,
      "critMult": 4,
      "equipped": false,
      "properties": [],
      "phbName": "Pick, light",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "small",
      "handedness": "light",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Sap",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A weighted club used for knocking targets out instead of killing them.</p>",
      "damage": "1d4",
      "damageType": "bludgeoning",
      "damageTypes": [
        "bludgeoning"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 3,
      "price": 1,
      "delay": 4,
      "critRange": 20,
      "critMult": 2,
      "equipped": false,
      "properties": [
        "subdual"
      ],
      "phbName": "Sap",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "small",
      "handedness": "light",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Deals subdual damage only."
      }
    }
  },
  {
    "name": "Siangham",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A short piercing martial weapon.</p>",
      "damage": "1d4",
      "damageType": "piercing",
      "damageTypes": [
        "piercing"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 1,
      "price": 3,
      "delay": 4,
      "critRange": 20,
      "critMult": 2,
      "equipped": false,
      "properties": [],
      "phbName": "Siangham",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "small",
      "handedness": "light",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Short Sword",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A compact sword ideal for close fighting or off-hand use.</p>",
      "damage": "1d6",
      "damageType": "slashing",
      "damageTypes": [
        "slashing"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 3,
      "price": 10,
      "delay": 4,
      "critRange": 19,
      "critMult": 2,
      "equipped": false,
      "properties": [],
      "phbName": "Sword, short",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "small",
      "handedness": "light",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Battleaxe",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A standard martial axe with strong chopping power.</p>",
      "damage": "1d8",
      "damageType": "slashing",
      "damageTypes": [
        "slashing"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 7,
      "price": 10,
      "delay": 5,
      "critRange": 20,
      "critMult": 3,
      "equipped": false,
      "properties": [],
      "phbName": "Battleaxe",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "medium",
      "handedness": "one-handed",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Broad Sword",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A broad-bladed sword optimized for hacking cuts.</p>",
      "damage": "1d10",
      "damageType": "slashing",
      "damageTypes": [
        "slashing"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 6,
      "price": 13,
      "delay": 5,
      "critRange": 20,
      "critMult": 2,
      "equipped": false,
      "properties": [],
      "phbName": "Broad sword",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "medium",
      "handedness": "one-handed",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Light Flail",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A lighter flail that excels at tripping and disarming.</p>",
      "damage": "1d8",
      "damageType": "bludgeoning",
      "damageTypes": [
        "bludgeoning"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 5,
      "price": 8,
      "delay": 5,
      "critRange": 20,
      "critMult": 2,
      "equipped": false,
      "properties": [
        "trip",
        "disarm"
      ],
      "phbName": "Flail, light",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "medium",
      "handedness": "one-handed",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Supports trip and disarm bonuses that are not yet automated."
      }
    }
  },
  {
    "name": "Longsword",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A straight, reliable martial sword.</p>",
      "damage": "1d8",
      "damageType": "slashing",
      "damageTypes": [
        "slashing"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 4,
      "price": 15,
      "delay": 5,
      "critRange": 19,
      "critMult": 2,
      "equipped": false,
      "properties": [],
      "phbName": "Longsword",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "medium",
      "handedness": "one-handed",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Heavy Pick",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A heavier war pick designed to punch through armor.</p>",
      "damage": "1d8",
      "damageType": "piercing",
      "damageTypes": [
        "piercing"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 6,
      "price": 8,
      "delay": 5,
      "critRange": 20,
      "critMult": 4,
      "equipped": false,
      "properties": [],
      "phbName": "Pick, heavy",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "medium",
      "handedness": "one-handed",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Rapier",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A light thrusting sword suited to precise fencing.</p>",
      "damage": "1d4",
      "damageType": "piercing",
      "damageTypes": [
        "piercing"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 3,
      "price": 20,
      "delay": 4,
      "critRange": 18,
      "critMult": 2,
      "equipped": false,
      "properties": [
        "finesse"
      ],
      "phbName": "Rapier",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "medium",
      "handedness": "one-handed",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Scimitar",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A curved blade with an especially keen edge.</p>",
      "damage": "1d6",
      "damageType": "slashing",
      "damageTypes": [
        "slashing"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 4,
      "price": 15,
      "delay": 4,
      "critRange": 18,
      "critMult": 2,
      "equipped": false,
      "properties": [],
      "phbName": "Scimitar",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "medium",
      "handedness": "one-handed",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Trident",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A three-pronged spear that can be thrown or braced.</p>",
      "damage": "1d10",
      "damageType": "piercing",
      "damageTypes": [
        "piercing"
      ],
      "attackBonus": 0,
      "range": 10,
      "weight": 5,
      "price": 15,
      "delay": 5,
      "critRange": 20,
      "critMult": 2,
      "equipped": false,
      "properties": [
        "thrown",
        "brace"
      ],
      "phbName": "Trident",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "medium",
      "handedness": "one-handed",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Warhammer",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A heavy hammer built for war.</p>",
      "damage": "1d8",
      "damageType": "bludgeoning",
      "damageTypes": [
        "bludgeoning"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 8,
      "price": 12,
      "delay": 5,
      "critRange": 20,
      "critMult": 3,
      "equipped": false,
      "properties": [],
      "phbName": "Warhammer",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "medium",
      "handedness": "one-handed",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Spiked Chain",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A chain with wicked barbs. It can attack at reach or adjacent and grants trip and disarm options.</p>",
      "damage": "2d4",
      "damageType": "piercing",
      "damageTypes": [
        "piercing",
        "slashing"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 15,
      "price": 325,
      "delay": 5,
      "critRange": 20,
      "critMult": 2,
      "equipped": false,
      "properties": [
        "reach",
        "adjacent",
        "trip",
        "disarm",
        "finesse"
      ],
      "phbName": "Chain, spiked",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "large",
      "handedness": "two-handed",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Reach, adjacent attacks, trip, disarm, and finesse interactions need dedicated handling."
      }
    }
  },
  {
    "name": "Falchion",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A two-handed curved blade, essentially a large war scimitar.</p>",
      "damage": "2d4",
      "damageType": "slashing",
      "damageTypes": [
        "slashing"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 16,
      "price": 75,
      "delay": 6,
      "critRange": 18,
      "critMult": 2,
      "equipped": false,
      "properties": [],
      "phbName": "Falchion",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "large",
      "handedness": "two-handed",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Heavy Flail",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A two-handed flail with strong trip and disarm utility.</p>",
      "damage": "1d10",
      "damageType": "bludgeoning",
      "damageTypes": [
        "bludgeoning"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 20,
      "price": 15,
      "delay": 6,
      "critRange": 19,
      "critMult": 2,
      "equipped": false,
      "properties": [
        "trip",
        "disarm"
      ],
      "phbName": "Flail, heavy",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "large",
      "handedness": "two-handed",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Trip and disarm bonuses are not yet automated."
      }
    }
  },
  {
    "name": "Glaive",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A polearm that attacks at reach but not adjacent.</p>",
      "damage": "1d12",
      "damageType": "slashing",
      "damageTypes": [
        "slashing"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 15,
      "price": 8,
      "delay": 5,
      "critRange": 20,
      "critMult": 3,
      "equipped": false,
      "properties": [
        "reach"
      ],
      "phbName": "Glaive",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "large",
      "handedness": "two-handed",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Reach-only targeting is not yet enforced."
      }
    }
  },
  {
    "name": "Greataxe",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A massive two-handed axe.</p>",
      "damage": "2d6",
      "damageType": "slashing",
      "damageTypes": [
        "slashing"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 20,
      "price": 20,
      "delay": 6,
      "critRange": 20,
      "critMult": 3,
      "equipped": false,
      "properties": [],
      "phbName": "Greataxe",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "large",
      "handedness": "two-handed",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Greatclub",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A huge club reinforced for war.</p>",
      "damage": "1d12",
      "damageType": "bludgeoning",
      "damageTypes": [
        "bludgeoning"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 10,
      "price": 5,
      "delay": 5,
      "critRange": 20,
      "critMult": 2,
      "equipped": false,
      "properties": [],
      "phbName": "Greatclub",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "large",
      "handedness": "two-handed",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Greatsword",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A massive two-handed blade.</p>",
      "damage": "2d6",
      "damageType": "slashing",
      "damageTypes": [
        "slashing"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 15,
      "price": 50,
      "delay": 6,
      "critRange": 19,
      "critMult": 2,
      "equipped": false,
      "properties": [],
      "phbName": "Greatsword",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "large",
      "handedness": "two-handed",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Guisarme",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A reach polearm with a hooked blade for tripping.</p>",
      "damage": "2d4",
      "damageType": "slashing",
      "damageTypes": [
        "slashing"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 15,
      "price": 9,
      "delay": 5,
      "critRange": 20,
      "critMult": 3,
      "equipped": false,
      "properties": [
        "reach",
        "trip"
      ],
      "phbName": "Guisarme",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "large",
      "handedness": "two-handed",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Reach-only attacks and trip handling need dedicated support."
      }
    }
  },
  {
    "name": "Halberd",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A polearm with axe head, hook, and spike for trip and brace actions.</p>",
      "damage": "1d12",
      "damageType": "slashing",
      "damageTypes": [
        "slashing",
        "piercing"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 15,
      "price": 10,
      "delay": 6,
      "critRange": 20,
      "critMult": 3,
      "equipped": false,
      "properties": [
        "trip",
        "brace"
      ],
      "phbName": "Halberd",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "large",
      "handedness": "two-handed",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Trip and brace options are not yet automated."
      }
    }
  },
  {
    "name": "Longspear",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A long spear used at reach and especially deadly against chargers.</p>",
      "damage": "1d8",
      "damageType": "piercing",
      "damageTypes": [
        "piercing"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 9,
      "price": 5,
      "delay": 5,
      "critRange": 20,
      "critMult": 3,
      "equipped": false,
      "properties": [
        "reach",
        "brace"
      ],
      "phbName": "Longspear",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "large",
      "handedness": "two-handed",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Reach-only attacks and brace vs. charge are not yet automated."
      }
    }
  },
  {
    "name": "Ranseur",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A reach polearm with a strong disarming hook.</p>",
      "damage": "1d10",
      "damageType": "piercing",
      "damageTypes": [
        "piercing"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 15,
      "price": 10,
      "delay": 5,
      "critRange": 20,
      "critMult": 3,
      "equipped": false,
      "properties": [
        "reach",
        "disarm"
      ],
      "phbName": "Ranseur",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "large",
      "handedness": "two-handed",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Reach-only attacks and disarm bonuses are not yet automated."
      }
    }
  },
  {
    "name": "Scythe",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A war scythe focused on devastating critical hits.</p>",
      "damage": "1d10",
      "damageType": "piercing",
      "damageTypes": [
        "piercing",
        "slashing"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 12,
      "price": 18,
      "delay": 6,
      "critRange": 20,
      "critMult": 4,
      "equipped": false,
      "properties": [],
      "phbName": "Scythe",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "large",
      "handedness": "two-handed",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Bastard Sword",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>PHB special case: a Medium wielder with Strength 17+ and Weapon Focus (bastard sword) may use it one-handed.</p>",
      "damage": "1d10",
      "damageType": "slashing",
      "damageTypes": [
        "slashing"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 10,
      "price": 35,
      "delay": 5,
      "critRange": 19,
      "critMult": 2,
      "equipped": false,
      "properties": [
        "special-strength-17"
      ],
      "phbName": "Sword, bastard",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "large",
      "handedness": "versatile",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": true,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "One-handed use depends on the PHB special Strength 17+ and Weapon Focus rule."
      }
    }
  },
  {
    "name": "Two-Handed Hammer",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A massive maul that smashes armor and bone.</p>",
      "damage": "2d6",
      "damageType": "bludgeoning",
      "damageTypes": [
        "bludgeoning"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 15,
      "price": 20,
      "delay": 6,
      "critRange": 20,
      "critMult": 2,
      "equipped": false,
      "properties": [],
      "phbName": "Two-handed hammer",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "large",
      "handedness": "two-handed",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Net",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A fighting net used to entangle foes rather than deal damage.</p>",
      "damage": "",
      "damageType": "bludgeoning",
      "damageTypes": [
        "bludgeoning"
      ],
      "attackBonus": 0,
      "range": 10,
      "weight": 6,
      "price": 20,
      "delay": 5,
      "critRange": 20,
      "critMult": 2,
      "equipped": false,
      "properties": [
        "ranged-touch",
        "entangle"
      ],
      "phbName": "Net",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "ranged",
      "size": "medium",
      "handedness": "ranged",
      "automation": {
        "safeDirect": false,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": true,
        "needsToggle": true,
        "notes": "Requires ranged touch handling, entangled condition, rope control, and refolding rules."
      }
    }
  },
  {
    "name": "Whip",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A whip deals subdual damage and has several special combat rules.</p>",
      "damage": "1d2",
      "damageType": "slashing",
      "damageTypes": [
        "slashing"
      ],
      "attackBonus": 0,
      "range": 15,
      "weight": 2,
      "price": 1,
      "delay": 5,
      "critRange": 20,
      "critMult": 2,
      "equipped": false,
      "properties": [
        "subdual",
        "trip",
        "disarm"
      ],
      "phbName": "Whip",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "ranged",
      "size": "small",
      "handedness": "one-handed",
      "automation": {
        "safeDirect": false,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": true,
        "needsToggle": true,
        "notes": "Whip damage restrictions, trip, disarm, and ranged-melee special handling need dedicated automation."
      }
    }
  },
  {
    "name": "Shuriken",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>Thrown stars. The PHB allows up to three thrown per attack.</p>",
      "damage": "1",
      "damageType": "piercing",
      "damageTypes": [
        "piercing"
      ],
      "attackBonus": 0,
      "range": 10,
      "weight": 0.5,
      "price": 1,
      "delay": 4,
      "critRange": 20,
      "critMult": 2,
      "equipped": false,
      "properties": [
        "thrown",
        "volley"
      ],
      "phbName": "Shuriken",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "ranged",
      "size": "tiny",
      "handedness": "light",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": true,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "PHB allows up to three shuriken per attack and ignores Strength to damage."
      }
    }
  },
  {
    "name": "Shortbow",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A martial shortbow.</p>",
      "damage": "1d6",
      "damageType": "piercing",
      "damageTypes": [
        "piercing"
      ],
      "attackBonus": 0,
      "range": 60,
      "weight": 2,
      "price": 30,
      "delay": 5,
      "critRange": 20,
      "critMult": 3,
      "equipped": false,
      "properties": [
        "projectile",
        "ammo:arrows"
      ],
      "phbName": "Shortbow",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "ranged",
      "size": "medium",
      "handedness": "ranged",
      "automation": {
        "safeDirect": true,
        "needsAmmo": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Uses arrows as ammunition."
      }
    }
  },
  {
    "name": "Composite Shortbow",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A recurved composite shortbow. Special Strength pull variants are not yet modeled.</p>",
      "damage": "1d6",
      "damageType": "piercing",
      "damageTypes": [
        "piercing"
      ],
      "attackBonus": 0,
      "range": 70,
      "weight": 3,
      "price": 75,
      "delay": 5,
      "critRange": 20,
      "critMult": 3,
      "equipped": false,
      "properties": [
        "projectile",
        "ammo:arrows",
        "strength-rated"
      ],
      "phbName": "Shortbow, composite",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "ranged",
      "size": "medium",
      "handedness": "ranged",
      "automation": {
        "safeDirect": true,
        "needsAmmo": true,
        "needsChoice": true,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Uses arrows. Strength-rated variants are not yet modeled separately."
      }
    }
  },
  {
    "name": "Longbow",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A full-size war bow for long-ranged shooting.</p>",
      "damage": "1d8",
      "damageType": "piercing",
      "damageTypes": [
        "piercing"
      ],
      "attackBonus": 0,
      "range": 100,
      "weight": 3,
      "price": 75,
      "delay": 6,
      "critRange": 20,
      "critMult": 3,
      "equipped": false,
      "properties": [
        "projectile",
        "ammo:arrows"
      ],
      "phbName": "Longbow",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "ranged",
      "size": "large",
      "handedness": "ranged",
      "automation": {
        "safeDirect": true,
        "needsAmmo": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Uses arrows as ammunition."
      }
    }
  },
  {
    "name": "Composite Longbow",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A recurved composite longbow. Strength pull variants are a future automation layer.</p>",
      "damage": "1d8",
      "damageType": "piercing",
      "damageTypes": [
        "piercing"
      ],
      "attackBonus": 0,
      "range": 110,
      "weight": 3,
      "price": 100,
      "delay": 6,
      "critRange": 20,
      "critMult": 3,
      "equipped": false,
      "properties": [
        "projectile",
        "ammo:arrows",
        "strength-rated"
      ],
      "phbName": "Longbow, composite",
      "phbTable": "Table 7-5",
      "source": "phb",
      "phbCore": true,
      "proficiency": "martial",
      "combatClass": "ranged",
      "size": "large",
      "handedness": "ranged",
      "automation": {
        "safeDirect": true,
        "needsAmmo": true,
        "needsChoice": true,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Uses arrows. Strength-rated variants are not yet modeled separately."
      }
    }
  },
  {
    "name": "Hand Wraps",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>System convenience weapon for monks and martial artists. Not a PHB table entry.</p>",
      "damage": "1d4",
      "damageType": "bludgeoning",
      "damageTypes": [
        "bludgeoning"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 1,
      "price": 1,
      "delay": 4,
      "critRange": 20,
      "critMult": 2,
      "equipped": false,
      "properties": [],
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "small",
      "handedness": "light",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "War Axe",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>A retained legacy entry outside the PHB weapon table.</p>",
      "damage": "1d8",
      "damageType": "slashing",
      "damageTypes": [
        "slashing"
      ],
      "attackBonus": 0,
      "range": 0,
      "weight": 8,
      "price": 20,
      "delay": 5,
      "critRange": 20,
      "critMult": 3,
      "equipped": false,
      "properties": [],
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "proficiency": "martial",
      "combatClass": "melee",
      "size": "medium",
      "handedness": "one-handed",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Light Crossbow",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>Retained legacy crossbow entry. Crossbows are not on the PHB Chapter 7 weapon table used for this audit.</p>",
      "damage": "1d8",
      "damageType": "piercing",
      "damageTypes": [
        "piercing"
      ],
      "attackBonus": 0,
      "range": 80,
      "weight": 6,
      "price": 35,
      "delay": 5,
      "critRange": 19,
      "critMult": 2,
      "equipped": false,
      "properties": [
        "projectile",
        "ammo:bolts"
      ],
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "proficiency": "martial",
      "combatClass": "ranged",
      "size": "medium",
      "handedness": "ranged",
      "automation": {
        "safeDirect": true,
        "needsAmmo": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Hand Crossbow",
    "type": "weapon",
    "img": "",
    "system": {
      "description": "<p>Retained legacy hand crossbow entry outside the PHB Chapter 7 table.</p>",
      "damage": "1d4",
      "damageType": "piercing",
      "damageTypes": [
        "piercing"
      ],
      "attackBonus": 0,
      "range": 30,
      "weight": 2,
      "price": 100,
      "delay": 4,
      "critRange": 19,
      "critMult": 2,
      "equipped": false,
      "properties": [
        "projectile",
        "ammo:bolts"
      ],
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "proficiency": "exotic",
      "combatClass": "ranged",
      "size": "small",
      "handedness": "ranged",
      "automation": {
        "safeDirect": true,
        "needsAmmo": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  }
];

// Source: module/packs/source/armor.json
export const SAMPLE_ARMOR = [
  {
    "name": "Cloth Armor",
    "type": "armor",
    "img": "",
    "system": {
      "description": "<p>Quilted layers of cloth and batting. This is the PHB cloth armor entry.</p>",
      "acBonus": 1,
      "type": "light",
      "maxDexBonus": 8,
      "checkPenalty": 0,
      "attackPenalty": 0,
      "spellFailure": 0,
      "weight": 10,
      "price": 5,
      "equipped": false,
      "phbName": "Cloth",
      "phbTable": "Table 7-7",
      "source": "phb",
      "phbCore": true,
      "shieldCategory": "",
      "speed30": 30,
      "speed20": 20,
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Leather Armor",
    "type": "armor",
    "img": "",
    "system": {
      "description": "<p>Boiled and hardened leather over softer backing.</p>",
      "acBonus": 2,
      "type": "light",
      "maxDexBonus": 6,
      "checkPenalty": 0,
      "attackPenalty": 0,
      "spellFailure": 10,
      "weight": 15,
      "price": 10,
      "equipped": false,
      "phbName": "Leather",
      "phbTable": "Table 7-7",
      "source": "phb",
      "phbCore": true,
      "shieldCategory": "",
      "speed30": 30,
      "speed20": 20,
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Raw Silk Armor",
    "type": "armor",
    "img": "",
    "system": {
      "description": "<p>An expensive silk armor listed in the PHB armor table.</p>",
      "acBonus": 2,
      "type": "light",
      "maxDexBonus": 9,
      "checkPenalty": 0,
      "attackPenalty": 0,
      "spellFailure": 0,
      "weight": 7,
      "price": 500,
      "equipped": false,
      "phbName": "Raw silk",
      "phbTable": "Table 7-7",
      "source": "phb",
      "phbCore": true,
      "shieldCategory": "",
      "speed30": 30,
      "speed20": 20,
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Studded Leather",
    "type": "armor",
    "img": "",
    "system": {
      "description": "<p>Leather reinforced with metal studs for better protection.</p>",
      "acBonus": 3,
      "type": "light",
      "maxDexBonus": 5,
      "checkPenalty": -1,
      "attackPenalty": 0,
      "spellFailure": 15,
      "weight": 20,
      "price": 25,
      "equipped": false,
      "phbName": "Studded leather",
      "phbTable": "Table 7-7",
      "source": "phb",
      "phbCore": true,
      "shieldCategory": "",
      "speed30": 30,
      "speed20": 20,
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Chain Shirt",
    "type": "armor",
    "img": "",
    "system": {
      "description": "<p>A torso-only mail shirt with good mobility.</p>",
      "acBonus": 4,
      "type": "light",
      "maxDexBonus": 4,
      "checkPenalty": -2,
      "attackPenalty": 0,
      "spellFailure": 20,
      "weight": 25,
      "price": 100,
      "equipped": false,
      "phbName": "Chain shirt",
      "phbTable": "Table 7-7",
      "source": "phb",
      "phbCore": true,
      "shieldCategory": "",
      "speed30": 30,
      "speed20": 20,
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Hide Armor",
    "type": "armor",
    "img": "",
    "system": {
      "description": "<p>Patchwork-sewn hides hardened into crude but durable armor.</p>",
      "acBonus": 3,
      "type": "medium",
      "maxDexBonus": 4,
      "checkPenalty": -3,
      "attackPenalty": 0,
      "spellFailure": 20,
      "weight": 25,
      "price": 15,
      "equipped": false,
      "phbName": "Hide",
      "phbTable": "Table 7-7",
      "source": "phb",
      "phbCore": true,
      "shieldCategory": "",
      "speed30": 20,
      "speed20": 15,
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Scale Mail",
    "type": "armor",
    "img": "",
    "system": {
      "description": "<p>Leather and overlapping metal scales.</p>",
      "acBonus": 4,
      "type": "medium",
      "maxDexBonus": 3,
      "checkPenalty": -4,
      "attackPenalty": 0,
      "spellFailure": 25,
      "weight": 30,
      "price": 50,
      "equipped": false,
      "phbName": "Scale mail",
      "phbTable": "Table 7-7",
      "source": "phb",
      "phbCore": true,
      "shieldCategory": "",
      "speed30": 20,
      "speed20": 15,
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Chainmail",
    "type": "armor",
    "img": "",
    "system": {
      "description": "<p>A full suit of interlocking rings with quilted backing.</p>",
      "acBonus": 5,
      "type": "medium",
      "maxDexBonus": 2,
      "checkPenalty": -5,
      "attackPenalty": 0,
      "spellFailure": 30,
      "weight": 40,
      "price": 150,
      "equipped": false,
      "phbName": "Chainmail",
      "phbTable": "Table 7-7",
      "source": "phb",
      "phbCore": true,
      "shieldCategory": "",
      "speed30": 20,
      "speed20": 15,
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Breastplate",
    "type": "armor",
    "img": "",
    "system": {
      "description": "<p>A fitted torso plate with flexible protection for the limbs.</p>",
      "acBonus": 5,
      "type": "medium",
      "maxDexBonus": 3,
      "checkPenalty": -4,
      "attackPenalty": 0,
      "spellFailure": 25,
      "weight": 30,
      "price": 200,
      "equipped": false,
      "phbName": "Breastplate",
      "phbTable": "Table 7-7",
      "source": "phb",
      "phbCore": true,
      "shieldCategory": "",
      "speed30": 20,
      "speed20": 15,
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Banded Mail",
    "type": "armor",
    "img": "",
    "system": {
      "description": "<p>Broad overlapping steel bands over chain backing.</p>",
      "acBonus": 6,
      "type": "heavy",
      "maxDexBonus": 1,
      "checkPenalty": -6,
      "attackPenalty": 0,
      "spellFailure": 35,
      "weight": 35,
      "price": 250,
      "equipped": false,
      "phbName": "Banded mail",
      "phbTable": "Table 7-7",
      "source": "phb",
      "phbCore": true,
      "shieldCategory": "",
      "speed30": 20,
      "speed20": 15,
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Splint Mail",
    "type": "armor",
    "img": "",
    "system": {
      "description": "<p>Strips of metal splinted onto backing and chain.</p>",
      "acBonus": 6,
      "type": "heavy",
      "maxDexBonus": 0,
      "checkPenalty": -7,
      "attackPenalty": 0,
      "spellFailure": 40,
      "weight": 45,
      "price": 200,
      "equipped": false,
      "phbName": "Splint mail",
      "phbTable": "Table 7-7",
      "source": "phb",
      "phbCore": true,
      "shieldCategory": "",
      "speed30": 20,
      "speed20": 15,
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Half-Plate",
    "type": "armor",
    "img": "",
    "system": {
      "description": "<p>A loose mix of plate pieces and chain covering vital areas.</p>",
      "acBonus": 7,
      "type": "heavy",
      "maxDexBonus": 0,
      "checkPenalty": -7,
      "attackPenalty": 0,
      "spellFailure": 40,
      "weight": 50,
      "price": 600,
      "equipped": false,
      "phbName": "Half-plate",
      "phbTable": "Table 7-7",
      "source": "phb",
      "phbCore": true,
      "shieldCategory": "",
      "speed30": 20,
      "speed20": 15,
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Full Plate",
    "type": "armor",
    "img": "",
    "system": {
      "description": "<p>Master-fitted plate armor covering the entire body.</p>",
      "acBonus": 8,
      "type": "heavy",
      "maxDexBonus": 1,
      "checkPenalty": -6,
      "attackPenalty": 0,
      "spellFailure": 35,
      "weight": 50,
      "price": 1500,
      "equipped": false,
      "phbName": "Full plate",
      "phbTable": "Table 7-7",
      "source": "phb",
      "phbCore": true,
      "shieldCategory": "",
      "speed30": 20,
      "speed20": 15,
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Buckler",
    "type": "armor",
    "img": "",
    "system": {
      "description": "<p>A forearm-strapped shield. PHB attack penalty applies only when using an off-hand weapon.</p>",
      "acBonus": 1,
      "type": "shield",
      "maxDexBonus": null,
      "checkPenalty": -1,
      "attackPenalty": 0,
      "spellFailure": 5,
      "weight": 5,
      "price": 15,
      "equipped": false,
      "phbName": "Buckler",
      "phbTable": "Table 7-7",
      "source": "phb",
      "phbCore": true,
      "shieldCategory": "buckler",
      "speed30": 30,
      "speed20": 20,
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Buckler attack penalty is situational and applies only when using the off-hand for a weapon."
      }
    }
  },
  {
    "name": "Small Steel Shield",
    "type": "armor",
    "img": "",
    "system": {
      "description": "<p>A small steel shield with the standard PHB shield values.</p>",
      "acBonus": 1,
      "type": "shield",
      "maxDexBonus": null,
      "checkPenalty": -1,
      "attackPenalty": 0,
      "spellFailure": 5,
      "weight": 6,
      "price": 9,
      "equipped": false,
      "phbName": "Shield, small, steel",
      "phbTable": "Table 7-7",
      "source": "phb",
      "phbCore": true,
      "shieldCategory": "small",
      "speed30": 30,
      "speed20": 20,
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Small Wooden Shield",
    "type": "armor",
    "img": "",
    "system": {
      "description": "<p>A small wooden shield from the PHB armor table.</p>",
      "acBonus": 1,
      "type": "shield",
      "maxDexBonus": null,
      "checkPenalty": -1,
      "attackPenalty": 0,
      "spellFailure": 5,
      "weight": 5,
      "price": 3,
      "equipped": false,
      "phbName": "Shield, small, wooden",
      "phbTable": "Table 7-7",
      "source": "phb",
      "phbCore": true,
      "shieldCategory": "small",
      "speed30": 30,
      "speed20": 20,
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Large Steel Shield",
    "type": "armor",
    "img": "",
    "system": {
      "description": "<p>A large steel shield. The PHB notes the shield hand cannot do anything else.</p>",
      "acBonus": 2,
      "type": "shield",
      "maxDexBonus": null,
      "checkPenalty": -2,
      "attackPenalty": 0,
      "spellFailure": 15,
      "weight": 15,
      "price": 20,
      "equipped": false,
      "phbName": "Shield, large, steel",
      "phbTable": "Table 7-7",
      "source": "phb",
      "phbCore": true,
      "shieldCategory": "large",
      "speed30": 30,
      "speed20": 20,
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Large Wooden Shield",
    "type": "armor",
    "img": "",
    "system": {
      "description": "<p>A large wooden shield from the PHB armor table.</p>",
      "acBonus": 2,
      "type": "shield",
      "maxDexBonus": null,
      "checkPenalty": -2,
      "attackPenalty": 0,
      "spellFailure": 15,
      "weight": 10,
      "price": 7,
      "equipped": false,
      "phbName": "Shield, large, wooden",
      "phbTable": "Table 7-7",
      "source": "phb",
      "phbCore": true,
      "shieldCategory": "large",
      "speed30": 30,
      "speed20": 20,
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Tower Shield",
    "type": "armor",
    "img": "",
    "system": {
      "description": "<p>PHB tower shields provide cover rather than a normal armor bonus. The current system approximates that with +4 AC and the listed attack penalty.</p>",
      "acBonus": 4,
      "type": "shield",
      "maxDexBonus": null,
      "checkPenalty": -10,
      "attackPenalty": -2,
      "spellFailure": 50,
      "weight": 45,
      "price": 30,
      "equipped": false,
      "phbName": "Shield, tower",
      "phbTable": "Table 7-7",
      "source": "phb",
      "phbCore": true,
      "shieldCategory": "tower",
      "speed30": 30,
      "speed20": 20,
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "PHB tower shield rules are cover-based. Current implementation approximates them as +4 AC and -2 attack while carried."
      }
    }
  },
  {
    "name": "Padded Armor",
    "type": "armor",
    "img": "",
    "system": {
      "description": "<p>Retained legacy armor entry outside the PHB EverQuest table.</p>",
      "acBonus": 1,
      "type": "light",
      "maxDexBonus": 8,
      "checkPenalty": 0,
      "attackPenalty": 0,
      "spellFailure": 0,
      "weight": 10,
      "price": 5,
      "equipped": false,
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "shieldCategory": "",
      "speed30": 30,
      "speed20": 20,
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Ring Mail",
    "type": "armor",
    "img": "",
    "system": {
      "description": "<p>Retained legacy armor entry outside the PHB EverQuest table.</p>",
      "acBonus": 3,
      "type": "medium",
      "maxDexBonus": 6,
      "checkPenalty": -2,
      "attackPenalty": 0,
      "spellFailure": 20,
      "weight": 40,
      "price": 50,
      "equipped": false,
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "shieldCategory": "",
      "speed30": 20,
      "speed20": 15,
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  }
];

// Source: module/packs/source/equipment.json
export const SAMPLE_EQUIPMENT = [
  {
    "name": "Backpack",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>An empty backpack for carrying adventuring supplies.</p>",
      "quantity": 1,
      "weight": 2,
      "price": 2,
      "equipped": false,
      "slot": "",
      "phbName": "Backpack",
      "phbTable": "Table 7-9",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "container",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Container capacity is informational only for now."
      }
    }
  },
  {
    "name": "Bedroll",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>A practical sleeping roll for travel and camp.</p>",
      "quantity": 1,
      "weight": 5,
      "price": 0.1,
      "equipped": false,
      "slot": "",
      "phbName": "Bedroll",
      "phbTable": "Table 7-9",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "gear",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Trail Rations",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>One day of preserved trail food.</p>",
      "quantity": 1,
      "weight": 1,
      "price": 0.5,
      "equipped": false,
      "slot": "",
      "phbName": "Rations, trail (per day)",
      "phbTable": "Table 7-9",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "provisions",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Provision tracking remains manual until hunger and thirst automation exists."
      }
    }
  },
  {
    "name": "Waterskin",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>A leather water skin holding up to half a gallon of liquid.</p>",
      "quantity": 1,
      "weight": 4,
      "price": 1,
      "equipped": false,
      "slot": "",
      "phbName": "Water skin",
      "phbTable": "Table 7-9",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "provisions",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Provision tracking remains manual until hunger and thirst automation exists."
      }
    }
  },
  {
    "name": "Holy Symbol (Wooden)",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>A carved wooden holy symbol dedicated to one of Norrath's deities.</p>",
      "quantity": 1,
      "weight": 0,
      "price": 1,
      "equipped": false,
      "slot": "neck",
      "phbName": "Holy symbols (wooden)",
      "phbTable": "Table 7-9",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "focus",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Focus item for divine roleplay and future spell requirements."
      }
    }
  },
  {
    "name": "Spell Component Pouch",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>A belt pouch filled with common material components for spellcasting.</p>",
      "quantity": 1,
      "weight": 0.5,
      "price": 5,
      "equipped": false,
      "slot": "belt",
      "phbName": "Spell component pouch",
      "phbTable": "Table 7-9",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "focus",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Future spell component validation can key off this item."
      }
    }
  },
  {
    "name": "Ink Pen",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>A sharpened writing pen for journals and spell notation.</p>",
      "quantity": 1,
      "weight": 0,
      "price": 0.1,
      "equipped": false,
      "slot": "",
      "phbName": "Ink pen",
      "phbTable": "Table 7-9",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "tool",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Ink (1 oz. vial)",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>One ounce of black ink. Colored inks cost more.</p>",
      "quantity": 1,
      "weight": 0,
      "price": 8,
      "equipped": false,
      "slot": "",
      "phbName": "Ink (1 oz. vial)",
      "phbTable": "Table 7-9",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "tool",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Paper (sheet)",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>A single sheet of paper.</p>",
      "quantity": 1,
      "weight": 0,
      "price": 0.4,
      "equipped": false,
      "slot": "",
      "phbName": "Paper (sheet)",
      "phbTable": "Table 7-9",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "tool",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Parchment (sheet)",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>A single sheet of parchment.</p>",
      "quantity": 1,
      "weight": 0,
      "price": 0.2,
      "equipped": false,
      "slot": "",
      "phbName": "Parchment (sheet)",
      "phbTable": "Table 7-9",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "tool",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Torch",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>A torch for bright but smoky light.</p>",
      "quantity": 1,
      "weight": 1,
      "price": 0.01,
      "equipped": false,
      "slot": "",
      "phbName": "Torch",
      "phbTable": "Table 7-9",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "light",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Future light-duration tracking can toggle active torches."
      }
    }
  },
  {
    "name": "Oil (1-pint flask)",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>A pint of lamp oil.</p>",
      "quantity": 1,
      "weight": 1,
      "price": 0.1,
      "equipped": false,
      "slot": "",
      "phbName": "Oil (1-pint flask)",
      "phbTable": "Table 7-9",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "light",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Future light-duration tracking can spend oil on lamps and lanterns."
      }
    }
  },
  {
    "name": "Flint and Steel",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>A fire-starting kit of struck steel and flint.</p>",
      "quantity": 1,
      "weight": 0,
      "price": 1,
      "equipped": false,
      "slot": "",
      "phbName": "Flint and steel",
      "phbTable": "Table 7-9",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "tool",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Rope, Hemp (50 ft.)",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>Fifty feet of sturdy hemp rope.</p>",
      "quantity": 1,
      "weight": 10,
      "price": 1,
      "equipped": false,
      "slot": "",
      "phbName": "Rope, hemp (50 ft.)",
      "phbTable": "Table 7-9",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "gear",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Rope, Silk (50 ft.)",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>Fifty feet of lighter, stronger silk rope.</p>",
      "quantity": 1,
      "weight": 5,
      "price": 10,
      "equipped": false,
      "slot": "",
      "phbName": "Rope, silk (50 ft.)",
      "phbTable": "Table 7-9",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "gear",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Piton",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>An iron climbing spike.</p>",
      "quantity": 1,
      "weight": 0.5,
      "price": 0.1,
      "equipped": false,
      "slot": "",
      "phbName": "Piton",
      "phbTable": "Table 7-9",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "tool",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Grappling Hook",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>A metal hook meant to catch ledges, railings, and battlements.</p>",
      "quantity": 1,
      "weight": 4,
      "price": 1,
      "equipped": false,
      "slot": "",
      "phbName": "Grappling hook",
      "phbTable": "Table 7-9",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "tool",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Tent",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>A portable canvas tent for camp.</p>",
      "quantity": 1,
      "weight": 20,
      "price": 10,
      "equipped": false,
      "slot": "",
      "phbName": "Tent",
      "phbTable": "Table 7-9",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "gear",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Lantern, Hooded",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>A hooded lantern with shutters that burns six hours on a pint of oil.</p>",
      "quantity": 1,
      "weight": 2,
      "price": 7,
      "equipped": false,
      "slot": "",
      "phbName": "Lantern, hooded",
      "phbTable": "Table 7-9",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "light",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Future light-duration tracking can spend oil on this lantern."
      }
    }
  },
  {
    "name": "Lantern, Bull's-Eye",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>A focused lantern that throws light in a long cone and burns six hours on a pint of oil.</p>",
      "quantity": 1,
      "weight": 3,
      "price": 12,
      "equipped": false,
      "slot": "",
      "phbName": "Lantern, bull's-eye",
      "phbTable": "Table 7-9",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "light",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Future light-duration tracking can spend oil on this lantern."
      }
    }
  },
  {
    "name": "Lamp, Common",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>A simple hand lamp with an open flame that burns six hours on a pint of oil.</p>",
      "quantity": 1,
      "weight": 1,
      "price": 0.1,
      "equipped": false,
      "slot": "",
      "phbName": "Lamp, common",
      "phbTable": "Table 7-9",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "light",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Future light-duration tracking can spend oil on this lamp."
      }
    }
  },
  {
    "name": "Belt Pouch",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>A small belt pouch for coins, gems, and tiny tools.</p>",
      "quantity": 1,
      "weight": 0.5,
      "price": 1,
      "equipped": false,
      "slot": "belt",
      "phbName": "Pouch, belt",
      "phbTable": "Table 7-9",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "container",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Container capacity is informational only for now."
      }
    }
  },
  {
    "name": "Sack",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>An empty sack for hauling loose gear or loot.</p>",
      "quantity": 1,
      "weight": 0.5,
      "price": 0.1,
      "equipped": false,
      "slot": "",
      "phbName": "Sack (empty)",
      "phbTable": "Table 7-9",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "container",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Container capacity is informational only for now."
      }
    }
  },
  {
    "name": "Chest",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>An empty chest for secure storage.</p>",
      "quantity": 1,
      "weight": 25,
      "price": 2,
      "equipped": false,
      "slot": "",
      "phbName": "Chest (empty)",
      "phbTable": "Table 7-9",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "container",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Container capacity is informational only for now."
      }
    }
  },
  {
    "name": "Caltrops",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>A two-pound bag of metal caltrops that slows foes and punishes careless movement.</p>",
      "quantity": 1,
      "weight": 2,
      "price": 1,
      "equipped": false,
      "slot": "",
      "phbName": "Caltrops",
      "phbTable": "Table 7-9",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "tactical",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": true,
        "needsToggle": true,
        "notes": "Placement, movement triggers, and attack resolution need scene automation."
      }
    }
  },
  {
    "name": "Healer's Kit",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>A treated medical kit that grants a circumstance bonus to some Heal checks and is exhausted after ten uses.</p>",
      "quantity": 1,
      "weight": 1,
      "price": 50,
      "equipped": false,
      "slot": "",
      "phbName": "Healer's kit",
      "phbTable": "Table 7-11",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "kit",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": true,
        "notes": "Can later be tracked as ten medical uses."
      }
    }
  },
  {
    "name": "Climber's Kit",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>A climbing harness, spikes, and gloves granting a +2 circumstance bonus to Climb checks.</p>",
      "quantity": 1,
      "weight": 5,
      "price": 80,
      "equipped": false,
      "slot": "",
      "phbName": "Climber's kit",
      "phbTable": "Table 7-11",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "kit",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Future skill automation can read this for climb bonuses."
      }
    }
  },
  {
    "name": "Thieves' Tools",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>A lockpicking and disable-device kit required to work without improvised tools.</p>",
      "quantity": 1,
      "weight": 1,
      "price": 30,
      "equipped": false,
      "slot": "",
      "phbName": "Thieves' tools",
      "phbTable": "Table 7-11",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "kit",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Future Disable Device and Pick Lock flows can require this kit."
      }
    }
  },
  {
    "name": "Thieves' Tools, Masterwork",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>A superior thieves' kit granting a +2 circumstance bonus on Disable Device and Pick Lock checks.</p>",
      "quantity": 1,
      "weight": 2,
      "price": 100,
      "equipped": false,
      "slot": "",
      "phbName": "Thieves' tools, masterwork",
      "phbTable": "Table 7-11",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "kit",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Future Disable Device and Pick Lock flows can grant the masterwork bonus."
      }
    }
  },
  {
    "name": "Medicine Pouch",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>A pouch of herbs, minerals, and tools required for shamanic alchemy.</p>",
      "quantity": 1,
      "weight": 5,
      "price": 100,
      "equipped": false,
      "slot": "",
      "phbName": "Medicine pouch",
      "phbTable": "Table 7-11",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "focus",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Future alchemy gating can key off this item."
      }
    }
  },
  {
    "name": "Musical Instrument, Common",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>A common instrument such as a lute, flute, horn, or drum.</p>",
      "quantity": 1,
      "weight": 3,
      "price": 5,
      "equipped": false,
      "slot": "",
      "phbName": "Musical instrument, common",
      "phbTable": "Table 7-11",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "tool",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": true,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Specific instrument choice is cosmetic until bard music automation expands."
      }
    }
  },
  {
    "name": "Spellbook (Blank)",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>A blank, leather-bound spellbook with one hundred parchment pages.</p>",
      "quantity": 1,
      "weight": 3,
      "price": 15,
      "equipped": false,
      "slot": "",
      "phbName": "Spellbook (blank)",
      "phbTable": "Table 7-11",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "focus",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Future arcane-learning flows can key off this item."
      }
    }
  },
  {
    "name": "Adventurer Clothes",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>Hard-wearing travel clothes built for weather and wear.</p>",
      "quantity": 1,
      "weight": 8,
      "price": 10,
      "equipped": false,
      "slot": "body",
      "phbName": "Adventurer clothes",
      "phbTable": "Table 7-13",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "clothing",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Clerical Vestments",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>Formal vestments for divine offices and ceremonies.</p>",
      "quantity": 1,
      "weight": 6,
      "price": 5,
      "equipped": false,
      "slot": "body",
      "phbName": "Clerical vestments",
      "phbTable": "Table 7-13",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "clothing",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Cold Weather Clothes",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>Layered cold-weather clothing for harsh climates.</p>",
      "quantity": 1,
      "weight": 7,
      "price": 8,
      "equipped": false,
      "slot": "body",
      "phbName": "Cold weather clothes",
      "phbTable": "Table 7-13",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "clothing",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Entertainer Clothes",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>Colorful performer clothing suited to public appearances.</p>",
      "quantity": 1,
      "weight": 4,
      "price": 3,
      "equipped": false,
      "slot": "body",
      "phbName": "Entertainer clothes",
      "phbTable": "Table 7-13",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "clothing",
      "ammoType": "",
      "automation": {
        "safeDirect": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Arrows",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>A single arrow for bows and similar projectile weapons.</p>",
      "quantity": 1,
      "weight": 0.15,
      "price": 0.05,
      "equipped": false,
      "slot": "",
      "phbName": "Arrow",
      "phbTable": "Table 7-18",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "ammo",
      "ammoType": "arrows",
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Consumed automatically by projectile bow attacks."
      }
    }
  },
  {
    "name": "Bolts",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>A single crossbow bolt.</p>",
      "quantity": 1,
      "weight": 0.1,
      "price": 0.1,
      "equipped": false,
      "slot": "",
      "phbName": "Bullet or bolt",
      "phbTable": "Table 7-18",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "ammo",
      "ammoType": "bolts",
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Consumed automatically by projectile crossbow attacks."
      }
    }
  },
  {
    "name": "Sling Bullets",
    "type": "equipment",
    "img": "",
    "system": {
      "description": "<p>A single sling bullet.</p>",
      "quantity": 1,
      "weight": 0.1,
      "price": 0.01,
      "equipped": false,
      "slot": "",
      "phbName": "Bullet",
      "phbTable": "Table 7-18",
      "source": "phb",
      "phbCore": true,
      "itemCategory": "ammo",
      "ammoType": "sling-bullets",
      "automation": {
        "safeDirect": true,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Consumed automatically by sling attacks."
      }
    }
  }
];

// Source: module/packs/source/consumables.json
export const SAMPLE_CONSUMABLES = [
  {
    "name": "Minor Healing Potion",
    "type": "consumable",
    "img": "",
    "system": {
      "consumableType": "potion",
      "quantity": 1,
      "weight": 0.5,
      "price": 25,
      "healFormula": "1d8+1",
      "manaRestore": 0,
      "effect": "",
      "description": "<p>A small vial of shimmering liquid that mends minor wounds.</p>",
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "itemCategory": "potion",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Lesser Healing Potion",
    "type": "consumable",
    "img": "",
    "system": {
      "consumableType": "potion",
      "quantity": 1,
      "weight": 0.5,
      "price": 75,
      "healFormula": "2d8+3",
      "manaRestore": 0,
      "effect": "",
      "description": "<p>A bubbling draught that closes deeper cuts and relieves pain.</p>",
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "itemCategory": "potion",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Healing Potion",
    "type": "consumable",
    "img": "",
    "system": {
      "consumableType": "potion",
      "quantity": 1,
      "weight": 0.5,
      "price": 150,
      "healFormula": "3d8+5",
      "manaRestore": 0,
      "effect": "",
      "description": "<p>A potent healing elixir brewed by skilled alchemists.</p>",
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "itemCategory": "potion",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Greater Healing Potion",
    "type": "consumable",
    "img": "",
    "system": {
      "consumableType": "potion",
      "quantity": 1,
      "weight": 0.5,
      "price": 400,
      "healFormula": "4d8+8",
      "manaRestore": 0,
      "effect": "",
      "description": "<p>A powerful potion that can restore a warrior from near death.</p>",
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "itemCategory": "potion",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Complete Healing Potion",
    "type": "consumable",
    "img": "",
    "system": {
      "consumableType": "potion",
      "quantity": 1,
      "weight": 0.5,
      "price": 2000,
      "healFormula": "10d8+20",
      "manaRestore": 0,
      "effect": "",
      "description": "<p>An extraordinary elixir of legendary restorative power — the pinnacle of healing alchemy.</p>",
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "itemCategory": "potion",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Minor Mana Potion",
    "type": "consumable",
    "img": "",
    "system": {
      "consumableType": "potion",
      "quantity": 1,
      "weight": 0.5,
      "price": 50,
      "healFormula": "",
      "manaRestore": 10,
      "effect": "",
      "description": "<p>A faintly glowing blue vial that restores a small amount of magical energy.</p>",
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "itemCategory": "potion",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Mana Potion",
    "type": "consumable",
    "img": "",
    "system": {
      "consumableType": "potion",
      "quantity": 1,
      "weight": 0.5,
      "price": 200,
      "healFormula": "",
      "manaRestore": 30,
      "effect": "",
      "description": "<p>A deep sapphire draught that refreshes the mind and restores mana.</p>",
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "itemCategory": "potion",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Greater Mana Potion",
    "type": "consumable",
    "img": "",
    "system": {
      "consumableType": "potion",
      "quantity": 1,
      "weight": 0.5,
      "price": 600,
      "healFormula": "",
      "manaRestore": 75,
      "effect": "",
      "description": "<p>A swirling azure elixir that floods the caster with renewed magical reserves.</p>",
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "itemCategory": "potion",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": ""
      }
    }
  },
  {
    "name": "Potion of Speed",
    "type": "consumable",
    "img": "",
    "system": {
      "consumableType": "potion",
      "quantity": 1,
      "weight": 0.5,
      "price": 300,
      "healFormula": "",
      "manaRestore": 0,
      "effect": "Grants Haste for 10 minutes: +1 attack per round, movement speed doubled.",
      "description": "<p>This quicksilver potion makes the drinker blur with unnatural speed.</p>",
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "itemCategory": "potion",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Base consume flow is safe; effect text still needs dedicated buff automation where applicable."
      }
    }
  },
  {
    "name": "Potion of Endurance",
    "type": "consumable",
    "img": "",
    "system": {
      "consumableType": "potion",
      "quantity": 1,
      "weight": 0.5,
      "price": 200,
      "healFormula": "",
      "manaRestore": 0,
      "effect": "Grants +4 Constitution for 10 minutes, temporarily increasing max HP.",
      "description": "<p>A thick amber potion that fortifies the body against punishment.</p>",
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "itemCategory": "potion",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Base consume flow is safe; effect text still needs dedicated buff automation where applicable."
      }
    }
  },
  {
    "name": "Potion of Invisibility",
    "type": "consumable",
    "img": "",
    "system": {
      "consumableType": "potion",
      "quantity": 1,
      "weight": 0.5,
      "price": 250,
      "healFormula": "",
      "manaRestore": 0,
      "effect": "Grants Invisible for 5 minutes. Effect ends if you attack or cast a spell.",
      "description": "<p>The liquid in this vial seems to disappear when shaken. So will you.</p>",
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "itemCategory": "potion",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Base consume flow is safe; effect text still needs dedicated buff automation where applicable."
      }
    }
  },
  {
    "name": "Antidote",
    "type": "consumable",
    "img": "",
    "system": {
      "consumableType": "potion",
      "quantity": 1,
      "weight": 0.5,
      "price": 100,
      "healFormula": "",
      "manaRestore": 0,
      "effect": "Cures one poison effect affecting the drinker.",
      "description": "<p>A bitter yellow concoction that neutralizes most common poisons.</p>",
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "itemCategory": "antitoxin",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Use is straightforward, but poison-effect removal still needs effect tracking support."
      }
    }
  },
  {
    "name": "Cure Disease Potion",
    "type": "consumable",
    "img": "",
    "system": {
      "consumableType": "potion",
      "quantity": 1,
      "weight": 0.5,
      "price": 50,
      "healFormula": "",
      "manaRestore": 0,
      "effect": "Cures one magical disease afflicting the drinker.",
      "description": "<p>A purifying draught that scours disease from the body.</p>",
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "itemCategory": "potion",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Base consume flow is safe; effect text still needs dedicated buff automation where applicable."
      }
    }
  },
  {
    "name": "Antivenom",
    "type": "consumable",
    "img": "",
    "system": {
      "consumableType": "potion",
      "quantity": 1,
      "weight": 0.5,
      "price": 75,
      "healFormula": "",
      "manaRestore": 0,
      "effect": "Neutralizes one poison effect afflicting the drinker.",
      "description": "<p>A concentrated antivenom that counters even magically enhanced poisons.</p>",
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "itemCategory": "antitoxin",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Use is straightforward, but poison-effect removal still needs effect tracking support."
      }
    }
  },
  {
    "name": "Potion of Strength",
    "type": "consumable",
    "img": "",
    "system": {
      "consumableType": "potion",
      "quantity": 1,
      "weight": 0.5,
      "price": 150,
      "healFormula": "",
      "manaRestore": 0,
      "effect": "+4 STR for 10 minutes.",
      "description": "<p>A deep red potion that fills the drinker with surging physical power.</p>",
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "itemCategory": "potion",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Base consume flow is safe; effect text still needs dedicated buff automation where applicable."
      }
    }
  },
  {
    "name": "Potion of Intelligence",
    "type": "consumable",
    "img": "",
    "system": {
      "consumableType": "potion",
      "quantity": 1,
      "weight": 0.5,
      "price": 200,
      "healFormula": "",
      "manaRestore": 0,
      "effect": "+4 INT for 10 minutes, granting +20 maximum mana for the duration.",
      "description": "<p>A shimmering golden elixir that sharpens the mind and expands magical capacity.</p>",
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "itemCategory": "potion",
      "automation": {
        "safeDirect": true,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Base consume flow is safe; effect text still needs dedicated buff automation where applicable."
      }
    }
  },
  {
    "name": "Elven Waybread",
    "type": "consumable",
    "img": "",
    "system": {
      "consumableType": "food",
      "quantity": 1,
      "weight": 0.2,
      "price": 15,
      "healFormula": "1d4",
      "manaRestore": 5,
      "effect": "Nourishes body and mind, restoring a small amount of HP and mana.",
      "description": "<p>Thin, fragrant cakes baked by high elves — a single piece sustains a traveler for a full day.</p>",
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "itemCategory": "provisions",
      "automation": {
        "safeDirect": false,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Provision use is presentational until hunger and thirst tracking are implemented."
      }
    }
  },
  {
    "name": "Ale",
    "type": "consumable",
    "img": "",
    "system": {
      "consumableType": "drink",
      "quantity": 1,
      "weight": 1,
      "price": 2,
      "healFormula": "",
      "manaRestore": 0,
      "effect": "Satisfies thirst. Excessive consumption may cause Dazed condition (GM discretion).",
      "description": "<p>A frothy mug of local ale — popular in taverns across Norrath.</p>",
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "itemCategory": "provisions",
      "automation": {
        "safeDirect": false,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Provision use is presentational until hunger and thirst tracking are implemented."
      }
    }
  },
  {
    "name": "Spell Scroll: Fire Bolt",
    "type": "consumable",
    "img": "",
    "system": {
      "consumableType": "scroll",
      "quantity": 1,
      "weight": 0.1,
      "price": 50,
      "healFormula": "",
      "manaRestore": 0,
      "effect": "Casts Fire Bolt (1d6 fire) without spending mana. Destroyed on use.",
      "description": "<p>A scroll inscribed with the Fire Bolt spell. Usable by anyone who can read arcane script.</p>",
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "itemCategory": "scroll",
      "automation": {
        "safeDirect": false,
        "needsAmmo": false,
        "needsChoice": true,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Scrolls need explicit spell linkage and caster-eligibility handling."
      }
    }
  },
  {
    "name": "Spell Scroll: Minor Heal",
    "type": "consumable",
    "img": "",
    "system": {
      "consumableType": "scroll",
      "quantity": 1,
      "weight": 0.1,
      "price": 50,
      "healFormula": "1d8+1",
      "manaRestore": 0,
      "effect": "Casts Minor Healing without spending mana. Destroyed on use.",
      "description": "<p>A scroll of divine healing script. Even a non-cleric can read the words in an emergency.</p>",
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "itemCategory": "scroll",
      "automation": {
        "safeDirect": false,
        "needsAmmo": false,
        "needsChoice": true,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Scrolls need explicit spell linkage and caster-eligibility handling."
      }
    }
  },
  {
    "name": "Spell Scroll: Root",
    "type": "consumable",
    "img": "",
    "system": {
      "consumableType": "scroll",
      "quantity": 1,
      "weight": 0.1,
      "price": 80,
      "healFormula": "",
      "manaRestore": 0,
      "effect": "Casts Root (immobilizes target, Reflex save negates) without spending mana. Destroyed on use.",
      "description": "<p>A scroll inscribed with the Root spell, ready to be triggered in an emergency.</p>",
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "itemCategory": "scroll",
      "automation": {
        "safeDirect": false,
        "needsAmmo": false,
        "needsChoice": true,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Scrolls need explicit spell linkage and caster-eligibility handling."
      }
    }
  },
  {
    "name": "Spell Scroll: Blaze",
    "type": "consumable",
    "img": "",
    "system": {
      "consumableType": "scroll",
      "quantity": 1,
      "weight": 0.1,
      "price": 200,
      "healFormula": "",
      "manaRestore": 0,
      "effect": "Casts Blaze ((6d10+3)x2 fire, Reflex half) without spending mana. Destroyed on use.",
      "description": "<p>A scroll of devastating fire magic. Handle with extreme care.</p>",
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "itemCategory": "scroll",
      "automation": {
        "safeDirect": false,
        "needsAmmo": false,
        "needsChoice": true,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Scrolls need explicit spell linkage and caster-eligibility handling."
      }
    }
  },
  {
    "name": "Bat Wing",
    "type": "consumable",
    "img": "",
    "system": {
      "consumableType": "reagent",
      "quantity": 1,
      "weight": 0.1,
      "price": 2,
      "healFormula": "",
      "manaRestore": 0,
      "effect": "Required component for Levitate and some Necromancer spells.",
      "description": "<p>A dried bat wing — a common reagent used in levitation and flight spells.</p>",
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "itemCategory": "reagent",
      "automation": {
        "safeDirect": false,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Reagents are inventory-only until spell component consumption is automated."
      }
    }
  },
  {
    "name": "Bone Chips",
    "type": "consumable",
    "img": "",
    "system": {
      "consumableType": "reagent",
      "quantity": 1,
      "weight": 0.1,
      "price": 5,
      "healFormula": "",
      "manaRestore": 0,
      "effect": "Required component for Animate Dead and other Necromancer summoning spells.",
      "description": "<p>Fragments of humanoid bone ground fine — essential for the dark arts of necromancy.</p>",
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "itemCategory": "reagent",
      "automation": {
        "safeDirect": false,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Reagents are inventory-only until spell component consumption is automated."
      }
    }
  },
  {
    "name": "Eye of Kha",
    "type": "consumable",
    "img": "",
    "system": {
      "consumableType": "reagent",
      "quantity": 1,
      "weight": 0.1,
      "price": 10,
      "healFormula": "",
      "manaRestore": 0,
      "effect": "Required component for Enchanter summon spells.",
      "description": "<p>A crystalline eye of magical origin used in Enchanter conjuration rituals.</p>",
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "itemCategory": "reagent",
      "automation": {
        "safeDirect": false,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Reagents are inventory-only until spell component consumption is automated."
      }
    }
  },
  {
    "name": "Somatic Focus",
    "type": "consumable",
    "img": "",
    "system": {
      "consumableType": "reagent",
      "quantity": 1,
      "weight": 0.1,
      "price": 25,
      "healFormula": "",
      "manaRestore": 0,
      "effect": "Reduces mana cost of spells by 2 when held during casting.",
      "description": "<p>A polished focus crystal that helps channel somatic components more efficiently.</p>",
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "itemCategory": "reagent",
      "automation": {
        "safeDirect": false,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Reagents are inventory-only until spell component consumption is automated."
      }
    }
  },
  {
    "name": "Mandrake Root",
    "type": "consumable",
    "img": "",
    "system": {
      "consumableType": "reagent",
      "quantity": 1,
      "weight": 0.1,
      "price": 8,
      "healFormula": "",
      "manaRestore": 0,
      "effect": "Required component for Druid and Shaman spells.",
      "description": "<p>The forked root of a mandrake plant, essential for many nature and spirit spells.</p>",
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "itemCategory": "reagent",
      "automation": {
        "safeDirect": false,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Reagents are inventory-only until spell component consumption is automated."
      }
    }
  },
  {
    "name": "Yew Log",
    "type": "consumable",
    "img": "",
    "system": {
      "consumableType": "reagent",
      "quantity": 1,
      "weight": 0.5,
      "price": 5,
      "healFormula": "",
      "manaRestore": 0,
      "effect": "Component for Druid teleport and nature spells.",
      "description": "<p>A small log of sacred yew wood, used as a focus in Druid teleportation and planar spells.</p>",
      "phbName": "",
      "phbTable": "",
      "source": "custom",
      "phbCore": false,
      "itemCategory": "reagent",
      "automation": {
        "safeDirect": false,
        "needsAmmo": false,
        "needsChoice": false,
        "needsTarget": false,
        "needsToggle": false,
        "notes": "Reagents are inventory-only until spell component consumption is automated."
      }
    }
  }
];

// Source: module/packs/source/monsters.json
export const SAMPLE_MONSTERS = [
  {
    "name": "Abhorrent",
    "type": "npc",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "abilities": {
        "str": {
          "value": 10,
          "mod": 0
        },
        "dex": {
          "value": 10,
          "mod": 0
        },
        "con": {
          "value": 10,
          "mod": 0
        },
        "int": {
          "value": 10,
          "mod": 0
        },
        "wis": {
          "value": 10,
          "mod": 0
        },
        "cha": {
          "value": 10,
          "mod": 0
        }
      },
      "details": {
        "cr": 0,
        "size": "",
        "type": "",
        "subtypes": "",
        "faction": "",
        "alignment": "",
        "speed": 0
      },
      "resources": {
        "hp": {
          "value": 0,
          "max": 0,
          "temp": 0,
          "bonus": 0
        },
        "mana": {
          "value": 0,
          "max": 0
        }
      },
      "combat": {
        "ac": {
          "value": 10
        },
        "bab": 0,
        "saves": {
          "fortitude": {
            "value": 0
          },
          "reflex": {
            "value": 0
          },
          "will": {
            "value": 0
          }
        },
        "initiative": {
          "value": 0
        },
        "attackMisc": 0,
        "magicSaveBonus": 0
      },
      "statblock": {
        "hitDice": "",
        "speed": "",
        "ac": "",
        "attacks": "",
        "damage": "",
        "faceReach": "",
        "specialAttacks": "",
        "specialQualities": "",
        "saves": "",
        "abilities": "",
        "skills": "",
        "feats": "Parry, Weapon Focus (bite), and Weapon Specialization (bite). or FOS rr - Tee - r - Laas ( \" Sy POR be) ~as ¥ AJ oe . 7 © nit ie es Se",
        "climateTerrain": "",
        "organization": "",
        "treasure": "",
        "advancement": "",
        "challengeRating": "",
        "source": "Monsters of Norrath p. 22",
        "rawText": "serve one of his high priests. The abhorrent's\ncunning and stealth make it ideal for intelligence gathering and assassination\nmissions.\n\na\nAbhorrents have thick, stone-like skin «\nand a terrible countenance. Abhorrents do\nnot bother to carry weapons, as Innoruuk\nhas crafted them with jaws and talons that tear into\nthe flesh of their opponents with terrifying efficiency.\nTheir bat-like wings give them extraordinary aerial\n\nagility.\n\nCombat\n\nAbhorrents are not afraid of much, so they\nattack anything that they feel threatens their\nterritory, often launching ambushes that allow\nthem to use their backstab ability and to get into\n\nclose quarters where their hate aura can create havoc among their\nopponents' ranks.\n\nHate Aura (Su): Abhorrents can radiate a hatred effect in a 5-\nfoot radius as a free action. A Will save (DC 25) negates this\neffect. This power otherwise aggravates existing emotional tension between allies, causing victims of the aura to attack their\nnearest ally vehemently. If attacked or taunted by another opponent, a victim automatically turns her attack to the new opponent\nat the next opportunity. An affected target may attempt a new\nsave each round to end the effect of the hate aura. Once a creature\nsuccessfully saves against the aura, it cannot be affected by the\nsame abhorrent's aura for 24 hours.\n\nImmunities (Ex): Abhorrents are immune to fire and poison.\n\nResistances (Ex): Abhorrents have bonuses of acid, cold,\ndisease, and magic resistance (20), and sonic resistance (10).\n\nSee In Darkness (Su): Abhorrents can see perfectly in darkness of any kind, even magical darkness created by spells.\n\nTelepathy (Su): Abhorrents can communicate telepathically\nwith any creature within 100 feet as long as the creature speaks a\nlanguage.\n\nRogue Abilities (Ex): An abhorrent has the\nclass abilities of a 21st-level rogue, including sense traps, backstab +7d6, evasion,\nuncanny dodge, the Counterattack dis-\n\ncipline, and three extra feats: Parry,\n\nWeapon Focus (bite), and Weapon\nSpecialization\n\n(bite).\n\nor FOS\n\nrr\n\n- Tee -\nr -\nLaas (\n\n\" Sy\n\nPOR\nbe)\n~as\n\n¥\nAJ\noe\n.\n\n7\n© nit ie es Se"
      },
      "biography": "<h2>Combat</h2><p>Abhorrents are not afraid of much, so they attack anything that they feel threatens their territory, often launching ambushes that allow them to use their backstab ability and to get into</p><p>close quarters where their hate aura can create havoc among their opponents&#x27; ranks.</p><p>Hate Aura (Su): Abhorrents can radiate a hatred effect in a 5- foot radius as a free action. A Will save (DC 25) negates this effect. This power otherwise aggravates existing emotional tension between allies, causing victims of the aura to attack their nearest ally vehemently. If attacked or taunted by another opponent, a victim automatically turns her attack to the new opponent at the next opportunity. An affected target may attempt a new save each round to end the effect of the hate aura. Once a creature successfully saves against the aura, it cannot be affected by the same abhorrent&#x27;s aura for 24 hours.</p><p>Immunities (Ex): Abhorrents are immune to fire and poison.</p><p>Resistances (Ex): Abhorrents have bonuses of acid, cold, disease, and magic resistance (20), and sonic resistance (10).</p><p>See In Darkness (Su): Abhorrents can see perfectly in darkness of any kind, even magical darkness created by spells.</p><p>Telepathy (Su): Abhorrents can communicate telepathically with any creature within 100 feet as long as the creature speaks a language.</p><p>Rogue Abilities (Ex): An abhorrent has the class abilities of a 21st-level rogue, including sense traps, backstab +7d6, evasion, uncanny dodge, the Counterattack dis-</p><p>cipline, and three extra feats: Parry,</p><p>Weapon Focus (bite), and Weapon Specialization</p><p>(bite).</p><p>or FOS</p><p>rr</p><p>- Tee - r - Laas (</p><p>&quot; Sy</p><p>POR be) ~as</p><p>¥ AJ oe .</p><p>7 © nit ie es Se</p>"
    }
  },
  {
    "name": "Allizewsaur",
    "type": "npc",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "abilities": {
        "str": {
          "value": 10,
          "mod": 0
        },
        "dex": {
          "value": 10,
          "mod": 0
        },
        "con": {
          "value": 10,
          "mod": 0
        },
        "int": {
          "value": 10,
          "mod": 0
        },
        "wis": {
          "value": 10,
          "mod": 0
        },
        "cha": {
          "value": 10,
          "mod": 0
        }
      },
      "details": {
        "cr": 0,
        "size": "",
        "type": "",
        "subtypes": "",
        "faction": "",
        "alignment": "",
        "speed": 0
      },
      "resources": {
        "hp": {
          "value": 0,
          "max": 0,
          "temp": 0,
          "bonus": 0
        },
        "mana": {
          "value": 0,
          "max": 0
        }
      },
      "combat": {
        "ac": {
          "value": 10
        },
        "bab": 0,
        "saves": {
          "fortitude": {
            "value": 0
          },
          "reflex": {
            "value": 0
          },
          "will": {
            "value": 0
          }
        },
        "initiative": {
          "value": 0
        },
        "attackMisc": 0,
        "magicSaveBonus": 0
      },
      "statblock": {
        "hitDice": "",
        "speed": "",
        "ac": "",
        "attacks": "",
        "damage": "",
        "faceReach": "",
        "specialAttacks": "",
        "specialQualities": "",
        "saves": "",
        "abilities": "",
        "skills": "",
        "feats": "",
        "climateTerrain": "",
        "organization": "",
        "treasure": "",
        "advancement": "",
        "challengeRating": "",
        "source": "Monsters of Norrath p. 23",
        "rawText": "creature called the Allizewsaur. According to legend, this acre cursed creature once belonged to an ancient race of beings known\nXN as the Shissar, who created a vast and powerful society that\nSS dominated much of Norrath. Renowned for their intellect, their\non engineering skills, and their ruthless use of slave races, the Shissar\naay) built fortresses and temples to their god, Cazic-Thule (some of\nrecs which still stand today, including Najena and the Temple of\nUs Cazic-Thule in the southern swamps of Antonica).\n- Despite their success and advancement as a civilization, or\n' perhaps because of it, the Shissar grew proud. When Rallos Zek\nPe sought to conquer the Planes of Power during the first War of the\nwok Gods, the Shissar sided with the Warlord, thinking they were\n: - powerful enough to wage war among the gods themselves. Shissar\na magic aided Zek's invasion of the Plane of Earth. When the war\n‘ met its disastrous conclusion, the gods punished the Shissar along\n- with Rallos Zek and his progeny. The Shissar suffered a devastat-\n\\f* ing curse that took away much of their intelligence and their form,\naa) turning them into simple, barbaric lizard people.\n) =) One of the most powerful Shissar leaders was Allize Ssrateh,\nSere} known as the Herald of Fear. Whether it was Allize's own great\nip 2' power or the intervention of Cazic-Thule, the curse laid upon the\nes) Shissar enfeebled Allize's mind but did not reduce his form. On\naa) the contrary, the Herald of Fear took on a titanic form when the\n‘ curse was levied upon him. It is said that the gods hurled Allize\n<< Ssrateh - now called the Allizewsaur - into the Ocean of Tears\n| ae so that he would not pose a threat to the continent of Tunaria.\n° a) For as long as any mariner can now remember, the Allizewsaur\nve i has ranged the Ocean of Tears, becoming a legendary threat to\nPye\" ships. In reality, the Allizewsaur's attacks on ships are rare, as its .\n<-F main territory seems to lie outside the most frequented shipping\n\nlanes. A large tribe of aqua goblins living in the ocean, howeve\nrte has come to worship the beast, and these goblins are a hazard to\n\nv=) sailors, regularly taking sacrifices to appease \"the great lizard god.\"\na? The need for sacrifices gives the goblins great motivation to raid,\neS) ships passing through the Ocean of Tears, since if the goblins do\"\n> not capture hostages to serve as sacrifices, one of their own is\n\n- } selected to be the sacrifice!\n\nThe Allizewsaur is a giant lizard that walks upright like a\nhuman. It stands approximately 70 feet tall and has a huge maw\n\nyo ewe Owe - ---~a, 9\n\n4° »,\n\nes | ~\n\nfilled with razor-sharp teeth. The Allizewsaur, despite its civilized\norigins, has become little more than an animal. It acts on instinct,\n\nfeeds when hungry, defends itself when attacked, and has no\nmorals or language.\n\nCombat\n\nWhen it feels threatened, the Allizewsaur attacks ferociously.\nIt uses its vicious bite as well as both sets of claws to slice at its foe,\nand it will also swing its tail in an attempt to slam its target.\n\nImproved Grab (Ex): If the Allizewsaur hits a size Huge or\nsmaller opponent with its bite attack, it may use this ability. If it\ngets a hold, it can try to swallow its victim.\n\nSwallow Whole (Ex): The Allizewsaur can swallow any grabbed\nopponent of size Huge or smaller if it succeeds at a successful\ngrapple check. Once swallowed, the victim takes 2d6+8 points of\ncrushing damage and 2d6 points of acid damage each round. The\nacid damage is treated as a single damage-over-time attack for\npurposes of a victim's acid resistance, if any.\n\nSwallowed victims can cut their way out by dealing 40 points\nof slashing damage to the Allizewsaur's gut (AC 20). Any such\nopening regenerates immediately after it is cut, so each swallowed\nopponent must cut her own way out.\n\nThe Allizewsaur's stomach can hold two Huge, four Large,\neight Medium-size, or sixteen size Small or smaller creatures at\none time.\n\nTail Sweep (Ex): The Allizewsaur can sweep with its tail as an\nattack action. This attack affects all Large or smaller creatures\nwithin a 40-foot diameter, semi-circular area centered on the\nAllizewsaur's rear. The tail sweep deals 2d8+25 points of damage\nto all affected, although creatures can attempt a Reflex save (DC\n\n38) to take half damage."
      },
      "biography": "<h2>Combat</h2><p>When it feels threatened, the Allizewsaur attacks ferociously. It uses its vicious bite as well as both sets of claws to slice at its foe, and it will also swing its tail in an attempt to slam its target.</p><p>Improved Grab (Ex): If the Allizewsaur hits a size Huge or smaller opponent with its bite attack, it may use this ability. If it gets a hold, it can try to swallow its victim.</p><p>Swallow Whole (Ex): The Allizewsaur can swallow any grabbed opponent of size Huge or smaller if it succeeds at a successful grapple check. Once swallowed, the victim takes 2d6+8 points of crushing damage and 2d6 points of acid damage each round. The acid damage is treated as a single damage-over-time attack for purposes of a victim&#x27;s acid resistance, if any.</p><p>Swallowed victims can cut their way out by dealing 40 points of slashing damage to the Allizewsaur&#x27;s gut (AC 20). Any such opening regenerates immediately after it is cut, so each swallowed opponent must cut her own way out.</p><p>The Allizewsaur&#x27;s stomach can hold two Huge, four Large, eight Medium-size, or sixteen size Small or smaller creatures at one time.</p><p>Tail Sweep (Ex): The Allizewsaur can sweep with its tail as an attack action. This attack affects all Large or smaller creatures within a 40-foot diameter, semi-circular area centered on the Allizewsaur&#x27;s rear. The tail sweep deals 2d8+25 points of damage to all affected, although creatures can attempt a Reflex save (DC</p><p>38) to take half damage.</p>"
    }
  },
  {
    "name": "Amygdalan Knight",
    "type": "npc",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "abilities": {
        "str": {
          "value": 10,
          "mod": 0
        },
        "dex": {
          "value": 10,
          "mod": 0
        },
        "con": {
          "value": 10,
          "mod": 0
        },
        "int": {
          "value": 10,
          "mod": 0
        },
        "wis": {
          "value": 10,
          "mod": 0
        },
        "cha": {
          "value": 10,
          "mod": 0
        }
      },
      "details": {
        "cr": 20,
        "size": "",
        "type": "",
        "subtypes": "",
        "faction": "",
        "alignment": "Always neutral evil by a 25th-level shadow knight",
        "speed": 0
      },
      "resources": {
        "hp": {
          "value": 0,
          "max": 0,
          "temp": 0,
          "bonus": 0
        },
        "mana": {
          "value": 0,
          "max": 0
        }
      },
      "combat": {
        "ac": {
          "value": 10
        },
        "bab": 0,
        "saves": {
          "fortitude": {
            "value": 0
          },
          "reflex": {
            "value": 0
          },
          "will": {
            "value": 0
          }
        },
        "initiative": {
          "value": 0
        },
        "attackMisc": 0,
        "magicSaveBonus": 0
      },
      "statblock": {
        "hitDice": "",
        "speed": "",
        "ac": "",
        "attacks": "",
        "damage": "",
        "faceReach": "",
        "specialAttacks": "",
        "specialQualities": "",
        "saves": "",
        "abilities": "The tosow fear, which Amygdalan knight's spell-like abilipleases the ties (and mana cost for each) are as knights' follows: dooming darkness (20), invoke master fear (20), life leech (53), summon dead (48), and word of spirit (22). These spells are as cast by a 25th-level shadow knight (save DC 15 + spell level) with a mana pool of 210. Resistances (Ex): Amygdalan knights have bonuses of acid, disease, poison, and sonic resistance (20), as well as cold, fire, and magic resistance (30). See In Darkness (Su): Amygdalan knights can see perfectly in darkness of any kind, even magical darkness created by spells. Telepathy (Su): Amygdalan knights can com- municate telepathically with any creature within 100 feet as long as the creature speaks a language. Zac Armored Casting (Ex): Amygdalan knights Cot - may ignore the arcane spell failure chance for wearing armor, as per the shadow knight ability.",
        "skills": "An Amygdalan knight has a fearsome visage, conferring a +8 racial bonus to Intimidate. 4 eri:",
        "feats": "",
        "climateTerrain": "",
        "organization": "",
        "treasure": "Standard 24 hours. The power otherwise works like an invoke fear spell cast",
        "advancement": "26-35 HD (Huge) Harm Touch (Su): Once per hour, the Amygdalan knight may Fection: je make a melee touch attack (+33 attack bonus) to deliver a harm touch. The harm touch deals 75 points of damage or half that Descri ption amount if the victim succeeds at a Fortitude save (DC 27). Harm touch may be used as an attack action, or, if the knight takes a full Amygdalan knights hail from the Plane of attack action, it may make one extra attack to deliver the harm Fear. They rarely appear on Norrath itself, touch in addition to its normal attacks. A but when they do, death and destruction failed attack roll does not expend the ultimately follow. The mere Amygdalan knight's hourly use of this threat of their appear- ability. ance is often enough Spell-Like Abilities: The tosow fear, which Amygdalan knight's spell-like abilipleases the ties (and mana cost for each) are as knights' follows: dooming darkness (20), invoke master fear (20), life leech (53), summon dead (48), and word of spirit (22). These spells are as cast by a 25th-level shadow knight (save DC 15 + spell level) with a mana pool of 210. Resistances (Ex): Amygdalan knights have bonuses of acid, disease, poison, and sonic resistance (20), as well as cold, fire, and magic resistance (30). See In Darkness (Su): Amygdalan knights can see perfectly in darkness of any kind, even magical darkness created by spells. Telepathy (Su): Amygdalan knights can com- municate telepathically with any creature within 100 feet as long as the creature speaks a language. Zac Armored Casting (Ex): Amygdalan knights Cot - may ignore the arcane spell failure chance for wearing armor, as per the shadow knight ability",
        "challengeRating": "20",
        "source": "Monsters of Norrath p. 24",
        "rawText": "cannot be affected by the same Amygdalan knight's fear aura for\n\nChallenge Rating: 20\n\nTreasure: Standard 24 hours. The power otherwise works like an invoke fear spell cast\nAlignment: Always neutral evil by a 25th-level shadow knight.\n\nAdvancement Range: 26-35 HD (Huge) Harm Touch (Su): Once per hour, the Amygdalan knight may\nFection: je make a melee touch attack (+33 attack bonus) to deliver a harm\n\ntouch. The harm touch deals 75 points of damage or half that\n\nDescri ption amount if the victim succeeds at a Fortitude save (DC 27). Harm\n\ntouch may be used as an attack action, or, if the knight takes a full\n\nAmygdalan knights hail from the Plane of attack action, it may make one extra attack to deliver the harm\n\nFear. They rarely appear on Norrath itself, touch in addition to its normal attacks. A\n\nbut when they do, death and destruction failed attack roll does not expend the\n\nultimately follow. The mere Amygdalan knight's hourly use of this\nthreat of their appear- ability.\n\nance is often enough Spell-Like Abilities: The\ntosow fear, which Amygdalan knight's spell-like abilipleases the ties (and mana cost for each) are as\nknights' follows: dooming darkness (20), invoke\nmaster fear (20), life leech (53), summon dead\n(48), and word of spirit (22). These\nspells are as cast by a 25th-level\nshadow knight (save DC 15 + spell\nlevel) with a mana pool of 210.\n\nResistances (Ex): Amygdalan\nknights have bonuses of acid, disease,\npoison, and sonic resistance (20), as\nwell as cold, fire, and magic resistance (30).\nSee In Darkness (Su): Amygdalan knights\ncan see perfectly in darkness of any kind, even\nmagical darkness created by spells.\n\nTelepathy (Su): Amygdalan knights can com-\n\nmunicate telepathically with any creature within\n100 feet as long as the creature speaks a language.\n\nZac Armored Casting (Ex): Amygdalan knights\nCot - may ignore the arcane spell failure chance for\n\nwearing armor, as per the shadow knight ability.\n\nSkills: An Amygdalan knight has a fearsome visage,\nconferring a +8 racial bonus to Intimidate.\n\n4\n\neri:"
      },
      "biography": "<p>cannot be affected by the same Amygdalan knight&#x27;s fear aura for Challenge Rating: 20 Treasure: Standard 24 hours. The power otherwise works like an invoke fear spell cast Alignment: Always neutral evil by a 25th-level shadow knight. Advancement Range: 26-35 HD (Huge) Harm Touch (Su): Once per hour, the Amygdalan knight may Fection: je make a melee touch attack (+33 attack bonus) to deliver a harm touch. The harm touch deals 75 points of damage or half that Descri ption amount if the victim succeeds at a Fortitude save (DC 27). Harm touch may be used as an attack action, or, if the knight takes a full Amygdalan knights hail from the Plane of attack action, it may make one extra attack to deliver the harm Fear. They rarely appear on Norrath itself, touch in addition to its normal attacks. A but when they do, death and destruction failed attack roll does not expend the ultimately follow. The mere Amygdalan knight&#x27;s hourly use of this threat of their appear- ability. ance is often enough Spell-Like Abilities: The tosow fear, which Amygdalan knight&#x27;s spell-like abilipleases the ties (and mana cost for each) are as knights&#x27; follows: dooming darkness (20), invoke master fear (20), life leech (53), summon dead (48), and word of spirit (22). These spells are as cast by a 25th-level shadow knight (save DC 15 + spell level) with a mana pool of 210. Resistances (Ex): Amygdalan knights have bonuses of acid, disease, poison, and sonic resistance (20), as well as cold, fire, and magic resistance (30). See In Darkness (Su): Amygdalan knights can see perfectly in darkness of any kind, even magical darkness created by spells. Telepathy (Su): Amygdalan knights can com- municate telepathically with any creature within 100 feet as long as the creature speaks a language. Zac Armored Casting (Ex): Amygdalan knights Cot - may ignore the arcane spell failure chance for wearing armor, as per the shadow knight ability. Skills: An Amygdalan knight has a fearsome visage, conferring a +8 racial bonus to Intimidate. 4 eri:</p>"
    }
  },
  {
    "name": "Avatar of Fear",
    "type": "npc",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "abilities": {
        "str": {
          "value": 31,
          "mod": 10
        },
        "dex": {
          "value": 11,
          "mod": 0
        },
        "con": {
          "value": 35,
          "mod": 12
        },
        "int": {
          "value": 23,
          "mod": 6
        },
        "wis": {
          "value": 21,
          "mod": 5
        },
        "cha": {
          "value": 28,
          "mod": 9
        }
      },
      "details": {
        "cr": 19,
        "size": "Huge",
        "type": "Outsider",
        "subtypes": "Evil",
        "faction": "Cazic-Thule Resistances (Ex): The Avatar of fz : Fear has bonuses of acid, cold, fire, - Oescri ption and magic resistance (20). = Immunities (Ex): The Avatar iy bis Scene he as a of Fear is immune to disease, poi- ; : sleek ast vem ka Piadelah son, and mind-affecting spells or & effects, such as those of the fear : Fear but creates the Avatar of and mesmerize spell lines. L Fear as his emissary. The Avatar of Fear looks exactly like CazicThule but on a smaller scale: a giant hulk without a face on short, thick legs with of Fear takes normal (not subdual)",
        "alignment": "Always neutral evil their attack roll or make a Reflex save (DC 30) 4",
        "speed": 30
      },
      "resources": {
        "hp": {
          "value": 330,
          "max": 330,
          "temp": 0,
          "bonus": 0
        },
        "mana": {
          "value": 0,
          "max": 0
        }
      },
      "combat": {
        "ac": {
          "value": 35
        },
        "bab": 0,
        "saves": {
          "fortitude": {
            "value": 24
          },
          "reflex": {
            "value": 12
          },
          "will": {
            "value": 17
          }
        },
        "initiative": {
          "value": 0
        },
        "attackMisc": 0,
        "magicSaveBonus": 0
      },
      "statblock": {
        "hitDice": "20d8+240 (330 hp) attacks. It is usually surrounded by fanatical devotees who will wile re P soften up any enemies before it charges forth to encompass as",
        "speed": "30 ft. before the Avatar become targets for its suite of melee attacks,",
        "ac": "35 (-2 size, +27 natural) which generally begin with a harm touch. While it stomps Attaches 2'slams'+ 28 malée: 2 claws +23 inelecv or 2'sloms relatively small opponents with its feet (it may only use its stomp +28 melee, 2 claws +23 melee, 2 stomps +23 melee attack against Medium-size or smaller opponents), its two muscuD ; Slam 4d6+10 and daze. claw Id6+5: stomp 4d8+10 lar, over-sized arms pound foes into jelly, while two smaller arms - ee ee just below them rip into foes with their razor-sharp claws. .",
        "attacks": "Fear aura, harm touch, trample 8d8+15 usually has several powerful magic items in its possession that it G",
        "damage": "",
        "faceReach": "20 ft. by 20 ft/I5 ft. (5 Ft. for claws) In addition to the statistics provided here, the Avatar of Fear >» Special",
        "specialAttacks": "",
        "specialQualities": "Damage reduction 30/+3, SR 30, immunities, resis- will use as appropriate. Aa tances, regeneration 30, see invisible, infravision, Fear Aura (Su): This ability operates continuously within a - ultravision 20-foot radius as an invoke fear spell cast by a 25th-level shadow 4",
        "saves": "Fort +24, Ref +12, Will +17 knight. A Will save (DC 25) negates the effect. If the save is yt",
        "abilities": "Str 31, Dex 11, Con 35, Int 23, Wis 21, Cha 28 successful, that opponent cannot be affected again by the Avatar's *< fear aura for 24 hours. Harm Touch (Su): Once per hour, the Avatar of Fear may make a melee touch attack (+28 attack bonus) to deliver a harm i",
        "skills": "Climb +30, Hide +12, Intimidate +27, Jump +30, Knowledge (geography) +26, Knowledge (history) +26, Knowledge (mysticism) +26, Knowledge (pla- nar travel) +26, Knowledge (religion) +26, Listen +25, Search +26, Sense Motive +25, Spot +25, touch. The harm touch deals 60 points of damage or half that amount if the victim succeeds at a Fortitude save (DC 26). Harm touch may be used as an attack action, or, if the Avatar takes a full + Undead Empathy +27 attack action, it may make one extra attack to deliver the harm (Pe",
        "feats": "Cleave, Finishing Blow, Great Cleave, Improved Slam, touch in addition to its normal attacks. A failed attack roll does ~ Power Attack, Slam ( not expend the Avatar's hourly use of this ability. b",
        "climateTerrain": "Any } Trample (Ex): As a standard action, the Avatar of Fear ey",
        "organization": "Solitary 5 can simply run over a Large or smaller opponent. This ie",
        "treasure": "Triple standard attempt attacks of opportunity at a-4 penalty to ~",
        "advancement": "for half damage. ‘",
        "challengeRating": "19 ) Nits; attack requires no attack roll and deals 8d8+15 blud- 4 : geoning damage. Trampled opponents can either we",
        "source": "Monsters of Norrath p. 25",
        "rawText": ". Avatar of Fear Combat\noe\n~\n\nHuge Outsider (Evil) The Avatar of Fear has good resistances to all sorts of magical\n= Hit Dice: 20d8+240 (330 hp) attacks. It is usually surrounded by fanatical devotees who will\nwile re P soften up any enemies before it charges forth to encompass as\n\nInitiative: +0 many foes as possible in its fear aura. Those who do not quail\n\nSpeed: 30 ft. before the Avatar become targets for its suite of melee attacks,\nAC: 35 (-2 size, +27 natural) which generally begin with a harm touch. While it stomps\nAttaches 2'slams'+ 28 malée: 2 claws +23 inelecv or 2'sloms relatively small opponents with its feet (it may only use its stomp\n+28 melee, 2 claws +23 melee, 2 stomps +23 melee attack against Medium-size or smaller opponents), its two muscuD ; Slam 4d6+10 and daze. claw Id6+5: stomp 4d8+10 lar, over-sized arms pound foes into jelly, while two smaller arms\n- ee ee just below them rip into foes with their razor-sharp claws. .\nFace/Reach: 20 ft. by 20 ft/I5 ft. (5 Ft. for claws) In addition to the statistics provided here, the Avatar of Fear >»\nSpecial Attacks: Fear aura, harm touch, trample 8d8+15 usually has several powerful magic items in its possession that it G\nSpecial Qualities: Damage reduction 30/+3, SR 30, immunities, resis- will use as appropriate. Aa\ntances, regeneration 30, see invisible, infravision, Fear Aura (Su): This ability operates continuously within a -\nultravision 20-foot radius as an invoke fear spell cast by a 25th-level shadow 4\nSaves: Fort +24, Ref +12, Will +17 knight. A Will save (DC 25) negates the effect. If the save is yt\nAbilities: Str 31, Dex 11, Con 35, Int 23, Wis 21, Cha 28 successful, that opponent cannot be affected again by the Avatar's *<\n\nfear aura for 24 hours.\n\nHarm Touch (Su): Once per hour, the Avatar of Fear may\nmake a melee touch attack (+28 attack bonus) to deliver a harm i\n\nSkills: Climb +30, Hide +12, Intimidate +27, Jump +30,\nKnowledge (geography) +26, Knowledge (history)\n+26, Knowledge (mysticism) +26, Knowledge (pla-\n\nnar travel) +26, Knowledge (religion) +26, Listen\n+25, Search +26, Sense Motive +25, Spot +25,\n\ntouch. The harm touch deals 60 points of damage or half that\namount if the victim succeeds at a Fortitude save (DC 26). Harm\n\ntouch may be used as an attack action, or, if the Avatar takes a full +\nUndead Empathy +27 attack action, it may make one extra attack to deliver the harm (Pe\nFeats: Cleave, Finishing Blow, Great Cleave, Improved Slam, touch in addition to its normal attacks. A failed attack roll does ~\nPower Attack, Slam ( not expend the Avatar's hourly use of this ability. b\nClimate/Terrain: Any } Trample (Ex): As a standard action, the Avatar of Fear ey\nOrganization: Solitary 5 can simply run over a Large or smaller opponent. This ie\nChallenge Rating: 19 ) Nits; attack requires no attack roll and deals 8d8+15 blud- 4\n: geoning damage. Trampled opponents can either we\nTreasure: Triple standard attempt attacks of opportunity at a-4 penalty to ~\nAlignment: Always neutral evil their attack roll or make a Reflex save (DC 30) 4\nAdvancement Range: - for half damage. ‘,\nFaction: Cazic-Thule Resistances (Ex): The Avatar of fz\n: Fear has bonuses of acid, cold, fire, -\nOescri ption and magic resistance (20). =\nImmunities (Ex): The Avatar iy\nbis Scene he as a of Fear is immune to disease, poi- ; :\nsleek ast vem ka Piadelah son, and mind-affecting spells or &\neffects, such as those of the fear :\nFear but creates the Avatar of and mesmerize spell lines. L\n\nFear as his emissary. The Avatar\nof Fear looks exactly like CazicThule but on a smaller scale: a\ngiant hulk without a face on\nshort, thick legs with\n\nof Fear takes normal (not subdual)\ndamage only from divine spells cast by\ngood-aligned casters, and it cannot\n\nRegeneration (Ex): The Avatar | .\n\nbroad feet; with two _-_- regenerate such dam- Fy\nsets of arms, one ‘\" eee: <\nhuge and the other i\nrelatively small. The :\nAvatar of Fear is far ne\nless powerful than .\nCazic-Thule himself, (: <\nbut it is still a fearsome a\nfoe in every way. Like its master, it :\nloves to trample over smaller crea- ‘\ntures. Le\nThe Avatar of Fear ?\nappears wherever re\nCazic-Thule de- pt\nsires his presence =\n\nto be known, whether\nthe throne room of\nCaballis or directing the\ndevout in the Lost Temple\ndeep in the Feerott."
      },
      "biography": "<p>. Avatar of Fear Combat oe ~ Huge Outsider (Evil) The Avatar of Fear has good resistances to all sorts of magical = Hit Dice: 20d8+240 (330 hp) attacks. It is usually surrounded by fanatical devotees who will wile re P soften up any enemies before it charges forth to encompass as Initiative: +0 many foes as possible in its fear aura. Those who do not quail Speed: 30 ft. before the Avatar become targets for its suite of melee attacks, AC: 35 (-2 size, +27 natural) which generally begin with a harm touch. While it stomps Attaches 2&#x27;slams&#x27;+ 28 malée: 2 claws +23 inelecv or 2&#x27;sloms relatively small opponents with its feet (it may only use its stomp +28 melee, 2 claws +23 melee, 2 stomps +23 melee attack against Medium-size or smaller opponents), its two muscuD ; Slam 4d6+10 and daze. claw Id6+5: stomp 4d8+10 lar, over-sized arms pound foes into jelly, while two smaller arms - ee ee just below them rip into foes with their razor-sharp claws. . Face/Reach: 20 ft. by 20 ft/I5 ft. (5 Ft. for claws) In addition to the statistics provided here, the Avatar of Fear &gt;» Special Attacks: Fear aura, harm touch, trample 8d8+15 usually has several powerful magic items in its possession that it G Special Qualities: Damage reduction 30/+3, SR 30, immunities, resis- will use as appropriate. Aa tances, regeneration 30, see invisible, infravision, Fear Aura (Su): This ability operates continuously within a - ultravision 20-foot radius as an invoke fear spell cast by a 25th-level shadow 4 Saves: Fort +24, Ref +12, Will +17 knight. A Will save (DC 25) negates the effect. If the save is yt Abilities: Str 31, Dex 11, Con 35, Int 23, Wis 21, Cha 28 successful, that opponent cannot be affected again by the Avatar&#x27;s *&lt; fear aura for 24 hours. Harm Touch (Su): Once per hour, the Avatar of Fear may make a melee touch attack (+28 attack bonus) to deliver a harm i Skills: Climb +30, Hide +12, Intimidate +27, Jump +30, Knowledge (geography) +26, Knowledge (history) +26, Knowledge (mysticism) +26, Knowledge (pla- nar travel) +26, Knowledge (religion) +26, Listen +25, Search +26, Sense Motive +25, Spot +25, touch. The harm touch deals 60 points of damage or half that amount if the victim succeeds at a Fortitude save (DC 26). Harm touch may be used as an attack action, or, if the Avatar takes a full + Undead Empathy +27 attack action, it may make one extra attack to deliver the harm (Pe Feats: Cleave, Finishing Blow, Great Cleave, Improved Slam, touch in addition to its normal attacks. A failed attack roll does ~ Power Attack, Slam ( not expend the Avatar&#x27;s hourly use of this ability. b Climate/Terrain: Any } Trample (Ex): As a standard action, the Avatar of Fear ey Organization: Solitary 5 can simply run over a Large or smaller opponent. This ie Challenge Rating: 19 ) Nits; attack requires no attack roll and deals 8d8+15 blud- 4 : geoning damage. Trampled opponents can either we Treasure: Triple standard attempt attacks of opportunity at a-4 penalty to ~ Alignment: Always neutral evil their attack roll or make a Reflex save (DC 30) 4 Advancement Range: - for half damage. ‘, Faction: Cazic-Thule Resistances (Ex): The Avatar of fz : Fear has bonuses of acid, cold, fire, - Oescri ption and magic resistance (20). = Immunities (Ex): The Avatar iy bis Scene he as a of Fear is immune to disease, poi- ; : sleek ast vem ka Piadelah son, and mind-affecting spells or &amp; effects, such as those of the fear : Fear but creates the Avatar of and mesmerize spell lines. L Fear as his emissary. The Avatar of Fear looks exactly like CazicThule but on a smaller scale: a giant hulk without a face on short, thick legs with of Fear takes normal (not subdual) damage only from divine spells cast by good-aligned casters, and it cannot Regeneration (Ex): The Avatar | . broad feet; with two _-_- regenerate such dam- Fy sets of arms, one ‘&quot; eee: &lt; huge and the other i relatively small. The : Avatar of Fear is far ne less powerful than . Cazic-Thule himself, (: &lt; but it is still a fearsome a foe in every way. Like its master, it : loves to trample over smaller crea- ‘ tures. Le The Avatar of Fear ? appears wherever re Cazic-Thule de- pt sires his presence = to be known, whether the throne room of Caballis or directing the devout in the Lost Temple deep in the Feerott.</p>"
    }
  },
  {
    "name": "Aviak",
    "type": "npc",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "abilities": {
        "str": {
          "value": 10,
          "mod": 0
        },
        "dex": {
          "value": 14,
          "mod": 2
        },
        "con": {
          "value": 10,
          "mod": 0
        },
        "int": {
          "value": 6,
          "mod": -2
        },
        "wis": {
          "value": 10,
          "mod": 0
        },
        "cha": {
          "value": 10,
          "mod": 0
        }
      },
      "details": {
        "cr": 2,
        "size": "",
        "type": "",
        "subtypes": "",
        "faction": "",
        "alignment": "Usually neutral",
        "speed": 40
      },
      "resources": {
        "hp": {
          "value": 32,
          "max": 32,
          "temp": 0,
          "bonus": 0
        },
        "mana": {
          "value": 0,
          "max": 0
        }
      },
      "combat": {
        "ac": {
          "value": 15
        },
        "bab": 0,
        "saves": {
          "fortitude": {
            "value": 2
          },
          "reflex": {
            "value": 7
          },
          "will": {
            "value": 2
          }
        },
        "initiative": {
          "value": 6
        },
        "attackMisc": 0,
        "magicSaveBonus": 0
      },
      "statblock": {
        "hitDice": "7d8 (32 hp)",
        "speed": "40 ft.",
        "ac": "15 (+2 Dex, +3 natural)",
        "attacks": "Heavy mace +5 melee; or javelin +7 ranged",
        "damage": "Heavy mace 1d8; javelin Id6",
        "faceReach": "5 ft. by 5 Ft./5 ft",
        "specialAttacks": "",
        "specialQualities": "Glide",
        "saves": "Fort +2, Ref +7, Will +2",
        "abilities": "Str 10, Dex 14, Con 10, Int 6, Wis 10, Cha 10",
        "skills": "Hide +3, Listen +1, Sneak +7, Spot +8",
        "feats": "Improved Initiative, Lightning Reflexes",
        "climateTerrain": "Any forest and plains",
        "organization": "Solitary, brace, or brood (3-8)",
        "treasure": "Standard",
        "advancement": "None",
        "challengeRating": "2",
        "source": "Monsters of Norrath p. 26",
        "rawText": "Medium-Size Humanoid (Aviak)\n7d8 (32 hp)\n\n+6 (+2 Dex, +4 Improved Initiative)\n40 ft.\n\n15 (+2 Dex, +3 natural)\n\nHeavy mace +5 melee; or javelin +7 ranged\n\nHeavy mace 1d8; javelin Id6\n5 ft. by 5 Ft./5 ft.\n\nGlide\n\nFort +2, Ref +7, Will +2\n\nStr 10, Dex 14, Con 10, Int 6, Wis 10, Cha 10\nHide +3, Listen +1, Sneak +7, Spot +8\n\nImproved Initiative, Lightning Reflexes\n\nAny forest and plains\n\nSolitary, brace, or brood (3-8)\n2\n\nStandard\n\nUsually neutral\n\nNone\n\nHarrier\n\nLarge Humanoid (Aviak)\n\n14d8+14 (77 hp)\n\n+8 (+4 Dex, +4 Improved Initiative)\n50 ft.\n\n17 (-1 size, +4 Dex, +6 natural)\nLarge morningstar +14/+8 melee, or\nLarge javelin +12/+7 ranged\n\nLarge morningstar 2d6+5;\n\nLarge javelin 1d8+5\n\n5 ft. by 5 Ft./10 Ft.\n\nGlide\n\nFort +5, Ref +15, Will +4\n\nStr 20, Dex 18, Con 12, Int 8, Wis 11, Cha 14\nHide +1, Listen +3, Sneak +10, Spot +11\nCombat Reflexes, Improved Initiative,\nLightning Reflexes, Power Attack\nAny forest and plains\n\nSolitary, brace, or brood (3-5)\n\n5\n\nStandard\n\nUsually neutral\n\n: 15-17 HD (Large)\n\nDescription\n\nNone\n\nMedium-Size Humanoid (Aviak)\n8d8 (36 hp)\n\n+7 (+3 Dex, +4 Improved Initiative)\n40 ft.\n\n16 (+3 Dex, +3 natural)\n\nMorningstar +7/+1 melee; or javelin +9/\n+4 ranged\n\nMorningstar Id10+1; javelin 1d6+1\n5 ft. by 5 ft./5 ft.\n\nGlide\n\nFort +2, Ref +11, Will +2\n\nStr 13, Dex 16, Con Il, Int 6, Wis 10, Cha 11\nHide +4, Listen +1, Sneak +7, Spot +7\n\nCombat Reflexes, Improved Initiative,\nLightning Reflexes\n\nAny forest and plains\n\nSolitary, brace, or nest (3-20)\n3\n\nStandard\n\nUsually neutral\n\n7-10 HD (Medium-size)\n\nNone\n\nAvocet\n\nLarge Humanoid (Aviak)\n\n18d8+18 (77 hp)\n\n+7 (+5 Dex, +4 Improved Initiative)\n50 ft.\n\n22 (-I size, +5 Dex, +8 natural)\nLarge morningstar +17/+13/+7 melee,\nor Large javelin +18/+13/+8 ranged\nLarge morningstar 2d6+7;\n\nLarge javelin 1d8+7\n\n5 ft. by 5 Ft./10 ft.\n\nGlide\n\nFort +7, Ref +18, Will +6\n\nStr 24, Dex 20, Con 13, Int 10, Wis 12, Cha 16\n\nHide +2, Listen +4, Sneak +12, Spot +12\n\nMedium-Size Humanoid (Aviak)\n11d8 (50 hp)\n\n+7 (+3 Dex, +4 Improved Initiative)\n40 ft.\n\n17 (+3 Dex, +4 natural)\n\nMorningstar +10/+4 melee; or javelin +I1/\n+6 ranged\n\nMorningstar Id10+2; javelin 1d6+2\n\n5 ft. by 5 Ft./5 ft.\n\nGlide\n\nFort +3, Ref +12, Will +3\n\nStr 14, Dex 17, Con 11, Int 7, Wis 10, Cha 12\nHide +4, Listen +2, Sneak +7, Spot +7\n\nCombat Reflexes, Improved Initiative,\nLightning Reflexes\n\nAny forest and plains\n\nSolitary, brace, or nest (3-20)\n4\n\nStandard\nUsually neutral\n12-13 HD (Medium-size)\n\nNone\n\nCleave, Combat Reflexes, Improved Initiative, §\n\nLightning Reflexes, Power Attack\nAny forest and plains\n\nSolitary\n\n6\n\nStandard\n\nUsually neutral\n\n17-24 HD (Large)\n\nNone\n\nAviaks, a birdlike race of humanoids, can be found throughout\nNorrath. From nests in the crags of the Butcherblock Mountains\nto village roosts on island archipelagoes in the Ocean of Tears to\nentire aviary cities on the plains of Karana, many different species\nof aviaks have carved out their homes.\n\nAsarule, aviaks are not very aggressive toward other creatures.\nThis trait, combined with their limited intelligence, makes them\nsomewhat less than a serious threat to other civilized races. Aviaks\ncan, however, become serious nuisances, if not outright threats, to\noutlying communities. They have little regard for (or perhaps"
      },
      "biography": "<h2>Description</h2><p>None</p><p>Medium-Size Humanoid (Aviak) 8d8 (36 hp)</p><p>+7 (+3 Dex, +4 Improved Initiative) 40 ft.</p><p>16 (+3 Dex, +3 natural)</p><p>Morningstar +7/+1 melee; or javelin +9/ +4 ranged</p><p>Morningstar Id10+1; javelin 1d6+1 5 ft. by 5 ft./5 ft.</p><p>Glide</p><p>Fort +2, Ref +11, Will +2</p><p>Str 13, Dex 16, Con Il, Int 6, Wis 10, Cha 11 Hide +4, Listen +1, Sneak +7, Spot +7</p><h2>Combat</h2><p>Reflexes, Improved Initiative, Lightning Reflexes, Power Attack Any forest and plains</p><p>Solitary, brace, or brood (3-5)</p><p>5</p><p>Standard</p><p>Usually neutral</p><p>: 15-17 HD (Large)</p><h2>Description</h2><p>None</p><p>Medium-Size Humanoid (Aviak) 8d8 (36 hp)</p><p>+7 (+3 Dex, +4 Improved Initiative) 40 ft.</p><p>16 (+3 Dex, +3 natural)</p><p>Morningstar +7/+1 melee; or javelin +9/ +4 ranged</p><p>Morningstar Id10+1; javelin 1d6+1 5 ft. by 5 ft./5 ft.</p><p>Glide</p><p>Fort +2, Ref +11, Will +2</p><p>Str 13, Dex 16, Con Il, Int 6, Wis 10, Cha 11 Hide +4, Listen +1, Sneak +7, Spot +7</p><p>Combat Reflexes, Improved Initiative, Lightning Reflexes</p><p>Any forest and plains</p><p>Solitary, brace, or nest (3-20) 3</p><p>Standard</p><p>Usually neutral</p><p>7-10 HD (Medium-size)</p><p>None</p><p>Avocet</p><p>Large Humanoid (Aviak)</p><p>18d8+18 (77 hp)</p><p>+7 (+5 Dex, +4 Improved Initiative) 50 ft.</p><p>22 (-I size, +5 Dex, +8 natural) Large morningstar +17/+13/+7 melee, or Large javelin +18/+13/+8 ranged Large morningstar 2d6+7;</p><p>Large javelin 1d8+7</p><p>5 ft. by 5 Ft./10 ft.</p><p>Glide</p><p>Fort +7, Ref +18, Will +6</p><p>Str 24, Dex 20, Con 13, Int 10, Wis 12, Cha 16</p><p>Hide +2, Listen +4, Sneak +12, Spot +12</p><p>Medium-Size Humanoid (Aviak) 11d8 (50 hp)</p><p>+7 (+3 Dex, +4 Improved Initiative) 40 ft.</p><p>17 (+3 Dex, +4 natural)</p><p>Morningstar +10/+4 melee; or javelin +I1/ +6 ranged</p><p>Morningstar Id10+2; javelin 1d6+2</p><p>5 ft. by 5 Ft./5 ft.</p><p>Glide</p><p>Fort +3, Ref +12, Will +3</p><p>Str 14, Dex 17, Con 11, Int 7, Wis 10, Cha 12 Hide +4, Listen +2, Sneak +7, Spot +7</p><p>Combat Reflexes, Improved Initiative, Lightning Reflexes</p><p>Any forest and plains</p><p>Solitary, brace, or nest (3-20) 4</p><p>Standard Usually neutral 12-13 HD (Medium-size)</p><p>None</p><p>Cleave, Combat Reflexes, Improved Initiative, §</p><p>Lightning Reflexes, Power Attack Any forest and plains</p><p>Solitary</p><p>6</p><p>Standard</p><p>Usually neutral</p><p>17-24 HD (Large)</p><p>None</p><p>Aviaks, a birdlike race of humanoids, can be found throughout Norrath. From nests in the crags of the Butcherblock Mountains to village roosts on island archipelagoes in the Ocean of Tears to entire aviary cities on the plains of Karana, many different species of aviaks have carved out their homes.</p><p>Asarule, aviaks are not very aggressive toward other creatures. This trait, combined with their limited intelligence, makes them somewhat less than a serious threat to other civilized races. Aviaks can, however, become serious nuisances, if not outright threats, to outlying communities. They have little regard for (or perhaps</p>"
    }
  },
  {
    "name": "Bixie",
    "type": "npc",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "abilities": {
        "str": {
          "value": 6,
          "mod": -2
        },
        "dex": {
          "value": 16,
          "mod": 3
        },
        "con": {
          "value": 10,
          "mod": 0
        },
        "int": {
          "value": 8,
          "mod": -1
        },
        "wis": {
          "value": 10,
          "mod": 0
        },
        "cha": {
          "value": 10,
          "mod": 0
        }
      },
      "details": {
        "cr": 1,
        "size": "",
        "type": "",
        "subtypes": "",
        "faction": "Stone Hive Bixies",
        "alignment": "Usually neutral",
        "speed": 20
      },
      "resources": {
        "hp": {
          "value": 3,
          "max": 3,
          "temp": 0,
          "bonus": 0
        },
        "mana": {
          "value": 0,
          "max": 0
        }
      },
      "combat": {
        "ac": {
          "value": 15
        },
        "bab": 0,
        "saves": {
          "fortitude": {
            "value": 0
          },
          "reflex": {
            "value": 5
          },
          "will": {
            "value": 2
          }
        },
        "initiative": {
          "value": 3
        },
        "attackMisc": 0,
        "magicSaveBonus": 0
      },
      "statblock": {
        "hitDice": "Id6 (3 hp)",
        "speed": "20 ft., fly 60 ft. (good)",
        "ac": "15 (+2 size, +3 Dex)",
        "attacks": "Sting +5 melee",
        "damage": "",
        "faceReach": "",
        "specialAttacks": "Sting Id2-2 and poison 2 1/2 Ft. by 2 1/2 Ft./0 ft. Poison, flyby attack SR 12 SR 14",
        "specialQualities": "",
        "saves": "Fort +0, Ref +5, Will +2",
        "abilities": "Str 6, Dex 16, Con 10, Int 8, Wis 10, Cha 10",
        "skills": "An aviak's light, birdlike step confers a +2 racial bonus to Sneak, and its hawk like eyes confer a +4 racial bonus to Spot. Aviak Characters Aviaks' favored class is rogue. Queen Tiny Fey (Bixie) 5d6+5 (22 hp) +3 (Dex) 20 ft., fly 60 ft. (good) 17 (+2 size, +3 Dex, +2 natural) Sting +7 melee; or Tiny dart +7 ranged Sting Id2 and poison; Tiny dart 1d2 and poison 2 1/2 Ft. by 2 1/2 Ft./0 Ft. Poison, flyby attack, spells SR 18 Fort +2, Ref +7, Will +6 Str 10, Dex 16, Con 12, Int 12, Wis 14, Cha 14 Animal Empathy +6, Channeling +6, Heal Perform (dance, singing) +2, Pick Pocket +7, Search +2, Sneak +6, Spot +5, Trade Skill (alchemy) +1, Wilderness Lore +2 (nature) +3, Listen +6, Perform (dance) +1, Pick Pocket +8, Profession (herbalist) +2, Search +3, Sneak +8, Spot +7, Trade Skill +6, Hide +11, Knowledge (nature) +7, Listen +4, Meditation +4, Perform (dance, flute) +4, Profession (herbalist) +5, Search (alchemy) +1, Wilderness Lore +3 Weapon Finesse (sting) Temperate forest, plains, and hills, and underground",
        "feats": "2d6 (7 hp)",
        "climateTerrain": "Temperate forest, plains, and hills",
        "organization": "Swarm (5-20)",
        "treasure": "Standard",
        "advancement": "2-4 HD (Tiny)",
        "challengeRating": "1/4 13",
        "source": "Monsters of Norrath p. 27",
        "rawText": "Tiny Fey (Bixie)\n\nId6 (3 hp)\n\n+3 (Dex)\n\n20 ft., fly 60 ft. (good)\n15 (+2 size, +3 Dex)\nSting +5 melee\n\nDrone\n\nSting Id2-2 and poison\n\n2 1/2 Ft. by 2 1/2 Ft./0 ft.\nPoison, flyby attack\n\nSR 12 SR 14\nFort +0, Ref +5, Will +2\n\nStr 6, Dex 16, Con 10, Int 8, Wis 10, Cha 10\n\nTiny Fey (Bixie)\n\n2d6 (7 hp)\n\n+4 (Dex)\n\n20 ft., fly 80 Ft. (good)\n\n17 (+2 size, +4 Dex, +1 natural)\n\nSting +7 melee; or Tiny dart +7 ranged\nSting 1d2-2 and poison; Tiny dart Id2-2\nand poison\n\n2 1/2 Ft. by 2 1/2 Ft./0 Ft.\n\nPoison, flyby attack\n\nFort +0, Ref +7, Will +3\nStr 7, Dex 18, Con 10, Int 7, Wis 10, Cha 10\nAppraise +2, Heal +2, Hide +12, Listen +5, Appraise +2, Heal +2, Hide +14, Knowledge\n\nCombat\n\nAviaks are not known for brilliant tactics. They generally do\nnot go for reinforcements when they perhaps ought to; they are\nunlikely to stage ambushes or focus attacks on particularly dangerous opponents; and they rarely use teamwork options.\n\nGlide (Ex): Aviaks are essentially flightless; however, they can\nuse their vestigial wings to glide. Aviaks take no damage from\nfalling and may glide horizontally up to 3 feet for every 1 foot of\ndescent in elevation, at a base speed of 60 feet and with poor\nmaneuverability (assuming they are at least 20 feet in the air at the\nstart of their move action).\n\nSkills: An aviak's light, birdlike step confers a +2 racial bonus\nto Sneak, and its hawk like eyes confer a +4 racial bonus to Spot.\n\nAviak Characters\n\nAviaks' favored class is rogue.\n\nQueen\n\nTiny Fey (Bixie)\n\n5d6+5 (22 hp)\n\n+3 (Dex)\n\n20 ft., fly 60 ft. (good)\n\n17 (+2 size, +3 Dex, +2 natural)\n\nSting +7 melee; or Tiny dart +7 ranged\nSting Id2 and poison; Tiny dart 1d2\nand poison\n\n2 1/2 Ft. by 2 1/2 Ft./0 Ft.\n\nPoison, flyby attack, spells\nSR 18\n\nFort +2, Ref +7, Will +6\nStr 10, Dex 16, Con 12, Int 12, Wis 14, Cha 14\n\nAnimal Empathy +6, Channeling +6, Heal\n\nPerform (dance, singing) +2, Pick Pocket\n+7, Search +2, Sneak +6, Spot +5, Trade\nSkill (alchemy) +1, Wilderness Lore +2\n\n(nature) +3, Listen +6, Perform (dance) +1,\nPick Pocket +8, Profession (herbalist) +2,\nSearch +3, Sneak +8, Spot +7, Trade Skill\n\n+6, Hide +11, Knowledge (nature) +7, Listen +4, Meditation +4, Perform (dance,\nflute) +4, Profession (herbalist) +5, Search\n\n(alchemy) +1, Wilderness Lore +3\n\nWeapon Finesse (sting)\n\nTemperate forest, plains, and hills,\nand underground\n\nOrganization: Swarm (5-20)\n\nChallenge Rating: 1/4 13\n\nTreasure: Standard\n\nAlignment: Usually neutral\nAdvancement Range: 2-4 HD (Tiny)\nFaction: Stone Hive Bixies\n\nDescription\n\nBixies swarm together in stone towers in the Misty Thicket, the\nNektulos Forest, the East Commonlands, the Kithicor Forest, and\nother wooded areas throughout Norrath. They usually mind their\nown business unless disturbed and will sometimes help a respectful\ntraveler. These tiny fey have plump bodies striped with yellow and\nblack, like bumble bees. Their wings also resemble those of bees.\nAlthough they are not evil, bixies dislike intrusion onto their\nterritory and are very quick to anger. Some bixies attack travelers\nout of spite and attempt to shoo them away from their hive, while\nothers attack merely to make trouble, and still others attack in an\nattempt to steal shiny baubles from travelers.\n\nWeapon Finesse (sting)\n\nTemperate forest, plains, and hills,\nand underground\n\nSwarm (5-20)\n\nStandard\nUsually neutral\n3-4 HD (Tiny); 5-8 HD (Small)\n\nStone Hive Bixies\n\n+5, Spellcraft +4, Spot +7, Trade Skill (alchemy) +7, Wilderness Lore +6\n\nMental Clarity, Quicken Spell, Weapon Finesse (sting)\n\nTemperate forest, plains, and hills,\nand underground\n\nSolitary, or accompanied by a swarm of\nworkers and/or drones (5-20)\n\n3\n\nDouble standard\n\nUsually neutral good\n\n6-7 HD (Tiny); 8-10 HD (Small)\n\nStone Hive Bixies\n\nCombat\n\nAll bixies may attack with their stingers, although the queen\nwill also use spells. They rarely travel alone, and, if a swarm is\nattacked, one returns to the hive to get reinforcements (an\n\nadditional swarm of 5-20 drones). These reserves arrive in 1d10\nminutes.\n\nFlyby Attack (Ex): All bixies may attack while flying as if they\nhad the Flyby Attack feat.\n\nSkills: Bixies have sharp senses, conferring a +2 racial bonus to\nListen, Search, and Spot."
      },
      "biography": "<h2>Description</h2><p>Bixies swarm together in stone towers in the Misty Thicket, the Nektulos Forest, the East Commonlands, the Kithicor Forest, and other wooded areas throughout Norrath. They usually mind their own business unless disturbed and will sometimes help a respectful traveler. These tiny fey have plump bodies striped with yellow and black, like bumble bees. Their wings also resemble those of bees. Although they are not evil, bixies dislike intrusion onto their territory and are very quick to anger. Some bixies attack travelers out of spite and attempt to shoo them away from their hive, while others attack merely to make trouble, and still others attack in an attempt to steal shiny baubles from travelers.</p><p>Weapon Finesse (sting)</p><p>Temperate forest, plains, and hills, and underground</p><p>Swarm (5-20)</p><p>Standard Usually neutral 3-4 HD (Tiny); 5-8 HD (Small)</p><p>Stone Hive Bixies</p><p>+5, Spellcraft +4, Spot +7, Trade Skill (alchemy) +7, Wilderness Lore +6</p><p>Mental Clarity, Quicken Spell, Weapon Finesse (sting)</p><p>Temperate forest, plains, and hills, and underground</p><p>Solitary, or accompanied by a swarm of workers and/or drones (5-20)</p><p>3</p><p>Double standard</p><p>Usually neutral good</p><p>6-7 HD (Tiny); 8-10 HD (Small)</p><p>Stone Hive Bixies</p><h2>Combat</h2><p>Aviaks are not known for brilliant tactics. They generally do not go for reinforcements when they perhaps ought to; they are unlikely to stage ambushes or focus attacks on particularly dangerous opponents; and they rarely use teamwork options.</p><p>Glide (Ex): Aviaks are essentially flightless; however, they can use their vestigial wings to glide. Aviaks take no damage from falling and may glide horizontally up to 3 feet for every 1 foot of descent in elevation, at a base speed of 60 feet and with poor maneuverability (assuming they are at least 20 feet in the air at the start of their move action).</p><p>Skills: An aviak&#x27;s light, birdlike step confers a +2 racial bonus to Sneak, and its hawk like eyes confer a +4 racial bonus to Spot.</p><p>Aviak Characters</p><p>Aviaks&#x27; favored class is rogue.</p><p>Queen</p><p>Tiny Fey (Bixie)</p><p>5d6+5 (22 hp)</p><p>+3 (Dex)</p><p>20 ft., fly 60 ft. (good)</p><p>17 (+2 size, +3 Dex, +2 natural)</p><p>Sting +7 melee; or Tiny dart +7 ranged Sting Id2 and poison; Tiny dart 1d2 and poison</p><p>2 1/2 Ft. by 2 1/2 Ft./0 Ft.</p><p>Poison, flyby attack, spells SR 18</p><p>Fort +2, Ref +7, Will +6 Str 10, Dex 16, Con 12, Int 12, Wis 14, Cha 14</p><p>Animal Empathy +6, Channeling +6, Heal</p><p>Perform (dance, singing) +2, Pick Pocket +7, Search +2, Sneak +6, Spot +5, Trade Skill (alchemy) +1, Wilderness Lore +2</p><p>(nature) +3, Listen +6, Perform (dance) +1, Pick Pocket +8, Profession (herbalist) +2, Search +3, Sneak +8, Spot +7, Trade Skill</p><p>+6, Hide +11, Knowledge (nature) +7, Listen +4, Meditation +4, Perform (dance, flute) +4, Profession (herbalist) +5, Search</p><p>(alchemy) +1, Wilderness Lore +3</p><p>Weapon Finesse (sting)</p><p>Temperate forest, plains, and hills, and underground</p><p>Organization: Swarm (5-20)</p><p>Challenge Rating: 1/4 13</p><p>Treasure: Standard</p><p>Alignment: Usually neutral Advancement Range: 2-4 HD (Tiny) Faction: Stone Hive Bixies</p><h2>Description</h2><p>Bixies swarm together in stone towers in the Misty Thicket, the Nektulos Forest, the East Commonlands, the Kithicor Forest, and other wooded areas throughout Norrath. They usually mind their own business unless disturbed and will sometimes help a respectful traveler. These tiny fey have plump bodies striped with yellow and black, like bumble bees. Their wings also resemble those of bees. Although they are not evil, bixies dislike intrusion onto their territory and are very quick to anger. Some bixies attack travelers out of spite and attempt to shoo them away from their hive, while others attack merely to make trouble, and still others attack in an attempt to steal shiny baubles from travelers.</p><p>Weapon Finesse (sting)</p><p>Temperate forest, plains, and hills, and underground</p><p>Swarm (5-20)</p><p>Standard Usually neutral 3-4 HD (Tiny); 5-8 HD (Small)</p><p>Stone Hive Bixies</p><p>+5, Spellcraft +4, Spot +7, Trade Skill (alchemy) +7, Wilderness Lore +6</p><p>Mental Clarity, Quicken Spell, Weapon Finesse (sting)</p><p>Temperate forest, plains, and hills, and underground</p><p>Solitary, or accompanied by a swarm of workers and/or drones (5-20)</p><p>3</p><p>Double standard</p><p>Usually neutral good</p><p>6-7 HD (Tiny); 8-10 HD (Small)</p><p>Stone Hive Bixies</p><h2>Combat</h2><p>All bixies may attack with their stingers, although the queen will also use spells. They rarely travel alone, and, if a swarm is attacked, one returns to the hive to get reinforcements (an</p><p>additional swarm of 5-20 drones). These reserves arrive in 1d10 minutes.</p><p>Flyby Attack (Ex): All bixies may attack while flying as if they had the Flyby Attack feat.</p><p>Skills: Bixies have sharp senses, conferring a +2 racial bonus to Listen, Search, and Spot.</p>"
    }
  },
  {
    "name": "Blood Sapper",
    "type": "npc",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "abilities": {
        "str": {
          "value": 8,
          "mod": -1
        },
        "dex": {
          "value": 17,
          "mod": 3
        },
        "con": {
          "value": 12,
          "mod": 1
        },
        "int": {
          "value": 2,
          "mod": -4
        },
        "wis": {
          "value": 14,
          "mod": 2
        },
        "cha": {
          "value": 6,
          "mod": -2
        }
      },
      "details": {
        "cr": 0,
        "size": "Small",
        "type": "Beast",
        "subtypes": "",
        "faction": "None",
        "alignment": "Always neutral",
        "speed": 30
      },
      "resources": {
        "hp": {
          "value": 13,
          "max": 13,
          "temp": 0,
          "bonus": 0
        },
        "mana": {
          "value": 0,
          "max": 0
        }
      },
      "combat": {
        "ac": {
          "value": 16
        },
        "bab": 0,
        "saves": {
          "fortitude": {
            "value": 4
          },
          "reflex": {
            "value": 6
          },
          "will": {
            "value": 2
          }
        },
        "initiative": {
          "value": 3
        },
        "attackMisc": 0,
        "magicSaveBonus": 0
      },
      "statblock": {
        "hitDice": "2d10+2 (13 hp)",
        "speed": "30 ft.",
        "ac": "16 (+1 size, +3 Dex, +2 natural)",
        "attacks": "Bite +1 melee",
        "damage": "Bite Id6-1",
        "faceReach": "5 ft. by 5 ft./5 ft. Special",
        "specialAttacks": "",
        "specialQualities": "Scent",
        "saves": "Fort +4, Ref +6, Will +2",
        "abilities": "Str 8, Dex 17, Con 12, Int 2, Wis 14, Cha 6",
        "skills": "Hide +7*, Listen +3, Sneak +6, Spot +3",
        "feats": "",
        "climateTerrain": "Underground",
        "organization": "Solitary or pack (2-5)",
        "treasure": "1/10 coins, standard goods (gems and keys only), no items",
        "advancement": "3-4 HD (Small); 5-6 HD (Medium-size)",
        "challengeRating": "I",
        "source": "Monsters of Norrath p. 28",
        "rawText": "Blood Sapper\n\nSmall Beast\n\nHit Dice: 2d10+2 (13 hp)\n\nInitiative: +3 (Dex)\n\nSpeed: 30 ft.\n\nAC: 16 (+1 size, +3 Dex, +2 natural)\n\nAttacks: Bite +1 melee\n\nDamage: Bite Id6-1\n\nFace/Reach: 5 ft. by 5 ft./5 ft.\n\nSpecial Attacks: Attach, blood sap\n\nSpecial Qualities: Scent\n\nSaves: Fort +4, Ref +6, Will +2\n\nAbilities: Str 8, Dex 17, Con 12, Int 2, Wis 14, Cha 6\n\nSkills: Hide +7*, Listen +3, Sneak +6, Spot +3\n\nClimate/Terrain: Underground\n\nOrganization: Solitary or pack (2-5)\n\nChallenge Rating: I\n\nTreasure: 1/10 coins, standard goods (gems and keys only), no\nitems\n\nAlignment: Always neutral\n\nAdvancement Range: 3-4 HD (Small); 5-6 HD (Medium-size)\nFaction: None\n\nDescription\n\nFound mainly in dungeons on Antonica, blood sappers are both\nscavengers and predators. These 3-foot long, dingy-hued, rat-like\ncreatures tend to lair near undead and have a taste for rotted flesh\nas well as living. They live on a steady diet of normal rats, lizards,\nand dead matter, whether still shambling or simply still. They\nseem to hate other rats, attacking giant rats and plague rats on\nsight. Blood sappers often appear to become tainted by their\nassociation with undead - their eyes tend to glow with an\nunearthly green luminescence.\n\nAlone, blood sappers generally only attack creatures smaller\nthan themselves. They have shown themselves willing, however,\nto take on similarly sized creatures such as halflings or a larger lone\nadventurer who is weakened by more dangerous opponents. In\npacks, goaded by hunger, they are more aggressive. Though still\nunlikely to tackle a group of healthy adventurers, they will go after\na wounded party or one covered in gore from a recent kill. After\na group of potential meals enters the dungeon, the blood sappers\nfollow at a safe distance, like rodent jackals, waiting for the\nexplorers to kill or be killed by another large creature.\n\nDespite occasional meals of opportunity or desperation, blood\nsappers are mostly docile if ignored, preferring easy prey. If\nattacked or cornered, however, they lash out with bursts of speed\nand ferocity. A single blood sapper can severely wound a healthy\ntarget by locking onto it and draining its blood. A pack of them\ncan kill a target this way in a matter of seconds.\n\nBlood sappers generally have dozens of burrows throughout\ntheir dungeon homes. A\nburrow is"
      },
      "biography": "<h2>Description</h2><p>Found mainly in dungeons on Antonica, blood sappers are both scavengers and predators. These 3-foot long, dingy-hued, rat-like creatures tend to lair near undead and have a taste for rotted flesh as well as living. They live on a steady diet of normal rats, lizards, and dead matter, whether still shambling or simply still. They seem to hate other rats, attacking giant rats and plague rats on sight. Blood sappers often appear to become tainted by their association with undead - their eyes tend to glow with an unearthly green luminescence.</p><p>Alone, blood sappers generally only attack creatures smaller than themselves. They have shown themselves willing, however, to take on similarly sized creatures such as halflings or a larger lone adventurer who is weakened by more dangerous opponents. In packs, goaded by hunger, they are more aggressive. Though still unlikely to tackle a group of healthy adventurers, they will go after a wounded party or one covered in gore from a recent kill. After a group of potential meals enters the dungeon, the blood sappers follow at a safe distance, like rodent jackals, waiting for the explorers to kill or be killed by another large creature.</p><p>Despite occasional meals of opportunity or desperation, blood sappers are mostly docile if ignored, preferring easy prey. If attacked or cornered, however, they lash out with bursts of speed and ferocity. A single blood sapper can severely wound a healthy target by locking onto it and draining its blood. A pack of them can kill a target this way in a matter of seconds.</p><p>Blood sappers generally have dozens of burrows throughout their dungeon homes. A burrow is</p>"
    }
  },
  {
    "name": "Boogeyman",
    "type": "npc",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "abilities": {
        "str": {
          "value": 10,
          "mod": 0
        },
        "dex": {
          "value": 10,
          "mod": 0
        },
        "con": {
          "value": 10,
          "mod": 0
        },
        "int": {
          "value": 10,
          "mod": 0
        },
        "wis": {
          "value": 10,
          "mod": 0
        },
        "cha": {
          "value": 10,
          "mod": 0
        }
      },
      "details": {
        "cr": 0,
        "size": "",
        "type": "",
        "subtypes": "",
        "faction": "",
        "alignment": "",
        "speed": 0
      },
      "resources": {
        "hp": {
          "value": 0,
          "max": 0,
          "temp": 0,
          "bonus": 0
        },
        "mana": {
          "value": 0,
          "max": 0
        }
      },
      "combat": {
        "ac": {
          "value": 10
        },
        "bab": 0,
        "saves": {
          "fortitude": {
            "value": 0
          },
          "reflex": {
            "value": 0
          },
          "will": {
            "value": 0
          }
        },
        "initiative": {
          "value": 0
        },
        "attackMisc": 0,
        "magicSaveBonus": 0
      },
      "statblock": {
        "hitDice": "",
        "speed": "",
        "ac": "",
        "attacks": "",
        "damage": "",
        "faceReach": "",
        "specialAttacks": "",
        "specialQualities": "",
        "saves": "",
        "abilities": "",
        "skills": "",
        "feats": "",
        "climateTerrain": "",
        "organization": "",
        "treasure": "",
        "advancement": "",
        "challengeRating": "",
        "source": "Monsters of Norrath p. 29",
        "rawText": "Whatever bizarre creature a boogeyman might have been when\nit was alive is a mystery. In undeath, it stalks the Plane of Fear,\nbringing dread to interlopers there.\n\nBoogeymen literally feed on fear. In the past, they sated this\nhunger by traveling to Norrath and striking fear into the various\ninhabitants there. More recently, as the boundaries between the\nplanes began to weaken, adventurers have started gating to the\nPlane of Fear, allowing boogeymen to feed without leaving home.\n\nThe taste of fear borne of overconfidence is especially fine to\nboogeymen.\n\nThese 12-foot tall horrors have tight, dark skin and luminescent\ngreen eyes. Their heads are flattened and their faces elongated.\nAlthough they can talk, boogeymen rarely do. Their only sound in\ncombat is a raspy breathing and an occasional chuckle when one of\ntheir special abilities affects an opponent. They are quite capable of\nadvanced tactics, but use them only when they think their oppo-\n\nCombat\n\nwarrant the\nthought. The rest\nof the time, they\nsimply appear\nfrom the cloaking\n\nshadows and begin fighting.\n\nA\nboogeyman\nfights with its\nbarefists,slamming opponents\nwith frightfully\npowerful blows.\nItuses its Mobility and Spring\nAttack feats to\nmove around Jim\nin combat so\nthat its\nshadow falls on\ndifferent targets. If a\ncombat turns against it, a .\nboogeyman uses its shadow walk ability to flee.\n\nInsanity (Ex): Ifa boogeyman hits a single opponent at least\ntwice in the same round, that opponent must succeed at a Will\n\nsave (DC 29) or suffer 2d4 points of permanent Wisdom drain.\n\nTerrify (Su): Anyone who walks or falls into a boogeyman's\nshadow must succeed at a Will save (DC 29) or fall catatonic with\nfear for 2d4 rounds. A catatonic victim cannot move or speak and\nis considered helpless. A boogeyman's shadow generally covers a\n10-foot long by 5-foot wide area ina given direction, although any\nbright light that reaches the boogeyman (such as the bright flare\nof a fire spell) will likely cast a shadow, even if only momentarily,\non its opposite side, of a length equal to 5 feet multiplied by the\ndistance of the light source's center-point from the boogeyman.\n\nResistances (Ex): Boogeymen have bonuses of cold and magic\nresistance (20).\n\nRegeneration (Ex): Ifa boogeyman loses a limb or body part, the lost\nportion grows back in 1 minute. It can also reattach the severed member\ninstantly by holding it to the stump. A boogeyman takes normal damage\nfrom fire and acid and from divine spells cast by a good-aligned cleric.\n\nOversight (Su): While on the Plane of Fear, a boogeyman can\n\"see\" everything within 50 miles as if it had blindsight to that\nrange. Further, it can coordinate this supernatural vision with its\nnatural eyesight without incurring penalties or may use it instead\nof its own sight if blinded.\n\nShadow Walk (Su): A boogeyman can step into any shadow\nand teleport instantly to any other shadow within a 50-mile\nradius. It may use this ability twice per day to translocate through\nshadows between the Plane of Fear and Norrath.\n\nSummon Minions (Su): While on the Plane of Fear, once per\nday a boogeyman can summon any other denizen of that plane\nwith fewer Hit Dice than itself within a 50-mile radius. Summoned creatures may appear anywhere within 20 feet of the\nboogeyman, as the boogeyman chooses.\n\nUndead: Immune to poison, sleep, paralysis, stunning, death\nmagic, and disease. Not subject to critical hits, subdual damage,\nability damage, energy drain, or death from massive damage.\nImmune to any effect that calls for a Fortitude save to resist unless\nthe effect specifically targets objects. Not subject to attacks or\nspells of a mind-affecting nature."
      },
      "biography": "<h2>Combat</h2><p>is a raspy breathing and an occasional chuckle when one of their special abilities affects an opponent. They are quite capable of advanced tactics, but use them only when they think their oppo-</p><h2>Combat</h2><p>warrant the thought. The rest of the time, they simply appear from the cloaking</p><p>shadows and begin fighting.</p><p>A boogeyman fights with its barefists,slamming opponents with frightfully powerful blows. Ituses its Mobility and Spring Attack feats to move around Jim in combat so that its shadow falls on different targets. If a combat turns against it, a . boogeyman uses its shadow walk ability to flee.</p><p>Insanity (Ex): Ifa boogeyman hits a single opponent at least twice in the same round, that opponent must succeed at a Will</p><p>save (DC 29) or suffer 2d4 points of permanent Wisdom drain.</p><p>Terrify (Su): Anyone who walks or falls into a boogeyman&#x27;s shadow must succeed at a Will save (DC 29) or fall catatonic with fear for 2d4 rounds. A catatonic victim cannot move or speak and is considered helpless. A boogeyman&#x27;s shadow generally covers a 10-foot long by 5-foot wide area ina given direction, although any bright light that reaches the boogeyman (such as the bright flare of a fire spell) will likely cast a shadow, even if only momentarily, on its opposite side, of a length equal to 5 feet multiplied by the distance of the light source&#x27;s center-point from the boogeyman.</p><p>Resistances (Ex): Boogeymen have bonuses of cold and magic resistance (20).</p><p>Regeneration (Ex): Ifa boogeyman loses a limb or body part, the lost portion grows back in 1 minute. It can also reattach the severed member instantly by holding it to the stump. A boogeyman takes normal damage from fire and acid and from divine spells cast by a good-aligned cleric.</p><p>Oversight (Su): While on the Plane of Fear, a boogeyman can &quot;see&quot; everything within 50 miles as if it had blindsight to that range. Further, it can coordinate this supernatural vision with its natural eyesight without incurring penalties or may use it instead of its own sight if blinded.</p><p>Shadow Walk (Su): A boogeyman can step into any shadow and teleport instantly to any other shadow within a 50-mile radius. It may use this ability twice per day to translocate through shadows between the Plane of Fear and Norrath.</p><p>Summon Minions (Su): While on the Plane of Fear, once per day a boogeyman can summon any other denizen of that plane with fewer Hit Dice than itself within a 50-mile radius. Summoned creatures may appear anywhere within 20 feet of the boogeyman, as the boogeyman chooses.</p><p>Undead: Immune to poison, sleep, paralysis, stunning, death magic, and disease. Not subject to critical hits, subdual damage, ability damage, energy drain, or death from massive damage. Immune to any effect that calls for a Fortitude save to resist unless the effect specifically targets objects. Not subject to attacks or spells of a mind-affecting nature.</p>"
    }
  },
  {
    "name": "Brontotherium",
    "type": "npc",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "abilities": {
        "str": {
          "value": 35,
          "mod": 12
        },
        "dex": {
          "value": 7,
          "mod": -2
        },
        "con": {
          "value": 30,
          "mod": 10
        },
        "int": {
          "value": 2,
          "mod": -4
        },
        "wis": {
          "value": 12,
          "mod": 1
        },
        "cha": {
          "value": 3,
          "mod": -4
        }
      },
      "details": {
        "cr": 21,
        "size": "",
        "type": "",
        "subtypes": "",
        "faction": "None : -y . . . ' |",
        "alignment": "Always neutral white background of Velious, conferring a +12 racial bonus to iS ‘J",
        "speed": 30
      },
      "resources": {
        "hp": {
          "value": 465,
          "max": 465,
          "temp": 0,
          "bonus": 0
        },
        "mana": {
          "value": 0,
          "max": 0
        }
      },
      "combat": {
        "ac": {
          "value": 36
        },
        "bab": 0,
        "saves": {
          "fortitude": {
            "value": 27
          },
          "reflex": {
            "value": 15
          },
          "will": {
            "value": 11
          }
        },
        "initiative": {
          "value": 2
        },
        "attackMisc": 0,
        "magicSaveBonus": 0
      },
      "statblock": {
        "hitDice": "30d10+300 (465 hp) attempt fails, the opponent cannot react to trip the brontotherium. ),",
        "speed": "30 ft. well as any applicable size modifiers (see \"Trip\" in the EverQuest: ‘>",
        "ac": "36 (-2 size, -2 Dex, +30 natural) Player's Handbook, page 378). la",
        "attacks": "Gore +32 melee Trample (Ex): Asa standard action during its turn each round, ~~",
        "damage": "Gore 3d12+18 the brontotherium can literally run over a Large or smaller ae 10 Ft. by 20 Ft,/10 Ft opponent. This attack requires no attack roll and deals 2d12+15 ' ; ° points of bludgeoning damage. Trampled opponents can either - Special",
        "faceReach": "",
        "specialAttacks": "",
        "specialQualities": "Damage reduction 10/- , cold resistance (50), fast a Reflex save (DC 35) for half damage. ~ healing 10, unstoppable movement Unstoppable Movement (Ex): The brontotherium brings such . <",
        "saves": "Fort +27, Ref +15, Will +11 force to bear that it is hard to keep the beast in one place; it easily Tc",
        "abilities": "Str 35, Dex 7, Con 30, Int 2, Wis 12, Cha 3 breaks snare and root effects by simply moving through the ex -",
        "skills": "Hide +0*, Listen +13, Spot +7 entangling plants or earth. The brontotherium gains a +10 bonus Ase >) Secanittiirels pare on all saving throws to resist effects that would hamper or halt its > sone pests ny se movement. » :",
        "feats": "",
        "climateTerrain": "",
        "organization": "Solitary or pair",
        "treasure": "None hide of the brontotherium makes it hard to see against the snowy- ~-% xs",
        "advancement": "31~50'HDi(?hige) Hide in such surroundings. STP \"4",
        "challengeRating": "21 racial bonus to Listen and a +4 racial bonus to Spot. *The white - = 5) a",
        "source": "Monsters of Norrath p. 30",
        "rawText": "Toss (Ex): A brontotherium that hits with its gore attack can\nattempt to trip the opponent as a free action without making a\n\ntouch attack or provoking an attack of opportunity. If the trip\n) Hit Dice: 30d10+300 (465 hp) attempt fails, the opponent cannot react to trip the brontotherium.\n), Initiative: _2 (Dex) Further, the brontotherium gains a +8 bonus on all Strength\n\n: . checks for the purpose of trip attacks due to its great stability, as\nas Speed: 30 ft. well as any applicable size modifiers (see \"Trip\" in the EverQuest:\n‘> AC: 36 (-2 size, -2 Dex, +30 natural) Player's Handbook, page 378).\nla Attacks: Gore +32 melee Trample (Ex): Asa standard action during its turn each round,\n~~ Damage: Gore 3d12+18 the brontotherium can literally run over a Large or smaller\n\nae 10 Ft. by 20 Ft,/10 Ft opponent. This attack requires no attack roll and deals 2d12+15\n\n' ; ° points of bludgeoning damage. Trampled opponents can either\n- Special Attacks: Skewer, toss, trample attempt attacks of opportunity at a -4 penalty to attack or make\nmad Special Qualities: Damage reduction 10/- , cold resistance (50), fast a Reflex save (DC 35) for half damage.\n~ healing 10, unstoppable movement Unstoppable Movement (Ex): The brontotherium brings such .\n< Saves: Fort +27, Ref +15, Will +11 force to bear that it is hard to keep the beast in one place; it easily Tc\nAbilities: Str 35, Dex 7, Con 30, Int 2, Wis 12, Cha 3 breaks snare and root effects by simply moving through the ex\n- Skills: Hide +0*, Listen +13, Spot +7 entangling plants or earth. The brontotherium gains a +10 bonus Ase\n>) Secanittiirels pare on all saving throws to resist effects that would hamper or halt its >\n\nsone pests ny se movement. »\n\n: Organization: Solitary or pair Skills: The brontotherium is always alert, conferring a +8 : '\n+ Challenge Rating: 21 racial bonus to Listen and a +4 racial bonus to Spot. *The white - = 5)\na Treasure: None hide of the brontotherium makes it hard to see against the snowy- ~-%\nxs Alignment: Always neutral white background of Velious, conferring a +12 racial bonus to iS\n‘J Advancement Range: 31~50'HDi(?hige) Hide in such surroundings. STP\n\"4 Faction: None : -y\n\n. . . '\n| Description =\noJ Long since vanished from other parts of Norrath, teu\n\n~~ brontotheriums live in the far off Western Wastes of icy Velious, 7. .\n+e protected behind the stronghold of the dragons of the Claws of pox\nVeeshan. : |\n\n' The brontotherium is a large quadruped animal reminis- ; '\ncS cent of a rhinoceros, with two curved horns rising from its ye\nra snout, almost like a fork. Heavy hide, thicker and tougher oi\n=] than any armor, covers and protects the brontotherium oe\n‘ from the harsh climate and from predators. It stands on es4\n\nfour powerful, short, stout legs that provide it with Var\ntd great stability and surprisingly quick movement. Sh\n> As herbivores, brontotheriums actually live off the --\n\nmeager vegetation that grows under the snow and ice :\n\n' or at the edges of the waters of the Western Wastes. , '\n+ What few trees and shrubs grow in these lands also re\nm4 provide occasional meals. f-\n\n~) The brontotherium's double horn, developed for t ~]\n\n‘ digging through many feet of ice, is also a fearsome .\n\nweapon when used to defend itself or its young. Male .\n3) brontotheriums will sometimes fight over territory, but 3)\n3 never to the death. Gs\n4 Velium hounds have been known to gather in packs ifs\n+> and try to bring downa weak or young brontotherium, la ;\n7 though even then they are rarely successful. y >\n™- Combat ae\n\nThe brontotherium is not normally aggressive;\n\nbrontotherium's critical threat range with its gore attack is\n\n7 however, if a brontotherium is riled or angered, it A)\n\n\"4 will defend itself viciously, using its sharp horns to 4\n\noS cause massive damage to its assailants. es\n\n- In combat, the brontotherium simply attacks its foes rN}\n\n~~ with its horns, running them over if the opportunity presents -\nitself. Ifa brontotherium's foe lies still, it will generally leave them :\n\n' be, as it has little desire for the flesh of other creatures. If the '\n* brontotherium finds itself badly wounded, it will try to escape ¥ = sy\n4 from an encounter. f=X\n=~ Skewer (Ex): The horns of the brontotherium, backed a\n\"<4 by its massive force, make a truly deadly weapon. The ae\n\n_\n\n17-20, and its critical damage multiplier is x3."
      },
      "biography": "<p>Toss (Ex): A brontotherium that hits with its gore attack can attempt to trip the opponent as a free action without making a touch attack or provoking an attack of opportunity. If the trip ) Hit Dice: 30d10+300 (465 hp) attempt fails, the opponent cannot react to trip the brontotherium. ), Initiative: _2 (Dex) Further, the brontotherium gains a +8 bonus on all Strength : . checks for the purpose of trip attacks due to its great stability, as as Speed: 30 ft. well as any applicable size modifiers (see &quot;Trip&quot; in the EverQuest: ‘&gt; AC: 36 (-2 size, -2 Dex, +30 natural) Player&#x27;s Handbook, page 378). la Attacks: Gore +32 melee Trample (Ex): Asa standard action during its turn each round, ~~ Damage: Gore 3d12+18 the brontotherium can literally run over a Large or smaller ae 10 Ft. by 20 Ft,/10 Ft opponent. This attack requires no attack roll and deals 2d12+15 &#x27; ; ° points of bludgeoning damage. Trampled opponents can either - Special Attacks: Skewer, toss, trample attempt attacks of opportunity at a -4 penalty to attack or make mad Special Qualities: Damage reduction 10/- , cold resistance (50), fast a Reflex save (DC 35) for half damage. ~ healing 10, unstoppable movement Unstoppable Movement (Ex): The brontotherium brings such . &lt; Saves: Fort +27, Ref +15, Will +11 force to bear that it is hard to keep the beast in one place; it easily Tc Abilities: Str 35, Dex 7, Con 30, Int 2, Wis 12, Cha 3 breaks snare and root effects by simply moving through the ex - Skills: Hide +0*, Listen +13, Spot +7 entangling plants or earth. The brontotherium gains a +10 bonus Ase &gt;) Secanittiirels pare on all saving throws to resist effects that would hamper or halt its &gt; sone pests ny se movement. » : Organization: Solitary or pair Skills: The brontotherium is always alert, conferring a +8 : &#x27; + Challenge Rating: 21 racial bonus to Listen and a +4 racial bonus to Spot. *The white - = 5) a Treasure: None hide of the brontotherium makes it hard to see against the snowy- ~-% xs Alignment: Always neutral white background of Velious, conferring a +12 racial bonus to iS ‘J Advancement Range: 31~50&#x27;HDi(?hige) Hide in such surroundings. STP &quot;4 Faction: None : -y . . . &#x27; | Description = oJ Long since vanished from other parts of Norrath, teu ~~ brontotheriums live in the far off Western Wastes of icy Velious, 7. . +e protected behind the stronghold of the dragons of the Claws of pox Veeshan. : | &#x27; The brontotherium is a large quadruped animal reminis- ; &#x27; cS cent of a rhinoceros, with two curved horns rising from its ye ra snout, almost like a fork. Heavy hide, thicker and tougher oi =] than any armor, covers and protects the brontotherium oe ‘ from the harsh climate and from predators. It stands on es4 four powerful, short, stout legs that provide it with Var td great stability and surprisingly quick movement. Sh &gt; As herbivores, brontotheriums actually live off the -- meager vegetation that grows under the snow and ice : &#x27; or at the edges of the waters of the Western Wastes. , &#x27; + What few trees and shrubs grow in these lands also re m4 provide occasional meals. f- ~) The brontotherium&#x27;s double horn, developed for t ~] ‘ digging through many feet of ice, is also a fearsome . weapon when used to defend itself or its young. Male . 3) brontotheriums will sometimes fight over territory, but 3) 3 never to the death. Gs 4 Velium hounds have been known to gather in packs ifs +&gt; and try to bring downa weak or young brontotherium, la ; 7 though even then they are rarely successful. y &gt; ™- Combat ae The brontotherium is not normally aggressive; brontotherium&#x27;s critical threat range with its gore attack is 7 however, if a brontotherium is riled or angered, it A) &quot;4 will defend itself viciously, using its sharp horns to 4 oS cause massive damage to its assailants. es - In combat, the brontotherium simply attacks its foes rN} ~~ with its horns, running them over if the opportunity presents - itself. Ifa brontotherium&#x27;s foe lies still, it will generally leave them : &#x27; be, as it has little desire for the flesh of other creatures. If the &#x27; * brontotherium finds itself badly wounded, it will try to escape ¥ = sy 4 from an encounter. f=X =~ Skewer (Ex): The horns of the brontotherium, backed a &quot;&lt;4 by its massive force, make a truly deadly weapon. The ae _ 17-20, and its critical damage multiplier is x3.</p>"
    }
  },
  {
    "name": "Brownie",
    "type": "npc",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "abilities": {
        "str": {
          "value": 8,
          "mod": -1
        },
        "dex": {
          "value": 14,
          "mod": 2
        },
        "con": {
          "value": 10,
          "mod": 0
        },
        "int": {
          "value": 12,
          "mod": 1
        },
        "wis": {
          "value": 14,
          "mod": 2
        },
        "cha": {
          "value": 10,
          "mod": 0
        }
      },
      "details": {
        "cr": 3,
        "size": "Tiny",
        "type": "Fey",
        "subtypes": "Brownie) Tiny Fey (Brownie",
        "faction": "Brownie Brownie",
        "alignment": "Usually discordant neutral Usually discordant neutral",
        "speed": 20
      },
      "resources": {
        "hp": {
          "value": 10,
          "max": 10,
          "temp": 0,
          "bonus": 0
        },
        "mana": {
          "value": 0,
          "max": 0
        }
      },
      "combat": {
        "ac": {
          "value": 14
        },
        "bab": 0,
        "saves": {
          "fortitude": {
            "value": 1
          },
          "reflex": {
            "value": 7
          },
          "will": {
            "value": 5
          }
        },
        "initiative": {
          "value": 2
        },
        "attackMisc": 0,
        "magicSaveBonus": 0
      },
      "statblock": {
        "hitDice": "3d6 (10 hp) 8d6+16 (44 hp)",
        "speed": "20 ft. 20 ft.",
        "ac": "14 (+2 size, +2 Dex) 15 (+2 size, +3 Dex)",
        "attacks": "Dagger +2 melee; or Tiny dart +S ranged Tiny kama +7 melee",
        "damage": "Dagger 1d3-1; Tiny dart 1d2-1 Tiny kama 1d3+1",
        "faceReach": "5 ft. by 5 Ft./5 ft. 5 ft. by 5 Ft/5 ft. Special",
        "specialAttacks": "",
        "specialQualities": "SR 10 SR 15",
        "saves": "Fort +1, Ref +7, Will +5 Fort +4, Ref +11, Will +11",
        "abilities": "Str 8, Dex 14, Con 10, Int 12, Wis 14,Chal0 Str 12, Dex 16, Con 14, Int 12, Wis 16, Cha 10",
        "skills": "Appraise +2, Balance +3, Channeling+6, Balance +5, Channeling +10, Gather InforGather Information +3, Hide +12, mation +4, Hide +12, Knowledge (nature) Knowledge (local lore) +4, Knowledge +5, Listen +5, Meditation +7, Profession (farmer) +7, Sneak +8, Spot +3, Trade Skill (baking) +11, Wilderness Lore +8 (nature) +4, Listen +5, Meditation +5, Sneak +8, Spot +5, Wilderness Lore +8",
        "feats": "Dodge, Lightning Reflexes Dodge, Iron Will, Lightning Reflexes",
        "climateTerrain": "Temperate forest, hill, marsh, mountains, Temperate forest, hill, marsh, mountains, or plains or plains",
        "organization": "Solitary, pair, mission (3-12) Solitary, pair, enclave (3-18)",
        "treasure": "Standard Standard",
        "advancement": "4-7 HD (Tiny) 7-15 (Tiny)",
        "challengeRating": "3 8",
        "source": "Monsters of Norrath p. 31",
        "rawText": "Brownie Scout Brownie Farmer\n\nTiny Fey (Brownie) Tiny Fey (Brownie)\n\nHit Dice: 3d6 (10 hp) 8d6+16 (44 hp)\n\nInitiative: +2 (Dex) +3 (Dex)\n\nSpeed: 20 ft. 20 ft.\n\nAC: 14 (+2 size, +2 Dex) 15 (+2 size, +3 Dex)\n\nAttacks: Dagger +2 melee; or Tiny dart +S ranged Tiny kama +7 melee\n\nDamage: Dagger 1d3-1; Tiny dart 1d2-1 Tiny kama 1d3+1\n\nFace/Reach: 5 ft. by 5 Ft./5 ft. 5 ft. by 5 Ft/5 ft.\n\nSpecial Attacks: Spell-Like Abilities Spell-Like Abilities\n\nSpecial Qualities: SR 10 SR 15\n\nSaves: Fort +1, Ref +7, Will +5 Fort +4, Ref +11, Will +11\n\nAbilities: Str 8, Dex 14, Con 10, Int 12, Wis 14,Chal0 Str 12, Dex 16, Con 14, Int 12, Wis 16, Cha 10\n\nSkills: Appraise +2, Balance +3, Channeling+6, Balance +5, Channeling +10, Gather InforGather Information +3, Hide +12, mation +4, Hide +12, Knowledge (nature)\n\nKnowledge (local lore) +4, Knowledge +5, Listen +5, Meditation +7, Profession\n(farmer) +7, Sneak +8, Spot +3, Trade Skill\n\n(baking) +11, Wilderness Lore +8\n\n(nature) +4, Listen +5, Meditation +5,\nSneak +8, Spot +5, Wilderness Lore +8\n\nFeats: Dodge, Lightning Reflexes Dodge, Iron Will, Lightning Reflexes\n\nClimate/Terrain: Temperate forest, hill, marsh, mountains, Temperate forest, hill, marsh, mountains,\nor plains or plains\n\nOrganization: Solitary, pair, mission (3-12) Solitary, pair, enclave (3-18)\n\nChallenge Rating: 3 8\n\nTreasure: Standard Standard\n\nAlignment: Usually discordant neutral Usually discordant neutral\n\nAdvancement Range: 4-7 HD (Tiny) 7-15 (Tiny)\n\nFaction: Brownie Brownie\n\nDescription\n\nBrownies live all over the island continent of Faydwer and are more\nrarely found traveling farand wide from there. Most often, however, they\nare found in the Faydark Forest, where their isolationist communities\nkeep to themselves in the darkest corners of the great woods. While not\nan evil or immoral race asa rule, brownies are so fiercely xenophobic and\nterritorial that they usually attack interlopers on sight.\n\nBrownies are short and lean, typically wearing clothing that\nmatches the underbrush or trees in color. They have tanned and\n\nruddy complexions and dark hair, and commonly wear face paint\nfor decoration.\n\nBrownie Scout\n\nBrownies are a paranoid sort, and they often imagine enemies\nwhere there are none. Young scouts are sent throughout Faydwer\nand beyond to gather information on other races and fey courts -\n\nsince clearly these races have little better to do than to conspire\nagainst the brownies. Scouts do not earn prestige unless they\n\nreturn with proof of such plots, so it is hardly surprising that most\nare able to locate what passes for evidence.\n\nOther brownie scouts set out to collect ingredients or simply to\nsatisfy their youthful wanderlust.\n\nCombat\n\nBrownie scouts leap into battle at the first sign of provocation, ready\nto prove themselves. They are more effective when using their ranged\nweapon froma short distance away and prefer this tactic toclose combat.\n\nSpell-Like Abilities: A typical brownie scout's spell-like abilities (and the mana cost for each) are as follows: camouflage (2),\ngrasping roots (6), panic animal (2), snare (3), and whirling wind (4).\nAs the spells cast by a 3rd-level druid (save DC 12 + spell level)\nwith a pool of 12 mana.\n\nBrownie Outcast\nTiny Fey (Brownie)\n16d6+16 (72 hp)\n\n+8 (+4 Dex, +4 Improved Initiative)\n\n20 ft.\n\n16 (+2 size, +4 Dex)\nDagger +10/+6 melee; or Tiny dart +14/\n\n+10 ranged\n\nDagger 1d3; Tiny dart Id2\n\n5 ft. by 5 Ft./5 ft.\nSpell-Like Abilities\nSR 25\n\nFort +8, Ref +16, Will +16\nStr 10, Dex 18, Con 12, Int 12, Wis 18, Cha 11\n\nAppraise +2, Balance +8, Channeling +14,\nGather Information +3, Hide +15, Knowledge (local lore) +3, Knowledge (nature)\n\n+5, Listen +11, Meditation +12, Sneak +12,\nSpot +11, Wilderness Lore +10\n\nDodge, Great Fortitude, Improved Initiative, Iron Will, Lightning Reflexes\n\nTemperate forest, hill, marsh, mountains,\n\nor plains\nSolitary or pair\n16\n\nStandard\n\nUsually discordant neutral\n\n17-24 (Tiny)\n\nBrownie"
      },
      "biography": "<h2>Description</h2><p>Brownies live all over the island continent of Faydwer and are more rarely found traveling farand wide from there. Most often, however, they are found in the Faydark Forest, where their isolationist communities keep to themselves in the darkest corners of the great woods. While not an evil or immoral race asa rule, brownies are so fiercely xenophobic and territorial that they usually attack interlopers on sight.</p><p>Brownies are short and lean, typically wearing clothing that matches the underbrush or trees in color. They have tanned and</p><p>ruddy complexions and dark hair, and commonly wear face paint for decoration.</p><p>Brownie Scout</p><p>Brownies are a paranoid sort, and they often imagine enemies where there are none. Young scouts are sent throughout Faydwer and beyond to gather information on other races and fey courts -</p><p>since clearly these races have little better to do than to conspire against the brownies. Scouts do not earn prestige unless they</p><p>return with proof of such plots, so it is hardly surprising that most are able to locate what passes for evidence.</p><p>Other brownie scouts set out to collect ingredients or simply to satisfy their youthful wanderlust.</p><h2>Combat</h2><p>Brownie scouts leap into battle at the first sign of provocation, ready to prove themselves. They are more effective when using their ranged weapon froma short distance away and prefer this tactic toclose combat.</p><p>Spell-Like Abilities: A typical brownie scout&#x27;s spell-like abilities (and the mana cost for each) are as follows: camouflage (2), grasping roots (6), panic animal (2), snare (3), and whirling wind (4). As the spells cast by a 3rd-level druid (save DC 12 + spell level) with a pool of 12 mana.</p><p>Brownie Outcast Tiny Fey (Brownie) 16d6+16 (72 hp)</p><p>+8 (+4 Dex, +4 Improved Initiative)</p><p>20 ft.</p><p>16 (+2 size, +4 Dex) Dagger +10/+6 melee; or Tiny dart +14/</p><p>+10 ranged</p><p>Dagger 1d3; Tiny dart Id2</p><p>5 ft. by 5 Ft./5 ft. Spell-Like Abilities SR 25</p><p>Fort +8, Ref +16, Will +16 Str 10, Dex 18, Con 12, Int 12, Wis 18, Cha 11</p><p>Appraise +2, Balance +8, Channeling +14, Gather Information +3, Hide +15, Knowledge (local lore) +3, Knowledge (nature)</p><p>+5, Listen +11, Meditation +12, Sneak +12, Spot +11, Wilderness Lore +10</p><p>Dodge, Great Fortitude, Improved Initiative, Iron Will, Lightning Reflexes</p><p>Temperate forest, hill, marsh, mountains,</p><p>or plains Solitary or pair 16</p><p>Standard</p><p>Usually discordant neutral</p><p>17-24 (Tiny)</p><p>Brownie</p>"
    }
  },
  {
    "name": "Brute",
    "type": "npc",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "abilities": {
        "str": {
          "value": 24,
          "mod": 7
        },
        "dex": {
          "value": 14,
          "mod": 2
        },
        "con": {
          "value": 26,
          "mod": 8
        },
        "int": {
          "value": 4,
          "mod": -3
        },
        "wis": {
          "value": 14,
          "mod": 2
        },
        "cha": {
          "value": 8,
          "mod": -1
        }
      },
      "details": {
        "cr": 7,
        "size": "Large",
        "type": "Monstrous Humanoid",
        "subtypes": "Brute",
        "faction": "None 4 oe",
        "alignment": "Always neutral",
        "speed": 30
      },
      "resources": {
        "hp": {
          "value": 133,
          "max": 133,
          "temp": 0,
          "bonus": 0
        },
        "mana": {
          "value": 0,
          "max": 0
        }
      },
      "combat": {
        "ac": {
          "value": 22
        },
        "bab": 0,
        "saves": {
          "fortitude": {
            "value": 13
          },
          "reflex": {
            "value": 7
          },
          "will": {
            "value": 7
          }
        },
        "initiative": {
          "value": 2
        },
        "attackMisc": 0,
        "magicSaveBonus": 0
      },
      "statblock": {
        "hitDice": "10d8+80 (133 hp)",
        "speed": "30 ft., climb 20 ft.",
        "ac": "22 (-1 size, +2 Dex, +11 natural)",
        "attacks": "2 fists +16 melee; or 2 Fists +14 melee, slam +14 melee",
        "damage": "Fist 1d8+7; slam 1d6+7",
        "faceReach": "5 ft. by 5 Ft./10 ft. Special",
        "specialAttacks": "",
        "specialQualities": "Scent",
        "saves": "Fort +13, Ref +7, Will +7",
        "abilities": "Str 24, Dex 14, Con 26, Int 4, Wis 14, Cha 8",
        "skills": "Climb +17, Jump +17, Listen +10, Spot +8, Wilderness Lore +8",
        "feats": "Alertness, Great Fortitude, Slam",
        "climateTerrain": "Temperate forest, hills, mountains and underground",
        "organization": "Solitary, pair, band (3-6), pack (5-12)",
        "treasure": "Half standard",
        "advancement": "11-20 HD (Large)",
        "challengeRating": "7",
        "source": "Monsters of Norrath p. 32",
        "rawText": "Large Monstrous Humanoid (Brute)\n\nHit Dice: 10d8+80 (133 hp)\n\nInitiative: +2 (Dex)\n\nSpeed: 30 ft., climb 20 ft.\n\nAC: 22 (-1 size, +2 Dex, +11 natural)\n\nAttacks: 2 fists +16 melee; or 2 Fists +14 melee, slam +14\nmelee\n\nDamage: Fist 1d8+7; slam 1d6+7\n\nFace/Reach: 5 ft. by 5 Ft./10 ft.\n\nSpecial Attacks: Berserk\n\nSpecial Qualities: Scent\n\nSaves: Fort +13, Ref +7, Will +7\n\nAbilities: Str 24, Dex 14, Con 26, Int 4, Wis 14, Cha 8\n\nSkills: Climb +17, Jump +17, Listen +10, Spot +8, Wilderness Lore +8\n\nFeats: Alertness, Great Fortitude, Slam\n\nClimate/Terrain: Temperate forest, hills, mountains and underground\n\nOrganization: Solitary, pair, band (3-6), pack (5-12)\n\nChallenge Rating: 7\n\nTreasure: Half standard\n\nAlignment: Always neutral\n\nAdvancement Range: 11-20 HD (Large)\nFaction: None\n\n4 oe\n\nDescription\n\nBrutes are native to the continent of Kunark, living in its\nwestern part for as long as any of the empires that have been there.\n\nBrutes are massive, shaggy humanoid beasts, dense masses of\n\npredatory muscle covered with thick hide and fur. Mature brutes\nare generally about 9 feet tall, but can reach heights of nearly 14\nfeet. They have large barrel chests with short legs and long arms\nthat reach almost to the ground. Their feet are as dexterous as\ntheir hands, and they often eat with their feet while their hands\nperform other duties such as cleaning. Their feet also assist them\nin their superior climbing ability.\n\nBrutes have a primitive society, similar to apes in many ways.\nMales dominate the species and females are rarely seen, left to take\ncare of the young (the runtlings and brutlings) and their homes.\nWhile they roam throughout forests, hills, and mountainous\nareas, they mostly make their homes underground and in caves.\nThey have no real language, but do communicate via simple\ngrunts and growls, which is enough for them.\n\nBrutes are basically clean beasts, although one does occasionally catch a unique disease similar to rabies, at which point that\nindividual is ostracized and eventually driven out from its tribe.\nDiseased brutes are solitary and tend to become quite mad over\ntime as the disease passes into their nervous system. These brutes\nare quite vicious and are generally as fierce as a healthy brute\ndefending its home or young.\n\nCombat\n\nBrutes go after prey or interlopers with great ferocity, leaving\nthe battle only if it goes against them. Mostly, brutes will bash\ntheir prey to death with their powerful fists. On occasion, a\nparticularly wily brute will use a club or greatclub of some sort. In\nany case, they are aggressive, territorial predators who like meat\nof all kinds. They have few enemies within their own territories,\nand other creatures are smart enough to leave them well enough\nalone. Likewise, brutes seem to know which creatures pose a\nthreat to them and leave those creatures well enough alone.\n\n- . - Ty - a\nVe oo ic est\na ee\n\n3\n\nea\nWwe\n\n="
      },
      "biography": "<h2>Description</h2><p>Brutes are native to the continent of Kunark, living in its western part for as long as any of the empires that have been there.</p><p>Brutes are massive, shaggy humanoid beasts, dense masses of</p><p>predatory muscle covered with thick hide and fur. Mature brutes are generally about 9 feet tall, but can reach heights of nearly 14 feet. They have large barrel chests with short legs and long arms that reach almost to the ground. Their feet are as dexterous as their hands, and they often eat with their feet while their hands perform other duties such as cleaning. Their feet also assist them in their superior climbing ability.</p><p>Brutes have a primitive society, similar to apes in many ways. Males dominate the species and females are rarely seen, left to take care of the young (the runtlings and brutlings) and their homes. While they roam throughout forests, hills, and mountainous areas, they mostly make their homes underground and in caves. They have no real language, but do communicate via simple grunts and growls, which is enough for them.</p><p>Brutes are basically clean beasts, although one does occasionally catch a unique disease similar to rabies, at which point that individual is ostracized and eventually driven out from its tribe. Diseased brutes are solitary and tend to become quite mad over time as the disease passes into their nervous system. These brutes are quite vicious and are generally as fierce as a healthy brute defending its home or young.</p><h2>Combat</h2><p>Brutes go after prey or interlopers with great ferocity, leaving the battle only if it goes against them. Mostly, brutes will bash their prey to death with their powerful fists. On occasion, a particularly wily brute will use a club or greatclub of some sort. In any case, they are aggressive, territorial predators who like meat of all kinds. They have few enemies within their own territories, and other creatures are smart enough to leave them well enough alone. Likewise, brutes seem to know which creatures pose a threat to them and leave those creatures well enough alone.</p><p>- . - Ty - a Ve oo ic est a ee</p><p>3</p><p>ea Wwe</p><p>=</p>"
    }
  },
  {
    "name": "Bulthar",
    "type": "npc",
    "img": "icons/svg/mystery-man.svg",
    "system": {
      "abilities": {
        "str": {
          "value": 10,
          "mod": 0
        },
        "dex": {
          "value": 10,
          "mod": 0
        },
        "con": {
          "value": 10,
          "mod": 0
        },
        "int": {
          "value": 10,
          "mod": 0
        },
        "wis": {
          "value": 10,
          "mod": 0
        },
        "cha": {
          "value": 10,
          "mod": 0
        }
      },
      "details": {
        "cr": 0,
        "size": "",
        "type": "",
        "subtypes": "",
        "faction": "",
        "alignment": "",
        "speed": 0
      },
      "resources": {
        "hp": {
          "value": 0,
          "max": 0,
          "temp": 0,
          "bonus": 0
        },
        "mana": {
          "value": 0,
          "max": 0
        }
      },
      "combat": {
        "ac": {
          "value": 10
        },
        "bab": 0,
        "saves": {
          "fortitude": {
            "value": 0
          },
          "reflex": {
            "value": 0
          },
          "will": {
            "value": 0
          }
        },
        "initiative": {
          "value": 0
        },
        "attackMisc": 0,
        "magicSaveBonus": 0
      },
      "statblock": {
        "hitDice": "",
        "speed": "",
        "ac": "",
        "attacks": "",
        "damage": "",
        "faceReach": "",
        "specialAttacks": "",
        "specialQualities": "",
        "saves": "",
        "abilities": "",
        "skills": "",
        "feats": "",
        "climateTerrain": "",
        "organization": "",
        "treasure": "",
        "advancement": "",
        "challengeRating": "",
        "source": "Monsters of Norrath p. 33",
        "rawText": "Bulthar\n\non\no |\n\nDescription\n\nBulthar are an aggressive race of massive humanoids who carve\nout tribal territories on the coasts of Norrath's arctic waters. These\nlarge, squat creatures resemble a cross between a human and an\nelephant seal. A thick layer of fat and fur allows the bulthar to\nsurvive in Norrath's coldest waters. They have a broad torso, long\npowerful arms with webbed claws, and short stubby feet that still\nmove them quite quickly despite their massive bulk. Their neck\nis so thick and short that their head seems to jut straight out from\nthe top of their torso. They have a stunted elephantine trunk in\nbetween two beady black eyes and right above the mouth.\n\nThe bulthar have a primitive society and, though intelligent,\nstill have many animalistic behaviors such as gathering in herds\nin which the strongest male leads and takes a harem of mates.\nBulthar do little other than eat, sleep, or make war upon those\naround them. What society they possess has just not advanced\nenough for anything else. Rival bulthar herds will go to war, and\nthe survivors among the losing herd are brought into the winning\nherd. The Bulthar also attack othmir, aqua goblins, or any\nhumanoid settlements on the coast or in costal waters. They also\nattack merchant ships and fishing vessels to consume crew and\nany edible cargo.\n\nBulthar live on the fish of the sea and occasionally other sorts\nof food. Though they cannot breathe underwater, they can hold\ntheir breaths for extended durations and make dives as deep as a\nmile into the ocean in search of food.\n\nA few bulthar can speak a pidgin of Common, otherwise they\ncommunicate primitively among themselves with grunts and odd\nsounding howls that often echo off the cliffs of the Cobalt Scar in\nVelious and other places that bulthar herds are found.\n\nCombat\n\nA bulthar is always looking for a fight, if not from its own kind\nthen from others in its territory. Bulthar aggressively defend what\nthey consider their territory. Herd leaders are especially territorial\nand view any trespass as an attempt to challenge their position. In\ncombat, bulthar charge opponents and then smash them with\ntheir powerful fists until their enemies are dead. If seriously hurt,\nbulthar will attempt to flee the flight, usually into any water (if\nfighting on land) or onto the beach (if fighting in the water).\n\nCharge (Ex): Due to its great mass, a bulthar deals double\ndamage on a successful charge action.\n\nResistances (Ex): Bulthars have bonuses of acid, disease,\n\nelectricity, fire, magic, poison and, sonic resistance (20), and cold\nresistance (50).\n\nGreat Mass (Ex): A bulthar is enormously heavy and asa result\nis difficult to restrain or push about. It gains a +5 bonus on all\nsaving throws to resist effects that would hamper or halt its\n\nae \\ i"
      },
      "biography": "<h2>Description</h2><p>Bulthar are an aggressive race of massive humanoids who carve out tribal territories on the coasts of Norrath&#x27;s arctic waters. These large, squat creatures resemble a cross between a human and an elephant seal. A thick layer of fat and fur allows the bulthar to survive in Norrath&#x27;s coldest waters. They have a broad torso, long powerful arms with webbed claws, and short stubby feet that still move them quite quickly despite their massive bulk. Their neck is so thick and short that their head seems to jut straight out from the top of their torso. They have a stunted elephantine trunk in between two beady black eyes and right above the mouth.</p><p>The bulthar have a primitive society and, though intelligent, still have many animalistic behaviors such as gathering in herds in which the strongest male leads and takes a harem of mates. Bulthar do little other than eat, sleep, or make war upon those around them. What society they possess has just not advanced enough for anything else. Rival bulthar herds will go to war, and the survivors among the losing herd are brought into the winning herd. The Bulthar also attack othmir, aqua goblins, or any humanoid settlements on the coast or in costal waters. They also attack merchant ships and fishing vessels to consume crew and any edible cargo.</p><p>Bulthar live on the fish of the sea and occasionally other sorts of food. Though they cannot breathe underwater, they can hold their breaths for extended durations and make dives as deep as a mile into the ocean in search of food.</p><p>A few bulthar can speak a pidgin of Common, otherwise they communicate primitively among themselves with grunts and odd sounding howls that often echo off the cliffs of the Cobalt Scar in Velious and other places that bulthar herds are found.</p><h2>Combat</h2><p>A bulthar is always looking for a fight, if not from its own kind then from others in its territory. Bulthar aggressively defend what they consider their territory. Herd leaders are especially territorial and view any trespass as an attempt to challenge their position. In combat, bulthar charge opponents and then smash them with their powerful fists until their enemies are dead. If seriously hurt, bulthar will attempt to flee the flight, usually into any water (if fighting on land) or onto the beach (if fighting in the water).</p><p>Charge (Ex): Due to its great mass, a bulthar deals double damage on a successful charge action.</p><p>Resistances (Ex): Bulthars have bonuses of acid, disease,</p><p>electricity, fire, magic, poison and, sonic resistance (20), and cold resistance (50).</p><p>Great Mass (Ex): A bulthar is enormously heavy and asa result is difficult to restrain or push about. It gains a +5 bonus on all saving throws to resist effects that would hamper or halt its</p><p>ae \\ i</p>"
    }
  }
];
