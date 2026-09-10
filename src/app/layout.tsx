import { entityDescription } from "@/lib/entity";
import { InquiryAnalytics } from "@/components/InquiryAnalytics";
import type { Metadata } from "next";
import { Instrument_Serif, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LayoutClient } from "@/components/LayoutClient";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.edencorp.org/#organization",
  name: "EdenCORP",
  url: "https://www.edencorp.org",
  description: entityDescription,
  sameAs: ["https://github.com/EdenCorporations", "https://www.linkedin.com/company/edencorp/"],
};

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
  metadataBase: new URL("https://www.edencorp.org"),
  alternates: { canonical: "/" },
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
      <head>
        <link rel="describedby" href="/llms.txt" type="text/plain" />
      </head>
      <body
        className={`${instrumentSerif.variable} ${outfit.variable} ${jetbrainsMono.variable} font-body antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
          }}
        />
        <LayoutClient>{children}</LayoutClient>
        <Analytics />
        <InquiryAnalytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
