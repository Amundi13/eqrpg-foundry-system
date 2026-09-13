# Local verification and packaging

Use Node 22.20.0 and PowerShell 7. Install the locked development dependencies with `npm ci --no-audit --no-fund`, then run `node scripts/validate-all.mjs`.

Build an isolated pack set with `node scripts/build-packs.mjs --output dist/my-build`. The destination must be a new directory under `dist`. The builder preserves mapped legacy document and journal-page IDs, retains unresolved legacy entries, and checks every compiled document by extracting a copy. It never opens installed pack databases for writing.

Run `node scripts/verify-pack-build.mjs dist/my-build/packs` to check the source/identity digest and all nonvolatile database hashes. Source or database changes invalidate the build report.

Run `pwsh -File scripts/build-release.ps1 -OutputDir dist/my-release` to compile and verify fresh packs and build a local archive. Alternatively supply `-PackDirectory` with a verified isolated build's packs directory. Packaging uses sorted paths, fixed ZIP timestamps and stored entries, preserves numeric LevelDB write-ahead logs, and checks for changing runtime inputs. It does not publish anything.

Run `pwsh -File scripts/test-reproducible-build.ps1` to build two independent pack sets and release archives and compare their hashes. All output stays under a new directory in `dist`.

These checks do not replace live V14.365, multi-client, Forge installation or world-upgrade tests. The catalog evidence report intentionally distinguishes reviewed fields from unreviewed imports; successful packaging does not establish rules accuracy.

For an optional check against a licensed local Foundry installation, run `node scripts/test-foundry-schemas.mjs "C:/Foundry Virtual Tabletop/resources/app"`, substituting the actual application directory. It imports the real schema classes and validates model defaults and catalog records without starting a server or opening a world. Its output identifies the version tested; the local 13.351 installation does not establish V14 compatibility.
