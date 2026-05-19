import { type NextRequest, NextResponse } from "next/server";

/**
 * Newsletter subscribe — stub.
 *
 * Validates the payload, logs the opt-in (server-side), returns 200.
 *
 * TODO(provider): swap the stub for ConvertKit / Mailchimp / Resend
 * Audiences. The request shape should stay { email, name? } so the
 * <Newsletter /> form doesn't need to change.
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

  // TODO(provider): replace the console.log with a real subscribe call.
  // During soft-launch the opt-ins land in Vercel function logs.
  console.log(`[subscribe] new opt-in: ${email}${name ? ` (${name})` : ""}`);

  return NextResponse.json({ ok: true });
}
