import { Metadata } from "next";

const title = "Technical Request Intake Workflow | Uptaik";
const description = "Streamline internal IT, data, and engineering requests with an intelligent, adaptive intake process powered by AI.";
const url = "https://www.uptaik.com/workflows/technical-request";
const image = "https://www.uptaik.com/og-hero.png";
const imageAlt = "Uptaik Technical Request Workflow";

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

export default function TechnicalRequestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

