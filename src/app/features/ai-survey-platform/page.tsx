import { Metadata } from "next";
import { AISurveyPlatform } from "@/app/components/features/AISurveyPlatform";
import { BreadcrumbSchema } from "@/app/components/BreadcrumbSchema";

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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Uptaik AI Survey Platform",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url,
            description:
              "Adaptive AI intake surveys that reduce fatigue and capture complete requirements in fewer questions.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            publisher: {
              "@type": "Organization",
              name: "Uptaik",
            },
          }),
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "https://www.uptaik.com" },
          { name: "Features", item: "https://www.uptaik.com/features" },
          { name: "AI Survey Platform", item: "https://www.uptaik.com/features/ai-survey-platform" }
        ]}
      />
      <AISurveyPlatform />
    </>
  );
}

