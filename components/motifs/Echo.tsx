/**
 * Echo — a sequence of evenly spaced circles whose sizes step large→small
 * (or small→large), evoking a wave or a Doppler ring.
 *
 * Brand book: "When viewed from a distance, creates a sense of movement or
 * waves. The circle sizes go from large to small, or vice versa."
 */
import type { CSSProperties } from "react";

type EchoProps = {
  /** "out" expands from a center dot, "in" contracts toward it. */
  direction?: "out" | "in";
  /** Number of dots in the sequence. */
  steps?: number;
  className?: string;
  style?: CSSProperties;
};

export function Echo({
  direction = "out",
  steps = 7,
  className,
  style,
}: EchoProps) {
  const width = 400;
  const height = 80;
  const gap = width / (steps + 1);
  const dots = Array.from({ length: steps }).map((_, i) => {
    // Triangular envelope: small → large → small
    const t = i / (steps - 1);
    const env = 1 - Math.abs(t - 0.5) * 2; // 0..1..0
    const r = direction === "out" ? 6 + env * 18 : 24 - env * 18;
    return { cx: gap * (i + 1), cy: height / 2, r };
  });

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
      className={className}
      style={style}
      fill="currentColor"
    >
      {dots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r={d.r} />
      ))}
    </svg>
  );
}
