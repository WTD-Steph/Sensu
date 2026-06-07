import Image from "next/image";
import type { Metadata } from "next";
import { BrailleDecoder } from "@/components/BrailleDecoder";
import { Button } from "@/components/ui/Button";
import { Orbit, Loop } from "@/components/motifs";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonld";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Our story",
  description:
    "Sensu was born from a quiet question: what does it mean to do something well? Our name means sense. Our wordmark is written in Braille.",
  alternates: { canonical: "/story" },
};

/**
 * /story — the long-form brand story.
 *
 * Copy is the brief's §7 verbatim — content pre-approved by the founder.
 * Visual rhythm:
 *   1. Hero — eyebrow, display headline, lede.
 *   2. Big photo block.
 *   3. 5 paragraphs of body copy with a BrailleDecoder anchor between
 *      the first two.
 *   4. Loop motif + materials breakdown.
 *   5. Signature line.
 *   6. Closing CTA pair → /shop + /ritual.
 */
export default function StoryPage() {
  return (
    <>
      <script
        {...jsonLdScript(
          breadcrumbJsonLd([
            { name: "Sensu", href: "/" },
            { name: "Our story", href: "/story" },
          ])
        )}
      />
      <StoryBody />
    </>
  );
}

function StoryBody() {
  return (
    <main id="main" className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative isolate pt-section">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-24 hidden h-44 w-44 text-marble opacity-60 motion-safe:animate-drift md:block"
        >
          <Orbit variant="scatter" className="h-full w-full" />
        </div>

        <div className="mx-auto max-w-page px-gutter">
          <Eyebrow className="mb-4">
            Our story · 物語
          </Eyebrow>
          <h1 className="max-w-[18ch] text-display font-bold leading-[0.95]">
            Sensu was born from a quiet{" "}
            <em className="font-light italic text-marble">question.</em>
          </h1>
          <p className="mt-8 max-w-[58ch] text-body-lg text-void/70">
            What does it mean to do something well? Not perfectly. Not
            impressively. Well — the way a good morning is well, the way the
            right cup is well in the hand.
          </p>
        </div>
      </section>

      {/* HERO PHOTO BLOCK */}
      <section className="py-section">
        <div className="mx-auto max-w-page px-gutter">
          <figure className="relative aspect-[16/9] overflow-hidden rounded-card-lg shadow-[0_30px_60px_-30px_rgba(22,21,20,0.25)] md:aspect-[21/9]">
            <Image
              src="/img/social/bts-tray.jpg"
              alt="Tea preparation tray with iron kettle, glass and bamboo whisk"
              fill
              sizes="(min-width: 768px) 90vw, 100vw"
              className="object-cover"
              priority
            />
          </figure>
        </div>
      </section>

      {/* BODY */}
      <section className="pb-section">
        <article className="mx-auto max-w-3xl space-y-7 px-gutter text-body-lg text-void/80">
          <p>
            Our name means sense. Our wordmark is written in Braille, a tactile
            script that turns reading into a heightened sense. Both are
            reminders: the most meaningful things are not always the loudest.
            Sometimes they are the ones you have to slow down to feel.
          </p>

          {/* BRAILLE MARK AS A SECTION SEPARATOR */}
          <div className="flex justify-center py-10">
            <BrailleDecoder
              word="sensu"
              cellSize={36}
              cellGap={24}
              dotColor="#2B2BAD"
              className="h-20 w-auto"
              ariaLabel="Sensu, written in Braille"
            />
          </div>

          <p>
            We work with four materials — glass, ceramic, bamboo, and the small
            acts of craft that bind them. Each one carries a feeling. Glass
            holds light. Ceramic holds stillness. Bamboo holds simplicity.
            Together they hold a ritual.
          </p>
          <p>
            Every Sensu piece is designed for the modern hand, and made for the
            modern morning. Whether you whisk matcha at six or pour an oolong
            at midnight, we hope our objects make the moment feel a little
            more yours.
          </p>
          <p className="text-h3 font-light italic text-marble">
            Welcome to the Sensu Circle.
          </p>
        </article>
      </section>

      {/* MATERIALS BAND */}
      <section className="relative isolate overflow-hidden bg-void py-section text-whim">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-6 h-48 w-96 text-marble opacity-30 md:h-64 md:w-[36rem]"
        >
          <Loop className="h-full w-full" />
        </div>

        <div className="relative mx-auto max-w-page px-gutter">
          <Eyebrow weight="regular" color="whim-dim">
            Materials
          </Eyebrow>
          <h2 className="mt-3 max-w-3xl text-h2 font-bold">
            Form follows function. The choice of material is{" "}
            <em className="font-light italic text-whim/80">never accidental.</em>
          </h2>

          <ul className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
            <Material
              kanji="光 · Hikari"
              title="Glass holds light."
              body="Heat-resistant glass made to be looked through. Best for showcasing the colour of a brew — matcha green, hojicha amber, a clear oolong."
            />
            <Material
              kanji="朧 · Oboro"
              title="Ceramic holds stillness."
              body="Handcrafted in muted clay tones. Slow to cool, warm in hand. Built to hold heat through a long morning."
            />
            <Material
              kanji="竹 · Take"
              title="Bamboo holds simplicity."
              body="Cut from fine bamboo by hand. The chasen creates smooth, frothy matcha — the same way it has for centuries."
            />
            <Material
              kanji="匠 · Takumi"
              title="Craft holds intention."
              body="Our premium line: mixed materials, considered details. A tribute to the care and craft behind each form."
            />
          </ul>
        </div>
      </section>

      {/* SIGNATURE */}
      <section className="py-section">
        <div className="mx-auto max-w-3xl px-gutter">
          <p className="text-body-lg text-void/65">
            — The Sensu team.
          </p>
        </div>
      </section>

      {/* CLOSING CTAs */}
      <section className="bg-whim-warm py-section">
        <div className="mx-auto flex max-w-page flex-col items-start gap-6 px-gutter md:flex-row md:items-center md:justify-between">
          <div>
            <Eyebrow weight="regular">
              Begin the ritual
            </Eyebrow>
            <h2 className="mt-2 text-h2 font-bold">
              Find your{" "}
              <em className="font-light italic text-marble">first piece.</em>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/shop" variant="primary">
              Browse the shop
            </Button>
            <Button href="/ritual" variant="secondary">
              The matcha ritual
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function Material({
  kanji,
  title,
  body,
}: {
  kanji: string;
  title: string;
  body: string;
}) {
  return (
    <li className="border-l border-whim/20 pl-5">
      <Eyebrow weight="regular" color="whim-dim">
        {kanji}
      </Eyebrow>
      <h3 className="mt-2 text-h3 font-bold">{title}</h3>
      <p className="mt-2 text-body text-whim/75">{body}</p>
    </li>
  );
}
