"use client";

import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Play } from "lucide-react";

export function Hero() {
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-blue-200">
              Now in Private Beta
            </Badge>
            
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                AI-Powered Project Intake & Workflow Automation for Non-Tech Enterprises
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                Replace scattered emails and static forms with adaptive AI surveys that gather complete requirements, generate briefs, prioritize work, and create Jira-ready epics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToWaitlist} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Join the Beta
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Play className="w-4 h-4" />
                See How It Works
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Built for construction, utilities, healthcare, and other non-tech enterprises.
            </p>
          </div>

          {/* Right Column - Placeholder */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-3xl opacity-20" />
            <div className="relative w-full h-96 bg-gray-300 rounded-2xl shadow-2xl border border-gray-200 flex items-center justify-center">
              <div className="text-gray-500 text-center">
                <div className="text-4xl mb-2">📊</div>
                <p className="text-sm">Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}