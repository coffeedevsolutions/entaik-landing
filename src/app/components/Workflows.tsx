"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight, AlertCircle, Lightbulb, Zap, Heart, Scale, ShoppingCart, GraduationCap, DollarSign, Laptop, LucideIcon } from "lucide-react";
import { workflowConfigs } from "./workflow-visualization/workflow-configs";

interface WorkflowsProps {
  onNavigate?: (view: string) => void;
  initialCategory?: string;
}

// Map workflow IDs to categories and icons
const workflowMetadata: Record<string, { category: string; icon: LucideIcon }> = {
  "technical-request": {
    category: "IT Operations",
    icon: Zap
  },
  "feature-request": {
    category: "Product Management",
    icon: Lightbulb
  },
  "incident-response": {
    category: "IT Operations",
    icon: AlertCircle
  },
  "healthcare-patient-experience": {
    category: "Healthcare",
    icon: Heart
  },
  "legal-client-onboarding": {
    category: "Legal & Professional Services",
    icon: Scale
  },
  "retail-returns-feedback": {
    category: "Retail & E-Commerce",
    icon: ShoppingCart
  },
  "education-course-feedback": {
    category: "Education",
    icon: GraduationCap
  },
  "finance-claim-intake": {
    category: "Finance & Insurance",
    icon: DollarSign
  },
  "internal-it-hr-ticketing": {
    category: "Internal Operations",
    icon: Laptop
  }
};

// Generate workflows from config
const workflows = Object.values(workflowConfigs).map(config => {
  const metadata = workflowMetadata[config.id] || { 
    category: "General", 
    icon: Zap 
  };
  
  // Extract key features from benefits
  const features = config.benefits.slice(0, 4).map(benefit => benefit.text);
  
  return {
    id: config.id,
    configId: config.id,
    icon: metadata.icon,
    title: config.title,
    description: config.description,
    features,
    category: metadata.category,
    accentColor: config.accentColor,
    hasVisualization: true
  };
});

export function Workflows({ onNavigate, initialCategory }: WorkflowsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || "All");
  
  // Update selected category when initialCategory or searchParams change
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category") || initialCategory || "All";
    setSelectedCategory(categoryFromUrl);
  }, [searchParams, initialCategory]);
  
  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(workflows.map(w => w.category)))];
  
  // Filter workflows based on selected category
  const filteredWorkflows = selectedCategory === "All" 
    ? workflows 
    : workflows.filter(w => w.category === selectedCategory);
  
  // Handle category selection and update URL
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      router.push("/workflows");
    } else {
      router.push(`/workflows?category=${encodeURIComponent(category)}`);
    }
  };

  return (
    <div className="pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 space-y-6 pt-12">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-blue-200">
              Workflows
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight max-w-4xl mx-auto">
              Pre-built workflows for every use case
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started quickly with templates designed for your industry and function. Customize to match your exact needs.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
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
                    ({category === "All" ? workflows.length : workflows.filter(w => w.category === category).length})
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Workflows Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {filteredWorkflows.map((workflow) => {
              const Icon = workflow.icon;
              return (
                <Card key={workflow.id} className="p-6 space-y-6 hover:shadow-xl transition-all group">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${workflow.accentColor} flex items-center justify-center text-white shadow-md`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {workflow.category}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl group-hover:text-blue-600 transition-colors">
                        {workflow.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {workflow.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-border">
                    <p className="text-sm">Key capabilities:</p>
                    <ul className="space-y-2">
                      {workflow.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {workflow.hasVisualization && workflow.configId ? (
                    <Link href={`/workflows/${workflow.configId}`} className="w-full">
                      <Button 
                        className="w-full gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white cursor-pointer"
                      >
                        View interactive workflow
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="outline" className="w-full gap-2 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-200 transition-all">
                      View workflow
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  )}
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-20 p-12 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl text-center space-y-6">
            <h2 className="text-3xl">Need a custom workflow?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team can help you design and implement intake workflows tailored to your specific processes and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 cursor-pointer"
                onClick={() => onNavigate?.("request-demo")}
              >
                Request a Demo
              </Button>
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
    </div>
  );
}