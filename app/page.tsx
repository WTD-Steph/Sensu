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
 * Phase 4b tried dynamic-importing the deeper sections but it added
 * 0.06 CLS and 100 ms TBT (lazy chunks hydrate-and-shift). Reverted
 * to static composition; the JS bundle is small enough that the
 * trade-off doesn't pay back.
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
