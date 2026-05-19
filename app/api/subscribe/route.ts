import { type NextRequest, NextResponse } from "next/server";

/**
 * Newsletter subscribe — stub.
 *
 * For now this just validates the payload, logs the subscription
 * (server-side), and returns 200. Phase 4 wires it to a real provider.
 *
 * TODO(provider): swap the stub for ConvertKit / Mailchimp / Resend
 * Audiences. The shape of the payload should stay the same so the
 * client form doesn't need to change.
 */
export async function POST(request: NextRequest) {
  let body: { email?: string; name?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  const email = (body.email ?? "").trim().toLowerCase();
  const name = (body.name ?? "").trim();

  // Lightweight email format check — full validation is provider's job.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  // TODO(provider): actually subscribe the email.
  // For now, log so the founder can see opt-ins in Vercel logs during
  // soft-launch.
  console.log(`[subscribe] new opt-in: ${email}${name ? ` (${name})` : ""}`);

  return NextResponse.json({ ok: true });
}
