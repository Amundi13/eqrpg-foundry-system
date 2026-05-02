/**
 * Store presets for the EQ RPG shop app.
 *
 * A preset can include entire item types with `types`, or exact item names with
 * `items`. Exact item entries may be either "Item Name" or "type::Item Name".
 */
export const STORE_PRESETS = [
  {
    key: "full",
    label: "EQRPG.StoreFullCatalog",
    types: ["weapon", "armor", "equipment", "consumable"],
  },
  {
    key: "general",
    label: "EQRPG.StoreGeneralGoods",
    types: ["equipment", "consumable"],
  },
  {
    key: "weaponsmith",
    label: "EQRPG.StoreWeaponsmith",
    types: ["weapon"],
  },
  {
    key: "armorer",
    label: "EQRPG.StoreArmorer",
    types: ["armor"],
  },
  {
    key: "alchemist",
    label: "EQRPG.StoreAlchemist",
    types: ["consumable"],
  },
  {
    key: "adventuring",
    label: "EQRPG.StoreAdventuringSupplies",
    items: [
      "equipment::Backpack",
      "equipment::Bedroll",
      "equipment::Waterskin",
      "equipment::Trail Rations",
      "equipment::Torch",
      "equipment::Rope, Hemp (50 ft.)",
      "equipment::Flint and Steel",
      "equipment::Arrows",
      "equipment::Sling Bullets",
    ],
  },
];
