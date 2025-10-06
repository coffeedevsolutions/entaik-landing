import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Client Onboarding Workflow | Uptaik",
  description: "Accelerate client intake with adaptive matter-specific questions and document-aware deduplication for legal professionals.",
  alternates: {
    canonical: "https://www.uptaik.com/workflows/legal-client-onboarding",
  },
};

export default function LegalClientOnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

