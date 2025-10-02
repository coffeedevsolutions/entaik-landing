import { Metadata } from "next";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Automated Documentation — Uptaik",
  description: "Save hours of manual work by transforming intake responses into structured briefs, work plans, and backlog items. Turn conversations into professional project documentation.",
  openGraph: {
    title: "Automated Documentation — Uptaik",
    description: "Save hours of manual work by transforming intake responses into structured briefs, work plans, and backlog items. Turn conversations into professional project documentation.",
    url: "https://uptaik.com/features/automated-documentation",
  },
};

export default function AutomatedDocumentationLayout({
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

