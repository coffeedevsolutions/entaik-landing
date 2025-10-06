import { Metadata } from "next";
import { AutomatedDocumentation } from "@/app/components/features/AutomatedDocumentation";

export const metadata: Metadata = {
  title: "Automated Documentation | Uptaik",
  description: "Save hours of manual work by transforming intake responses into structured briefs, work plans, and backlog items with AI-powered automation.",
  alternates: {
    canonical: "https://www.uptaik.com/features/automated-documentation",
  },
};

export default function AutomatedDocumentationPage() {
  return <AutomatedDocumentation />;
}

