import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Echo } from "@/components/motifs";
import { RITUAL_STEPS } from "@/content/ritual";
import { WHATSAPP_URL } from "@/lib/links";
import { breadcrumbJsonLd, howToMatchaJsonLd, jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "How to whisk matcha, the Sensu way",
  description:
    "A good cup of matcha is not difficult — it is patient. Our four-step ritual, with the tools we make.",
  alternates: { canonical: "/ritual" },
};

/**
 * /ritual — the matcha-whisking pillar page (§5.6).
 *
 * Four steps expanded with the `detail` paragraph from
 * content/ritual.ts. Each step alternates which side the photo is on so
 * the page reads with a quiet zigzag rhythm.
 */
export default function RitualPage() {
  return (
    <>
      <script {...jsonLdScript(howToMatchaJsonLd())} />
      <script
        {...jsonLdScript(
          breadcrumbJsonLd([
            { name: "Sensu", href: "/" },
            { name: "Ritual", href: "/ritual" },
          ])
        )}
      />
      <RitualPageBody />
    </>
  );
}

function RitualPageBody() {
  return (
    <main id="main" className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative isolate pt-section">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[6%] top-[8%] hidden h-14 w-80 text-marble opacity-70 md:block"
        >
          <Echo direction="out" steps={9} className="h-full w-full" />
        </div>

        <div className="mx-auto max-w-page px-gutter">
          <p className="mb-4 text-caption font-semibold uppercase tracking-eyebrow text-marble">
            Ritual · 抹茶
          </p>
          <h1 className="max-w-[20ch] text-display font-bold leading-[0.95]">
            How to whisk matcha,{" "}
            <em className="font-light italic text-marble">the Sensu way.</em>
          </h1>
          <p className="mt-8 max-w-[58ch] text-body-lg text-void/70">
            A good cup of matcha is not difficult. It is patient. The chasen
            does most of the work; you mostly need to stop hurrying. Here is
            the way we whisk, with the tools we make.
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-section">
        <div className="mx-auto max-w-page px-gutter">
          <ol className="space-y-16 md:space-y-24">
            {RITUAL_STEPS.map((step, i) => (
              <li
                key={step.id}
                className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16 ${
                  i % 2 === 1 ? "md:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="relative aspect-[4/3] overflow-hidden rounded-card-lg shadow-[0_30px_60px_-30px_rgba(22,21,20,0.25)]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </figure>
                <div>
                  <p className="text-caption uppercase tracking-eyebrow text-marble">
                    Step {step.number}
                  </p>
                  <h2 className="mt-2 text-h2 font-bold">{step.title}</h2>
                  <p className="mt-4 text-body-lg text-void/75">
                    {step.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-marble py-section text-whim">
        <div className="mx-auto max-w-page px-gutter text-center">
          <p className="text-caption uppercase tracking-eyebrow text-whim/70">
            The tools you need
          </p>
          <h2 className="mx-auto mt-3 max-w-[22ch] text-h1 font-bold leading-tight">
            Begin with the{" "}
            <em className="font-light italic text-whim/80">bundle.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-prose text-body-lg text-whim/85">
            Chasen, chawan, and matcha — everything you need to start the
            ritual. Designed to be used, not displayed.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/shop?collection=take"
              className="rounded-full bg-whim px-6 py-3.5 text-sm font-medium uppercase tracking-[0.06em] text-void transition-colors duration-200 ease-sensu hover:bg-lumen"
            >
              Browse the bundle
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-whim/60 px-6 py-3.5 text-sm font-medium uppercase tracking-[0.06em] text-whim transition-colors duration-200 ease-sensu hover:border-whim hover:bg-whim/10"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-section">
        <div className="mx-auto max-w-page px-gutter">
          <Link
            href="/story"
            className="inline-flex items-center gap-2 border-b border-void/40 pb-1 text-sm uppercase tracking-[0.18em] text-void transition-colors duration-200 ease-sensu hover:border-marble hover:text-marble"
          >
            Read our story
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
