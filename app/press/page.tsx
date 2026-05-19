import type { Metadata } from "next";
import Link from "next/link";
import { Orbit } from "@/components/motifs";
import { WHOLESALE_EMAIL } from "@/lib/links";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Press kit",
  description:
    "Sensu press kit — logos, brand book, fact sheet, and a place to reach us.",
  alternates: { canonical: "/press" },
};

/* eslint-disable @next/next/no-img-element */

const FACTS = [
  { label: "Founded", value: "2025" },
  { label: "Categories", value: "Drinkware · Tea tools · Tableware" },
  { label: "Material lines", value: "4 — Hikari · Oboro · Take · Takumi" },
  { label: "Pieces in line", value: "30+ handcrafted" },
];

const ASSETS = [
  {
    label: "Wordmark (SVG)",
    href: "/logo/sensu-logotype-dark.svg",
    sub: "Void on light. Use as the primary mark.",
  },
  {
    label: "Wordmark — light (SVG)",
    href: "/logo/sensu-logotype-light.svg",
    sub: "Whim on dark. Use on Void or Marble surfaces.",
  },
  {
    label: "Braille mark (SVG)",
    href: "/logo/sensu-mark-dark.svg",
    sub: "The secondary signature. Void variant.",
  },
  {
    label: "Braille mark — light (SVG)",
    href: "/logo/sensu-mark-light.svg",
    sub: "Whim variant for dark surfaces.",
  },
];

export default function PressPage() {
  return (
    <>
      <script
        {...jsonLdScript(
          breadcrumbJsonLd([
            { name: "Sensu", href: "/" },
            { name: "Press kit", href: "/press" },
          ])
        )}
      />
      <PressBody />
    </>
  );
}

function PressBody() {
  return (
    <main id="main" className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative isolate pt-section">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[6%] top-[10%] hidden h-40 w-40 text-marble opacity-60 md:block"
        >
          <Orbit variant="grid" className="h-full w-full" />
        </div>

        <div className="mx-auto max-w-page px-gutter">
          <p className="mb-4 text-caption font-semibold uppercase tracking-eyebrow text-marble">
            Press kit · プレス
          </p>
          <h1 className="max-w-[22ch] text-display font-bold leading-[0.95]">
            For press,{" "}
            <em className="font-light italic text-marble">stockists,</em> and
            friends.
          </h1>
          <p className="mt-8 max-w-[58ch] text-body-lg text-void/70">
            Logos, brand details, and a contact. If you&rsquo;re writing about
            Sensu, planning to stock the line, or thinking of a
            collaboration — we&rsquo;d love to hear from you.
          </p>
        </div>
      </section>

      {/* FACTS */}
      <section className="py-section">
        <div className="mx-auto max-w-page px-gutter">
          <h2 className="mb-8 text-h2 font-bold">
            Fact{" "}
            <em className="font-light italic text-marble">sheet.</em>
          </h2>
          <dl className="grid grid-cols-1 gap-x-12 gap-y-6 border-t border-black/10 pt-8 md:grid-cols-2">
            {FACTS.map((f) => (
              <div key={f.label} className="grid grid-cols-[200px_1fr] gap-6 border-b border-black/10 pb-6">
                <dt className="text-caption uppercase tracking-eyebrow text-void/55">
                  {f.label}
                </dt>
                <dd className="text-body-lg text-void">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ASSETS */}
      <section className="bg-whim-warm py-section">
        <div className="mx-auto max-w-page px-gutter">
          <h2 className="mb-2 text-h2 font-bold">
            Logos &amp;{" "}
            <em className="font-light italic text-marble">marks.</em>
          </h2>
          <p className="max-w-prose text-body-lg text-void/70">
            SVGs. Please don&rsquo;t alter, crop, recolor, or distort. See the
            Brand Book for spacing and minimum-size rules.
          </p>

          <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {ASSETS.map((a) => (
              <li
                key={a.href}
                className="flex flex-col items-start gap-4 rounded-card-lg border border-black/10 bg-whim p-6 md:flex-row md:items-center"
              >
                <div className="flex h-20 w-32 shrink-0 items-center justify-center rounded-card bg-whim-warm">
                  <img
                    src={a.href}
                    alt=""
                    aria-hidden="true"
                    width={120}
                    height={48}
                    className={
                      a.href.includes("light")
                        ? "h-12 w-auto invert-0 brightness-50"
                        : "h-12 w-auto"
                    }
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-h3 font-bold">{a.label}</h3>
                  <p className="mt-1 text-body text-void/70">{a.sub}</p>
                </div>
                <a
                  href={a.href}
                  download
                  className="rounded-full border border-void px-5 py-2.5 text-[13px] font-medium uppercase tracking-[0.12em] text-void transition-colors duration-200 ease-sensu hover:bg-void hover:text-whim"
                >
                  Download
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-void/60">
            {/* TODO(press-zip): host a single .zip with all assets + the Brand Book PDF and link it here. */}
            A full press-kit ZIP (logos, Brand Book PDF, photography) is coming
            soon.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-section">
        <div className="mx-auto max-w-page px-gutter">
          <h2 className="mb-4 text-h2 font-bold">
            Drop us{" "}
            <em className="font-light italic text-marble">a line.</em>
          </h2>
          <p className="mb-8 max-w-prose text-body-lg text-void/70">
            For press inquiries, wholesale, and collaborations.
          </p>
          <a
            href={`mailto:${WHOLESALE_EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full bg-void px-6 py-3.5 text-sm font-medium uppercase tracking-[0.08em] text-whim transition-colors duration-200 ease-sensu hover:bg-marble"
          >
            {WHOLESALE_EMAIL}
            <span aria-hidden="true">↗</span>
          </a>

          <div className="mt-12">
            <Link
              href="/story"
              className="inline-flex items-center gap-2 border-b border-void/40 pb-1 text-sm uppercase tracking-[0.18em] text-void transition-colors duration-200 ease-sensu hover:border-marble hover:text-marble"
            >
              Read our story
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
