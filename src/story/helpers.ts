export const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

/** Maps global scene progress p (0..1) to a sub-segment [a, b] as 0..1. */
export const seg = (p: number, a: number, b: number) => clamp01((p - a) / (b - a));

export const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export const easeInOut = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
