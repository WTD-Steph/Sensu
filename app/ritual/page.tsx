import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to whisk matcha, the Sensu way",
  description:
    "A good cup of matcha is not difficult — it is patient. Our four-step ritual, with the tools we make.",
};

export default function RitualPage() {
  return (
    <main id="main" className="mx-auto max-w-page px-gutter py-section">
      <p className="mb-4 text-caption uppercase tracking-eyebrow text-marble">
        Ritual
      </p>
      <h1 className="text-h1 font-bold">
        How to whisk matcha,{" "}
        <em className="font-light italic text-marble">the Sensu way.</em>
      </h1>
      <p className="mt-6 max-w-prose text-body-lg text-void/70">
        This pillar page is being rebuilt. Phase 3 expands it with four
        deep-dive steps and a closing CTA.
      </p>
    </main>
  );
}
