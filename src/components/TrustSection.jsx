"use client";
import Image from "next/image";

const highlights = [
  {
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0021 9.349m-18 0a2.997 2.997 0 001.168-1.024l2.36-3.544C6.905 4.262 7.47 4 8.074 4h7.852c.604 0 1.169.262 1.546.781l2.36 3.544A2.997 2.997 0 0021 9.349" />
      </svg>
    ),
    label: "Market",
    distance: "100m",
    iconColor: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
    distColor: "text-amber-600",
  },
  {
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    label: "Hospital",
    distance: "500m",
    iconColor: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
    distColor: "text-green-600",
  },
  {
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    label: "School",
    distance: "500m",
    iconColor: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    distColor: "text-blue-600",
  },
  {
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
      </svg>
    ),
    label: "Railway Station",
    distance: "12km",
    iconColor: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
    distColor: "text-orange-600",
  },
  {
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    label: "AIIMS",
    distance: "8km",
    iconColor: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-200",
    distColor: "text-teal-600",
  },
  {
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
    label: "Airport",
    distance: "6km",
    iconColor: "text-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-200",
    distColor: "text-rose-600",
  }
];

export default function TrustSection() {
  return (
    <section id="trust" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gold-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Logo & Trust badge */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4 sm:mb-6">
            <Image
              src="/logo.jpg"
              alt="Suvridhi Bhoomi Infra Private Limited"
              width={100}
              height={100}
              className="rounded-2xl shadow-premium mx-auto w-20 h-20 sm:w-[100px] sm:h-[100px]"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Trusted <span className="text-gold-gradient">Land Investment</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-lg">Suvridhi Bhoomi Infra Private Limited</p>
          <div className="mt-3 sm:mt-4 inline-flex flex-wrap justify-center items-center gap-2">
            <span className="bg-green-50 text-green-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-green-200 inline-flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              Trusted Land Investment
            </span>
            <span className="bg-blue-50 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-blue-200 inline-flex items-center gap-1.5">
              <span className="text-sm">📝</span> Registry Available
            </span>
            <span className="bg-purple-50 text-purple-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-purple-200 inline-flex items-center gap-1.5">
              <span className="text-sm">🏦</span> Bank Loan Available
            </span>
          </div>
        </div>

        {/* Location Highlights */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className={`${item.bg} ${item.border} border rounded-xl sm:rounded-2xl p-3 sm:p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
            >
              <div className={`${item.iconColor} mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-sm sm:text-xl font-bold text-gray-900">{item.label}</h3>
              <p className={`text-2xl sm:text-3xl font-extrabold ${item.distColor} mt-0.5 sm:mt-1`}>{item.distance}</p>
              <p className="text-gray-500 text-[10px] sm:text-sm mt-0.5 sm:mt-1">Distance</p>
            </div>
          ))}
        </div>

        {/* NH 28 badge */}
        <div className="mt-8 sm:mt-10 text-center">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gold-50 to-gold-100 border border-gold-200 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-premium">
            <span className="text-2xl sm:text-3xl">🛣️</span>
            <div className="text-left">
              <p className="font-bold text-gray-900 text-sm sm:text-lg">NH 28 से केवल 200 मीटर</p>
              <p className="text-gold-700 text-xs sm:text-sm">Prime connectivity – Gorakhpur Highway</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
