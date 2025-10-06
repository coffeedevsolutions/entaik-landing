import { Metadata } from "next";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Analytics & Intelligence — Uptaik",
  description: "Unlock insights into performance, predict risks, and optimize outcomes with AI analytics. Make data-driven decisions with project intelligence.",
  openGraph: {
    title: "Analytics & Intelligence — Uptaik",
    description: "Unlock insights into performance, predict risks, and optimize outcomes with AI analytics. Make data-driven decisions with project intelligence.",
    url: "https://www.uptaik.com/features/analytics-intelligence",
  },
};

export default function AnalyticsIntelligenceLayout({
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

