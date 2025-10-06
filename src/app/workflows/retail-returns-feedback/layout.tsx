import { Metadata } from "next";

const title = "Retail & E-Commerce Returns Workflow | Uptaik";
const description = "Guide shoppers through fast, intelligent returns with adaptive branching and structured resolution paths.";
const url = "https://www.uptaik.com/workflows/retail-returns-feedback";
const image = "https://www.uptaik.com/og-hero.png";
const imageAlt = "Uptaik Retail Returns Workflow";

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
    images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
  robots: { index: true, follow: true },
};

export default function RetailReturnsFeedbackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

