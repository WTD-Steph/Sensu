import type { ElementType, ReactNode, HTMLAttributes } from "react";

/**
 * The Sensu eyebrow / kicker primitive. Renders the design-system
 * eyebrow style — uppercase, wide tracking, caption-sized — in one of
 * four colour variants that cover every observed surface context.
 *
 * Defaults match the most common section-eyebrow pattern: bold Marble
 * on a Whim surface, used 12+ times across the site.
 *
 * Examples:
 *   <Eyebrow>Story</Eyebrow>                       // p · marble · semibold
 *   <Eyebrow as="dt" weight="regular">Material</Eyebrow>   // dl term
 *   <Eyebrow color="whim" className="mb-4">Sensu Circle</Eyebrow>  // on Void/Marble
 */
export type EyebrowColor = "marble" | "whim" | "whim-dim" | "void-dim";
export type EyebrowWeight = "semibold" | "regular";

type EyebrowProps = {
  color?: EyebrowColor;
  weight?: EyebrowWeight;
  /** Render as a different element (e.g. dt inside a definition list). */
  as?: ElementType;
  children: ReactNode;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "color">;

const COLOR: Record<EyebrowColor, string> = {
  marble: "text-marble",
  whim: "text-whim",
  "whim-dim": "text-whim/65",
  "void-dim": "text-void/60",
};

const WEIGHT: Record<EyebrowWeight, string> = {
  semibold: "font-semibold",
  regular: "",
};

export function Eyebrow({
  color = "marble",
  weight = "semibold",
  as: Tag = "p",
  className = "",
  children,
  ...rest
}: EyebrowProps) {
  const classes = `text-caption uppercase tracking-eyebrow ${WEIGHT[weight]} ${COLOR[color]} ${className}`.trim();
  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
