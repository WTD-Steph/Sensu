import Image from "next/image";
import { formatIDR, type Product } from "@/content/products";
import { COLLECTIONS } from "@/content/collections";
import { SHOPEE_URL } from "@/lib/links";

const COLLECTION_BY_ID = Object.fromEntries(
  COLLECTIONS.map((c) => [c.id, c])
);

const COLLECTION_TINT: Record<Product["collection"], string> = {
  hikari: "text-flare",
  oboro: "text-marble",
  take: "text-void",
  takumi: "text-marble",
};

/**
 * Single product card. Hover (desktop) slides up a "Shop on Shopee"
 * pill. Each card links to the per-product `shopeeUrl` if set,
 * otherwise the global SHOPEE_URL fallback (whose value the founder
 * still needs to confirm — see lib/links.ts).
 */
export function ProductCard({ product }: { product: Product }) {
  const c = COLLECTION_BY_ID[product.collection];
  const href = product.shopeeUrl ?? SHOPEE_URL;
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-card-lg border border-black/10 bg-whim transition-transform duration-300 ease-sensu hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-whim-warm">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-sensu group-hover:scale-105"
        />

        {/* Hover Shopee CTA */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 translate-y-4 rounded-full bg-void px-4 py-2 text-[12px] font-medium uppercase tracking-[0.12em] text-whim opacity-0 transition-all duration-300 ease-sensu group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100"
          aria-label={`Shop ${product.name} on Shopee`}
        >
          Shop on Shopee ↗
        </a>

        {product.placeholder ? (
          <span className="absolute left-3 top-3 rounded-full bg-void/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-whim">
            Placeholder
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-6">
        <span
          className={`text-[14px] font-bold uppercase tracking-eyebrow ${COLLECTION_TINT[product.collection]}`}
        >
          {c?.name ?? product.collection}
        </span>
        <h3 className="text-h3 font-bold leading-tight">{product.name}</h3>
        <p className="mt-1 text-body text-void/70">{product.blurb}</p>
        <p className="mt-1 text-sm text-void/70">{product.detail}</p>
        <p className="mt-3 font-semibold tracking-wider text-void">
          {formatIDR(product.priceIDR)}
        </p>
      </div>
    </article>
  );
}
