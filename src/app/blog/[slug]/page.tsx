import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPage } from "../../components/BlogPage";
import { getBlogBySlug, getAllBlogSlugs } from "@/data/blogs";

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogBySlug(slug);

  if (!article) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: `${article.title} — Uptaik Blog`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.publishDate,
      authors: [article.author.name],
      images: [article.heroImage],
      url: `https://uptaik.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getBlogBySlug(slug);

  if (!article) {
    notFound();
  }

  return <BlogPage article={article} />;
}
