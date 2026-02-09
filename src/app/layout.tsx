import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hakobyai.com"),
  title: {
    default: "HakobyAI | AI Phone Agent for HVAC Companies",
    template: "%s | HakobyAI",
  },
  description:
    "Stop missing HVAC jobs. HakobyAI's AI phone agent answers every call, triages emergencies, books appointments, and dispatches technicians — 24/7, 365 days a year.",
  keywords: [
    "HVAC AI phone agent",
    "HVAC answering service",
    "AI receptionist HVAC",
    "HVAC call answering",
    "HVAC appointment booking AI",
    "HVAC dispatch AI",
    "after hours HVAC answering",
    "HVAC emergency triage AI",
    "voice AI for HVAC",
    "HVAC missed call solution",
    "24/7 HVAC phone agent",
    "HVAC lead capture AI",
    "heating and cooling AI agent",
  ],
  authors: [{ name: "HakobyAI" }],
  creator: "HakobyAI",
  openGraph: {
    title: "HakobyAI | AI Phone Agent for HVAC Companies",
    description:
      "AI-powered phone agent that answers HVAC calls, triages emergencies, books service appointments, and dispatches technicians — 24/7.",
    type: "website",
    url: "https://hakobyai.com",
    siteName: "HakobyAI",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HakobyAI | AI Phone Agent for HVAC Companies",
    description:
      "AI-powered phone agent for HVAC companies. Answers calls, triages emergencies, books appointments — 24/7.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://hakobyai.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HakobyAI",
  url: "https://hakobyai.com",
  description:
    "AI-powered phone agent for HVAC companies. Answers calls, triages emergencies, books appointments, and dispatches technicians 24/7.",
  areaServed: "US",
  serviceType: [
    "HVAC AI Phone Agent",
    "HVAC Call Answering",
    "HVAC Appointment Booking",
    "HVAC Emergency Dispatch",
  ],
  knowsLanguage: ["English", "Russian", "Armenian"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
