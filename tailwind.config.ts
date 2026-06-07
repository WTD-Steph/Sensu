import type { Config } from "tailwindcss";

/**
 * Sensu brand tokens — see Brand Book.
 * Rule: never combine two primary colors on a single surface.
 * Body text is limited to Void, Whim, Flare, Marble.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        marble: "#2B2BAD",
        flare: "#E21B1B",
        lumen: "#FAEB3A", // never as text
        zesty: "#FA6000", // never as text
        // Neutral
        void: "#161514",
        whim: "#F2F1F0",
        "void-soft": "#2A2826",
        "whim-warm": "#E8E5E0",
      },
      fontFamily: {
        sans: ["var(--font-chakra)", "ui-sans-serif", "system-ui", "sans-serif"],
        jp: ["var(--font-noto-jp)", "var(--font-chakra)", "sans-serif"],
      },
      fontSize: {
        // Fluid scale — clamp(min, preferred, max)
        display: ["clamp(48px, 7.5vw, 132px)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        h1: ["clamp(36px, 5vw, 88px)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        h2: ["clamp(28px, 3.6vw, 56px)", { lineHeight: "1.04", letterSpacing: "-0.015em" }],
        h3: ["clamp(22px, 2.4vw, 36px)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        // Scale-exception fixed-size token for dense product-card grids.
        // Sits between body-lg (max 20px) and h3 (min 22px) but holds at
        // 20px rather than scaling fluidly, so the catalog grid stays
        // tight. Use only on ProductCatalogCard titles.
        "card-title": ["20px", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "body-lg": ["clamp(17px, 1.4vw, 20px)", { lineHeight: "1.55" }],
        body: ["clamp(15px, 1.1vw, 17px)", { lineHeight: "1.6" }],
        caption: ["12.5px", { lineHeight: "1.2", letterSpacing: "0.18em" }],
      },
      letterSpacing: {
        caption: "0.18em",
        eyebrow: "0.22em",
      },
      maxWidth: {
        page: "1440px",
      },
      spacing: {
        gutter: "clamp(20px, 4vw, 56px)",
        section: "clamp(64px, 9vw, 160px)",
      },
      borderRadius: {
        card: "18px",
        "card-lg": "28px",
      },
      transitionTimingFunction: {
        // Soft ease-out used across motion
        sensu: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
        breathe: {
          "0%, 100%": { opacity: "0.9", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.04)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(6px, -8px)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        breathe: "breathe 6s ease-in-out infinite",
        drift: "drift 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
