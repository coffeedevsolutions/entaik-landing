import { Metadata } from "next";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Enterprise & Integrations — Uptaik",
  description: "Secure, scalable, and compliant—built for IT leaders and enterprise buyers. Enterprise-ready platform that works with your workflow.",
  openGraph: {
    title: "Enterprise & Integrations — Uptaik",
    description: "Secure, scalable, and compliant—built for IT leaders and enterprise buyers. Enterprise-ready platform that works with your workflow.",
    url: "https://www.uptaik.com/features/enterprise-integrations",
  },
};

export default function EnterpriseIntegrationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}

