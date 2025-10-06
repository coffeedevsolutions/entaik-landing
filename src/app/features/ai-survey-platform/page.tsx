import { Metadata } from "next";
import { AISurveyPlatform } from "@/app/components/features/AISurveyPlatform";

export const metadata: Metadata = {
  title: "AI Survey Platform | Uptaik",
  description: "Create smarter surveys that actually get completed. AI-driven intake forms that adapt in real time, reduce fatigue, and capture better business data.",
  alternates: {
    canonical: "https://www.uptaik.com/features/ai-survey-platform",
  },
};

export default function AISurveyPlatformPage() {
  return <AISurveyPlatform />;
}

