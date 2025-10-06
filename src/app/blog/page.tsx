import type { Metadata } from "next";
import { BlogHub } from "../components/BlogHub";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { getAllBlogPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog - Uptaik | AI Project Management & Intake Insights",
  description: "Discover AI in project management best practices, top project management tools reviews, frameworks for AI project management platforms, and automation insights for enterprise teams.",
  keywords: [
    "ai project management",
    "ai in project management",
    "ai for project management",
    "project management platforms",
    "top project management tools",
    "project intake automation",
    "RICE prioritization",
    "WSJF framework",
    "Jira automation"
  ],
  alternates: {
    canonical: "https://www.uptaik.com/blog"
  },
  openGraph: {
    type: "website",
    title: "Blog - Uptaik | AI Project Management & Automation Insights",
    description: "Discover AI in project management best practices, top project management tools, and automation insights for enterprise teams.",
    url: "https://www.uptaik.com/blog",
    siteName: "Uptaik",
    images: [
      {
        url: "https://www.uptaik.com/og-hero.png",
        width: 1200,
        height: 630,
        alt: "Uptaik AI project intake dashboard"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Uptaik Blog | AI Project Management Insights",
    description: "Best practices for AI in project management, top tools, and automation insights.",
    images: ["https://www.uptaik.com/og-hero.png"]
  },
};

export default async function BlogHubPage() {
  const posts = await getAllBlogPosts();
  
  return (
    <>
      <Navigation />
      <main>
        <BlogHub blogPosts={posts} />
      </main>
      <Footer />
    </>
  );
}
