"use client";
import { useState, useMemo } from "react";
import { supabase } from "@/lib/supabase";

// Helper for debouncing
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

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

  // Function to save lead to Supabase
  const saveLead = async (data, status = "partial") => {
    // CRITICAL: We MUST have a phone number AND a working Supabase client
    if (!data.phone || !supabase) return false;

    try {
      const { error } = await supabase
        .from("leads")
        .upsert(
          {
            phone: data.phone,
            name: data.name,
            budget: data.budget,
            purpose: data.purpose,
            status: status,
            updated_at: new Date().toISOString(),
          },
          { onConflict: "phone" } // Updates existing lead if phone matches
        );
      
      if (error) {
        console.error("Supabase Error:", error.message);
        return false;
      }
      return true; // Success!
    } catch (err) {
      console.error("Failed to save lead:", err);
      return false;
    }
  };

  // Debounced version of saveLead to prevent too many requests
  const debouncedSave = useMemo(
    () => debounce((data) => saveLead(data, "partial"), 500),
    []
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);

    // Only auto-save if they've at least started typing a phone number
    if (newFormData.phone.length > 3 || newFormData.name.length > 2) {
      debouncedSave(newFormData);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError("");

    try {
      // 1. 🔥 SAVE TO DATABASE FIRST (CRITICAL)
      const isSaved = await saveLead(formData, "submitted");

      // 2. ONLY proceed if the database save was successful
      if (!isSaved) {
        throw new Error("Could not save your details. Please check your internet connection.");
      }

      // 3. Generate unique eventId for Deduplication
      const eventId = "lead_" + Date.now().toString() + Math.random().toString(36).substring(2, 9);

      // 4. 🔥 NOW tell Meta about the Lead (Only after success)
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Lead", {
          content_name: "Property Inquiry",
          status: true,
        }, { eventID: eventId });
      }

      // 5. Show Success UI
      setSubmitted(true);

    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong. Please try again.");
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
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Details Submitted! 🎉</h3>
                <p className="text-gray-600 font-medium text-base sm:text-lg mb-6">Thank you for your interest. Our sales team will call you within 5 minutes.</p>
                
                <div className="h-px bg-gray-100 w-full mb-6" />
                
                <p className="text-gray-500 text-sm mb-4">Want to talk right now?</p>
                <a 
                  href="https://api.whatsapp.com/send?phone=919219418113&text=Hi%2C%20I%20just%20filled%20the%20form%20for%20Suvridhi%20Bhoomi%20plots."
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-green-500/20 transition-all hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat with Sales Expert
                </a>
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
