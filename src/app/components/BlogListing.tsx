import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight, Calendar, Clock } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: string;
  publishDate: string;
  readTime: string;
  author: string;
  imageUrl?: string;
}

interface BlogListingProps {
  posts: BlogPost[];
  onPostClick?: (postId: string) => void;
}

export function BlogListing({ posts, onPostClick }: BlogListingProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {posts.map((post) => (
        <Card 
          key={post.id} 
          className="overflow-hidden hover:shadow-lg transition-all group cursor-pointer"
          onClick={() => onPostClick?.(post.id)}
        >
          {post.imageUrl && (
            <div className="aspect-video overflow-hidden bg-muted">
              <img 
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          
          <div className="p-6 space-y-4">
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
          </div>
        </Card>
      ))}
    </div>
  );
}

// Example blog posts data
export const exampleBlogPosts: BlogPost[] = [
  {
    id: "ai-driven-pipelines",
    title: "Replace ad-hoc intake with AI-driven pipelines",
    description: "Learn how leading PMOs are transforming scattered intake processes into structured, automated workflows.",
    category: "Best Practices",
    publishDate: "2025-09-15",
    readTime: "5 min read",
    author: "Sarah Chen",
    imageUrl: "https://images.unsplash.com/photo-1748256622734-92241ae7b43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTkxMTcwNDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
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