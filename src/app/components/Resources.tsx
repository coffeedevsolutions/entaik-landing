import { Card } from "./ui/card";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const articles = [
  {
    id: "ai-driven-pipelines",
    title: "Replace ad-hoc intake with AI-driven pipelines",
    description: "Learn how leading PMOs are transforming scattered intake processes into structured, automated workflows.",
    readTime: "5 min read",
    category: "Best Practices"
  },
  {
    id: "prioritization-frameworks",
    title: "RICE vs WSJF vs MoSCoW: choosing a prioritization model",
    description: "A comprehensive guide to selecting the right prioritization framework for your organization's unique needs.",
    readTime: "8 min read",
    category: "Framework Guide"
  },
  {
    id: "jira-automation",
    title: "From brief to backlog: automating epic creation in Jira",
    description: "How AI can transform project briefs into properly structured Jira epics, stories, and tasks in seconds.",
    readTime: "6 min read",
    category: "Technical"
  }
];

export function Resources() {

  return (
    <section id="resources" className="py-8 lg:py-12 font-[family-name:var(--font-suse-mono)]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl">Resources & Insights</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about modern project intake and prioritization
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article, index) => (
            <Link key={index} href={`/blog/${article.id}`} className="block">
              <Card className="p-6 space-y-4 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all group cursor-pointer border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#D99152] text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <BookOpen className="w-6 h-6" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-600">{article.category}</span>
                  <span className="text-muted-foreground">{article.readTime}</span>
                </div>
                
                <h3 className="text-xl group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {article.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-blue-600 group-hover:gap-3 transition-all">
                <span>Read article</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 cursor-pointer border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px]"
            >
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}