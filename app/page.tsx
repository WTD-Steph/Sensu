import Image from "next/image";
import Link from "next/link";
import { IG_URL, SHOPEE_URL } from "@/lib/links";

/**
 * Phase 0 lift-and-shift of the static homepage into Server Components.
 *
 * Phase 1b moved the header and footer into the root layout so every route
 * gets the announcement bar, sticky nav, and footer for free. Phase 2 will
 * componentize each section below into proper files under
 * components/sections/.
 */
export default function HomePage() {
  return (
    <main id="main" className="overflow-x-hidden">
      {/* HERO */}
      <section className="pt-section" id="top">
        <div className="mx-auto grid max-w-page grid-cols-1 items-center gap-12 px-gutter md:grid-cols-[1.05fr_1fr] md:gap-[clamp(28px,5vw,72px)]">
          <div>
            <p className="mb-4 text-caption font-semibold uppercase tracking-eyebrow text-marble">
              Sensu · センス
            </p>
            <h1 className="mb-6 text-display font-bold lowercase">
              rituals{" "}
              <em className="font-light not-italic italic text-marble">worth</em>{" "}
              keeping.
            </h1>
            <p className="mb-8 max-w-[52ch] text-body-lg text-void/70">
              A contemporary drinkware and tea-tools brand inspired by the quiet
              beauty of Japanese rituals. Each piece turns drink-making into a
              moment of stillness, intention, and grace.
            </p>
            <div className="mb-9 flex flex-wrap gap-3">
              <a
                href={SHOPEE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-marble px-6 py-3.5 text-sm font-medium uppercase tracking-[0.06em] text-whim transition-colors duration-200 ease-sensu hover:bg-void"
              >
                Shop the line ↗
              </a>
              <Link
                href="/story"
                className="rounded-full border border-void px-6 py-3.5 text-sm font-medium uppercase tracking-[0.06em] text-void transition-colors duration-200 ease-sensu hover:bg-void hover:text-whim"
              >
                Our story
              </Link>
            </div>
            <ul
              aria-label="Brand pillars"
              className="flex gap-9 text-[13.5px] uppercase tracking-[0.16em] text-void/60"
            >
              <li>Refined</li>
              <li className="relative before:absolute before:-left-[22px] before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-marble">
                Crafted
              </li>
              <li className="relative before:absolute before:-left-[22px] before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-marble">
                Elegant
              </li>
            </ul>
          </div>

          <div className="relative aspect-[5/6] min-h-[380px]">
            <figure className="absolute inset-0 m-0 overflow-hidden rounded-card-lg shadow-[0_30px_60px_-30px_rgba(22,21,20,0.25)]">
              <Image
                src="/img/social/matcha-ritual.jpg"
                alt="Matcha being whisked in a ceramic bowl"
                fill
                sizes="(min-width: 880px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </figure>
          </div>
        </div>
      </section>

      {/* STORY / COLLECTIONS / FEATURED — placeholder anchors. Phase 2 rebuilds these. */}
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

      <section id="collections" className="py-section bg-whim">
        <div className="mx-auto max-w-page px-gutter">
          <p className="mb-4 text-caption font-semibold uppercase tracking-eyebrow text-marble">
            Collections
          </p>
          <h2 className="mb-12 text-h2 font-bold">
            Form follows{" "}
            <em className="font-light italic text-marble">function.</em>
          </h2>
          <p className="max-w-[58ch] text-body-lg text-void/70">
            Phase 2 rebuilds this section with motif-per-card visuals and
            deep-dive product views.
          </p>
        </div>
      </section>

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
            Phase 2 expands this to 6–8 cards with Shopee hover CTAs.
          </p>
        </div>
      </section>

      <section id="circle" className="bg-marble py-section text-whim">
        <div className="mx-auto max-w-page px-gutter text-center">
          <p className="mb-4 text-caption font-semibold uppercase tracking-eyebrow text-whim/70">
            Sensu Circle
          </p>
          <h2 className="text-display font-bold leading-[1.02]">
            Where movement<br />
            becomes{" "}
            <em className="font-light italic text-whim/80">mindfulness.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-[56ch] text-body-lg text-whim/85">
            Sensu is a collection of tea tools and tableware designed to awaken
            the senses. Crafted from glass, ceramic, bamboo and brass — each
            piece invites stillness, touch, and quiet connection.
          </p>
          <p className="mt-9 text-sm uppercase tracking-[0.22em] text-whim/70">
            #SensuCircle
          </p>
        </div>
      </section>

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
