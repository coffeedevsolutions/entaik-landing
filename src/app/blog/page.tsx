import type { Metadata } from "next";
import { BlogHub } from "../components/BlogHub";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Blog - uptaik | AI Project Intake Insights",
  description: "Discover best practices, frameworks, and insights for AI-powered project intake, prioritization, and automation. Expert guides for enterprise teams.",
  openGraph: {
    title: "Blog - uptaik | AI Project Intake Insights",
    description: "Discover best practices, frameworks, and insights for AI-powered project intake, prioritization, and automation.",
    url: "https://uptaik.com/blog",
  },
};

export default function BlogHubPage() {
  return (
    <>
      <Navigation />
      <main>
        <BlogHub />
      </main>
      <Footer />
    </>
  );
}
