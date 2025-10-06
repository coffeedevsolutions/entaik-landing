import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";
import { Badge } from "../../components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import Image from "next/image";
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
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
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  const url = `https://www.uptaik.com/blog/${slug}`;
  // Use custom ogImage from frontmatter, fallback to auto-generated or hero image
  const ogImagePath = post.ogImage || post.heroImage || `/og/${slug}.png`;
  // Ensure ogImage is an absolute URL for Open Graph
  const ogImage = ogImagePath.startsWith('http') 
    ? ogImagePath 
    : `https://www.uptaik.com${ogImagePath}`;

  return {
    title: `${post.title} — Uptaik Blog`,
    description: post.description,
    alternates: {
      canonical: post.canonical || url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author.name],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
      url,
      siteName: "Uptaik",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage],
      creator: "@uptaik",
    },
    keywords: post.tags?.join(', '),
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const url = `https://www.uptaik.com/blog/${slug}`;
  
  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    image: [`https://www.uptaik.com${post.heroImage}`],
    mainEntityOfPage: url,
    publisher: {
      '@type': 'Organization',
      name: 'Uptaik',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.uptaik.com/images/uptaik-logo-2-white.png'
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main>
        <article className="pt-20 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <Link href="/blog">
              <Button variant="ghost" className="mb-8 gap-2 cursor-pointer">
                <ArrowLeft className="w-4 h-4 cursor-pointer" />
                Back to Blog
              </Button>
            </Link>

            {/* Article Header */}
            <header className="space-y-6 mb-12">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-blue-200">
                {post.category}
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                {post.title}
              </h1>

              <p className="text-xl text-muted-foreground">
                {post.description}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.publishDate}>
                    {new Date(post.publishDate).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-lg">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium">{post.author.name}</div>
                  <div className="text-sm text-muted-foreground">{post.author.role}</div>
                </div>
              </div>
            </header>

            {/* Hero Image */}
            {post.heroImage && (
              <div className="mb-12">
                <Image 
                  src={post.heroImage}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="rounded-lg w-full"
                  priority
                />
              </div>
            )}

            {/* Article Content - MDX with custom styled components */}
            <div className="max-w-none">
              <MDXRemote 
                source={post.content}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [rehypeSlug],
                  },
                }}
                components={{
                  // Custom Image component for MDX
                  img: ({ src, alt }) => {
                    // Handle both absolute and relative paths
                    const imageSrc = src?.startsWith('/') ? src : `/images/${src}`;
                    return (
                      <Image 
                        src={imageSrc}
                        alt={alt || ''}
                        width={800}
                        height={450}
                        className="rounded-lg my-8 w-full"
                      />
                    );
                  },
                  h1: ({ children }) => (
                    <h1 className="text-4xl font-bold tracking-tight mt-8 mb-4 text-gray-900">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-bold tracking-tight mt-12 mb-6 text-gray-900 border-b border-gray-200 pb-2">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-bold tracking-tight mt-8 mb-4 text-gray-900">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="my-6 space-y-3 list-disc pl-6">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="my-6 space-y-3 list-decimal pl-6">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-lg text-gray-700 leading-relaxed">
                      {children}
                    </li>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-blue-500 pl-6 my-8 italic text-lg text-gray-700 bg-blue-50 py-4 rounded-r-lg">
                      {children}
                    </blockquote>
                  ),
                  a: ({ href, children }) => (
                    <a 
                      href={href} 
                      className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-500 transition-colors"
                    >
                      {children}
                    </a>
                  ),
                  code: ({ children }) => (
                    <code className="bg-gray-100 text-gray-900 px-2 py-0.5 rounded text-sm font-mono">
                      {children}
                    </code>
                  ),
                  pre: ({ children }) => (
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6">
                      {children}
                    </pre>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-gray-900">
                      {children}
                    </strong>
                  ),
                  em: ({ children }) => (
                    <em className="italic text-gray-700">
                      {children}
                    </em>
                  ),
                  hr: () => (
                    <hr className="my-12 border-t-2 border-gray-200" />
                  ),
                }}
              />
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-sm">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
