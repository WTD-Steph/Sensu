import Link from "next/link";
import { Orbit, Hatch, Loop, Syntax } from "@/components/motifs";
import { COLLECTIONS, type Collection } from "@/content/collections";

/**
 * Collections section (§5.4 of the rebuild brief).
 *
 * Four cards, each with one motif per the brand book mapping:
 *   HIKARI  → Orbit   (light, radiance)
 *   OBORO   → Hatch   (haze)
 *   TAKE    → Loop    (organic)
 *   TAKUMI  → Syntax  (craft, precision)
 *
 * Kanji set in Noto Serif JP at large scale, low opacity, behind the
 * latin name.
 */
export function Collections() {
  return (
    <section id="collections" className="py-section">
      <div className="mx-auto max-w-page px-gutter">
        <header className="mb-12 max-w-3xl">
          <p className="mb-4 text-caption font-semibold uppercase tracking-eyebrow text-marble">
            Collections
          </p>
          <h2 className="text-h2 font-bold">
            Form follows{" "}
            <em className="font-light italic text-marble">function.</em>
          </h2>
          <p className="mt-4 text-body-lg text-void/70">
            Each material carries a feeling. Glass holds light. Ceramic holds
            stillness. Bamboo holds simplicity. Together they hold a ritual.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {COLLECTIONS.map((c) => (
            <CollectionCard key={c.id} collection={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- */

function CollectionCard({ collection: c }: { collection: Collection }) {
  // Each card uses one primary color + neutrals (per brand rule).
  const palette = PALETTES[c.id];
  return (
    <article
      className={`group relative isolate flex min-h-[420px] flex-col overflow-hidden rounded-card-lg p-7 transition-transform duration-300 ease-sensu hover:-translate-y-1 ${palette.surface}`}
    >
      {/* Motif accent — top-right, low-opacity backdrop */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-6 -top-6 h-32 w-32 opacity-30 transition-opacity duration-300 ease-sensu group-hover:opacity-50 ${palette.motif}`}
      >
        <CollectionMotif id={c.id} />
      </div>

      {/* Kanji behind, large + low opacity */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-0 right-2 select-none font-jp text-[160px] leading-none opacity-15 ${palette.kanji}`}
      >
        {c.kanji}
      </div>

      <div className="relative flex flex-1 flex-col">
        <p className={`text-caption uppercase tracking-eyebrow ${palette.eyebrow}`}>
          {c.tag}
        </p>
        <h3 className={`mt-2 text-h3 font-bold ${palette.heading}`}>
          {c.name}
        </h3>
        <p className={`mt-3 max-w-prose text-body ${palette.body}`}>
          {c.description}
        </p>
        <Link
          href={c.href}
          className={`mt-auto inline-flex items-center gap-2 self-start border-b pb-1 pt-12 text-[13px] uppercase tracking-[0.16em] ${palette.link}`}
        >
          See pieces
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

function CollectionMotif({ id }: { id: Collection["id"] }) {
  switch (id) {
    case "hikari":
      return <Orbit variant="grid" className="h-full w-full" />;
    case "oboro":
      return <Hatch angle={45} size={200} className="h-full w-full" />;
    case "take":
      return <Loop className="h-full w-full" />;
    case "takumi":
      return <Syntax className="h-full w-full" fillClassName="text-marble" hatchClassName="text-void" />;
  }
}

/**
 * Per-collection color palette. Each card uses exactly one primary
 * (or pure neutrals for TAKUMI), paired with Void/Whim. Brand rule
 * honoured: no two primaries on a single surface.
 */
const PALETTES: Record<
  Collection["id"],
  {
    surface: string;
    motif: string;
    kanji: string;
    eyebrow: string;
    heading: string;
    body: string;
    link: string;
  }
> = {
  hikari: {
    surface: "bg-flare text-whim",
    motif: "text-whim",
    kanji: "text-whim",
    eyebrow: "text-whim/65",
    heading: "text-whim",
    body: "text-whim/85",
    link: "text-whim border-whim/40 hover:text-lumen hover:border-lumen",
  },
  oboro: {
    surface: "bg-marble text-whim",
    motif: "text-whim",
    kanji: "text-whim",
    eyebrow: "text-whim/65",
    heading: "text-whim",
    body: "text-whim/85",
    link: "text-whim border-whim/40 hover:text-lumen hover:border-lumen",
  },
  take: {
    surface: "bg-void text-whim",
    motif: "text-marble",
    kanji: "text-whim",
    eyebrow: "text-whim/65",
    heading: "text-whim",
    body: "text-whim/80",
    link: "text-whim border-whim/40 hover:text-lumen hover:border-lumen",
  },
  takumi: {
    surface: "bg-whim text-void border border-black/10",
    motif: "text-marble",
    kanji: "text-marble",
    eyebrow: "text-marble",
    heading: "text-void",
    body: "text-void/70",
    link: "text-void border-void/40 hover:text-marble hover:border-marble",
  },
};
