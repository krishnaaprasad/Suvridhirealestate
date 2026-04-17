import "./globals.css";

export const metadata = {
  title: "Plots in Gorakhpur - Suvridhi Bhoomi Infra Pvt Ltd | ₹651/sqft",
  description:
    "Affordable plots at ₹651/sqft near NH 28 in Gorakhpur. Premium plotted land at Rampur Sonbarsa Bazar. Book your dream plot with Suvridhi Bhoomi Infra Private Limited.",
  keywords:
    "plots in Gorakhpur, Suvridhi Bhoomi, affordable plots, NH 28, Rampur, Sonbarsa Bazar, plot booking, real estate Gorakhpur",
  openGraph: {
    title: "Plots in Gorakhpur - Suvridhi Bhoomi | ₹651/sqft",
    description: "Affordable plots at ₹651/sqft near NH 28 in Gorakhpur",
    type: "website",
  },
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Noto+Sans+Devanagari:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
