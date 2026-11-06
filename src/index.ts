export interface Point {
  readonly x: number;
  readonly y: number;
}
export function containsPoint(ring: readonly Point[], point: Point): boolean {
  if (
    !Array.isArray(ring) ||
    ring.length < 3 ||
    !point ||
    !Number.isFinite(point.x) ||
    !Number.isFinite(point.y) ||
    ring.some((p) => !p || !Number.isFinite(p.x) || !Number.isFinite(p.y))
  )
    throw new TypeError('Expected a finite polygon and point');
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const a = ring[j]!,
      b = ring[i]!,
      cross = (point.x - a.x) * (b.y - a.y) - (point.y - a.y) * (b.x - a.x);
    if (
      Math.abs(cross) < 1e-12 &&
      point.x >= Math.min(a.x, b.x) - 1e-12 &&
      point.x <= Math.max(a.x, b.x) + 1e-12 &&
      point.y >= Math.min(a.y, b.y) - 1e-12 &&
      point.y <= Math.max(a.y, b.y) + 1e-12
    )
      return true;
    if (
      a.y > point.y !== b.y > point.y &&
      point.x < ((b.x - a.x) * (point.y - a.y)) / (b.y - a.y) + a.x
    )
      inside = !inside;
  }
  return inside;
}
