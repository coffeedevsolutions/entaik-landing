import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { BlogArticle, BlogPost } from '@/types/blog';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface PostFrontmatter {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  publishDate: string;
  readTime?: number;
  author: {
    name: string;
    role: string;
  };
  heroImage: string;
  ogImage?: string;
  tags?: string[];
  draft?: boolean;
  canonical?: string;
}

export interface Post extends PostFrontmatter {
  content: string;
  readTime: number;
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(
    slugs.map((slug) => getPostBySlug(slug))
  );
  
  // Filter out drafts and sort by date (newest first)
  return posts
    .filter((post): post is Post => post !== null && !post.draft)
    .sort((a, b) => 
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
}

export async function getPostSlugs(): Promise<string[]> {
  const entries = await fs.readdir(postsDirectory, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, slug, 'index.mdx');
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    const frontmatter = data as PostFrontmatter;
    
    // Calculate reading time if not provided
    const calculatedReadTime = Math.max(
      3, 
      Math.round(readingTime(content).minutes)
    );
    
    return {
      ...frontmatter,
      slug,
      content,
      readTime: frontmatter.readTime ?? calculatedReadTime,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

// Convert Post to BlogArticle format (for backwards compatibility)
export function postToBlogArticle(post: Post): BlogArticle {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    description: post.description,
    category: post.category,
    publishDate: post.publishDate,
    readTime: `${post.readTime} min read`,
    author: post.author,
    heroImage: post.heroImage,
    content: {
      sections: [] // MDX content is rendered directly, not as sections
    }
  };
}

// Convert Post to BlogPost format (for listing pages)
export function postToBlogPost(post: Post): BlogPost {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    description: post.description,
    category: post.category,
    publishDate: post.publishDate,
    readTime: `${post.readTime} min read`,
    author: post.author.name,
    imageUrl: post.heroImage,
  };
}

// Get all posts as BlogPost array (for BlogHub)
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.map(postToBlogPost);
}

// Get posts by tag
export async function getPostsByTag(tag: string): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => 
    post.tags?.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

// Get posts by category
export async function getPostsByCategory(category: string): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => 
    post.category.toLowerCase() === category.toLowerCase()
  );
}

// Get all unique tags
export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tags = new Set<string>();
  posts.forEach((post) => {
    post.tags?.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}

// Get all unique categories
export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts();
  const categories = new Set(posts.map((post) => post.category));
  return Array.from(categories).sort();
}

