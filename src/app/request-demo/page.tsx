import { Metadata } from "next";
import { RequestDemo } from "../components/RequestDemo";

const title = "Request a Demo | Uptaik";
const description = "Schedule a personalized demo of Uptaik's AI-powered project intake platform. See how we can transform your workflow.";
const url = "https://www.uptaik.com/request-demo";
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

export default function RequestDemoPage() {
  return <RequestDemo />;
}

