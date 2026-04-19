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
    if (loading) return; // Prevent double submissions

    setLoading(true);
    setError("");

    try {
      // 1. Generate unique eventId for Deduplication
      const eventId = "lead_" + Date.now().toString() + Math.random().toString(36).substring(2, 9);

      // 2. Fire Meta Pixel Lead Event (Browser Side)
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Lead", {
          content_name: "Property Inquiry",
          status: true,
        }, { eventID: eventId });
      }

      // 3. Fire Conversions API (Server Side)
      // We don't await this to keep the UI snappy, but we catch errors
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

      // 4. Prepare WhatsApp Message
      const message = `Hi! I am interested in plots at Gorakhpur. Here are my details:
Name: ${formData.name}
Phone: ${formData.phone}
Budget: ${formData.budget || "Not specified"}
Purpose: ${formData.purpose || "Not specified"}`;

      const whatsappNumber = "919219418113";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      // 5. Show Success UI
      setSubmitted(true);

      // 6. 🔥 DELAY REDIRECT (CRITICAL) - Wait 1000ms for tracking to finalize
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

  return (
    <section id="lead-form" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-gold-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-green-100/40 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="inline-block bg-green-50 text-green-700 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 rounded-full border border-green-200 mb-3 sm:mb-4">
            📞 Get in Touch
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Get a <span className="text-gold-gradient">Free Callback</span> in 5 Minutes
          </h2>
          <p className="mt-2 sm:mt-3 text-gray-500 text-sm sm:text-base max-w-xl mx-auto px-2">
            Fill the form below to book your site visit
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* Form header strip */}
            <div className="bg-gradient-to-r from-gold-500 to-gold-600 py-3 sm:py-4 px-4 sm:px-6">
              <p className="text-white font-bold text-center text-base sm:text-lg">🏠 Book Your Dream Plot Today</p>
            </div>

            {submitted ? (
              <div className="p-8 sm:p-10 text-center animate-fade-in">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Thank You! 🎉</h3>
                <p className="text-green-600 font-semibold text-base sm:text-lg">Thank you! Our team will contact you shortly.</p>
                <p className="text-gray-500 text-sm mt-2">Opening WhatsApp for more details...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-5">
                {error && (
                  <div className="p-3 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100">
                    {error}
                  </div>
                )}
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-400 focus:border-gold-400 outline-none transition-all duration-200 text-gray-900 text-sm sm:text-base placeholder-gray-400 bg-gray-50 focus:bg-white"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm sm:text-base">+91</span>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your mobile number"
                      pattern="[0-9]{10}"
                      maxLength="10"
                      inputMode="numeric"
                      className="w-full pl-12 sm:pl-14 pr-3.5 sm:pr-4 py-3 sm:py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-400 focus:border-gold-400 outline-none transition-all duration-200 text-gray-900 text-sm sm:text-base placeholder-gray-400 bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-400 focus:border-gold-400 outline-none transition-all duration-200 text-gray-900 text-sm sm:text-base bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                  >
                    <option value="">Select your budget</option>
                    <option value="under-5L">Under ₹5 Lakh</option>
                    <option value="5L-10L">₹5 Lakh - ₹10 Lakh</option>
                    <option value="10L-20L">₹10 Lakh - ₹20 Lakh</option>
                    <option value="above-20L">Above ₹20 Lakh</option>
                  </select>
                </div>

                {/* Purpose */}
                <div>
                  <label htmlFor="purpose" className="block text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Purpose
                  </label>
                  <select
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-400 focus:border-gold-400 outline-none transition-all duration-200 text-gray-900 text-sm sm:text-base bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                  >
                    <option value="">Select purpose</option>
                    <option value="investment">Investment</option>
                    <option value="home">Build Home</option>
                    <option value="commercial">Commercial Use</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  id="form-submit"
                  disabled={loading}
                  className={`w-full py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg text-white transition-all duration-300 ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "btn-shimmer shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "📞 Get Call in 5 Minutes"
                  )}
                </button>

                <p className="text-center text-blue-600 font-medium text-xs sm:text-sm mt-3">
                  We will call you within 5 minutes
                </p>
                <p className="text-center text-gray-400 text-[11px] sm:text-xs mt-2">
                  🔒 Your information is 100% secure and will not be shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
