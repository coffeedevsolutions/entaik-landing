import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./styles/Globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.uptaik.com'),
  title: "Uptaik — AI-Powered Project Intake & Prioritization",
  description:
    "Consolidate project requests with adaptive AI surveys. Generate project briefs, prioritize requests, and auto-create Jira epics. Perfect for construction, utilities, healthcare, and non-tech enterprises.",
  keywords: [
    "AI project intake",
    "adaptive intake surveys",
    "AI project briefs",
    "backlog automation",
    "Jira integration",
    "enterprise project intake",
    "non-tech IT request pipeline",
    "dynamic request forms",
    "analytics request management",
    "construction project management",
    "utilities project intake",
    "healthcare project requests"
  ],
  authors: [{ name: "Uptaik Team" }],
  creator: "Uptaik",
  publisher: "Uptaik",

  // Favicons & app icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
    other: [
      // For Safari pinned tabs
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#6366f1" },
    ],
  },

  // PWA manifest (Chrome uses these for installed icons)
  manifest: "/site.webmanifest",

  // Android UI color
  themeColor: "#ffffff",

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
    url: "https://www.uptaik.com",
    siteName: "Uptaik",
    title: "Uptaik — AI-Powered Project Intake & Prioritization",
    description:
      "Replace static forms with adaptive AI intake, automated briefs, prioritization, and Jira-ready epics.",
    images: [
      {
        url: "/og-hero.png",
        width: 1200,
        height: 630,
        alt: "Uptaik AI project intake dashboard mockup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uptaik — AI-Powered Project Intake",
    description:
      "Adaptive AI intake surveys, automated documentation, and Jira integration for enterprise teams.",
    images: ["/og-hero.png"],
    creator: "@uptaik",
  },
  alternates: {
    canonical: "https://www.uptaik.com",
  },
  verification: {
    google: "your-google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
        
        {/* Organization Schema - Brand Logo for Google */}
        <Script id="org-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Uptaik",
            "url": "https://www.uptaik.com",
            "logo": "https://www.uptaik.com/logo.png",
            "sameAs": [
              "https://www.linkedin.com/company/uptaik",
              "https://x.com/uptaik"
            ]
          })}
        </Script>
        
        {/* HubSpot Forms */}
        <Script
          src="https://js.hsforms.net/forms/embed/44587597.js"
          strategy="afterInteractive"
        />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CBM5HM6PDG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CBM5HM6PDG');
          `}
        </Script>
      </body>
    </html>
  );
}
