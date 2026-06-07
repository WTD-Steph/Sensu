import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Orbit } from "@/components/motifs";

/**
 * Hero — Act 1 (the part above the fold).
 *
 * Act 2 (scroll-pinned Braille decode) is rendered as a separate section
 * below in the home page composition. Keeping them split makes both
 * easier to refactor; the brief permits this trade-off.
 */
export function Hero() {
  return (
    <section className="relative pt-section" id="top">
      {/* Ambient Orbit on the left edge, slow drift */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-6 top-24 hidden h-40 w-40 text-marble opacity-50 motion-safe:animate-drift md:block"
      >
        <Orbit variant="scatter" className="h-full w-full" />
      </div>

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
            <Button href="/shop" variant="primary">
              Browse the shop
            </Button>
            <Button href="/story" variant="secondary">
              Our story
            </Button>
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
          {/* Echo on the photo's bottom-right edge */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-6 -right-2 h-16 w-56 text-flare"
          >
            <Orbit variant="line" className="h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
