# MDX Blog System - SEO Optimized

This blog system uses MDX for content management with comprehensive SEO optimization.

## 📁 Structure

```
content/blog/
├── ai-driven-pipelines/
│   └── index.mdx
├── prioritization-frameworks/
│   └── index.mdx
└── jira-automation/
    └── index.mdx
```

## 📝 Adding a New Blog Post

### 1. Create Directory
```bash
mkdir content/blog/my-new-post
```

### 2. Create `index.mdx` with Frontmatter

```mdx
---
id: my-new-post
slug: my-new-post
title: "Your Blog Title Here"
description: "A compelling description for SEO and social sharing"
category: Best Practices
publishDate: 2025-01-15
readTime: 7
author:
  name: Blake Coffee
  role: Cofounder of Uptaik
heroImage: /placeholder-blog.jpg
tags: [ai, automation, best-practices]
draft: false
---

Your content starts here...

## First Heading

Content goes here with proper Markdown/MDX syntax.

> Blockquotes work great for callouts

- Lists
- Work
- Perfectly

## Another Section

More content...
```

### 3. Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `id` | Yes | Unique identifier |
| `slug` | Yes | URL slug (should match directory name) |
| `title` | Yes | Blog post title |
| `description` | Yes | SEO description & social preview |
| `category` | Yes | Post category |
| `publishDate` | Yes | Publication date (YYYY-MM-DD) |
| `readTime` | No | Reading time in minutes (auto-calculated if omitted) |
| `author.name` | Yes | Author name |
| `author.role` | Yes | Author role/title |
| `heroImage` | Yes | Hero image path |
| `tags` | No | Array of tags for SEO |
| `draft` | No | If true, post won't appear in listings |
| `canonical` | No | Canonical URL if different |

## 🎨 MDX Features

### Headings with Auto-Anchors
```mdx
## This Becomes an Anchor
Users can link directly to this section!
```

### Blockquotes
```mdx
> This is a beautiful callout quote
```

### Lists
```mdx
- Bullet points
- Work great

1. Numbered lists
2. Also supported
```

### Code Blocks
```mdx
\`\`\`typescript
const example = "Syntax highlighting works!";
\`\`\`
```

### Inline Code
```mdx
Use `inline code` for technical terms
```

## 🔍 SEO Features

✅ **Automatic SEO Metadata**
- Title tags
- Meta descriptions
- OpenGraph tags
- Twitter Card tags
- Canonical URLs

✅ **Structured Data (JSON-LD)**
- Article schema
- Author information
- Publication dates
- Organization data

✅ **Performance**
- Static generation at build time
- Optimized images with Next.js Image
- Automatic reading time calculation

✅ **Discoverability**
- Automatic sitemap generation (`/sitemap.xml`)
- Heading anchors for deep linking
- Tag and category system

## 🚀 Deployment

Posts are automatically:
1. Compiled from MDX to HTML at build time
2. Added to the sitemap
3. Given proper SEO metadata
4. Indexed by search engines

## 📊 Analytics Ready

The system is ready for:
- Google Analytics
- Search Console
- Social media sharing with rich previews
- Deep linking to specific sections

## 🔧 Utilities

All blog utilities are in `src/lib/posts.ts`:
- `getAllPosts()` - Get all published posts
- `getPostBySlug(slug)` - Get specific post
- `getAllTags()` - Get all unique tags
- `getAllCategories()` - Get all categories
- `getPostsByTag(tag)` - Filter by tag
- `getPostsByCategory(category)` - Filter by category

