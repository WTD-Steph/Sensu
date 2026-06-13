import { ProductCatalogCard } from "@/components/ProductCatalogCard";
import { getCatalogProduct } from "@/content/catalog";
import { WHATSAPP_URL } from "@/lib/links";
import { Eyebrow } from "@/components/ui/Eyebrow";

/**
 * Featured pieces — eight hand-picked entries from the real catalog
 * spanning all four collections, rendered with the same card as /shop
 * so the homepage and the catalog share a single visual language.
 */
const FEATURED_SLUGS = [
  "hikari-3d-mountain",
  "oboro-strawberry-matcha-set",
  "take-chasen",
  "hagane-matcha-canister-sifter",
  "hikari-rain-pattern",
  "oboro-pastel-series",
  "hagane-modern-cup-saucer",
  "hikari-polkadot",
] as const;

export function Featured() {
  const products = FEATURED_SLUGS.map((slug) => getCatalogProduct(slug)).filter(
    (p): p is NonNullable<typeof p> => p !== undefined,
  );

  return (
    <section id="products" className="bg-whim py-section">
      <div className="mx-auto max-w-page px-gutter">
        <header className="mb-12 max-w-3xl">
          <Eyebrow className="mb-4">
            Product highlight · 01
          </Eyebrow>
          <h2 className="text-h2 font-bold">
            Beautifully crafted,{" "}
            <em className="font-light italic text-marble">
              a true work of art.
            </em>
          </h2>
        </header>

        <ul className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <li key={p.slug} className="flex">
              <ProductCatalogCard product={p} />
            </li>
          ))}
        </ul>

        <p className="mt-12 text-center text-body text-void/65">
          A selection from the Sensu line. Tap any piece to view the
          gallery, or{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-current text-void hover:text-marble"
          >
            message us on WhatsApp
          </a>{" "}
          for custom inquiries.
        </p>
      </div>
    </section>
  );
}
