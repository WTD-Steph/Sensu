import Image from "next/image";
import Link from "next/link";
import { formatUSD, type Product } from "@/content/products";
import { COLLECTIONS } from "@/content/collections";

const COLLECTION_BY_ID = Object.fromEntries(
  COLLECTIONS.map((c) => [c.id, c]),
);

// Colour identity for each collection chip. Rendered as a 9px dot
// next to the (always-Void) text — keeps the brand colour cue without
// running into AA contrast issues that text-flare on Whim has.
const COLLECTION_DOT: Record<Product["collection"], string> = {
  hikari: "bg-flare",
  oboro: "bg-marble",
  take: "bg-void",
  hagane: "bg-void-soft",
};

/**
 * Featured-section product card. Wraps the whole card in a Link to
 * /shop (filtered by the product's collection) so clicks land in the
 * catalog. C4 will replace this component with one that maps directly
 * to /shop/{slug} once Featured pulls from the real catalog.
 */
export function ProductCard({ product }: { product: Product }) {
  const c = COLLECTION_BY_ID[product.collection];
  return (
    <Link
      href={`/shop?collection=${product.collection}`}
      className="group relative flex flex-col overflow-hidden rounded-card-lg border border-black/10 bg-whim transition-transform duration-300 ease-sensu hover:-translate-y-1"
    >
      <div className="relative aspect-square overflow-hidden bg-whim-warm">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-sensu group-hover:scale-105"
        />

        {product.placeholder ? (
          <span className="absolute left-3 top-3 rounded-full bg-void/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-whim">
            Placeholder
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-6">
        <span className="inline-flex items-center gap-2 text-[14px] font-bold uppercase tracking-eyebrow text-void">
          <span
            aria-hidden="true"
            className={`inline-block h-2 w-2 rounded-full ${COLLECTION_DOT[product.collection]}`}
          />
          {c?.name ?? product.collection}
        </span>
        <h3 className="text-h3 font-bold leading-tight">{product.name}</h3>
        <p className="mt-1 text-body text-void/70">{product.blurb}</p>
        <p className="mt-1 text-sm text-void/70">{product.detail}</p>
        <p className="mt-3 font-semibold tracking-wider text-void">
          {formatUSD(product.priceUSD)}
        </p>
      </div>
    </Link>
  );
}
