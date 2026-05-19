import type { Metadata } from "next";
import { Orbit, Echo, Syntax, Hatch, Loop, Pulse } from "@/components/motifs";
import { BrailleDecoder } from "@/components/BrailleDecoder";

/**
 * Dev-only preview route for the six brand motifs + BrailleDecoder.
 * Visit /dev/motifs to QA visual fidelity against the Brand Book.
 *
 * Hidden from search engines and not surfaced in the sitemap.
 */
export const metadata: Metadata = {
  title: "Motifs — dev preview",
  robots: { index: false, follow: false },
};

function Card({
  title,
  subtitle,
  children,
  surface = "whim",
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  surface?: "whim" | "void" | "marble";
}) {
  const surfaceClasses: Record<typeof surface, string> = {
    whim: "bg-whim text-void",
    void: "bg-void text-whim",
    marble: "bg-marble text-whim",
  };
  return (
    <section className={`${surfaceClasses[surface]} rounded-card-lg border border-black/5 p-8`}>
      <header className="mb-6">
        <h2 className="text-h3 font-bold">{title}</h2>
        <p className="text-sm opacity-70">{subtitle}</p>
      </header>
      <div className="grid place-items-center min-h-[200px]">{children}</div>
    </section>
  );
}

export default function MotifsPreviewPage() {
  return (
    <main className="mx-auto max-w-page px-gutter py-section">
      <header className="mb-12">
        <p className="text-caption uppercase tracking-eyebrow text-marble">
          dev · motifs
        </p>
        <h1 className="text-h1 font-bold">Motif system preview</h1>
        <p className="mt-3 max-w-prose text-body-lg text-void/70">
          Visual fidelity check for the six brand motifs and the
          BrailleDecoder. Not indexed; not linked from the public site.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card title="Orbit — grid" subtitle="Even grid of dots; ambient">
          <Orbit variant="grid" className="h-48 w-48 text-marble" />
        </Card>
        <Card title="Orbit — stacked" subtitle="Pyramid of balls">
          <Orbit variant="stacked" className="h-48 w-48 text-void" />
        </Card>
        <Card title="Orbit — scatter" subtitle="Irregular scatter">
          <Orbit variant="scatter" className="h-48 w-48 text-marble" />
        </Card>
        <Card title="Orbit — line" subtitle="Single horizontal row">
          <Orbit variant="line" className="w-72 text-void" />
        </Card>

        <Card title="Echo — out" subtitle="Small → large → small">
          <Echo direction="out" steps={7} className="w-72 text-marble" />
        </Card>
        <Card title="Echo — in" subtitle="Large → small → large">
          <Echo direction="in" steps={7} className="w-72 text-flare" />
        </Card>

        <Card title="Hatch — 45°" subtitle="Thin lines, neutral only">
          <Hatch angle={45} size={200} className="h-48 w-48 text-void" />
        </Card>
        <Card title="Hatch — 90°" subtitle="Vertical lines">
          <Hatch angle={90} size={200} spacing={10} className="h-48 w-48 text-void" />
        </Card>

        <Card title="Syntax" subtitle="Solid + hatched pair">
          <Syntax
            className="w-80"
            fillClassName="text-marble"
            hatchClassName="text-void"
          />
        </Card>

        <Card title="Loop" subtitle="Gooey molecule" surface="whim">
          <Loop className="w-80 text-marble" />
        </Card>

        <Card title="Pulse — horizontal" subtitle="Always Whim" surface="marble">
          <Pulse direction="horizontal" className="w-80" />
        </Card>
        <Card title="Pulse — vertical" subtitle="Always Whim" surface="void">
          <Pulse direction="vertical" className="h-72" />
        </Card>
      </div>

      <section className="mt-16">
        <h2 className="text-h2 font-bold">BrailleDecoder</h2>
        <p className="mt-2 text-body text-void/70">
          The Sensu wordmark, written in Braille.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card title="Static mark (small)" subtitle="Footer / favicon usage">
            <BrailleDecoder word="sensu" cellSize={20} cellGap={14} className="h-12" />
          </Card>

          <Card title="With ghost grid" subtitle="Reveals the 6-dot cell">
            <BrailleDecoder
              word="sensu"
              cellSize={28}
              cellGap={18}
              showGhost
              className="h-16"
            />
          </Card>

          <Card title="Reveal animation" subtitle="Each letter pops in (refresh to replay)" surface="marble">
            <BrailleDecoder
              word="sensu"
              cellSize={48}
              cellGap={28}
              dotColor="#F2F1F0"
              reveal
              className="h-28"
            />
          </Card>

          <Card title="Display scale" subtitle="The Braille reveal section">
            <BrailleDecoder
              word="sensu"
              cellSize={72}
              cellGap={48}
              className="h-44"
            />
          </Card>
        </div>
      </section>
    </main>
  );
}
