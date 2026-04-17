export default function LocationSection() {
  return (
    <section id="location" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full border border-blue-200 mb-4">
            📍 Project Location
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Come Visit Our <span className="text-blue-600">Site Today</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
            See for yourself! We are conveniently located at Rampur Sonbarsa Bazar, Gorakhpur.
          </p>
        </div>

        {/* Minimalist Floating Card over Map Container */}
        <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] rounded-3xl sm:rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200">

          {/* Background Map Embed */}
          <iframe
            src="https://maps.google.com/maps?q=Rampur%20Sonbarsa%20Bazar,%20Gorakhpur,%20Uttar%20Pradesh&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Floating Details Card */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:w-[360px] bg-white/95 backdrop-blur-xl p-5 sm:p-6 rounded-2xl shadow-2xl border border-white/50 transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-3">Suvridhi Bhoomi</h3>

            <div className="flex items-start gap-2.5 mb-2">
              <span className="text-blue-600 text-base mt-0.5">📍</span>
              <p className="text-gray-700 text-sm font-medium leading-snug">
                Rampur Sonbarsa Bazar, Gorakhpur, UP
              </p>
            </div>

            <div className="flex items-start gap-2.5 mb-5">
              <span className="text-green-600 text-base">🛣️</span>
              <p className="text-gray-700 text-sm font-medium">
                Just <span className="font-bold text-green-700">200m</span> from NH 28
              </p>
            </div>

            {/* Get Directions Button */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Rampur+Sonbarsa+Bazar,+Gorakhpur,+Uttar+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl shadow-md transition-all active:scale-95 text-sm sm:text-base cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
