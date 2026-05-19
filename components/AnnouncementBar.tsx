"use client";

import { useEffect, useState } from "react";
import { SHOPEE_URL } from "@/lib/links";

/**
 * Thin announcement bar above the nav. Dismissible — the dismissal is
 * persisted to localStorage so it stays hidden on subsequent visits.
 *
 * Background is Void; text Whim. Single line, 13px caption type.
 */
const STORAGE_KEY = "sensu:announcement-dismissed:v1";

export function AnnouncementBar() {
  const [show, setShow] = useState(false);

  // Don't render on the server — we don't know the dismissal state yet, and
  // showing it then yanking it on hydrate is worse than a one-frame delay.
  useEffect(() => {
    try {
      if (window.localStorage.getItem(STORAGE_KEY) !== "1") {
        setShow(true);
      }
    } catch {
      setShow(true);
    }
  }, []);

  function dismiss() {
    setShow(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // localStorage blocked (private mode) — accept the soft dismissal.
    }
  }

  if (!show) return null;

  return (
    <div className="bg-void text-whim">
      <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-gutter py-2 text-[12.5px] tracking-[0.06em]">
        <a
          href={SHOPEE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center uppercase hover:underline"
        >
          Sensu × Shopee — now shipping across Indonesia. Tap to shop →
        </a>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="ml-2 rounded-full p-1 text-whim/70 transition-colors hover:bg-whim/10 hover:text-whim"
        >
          {/* Close icon */}
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <path
              d="M2 2 L12 12 M12 2 L2 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
