"use client";

import { ReactLenis } from "lenis/react";
import { type ReactNode } from "react";

/**
 * Wraps the app in a Lenis-powered smooth-scroll context.
 *
 * Lenis adds inertia/easing on top of the native scroll; combined with
 * `scroll-padding-top: 88px` in globals.css this also gives anchor links
 * a soft glide into place.
 *
 * Reduced-motion users get native scroll behavior — we pass `lerp: 1`
 * (no smoothing) so the experience matches their OS preference.
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: true,
        wheelMultiplier: 1,
      }}
    >
      {children}
    </ReactLenis>
  );
}
