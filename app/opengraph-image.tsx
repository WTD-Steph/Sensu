import { ImageResponse } from "next/og";

/**
 * Dynamic Open Graph image — 1200×630 PNG.
 *
 * Composition (per the brief): Whim surface, "SENSU" eyebrow, display
 * headline "Rituals worth keeping." with italic on "worth", and the
 * Sensu Braille mark rendered as plain divs (ImageResponse doesn't
 * support arbitrary <svg> children reliably across edge/Node).
 *
 * Edge runtime is required on Windows — the Node implementation of
 * @vercel/og has a path-resolution bug that breaks local rendering.
 * Edge uses the WASM build and works cross-platform.
 */
export const alt = "Sensu — Rituals worth keeping.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

const WHIM = "#F2F1F0";
const VOID = "#161514";
const MARBLE = "#2B2BAD";

// Braille S-E-N-S-U dot positions (matches lib/braille.ts).
const LETTERS: ReadonlyArray<ReadonlyArray<number>> = [
  [2, 3, 4],       // S
  [1, 5],          // E
  [1, 3, 4, 5],    // N
  [2, 3, 4],       // S
  [1, 3, 6],       // U
];

function dotPosition(dotNum: number): { col: 0 | 1; row: 0 | 1 | 2 } {
  return {
    col: dotNum > 3 ? 1 : 0,
    row: ((dotNum - 1) % 3) as 0 | 1 | 2,
  };
}

export default async function OpengraphImage() {
  // Edge runtime: load the brand font from /public via a fetched ArrayBuffer.
  // `new URL(..., import.meta.url)` makes Vercel bundle the asset into the
  // edge function.
  const fontUrl = new URL(
    "../public/fonts/ChakraPetch-Bold.ttf",
    import.meta.url
  );
  const bold = await fetch(fontUrl).then((r) => r.arrayBuffer());

  const dotSize = 26;
  const cellGapX = 18; // gap between cols inside a cell
  const cellGapY = 14; // gap between rows inside a cell
  const interCellGap = 36; // gap between cells

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: WHIM,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 80,
          fontFamily: "Chakra Petch",
          color: VOID,
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 8,
            color: MARBLE,
            marginBottom: 36,
          }}
        >
          SENSU
        </div>

        {/* Braille mark — built from divs */}
        <div style={{ display: "flex", gap: interCellGap, marginBottom: 56 }}>
          {LETTERS.map((dots, li) => (
            <div
              key={li}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: cellGapY,
              }}
            >
              {[0, 1, 2].map((row) => (
                <div key={row} style={{ display: "flex", gap: cellGapX }}>
                  {([0, 1] as const).map((col) => {
                    const dotNum = col === 0 ? row + 1 : row + 4;
                    const active = dots.includes(dotNum);
                    return (
                      <div
                        key={col}
                        style={{
                          width: dotSize,
                          height: dotSize,
                          borderRadius: "50%",
                          background: active ? VOID : "transparent",
                        }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: -2,
            textAlign: "center",
            display: "flex",
            gap: 14,
          }}
        >
          <span>Rituals</span>
          <span style={{ color: MARBLE }}>worth</span>
          <span>keeping.</span>
        </div>

        <div
          style={{
            fontSize: 22,
            color: "#5b5957",
            marginTop: 42,
            letterSpacing: 5,
          }}
        >
          JAPANESE-INSPIRED DRINKWARE
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Chakra Petch",
          data: bold,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
