import Image from "next/image";
import Link from "next/link";
import { Echo } from "@/components/motifs";
import { RITUAL_STEPS } from "@/content/ritual";
import { Eyebrow } from "@/components/ui/Eyebrow";

/**
 * Ritual teaser — §5.6 of the brief. The full pillar lives at /ritual.
 *
 * On desktop: 4-step horizontal grid.
 * On mobile: vertical stack.
 *
 * One Echo motif accent runs under the section title — the brand's
 * "wave" pattern, matching the gesture of whisking.
 */
export function RitualTeaser() {
  return (
    <section id="ritual" className="relative isolate py-section">
      {/* Echo motif under the section header — Marble waves */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[6%] top-[6%] hidden h-12 w-72 text-marble opacity-60 md:block"
      >
        <Echo direction="out" steps={7} className="h-full w-full" />
      </div>

      <div className="mx-auto max-w-page px-gutter">
        <header className="mb-12 max-w-3xl">
          <Eyebrow className="mb-4">
            Ritual · 抹茶
          </Eyebrow>
          <h2 className="text-h2 font-bold">
            How to whisk matcha,{" "}
            <em className="font-light italic text-marble">the Sensu way.</em>
          </h2>
          <p className="mt-4 text-body-lg text-void/70">
            A good cup of matcha is not difficult — it is patient. The chasen
            does most of the work; you mostly need to stop hurrying.
          </p>
        </header>

        <ol className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {RITUAL_STEPS.map((step) => (
            <li
              key={step.id}
              className="overflow-hidden rounded-card-lg border border-black/10 bg-whim"
            >
              <div className="relative aspect-[4/3] bg-whim-warm">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full bg-void/80 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.12em] text-whim">
                  Step {step.number}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-h3 font-bold leading-tight">{step.title}</h3>
                <p className="mt-2 text-body text-void/70">{step.blurb}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <Link
            href="/ritual"
            className="inline-flex items-center gap-2 border-b border-void/40 pb-1 text-sm uppercase tracking-[0.18em] text-void transition-colors duration-200 ease-sensu hover:border-marble hover:text-marble"
          >
            Read the full ritual
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
