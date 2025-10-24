"use client";

import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Play } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden font-[family-name:var(--font-suse-mono)]">
      {/* Background */}
      <div className="absolute inset-0" />
      
      <div className="relative px-4 sm:px-6 lg:px-8 pt-4 pb-8 lg:pt-6 lg:pb-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <Badge className="bg-[#B8FFCE] text-[#B39871] hover:bg-[#B8FFCE] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Now in Private Beta
            </Badge>
            
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                AI Project Management & Intake Platform for Enterprises
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                Transform project intake with AI for project management. Replace scattered emails and static forms with adaptive AI intake workflows that gather requirements, generate documentation, prioritize work, and integrate with top project management tools like Jira.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToWaitlist} className="bg-[#A34DFF] hover:bg-[#A34DFF]/90 cursor-pointer border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px]">
                Join the Beta
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px]">
                <Play className="w-4 h-4" />
                See How It Works
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              The leading AI in project management solution for construction, utilities, healthcare, and non-tech enterprises.
            </p>
          </div>

          {/* Right Column - Dashboard Mockup */}
          <div className="relative">
            <div className="relative border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
              <Image
                src="/images/screenshot-mockup-2.png"
                alt="Uptaik AI dashboard mockup showing project intake interface"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}