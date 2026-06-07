"use client";

import Image from "next/image";
import { useState } from "react";
import { ProductPlaceholder } from "./ProductPlaceholder";
import type { CollectionId } from "@/content/collections";

type ProductGalleryProps = {
  /** Image paths under /public. Empty array shows the placeholder. */
  images: ReadonlyArray<string>;
  /** Product name for alt text + placeholder. */
  name: string;
  /** Optional subline for placeholder. */
  subline?: string;
  /** Collection — drives the placeholder surface colour. */
  collection: CollectionId;
};

/**
 * Product photo gallery — main image on top, scrollable thumbnail strip
 * below. Tapping a thumbnail swaps the main image; the active thumbnail
 * gets a Marble ring.
 *
 * When the catalog still has empty `images[]` we show the brand-styled
 * <ProductPlaceholder /> instead. C3 fills the array.
 */
export function ProductGallery({
  images,
  name,
  subline,
  collection,
}: ProductGalleryProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (images.length === 0) {
    return (
      <div className="aspect-square overflow-hidden rounded-card-lg">
        <ProductPlaceholder
          collection={collection}
          name={name}
          subline={subline}
        />
      </div>
    );
  }

  const active = images[activeIdx];

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-square overflow-hidden rounded-card-lg bg-whim-warm">
        <Image
          key={active}
          src={active}
          alt={`${name}${subline ? ` — ${subline}` : ""}`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          priority
        />
      </div>

      {images.length > 1 ? (
        <ul className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
          {images.map((src, i) => (
            <li key={src} className="shrink-0">
              <button
                type="button"
                onClick={() => setActiveIdx(i)}
                aria-label={`View image ${i + 1} of ${images.length}`}
                aria-pressed={i === activeIdx}
                className={`relative block h-20 w-20 overflow-hidden rounded-card border-2 transition-colors duration-200 ease-sensu ${
                  i === activeIdx
                    ? "border-marble"
                    : "border-transparent hover:border-black/15"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
