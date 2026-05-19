/**
 * 6-dot Braille map for ASCII lowercase letters.
 *
 * Cell layout:
 *   1 . 4
 *   2 . 5
 *   3 . 6
 *
 * Source: Unified English Braille (UEB) Grade 1 letters a–z.
 * Used by `<BrailleDecoder />` to render Sensu's wordmark in dots.
 */
export const BRAILLE_LETTER: Record<string, ReadonlyArray<number>> = {
  a: [1],
  b: [1, 2],
  c: [1, 4],
  d: [1, 4, 5],
  e: [1, 5],
  f: [1, 2, 4],
  g: [1, 2, 4, 5],
  h: [1, 2, 5],
  i: [2, 4],
  j: [2, 4, 5],
  k: [1, 3],
  l: [1, 2, 3],
  m: [1, 3, 4],
  n: [1, 3, 4, 5],
  o: [1, 3, 5],
  p: [1, 2, 3, 4],
  q: [1, 2, 3, 4, 5],
  r: [1, 2, 3, 5],
  s: [2, 3, 4],
  t: [2, 3, 4, 5],
  u: [1, 3, 6],
  v: [1, 2, 3, 6],
  w: [2, 4, 5, 6],
  x: [1, 3, 4, 6],
  y: [1, 3, 4, 5, 6],
  z: [1, 3, 5, 6],
};

/**
 * Dot positions inside a single Braille cell.
 * Coordinates are unitless — the renderer multiplies by `cellSize`.
 */
export const BRAILLE_DOT_XY: Record<number, [0 | 1, 0 | 1 | 2]> = {
  1: [0, 0],
  2: [0, 1],
  3: [0, 2],
  4: [1, 0],
  5: [1, 1],
  6: [1, 2],
};

/**
 * Return the dot positions for a single Braille cell, or `[]` for chars
 * outside the a-z map (numbers, punctuation, spaces).
 */
export function brailleDotsFor(char: string): ReadonlyArray<number> {
  return BRAILLE_LETTER[char.toLowerCase()] ?? [];
}
