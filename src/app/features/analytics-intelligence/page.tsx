import { Metadata } from "next";
import { AnalyticsIntelligence } from "@/app/components/features/AnalyticsIntelligence";

const title = "Analytics & Intelligence | Uptaik";
const description = "Unlock insights into performance, predict risks, and optimize outcomes with AI analytics. Transform raw responses into actionable intelligence.";
const url = "https://www.uptaik.com/features/analytics-intelligence";
const image = "https://www.uptaik.com/og-hero.png";
const imageAlt = "Uptaik Analytics & Intelligence Platform";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: "Uptaik",
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
  robots: { index: true, follow: true },
};

export default function AnalyticsIntelligencePage() {
  return <AnalyticsIntelligence />;
}

