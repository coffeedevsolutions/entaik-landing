import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPage } from "../../components/BlogPage";

// This would typically come from a CMS or database
const blogPosts = {
  "ai-driven-pipelines": {
    id: "ai-driven-pipelines",
    title: "Replace ad-hoc intake with AI-driven pipelines",
    description: "Learn how leading PMOs are transforming scattered intake processes into structured, automated workflows that capture complete requirements from the start.",
    category: "Best Practices",
    publishDate: "2024-12-15",
    readTime: "5 min read",
    author: {
      name: "Sarah Chen",
      role: "Senior Product Manager"
    },
    heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80",
    content: {
      sections: [
        {
          paragraphs: [
            "Traditional project intake processes are broken. Email threads stretch for weeks, requirements get lost in translation, and by the time a project reaches your backlog, half the context has evaporated. Sound familiar?",
            "Leading organizations are replacing these ad-hoc processes with AI-driven intake pipelines that capture complete requirements from day one. Here's how they're doing it—and why it matters for your team."
          ]
        },
        {
          heading: "The Problem with Traditional Intake",
          paragraphs: [
            "Most intake processes start the same way: someone has an idea, sends an email, and hopes for the best. What follows is a game of telephone that would be funny if it weren't so costly.",
            "Requirements get scattered across email threads, Slack messages, and hallway conversations. By the time someone sits down to write a proper brief, key details are missing, stakeholders have moved on, and the original problem has evolved."
          ]
        },
        {
          heading: "Enter AI-Driven Intake Pipelines",
          paragraphs: [
            "AI-driven intake pipelines solve this by creating structured, adaptive conversations that capture complete requirements upfront. Instead of static forms that miss context, these systems ask intelligent follow-up questions based on each response.",
            "The result? Complete project briefs generated automatically, with all stakeholders aligned and nothing lost in translation."
          ]
        },
        {
          heading: "Key Components of an Effective AI Pipeline",
          list: {
            items: [
              "Adaptive questioning that adjusts based on project type and complexity",
              "Automatic brief generation with standardized formatting",
              "Built-in prioritization using frameworks like RICE or WSJF",
              "Integration with existing tools (Jira, Azure DevOps, etc.)",
              "Stakeholder notification and approval workflows"
            ]
          }
        },
        {
          quote: "We went from 3-week intake cycles to same-day project briefs. The quality of information we capture now is night and day compared to our old email-based process."
        },
        {
          heading: "Implementation Best Practices",
          paragraphs: [
            "Start small. Pick one project type—maybe internal tools requests or marketing campaigns—and perfect the pipeline for that use case first.",
            "Focus on the questions that matter most. The AI should dig deeper into areas that typically cause problems downstream: success criteria, constraints, dependencies, and stakeholder expectations.",
            "Make it feel conversational, not interrogational. The best intake pipelines feel like talking to a knowledgeable colleague who knows exactly what questions to ask."
          ]
        },
        {
          heading: "Measuring Success",
          paragraphs: [
            "Track time-to-brief, stakeholder satisfaction, and downstream quality metrics. Most teams see 60-80% reduction in intake cycle time and significantly fewer 'clarification meetings' once projects enter development.",
            "The real win isn't just speed—it's the complete, consistent requirements that set every project up for success from day one."
          ]
        }
      ]
    },
    relatedArticles: [
      {
        id: "prioritization-frameworks",
        title: "RICE vs WSJF vs MoSCoW: choosing a prioritization model",
        category: "Framework Guide",
        readTime: "8 min read"
      },
      {
        id: "jira-automation",
        title: "From brief to backlog: automating epic creation in Jira",
        category: "Technical",
        readTime: "6 min read"
      }
    ]
  },
  "prioritization-frameworks": {
    id: "prioritization-frameworks",
    title: "RICE vs WSJF vs MoSCoW: choosing a prioritization model",
    description: "A comprehensive guide to selecting the right prioritization framework for your organization's unique needs and constraints.",
    category: "Framework Guide",
    publishDate: "2024-12-10",
    readTime: "8 min read",
    author: {
      name: "Marcus Rodriguez",
      role: "Principal Product Manager"
    },
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80",
    content: {
      sections: [
        {
          paragraphs: [
            "Every product team faces the same challenge: more ideas than capacity. The difference between high-performing teams and the rest often comes down to one thing—how they prioritize.",
            "But with frameworks like RICE, WSJF, MoSCoW, and dozens of others, how do you choose the right one? Here's a practical guide to selecting and implementing the prioritization model that fits your team."
          ]
        },
        {
          heading: "RICE: When Data Drives Decisions",
          paragraphs: [
            "RICE (Reach, Impact, Confidence, Effort) works best for teams with solid user data and the ability to estimate effort reliably. It's quantitative, which makes it feel objective, but requires good data to be effective.",
            "Use RICE when you have clear user metrics, can estimate development effort accurately, and want a framework that scales across different types of features."
          ]
        },
        // Additional content would go here...
      ]
    }
  },
  "jira-automation": {
    id: "jira-automation", 
    title: "From brief to backlog: automating epic creation in Jira",
    description: "How AI can transform project briefs into properly structured Jira epics, stories, and tasks in seconds.",
    category: "Technical",
    publishDate: "2024-12-05",
    readTime: "6 min read",
    author: {
      name: "Alex Kim",
      role: "Engineering Manager"
    },
    heroImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80",
    content: {
      sections: [
        {
          paragraphs: [
            "The handoff from project brief to development backlog is where good intentions go to die. Requirements get misinterpreted, effort estimates vary wildly, and what seemed clear in the brief becomes muddy in implementation.",
            "AI-powered automation can bridge this gap, transforming structured project briefs into properly formatted Jira epics, stories, and tasks with consistent quality and minimal manual effort."
          ]
        },
        // Additional content would go here...
      ]
    }
  }
};

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];
  
  if (!post) {
    return {
      title: "Blog Post Not Found - IntakeFlow",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} - IntakeFlow Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://intakeflow.ai/blog/${slug}`,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author.name],
      tags: [post.category],
      images: [
        {
          url: post.heroImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.heroImage],
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return <BlogPage article={post} />;
}
