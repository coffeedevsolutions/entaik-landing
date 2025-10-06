import { Metadata } from "next";

const title = "Incident Response Workflow | Uptaik";
const description = "Rapidly triage and resolve incidents with automated severity scoring, intelligent routing, and real-time communications.";
const url = "https://www.uptaik.com/workflows/incident-response";
const image = "https://www.uptaik.com/og-hero.png";
const imageAlt = "Uptaik Incident Response Workflow";

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

export default function IncidentResponseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

