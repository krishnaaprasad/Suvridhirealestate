"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const images = [
  { src: "/banner.jpg", alt: "Suvridhi Bhoomi Plot Banner - Gorakhpur" },
  { src: "/hero-bg.png", alt: "Aerial View of Plot Development" },
  { src: "/gallery-1.png", alt: "Premium Plotted Land with Roads" },
  { src: "/gallery-4.png", alt: "Modern Plot Development" },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const closeButtonRef = useRef(null);
  const prevFocusRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "Tab") {
        // Lock focus to the close button as it's the only focusable element in the modal
        e.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    if (selectedImage) {
      prevFocusRef.current = document.activeElement;
      document.addEventListener("keydown", handleKeyDown);
      // Wait for render, then focus
      setTimeout(() => closeButtonRef.current?.focus(), 10);
    } else if (prevFocusRef.current) {
      prevFocusRef.current.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <>
      <section id="gallery" className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section header */}
          <div className="text-center mb-14">
            <span className="inline-block bg-gold-50 text-gold-700 text-sm font-semibold px-4 py-1.5 rounded-full border border-gold-200 mb-4">
              📸 Project Gallery
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              See Your <span className="text-gold-gradient">Future Property</span>
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              Real images from our development site at Rampur Sonbarsa Bazar, Gorakhpur
            </p>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-500"
                onClick={() => setSelectedImage(img)}
              >
                <div className={`relative ${idx === 0 ? "aspect-[16/8]" : "aspect-[16/10]"}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover gallery-img"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <div className="flex items-center gap-2 text-white">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                    </svg>
                    <span className="text-sm font-medium">{img.alt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            ref={closeButtonRef}
            aria-label="Close"
            className="absolute top-6 right-6 text-white/80 hover:text-white text-3xl z-[110] focus:outline-none focus:ring-2 focus:ring-white rounded"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
          <div
            className="relative w-full max-w-4xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="object-contain w-full h-full rounded-lg"
            />
            <p className="text-center text-white/70 mt-4 text-sm">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </>
  );
}

