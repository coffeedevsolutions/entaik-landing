import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Card } from "./ui/card";
import Link from "next/link";
import Image from "next/image";

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
              <Image 
                src={article.heroImage}
                alt={article.title}
                width={800}
                height={400}
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
  title: "Replace Ad-Hoc Intake with AI-Driven Pipelines",
  description: "Discover how AI-driven intake pipelines transform chaotic project requests into structured, automated workflows that improve visibility, speed, and alignment.",
  category: "Best Practices",
  publishDate: "2024-12-15",
  readTime: "7 min read",
  author: {
    name: "Sarah Chen",
    role: "Senior Product Manager"
  },
  heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80",
  content: {
    sections: [
      {
        paragraphs: [
          "If your team still manages requests through ad-hoc intake—emails, Slack messages, spreadsheets—you’ve likely felt the pain: endless back-and-forth, missing details, and priorities that slip through the cracks. These fragmented processes create chaos, bottlenecks, and delays that ripple across the business.",
          "Leading PMOs, IT teams, and operations groups are moving beyond this chaos by implementing AI-driven intake pipelines. These pipelines capture complete requirements at the source, intelligently classify and route requests, and ensure every project enters your backlog with context, priority, and accountability."
        ]
      },
      {
        heading: "Why Ad-Hoc Intake Fails",
        paragraphs: [
          "Ad-hoc intake relies on scattered communication channels—emails, chats, spreadsheets—that provide no single source of truth. The result is duplicated work, lost visibility, and projects that stall before they start.",
          "Without a standardized intake process, teams struggle with misalignment, unclear ownership, and constant firefighting. Delays pile up, stakeholders lose confidence, and strategic initiatives get stuck behind the noise."
        ]
      },
      {
        heading: "What Is an AI-Driven Intake Pipeline?",
        paragraphs: [
          "An AI-driven intake pipeline is a structured workflow powered by automation and machine learning. Instead of collecting requests informally, teams use standardized intake forms or embedded request portals that feed into an intelligent triage system.",
          "Key components include ingestion interfaces, NLP classification, automated routing, prioritization frameworks, SLA tracking, and integrations with tools like Jira, Asana, or ServiceNow. Unlike static forms, AI-driven systems adapt to context, ask clarifying questions, and ensure complete, high-quality submissions."
        ]
      },
      {
        heading: "The Benefits of Moving to AI Pipelines",
        list: {
          items: [
            "Faster triage with NLP-based classification and routing",
            "Reduced manual overhead and fewer misrouted requests",
            "Improved visibility and transparency across stakeholders",
            "Built-in prioritization using frameworks like RICE or WSJF",
            "Higher throughput with clear SLAs and dashboards"
          ]
        }
      },
      {
        heading: "Core Building Blocks",
        list: {
          items: [
            "Intake request forms or embedded interfaces for easy submission",
            "NLP-driven classification to auto-tag categories and extract metadata",
            "Routing logic combining rule-based workflows and machine learning",
            "Automated prioritization with scoring models and thresholds",
            "Status tracking, SLA dashboards, and stakeholder notifications",
            "Seamless integrations with Jira, Azure DevOps, Asana, or CRM tools"
          ]
        }
      },
      {
        heading: "Implementation Best Practices",
        paragraphs: [
          "Start with an audit of current intake channels. Identify the most common request types and the metadata your team needs to move projects forward.",
          "Define standard fields—such as priority, department, or dependencies—that should be captured every time.",
          "Pilot the pipeline with a single use case, like IT helpdesk tickets or marketing campaign requests. Train classification models with real-world data and refine your rules over time.",
          "Iterate continuously using throughput, error rates, and turnaround time as your guiding metrics."
        ]
      },
      {
        heading: "Challenges to Watch Out For",
        paragraphs: [
          "Like any automation, AI-driven pipelines face challenges. NLP models can misclassify edge cases, and ambiguous requests may still need human review.",
          "Cultural adoption can also be a hurdle—teams accustomed to sending quick Slack messages may resist structured intake at first.",
          "To mitigate these issues, balance automation with human oversight, ensure transparency in how decisions are made, and communicate clearly about the benefits of standardization."
        ]
      },
      {
        heading: "Before and After: A Real-World Example",
        paragraphs: [
          "Consider a marketing department drowning in ad-hoc campaign requests. Before AI, intake was scattered across emails and chats, leading to duplicate campaigns, unclear ownership, and delays.",
          "After implementing an AI-driven intake pipeline, campaign briefs are submitted via a simple form, classified automatically, and routed to the right team. Prioritization scores ensure that high-value campaigns move forward quickly, while stakeholders track progress in real time. The result: triage time drops from days to hours, and campaign execution stays aligned with strategic priorities."
        ]
      },
      {
        heading: "How to Get Started",
        paragraphs: [
          "The fastest path is a phased rollout. Begin with one department or request type, define success metrics, and scale gradually.",
          "Monitor key indicators like request throughput, triage time, and misclassification rates. Use these insights to fine-tune your pipeline before expanding organization-wide.",
          "Ready to see the impact firsthand? Try our beta and experience how an AI intake pipeline can transform your request management process."
        ]
      },
      {
        paragraphs: [
          "AI-driven intake pipelines don’t just save time—they create alignment, transparency, and a foundation for scaling your organization’s operations. By moving from chaos to control, your team can focus less on firefighting and more on delivering strategic value.",
          "👉 Start building your AI-driven intake pipeline today and future-proof your intake process."
        ]
      }
    ]
  },
  relatedArticles: [
    {
      title: "RICE vs WSJF vs MoSCoW: Choosing a Prioritization Model",
      category: "Framework Guide",
      readTime: "8 min read"
    },
    {
      title: "From Brief to Backlog: Automating Epic Creation in Jira",
      category: "Technical",
      readTime: "6 min read"
    }
  ]
};