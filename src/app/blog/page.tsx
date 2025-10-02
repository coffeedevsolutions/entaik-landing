import type { Metadata } from "next";
import { BlogHub } from "../components/BlogHub";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { getAllBlogPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog - Uptaik | AI Project Intake Insights",
  description: "Discover best practices, frameworks, and insights for AI-powered project intake, prioritization, and automation. Expert guides for enterprise teams.",
  openGraph: {
    title: "Blog - Uptaik | AI Project Intake Insights",
    description: "Discover best practices, frameworks, and insights for AI-powered project intake, prioritization, and automation.",
    url: "https://uptaik.com/blog",
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
