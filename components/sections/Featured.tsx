import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/content/products";
import { WHATSAPP_URL } from "@/lib/links";
import { Eyebrow } from "@/components/ui/Eyebrow";

/**
 * Featured pieces. Renders up to 8 entries from content/products.ts.
 * Each card links into /shop?collection={c} so clicks drop the user
 * into the filtered catalog. C4 will swap this for a real catalog
 * picker.
 */
export function Featured() {
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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PRODUCTS.slice(0, 8).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <p className="mt-12 text-center text-body text-void/65">
          A selection from the Sensu line. Tap any piece to browse the
          collection, or{" "}
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
