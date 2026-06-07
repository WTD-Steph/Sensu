/**
 * Outbound links and config. Operational URLs (WhatsApp, IG, contact
 * inbox) live here so the founder can swap them in one place once they
 * are confirmed.
 */

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
