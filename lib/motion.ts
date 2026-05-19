/**
 * Shared motion primitives — easings and variants reused across the site.
 * Use these instead of inlining values so the brand's motion feel stays
 * consistent.
 */
import type { Variants, Transition } from "framer-motion";

/** Soft ease-out — the default Sensu easing curve. */
export const easeSensu = [0.22, 1, 0.36, 1] as const;

export const transition: { entrance: Transition; hover: Transition } = {
  entrance: { duration: 0.6, ease: easeSensu },
  hover: { duration: 0.22, ease: easeSensu },
};

/** Standard entrance: fade + 16px rise. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: transition.entrance },
};

/** Stagger children with a small base delay. */
export const stagger = (delay = 0.06): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay } },
});

/** A single dot popping in (BrailleDecoder uses this). */
export const dotPop: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: easeSensu },
  },
};
