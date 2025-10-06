import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Feature Request Workflow | Uptaik",
  description: "Capture, qualify, and prioritize feature requests from customers and internal teams with an adaptive intake flow.",
  alternates: {
    canonical: "https://www.uptaik.com/workflows/feature-request",
  },
};

export default function FeatureRequestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

