import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { BrailleReveal } from "@/components/sections/BrailleReveal";
import { IG_URL } from "@/lib/links";

/**
 * Home one-pager — composed of section components.
 *
 * Phase 2a wired: Hero (Act 1) + Braille Reveal (the Marble signature
 * moment). Story / Collections / Featured / Ritual / Circle / Newsletter
 * are still placeholder anchors; Phase 2b–2c fills them in.
 */
export default function HomePage() {
  return (
    <main id="main" className="overflow-x-hidden">
      <Hero />

      {/* STORY — placeholder anchor. Phase 2b rebuilds this. */}
      <section id="story" className="py-section">
        <div className="mx-auto max-w-page px-gutter">
          <p className="mb-4 text-caption font-semibold uppercase tracking-eyebrow text-marble">
            About the brand
          </p>
          <h2 className="mb-8 text-h2 font-bold">
            A quiet confidence in{" "}
            <em className="font-light italic text-marble">what feels right.</em>
          </h2>
          <p className="max-w-[58ch] text-body-lg text-void/70">
            In Japanese, <strong>Sensu (センス)</strong> means taste, intuition,
            or refined sense. At Sensu, we honour the timeless rituals of
            Japanese culture through contemporary tools crafted for the modern
            hand. Every bowl, cup and whisk we offer is designed with purpose —
            to bring stillness, clarity, and beauty into your daily ritual.
          </p>
        </div>
      </section>

      {/* BRAILLE REVEAL — the brand's signature moment */}
      <BrailleReveal />

      {/* COLLECTIONS — placeholder anchor. Phase 2b rebuilds this. */}
      <section id="collections" className="py-section">
        <div className="mx-auto max-w-page px-gutter">
          <p className="mb-4 text-caption font-semibold uppercase tracking-eyebrow text-marble">
            Collections
          </p>
          <h2 className="mb-12 text-h2 font-bold">
            Form follows{" "}
            <em className="font-light italic text-marble">function.</em>
          </h2>
          <p className="max-w-[58ch] text-body-lg text-void/70">
            Phase 2b rebuilds this section with motif-per-card visuals and
            deep-dive product views.
          </p>
        </div>
      </section>

      {/* FEATURED — placeholder. Phase 2c rebuilds this. */}
      <section id="products" className="py-section bg-whim">
        <div className="mx-auto max-w-page px-gutter">
          <p className="mb-4 text-caption font-semibold uppercase tracking-eyebrow text-marble">
            Product Highlight · 01
          </p>
          <h2 className="mb-12 text-h2 font-bold">
            Beautifully crafted,{" "}
            <em className="font-light italic text-marble">a true work of art.</em>
          </h2>
          <p className="max-w-[58ch] text-body-lg text-void/70">
            Phase 2c expands this to 6–8 cards with Shopee hover CTAs.
          </p>
        </div>
      </section>

      {/* NEWSLETTER — placeholder. Phase 2c rebuilds with form + /api/subscribe. */}
      <section id="newsletter" className="py-section">
        <div className="mx-auto grid max-w-page grid-cols-1 items-start gap-12 px-gutter md:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="mb-4 text-caption font-semibold uppercase tracking-eyebrow text-marble">
              Follow · フォロー
            </p>
            <h2 className="mb-6 text-h2 font-bold">
              Stay in the{" "}
              <em className="font-light italic text-marble">circle.</em>
            </h2>
            <p className="max-w-[52ch] text-body-lg text-void/70">
              Balanced. Subtle. Timeless. Follow the quiet ritual on Instagram —
              new pieces, studio notes, and the spaces in between.
            </p>
          </div>
          <ul className="border-t border-black/10">
            <li className="grid grid-cols-[120px_1fr] gap-6 border-b border-black/10 py-5">
              <span className="pt-1 text-caption uppercase tracking-eyebrow text-void/60">
                Social
              </span>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start border-b border-current hover:text-marble"
              >
                @madebysensu
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
