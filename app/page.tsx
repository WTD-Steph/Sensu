import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { BrailleReveal } from "@/components/sections/BrailleReveal";
import { Collections } from "@/components/sections/Collections";
import { Featured } from "@/components/sections/Featured";
import { RitualTeaser } from "@/components/sections/RitualTeaser";
import { SensuCircle } from "@/components/sections/SensuCircle";
import { Newsletter } from "@/components/sections/Newsletter";
import { featuredProductsJsonLd, jsonLdScript } from "@/lib/jsonld";

/**
 * Home one-pager — composed of section components.
 *
 * Order matches §5 of the rebuild brief:
 *   Hero → Story → Braille Reveal → Collections → Featured → Ritual →
 *   Sensu Circle → Newsletter
 */
export default function HomePage() {
  return (
    <>
      <script {...jsonLdScript(featuredProductsJsonLd())} />
      <main id="main" className="overflow-x-hidden">
        <Hero />
        <Story />
        <BrailleReveal />
        <Collections />
        <Featured />
        <RitualTeaser />
        <SensuCircle />
        <Newsletter />
      </main>
    </>
  );
}
