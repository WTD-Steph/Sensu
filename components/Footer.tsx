import Link from "next/link";
import { BrailleDecoder } from "@/components/BrailleDecoder";
import { IG_URL, SHOPEE_URL, WHATSAPP_URL, WHOLESALE_EMAIL } from "@/lib/links";

/**
 * Footer per §5.9 of the rebuild brief.
 *
 * Top:    oversized Sensu dot-mark in Whim @ ~30% opacity.
 * Middle: four columns — Discover / Shop / Follow / About.
 * Bottom: copyright + small dot-resolves-to-Sensu mark on the right.
 */
export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-void text-whim">
      {/* Oversized backdrop mark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 flex justify-center opacity-[0.07]"
      >
        <BrailleDecoder
          word="sensu"
          cellSize={120}
          cellGap={80}
          dotColor="#F2F1F0"
          className="h-72 w-auto"
        />
      </div>

      <div className="relative mx-auto max-w-page px-gutter pb-12 pt-section">
        {/* Four columns */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <FooterCol heading="Discover">
            <FooterLink href="/story">Our story</FooterLink>
            <FooterLink href="/#collections">Collections</FooterLink>
            <FooterLink href="/ritual">Ritual</FooterLink>
            <FooterLink href="/lookbook">Lookbook</FooterLink>
          </FooterCol>

          <FooterCol heading="Shop">
            <FooterLink href={SHOPEE_URL} external>
              Shopee storefront ↗
            </FooterLink>
            <FooterLink href={WHATSAPP_URL} external>
              WhatsApp inquiry ↗
            </FooterLink>
            <FooterLink href="/#newsletter">Newsletter</FooterLink>
          </FooterCol>

          <FooterCol heading="Follow">
            <FooterLink href={IG_URL} external>
              Instagram ↗
            </FooterLink>
            <FooterLink href="/#circle">#SensuCircle</FooterLink>
          </FooterCol>

          <FooterCol heading="About">
            <FooterLink href={`mailto:${WHOLESALE_EMAIL}`} external>
              Wholesale & press
            </FooterLink>
            <FooterLink href="/press">Press kit</FooterLink>
          </FooterCol>
        </div>

        {/* Bottom strip */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-whim/15 pt-8 text-[13px] text-whim/60 md:flex-row md:items-center">
          <div>
            <p className="text-whim">Sensu · センス</p>
            <p>Japanese-inspired drinkware, made for the modern hand.</p>
            <p>© 2025 Sensu · All rights reserved. Made in Indonesia.</p>
          </div>

          {/* Small Braille reading "sensu" */}
          <div className="opacity-80">
            <BrailleDecoder
              word="sensu"
              cellSize={14}
              cellGap={10}
              dotColor="#F2F1F0"
              className="h-7"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2.5">
      <h3 className="mb-1 text-caption uppercase tracking-eyebrow text-whim/55">
        {heading}
      </h3>
      {children}
    </div>
  );
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const classes =
    "text-[15px] text-whim/85 transition-colors duration-200 ease-sensu hover:text-lumen";
  if (external) {
    return (
      <a
        href={href}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
