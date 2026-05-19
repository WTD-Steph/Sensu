"use client";

import { motion, useReducedMotion } from "framer-motion";
import { brailleDotsFor, BRAILLE_DOT_XY } from "@/lib/braille";
import { easeSensu } from "@/lib/motion";

type BrailleDecoderProps = {
  /** Word to encode. Letters a-z only; other chars render as empty cells. */
  word: string;
  /** Cell size (one column width) in CSS pixels. */
  cellSize?: number;
  /** Gap between cells in CSS pixels. */
  cellGap?: number;
  /** Dot color (CSS color string). Defaults to Void. */
  dotColor?: string;
  /**
   * When true, show "ghost" dots in every position to hint at the 6-dot
   * grid. Useful at large sizes; off by default to keep the mark clean.
   */
  showGhost?: boolean;
  /**
   * When true, the decoder animates dots in letter-by-letter on mount.
   * Reduced-motion users always see the final state.
   */
  reveal?: boolean;
  /** Per-letter stagger, seconds. */
  letterStagger?: number;
  /** Class on the wrapping <svg>. */
  className?: string;
  /** Accessibility label. */
  ariaLabel?: string;
};

/**
 * Renders a word as a row of 6-dot Braille cells. Use as either a small
 * mark (the Sensu wordmark in dots) or a large decoded reveal.
 */
export function BrailleDecoder({
  word,
  cellSize = 24,
  cellGap = 18,
  dotColor = "#161514",
  showGhost = false,
  reveal = false,
  letterStagger = 0.18,
  className,
  ariaLabel,
}: BrailleDecoderProps) {
  const prefersReducedMotion = useReducedMotion();
  const doReveal = reveal && !prefersReducedMotion;

  const chars = word.split("");
  const dotRadius = cellSize * 0.16;
  // Horizontal: 2 columns per cell at x=0 and x=cellSize*0.66
  const colXs = [0, cellSize * 0.66];
  // Vertical: 3 rows in the cell (top/mid/bot)
  const rowYs = [0, cellSize * 0.6, cellSize * 1.2];
  const cellWidth = cellSize * 0.66 + dotRadius * 2;
  const cellAdvance = cellWidth + cellGap;
  const totalWidth = cellAdvance * chars.length - cellGap;
  const totalHeight = cellSize * 1.2 + dotRadius * 2;

  return (
    <svg
      viewBox={`${-dotRadius} ${-dotRadius} ${totalWidth + dotRadius * 2} ${totalHeight}`}
      role="img"
      aria-label={ariaLabel ?? `${word} written in Braille`}
      className={className}
    >
      {chars.map((char, letterIdx) => {
        const activeDots = brailleDotsFor(char);
        const cellX = letterIdx * cellAdvance;
        return (
          <g key={`${char}-${letterIdx}`} transform={`translate(${cellX} 0)`}>
            {[1, 2, 3, 4, 5, 6].map((dotNum) => {
              const [col, row] = BRAILLE_DOT_XY[dotNum];
              const cx = colXs[col];
              const cy = rowYs[row];
              const isActive = activeDots.includes(dotNum);
              if (!isActive && !showGhost) return null;
              if (!isActive) {
                return (
                  <circle
                    key={dotNum}
                    cx={cx}
                    cy={cy}
                    r={dotRadius * 0.5}
                    fill={dotColor}
                    opacity={0.12}
                  />
                );
              }
              return (
                <motion.circle
                  key={dotNum}
                  cx={cx}
                  cy={cy}
                  r={dotRadius}
                  fill={dotColor}
                  initial={doReveal ? { opacity: 0, scale: 0 } : false}
                  whileInView={
                    doReveal
                      ? {
                          opacity: 1,
                          scale: 1,
                          transition: {
                            delay: letterIdx * letterStagger,
                            duration: 0.45,
                            ease: easeSensu,
                          },
                        }
                      : undefined
                  }
                  viewport={{ once: true, amount: 0.5 }}
                  style={{ transformOrigin: `${cx}px ${cy}px` }}
                />
              );
            })}
          </g>
        );
      })}
    </svg>
  );
}
