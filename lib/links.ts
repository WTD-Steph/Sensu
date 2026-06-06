/**
 * Outbound links and config. Anywhere a Shopee, WhatsApp, IG, or contact
 * link is needed, import from here — so the founder can swap operational
 * details in one place once they're confirmed.
 *
 * TODOs marked here are the only places I won't fabricate values.
 */

// TODO(shopee-url): replace fallback with the real storefront URL once the
// founder shares it. Until then this opens a Shopee search for "sensu".
export const SHOPEE_URL =
  "https://shopee.co.id/search?keyword=sensu";

// TODO(whatsapp-number): replace `?` with the actual WA Business number in
// international format (no +, no spaces). Currently opens a wa.me prompt with
// the prefilled message but no number — user enters it.
export const WHATSAPP_URL =
  "https://wa.me/?text=Hi%20Sensu%2C%20I%27d%20like%20to%20ask%20about...";

export const IG_URL = "https://instagram.com/madebysensu";

// TODO(wholesale-email): confirm the public-facing inbox.
export const WHOLESALE_EMAIL = "hello@madebysensu.com";

export const SITE_URL = "https://www.madebysensu.com";

export const SITE_NAME = "Sensu";
export const SITE_TAGLINE = "Rituals worth keeping.";
