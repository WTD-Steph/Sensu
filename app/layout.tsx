import type { Metadata, Viewport } from "next";
import { Chakra_Petch, Noto_Serif_JP } from "next/font/google";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/links";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { jsonLdScript, organizationJsonLd, websiteJsonLd } from "@/lib/jsonld";
import "./globals.css";

// Latin display + body — Chakra Petch (brand book: same family for headlines and body).
// Weights all used: 300 (italic em), 400 (body), 500 (CTAs, nav), 600 (eyebrows,
// prices), 700 (headings).
const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-chakra",
  display: "swap",
});

// Japanese kanji fallback for the kanji collection labels (光 朧 竹 匠).
// preload: false because it's only used below the fold on collection cards.
const notoJp = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-noto-jp",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s — ${SITE_NAME}`,
  },
  description:
    "Sensu (センス) is a contemporary drinkware and tea-tools brand inspired by the quiet beauty of Japanese rituals. Crafted from glass, ceramic, bamboo and metal.",
  applicationName: SITE_NAME,
  openGraph: {
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "Contemporary drinkware and tea-tools inspired by Japanese rituals. Designed for the modern hand.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "Contemporary drinkware and tea-tools inspired by Japanese rituals.",
  },
  icons: {
    icon: "/logo/sensu-mark-dark.svg",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#F2F1F0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${chakra.variable} ${notoJp.variable}`}>
      <head>
        {/* JSON-LD: Organization + WebSite — applies site-wide */}
        <script {...jsonLdScript(organizationJsonLd())} />
        <script {...jsonLdScript(websiteJsonLd())} />
      </head>
      <body>
        <SmoothScrollProvider>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <AnnouncementBar />
          <Nav />
          {children}
          <Footer />
          <WhatsAppButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
