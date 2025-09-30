import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Card } from "./ui/card";
import Link from "next/link";

interface BlogArticle {
  id: string;
  title: string;
  description: string;
  category: string;
  publishDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  heroImage: string;
  content: {
    sections: Array<{
      heading?: string;
      paragraphs?: string[];
      list?: {
        items: string[];
      };
      quote?: string;
    }>;
  };
  relatedArticles?: Array<{
    title: string;
    category: string;
    readTime: string;
  }>;
}

interface BlogPageProps {
  article: BlogArticle;
  onNavigate?: (view: string, postId?: string) => void;
}

export function BlogPage({ article, onNavigate }: BlogPageProps) {
  return (
    <div className="min-h-screen">
      <Navigation onNavigate={onNavigate} currentView="blog-post" />
      
      <main>
        {/* Hero Section */}
        <article className="pt-20 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            {onNavigate ? (
              <Button 
                variant="ghost" 
                className="mb-8 gap-2"
                onClick={() => onNavigate("blog-hub")}
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Button>
            ) : (
              <Link href="/blog">
                <Button 
                  variant="ghost" 
                  className="mb-8 gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Button>
              </Link>
            )}

            {/* Article Header */}
            <header className="space-y-6 mb-12">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-blue-200">
                {article.category}
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                {article.title}
              </h1>

              <p className="text-xl text-muted-foreground">
                {article.description}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={article.publishDate}>
                    {new Date(article.publishDate).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>By {article.author.name}</span>
                </div>
              </div>

              {/* Share Button */}
              <div className="pt-4">
                <Button variant="outline" className="gap-2">
                  <Share2 className="w-4 h-4" />
                  Share Article
                </Button>
              </div>
            </header>

            {/* Hero Image */}
            <div className="mb-12">
              <img 
                src={article.heroImage}
                alt={article.title}
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none space-y-8">
              {article.content.sections.map((section, index) => (
                <section key={index} className="space-y-4">
                  {section.heading && (
                    <h2 className="text-3xl mt-12 mb-6">
                      {section.heading}
                    </h2>
                  )}
                  
                  {section.paragraphs?.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-lg text-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}

                  {section.list && (
                    <ul className="space-y-3 my-6">
                      {section.list.items.map((item, lIndex) => (
                        <li key={lIndex} className="flex gap-3">
                          <span className="text-blue-600 mt-2">•</span>
                          <span className="text-lg text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.quote && (
                    <blockquote className="border-l-4 border-blue-600 pl-6 py-4 my-8 bg-muted/50 rounded-r-lg">
                      <p className="text-xl italic text-foreground">
                        {section.quote}
                      </p>
                    </blockquote>
                  )}
                </section>
              ))}
            </div>

            {/* Author Bio */}
            <div className="mt-16 pt-8 border-t border-border">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                  <span className="text-xl">{article.author.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="text-xl mb-1">{article.author.name}</h3>
                  <p className="text-muted-foreground">{article.author.role}</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 p-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl text-center">
              <h3 className="text-2xl mb-4">Ready to Transform Your Intake Process?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Join the beta and be among the first to experience AI-powered project intake.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Join the Beta
              </Button>
            </div>
          </div>

          {/* Related Articles */}
          {article.relatedArticles && article.relatedArticles.length > 0 && (
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
              <h3 className="text-2xl mb-8">Related Articles</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {article.relatedArticles.map((related, index) => (
                  <Card key={index} className="p-6 space-y-3 hover:shadow-lg transition-shadow cursor-pointer">
                    <Badge variant="outline" className="text-blue-600 border-blue-200">
                      {related.category}
                    </Badge>
                    <h4 className="text-lg">{related.title}</h4>
                    <p className="text-sm text-muted-foreground">{related.readTime}</p>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
}

// Example blog article data
export const exampleBlogArticle: BlogArticle = {
  id: "ai-driven-pipelines",
  title: "Replace ad-hoc intake with AI-driven pipelines",
  description: "Learn how leading PMOs are transforming scattered intake processes into structured, automated workflows that capture complete requirements and eliminate endless follow-ups.",
  category: "Best Practices",
  publishDate: "2025-09-15",
  readTime: "5 min read",
  author: {
    name: "Sarah Chen",
    role: "Product Strategy Lead"
  },
  heroImage: "https://images.unsplash.com/photo-1748256622734-92241ae7b43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTkxMTcwNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  content: {
    sections: [
      {
        paragraphs: [
          "For most non-tech enterprises, project intake is a painful mess of scattered emails, impromptu hallway conversations, and static forms that capture just enough information to create more questions. Product managers and PMO leaders spend countless hours chasing down stakeholders for missing details, conducting follow-up meetings to understand requirements, and manually documenting everything before work can even begin.",
          "The cost isn't just time—it's strategic clarity. When intake is ad-hoc, prioritization becomes political rather than data-driven. The loudest voice wins, not necessarily the highest-impact project."
        ]
      },
      {
        heading: "The Traditional Intake Problem",
        paragraphs: [
          "Most organizations have tried to solve this with static intake forms. Fill out these 20 fields, submit, and wait. But static forms have fundamental limitations:"
        ],
        list: {
          items: [
            "They can't adapt to different request types. A construction safety upgrade needs different information than a clinical system enhancement.",
            "They miss context. Without follow-up questions, you get surface-level answers that lead to endless clarification cycles.",
            "They create bottlenecks. Someone still needs to review, ask follow-ups, document, and prioritize—all manually.",
            "They frustrate requestors. Non-technical stakeholders don't speak the language of user stories and acceptance criteria."
          ]
        }
      },
      {
        heading: "The AI-Driven Alternative",
        paragraphs: [
          "AI-powered intake fundamentally changes this dynamic. Instead of static forms, imagine conversational surveys that adapt in real-time based on responses. When a stakeholder mentions regulatory requirements, the AI asks about specific compliance frameworks. When they describe operational impact, it probes for affected systems and user groups.",
          "This adaptive approach captures complete context the first time, eliminating the follow-up meeting tax that drains PM calendars."
        ],
        quote: "We went from spending 3-5 hours per intake request to having complete briefs generated in minutes. The AI asks better questions than we were asking in follow-ups."
      },
      {
        heading: "From Conversation to Structured Output",
        paragraphs: [
          "But the magic isn't just in capturing information—it's in what happens next. AI can take that conversational input and automatically generate:",
          "Standardized project briefs with all the details your team needs. Complete requirement documentation without manual transcription. Pre-scored prioritization using frameworks like RICE, WSJF, or MoSCoW. Structured work items ready to push to Jira or your project management tool.",
          "This transformation from unstructured conversation to structured, actionable output is what makes AI-driven intake fundamentally different from traditional approaches."
        ]
      },
      {
        heading: "Implementation Patterns That Work",
        paragraphs: [
          "Leading PMOs implementing AI-driven intake follow a consistent pattern. They start with their highest-volume request type—often infrastructure improvements or operational changes—and create an adaptive intake flow for just that use case.",
          "The AI learns their specific terminology, compliance requirements, and prioritization criteria. As confidence builds, they expand to other request types, building a library of intelligent intake flows that handle everything from capital projects to system enhancements.",
          "Within 90 days, most see dramatic improvements in both speed and completeness of intake documentation."
        ]
      },
      {
        heading: "The Strategic Impact",
        paragraphs: [
          "The impact extends beyond operational efficiency. When every request is captured with complete context and scored consistently, prioritization becomes transparent and data-driven. Stakeholders understand why their request is or isn't being prioritized. Executives get a clear view of demand across the portfolio.",
          "Instead of managing intake chaos, product leaders can focus on strategic decisions: which initiatives truly drive business value, where capacity should be allocated, and how to communicate the roadmap with confidence.",
          "AI-driven intake isn't about replacing PMs—it's about giving them back the time to do strategic work instead of administrative follow-up."
        ]
      }
    ]
  },
  relatedArticles: [
    {
      title: "RICE vs WSJF vs MoSCoW: choosing a prioritization model",
      category: "Framework Guide",
      readTime: "8 min read"
    },
    {
      title: "From brief to backlog: automating epic creation in Jira",
      category: "Technical",
      readTime: "6 min read"
    },
    {
      title: "Building intake workflows for construction enterprises",
      category: "Industry Guide",
      readTime: "7 min read"
    }
  ]
};