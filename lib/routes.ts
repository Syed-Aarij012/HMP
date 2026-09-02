export function parseNumericRouteId(id: string): number | null {
  if (!/^\d+$/.test(id)) {
    return null;
  }

  return Number(id);
}
