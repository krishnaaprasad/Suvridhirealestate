"use client";

const features = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
    title: "20 Ft Main Road",
    desc: "Wide main road for easy vehicle access and future development",
    iconColor: "text-amber-600",
    lightBg: "bg-amber-50",
    borderColor: "border-amber-200",
    accentGradient: "from-amber-500 to-amber-700",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: "15 Ft Link Road",
    desc: "Internal link roads connecting all plots seamlessly",
    iconColor: "text-green-600",
    lightBg: "bg-green-50",
    borderColor: "border-green-200",
    accentGradient: "from-green-500 to-green-700",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Electricity",
    desc: "Ready electric pole infrastructure with meter connection",
    iconColor: "text-yellow-600",
    lightBg: "bg-yellow-50",
    borderColor: "border-yellow-200",
    accentGradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: "Drainage System",
    desc: "Proper drainage and water management system installed",
    iconColor: "text-blue-600",
    lightBg: "bg-blue-50",
    borderColor: "border-blue-200",
    accentGradient: "from-blue-500 to-cyan-500",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block bg-green-50 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full border border-green-200 mb-4">
            ✨ Plot Ki Suvidha
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Premium <span className="text-gold-gradient">Amenities</span> & Infrastructure
          </h2>
          <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-xl mx-auto px-2">
            Every plot comes with world-class infrastructure ready for immediate construction
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className={`group relative bg-white rounded-2xl border ${feat.borderColor} p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
            >
              {/* Hover gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feat.accentGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Icon - now with direct color class */}
              <div className={`${feat.lightBg} w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className={feat.iconColor}>
                  {feat.icon}
                </div>
              </div>

              <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{feat.title}</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed hidden sm:block">{feat.desc}</p>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feat.accentGradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
