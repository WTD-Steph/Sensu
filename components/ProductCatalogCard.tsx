import Image from "next/image";
import Link from "next/link";
import { COLLECTIONS } from "@/content/collections";
import { formatUSD } from "@/content/products";
import { ProductPlaceholder } from "./ProductPlaceholder";
import type { CatalogProduct } from "@/content/catalog";

/**
 * Listing card for /shop. Renders the first image if available; falls
 * back to `<ProductPlaceholder />` otherwise so the grid never shows
 * broken visuals while C3 is still pulling photography.
 *
 * The clickable element is the whole card via a wrapping <Link>.
 */
export function ProductCatalogCard({ product }: { product: CatalogProduct }) {
  const collection = COLLECTIONS.find((c) => c.id === product.collection);
  const heroImage = product.images[0];
  const href = `/shop/${product.slug}`;

  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-card-lg border border-black/10 bg-whim transition-transform duration-300 ease-sensu hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(22,21,20,0.18)]"
    >
      <div className="relative aspect-square overflow-hidden">
        {heroImage ? (
          <Image
            src={heroImage}
            alt={`${product.name}${product.subline ? ` — ${product.subline}` : ""}`}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
            className="object-cover transition-transform duration-500 ease-sensu group-hover:scale-105"
          />
        ) : (
          <ProductPlaceholder
            collection={product.collection}
            name={product.name}
            subline={product.subline}
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-5">
        <p className="text-[12px] uppercase tracking-eyebrow text-void/60">
          {collection?.name ?? product.collection}
          {product.subline ? <span className="text-void/40"> · {product.subline}</span> : null}
        </p>
        <h3 className="text-card-title font-bold text-void">
          {product.name}
        </h3>
        <p className="mt-1 text-[13px] text-void/70">{product.detail}</p>
        <p className="mt-auto pt-4 text-[15px] font-semibold tracking-wider text-void">
          {product.priceUSD != null ? (
            <>
              <span>{formatUSD(product.priceUSD)}</span>
              <span className="ml-1 align-middle text-[10px] font-medium uppercase tracking-eyebrow text-void/45">
                est.
              </span>
            </>
          ) : (
            <span className="text-void/55">Coming soon</span>
          )}
        </p>
      </div>
    </Link>
  );
}
