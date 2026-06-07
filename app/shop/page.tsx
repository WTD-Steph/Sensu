import type { Metadata } from "next";
import { CATALOG, getProductsByCollection } from "@/content/catalog";
import { COLLECTIONS, type CollectionId } from "@/content/collections";
import { ProductCatalogCard } from "@/components/ProductCatalogCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonld";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "The Sensu catalog — glass, ceramic, bamboo, steel, wood. Six collections of contemporary drinkware and tea tools.",
  alternates: { canonical: "/shop" },
};

const COLLECTION_IDS = new Set<CollectionId>(
  COLLECTIONS.map((c) => c.id),
);

function isCollectionId(value: string | undefined): value is CollectionId {
  return value !== undefined && COLLECTION_IDS.has(value as CollectionId);
}

export default function ShopPage({
  searchParams,
}: {
  searchParams: { collection?: string };
}) {
  const raw = searchParams.collection;
  const active = isCollectionId(raw) ? raw : null;
  const meta = active ? COLLECTIONS.find((c) => c.id === active) : null;

  const products = active ? getProductsByCollection(active) : CATALOG;

  return (
    <>
      <script
        {...jsonLdScript(
          breadcrumbJsonLd([
            { name: "Sensu", href: "/" },
            { name: "Shop", href: "/shop" },
            ...(meta
              ? [{ name: meta.name, href: `/shop?collection=${meta.id}` }]
              : []),
          ]),
        )}
      />
      <main id="main" className="overflow-x-hidden">
        {/* HERO */}
        <section className="pt-section">
          <div className="mx-auto max-w-page px-gutter">
            <Eyebrow className="mb-4">
              Shop · 店
            </Eyebrow>
            {meta ? (
              <h1 className="max-w-[20ch] text-display font-bold leading-[0.95]">
                {meta.name}{" "}
                <em className="font-light italic text-marble">
                  {meta.kanji}
                </em>
              </h1>
            ) : (
              <h1 className="max-w-[18ch] text-display font-bold leading-[0.95]">
                Every piece,{" "}
                <em className="font-light italic text-marble">in one place.</em>
              </h1>
            )}
            <p className="mt-6 max-w-[58ch] text-body-lg text-void/70">
              {meta?.description ??
                "Six collections, forty-seven pieces. Filter by material to find what fits your morning."}
            </p>
          </div>
        </section>

        {/* FILTER */}
        <section className="pt-12">
          <div className="mx-auto max-w-page px-gutter">
            <CategoryFilter active={active} total={CATALOG.length} />
          </div>
        </section>

        {/* GRID */}
        <section className="py-section">
          <div className="mx-auto max-w-page px-gutter">
            {products.length === 0 ? (
              <EmptyState />
            ) : (
              <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((p) => (
                  <li key={p.slug}>
                    <ProductCatalogCard product={p} />
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-12 max-w-prose text-sm text-void/55">
              Many pieces are listed without final photography or pricing
              while the line is being readied for launch. Tap any product
              for the gallery — message us on WhatsApp for orders and
              custom inquiries.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

function EmptyState() {
  return (
    <div className="rounded-card-lg border border-black/10 bg-whim-warm px-8 py-16 text-center">
      <p className="text-h3 font-bold text-void">
        Nothing here{" "}
        <em className="font-light italic text-marble">yet.</em>
      </p>
      <p className="mx-auto mt-3 max-w-prose text-body text-void/70">
        This collection is being shaped. Try another filter or browse
        the full catalog.
      </p>
    </div>
  );
}
