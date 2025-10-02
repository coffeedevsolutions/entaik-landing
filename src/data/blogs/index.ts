import { BlogArticle, BlogPost } from "@/types/blog";
import { aiDrivenPipelines } from "./ai-driven-pipelines";
import { prioritizationFrameworks } from "./prioritization-frameworks";
import { jiraAutomation } from "./jira-automation";

// All blog articles with full content
export const allBlogArticles: Record<string, BlogArticle> = {
  "ai-driven-pipelines": aiDrivenPipelines,
  "prioritization-frameworks": prioritizationFrameworks,
  "jira-automation": jiraAutomation,
};

// Blog posts list (for listing pages)
export const allBlogPosts: BlogPost[] = [
  {
    id: aiDrivenPipelines.id,
    slug: aiDrivenPipelines.slug,
    title: aiDrivenPipelines.title,
    description: aiDrivenPipelines.description,
    category: aiDrivenPipelines.category,
    publishDate: aiDrivenPipelines.publishDate,
    readTime: aiDrivenPipelines.readTime,
    author: aiDrivenPipelines.author.name,
    imageUrl: aiDrivenPipelines.heroImage,
  },
  {
    id: prioritizationFrameworks.id,
    slug: prioritizationFrameworks.slug,
    title: prioritizationFrameworks.title,
    description: prioritizationFrameworks.description,
    category: prioritizationFrameworks.category,
    publishDate: prioritizationFrameworks.publishDate,
    readTime: prioritizationFrameworks.readTime,
    author: prioritizationFrameworks.author.name,
    imageUrl: prioritizationFrameworks.heroImage,
  },
  {
    id: jiraAutomation.id,
    slug: jiraAutomation.slug,
    title: jiraAutomation.title,
    description: jiraAutomation.description,
    category: jiraAutomation.category,
    publishDate: jiraAutomation.publishDate,
    readTime: jiraAutomation.readTime,
    author: jiraAutomation.author.name,
    imageUrl: jiraAutomation.heroImage,
  },
];

// Helper function to get blog by slug
export function getBlogBySlug(slug: string): BlogArticle | undefined {
  return allBlogArticles[slug];
}

// Helper function to get all slugs (for static generation)
export function getAllBlogSlugs(): string[] {
  return Object.keys(allBlogArticles);
}

