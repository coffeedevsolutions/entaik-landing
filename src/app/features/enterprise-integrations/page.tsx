import { Metadata } from "next";
import { EnterpriseIntegrations } from "@/app/components/features/EnterpriseIntegrations";

export const metadata: Metadata = {
  title: "Enterprise Integrations | Uptaik",
  description: "Secure, scalable, and compliant—built for IT leaders and enterprise buyers. Enterprise-grade security and integrations you can trust.",
  alternates: {
    canonical: "https://www.uptaik.com/features/enterprise-integrations",
  },
};

export default function EnterpriseIntegrationsPage() {
  return <EnterpriseIntegrations />;
}

