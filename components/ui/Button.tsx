import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/**
 * The Sensu button primitive. One implementation, three variants,
 * three sizes, and an `onDark` flip for surfaces where the page
 * already uses Void/Marble as background.
 *
 * Renders as either <Link> (internal `href`), <a> (external `href` or
 * `mailto:` / `tel:` / `wa.me/`), or <button> when no `href` is set.
 *
 * Tokens:
 *   - tracking-[0.06em] uppercase per design system
 *   - pill shape (rounded-full)
 *   - ease-sensu / 200ms transition
 *   - focus ring inherits the globals.css 2px Marble rule
 */
export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Flip the palette for surfaces where the page bg is Void/Marble. */
  onDark?: boolean;
  /** Trailing arrow — "↗" external, "→" internal. Default: none. */
  trailingArrow?: "external" | "internal";
  className?: string;
  children: ReactNode;
};

type AsLink = CommonProps & {
  href: string;
  external?: boolean;
  type?: never;
} & Omit<ComponentProps<"a">, keyof CommonProps | "href">;

type AsButton = CommonProps & {
  href?: undefined;
  external?: undefined;
} & Omit<ComponentProps<"button">, keyof CommonProps>;

export type ButtonProps = AsLink | AsButton;

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium uppercase tracking-[0.06em] transition-colors duration-200 ease-sensu disabled:opacity-60";

const SIZE: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-6 py-3.5 text-sm",
  lg: "px-7 py-4 text-base",
};

/**
 * Variant tokens. Light = on Whim/Whim-warm surfaces. Dark = on
 * Void/Marble surfaces (the `onDark` flip).
 */
const LIGHT: Record<ButtonVariant, string> = {
  primary:
    "bg-marble text-whim hover:bg-void",
  secondary:
    "border border-void text-void hover:bg-void hover:text-whim",
  ghost:
    "text-void hover:text-marble",
};

const DARK: Record<ButtonVariant, string> = {
  primary:
    "bg-whim text-void hover:bg-lumen",
  secondary:
    "border border-whim/60 text-whim hover:border-whim hover:bg-whim/10",
  ghost:
    "text-whim hover:text-lumen",
};

const ARROW = {
  external: "↗", // ↗
  internal: "→", // →
} as const;

function isExternalHref(href: string): boolean {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("//")
  );
}

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    onDark = false,
    trailingArrow,
    className = "",
    children,
  } = props;

  const palette = onDark ? DARK : LIGHT;
  const classes = `${BASE} ${SIZE[size]} ${palette[variant]} ${className}`.trim();

  const arrow = trailingArrow ? (
    <span aria-hidden="true">{ARROW[trailingArrow]}</span>
  ) : null;
  const content = (
    <>
      {children}
      {arrow}
    </>
  );

  // External link / mailto / wa.me / tel
  if ("href" in props && props.href !== undefined) {
    const { href, external } = props as AsLink;
    const isExternal = external ?? isExternalHref(href);
    if (isExternal) {
      const { variant: _v, size: _s, onDark: _o, trailingArrow: _t, className: _c, children: _ch, external: _e, href: _h, ...rest } = props as AsLink;
      void _v; void _s; void _o; void _t; void _c; void _ch; void _e; void _h;
      return (
        <a
          {...rest}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {content}
        </a>
      );
    }
    const { variant: _v, size: _s, onDark: _o, trailingArrow: _t, className: _c, children: _ch, external: _e, href: _h, ...rest } = props as AsLink;
    void _v; void _s; void _o; void _t; void _c; void _ch; void _e; void _h;
    return (
      <Link {...rest} href={href} className={classes}>
        {content}
      </Link>
    );
  }

  const { variant: _v, size: _s, onDark: _o, trailingArrow: _t, className: _c, children: _ch, ...rest } = props as AsButton;
  void _v; void _s; void _o; void _t; void _c; void _ch;
  return (
    <button {...rest} className={classes}>
      {content}
    </button>
  );
}
