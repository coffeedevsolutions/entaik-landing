import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare Patient Experience Survey Workflow | Uptaik",
  description: "Capture timely, nuanced patient feedback after visits with adaptive questions and fatigue-aware completion.",
  alternates: {
    canonical: "https://www.uptaik.com/workflows/healthcare-patient-experience",
  },
};

export default function HealthcarePatientExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

