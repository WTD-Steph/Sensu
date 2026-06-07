"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { IG_URL, WHOLESALE_EMAIL } from "@/lib/links";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Three-card "Follow / Newsletter / Wholesale" section (§5.8 of the brief).
 *
 * The middle card is a real form posting to /api/subscribe — for now a
 * stub that logs to the server.
 */
export function Newsletter() {
  return (
    <section id="newsletter" className="py-section">
      <div className="mx-auto max-w-page px-gutter">
        <header className="mb-12 max-w-3xl">
          <Eyebrow className="mb-4">
            Stay in the circle
          </Eyebrow>
          <h2 className="text-h2 font-bold">
            Quiet drops,{" "}
            <em className="font-light italic text-marble">
              slow mornings.
            </em>
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Follow */}
          <article className="flex flex-col rounded-card-lg border border-black/10 bg-whim p-7">
            <Eyebrow weight="regular">
              Follow
            </Eyebrow>
            <h3 className="mt-2 text-h3 font-bold">@madebysensu</h3>
            <p className="mt-3 text-body text-void/70">
              The Sensu Circle on Instagram. Slow mornings, behind the scenes,
              and the small moments between.
            </p>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 self-start border-b border-void/40 pb-1 pt-12 text-[13px] uppercase tracking-[0.16em] text-void transition-colors duration-200 ease-sensu hover:border-marble hover:text-marble"
            >
              Open on Instagram
              <span aria-hidden="true">↗</span>
            </a>
          </article>

          {/* Newsletter — the form */}
          <SubscribeCard />

          {/* Wholesale & press */}
          <article className="flex flex-col rounded-card-lg border border-black/10 bg-whim p-7">
            <Eyebrow weight="regular">
              Wholesale & press
            </Eyebrow>
            <h3 className="mt-2 text-h3 font-bold">Carry Sensu.</h3>
            <p className="mt-3 text-body text-void/70">
              For retail, press, or collaboration inquiries — drop us a line.
              We answer in the same quiet tone.
            </p>
            <a
              href={`mailto:${WHOLESALE_EMAIL}`}
              className="mt-auto inline-flex items-center gap-2 self-start border-b border-void/40 pb-1 pt-12 text-[13px] uppercase tracking-[0.16em] text-void transition-colors duration-200 ease-sensu hover:border-marble hover:text-marble"
            >
              {WHOLESALE_EMAIL}
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- */

function SubscribeCard() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "");
    const name = String(data.get("name") ?? "");

    setStatus("submitting");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setStatus("error");
        setMessage(json.error ?? "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setMessage("You're in the circle. Thank you.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <article className="relative flex flex-col rounded-card-lg bg-void p-7 text-whim">
      <Eyebrow weight="regular" color="whim-dim">
        Join the circle
      </Eyebrow>
      <h3 className="mt-2 text-h3 font-bold">One email a month.</h3>
      <p className="mt-3 text-body text-whim/75">
        Quiet drops, slow mornings, and the spaces in between. No clutter.
      </p>

      <form onSubmit={onSubmit} className="mt-auto pt-10">
        <label className="block text-caption uppercase tracking-eyebrow text-whim/55">
          First name (optional)
        </label>
        <input
          name="name"
          autoComplete="given-name"
          className="mt-1 w-full rounded-md border border-whim/20 bg-transparent px-3 py-2.5 text-[15px] text-whim placeholder:text-whim/40 focus:border-whim/70 focus:outline-none"
          placeholder="Mei"
        />
        <label className="mt-3 block text-caption uppercase tracking-eyebrow text-whim/55">
          Email
        </label>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1 w-full rounded-md border border-whim/20 bg-transparent px-3 py-2.5 text-[15px] text-whim placeholder:text-whim/40 focus:border-whim/70 focus:outline-none"
          placeholder="hello@sensu.com"
        />

        <Button
          type="submit"
          disabled={status === "submitting"}
          variant="primary"
          onDark
          trailingArrow={status === "submitting" ? undefined : "internal"}
          className="mt-4 w-full"
        >
          {status === "submitting" ? "Subscribing…" : "Subscribe"}
        </Button>

        {message ? (
          <p
            role="status"
            className={`mt-3 text-sm ${
              status === "success" ? "text-lumen" : "text-flare"
            }`}
          >
            {message}
          </p>
        ) : null}
      </form>
    </article>
  );
}
