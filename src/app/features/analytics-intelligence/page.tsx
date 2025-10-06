import { Metadata } from "next";
import { AnalyticsIntelligence } from "@/app/components/features/AnalyticsIntelligence";

export const metadata: Metadata = {
  title: "Analytics & Intelligence | Uptaik",
  description: "Unlock insights into performance, predict risks, and optimize outcomes with AI analytics. Transform raw responses into actionable intelligence.",
  alternates: {
    canonical: "https://www.uptaik.com/features/analytics-intelligence",
  },
};

export default function AnalyticsIntelligencePage() {
  return <AnalyticsIntelligence />;
}

