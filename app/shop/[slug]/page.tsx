import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  CATALOG,
  getCatalogProduct,
  getProductsByCollection,
} from "@/content/catalog";
import { COLLECTIONS } from "@/content/collections";
import { formatUSD } from "@/content/products";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductCatalogCard } from "@/components/ProductCatalogCard";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/links";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonld";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function generateStaticParams() {
  return CATALOG.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getCatalogProduct(params.slug);
  if (!product) return { title: "Not found" };
  return {
    title: product.subline
      ? `${product.name} — ${product.subline}`
      : product.name,
    description: product.description ?? product.detail,
    alternates: { canonical: `/shop/${product.slug}` },
  };
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getCatalogProduct(params.slug);
  if (!product) notFound();
  const collection = COLLECTIONS.find((c) => c.id === product.collection);
  if (!collection) notFound();

  const related = getProductsByCollection(product.collection)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  return (
    <>
      <script
        {...jsonLdScript(
          breadcrumbJsonLd([
            { name: "Sensu", href: "/" },
            { name: "Shop", href: "/shop" },
            { name: collection.name, href: `/shop?collection=${collection.id}` },
            { name: product.name, href: `/shop/${product.slug}` },
          ]),
        )}
      />
      <main id="main" className="overflow-x-hidden">
        <article className="pt-section">
          <div className="mx-auto max-w-page px-gutter">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-2 text-[12px] uppercase tracking-[0.16em] text-void/55"
            >
              <Link href="/shop" className="hover:text-marble">Shop</Link>
              <span aria-hidden="true">·</span>
              <Link
                href={`/shop?collection=${collection.id}`}
                className="hover:text-marble"
              >
                {collection.name}
              </Link>
              <span aria-hidden="true">·</span>
              <span className="text-void">{product.name}</span>
            </nav>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Gallery */}
              <ProductGallery
                images={product.images}
                name={product.name}
                subline={product.subline}
                collection={product.collection}
              />

              {/* Meta */}
              <div className="flex flex-col">
                <Eyebrow>
                  {collection.name}{" "}
                  <span className="font-jp opacity-70">
                    {collection.kanji}
                  </span>
                  {product.subline ? (
                    <span className="text-void/55">
                      {" "}· {product.subline}
                    </span>
                  ) : null}
                </Eyebrow>
                <h1 className="mt-3 text-h1 font-bold leading-tight">
                  {product.name}
                </h1>
                <p className="mt-4 text-body-lg text-void/70">
                  {product.description ?? product.detail}
                </p>

                <dl className="mt-8 grid grid-cols-[120px_1fr] gap-x-6 gap-y-3 border-t border-black/10 pt-6 text-[14px]">
                  <Eyebrow as="dt" weight="regular" color="void-dim">Material</Eyebrow>
                  <dd className="text-void">{product.detail}</dd>
                  <Eyebrow as="dt" weight="regular" color="void-dim">Collection</Eyebrow>
                  <dd className="text-void">
                    <Link
                      href={`/shop?collection=${collection.id}`}
                      className="border-b border-current hover:text-marble"
                    >
                      {collection.name}
                    </Link>{" "}
                    <span className="font-jp text-void/55">{collection.kanji}</span>
                  </dd>
                  <Eyebrow as="dt" weight="regular" color="void-dim">Price</Eyebrow>
                  <dd className="text-void">
                    {product.priceUSD != null ? (
                      <span className="font-semibold">{formatUSD(product.priceUSD)}</span>
                    ) : (
                      <span className="text-void/55">Coming soon</span>
                    )}
                  </dd>
                </dl>

                {/* CTAs */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    href={WHATSAPP_URL}
                    variant="primary"
                    trailingArrow="external"
                  >
                    Inquire on WhatsApp
                  </Button>
                  <Button
                    href={`/shop?collection=${collection.id}`}
                    variant="secondary"
                  >
                    More from {collection.name}
                  </Button>
                </div>

                {product.placeholder ? (
                  <p className="mt-6 text-[12px] uppercase tracking-[0.2em] text-void/55">
                    Photography &amp; final pricing landing soon.
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </article>

        {/* Related */}
        {related.length > 0 ? (
          <section className="py-section">
            <div className="mx-auto max-w-page px-gutter">
              <header className="mb-8">
                <Eyebrow>
                  More from {collection.name}
                </Eyebrow>
                <h2 className="mt-2 text-h2 font-bold">
                  Companion{" "}
                  <em className="font-light italic text-marble">pieces.</em>
                </h2>
              </header>
              <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {related.map((r) => (
                  <li key={r.slug}>
                    <ProductCatalogCard product={r} />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}
      </main>
    </>
  );
}
