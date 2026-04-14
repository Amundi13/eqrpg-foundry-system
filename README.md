# EverQuest Role-Playing Game for Foundry VTT

Custom Foundry VTT system support for the EverQuest Role-Playing Game (d20).

## Status

Early development release targeting Foundry VTT v13.

## Features

- Custom actor support for characters and NPCs
- Custom item support for weapons, armor, spells, skills, consumables, equipment, factions, and feats
- System-specific sheets, styling, and templates
- Bundled compendium packs for spells, skills, weapons, armor, consumables, feats, and handbook content

## Project Structure

- `system.json` - Foundry system manifest
- `module/` - system logic, data models, documents, sheets, helpers, and pack builders
- `templates/` - Handlebars templates for actor, item, and app UIs
- `styles/` - system CSS
- `lang/` - localization files
- `packs/` - bundled compendium data
- `icons/` - system icons and artwork

## Local Development

This repository is intended to live inside the Foundry data path during development:

`FoundryVTT/Data/systems/eqrpg`

After making changes, reload Foundry and use the browser console for runtime debugging as needed.

## Compatibility

- Minimum Foundry version: `13`
- Verified Foundry version: `13`

## License

Add your preferred license here before publishing publicly.
