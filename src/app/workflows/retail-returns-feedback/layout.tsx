import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retail & E-Commerce Returns Workflow | Uptaik",
  description: "Guide shoppers through fast, intelligent returns with adaptive branching and structured resolution paths.",
  alternates: {
    canonical: "https://www.uptaik.com/workflows/retail-returns-feedback",
  },
};

export default function RetailReturnsFeedbackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

