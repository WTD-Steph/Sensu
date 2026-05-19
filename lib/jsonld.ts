/**
 * JSON-LD builders. Return plain objects — call `JSON.stringify` and drop
 * into a `<script type="application/ld+json">` tag.
 *
 * Validates against https://search.google.com/test/rich-results.
 */
import { PRODUCTS, formatIDR, type Product } from "@/content/products";
import { RITUAL_STEPS } from "@/content/ritual";
import { IG_URL, SITE_NAME, SITE_TAGLINE, SITE_URL, WHOLESALE_EMAIL } from "./links";

const LOGO_URL = `${SITE_URL}/logo/sensu-logotype-dark.svg`;
const MARK_URL = `${SITE_URL}/logo/sensu-mark-dark.svg`;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: "センス",
    description:
      "Contemporary drinkware and tea-tools brand inspired by the quiet beauty of Japanese rituals.",
    url: SITE_URL,
    logo: LOGO_URL,
    image: MARK_URL,
    slogan: SITE_TAGLINE,
    foundingDate: "2025",
    sameAs: [IG_URL],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: WHOLESALE_EMAIL,
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "en",
  };
}

function productJsonLd(p: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.blurb,
    image: `${SITE_URL}${p.image}`,
    brand: { "@type": "Brand", name: SITE_NAME },
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      price: p.priceIDR,
      availability: "https://schema.org/InStock",
      url: p.shopeeUrl ?? SITE_URL,
    },
  };
}

/** Returns a single ItemList of all featured products. */
export function featuredProductsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: PRODUCTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: productJsonLd(p),
    })),
  };
}

export function howToMatchaJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to whisk matcha, the Sensu way",
    description:
      "A four-step matcha ritual: warm the chawan, sift the matcha, add water, whisk.",
    image: `${SITE_URL}/img/social/matcha-ritual.jpg`,
    totalTime: "PT5M",
    supply: [
      { "@type": "HowToSupply", name: "Matcha powder" },
      { "@type": "HowToSupply", name: "Hot water (70–80°C)" },
    ],
    tool: [
      { "@type": "HowToTool", name: "Chawan (matcha bowl)" },
      { "@type": "HowToTool", name: "Chasen (bamboo whisk)" },
      { "@type": "HowToTool", name: "Fine sieve" },
    ],
    step: RITUAL_STEPS.map((s) => ({
      "@type": "HowToStep",
      position: Number(s.number),
      name: s.title.replace(/\.$/, ""),
      text: s.detail,
      image: `${SITE_URL}${s.image}`,
    })),
  };
}

export function breadcrumbJsonLd(
  items: ReadonlyArray<{ name: string; href: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.href}`,
    })),
  };
}

/** Helper: render the script tag for a JSON-LD object. */
export function jsonLdScript(data: object) {
  return {
    type: "application/ld+json" as const,
    dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
  };
}

/** Tiny helper kept for readability — formats an IDR price for the offers. */
export const _formatIDR = formatIDR;
