/**
 * Orbit — a regular dot, used as ambient pattern.
 *
 * Brand book: "It's just a regular dot. Spread it out, stack them like a
 * pile of balls, line them up neatly, or let them slightly overlap. Use it
 * as negative space or fill it with text."
 *
 * Variants:
 *   - "grid":     even grid of dots (default)
 *   - "stacked":  pyramid stack
 *   - "scatter":  irregular scatter
 *   - "line":     single horizontal row
 */
import type { CSSProperties } from "react";

type OrbitProps = {
  variant?: "grid" | "stacked" | "scatter" | "line";
  /** Tailwind color class for the fill, e.g. "text-marble" / "text-whim". */
  className?: string;
  /** Inline opacity if needed. */
  style?: CSSProperties;
  /** Optional title for screen readers (default: hidden). */
  title?: string;
};

function GridDots() {
  const cells = [];
  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 5; x++) {
      cells.push(<circle key={`${x}-${y}`} cx={20 + x * 30} cy={20 + y * 30} r="6" />);
    }
  }
  return <>{cells}</>;
}

function StackedDots() {
  // Pyramid of balls — 1, 2, 3, 4, 5 from top
  const rows = [1, 2, 3, 4, 5];
  return (
    <>
      {rows.flatMap((count, rIdx) =>
        Array.from({ length: count }).map((_, i) => (
          <circle
            key={`${rIdx}-${i}`}
            cx={80 + (i - (count - 1) / 2) * 18}
            cy={20 + rIdx * 18}
            r="8"
          />
        ))
      )}
    </>
  );
}

function ScatterDots() {
  const positions: Array<[number, number, number]> = [
    [22, 30, 8], [78, 18, 6], [130, 44, 10], [44, 76, 12], [104, 92, 7],
    [156, 78, 9], [60, 130, 6], [110, 142, 11], [160, 130, 7], [30, 158, 9],
  ];
  return (
    <>
      {positions.map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} />
      ))}
    </>
  );
}

function LineDots() {
  return (
    <>
      {Array.from({ length: 8 }).map((_, i) => (
        <circle key={i} cx={12 + i * 22} cy={20} r="6" />
      ))}
    </>
  );
}

export function Orbit({ variant = "grid", className, style, title }: OrbitProps) {
  const viewBox = variant === "line" ? "0 0 200 40" : "0 0 200 200";
  return (
    <svg
      viewBox={viewBox}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      className={className}
      style={style}
      fill="currentColor"
    >
      {title ? <title>{title}</title> : null}
      {variant === "grid" && <GridDots />}
      {variant === "stacked" && <StackedDots />}
      {variant === "scatter" && <ScatterDots />}
      {variant === "line" && <LineDots />}
    </svg>
  );
}
