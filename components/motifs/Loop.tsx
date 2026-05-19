/**
 * Loop — circles connected into a melted, molecular shape.
 *
 * Brand book: "A combination of circles that creates a melted effect,
 * adding a subtle sense of movement. Think of it as a molecule. Change
 * and vary the sizes. Rearrange them freely to fit the layout."
 *
 * Implementation: an SVG filter using gooey blending (feGaussianBlur +
 * feColorMatrix threshold) so individual circles merge into a soft mass.
 */
import { useId, type CSSProperties } from "react";

type LoopProps = {
  className?: string;
  style?: CSSProperties;
};

export function Loop({ className, style }: LoopProps) {
  // Unique filter id so multiple Loops on the page don't clash.
  const id = useId().replace(/[:]/g, "");
  const filterId = `loop-gooey-${id}`;
  return (
    <svg
      viewBox="0 0 300 160"
      aria-hidden="true"
      className={className}
      style={style}
      fill="currentColor"
    >
      <defs>
        <filter id={filterId}>
          <feGaussianBlur stdDeviation="6" />
          <feColorMatrix
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
          />
        </filter>
      </defs>
      <g filter={`url(#${filterId})`}>
        <circle cx="60" cy="80" r="32" />
        <circle cx="110" cy="62" r="22" />
        <circle cx="148" cy="98" r="28" />
        <circle cx="198" cy="78" r="20" />
        <circle cx="236" cy="100" r="32" />
      </g>
    </svg>
  );
}
