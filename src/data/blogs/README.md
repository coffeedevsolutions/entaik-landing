# Blog Management System

This folder contains the centralized blog content management system for the Uptaik website.

## Structure

```
src/data/blogs/
├── index.ts                         # Central export and helper functions
├── ai-driven-pipelines.ts          # Blog: AI-driven pipelines
├── prioritization-frameworks.ts    # Blog: Prioritization frameworks
├── jira-automation.ts              # Blog: Jira automation
└── README.md                        # This file
```

## How It Works

### 1. Blog Types (`src/types/blog.ts`)
Defines the TypeScript interfaces for blog articles and blog posts.

### 2. Individual Blog Files
Each blog post is defined in its own file with full content:
- Title, description, category
- Author information
- Hero image
- Full article content (sections, paragraphs, lists, quotes)
- Related articles

### 3. Central Index (`index.ts`)
- Exports `allBlogArticles` (Record<slug, BlogArticle>)
- Exports `allBlogPosts` (BlogPost[] for listing pages)
- Provides helper functions like `getBlogBySlug()`

## Adding a New Blog Post

1. **Create a new file** in this directory (e.g., `my-new-post.ts`)

```typescript
import { BlogArticle } from "@/types/blog";

export const myNewPost: BlogArticle = {
  id: "my-new-post",
  slug: "my-new-post",
  title: "My New Post Title",
  description: "Brief description...",
  category: "Best Practices",
  publishDate: "2024-12-20",
  readTime: "5 min read",
  author: {
    name: "Your Name",
    role: "Your Role"
  },
  heroImage: "https://...",
  content: {
    sections: [
      {
        paragraphs: [
          "First paragraph...",
          "Second paragraph..."
        ]
      },
      {
        heading: "Section Heading",
        paragraphs: ["Content..."]
      }
    ]
  }
};
```

2. **Import and export** in `index.ts`:

```typescript
import { myNewPost } from "./my-new-post";

export const allBlogArticles: Record<string, BlogArticle> = {
  // ... existing blogs
  "my-new-post": myNewPost,
};
```

3. **Add to blog posts array** (for listings):

```typescript
export const allBlogPosts: BlogPost[] = [
  // ... existing posts
  {
    id: myNewPost.id,
    slug: myNewPost.slug,
    title: myNewPost.title,
    description: myNewPost.description,
    category: myNewPost.category,
    publishDate: myNewPost.publishDate,
    readTime: myNewPost.readTime,
    author: myNewPost.author.name,
    imageUrl: myNewPost.heroImage,
  },
];
```

## URL Structure

- Blog list: `/blog`
- Individual blog: `/blog/{slug}`

Example: `/blog/ai-driven-pipelines`

## Features

- **Type-safe**: Full TypeScript support
- **SEO-friendly**: Each blog has proper metadata
- **Easy to manage**: Add blogs by creating a new file
- **Automatic routing**: Next.js generates routes automatically
- **Related articles**: Cross-link blogs for better navigation

