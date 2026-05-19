/**
 * Hatch — thin parallel line patterns.
 *
 * Brand book: "A set of thin line pattern variations that complement Syntax.
 * These can be rotated freely, but should only use either light neutral
 * shades (Whim) or dark ones (Void). Always make the hatch size exactly
 * the same as the solid circle size."
 *
 * Default tints: enforce neutral-only via CSS — author supplies
 * className like "text-void" or "text-whim".
 */
import type { CSSProperties } from "react";

type HatchProps = {
  /** Rotation in degrees. */
  angle?: number;
  /** Width of the pattern field in px (CSS pixels). */
  size?: number;
  /** Spacing between lines in px. */
  spacing?: number;
  /** Stroke width in px. */
  strokeWidth?: number;
  className?: string;
  style?: CSSProperties;
};

export function Hatch({
  angle = 45,
  size = 200,
  spacing = 8,
  strokeWidth = 1.5,
  className,
  style,
}: HatchProps) {
  const lines = [];
  // Draw lines spanning a square of (size) — long enough to fully cross when rotated.
  const span = size * 1.6;
  const offset = -span / 4;
  for (let x = offset; x < span; x += spacing) {
    lines.push(
      <line
        key={x}
        x1={x}
        y1={-span / 2}
        x2={x}
        y2={span * 1.5}
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
    );
  }

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
      className={className}
      style={style}
    >
      <g transform={`rotate(${angle} ${size / 2} ${size / 2})`}>{lines}</g>
    </svg>
  );
}
