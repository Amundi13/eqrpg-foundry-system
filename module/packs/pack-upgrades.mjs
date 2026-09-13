/** Non-destructive compendium upgrades. Planning is read-only. */
const clone = value => value === undefined ? undefined : structuredClone(value);
const unsafeKeys = new Set(["__proto__", "prototype", "constructor"]);
const embeddedRoots = new Set(["pages", "items", "effects"]);

function canonical(value) {
  if (Array.isArray(value)) return value.map(canonical);
  if (value && typeof value === "object") return Object.fromEntries(Object.keys(value).sort().filter(key => !unsafeKeys.has(key)).map(key => [key, canonical(value[key])]));
  return value;
}
const equal = (a, b) => JSON.stringify(canonical(a)) === JSON.stringify(canonical(b));

export function sourceIdFor(packId, source) {
  const explicit = source.flags?.eqrpg?.sourceId;
  if (explicit) {
    if (!/^[a-zA-Z0-9]{16}$/.test(explicit)) throw new Error(`Invalid source ID for ${source.name}.`);
    return explicit;
  }
  const key = JSON.stringify([packId, source.type ?? "JournalEntry", source.name?.normalize("NFKC"), [...(source.system?.classLevels ?? [])].sort()]);
  // Two deterministic 32-bit hashes form a Foundry-compatible 16-character ID.
  // Collisions and duplicate identities are rejected by the planner.
  const hash = seed => { let result = seed; for (const char of key) result = Math.imul(result ^ char.charCodeAt(0), 16777619); return (result >>> 0).toString(16).padStart(8, "0"); };
  return hash(2166136261) + hash(3335557771);
}

function payload(document) {
  const data = clone(typeof document.toObject === "function" ? document.toObject() : document);
  for (const key of ["_id", "_stats", "folder", "sort", "ownership"]) delete data[key];
  if (data.flags?.eqrpg) {
    delete data.flags.eqrpg.packSource;
    if (!Object.keys(data.flags.eqrpg).length) delete data.flags.eqrpg;
  }
  if (data.flags && !Object.keys(data.flags).length) delete data.flags;
  return data;
}

function leaves(value, prefix = "", result = {}) {
  if (value && typeof value === "object" && !Array.isArray(value) && Object.keys(value).length) {
    for (const [key, child] of Object.entries(value)) {
      if (unsafeKeys.has(key) || key.includes(".") || key.startsWith("-=")) throw new Error(`Unsupported source field: ${key}`);
      leaves(child, prefix ? `${prefix}.${key}` : key, result);
    }
  } else if (prefix) result[prefix] = value;
  return result;
}

function legacyMatch(source, document) {
  return source.name === document.name && (source.type ?? "JournalEntry") === (document.type ?? "JournalEntry")
    && equal([...(source.system?.classLevels ?? [])].sort(), [...(document.system?.classLevels ?? [])].sort());
}

export function planPackUpgrade(packId, sources, documents) {
  const existing = documents.map(document => ({ id:document.id ?? document._id, data:payload(document), managed:clone(document.flags?.eqrpg?.packSource) }));
  const plan = { version:1, packId, creates:[], updates:[], conflicts:[], retained:[], unchanged:0, expected:existing };
  const identities = new Set();
  const claimed = new Set();
  for (const source of sources) {
    const sourceId = sourceIdFor(packId, source);
    if (identities.has(sourceId)) throw new Error(`Duplicate source identity in ${packId}: ${source.name}. Assign distinct explicit source IDs.`);
    identities.add(sourceId);
    const desired = payload(source);
    const tracked = existing.filter(entry => entry.managed?.sourceId === sourceId);
    const candidates = tracked.length ? tracked : existing.filter(entry => !entry.managed && legacyMatch(desired, entry.data));
    if (candidates.length > 1) { plan.conflicts.push({sourceId,name:source.name,reason:"ambiguous-match",ids:candidates.map(entry=>entry.id)}); continue; }
    const match = candidates[0];
    const metadata = {version:1,sourceId,baseline:desired};
    if (!match) {
      if (existing.some(entry=>entry.id===sourceId)) { plan.conflicts.push({sourceId,name:source.name,reason:"id-collision"}); continue; }
      const data = clone(desired);
      data._id = sourceId;
      data.flags ??= {}; data.flags.eqrpg ??= {}; data.flags.eqrpg.packSource = metadata;
      plan.creates.push(data); continue;
    }
    if (claimed.has(match.id)) { plan.conflicts.push({sourceId,name:source.name,id:match.id,reason:"multiple-sources-match"}); continue; }
    claimed.add(match.id);
    if (match.managed && match.managed.version !== 1) { plan.conflicts.push({sourceId,name:source.name,id:match.id,reason:"unknown-metadata-version"}); continue; }
    const current = leaves(match.data), incoming = leaves(desired), baseline = match.managed ? leaves(match.managed.baseline) : {};
    const patch = {_id:match.id}; const changes = []; const conflicts = [];
    const paths = [...new Set([...Object.keys(baseline), ...Object.keys(incoming)])];
    for (const path of paths) {
      if (equal(incoming[path], baseline[path]) && match.managed) continue;
      if (equal(current[path], incoming[path])) continue;
      if (!match.managed && path === "flags.eqrpg.sourceId" && current[path] === undefined) { patch[path]=incoming[path]; continue; }
      if (paths.some(other=>other!==path && (other.startsWith(`${path}.`) || path.startsWith(`${other}.`)))) {
        conflicts.push({field:path,reason:"field-structure-changed",current:clone(current[path]),incoming:clone(incoming[path])}); continue;
      }
      if (!match.managed || !equal(current[path], baseline[path]) || embeddedRoots.has(path.split(".")[0]) || path === "type") {
        conflicts.push({field:path,current:clone(current[path]),baseline:clone(baseline[path]),incoming:clone(incoming[path])}); continue;
      }
      if (incoming[path] === undefined) {
        const segments=path.split("."); const key=segments.pop();
        patch[[...segments,`-=${key}`].join(".")]=null;
      } else patch[path]=clone(incoming[path]);
      changes.push({field:path,before:clone(current[path]),after:clone(incoming[path])});
    }
    if (conflicts.length) { plan.conflicts.push({sourceId,name:source.name,id:match.id,reason:match.managed?"local-edits-or-embedded-content":"legacy-needs-review",fields:conflicts,candidate:{patch,changes,metadata}}); continue; }
    if (!match.managed || !equal(match.managed.baseline,desired)) {
      patch["flags.eqrpg.packSource"] = metadata;
      plan.updates.push({id:match.id,name:source.name,patch,changes,adoption:!match.managed});
    } else plan.unchanged++;
  }
  plan.retained = existing.filter(entry=>!claimed.has(entry.id)).map(entry=>({id:entry.id,name:entry.data.name}));
  return plan;
}

