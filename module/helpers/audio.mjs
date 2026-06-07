export function getValidAttackSound(src = "") {
  const path = String(src ?? "").trim();
  if (!path) return "";
  return foundry.audio.AudioHelper.hasAudioExtension(path) ? path : "";
}

export async function previewAttackSound(src = "") {
  const path = String(src ?? "").trim();
  if (!path) return null;

  if (!getValidAttackSound(path)) {
    ui.notifications.warn(game.i18n.format("EQRPG.InvalidAttackSound", { path }));
    return null;
  }

  return game.audio.play(path, { context: game.audio.interface });
}
