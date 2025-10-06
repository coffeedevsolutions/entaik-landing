import { Metadata } from "next";

const title = "Legal Client Onboarding Workflow | Uptaik";
const description = "Accelerate client intake with adaptive matter-specific questions and document-aware deduplication for legal professionals.";
const url = "https://www.uptaik.com/workflows/legal-client-onboarding";
const image = "https://www.uptaik.com/og-hero.png";
const imageAlt = "Uptaik Legal Client Onboarding Workflow";

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

export default function LegalClientOnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

