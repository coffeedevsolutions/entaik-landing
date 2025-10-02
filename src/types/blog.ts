export interface BlogArticle {
  id: string;
  slug: string;
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
    slug: string;
  }>;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  publishDate: string;
  readTime: string;
  author: string;
  imageUrl?: string;
}

