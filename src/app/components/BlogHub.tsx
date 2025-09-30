import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: string;
  publishDate: string;
  readTime: string;
  author: string;
}

interface BlogHubProps {
  onNavigate?: (view: string, postId?: string) => void;
}

export function BlogHub({ onNavigate }: BlogHubProps) {
  const blogPosts: BlogPost[] = [
    {
      id: "ai-driven-pipelines",
      title: "Replace ad-hoc intake with AI-driven pipelines",
      description: "Learn how leading PMOs are transforming scattered intake processes into structured, automated workflows.",
      category: "Best Practices",
      publishDate: "2025-09-15",
      readTime: "5 min read",
      author: "Sarah Chen"
    },
    {
      id: "prioritization-frameworks",
      title: "RICE vs WSJF vs MoSCoW: choosing a prioritization model",
      description: "A comprehensive guide to selecting the right prioritization framework for your organization's unique needs.",
      category: "Framework Guide",
      publishDate: "2025-09-10",
      readTime: "8 min read",
      author: "Michael Torres"
    },
    {
      id: "jira-automation",
      title: "From brief to backlog: automating epic creation in Jira",
      description: "How AI can transform project briefs into properly structured Jira epics, stories, and tasks in seconds.",
      category: "Technical",
      publishDate: "2025-09-05",
      readTime: "6 min read",
      author: "Alex Rivera"
    },
    {
      id: "construction-workflows",
      title: "Building intake workflows for construction enterprises",
      description: "Industry-specific patterns for capturing capital project requests with complete context and compliance documentation.",
      category: "Industry Guide",
      publishDate: "2025-08-28",
      readTime: "7 min read",
      author: "Jennifer Park"
    },
    {
      id: "healthcare-compliance",
      title: "Healthcare project intake: balancing speed and compliance",
      description: "How healthcare organizations streamline intake while maintaining HIPAA compliance and patient safety standards.",
      category: "Industry Guide",
      publishDate: "2025-08-20",
      readTime: "6 min read",
      author: "Dr. Robert Kim"
    },
    {
      id: "stakeholder-communication",
      title: "Communicating prioritization decisions with data",
      description: "Turn subjective prioritization debates into transparent, data-driven conversations with stakeholders.",
      category: "Best Practices",
      publishDate: "2025-08-15",
      readTime: "5 min read",
      author: "Sarah Chen"
    }
  ];

  const handlePostClick = (postId: string) => {
    if (onNavigate) {
      onNavigate("blog-post", postId);
    }
    // When using Next.js routing, this will be handled by Link components
  };

  return (
    <div className="min-h-screen">
      <Navigation onNavigate={onNavigate} currentView="blog-hub" />
      
      <main className="pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
              Resources & Insights
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn about modern project intake, prioritization frameworks, and automation strategies for non-tech enterprises.
            </p>
          </div>

          {/* Featured Post */}
          <Link href={onNavigate ? "#" : `/blog/${blogPosts[0].id}`} className="block">
            <Card 
              className="mb-12 overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
              onClick={onNavigate ? () => handlePostClick(blogPosts[0].id) : undefined}
            >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-video md:aspect-auto bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-12">
                <div className="w-full h-full rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 opacity-20" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-blue-200 w-fit">
                  Featured • {blogPosts[0].category}
                </Badge>
                <h2 className="text-3xl group-hover:text-blue-600 transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {blogPosts[0].description}
                </p>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={blogPosts[0].publishDate}>
                      {new Date(blogPosts[0].publishDate).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                    <span>•</span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 group-hover:gap-3 transition-all">
                    <span>Read article</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
          </Link>

          {/* All Posts Grid */}
          <div className="mb-12">
            <h2 className="text-2xl mb-8">All Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {blogPosts.map((post) => (
                <Link key={post.id} href={onNavigate ? "#" : `/blog/${post.id}`} className="block">
                  <Card 
                    className="p-6 space-y-4 hover:shadow-lg transition-all group cursor-pointer"
                    onClick={onNavigate ? () => handlePostClick(post.id) : undefined}
                  >
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="outline" className="text-blue-600 border-blue-200">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground line-clamp-2">
                    {post.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={post.publishDate}>
                        {new Date(post.publishDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </time>
                    </div>
                    
                    <div className="flex items-center gap-2 text-blue-600 group-hover:gap-3 transition-all">
                      <span className="text-sm">Read more</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-20 p-12 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl text-center">
            <h3 className="text-3xl mb-4">Stay Updated</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest insights on project intake, prioritization, and automation delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}