import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import Providers from "@/components/Providers";
import GoogleAnalytics from "@/lib/analytics/google-analytics";
import MicrosoftClarity from "@/lib/analytics/microsoft-clarity";
// import ThemeSwitcher from "@/components/ThemeSwitcher"; // A/B Test - bei Bedarf wieder aktivieren

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cuto.ai'),
  title: {
    default: "CUTO - Project Management for SAP Projects",
    template: "%s | CUTO"
  },
  description: "Plan, manage and execute SAP projects smarter with CUTO. Pre-configured templates, realistic effort estimation, and intelligent dashboards for S/4HANA implementations, migrations, and cutover.",
  keywords: [
    "SAP project management",
    "S/4HANA implementation",
    "SAP cutover",
    "SAP migration",
    "SAP templates",
    "SAP Activate",
    "project planning",
    "PMO software",
    "SAP consulting tools",
    "enterprise project management"
  ],
  authors: [{ name: "benX AG" }],
  creator: "benX AG",
  publisher: "benX AG",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cuto.ai",
    siteName: "CUTO",
    title: "CUTO - Project Management for SAP Projects",
    description: "Plan, manage and execute SAP projects smarter with CUTO. Pre-configured templates, realistic effort estimation, and intelligent dashboards.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CUTO - SAP Project Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CUTO - Project Management for SAP Projects",
    description: "Plan, manage and execute SAP projects smarter with CUTO. Pre-configured templates and intelligent dashboards.",
    images: ["/og-image.png"],
    creator: "@cuto_ai",
  },
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://cuto.ai",
  },
  category: "technology",
};

// JSON-LD Schema for Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CUTO",
  "url": "https://cuto.ai",
  "logo": "https://cuto.ai/logo.svg",
  "description": "CUTO is a project management platform for SAP projects, offering templates, dashboards, and tools for successful implementations.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Richard-Wagner-Str. 38",
    "addressLocality": "Waldkraiburg",
    "postalCode": "84478",
    "addressCountry": "DE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "info@cuto.de",
    "contactType": "sales"
  },
  "sameAs": [
    "https://www.linkedin.com/company/cuto-ai",
    "https://twitter.com/cuto_ai",
    "https://github.com/cuto-ai"
  ]
};

// JSON-LD Schema for SoftwareApplication
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "CUTO",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Project management platform for SAP projects with 75+ templates and 80+ dashboards",
  "offers": {
    "@type": "Offer",
    "price": "990",
    "priceCurrency": "EUR",
    "priceValidUntil": "2025-12-31",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "127"
  },
  "featureList": [
    "80+ Dashboards",
    "75+ Project Templates",
    "BPMN Process Editor",
    "Data Migration Tools",
    "Cutover Management",
    "Risk & Issue Tracking"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <MicrosoftClarity />
        <Providers>
          <div className="min-h-screen">
            <Navigation />
            <main>
              {children}
            </main>
            <Footer />
          </div>
          <CookieConsent />
          {/* <ThemeSwitcher /> */}{/* A/B Test - bei Bedarf wieder aktivieren */}
        </Providers>
      </body>
    </html>
  );
}
