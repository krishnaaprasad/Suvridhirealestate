"use client";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block bg-gold-500/10 text-gold-300 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 rounded-full border border-gold-500/20 mb-3 sm:mb-4">
            💰 Best Price Guarantee
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Unbeatable <span className="text-gold-gradient">Pricing</span>
          </h2>
          <p className="mt-2 sm:mt-3 text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Premium plots at the most affordable rates in Gorakhpur
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl sm:rounded-3xl border border-gold-500/30 overflow-hidden shadow-2xl">
            {/* Popular badge */}
            <div className="absolute -top-0.5 left-1/2 -translate-x-1/2">
              <div className="bg-gradient-to-r from-gold-500 to-gold-600 text-white text-[10px] sm:text-xs font-bold px-4 sm:px-6 py-1 sm:py-1.5 rounded-b-xl">
                MOST POPULAR
              </div>
            </div>

            <div className="p-5 pt-10 sm:p-8 sm:pt-12">
              {/* Price */}
              <div className="text-center mb-6 sm:mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-gold-400 text-xl sm:text-2xl font-medium">₹</span>
                  <span className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gold-gradient animate-count">651</span>
                  <span className="text-gray-400 text-sm sm:text-lg">/sqft</span>
                </div>
                <p className="text-gray-400 text-sm mt-1 sm:mt-2">Starting price for premium plots</p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent mb-5 sm:mb-8" />

              {/* Details */}
              <div className="space-y-2.5 sm:space-y-4">
                <div className="flex items-center justify-between bg-white/5 rounded-lg sm:rounded-xl px-3.5 sm:px-5 py-2.5 sm:py-3">
                  <span className="text-gray-300 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                    <span className="text-green-400">✓</span> Plot Size
                  </span>
                  <span className="text-white font-bold text-sm sm:text-base">1000 sqft</span>
                </div>
                <div className="flex items-center justify-between bg-white/5 rounded-lg sm:rounded-xl px-3.5 sm:px-5 py-2.5 sm:py-3">
                  <span className="text-gray-300 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                    <span className="text-green-400">✓</span> Total Price
                  </span>
                  <span className="text-white font-bold text-sm sm:text-base">₹6,51,000</span>
                </div>
                <div className="flex items-center justify-between bg-white/5 rounded-lg sm:rounded-xl px-3.5 sm:px-5 py-2.5 sm:py-3">
                  <span className="text-gray-300 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                    <span className="text-green-400">✓</span> Booking Amount
                  </span>
                  <span className="text-green-400 font-bold text-base sm:text-lg">Only ₹21,000</span>
                </div>
                <div className="flex items-center justify-between bg-white/5 rounded-lg sm:rounded-xl px-3.5 sm:px-5 py-2.5 sm:py-3">
                  <span className="text-gray-300 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                    <span className="text-green-400">✓</span> EMI Available
                  </span>
                  <span className="text-white font-bold text-sm sm:text-base">Easy Monthly</span>
                </div>
                <div className="flex items-center justify-between bg-white/5 rounded-lg sm:rounded-xl px-3.5 sm:px-5 py-2.5 sm:py-3">
                  <span className="text-gray-300 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                    <span className="text-green-400">✓</span> Registry
                  </span>
                  <span className="text-white font-bold text-sm sm:text-base">Included</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#lead-form"
                id="pricing-cta"
                className="mt-6 sm:mt-8 block w-full text-center btn-gold-shimmer text-white font-bold text-base sm:text-lg py-3.5 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-gold-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                Book Your Plot Now →
              </a>

              <p className="text-center text-gray-500 text-[11px] sm:text-sm mt-3 sm:mt-4">
                * Limited time offer. T&C apply.
              </p>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-6 text-gray-400">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span className="text-xs sm:text-sm">RERA Compliant</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span className="text-xs sm:text-sm">Clear Title</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span className="text-xs sm:text-sm">Instant Registry</span>
          </div>
        </div>
      </div>
    </section>
  );
}
