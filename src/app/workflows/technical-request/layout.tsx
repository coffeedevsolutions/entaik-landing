import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Request Intake Workflow | Uptaik",
  description: "Streamline internal IT, data, and engineering requests with an intelligent, adaptive intake process powered by AI.",
  alternates: {
    canonical: "https://www.uptaik.com/workflows/technical-request",
  },
};

export default function TechnicalRequestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

