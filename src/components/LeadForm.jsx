"use client";
import { useState } from "react";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    budget: "",
    purpose: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError("");

    try {
      // Generate Event ID
      const eventId =
        Date.now().toString() +
        Math.random().toString(36).substring(2, 10);

      // 🔥 FIRE PIXEL FIRST (IMPORTANT)
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Lead", {}, { eventID: eventId });
      }

      // 🔥 FIRE CAPI (SERVER SIDE)
      fetch("/api/conversion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventName: "Lead",
          eventUrl: window.location.href,
          eventId: eventId,
          userData: {
            name: formData.name,
            phone: formData.phone,
          },
        }),
      }).catch((err) => console.error("CAPI error:", err));

      // WhatsApp message
      const message = `Hi! I am interested in plots at Gorakhpur. Here are my details:

Name: ${formData.name}
Phone: ${formData.phone}
Budget: ${formData.budget || "Not specified"}
Purpose: ${formData.purpose || "Not specified"}`;

      const whatsappNumber = "919219418113";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`;

      // 🔥 SHOW SUCCESS UI
      setSubmitted(true);

      // 🔥 DELAY WHATSAPP (CRITICAL FIX)
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 1000);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }

  };

  return (<section
    id="lead-form"
    className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
  > <div className="max-w-4xl mx-auto px-4 relative z-10"> <div className="text-center mb-8 sm:mb-10"> <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
    Get a <span className="text-gold-gradient">Free Callback</span> in 5
    Minutes </h2> <p className="mt-2 text-gray-500 text-sm sm:text-base">
      Fill the form below to book your site visit </p> </div>

      <div className="max-w-xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {submitted ? (
            <div className="p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Thank You! 🎉
              </h3>
              <p className="text-green-600 font-semibold">
                Our team will contact you shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="p-6 space-y-4"
            >
              {error && (
                <div className="p-3 bg-red-50 text-red-600 text-sm rounded-xl">
                  {error}
                </div>
              )}

              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-xl"
              />

              <input
                type="tel"
                name="phone"
                required
                placeholder="Enter your mobile number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-xl"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-green-600 text-white font-bold"
              >
                {loading ? "Submitting..." : "Get Call in 5 Minutes"}
              </button>

              <p className="text-center text-sm text-gray-500">
                We will call you within 5 minutes
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  </section>

  );
}
