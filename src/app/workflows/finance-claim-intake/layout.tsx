import { Metadata } from "next";

const title = "Finance & Insurance Claim Intake Workflow | Uptaik";
const description = "Accelerate claims and reduce errors with adaptive intake and document-aware deduplication for financial services.";
const url = "https://www.uptaik.com/workflows/finance-claim-intake";
const image = "https://www.uptaik.com/og-hero.png";
const imageAlt = "Uptaik Finance Claim Intake Workflow";

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

export default function FinanceClaimIntakeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

