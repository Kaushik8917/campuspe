import { NextResponse } from "next/server";

// Demo endpoint: validates the payload. Wire this to your CRM / database / email provider.
export async function POST(request) {
  try {
    const { email, role } = await request.json();
    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }
    console.log("[waitlist]", { email, role });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
