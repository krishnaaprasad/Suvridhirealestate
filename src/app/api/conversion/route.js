import { NextResponse } from "next/server";
import crypto from "crypto";

const PIXEL_ID = "1250542376248259";
const ACCESS_TOKEN = "EAAUs0CGfZCiMBRMg0uRVieL8bIZAGH9B9uiuQZBqjoRZBWRUwaM3WbNrwRRgZB3tS1wOUi01gyrI59wjwpuqJstRePCEyKr5L2ZB0Fic9SXmSv3UwN3yA6jFUCcmsKCKy2RfZAluDre2Yk2jBGRtLuSjuwvT4Rq6QqYuIXsgzrKynkOhl7P1TNrVY5huXxEhjgTiwZDZD";
const API_VERSION = "v19.0";

function hashData(data) {
  if (!data) return null;
  return crypto.createHash("sha256").update(data.trim().toLowerCase()).digest("hex");
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { eventName, eventUrl, userData, eventId } = body;

    // Clean phone number (add country code if missing, but for India it's usually 91)
    let cleanedPhone = null;
    if (userData?.phone) {
      cleanedPhone = userData.phone.replace(/\D/g, '');
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
            // Provide empty string for IP if not available since it's highly recommended
            client_ip_address: request.headers.get("x-forwarded-for") || request.ip || "",
            fn: userData?.name ? [hashData(userData.name)] : undefined,
            ph: cleanedPhone ? [hashData(cleanedPhone)] : undefined,
          },
        },
      ],
    };

    const response = await fetch(
      `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const fbRes = await response.json();

    if (!response.ok) {
      console.error("FB Conversions API Error:", fbRes);
      return NextResponse.json({ success: false, error: fbRes }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: fbRes });
  } catch (error) {
    console.error("API Error Server:", error);
    return NextResponse.json({ success: false, error: "Server Error" }, { status: 500 });
  }
}
