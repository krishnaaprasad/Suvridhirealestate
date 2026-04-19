import { NextResponse } from "next/server";
import crypto from "crypto";
import { cookies } from "next/headers";

const PIXEL_ID = "1250542376248259";
const ACCESS_TOKEN = "EAAUs0CGfZCiMBRMg0uRVieL8bIZAGH9B9uiuQZBqjoRZBWRUwaM3WbNrwRRgZB3tS1wOUi01gyrI59wjwpuqJstRePCEyKr5L2ZB0Fic9SXmSv3UwN3yA6jFUCcmsKCKy2RfZAluDre2Yk2jBGRtLuSjuwvT4Rq6QqYuIXsgzrKynkOhl7P1TNrVY5huXxEhjgTiwZDZD";
const API_VERSION = "v19.0";

// Helper to hash data using SHA-256
function hashData(data) {
  if (!data) return null;
  return crypto.createHash("sha256").update(data.trim().toLowerCase()).digest("hex");
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { eventName, eventUrl, userData, eventId } = body;
    
    // Get cookies for higher match quality (FBP and FBC)
    const cookieStore = await cookies();
    const fbp = cookieStore.get("_fbp")?.value;
    const fbc = cookieStore.get("_fbc")?.value;

    // Robust phone cleaning
    let cleanedPhone = null;
    if (userData?.phone) {
      cleanedPhone = userData.phone.replace(/\D/g, "");
      // If it's 10 digits, it's an Indian number without +91
      if (cleanedPhone.length === 10) {
        cleanedPhone = "91" + cleanedPhone;
      }
    }

    const payload = {
      data: [
        {
          event_name: eventName || "Lead",
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          event_source_url: eventUrl || "",
          event_id: eventId,
          user_data: {
            client_user_agent: request.headers.get("user-agent") || "",
            client_ip_address: request.headers.get("x-forwarded-for")?.split(",")[0] || request.ip || "",
            fbp: fbp,
            fbc: fbc,
            fn: userData?.name ? [hashData(userData.name)] : undefined,
            ph: cleanedPhone ? [hashData(cleanedPhone)] : undefined,
            country: [hashData("in")], // India
          },
        },
      ],
    };

    const response = await fetch(
      `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

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
