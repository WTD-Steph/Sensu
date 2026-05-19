/**
 * Syntax — a solid colored circle combined with a hatched circle of the
 * same size. The pair reads as a "syntax" pairing — figure + line.
 *
 * Brand book: "It's simply any solid-colored circle combined with hatching.
 * Change the color of the solid dots, or the hatch pattern on top, you
 * name it. Scale it up and play with negative space."
 */
import type { CSSProperties } from "react";

type SyntaxProps = {
  /** Tailwind class for the solid disc fill (defaults to currentColor). */
  fillClassName?: string;
  /** Tailwind class for the hatch lines (defaults to currentColor). */
  hatchClassName?: string;
  /** Hatch rotation, degrees. */
  hatchAngle?: number;
  className?: string;
  style?: CSSProperties;
};

export function Syntax({
  fillClassName,
  hatchClassName,
  hatchAngle = 45,
  className,
  style,
}: SyntaxProps) {
  const r = 64;
  // Hatch lines clipped to a circle the same size, sitting beside the disc.
  const lines = [];
  for (let x = -r; x <= r; x += 6) {
    lines.push(
      <line
        key={x}
        x1={x}
        y1={-r * 1.5}
        x2={x}
        y2={r * 1.5}
        stroke="currentColor"
        strokeWidth="1.4"
      />
    );
  }

  return (
    <svg viewBox="0 0 320 160" aria-hidden="true" className={className} style={style}>
      <defs>
        <clipPath id="syntaxHatchClip">
          <circle cx="0" cy="0" r={r} />
        </clipPath>
      </defs>
      {/* Solid disc */}
      <g transform="translate(80 80)" className={fillClassName ?? "text-marble"}>
        <circle cx="0" cy="0" r={r} fill="currentColor" />
      </g>
      {/* Hatched disc */}
      <g
        transform={`translate(240 80) rotate(${hatchAngle})`}
        clipPath="url(#syntaxHatchClip)"
        className={hatchClassName ?? "text-void"}
      >
        {lines}
      </g>
      <g transform="translate(240 80)" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="0" cy="0" r={r} className={hatchClassName ?? "text-void"} />
      </g>
    </svg>
  );
}
