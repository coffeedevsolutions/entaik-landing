import { Metadata } from "next";
import { FeaturesHub } from "../components/FeaturesHub";

const title = "Features | Uptaik";
const description = "Discover all the powerful features of Uptaik. AI-powered surveys, automated documentation, analytics intelligence, and enterprise integrations.";
const url = "https://www.uptaik.com/features";
const image = "https://www.uptaik.com/og-hero.png";
const imageAlt = "Uptaik Features Overview";

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

export default function FeaturesPage() {
  return <FeaturesHub />;
}


