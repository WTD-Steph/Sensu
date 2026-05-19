import Image from "next/image";
import type { Metadata } from "next";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Lookbook",
  description:
    "A visual showcase of Sensu — quiet pieces in their own light.",
  alternates: { canonical: "/lookbook" },
};

/**
 * /lookbook — visual showcase. Uses the existing on-brand imagery from
 * the brand zip (product shots, BTS, and detail crops). Layout is an
 * editorial masonry-style grid with each image landing in a slightly
 * different aspect to keep the rhythm alive.
 *
 * The brief said "no navigation chrome." Pragmatic call: we keep the
 * shared nav so a user can leave; the rest of the page is image-led
 * with minimal type.
 */
const TILES: ReadonlyArray<{
  src: string;
  alt: string;
  caption: string;
  /** Optional grid span — bigger tiles break the rhythm. */
  span?: "col-2" | "row-2";
}> = [
  {
    src: "/img/social/matcha-ritual.jpg",
    alt: "Matcha being whisked in a ceramic bowl",
    caption: "Daily ritual",
    span: "row-2",
  },
  {
    src: "/img/social/bts-clay.jpg",
    alt: "Hands shaping clay",
    caption: "Behind the scene · OBORO",
  },
  {
    src: "/img/products/hikari-cup.jpg",
    alt: "Hikari clear glass cup",
    caption: "HIKARI · Chawan",
  },
  {
    src: "/img/social/bts-tray.jpg",
    alt: "Tea preparation tray with iron kettle and bamboo whisk",
    caption: "Studio table",
  },
  {
    src: "/img/products/oboro-senchawan.jpg",
    alt: "Oboro Senchawan ceramic tea cup",
    caption: "OBORO · Senchawan",
  },
  {
    src: "/img/social/bundle.jpg",
    alt: "Bundle tea set",
    caption: "TAKE · Bundle",
  },
  {
    src: "/img/social/tools-tray.jpg",
    alt: "Tools laid out on a wooden tray",
    caption: "Tools",
    span: "col-2",
  },
];

const SPAN_CLASSES: Record<NonNullable<(typeof TILES)[number]["span"]>, string> = {
  "col-2": "md:col-span-2",
  "row-2": "md:row-span-2",
};

export default function LookbookPage() {
  return (
    <>
      <script
        {...jsonLdScript(
          breadcrumbJsonLd([
            { name: "Sensu", href: "/" },
            { name: "Lookbook", href: "/lookbook" },
          ])
        )}
      />
      <LookbookBody />
    </>
  );
}

function LookbookBody() {
  return (
    <main id="main" className="overflow-x-hidden">
      {/* HERO */}
      <section className="pt-section">
        <div className="mx-auto max-w-page px-gutter">
          <p className="mb-4 text-caption font-semibold uppercase tracking-eyebrow text-marble">
            Lookbook · 写真集
          </p>
          <h1 className="max-w-[18ch] text-display font-bold leading-[0.95]">
            Quiet pieces,{" "}
            <em className="font-light italic text-marble">
              in their own light.
            </em>
          </h1>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-section">
        <div className="mx-auto max-w-page px-gutter">
          <ul className="grid auto-rows-[280px] grid-cols-1 gap-3 md:auto-rows-[320px] md:grid-cols-3">
            {TILES.map((tile, i) => (
              <li
                key={`${tile.src}-${i}`}
                className={`relative overflow-hidden rounded-card-lg bg-whim-warm ${
                  tile.span ? SPAN_CLASSES[tile.span] : ""
                }`}
              >
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                  priority={i < 2}
                />
                <figcaption className="absolute bottom-3 left-3 rounded-full bg-void/75 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.14em] text-whim">
                  {tile.caption}
                </figcaption>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
