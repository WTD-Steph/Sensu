"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SHOPEE_URL } from "@/lib/links";
import { easeSensu } from "@/lib/motion";

/* eslint-disable @next/next/no-img-element */

const NAV_LINKS = [
  { href: "/story", label: "Story" },
  { href: "/#collections", label: "Collections" },
  { href: "/ritual", label: "Ritual" },
  { href: "/lookbook", label: "Lookbook" },
] as const;

/**
 * Sticky nav with hide-on-scroll-down, show-on-scroll-up behavior.
 *
 * - Hidden by default after scrolling down past 96px.
 * - Reappears on scroll up.
 * - Always visible near top.
 * - Reduced-motion users get a static sticky bar (no slide).
 */
export function Nav() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      const delta = y - lastY.current;
      if (y < 96) {
        setVisible(true);
      } else if (delta > 8) {
        setVisible(false);
      } else if (delta < -8) {
        setVisible(true);
      }
      lastY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={
        prefersReducedMotion
          ? undefined
          : { y: visible ? 0 : -120 }
      }
      transition={{ duration: 0.35, ease: easeSensu }}
      className="sticky top-0 z-40 border-b border-black/10 bg-whim/85 backdrop-blur supports-[backdrop-filter]:bg-whim/70"
    >
      <div className="mx-auto flex h-[72px] max-w-page items-center gap-7 px-gutter">
        <Link href="/" aria-label="Sensu home" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/sensu-logotype-dark.svg"
            alt="Sensu"
            width={120}
            height={26}
            className="h-[26px] w-auto"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden flex-1 gap-7 text-[13.5px] font-medium uppercase tracking-[0.04em] md:flex"
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href={SHOPEE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto inline-flex items-center gap-2 rounded-full bg-void px-5 py-3 text-[13.5px] font-medium uppercase tracking-[0.06em] text-whim transition-colors duration-200 ease-sensu hover:bg-marble"
        >
          Shop the line
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </motion.header>
  );
}
