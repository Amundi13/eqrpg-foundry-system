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

## Install

- Manifest URL: `https://github.com/Amundi13/eqrpg-foundry-system/releases/latest/download/system.json`
- Release download: `https://github.com/Amundi13/eqrpg-foundry-system/releases/latest/download/eqrpg-foundry-system-v0.1.6.zip`

## Release

1. Update `system.json` with the next version.
2. Commit and push the changes to `main`.
3. Create and push a matching tag, for example `v0.1.4`.

```powershell
git tag v0.1.4
git push origin main
git push origin v0.1.4
```

GitHub Actions will publish `system.json` and `eqrpg-foundry-system-v0.1.4.zip` to the release. Use the manifest URL above in Forge so Forge/Foundry can detect newer published versions.

## License

Add your preferred license here before publishing publicly.
