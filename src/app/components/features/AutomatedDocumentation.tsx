"use client";

import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { FeaturesNav } from "./FeaturesNav";
import Link from "next/link";
import { 
  FileText, 
  Sparkles, 
  Target, 
  Users, 
  Download, 
  Boxes, 
  CheckSquare, 
  BarChart3,
  Package,
  Settings,
  Palette,
  Sliders,
  Building2,
  Briefcase,
  Heart,
  CheckCircle,
  ArrowRight,
  GitBranch,
  Clock
} from "lucide-react";

interface AutomatedDocumentationProps {
  onNavigate?: (view: string) => void;
}

const features = [
  {
    icon: FileText,
    title: "AI-Powered Brief Generation",
    description: "Extracts KPIs, stakeholders, requirements, and pain points directly from responses.",
    details: "Provides AI confidence scoring and source traceability.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Target,
    title: "Structured Business Intelligence Extraction",
    description: "Identifies success criteria and critical dependencies.",
    details: "Automatically formats into enterprise-ready briefs.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: GitBranch,
    title: "Version Control & Collaboration",
    description: "Track every revision with collaborative commenting and approval workflows.",
    details: "Supports multi-reviewer teams.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Download,
    title: "Professional Document Export",
    description: "Export in PDF, Word, JSON with branded templates.",
    details: "Markdown-based rendering with variable substitution.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Boxes,
    title: "Solution Engineering",
    description: "Automatically generates Work Breakdown Structures (Epics → Stories → Tasks).",
    details: "AI-based effort estimation (1–10 scale, story points, duration).",
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    icon: CheckSquare,
    title: "Acceptance Criteria Generation",
    description: "AI drafts acceptance criteria aligned with organizational best practices.",
    details: "Customizable story patterns for different project types.",
    gradient: "from-violet-500 to-purple-500"
  },
  {
    icon: BarChart3,
    title: "Priority Matrix & Technical Debt Analysis",
    description: "Configurable scoring frameworks (RICE, WSJF, MoSCoW).",
    details: "Identifies risks and dependencies during backlog creation.",
    gradient: "from-pink-500 to-red-500"
  },
  {
    icon: Package,
    title: "Template Integration",
    description: "Plug into PM systems with customizable story and criteria templates.",
    details: "Seamlessly integrates with your existing workflows.",
    gradient: "from-teal-500 to-cyan-500"
  }
];

const customizationOptions = [
  {
    icon: Sliders,
    title: "Effort Scoring Methods",
    description: "Define effort scoring methods (points, time, complexity)"
  },
  {
    icon: Settings,
    title: "Story Patterns",
    description: "Choose from pre-built story patterns or create your own"
  },
  {
    icon: Palette,
    title: "Custom Branding",
    description: "Apply custom branding for all exported documents"
  },
  {
    icon: Target,
    title: "Extraction Thresholds",
    description: "Configure completion and extraction thresholds"
  }
];

const technicalSpecs = [
  "AI Analysis Engine with prompt-engineered extraction",
  "Business insight confidence scoring",
  "Markdown templating with conditional logic",
  "WBS generation with dependency mapping",
  "Collaborative version control system"
];

const useCases = [
  {
    icon: Briefcase,
    industry: "Agencies",
    useCase: "Quickly produce polished project briefs from client intake calls",
    color: "text-blue-600",
    bg: "bg-blue-100"
  },
  {
    icon: Building2,
    industry: "Enterprises",
    useCase: "Convert employee requests into structured Jira epics",
    color: "text-purple-600",
    bg: "bg-purple-100"
  },
  {
    icon: Heart,
    industry: "Healthcare IT",
    useCase: "Standardize compliance documentation with AI automation",
    color: "text-pink-600",
    bg: "bg-pink-100"
  }
];

const integrationPoints = [
  "Jira syncs with generated epics and stories",
  "Multi-tenant collaboration workflows tie into team roles",
  "Analytics dashboards track backlog throughput and documentation consistency"
];

