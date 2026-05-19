import Link from "next/link";
import { Loop } from "@/components/motifs";

/**
 * Story section (§5.2 of the rebuild brief).
 *
 * Three blocks: Origin / Materials / Philosophy. Below them, a single
 * stats row: 4 material lines · +30 handcrafted pieces · 1 quiet
 * philosophy.
 *
 * Materials block uses a small motif accent per material to hint at the
 * mood — kept understated; the heavy lifting happens in Collections.
 */
export function Story() {
  return (
    <section id="story" className="py-section">
      <div className="mx-auto max-w-page px-gutter">
        {/* ORIGIN */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="mb-4 text-caption font-semibold uppercase tracking-eyebrow text-marble">
              About the brand
            </p>
            <h2 className="text-h2 font-bold">
              A quiet confidence in{" "}
              <em className="font-light italic text-marble">
                what feels right.
              </em>
            </h2>
          </div>
          <div className="space-y-5 text-body-lg text-void/75">
            <p>
              In Japanese, <strong>Sensu (センス)</strong> means taste,
              intuition, or refined sense. At Sensu, we honour the timeless
              rituals of Japanese culture through contemporary tools crafted
              for the modern hand.
            </p>
            <p>
              Every bowl, cup and whisk we offer is designed with purpose — to
              bring stillness, clarity, and beauty into your daily ritual. Our
              products blend traditional forms with modern materials, from
              handcrafted ceramics to clear, minimal glass.
            </p>
            <p className="border-l-2 border-marble pl-5 text-void italic">
              &ldquo;Elegance lies in intention, and even the smallest moment
              can become a practice of presence.&rdquo;
            </p>
          </div>
        </div>

        {/* MATERIALS — four poetic cards */}
        <div className="mt-section grid grid-cols-2 gap-4 md:grid-cols-4">
          {MATERIALS.map((m) => (
            <article
              key={m.title}
              className="rounded-card border border-black/10 bg-whim p-6 transition-colors duration-300 ease-sensu hover:border-void/30"
            >
              <p className="text-caption uppercase tracking-eyebrow text-marble">
                {m.kanji}
              </p>
              <h3 className="mt-2 text-h3 font-bold">{m.title}</h3>
              <p className="mt-2 text-body text-void/70">{m.line}</p>
            </article>
          ))}
        </div>

        {/* PHILOSOPHY — full-bleed Void pullquote */}
        <div className="mt-section">
          <PhilosophyBlock />
        </div>

        {/* STATS */}
        <dl className="mt-section grid grid-cols-1 gap-10 border-t border-black/10 pt-12 md:grid-cols-3">
          <Stat number="4" label="Material lines" />
          <Stat number="+30" label="Handcrafted pieces" />
          <Stat number="1" label="Quiet philosophy" />
        </dl>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- */

const MATERIALS = [
  {
    kanji: "光 · Hikari",
    title: "Glass holds light.",
    line: "Heat-formed glass that radiates colour, made to be looked through.",
  },
  {
    kanji: "朧 · Oboro",
    title: "Ceramic holds stillness.",
    line: "Muted clay tones, fired by hand. Warm in hand, slow to cool.",
  },
  {
    kanji: "竹 · Take",
    title: "Bamboo holds simplicity.",
    line: "Whisks and tools that do their job without asking for attention.",
  },
  {
    kanji: "匠 · Takumi",
    title: "Craft holds intention.",
    line: "Editorial premium pieces — the line where care becomes form.",
  },
];

function PhilosophyBlock() {
  return (
    <div className="relative isolate overflow-hidden rounded-card-lg bg-void px-8 py-16 text-whim md:px-16 md:py-24">
      {/* Loop motif top-right at low opacity */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-44 w-80 text-marble opacity-30 md:h-60 md:w-[28rem]"
      >
        <Loop className="h-full w-full" />
      </div>
      <p className="text-caption uppercase tracking-eyebrow text-whim/60">
        Philosophy
      </p>
      <p className="mt-4 max-w-4xl text-h2 font-light leading-[1.1]">
        Form follows function. The most meaningful things are not always the
        loudest — sometimes they are the ones you have to{" "}
        <em className="text-whim">slow down to feel.</em>
      </p>
      <div className="mt-10">
        <Link
          href="/story"
          className="inline-flex items-center gap-2 border-b border-whim/40 pb-1 text-sm uppercase tracking-[0.18em] text-whim transition-colors duration-200 ease-sensu hover:border-whim hover:text-lumen"
        >
          Read the full story
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd>
        <span className="block text-display font-bold leading-none text-marble">
          {number}
        </span>
        <span className="mt-3 block text-caption uppercase tracking-eyebrow text-void/60">
          {label}
        </span>
      </dd>
    </div>
  );
}
