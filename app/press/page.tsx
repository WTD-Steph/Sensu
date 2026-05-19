import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press kit",
  description: "Sensu press kit — logos, brand book extracts, fact sheet.",
};

export default function PressPage() {
  return (
    <main id="main" className="mx-auto max-w-page px-gutter py-section">
      <p className="mb-4 text-caption uppercase tracking-eyebrow text-marble">
        Press kit
      </p>
      <h1 className="text-h1 font-bold">
        For press,{" "}
        <em className="font-light italic text-marble">stockists,</em> and friends.
      </h1>
      <p className="mt-6 max-w-prose text-body-lg text-void/70">
        Downloadable logos, brand book extract, and fact sheet — landing in
        Phase 3.
      </p>
    </main>
  );
}