export function AutomatedDocumentation({ onNavigate }: AutomatedDocumentationProps) {
  return (
    <div className="pb-0 font-[family-name:var(--font-suse-mono)]">
      {/* Top Features Navigation */}
      <FeaturesNav variant="top" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20 space-y-6 pt-12">
          <Badge className="bg-gradient-to-r from-pink-100 to-red-100 text-pink-700 hover:bg-pink-100 border-pink-200">
            <FileText className="w-4 h-4 mr-1" />
            Automated Documentation
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Turn Conversations Into <br />
            <span className="bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
              Professional Project Documentation
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Save hours of manual work by transforming intake responses into structured briefs, work plans, and backlog items.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            {onNavigate ? (
              <>
                <Button 
                  size="lg"
                  onClick={() => onNavigate("request-demo")}
                  className="bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 cursor-pointer"
                >
                  Request a Demo
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => { window.location.href = "/#waitlist"; }}
                  className="cursor-pointer"
                >
                  Join the Beta
                </Button>
              </>
            ) : (
              <>
                <Link href="/request-demo">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 cursor-pointer"
                  >
                    Request a Demo
                  </Button>
                </Link>
                <Link href="/#waitlist">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    Join the Beta
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-lg text-gray-600">
              Transform raw data into actionable documentation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 space-y-4 hover:shadow-xl transition-all duration-300 group">
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className={`absolute inset-0 w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} opacity-10 blur-xl group-hover:opacity-20 transition-opacity`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{feature.details}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Customization Options */}
        <div className="mb-20 bg-gradient-to-br from-pink-50 to-red-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Customization Options</h2>
            <p className="text-lg text-gray-600">
              Tailor documentation to your organization&apos;s needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customizationOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card key={index} className="p-6 space-y-4 bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-red-600 text-white flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900">{option.title}</h3>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
            <p className="text-lg text-gray-600">
              Built on cutting-edge AI and modern infrastructure
            </p>
          </div>

          <Card className="p-8 bg-gradient-to-br from-gray-50 to-white">
            <div className="grid md:grid-cols-2 gap-4">
              {technicalSpecs.map((spec, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{spec}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Use Cases</h2>
            <p className="text-lg text-gray-600">
              See how teams automate their documentation workflow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <Card key={index} className="p-8 space-y-4 hover:shadow-xl transition-all group">
                  <div className={`w-14 h-14 rounded-xl ${useCase.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${useCase.color}`} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900">{useCase.industry}</h3>
                    <p className="text-gray-600 leading-relaxed">{useCase.useCase}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Integration Points */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Integration Points</h2>
            <p className="text-lg text-gray-600">
              Seamlessly connects with your workflow
            </p>
          </div>

          <Card className="p-8 bg-gradient-to-br from-pink-50 to-red-50">
            <div className="space-y-4">
              {integrationPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700 text-lg">{point}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-pink-600 to-red-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            From intake to actionable plans in minutes.
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Automate your documentation and spend time building, not formatting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {onNavigate ? (
              <>
                <Button 
                  size="lg"
                  onClick={() => onNavigate("request-demo")}
                  className="bg-white text-pink-600 hover:bg-gray-100 cursor-pointer"
                >
                  Request a Demo
                </Button>
                <Button 
                  size="lg"
                  onClick={() => { window.location.href = "/#waitlist"; }}
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 cursor-pointer"
                >
                  Join the Beta
                </Button>
              </>
            ) : (
              <>
                <Link href="/request-demo">
                  <Button 
                    size="lg"
                    className="bg-white text-pink-600 hover:bg-gray-100 cursor-pointer"
                  >
                    Request a Demo
                  </Button>
                </Link>
                <Link href="/#waitlist">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 cursor-pointer"
                  >
                    Join the Beta
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Bottom Features Navigation */}
      <FeaturesNav variant="bottom" />
    </div>
  );
}

