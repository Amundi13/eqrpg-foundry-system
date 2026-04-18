/**
 * Legacy compatibility shim for older feat imports.
 *
 * Feats now live in module/packs/source/feats.json and are emitted into
 * module/packs/sample-data.mjs by scripts/generate-sample-data.mjs.
 */
export { SAMPLE_FEATS } from "./sample-data.mjs";
