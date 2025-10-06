import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finance & Insurance Claim Intake Workflow | Uptaik",
  description: "Accelerate claims and reduce errors with adaptive intake and document-aware deduplication for financial services.",
  alternates: {
    canonical: "https://www.uptaik.com/workflows/finance-claim-intake",
  },
};

export default function FinanceClaimIntakeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

