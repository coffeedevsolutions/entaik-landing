"use client";

import { Button } from "./ui/button";
import { Menu, ChevronDown, Sparkles, Workflow, Building, Heart, Zap, BookOpen, ArrowRight, Shield, BarChart3, AlertCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

interface NavigationProps {
  onNavigate?: (view: string, postId?: string) => void;
  currentView?: string;
}

export function Navigation({ onNavigate, currentView }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  
  // Determine current view based on pathname if not provided
  const actualCurrentView = currentView || (
    pathname === "/" ? "home" : 
    pathname.startsWith("/blog/") ? "blog-post" :
    pathname === "/blog" ? "blog-hub" : "home"
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  const handleNavigation = (view: string, sectionId?: string) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    
    if (onNavigate) {
      // Client-side navigation
      onNavigate(view);
      if (sectionId && view === "home") {
        // Delay scroll to allow view to render
        setTimeout(() => scrollToSection(sectionId), 150);
      }
    } else {
      // Use Next.js routing when no onNavigate prop (for static routes)
      if (view === "home") {
        if (pathname === "/") {
          // Already on home page, just scroll
          if (sectionId) {
            scrollToSection(sectionId);
          }
        } else {
          // Navigate to home page first, then scroll
          router.push("/");
          if (sectionId) {
            // Longer delay for navigation + render
            setTimeout(() => scrollToSection(sectionId), 300);
          }
        }
      } else {
        // Navigate to other pages using Next.js routing
        if (view === "pricing") {
          router.push("/pricing");
        } else if (view === "workflows") {
          router.push("/workflows");
        } else if (view === "request-demo") {
          router.push("/request-demo");
        }
      }
    }
  };

  const handleLogoClick = () => {
    if (onNavigate) {
      handleNavigation("home");
    } else {
      router.push("/");
    }
  };

  const handleMouseEnter = (dropdown: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const getStartedBlogPosts = [
    {
      id: "healthcare-intake-workflows",
      slug: "healthcare-intake-workflows",
      title: "Building Intake Workflows for Healthcare Enterprises",
      category: "Best Practices",
      readTime: "9 min"
    },
    {
      id: "project-scope-management-process",
      slug: "project-scope-management-process",
      title: "Project Scope Management Process",
      category: "Management",
      readTime: "6 min"
    },
    {
      id: "jira-automation",
      slug: "jira-automation",
      title: "From brief to backlog: automating epic creation",
      category: "Technical",
      readTime: "6 min"
    }
  ];

  const workflowBlogPosts = [
    {
      id: "process-flow-documentation",
      slug: "process-flow-documentation",
      title: "Process Flow Documentation",
      category: "Documentation",
      readTime: "4 min"
    },
    {
      id: "project-scope-management-process",
      slug: "project-scope-management-process",
      title: "Project Scope Management Process",
      category: "Management",
      readTime: "6 min"
    },
    {
      id: "jira-automation",
      slug: "jira-automation",
      title: "Jira Automation",
      category: "Technical",
      readTime: "5 min"
    }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border font-[family-name:var(--font-suse-mono)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <div className="relative w-8 h-8 bg-[#A34DFF] flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <Image
                src="/images/uptaik-logo-2-white.png"
                alt="Uptaik Logo"
                width={28}
                height={28}
                className="relative z-10"
              />
            </div>
            <span className="font-bold text-lg">Uptaik</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 text-lg">
            {/* Features Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("features")}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/features">
                <button 
                  className={`px-3 py-2 rounded-lg flex items-center gap-1 transition-colors text-base ${
                    activeDropdown === "features" || pathname.startsWith("/features")
                      ? "bg-accent text-foreground" 
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
                >
                  <span>Features</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </Link>
            </div>

            {/* Workflows */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("workflows")}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/workflows">
                <button 
                  className={`px-3 py-2 rounded-lg flex items-center gap-1 transition-colors text-base ${
                    activeDropdown === "workflows" || pathname === "/workflows"
                      ? "bg-accent text-foreground" 
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
                >
                  <span>Workflows</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </Link>
            </div>

            {/* Pricing */}
            <Link href="/pricing">
              <button 
                className={`px-3 py-2 rounded-lg transition-colors cursor-pointer text-base ${
                  pathname === "/pricing"
                    ? "bg-accent text-foreground" 
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                }`}
              >
                Pricing
              </button>
            </Link>

            {/* Request Demo */}
            <Link href="/request-demo">
              <button 
                className={`px-3 py-2 rounded-lg transition-colors cursor-pointer text-base ${
                  pathname === "/request-demo"
                    ? "bg-accent text-foreground" 
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                }`}
              >
                Request Demo
              </button>
            </Link>

            {/* Blog - Always use Next.js routing for blog */}
            <Link 
              href="/blog"
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer text-base ${
                actualCurrentView === "blog-hub" || actualCurrentView === "blog-post"
                  ? "bg-accent text-foreground" 
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              }`}
            >
              Blog
            </Link>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
                className="cursor-pointer text-base border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px]"
                variant="ghost"
                onClick={() => handleNavigation("request-demo")}
                >
                Request Demo
            </Button>
            <Button 
              onClick={() => handleNavigation("home", "waitlist")}
              className="bg-[#A34DFF] hover:bg-[#A34DFF]/90 cursor-pointer text-base border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px]"
            >
              Join the Beta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              <Link href="/features" className="text-muted-foreground hover:text-foreground transition-colors text-left px-3 py-2">
                Features
              </Link>

              <Link href="/workflows" className="text-muted-foreground hover:text-foreground transition-colors text-left px-3 py-2">
                Workflows
              </Link>
              <button onClick={() => handleNavigation("pricing")} className="text-muted-foreground hover:text-foreground transition-colors text-left px-3 py-2">
                Pricing
              </button>
              <button onClick={() => handleNavigation("request-demo")} className="text-muted-foreground hover:text-foreground transition-colors text-left px-3 py-2">
                Request Demo
              </button>
              {/* Blog - Always use Next.js routing */}
              <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors text-left px-3 py-2">
                Blog
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t border-border mt-2">
                <Button onClick={() => handleNavigation("home", "waitlist")} variant="ghost" className="justify-start border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px]">Join the Beta</Button>
                <Button 
                  onClick={() => handleNavigation("request-demo")} 
                  className="justify-start bg-[#6FB384] hover:bg-[#6FB384]/90 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px]"
                >
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mega Dropdowns */}
      {activeDropdown === "features" && (
        <div 
          className="absolute left-0 right-0 top-full bg-background border-b-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          onMouseEnter={() => handleMouseEnter("features")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-12 gap-8">
              {/* Left Column - Main Navigation */}
              <div className="col-span-5 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium text-gray-600">Features</h3>
                </div>

                <Link
                  href="/features"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors text-left group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                    <Sparkles className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium group-hover:text-blue-600 transition-colors">View All Features</div>
                    <div className="text-sm text-muted-foreground">Explore all 4 features</div>
                  </div>
                </Link>

                <Link
                  href="/features/ai-survey-platform"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors text-left group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-200 transition-colors">
                    <Sparkles className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium group-hover:text-cyan-600 transition-colors">AI Survey Platform</div>
                    <div className="text-sm text-muted-foreground">Create smarter adaptive surveys</div>
                  </div>
                </Link>

                <Link
                  href="/features/automated-documentation"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors text-left group"
                >
                  <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-200 transition-colors">
                    <BookOpen className="w-5 h-5 text-pink-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium group-hover:text-pink-600 transition-colors">Automated Documentation</div>
                    <div className="text-sm text-muted-foreground">Turn conversations into project docs</div>
                  </div>
                </Link>

                <Link
                  href="/features/analytics-intelligence"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors text-left group"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 transition-colors">
                    <BarChart3 className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium group-hover:text-orange-600 transition-colors">Analytics & Intelligence</div>
                    <div className="text-sm text-muted-foreground">Data-driven insights & predictions</div>
                  </div>
                </Link>

                <Link
                  href="/features/enterprise-integrations"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors text-left group"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-200 transition-colors">
                    <Shield className="w-5 h-5 text-teal-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium group-hover:text-teal-600 transition-colors">Enterprise & Integrations</div>
                    <div className="text-sm text-muted-foreground">Secure, scalable platform</div>
                  </div>
                </Link>

              </div>

              {/* Right Column - Get Started */}
              <div className="col-span-5 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium text-gray-600">Get Started</h3>

                </div>

                <div className="space-y-2">
                  {getStartedBlogPosts.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug || post.id}`}
                      className="block w-full p-3 rounded-lg hover:bg-accent transition-colors text-left group"
                    >
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <div className="text-sm font-medium group-hover:text-blue-600 transition-colors line-clamp-1">
                          {post.title}
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{post.category}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </Link>
                  ))}
                </div>

                <Link
                  href="/blog"
                  className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1 group cursor-pointer"
                >
                  <span>View all articles</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Workflows Dropdown */}
      {activeDropdown === "workflows" && (
        <div 
          className="absolute left-0 right-0 top-full bg-background border-b-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          onMouseEnter={() => handleMouseEnter("workflows")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-12 gap-6">
              {/* Left Column - Popular Workflows */}
              <div className="col-span-3 space-y-3">
                <div className="space-y-2 mb-4">
                  <h3 className="font-medium text-gray-600">Popular Workflows</h3>
                </div>

                <Link
                  href="/workflows/technical-request"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors text-left group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium group-hover:text-blue-600 transition-colors">Technical Request</div>
                    <div className="text-sm text-muted-foreground">IT support & technical issues</div>
                  </div>
                </Link>

                <Link
                  href="/workflows/internal-it-hr-ticketing"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors text-left group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-200 transition-colors">
                    <Workflow className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium group-hover:text-gray-600 transition-colors">IT Requests</div>
                    <div className="text-sm text-muted-foreground">Internal IT ticketing & requests</div>
                  </div>
                </Link>

                <Link
                  href="/workflows/feature-request"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors text-left group"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-colors">
                    <Sparkles className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium group-hover:text-purple-600 transition-colors">Feature Request</div>
                    <div className="text-sm text-muted-foreground">Product feedback & roadmapping</div>
                  </div>
                </Link>

                <Link
                  href="/workflows/incident-response"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors text-left group"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0 group-hover:bg-red-200 transition-colors">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium group-hover:text-red-600 transition-colors">Incident Response</div>
                    <div className="text-sm text-muted-foreground">Emergency & critical issues</div>
                  </div>
                </Link>
                
                <Link
                  href="/workflows/healthcare-patient-experience"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors text-left group"
                >
                  <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-200 transition-colors">
                    <Heart className="w-5 h-5 text-pink-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium group-hover:text-pink-600 transition-colors">Patient Experience</div>
                    <div className="text-sm text-muted-foreground">Healthcare feedback & surveys</div>
                  </div>
                </Link>
              </div>

              {/* Right Column - More Workflows */}
              <div className="col-span-3 space-y-3">
                <div className="space-y-2 mb-4">
                  <h3 className="font-medium text-gray-600">More Workflows</h3>
                </div>

                <Link
                  href="/workflows/legal-client-onboarding"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors text-left group"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-200 transition-colors">
                    <Shield className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium group-hover:text-indigo-600 transition-colors">Legal Client Onboarding</div>
                    <div className="text-sm text-muted-foreground">Professional services intake</div>
                  </div>
                </Link>

                <Link
                  href="/workflows/retail-returns-feedback"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors text-left group"
                >
                  <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center flex-shrink-0 group-hover:bg-rose-200 transition-colors">
                    <Building className="w-5 h-5 text-rose-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium group-hover:text-rose-600 transition-colors">Retail Returns</div>
                    <div className="text-sm text-muted-foreground">E-commerce feedback & returns</div>
                  </div>
                </Link>

                <Link
                  href="/workflows/education-course-feedback"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors text-left group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-200 transition-colors">
                    <BookOpen className="w-5 h-5 text-sky-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium group-hover:text-sky-600 transition-colors">Course Feedback</div>
                    <div className="text-sm text-muted-foreground">Educational evaluation</div>
                  </div>
                </Link>

                <Link
                  href="/workflows/finance-claim-intake"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors text-left group"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-200 transition-colors">
                    <Shield className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium group-hover:text-amber-600 transition-colors">Finance Claims</div>
                    <div className="text-sm text-muted-foreground">Insurance & claims processing</div>
                  </div>
                </Link>

                <Link
                  href="/workflows"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors text-left group"
                >
                  <div className="w-10 h-10 bg-[#023373] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium group-hover:text-blue-600 transition-colors">View All Workflows</div>
                    <div className="text-sm text-muted-foreground">Browse all 9 workflow templates</div>
                  </div>
                </Link>
              </div>

              {/* Right Column - Workflow Resources */}
              <div className="col-span-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium text-gray-600">Workflow Resources</h3>
                </div>

                <div className="space-y-2">
                  {workflowBlogPosts.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug || post.id}`}
                      className="block w-full p-3 rounded-lg hover:bg-accent transition-colors text-left group"
                    >
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <div className="text-sm font-medium group-hover:text-blue-600 transition-colors line-clamp-1">
                          {post.title}
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{post.category}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </Link>
                  ))}
                </div>

                <Link
                  href="/blog"
                  className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1 group cursor-pointer"
                >
                  <span>View all articles</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}