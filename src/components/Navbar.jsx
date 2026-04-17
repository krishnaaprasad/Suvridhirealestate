"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/logo.jpg"
            alt="Suvridhi Bhoomi Infra"
            width={50}
            height={50}
            className="rounded-full shadow-md w-10 h-10 sm:w-[50px] sm:h-[50px]"
          />
          <div className="block">
            <p
              className={`font-bold text-sm sm:text-lg leading-tight transition-colors duration-300 ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Suvridhi Bhoomi
            </p>
            <p
              className={`text-[9px] sm:text-xs tracking-wider transition-colors duration-300 ${
                scrolled ? "text-gold-600" : "text-gold-300"
              }`}
            >
              INFRA PRIVATE LIMITED
            </p>
          </div>
        </a>

        {/* CTA */}
        <a
          href="#lead-form"
          className="btn-shimmer text-white font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm shadow-lg hover:shadow-xl transition-shadow duration-300 whitespace-nowrap"
        >
          Book Free Visit
        </a>
      </div>
    </nav>
  );
}
