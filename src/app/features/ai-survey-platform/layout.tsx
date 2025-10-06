import { Metadata } from "next";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "AI Survey Platform — Uptaik",
  description: "Create smarter surveys that actually get completed. AI-driven intake forms that adapt in real time, reduce fatigue, and capture better business data.",
  openGraph: {
    title: "AI Survey Platform — Uptaik",
    description: "Create smarter surveys that actually get completed. AI-driven intake forms that adapt in real time, reduce fatigue, and capture better business data.",
    url: "https://www.uptaik.com/features/ai-survey-platform",
  },
};

export default function AISurveyPlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}

