import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our story",
  description:
    "The Sensu story — refined sense, written in Braille. Welcome to the Sensu Circle.",
};

export default function StoryPage() {
  return (
    <main id="main" className="mx-auto max-w-page px-gutter py-section">
      <p className="mb-4 text-caption uppercase tracking-eyebrow text-marble">
        Our story
      </p>
      <h1 className="text-h1 font-bold">
        Sensu was born from a quiet{" "}
        <em className="font-light italic text-marble">question.</em>
      </h1>
      <p className="mt-6 max-w-prose text-body-lg text-void/70">
        This page is being rebuilt. Phase 3 expands it with the long-form
        brand story.
      </p>
    </main>
  );
}
