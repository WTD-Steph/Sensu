import { InstagramGrid } from "@/components/InstagramGrid";
import { Loop } from "@/components/motifs";
import { IG_URL } from "@/lib/links";

/**
 * Sensu Circle — §5.7 of the brief. Community section anchored on
 * Instagram. Loop motif behind, low opacity; oversized #SensuCircle
 * hashtag set in italic Chakra Petch on the right.
 */
export function SensuCircle() {
  return (
    <section
      id="circle"
      className="relative isolate overflow-hidden bg-whim-warm py-section"
    >
      {/* Loop motif backdrop — Whim variant on warm Whim, very subtle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-12 h-44 w-[28rem] text-marble opacity-15"
      >
        <Loop className="h-full w-full" />
      </div>

      <div className="relative mx-auto max-w-page px-gutter">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="mb-4 text-caption font-semibold uppercase tracking-eyebrow text-marble">
              Sensu Circle
            </p>
            <h2 className="text-h2 font-bold">
              Where movement{" "}
              <em className="font-light italic text-marble">
                becomes mindfulness.
              </em>
            </h2>
            <p className="mt-4 max-w-prose text-body-lg text-void/70">
              Follow{" "}
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-current text-void hover:text-marble"
              >
                @madebysensu
              </a>{" "}
              for slow mornings, new pieces, and the small moments between.
            </p>
          </div>

          {/* Oversized italic hashtag */}
          <p
            aria-hidden="true"
            className="select-none whitespace-nowrap text-right text-h1 font-light italic text-marble/70 md:text-display"
          >
            #SensuCircle
          </p>
        </div>

        <div className="mt-12">
          <InstagramGrid limit={6} />
        </div>

        <div className="mt-10 text-center">
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-b border-void/40 pb-1 text-sm uppercase tracking-[0.18em] text-void transition-colors duration-200 ease-sensu hover:border-marble hover:text-marble"
          >
            Follow on Instagram
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
