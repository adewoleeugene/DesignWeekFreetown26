import type { Metadata } from "next";
import { Montserrat, Cedarville_Cursive } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const cedarville = Cedarville_Cursive({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

const airnt = localFont({
  src: [
    { path: "../public/fonts/Airnt-Quantum.otf", weight: "400", style: "normal" },
  ],
  variable: "--font-airnt",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://designweekfreetown.com"
      : "http://localhost:3000"
  ),
  title: "Design Week Freetown 2026 | Designing Sustainable Futures",
  description:
    "Design Week Freetown 2026 — Where Tech Meets Heritage. May 06-09, 2026. Freetown, Sierra Leone.",
  openGraph: {
    title: "Design Week Freetown 2026",
    description: "Where Tech Meets Heritage. May 06-09, 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${cedarville.variable} ${airnt.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
