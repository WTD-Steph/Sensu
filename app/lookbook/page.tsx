import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lookbook",
  description: "Sensu lookbook — a visual showcase of the line.",
};

export default function LookbookPage() {
  return (
    <main id="main" className="mx-auto max-w-page px-gutter py-section">
      <p className="mb-4 text-caption uppercase tracking-eyebrow text-marble">
        Lookbook
      </p>
      <h1 className="text-h1 font-bold">
        Quiet pieces,{" "}
        <em className="font-light italic text-marble">in their own light.</em>
      </h1>
      <p className="mt-6 max-w-prose text-body-lg text-void/70">
        Gallery rebuild is in flight. Phase 3 lands the full visual showcase.
      </p>
    </main>
  );
}
