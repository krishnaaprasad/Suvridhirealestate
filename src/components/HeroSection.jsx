"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-bg.png"
        alt="Premium Plotted Land Development Gorakhpur"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0 z-10" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gold-400/10 rounded-full blur-3xl z-10" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-green-400/10 rounded-full blur-3xl z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 w-full max-w-5xl mx-auto pt-24 pb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 sm:px-5 sm:py-2 mb-6 sm:mb-8 animate-fade-in-up">
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-400 rounded-full animate-pulse" />
          <span className="text-white/95 text-xs sm:text-sm font-semibold tracking-wide uppercase">Trusted Land Investment</span>
        </div>

        {/* Main Heading */}
        <h1
          className="font-extrabold text-white leading-tight mb-5 sm:mb-6 animate-fade-in-up"
          style={{ fontFamily: "'Noto Sans Devanagari', 'Outfit', sans-serif", animationDelay: "0.2s" }}
        >
          <span className="block text-gold-gradient text-5xl sm:text-6xl md:text-7xl mb-2 sm:mb-3 drop-shadow-md">₹651/sqft</span>
          <span className="block text-3xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">में प्लॉट</span>
          <div className="text-2xl sm:text-4xl md:text-5xl mt-2">
            <span className="text-gold-300 relative inline-block">
              — सिर्फ कुछ ही प्लॉट बाकी!
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-gold-400 opacity-60" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,10 Q50,20 100,10" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </div>
        </h1>

        {/* Subheading */}
        <p
          className="text-sm sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 font-medium animate-fade-in-up bg-black/20 inline-block px-4 py-2 rounded-lg backdrop-blur-sm"
          style={{ animationDelay: "0.4s" }}
        >
          Gorakhpur &nbsp;|&nbsp; NH 28 के पास &nbsp;|&nbsp; Free Site Visit &nbsp;|&nbsp; Easy Booking
        </p>

        {/* CTA Buttons — always side by side, normal size */}
        <div className="flex flex-row gap-3 sm:gap-5 justify-center items-center w-full px-2 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="#lead-form"
            id="hero-cta"
            className="flex-1 max-w-[200px] sm:max-w-[220px] btn-shimmer text-white font-bold text-sm sm:text-lg px-2 sm:px-6 py-3 sm:py-4 rounded-full shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            🏠 Book Free Site Visit
          </a>
          <a
            href="#pricing"
            className="flex-1 max-w-[200px] sm:max-w-[220px] bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold text-sm sm:text-lg px-2 sm:px-6 py-3 sm:py-4 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            💰 View Pricing
          </a>
        </div>

        {/* Quick Stats */}
        <div className="mt-10 sm:mt-14 grid grid-cols-3 gap-3 sm:gap-6 max-w-[340px] sm:max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="glass-card rounded-xl p-3 sm:p-5 text-center shadow-lg border border-white/20">
            <p className="text-2xl sm:text-4xl font-extrabold text-gold-300 leading-none">₹651</p>
            <p className="text-white/80 text-[10px] sm:text-sm mt-1 sm:mt-2 font-medium uppercase tracking-wider">Per Sqft</p>
          </div>
          <div className="glass-card rounded-xl p-3 sm:p-5 text-center shadow-lg border border-white/20">
            <p className="text-2xl sm:text-4xl font-extrabold text-green-300 leading-none">1000+</p>
            <p className="text-white/80 text-[10px] sm:text-sm mt-1 sm:mt-2 font-medium uppercase tracking-wider">Sqft Plots</p>
          </div>
          <div className="glass-card rounded-xl p-3 sm:p-5 text-center shadow-lg border border-white/20">
            <p className="text-2xl sm:text-4xl font-extrabold text-gold-300 leading-none">₹51K</p>
            <p className="text-white/80 text-[10px] sm:text-sm mt-1 sm:mt-2 font-medium uppercase tracking-wider">Booking</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/40 rounded-full flex justify-center pt-1.5 sm:pt-2">
          <div className="w-1 h-2.5 sm:w-1.5 sm:h-3 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
