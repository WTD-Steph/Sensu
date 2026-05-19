import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { BrailleReveal } from "@/components/sections/BrailleReveal";
import { Collections } from "@/components/sections/Collections";
import { Featured } from "@/components/sections/Featured";
import { featuredProductsJsonLd, jsonLdScript } from "@/lib/jsonld";

/**
 * Home one-pager — composed of section components.
 *
 * Order matches §5 of the rebuild brief. The deeper-in-the-page sections
 * (RitualTeaser, SensuCircle, Newsletter) are dynamically imported so
 * their JS (framer-motion variants etc.) doesn't ship in the initial
 * bundle and the hero LCP can paint sooner.
 */
const RitualTeaser = dynamic(() =>
  import("@/components/sections/RitualTeaser").then((m) => m.RitualTeaser)
);
const SensuCircle = dynamic(() =>
  import("@/components/sections/SensuCircle").then((m) => m.SensuCircle)
);
const Newsletter = dynamic(() =>
  import("@/components/sections/Newsletter").then((m) => m.Newsletter)
);

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
