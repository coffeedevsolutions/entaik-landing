import { Metadata } from "next";
import { AISurveyPlatform } from "@/app/components/features/AISurveyPlatform";

const title = "AI Survey Platform | Uptaik";
const description = "Create smarter surveys that actually get completed. AI-driven intake forms that adapt in real time, reduce fatigue, and capture better business data.";
const url = "https://www.uptaik.com/features/ai-survey-platform";
const image = "https://www.uptaik.com/og-hero.png";
const imageAlt = "Uptaik AI Survey Platform";

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

export default function AISurveyPlatformPage() {
  return <AISurveyPlatform />;
}

