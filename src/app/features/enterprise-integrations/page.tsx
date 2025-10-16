import { Metadata } from "next";
import { EnterpriseIntegrations } from "@/app/components/features/EnterpriseIntegrations";
import { BreadcrumbSchema } from "@/app/components/BreadcrumbSchema";

const title = "Enterprise Integrations | Uptaik";
const description = "Secure, scalable, and compliant—built for IT leaders and enterprise buyers. Enterprise-grade security and integrations you can trust.";
const url = "https://www.uptaik.com/features/enterprise-integrations";
const image = "https://www.uptaik.com/og-hero.png";
const imageAlt = "Uptaik Enterprise Integrations Platform";

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

export default function EnterpriseIntegrationsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "https://www.uptaik.com" },
          { name: "Features", item: "https://www.uptaik.com/features" },
          { name: "Enterprise & Integrations", item: "https://www.uptaik.com/features/enterprise-integrations" }
        ]}
      />
      <EnterpriseIntegrations />
    </>
  );
}

