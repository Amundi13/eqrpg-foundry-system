/** Elect one connected GM for automatic system maintenance. */
export function isPrimaryGM() {
  if (!game.user?.isGM) return false;
  const connected = [...(game.users ?? [])].filter(user => user.isGM && user.active).sort((a,b)=>a.id.localeCompare(b.id));
  return connected[0]?.id === game.user.id;
}
