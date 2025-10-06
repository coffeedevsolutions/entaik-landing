import { Metadata } from "next";
import { Pricing } from "../components/Pricing";

const title = "Pricing | Uptaik";
const description = "Join the Uptaik beta program and get early access to AI-powered project intake and prioritization. Limited seats available.";
const url = "https://www.uptaik.com/pricing";
const image = "https://www.uptaik.com/og-hero.png";
const imageAlt = "Uptaik AI-powered project intake platform";

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

export default function PricingPage() {
  return <Pricing />;
}

