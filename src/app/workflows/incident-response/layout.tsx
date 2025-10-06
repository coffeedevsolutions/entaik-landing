import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Incident Response Workflow | Uptaik",
  description: "Rapidly triage and resolve incidents with automated severity scoring, intelligent routing, and real-time communications.",
  alternates: {
    canonical: "https://www.uptaik.com/workflows/incident-response",
  },
};

export default function IncidentResponseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

