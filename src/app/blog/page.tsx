import type { Metadata } from "next";
import { BlogHub } from "../components/BlogHub";

export const metadata: Metadata = {
  title: "Blog - IntakeFlow | AI Project Intake Insights",
  description: "Discover best practices, frameworks, and insights for AI-powered project intake, prioritization, and automation. Expert guides for enterprise teams.",
  openGraph: {
    title: "Blog - IntakeFlow | AI Project Intake Insights",
    description: "Discover best practices, frameworks, and insights for AI-powered project intake, prioritization, and automation.",
    url: "https://intakeflow.ai/blog",
  },
};

export default function BlogHubPage() {
  return <BlogHub />;
}