/** Resolve every conflicting field explicitly; this still performs no writes. */
export function resolvePackConflict(reviewedPlan, documentId, choices) {
  const plan = clone(reviewedPlan);
  const conflict = plan.conflicts.find(entry=>entry.id===documentId);
  if (!conflict?.candidate) throw new Error("This conflict cannot be resolved by field selection; resolve the ambiguous identity first.");
  const fields = new Set(conflict.fields.map(field=>field.field));
  if (Object.keys(choices).some(field=>!fields.has(field))) throw new Error("Selection contains a field outside the reviewed conflict.");
  const {patch,changes,metadata} = conflict.candidate;
  for (const field of conflict.fields) {
    const choice=choices[field.field];
    if (!["source","local"].includes(choice)) throw new Error(`Choose source or local for ${field.field}.`);
    if (field.reason === "field-structure-changed" || field.field === "type") throw new Error(`A dedicated migration is required for ${field.field}.`);
    if (choice === "local") continue;
    if (field.reason === "field-structure-changed" || embeddedRoots.has(field.field.split(".")[0]) || field.field === "type") throw new Error(`Preserve ${field.field} or perform a dedicated migration; generic replacement is not supported.`);
    if (field.incoming === undefined) {
      const segments=field.field.split(".");const key=segments.pop();patch[[...segments,`-=${key}`].join(".")]=null;
    } else patch[field.field]=clone(field.incoming);
    changes.push({field:field.field,before:clone(field.current),after:clone(field.incoming)});
  }
  patch["flags.eqrpg.packSource"] = metadata;
  plan.updates.push({id:documentId,name:conflict.name,patch,changes,reviewedChoices:clone(choices)});
  plan.conflicts=plan.conflicts.filter(entry=>entry!==conflict);
  return plan;
}

const pendingPacks = new Set();
export async function applyPackUpgrade(pack, reviewedPlan) {
  if (reviewedPlan.version !== 1 || pack.collection !== reviewedPlan.packId) throw new Error("Pack upgrade plan does not match this pack.");
  if (pendingPacks.has(pack.collection)) throw new Error("An upgrade is already running for this pack.");
  pendingPacks.add(pack.collection);
  const result = {created:0,updated:0,conflicts:reviewedPlan.conflicts.length,retained:reviewedPlan.retained.length};
  const wasLocked = pack.locked;
  let unlocked = false;
  let operationError;
  try {
    const actual = (await pack.getDocuments()).map(document=>({id:document.id ?? document._id,data:payload(document),managed:clone(document.flags?.eqrpg?.packSource)}));
    const sorted = entries => [...entries].sort((a,b)=>a.id.localeCompare(b.id));
    if (!equal(sorted(actual),sorted(reviewedPlan.expected))) throw new Error("Pack changed after preview. Generate and review a fresh plan.");
    if (!reviewedPlan.updates.length && !reviewedPlan.creates.length) return result;
    if (wasLocked) { unlocked=true; await pack.configure({locked:false}); }
    if (pack.locked) throw new Error("Pack is locked; no changes were applied.");
    for (const entry of reviewedPlan.updates) {
      const updated = await pack.documentClass.updateDocuments([clone(entry.patch)],{pack:pack.collection});
      if (updated?.length !== 1 || (updated[0].id ?? updated[0]._id) !== entry.id) throw new Error(`Update was not confirmed for ${entry.name}. Generate a fresh preview.`);
      result.updated++;
    }
    for (const data of reviewedPlan.creates) {
      const created = await pack.documentClass.createDocuments([clone(data)],{pack:pack.collection,keepId:true});
      if (created?.length !== 1 || (created[0].id ?? created[0]._id) !== data._id) throw new Error(`Creation was not confirmed for ${data.name}. Generate a fresh preview.`);
      result.created++;
    }
    return result;
  } catch (error) {
    operationError=error;
    error.upgradeProgress=result;
    throw error;
  } finally {
    try { if (unlocked) await pack.configure({locked:true}); }
    catch (error) {
      error.upgradeProgress=result;
      if (operationError) error.cause=operationError;
      throw error;
    }
    finally { pendingPacks.delete(pack.collection); }
  }
}
