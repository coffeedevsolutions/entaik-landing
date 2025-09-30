"use client";

import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

interface NavigationProps {
  onNavigate?: (view: string, postId?: string) => void;
  currentView?: string;
}

export function Navigation({ onNavigate, currentView }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleNavigation = (view: string, sectionId?: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(view);
      if (sectionId && view === "home") {
        // Delay scroll to allow view to render
        setTimeout(() => scrollToSection(sectionId), 100);
      }
    } else {
      // Use Next.js routing when no onNavigate prop
      if (view === "home") {
        router.push("/");
        if (sectionId) {
          // Delay scroll to allow navigation to complete
          setTimeout(() => scrollToSection(sectionId), 200);
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

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={handleLogoClick}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg" />
            <span className="font-semibold">IntakeAI</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {actualCurrentView === "home" ? (
              <>
                <button onClick={() => scrollToSection("features")} className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </button>
                <button onClick={() => scrollToSection("how-it-works")} className="text-muted-foreground hover:text-foreground transition-colors">
                  How It Works
                </button>
                <button onClick={() => scrollToSection("industries")} className="text-muted-foreground hover:text-foreground transition-colors">
                  Industries
                </button>
                <button onClick={() => scrollToSection("faq")} className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </button>
              </>
            ) : (
              <>
                <button onClick={() => handleNavigation("home", "features")} className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </button>
                <button onClick={() => handleNavigation("home", "how-it-works")} className="text-muted-foreground hover:text-foreground transition-colors">
                  How It Works
                </button>
                <button onClick={() => handleNavigation("home", "industries")} className="text-muted-foreground hover:text-foreground transition-colors">
                  Industries
                </button>
              </>
            )}
            {onNavigate ? (
              <button 
                onClick={() => handleNavigation("blog-hub")} 
                className={`transition-colors ${actualCurrentView === "blog-hub" || actualCurrentView === "blog-post" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                Blog
              </button>
            ) : (
              <Link 
                href="/blog"
                className={`transition-colors ${actualCurrentView === "blog-hub" || actualCurrentView === "blog-post" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                Blog
              </Link>
            )}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost">Sign In</Button>
            <Button onClick={() => actualCurrentView === "home" ? scrollToSection("waitlist") : handleNavigation("home", "waitlist")}>
              Join Beta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {actualCurrentView === "home" ? (
                <>
                  <button onClick={() => scrollToSection("features")} className="text-muted-foreground hover:text-foreground transition-colors text-left">
                    Features
                  </button>
                  <button onClick={() => scrollToSection("how-it-works")} className="text-muted-foreground hover:text-foreground transition-colors text-left">
                    How It Works
                  </button>
                  <button onClick={() => scrollToSection("industries")} className="text-muted-foreground hover:text-foreground transition-colors text-left">
                    Industries
                  </button>
                  <button onClick={() => scrollToSection("faq")} className="text-muted-foreground hover:text-foreground transition-colors text-left">
                    FAQ
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => handleNavigation("home", "features")} className="text-muted-foreground hover:text-foreground transition-colors text-left">
                    Features
                  </button>
                  <button onClick={() => handleNavigation("home", "how-it-works")} className="text-muted-foreground hover:text-foreground transition-colors text-left">
                    How It Works
                  </button>
                  <button onClick={() => handleNavigation("home", "industries")} className="text-muted-foreground hover:text-foreground transition-colors text-left">
                    Industries
                  </button>
                </>
              )}
              {onNavigate ? (
                <button onClick={() => handleNavigation("blog-hub")} className="text-muted-foreground hover:text-foreground transition-colors text-left">
                  Blog
                </button>
              ) : (
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors text-left">
                  Blog
                </Link>
              )}
              <div className="flex flex-col gap-2 pt-2 border-t border-border">
                <Button variant="ghost" className="justify-start">Sign In</Button>
                <Button 
                  onClick={() => actualCurrentView === "home" ? scrollToSection("waitlist") : handleNavigation("home", "waitlist")} 
                  className="justify-start"
                >
                  Join Beta
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}