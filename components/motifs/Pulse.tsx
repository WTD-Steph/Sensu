/**
 * Pulse — gradient-trailed dots that imply motion.
 *
 * Brand book: "Pulse introduces gradients and a sense of movement. Pulse
 * should only appear in white (Whim), while the background can be any
 * color. Keep everything clean and neat."
 *
 * Implementation: a row of dots with a linear-gradient streak connecting
 * them, fading from solid Whim to transparent. Always rendered in Whim.
 */
import { useId, type CSSProperties } from "react";

type PulseProps = {
  direction?: "horizontal" | "vertical";
  className?: string;
  style?: CSSProperties;
};

export function Pulse({
  direction = "horizontal",
  className,
  style,
}: PulseProps) {
  const id = useId().replace(/[:]/g, "");
  const gradId = `pulse-grad-${id}`;
  const isH = direction === "horizontal";
  const viewBox = isH ? "0 0 400 100" : "0 0 100 400";

  return (
    <svg
      viewBox={viewBox}
      aria-hidden="true"
      className={className}
      style={style}
      // Always Whim per brand book — fixed, not a prop.
      fill="#F2F1F0"
    >
      <defs>
        <linearGradient
          id={gradId}
          x1="0"
          y1="0"
          x2={isH ? "1" : "0"}
          y2={isH ? "0" : "1"}
        >
          <stop offset="0%" stopColor="#F2F1F0" stopOpacity="1" />
          <stop offset="100%" stopColor="#F2F1F0" stopOpacity="0" />
        </linearGradient>
      </defs>
      {isH ? (
        <>
          <circle cx="20" cy="50" r="16" />
          <rect x="20" y="38" width="280" height="24" fill={`url(#${gradId})`} />
          <circle cx="300" cy="50" r="16" />
          <circle cx="360" cy="50" r="16" />
        </>
      ) : (
        <>
          <circle cx="50" cy="20" r="14" />
          <rect x="36" y="20" width="28" height="260" fill={`url(#${gradId})`} />
          <circle cx="50" cy="290" r="14" />
        </>
      )}
    </svg>
  );
}
