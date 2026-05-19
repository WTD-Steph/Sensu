"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "sensu:motion-paused:v1";

/**
 * "Pause motion" toggle (brief §6, a11y).
 *
 * Sets `data-motion="paused"` on <html>; globals.css reads that attribute
 * and stops all animations / transitions. Preference is persisted to
 * localStorage so it sticks across visits.
 *
 * Independent from `prefers-reduced-motion` — users who don't have the OS
 * preference set can still opt out here.
 */
export function MotionToggle() {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) === "1";
      setPaused(stored);
      document.documentElement.dataset.motion = stored ? "paused" : "playing";
    } catch {
      // Storage blocked — treat as playing.
    }
  }, []);

  function toggle() {
    const next = !paused;
    setPaused(next);
    document.documentElement.dataset.motion = next ? "paused" : "playing";
    try {
      window.localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
    } catch {
      // ignore
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={paused}
      className="inline-flex items-center gap-2 text-[13px] text-whim/70 transition-colors duration-200 ease-sensu hover:text-whim"
    >
      <span
        aria-hidden="true"
        className={`inline-block h-2.5 w-2.5 rounded-full ${
          paused ? "bg-whim/40" : "bg-lumen motion-safe:animate-breathe"
        }`}
      />
      {paused ? "Motion paused" : "Pause motion"}
    </button>
  );
}
