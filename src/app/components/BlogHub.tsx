"use client";

import { useState, useMemo } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight, Calendar, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types/blog";

interface BlogHubProps {
  onNavigate?: (view: string, postId?: string) => void;
  blogPosts?: BlogPost[];
}

export function BlogHub({ onNavigate, blogPosts = [] }: BlogHubProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handlePostClick = (postId: string) => {
    if (onNavigate) {
      onNavigate("blog-post", postId);
    }
    // When using Next.js routing, this will be handled by Link components
  };

  // Extract unique categories from blog posts
  const categories = useMemo(() => {
    const uniqueCategories = new Set(blogPosts.map(post => post.category));
    return ["All", ...Array.from(uniqueCategories).sort()];
  }, [blogPosts]);

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filter by search query (search in title, description, and category)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [blogPosts, selectedCategory, searchQuery]);

  const featuredPost = filteredPosts[0];

  return (
    <div className="pt-20 pb-20 font-[family-name:var(--font-suse-mono)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
          {/* Hero Section */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
              Resources & Insights
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn about modern project intake, prioritization frameworks, and automation strategies for non-tech enterprises.
            </p>
          </div>

          
          {/* Featured Post */}
          {featuredPost && (
          <Link href={onNavigate ? "#" : `/blog/${featuredPost.slug}`} className="block">
            <Card 
              className="mb-12 overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
              onClick={onNavigate ? () => handlePostClick(featuredPost.slug) : undefined}
            >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-video md:aspect-auto bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 overflow-hidden">
                {featuredPost.imageUrl ? (
                  <Image 
                    src={featuredPost.imageUrl}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-12">
                    <div className="w-full h-full rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 opacity-20" />
                  </div>
                )}
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-blue-200 w-fit">
                  Featured • {featuredPost.category}
                </Badge>
                <h2 className="text-3xl group-hover:text-blue-600 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {featuredPost.description}
                </p>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={featuredPost.publishDate}>
                      {new Date(featuredPost.publishDate).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 group-hover:gap-3 transition-all">
                    <span>Read article</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
          </Link>
          )}

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles by title, description, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                  }`}
                >
                  {category}
                  <span className={`ml-2 text-sm ${
                    selectedCategory === category ? "text-blue-100" : "text-gray-500"
                  }`}>
                    ({category === "All" ? blogPosts.length : blogPosts.filter(p => p.category === category).length})
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          {(searchQuery || selectedCategory !== "All") && (
            <div className="mb-6 text-center text-muted-foreground">
              Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
              {searchQuery && ` matching "${searchQuery}"`}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </div>
          )}

          {/* All Posts Grid */}
          {filteredPosts.length > 0 ? (
          <div className="mb-12">
            <h2 className="text-2xl mb-8">
              {selectedCategory === "All" && !searchQuery ? "All Articles" : "Matching Articles"}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={onNavigate ? "#" : `/blog/${post.slug}`} className="block">
                  <Card 
                    className="p-6 space-y-4 hover:shadow-lg transition-all group cursor-pointer"
                    onClick={onNavigate ? () => handlePostClick(post.slug) : undefined}
                  >
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
                </Card>
                </Link>
              ))}
            </div>
          </div>
          ) : (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto space-y-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-2xl font-semibold">No articles found</h3>
                <p className="text-muted-foreground">
                  {searchQuery 
                    ? `No articles match your search "${searchQuery}". Try a different keyword.`
                    : `No articles in the ${selectedCategory} category yet.`
                  }
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all"
                >
                  Clear filters
                </button>
              </div>
            </div>
          )}

          {/* Newsletter CTA */}
          <div className="mt-20 p-12 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl text-center">
            <h3 className="text-3xl mb-4">Stay Updated</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest insights on project intake, prioritization, and automation delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}