"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-12 pb-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.jpg"
                alt="Suvridhi Bhoomi"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-bold text-white text-lg">Suvridhi Bhoomi</p>
                <p className="text-xs text-gold-500 tracking-wider">INFRA PRIVATE LIMITED</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Trusted land investment company offering premium plots at affordable prices in Gorakhpur, near NH 28.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="hover:text-gold-400 transition-colors">Home</a></li>
              <li><a href="#features" className="hover:text-gold-400 transition-colors">Amenities</a></li>
              <li><a href="#pricing" className="hover:text-gold-400 transition-colors">Pricing</a></li>
              <li><a href="#gallery" className="hover:text-gold-400 transition-colors">Gallery</a></li>
              <li><a href="#lead-form" className="hover:text-gold-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-lg mt-0.5">📍</span>
                <span>Rampur Sonbarsa Bazar, Gorakhpur, Uttar Pradesh (NH 28 se 200m)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lg">📞</span>
                <a href="tel:+919876543210" className="hover:text-gold-400 transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lg">✉️</span>
                <a href="mailto:info@suvridhibhoomi.com" className="hover:text-gold-400 transition-colors">info@suvridhibhoomi.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mt-10 mb-6" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 Suvridhi Bhoomi Infra Private Limited. All rights reserved.</p>
          <p className="text-gold-600">Trusted Land Investment Since Day One</p>
        </div>
      </div>
    </footer>
  );
}
