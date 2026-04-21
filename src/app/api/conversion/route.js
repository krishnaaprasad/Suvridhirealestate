import { NextResponse } from "next/server";
import crypto from "crypto";
import { cookies } from "next/headers";

const PIXEL_ID = process.env.FB_PIXEL_ID;
const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;
const API_VERSION = process.env.FB_API_VERSION || "v19.0";

const hash = (data) => data ? crypto.createHash("sha256").update(data.trim().toLowerCase()).digest("hex") : null;

export async function POST(req) {
  // Runtime validation for environment variables
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    console.error("Missing FB_PIXEL_ID or FB_ACCESS_TOKEN in environment variables");
    return NextResponse.json(
      { success: false, error: "Internal Server Error: Missing configuration" },
      { status: 500 }
    );
  }

  try {
    const { eventName, eventUrl, userData, eventId } = await req.json();
    const cookieStore = await cookies();
    
    // Cleaning phone number to international E.164 format
    let ph = userData?.phone?.replace(/\D/g, "");
    if (ph?.length === 10) ph = "91" + ph;

    const payload = {
      data: [{
        event_name: eventName || "Lead",
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: eventUrl || "",
        event_id: eventId,
        user_data: {
          client_user_agent: req.headers.get("user-agent") || "",
          client_ip_address: req.headers.get("x-forwarded-for")?.split(",")[0] || "",
          fbp: cookieStore.get("_fbp")?.value,
          fbc: cookieStore.get("_fbc")?.value,
          fn: userData?.name ? [hash(userData.name)] : undefined,
          ph: ph ? [hash(ph)] : undefined,
          country: [hash("in")]
        }
      }]
    };

    const response = await fetch(`https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Meta CAPI Error Response:", result);
      return NextResponse.json({ success: false, error: result }, { status: 400 });
    }

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Critical CAPI Failure:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
