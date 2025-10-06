import { Metadata } from "next";

const title = "Internal IT/HR Ticketing Workflow | Uptaik";
const description = "Standardize and speed up employee requests with adaptive questioning and auto-creation of tickets in your systems.";
const url = "https://www.uptaik.com/workflows/internal-it-hr-ticketing";
const image = "https://www.uptaik.com/og-hero.png";
const imageAlt = "Uptaik Internal IT/HR Ticketing Workflow";

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

export default function InternalItHrTicketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

