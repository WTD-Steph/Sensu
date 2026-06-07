import Link from "next/link";
import { BrailleDecoder } from "@/components/BrailleDecoder";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Pulse } from "@/components/motifs";

/**
 * The brand's signature moment (§5.3 of the rebuild brief).
 *
 * Sits on Marble (#2B2BAD) between Story and Collections. Whim text on
 * Marble, full-bleed Pulse behind. The Braille decoder animates S–E–N–S–U
 * letter-by-letter on scroll into view.
 *
 * Single primary surface — no other primary colors mixed in (brand book
 * color rule).
 */
export function BrailleReveal() {
  return (
    <section
      id="braille"
      className="relative isolate overflow-hidden bg-marble py-section text-whim"
    >
      {/* Pulse motif backdrop — always Whim per brand book */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Pulse
          direction="horizontal"
          className="absolute left-[-6%] top-[18%] w-[38%] min-w-[320px] opacity-80"
        />
        <Pulse
          direction="vertical"
          className="absolute bottom-[-4%] right-[6%] w-[7%] min-w-[64px] opacity-60"
        />
        <div
          aria-hidden="true"
          className="absolute right-[14%] top-[22%] h-12 w-12 rounded-full bg-whim opacity-50 motion-safe:animate-breathe"
        />
      </div>

      <div className="relative mx-auto max-w-page px-gutter text-center">
        <Eyebrow color="whim-dim" className="mb-4">
          sensu · noun · センス
        </Eyebrow>

        <h2 className="mx-auto max-w-[14ch] text-display font-bold leading-[1.02]">
          Sense, written{" "}
          <em className="font-light italic text-whim/80">in dots.</em>
        </h2>

        {/* The interactive Braille decoder */}
        <div className="mx-auto mt-12 flex justify-center">
          <BrailleDecoder
            word="sensu"
            cellSize={56}
            cellGap={40}
            dotColor="#F2F1F0"
            reveal
            letterStagger={0.22}
            className="h-36 w-auto md:h-48"
            ariaLabel="The word sensu, written in 6-dot Braille"
          />
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-5 text-left text-body-lg text-whim/85 md:text-center">
          <p>
            <strong className="text-whim">Sensu</strong> means taste, intuition,
            refined sense. It is the quiet confidence in what feels right.
          </p>
          <p>
            Our wordmark is written in <strong className="text-whim">Braille</strong>
            {" "}— a tactile script that turns reading into a heightened sense.
            Each piece we make is an invitation to read the world through
            touch, light, and stillness.
          </p>
          <p>
            The same way Braille translates letters into touch, we translate
            ritual into objects: cups, whisks, bowls, trays — each crafted to
            slow the morning down.
          </p>
        </div>

        <div className="mt-12">
          <Link
            href="/story"
            className="inline-flex items-center gap-2 border-b border-whim/40 pb-1 text-sm uppercase tracking-[0.18em] text-whim transition-colors duration-200 ease-sensu hover:border-whim hover:text-lumen"
          >
            Read the full story
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
