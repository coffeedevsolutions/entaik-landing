"use client";

import Link from "next/link";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles, BookOpen, BarChart3, Shield } from "lucide-react";
import { Navigation } from "./Navigation";

interface FeaturesHubProps {
  onNavigate?: (view: string) => void;
}

const features = [
  {
    id: "ai-survey-platform",
    slug: "ai-survey-platform",
    icon: Sparkles,
    title: "AI Survey Platform",
    description: "Create smarter adaptive surveys that reduce fatigue and capture better data with AI-driven questioning.",
    category: "Core Platform",
    accentColor: "from-cyan-500 to-blue-500",
    features: [
      "AI-powered adaptive questioning",
      "Semantic deduplication",
      "Fatigue detection & smart completion",
      "Multiple intake formats (form, chatbot, one-question)"
    ]
  },
  {
    id: "automated-documentation",
    slug: "automated-documentation",
    icon: BookOpen,
    title: "Automated Documentation",
    description: "Transform intake responses into structured briefs, work plans, and backlog items with AI-powered automation.",
    category: "Automation",
    accentColor: "from-pink-500 to-rose-500",
    features: [
      "AI-generated project briefs",
      "Customizable templates",
      "Automated work item creation",
      "Direct Jira integration"
    ]
  },
  {
    id: "analytics-intelligence",
    slug: "analytics-intelligence",
    icon: BarChart3,
    title: "Analytics & Intelligence",
    description: "Get data-driven insights, smart predictions, and proactive alerts to optimize your workflows.",
    category: "Analytics",
    accentColor: "from-orange-500 to-amber-500",
    features: [
      "Real-time analytics dashboard",
      "Completion rate optimization",
      "Predictive insights",
      "Custom reporting"
    ]
  },
  {
    id: "enterprise-integrations",
    slug: "enterprise-integrations",
    icon: Shield,
    title: "Enterprise & Integrations",
    description: "Secure, scalable platform with SSO, RBAC, and seamless integrations for enterprise workflows.",
    category: "Enterprise",
    accentColor: "from-teal-500 to-emerald-500",
    features: [
      "SSO & advanced authentication",
      "Role-based access control",
      "Jira, Slack, Teams integration",
      "Enterprise-grade security"
    ]
  }
];

export function FeaturesHub({ onNavigate }: FeaturesHubProps) {
  return (
    <>
      <Navigation onNavigate={onNavigate} />
      <div className="pt-20 pb-20 font-[family-name:var(--font-suse-mono)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 space-y-6 pt-12">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-blue-200">
              Features
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight max-w-4xl mx-auto">
              Powerful features for modern intake
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to transform your intake process. From AI-powered surveys to automated documentation and enterprise integrations.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.id} className="p-6 space-y-6 hover:shadow-xl transition-all group">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.accentColor} flex items-center justify-center text-white shadow-md`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {feature.category}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl group-hover:text-blue-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-border">
                    <p className="text-sm">Key capabilities:</p>
                    <ul className="space-y-2">
                      {feature.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={`/features/${feature.slug}`} className="w-full">
                    <Button 
                      className="w-full gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white cursor-pointer"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-20 p-12 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl text-center space-y-6">
            <h2 className="text-3xl">Ready to transform your intake process?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join leading teams using Uptaik to streamline their workflows and save time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 cursor-pointer"
                onClick={() => onNavigate?.("request-demo")}
                asChild={!onNavigate}
              >
                {onNavigate ? (
                  <span>Request a Demo</span>
                ) : (
                  <Link href="/request-demo">Request a Demo</Link>
                )}
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


