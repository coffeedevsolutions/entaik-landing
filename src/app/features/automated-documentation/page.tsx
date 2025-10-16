import { Metadata } from "next";
import { AutomatedDocumentation } from "@/app/components/features/AutomatedDocumentation";
import { BreadcrumbSchema } from "@/app/components/BreadcrumbSchema";

const title = "Automated Documentation | Uptaik";
const description = "Save hours of manual work by transforming intake responses into structured briefs, work plans, and backlog items with AI-powered automation.";
const url = "https://www.uptaik.com/features/automated-documentation";
const image = "https://www.uptaik.com/og-hero.png";
const imageAlt = "Uptaik Automated Documentation Platform";

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

export default function AutomatedDocumentationPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "https://www.uptaik.com" },
          { name: "Features", item: "https://www.uptaik.com/features" },
          { name: "Automated Documentation", item: "https://www.uptaik.com/features/automated-documentation" }
        ]}
      />
      <AutomatedDocumentation />
    </>
  );
}

