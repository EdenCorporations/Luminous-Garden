import type { Metadata } from "next";
import { Instrument_Serif, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LayoutClient } from "@/components/LayoutClient";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "EdenCORP — The Origin of Industrial Intelligence",
  description:
    "AI-powered automation infrastructure that transforms how industries operate. By EdenCORP.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${instrumentSerif.variable} ${outfit.variable} ${jetbrainsMono.variable} font-body antialiased`}
      >
        <LayoutClient>{children}</LayoutClient>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
