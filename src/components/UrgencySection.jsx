"use client";
import { useState, useEffect } from "react";

export default function UrgencySection() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section id="urgency" className="py-10 sm:py-14 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        {/* Alert badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 sm:px-5 sm:py-2 mb-4 sm:mb-6 pulse-urgency">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-300 rounded-full animate-pulse" />
          <span className="text-white font-semibold text-xs sm:text-sm tracking-wide uppercase">Limited Time Offer</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 sm:mb-4">
          ⚡ Limited Plots Available!
        </h2>
        <p className="text-white/90 text-sm sm:text-lg md:text-xl mb-6 sm:mb-8 font-medium">
          Offer ending soon – Don&apos;t miss this opportunity!
        </p>

        {/* Countdown timer */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          {[
            { value: pad(timeLeft.hours), label: "Hours" },
            { value: pad(timeLeft.minutes), label: "Minutes" },
            { value: pad(timeLeft.seconds), label: "Seconds" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 min-w-[65px] sm:min-w-[80px]">
              <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-mono">{item.value}</p>
              <p className="text-white/70 text-[10px] sm:text-xs mt-0.5 sm:mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="flex items-center gap-1.5 sm:gap-2 text-white/90">
            <span className="text-lg sm:text-2xl">🏠</span>
            <span className="font-semibold text-sm sm:text-base">Only <span className="text-yellow-300 text-base sm:text-xl font-bold">12</span> Plots Left</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 text-white/90">
            <span className="text-lg sm:text-2xl">👥</span>
            <span className="font-semibold text-sm sm:text-base"><span className="text-yellow-300 text-base sm:text-xl font-bold">47+</span> People Viewing</span>
          </div>
        </div>

        {/* CTA */}
        <a
          href="#lead-form"
          id="urgency-cta"
          className="inline-block bg-white text-red-600 font-extrabold text-base sm:text-lg px-8 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-50"
        >
          🔥 Book Now Before It&apos;s Gone!
        </a>
      </div>
    </section>
  );
}
