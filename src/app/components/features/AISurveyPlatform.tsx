"use client";

import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { FeaturesNav } from "./FeaturesNav";
import Link from "next/link";
import { IntakeSamples } from "../intake-flows/IntakeSamples";
import { 
  Brain, 
  Sparkles, 
  ShieldCheck, 
  MessageSquare, 
  Link2, 
  GitBranch, 
  BarChart3, 
  Database,
  Zap,
  Settings,
  Palette,
  Package,
  HardHat,
  Heart,
  Building2,
  CheckCircle,
  ArrowRight,
  ArrowLeft
} from "lucide-react";

interface AISurveyPlatformProps {
  onNavigate?: (view: string) => void;
}

const features = [
  {
    icon: Brain,
    title: "AI-Powered Adaptive Questioning",
    description: "Uses GPT-4o-mini to generate contextual follow-ups.",
    details: "Dynamically adapts based on response history to capture complete requirements in fewer questions.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: ShieldCheck,
    title: "Semantic Deduplication",
    description: "Embedding-based detection prevents redundant or overlapping questions.",
    details: "Configurable similarity thresholds to balance depth vs. brevity.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "Fatigue Detection & Smart Completion",
    description: "Algorithms monitor engagement, response length, and completion rate.",
    details: "Ends surveys once coverage-based criteria are met, ensuring respondents don&apos;t burn out.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: MessageSquare,
    title: "Conversation Memory",
    description: "Maintains turn-by-turn conversation history.",
    details: "AI extracts hidden insights across answers, improving data richness.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Link2,
    title: "Campaign & Link Management",
    description: "Hierarchical structure: Organization → Campaign → Flow → Links.",
    details: "Tokenized survey links with expiration dates, usage limits, and access control.",
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    icon: GitBranch,
    title: "Survey Flow Builder",
    description: "Visual JSON-based editor for survey branching and adaptive flows.",
    details: "Combine static, AI dynamic, and hybrid survey modes.",
    gradient: "from-violet-500 to-purple-500"
  },
  {
    icon: BarChart3,
    title: "Link Analytics & Real-Time Monitoring",
    description: "Track completions, drop-offs, and engagement in real time.",
    details: "WebSocket updates provide live monitoring during campaigns.",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Database,
    title: "Bulk Survey Operations",
    description: "Archive, export, and manage hundreds of surveys at once.",
    details: "Batch analysis for enterprise-scale survey management.",
    gradient: "from-teal-500 to-cyan-500"
  }
];

const customizationOptions = [
  {
    icon: Package,
    title: "Survey Templates",
    description: "Static, AI Dynamic, Hybrid"
  },
  {
    icon: Settings,
    title: "AI Parameters",
    description: "Configure up to 9 settings (question limits, completion criteria, fatigue sensitivity)"
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Custom logos, fonts, and colors per organization"
  },
  {
    icon: Sparkles,
    title: "Template Marketplace",
    description: "Industry-optimized presets ready out of the box"
  }
];

const technicalSpecs = [
  "Adaptive Question Engine powered by GPT-4o-mini",
  "Vector embeddings for semantic deduplication",
  "Real-time monitoring with WebSocket connections",
  "JSON-based survey flow configuration",
  "Configurable thresholds for completion and fatigue detection"
];

const useCases = [
  {
    icon: HardHat,
    industry: "Construction",
    useCase: "Adaptive workforce compliance surveys to ensure complete safety reporting",
    color: "text-orange-600",
    bg: "bg-orange-100"
  },
  {
    icon: Heart,
    industry: "Healthcare",
    useCase: "Intelligent patient intake surveys that minimize redundancy and fatigue",
    color: "text-pink-600",
    bg: "bg-pink-100"
  },
  {
    icon: Building2,
    industry: "Enterprise IT",
    useCase: "AI-powered project request intake, replacing static SharePoint forms",
    color: "text-blue-600",
    bg: "bg-blue-100"
  }
];

const integrationPoints = [
  "Unified Template System feeds into survey flows",
  "Analytics Platform tracks completion and AI performance metrics",
  "Automated Documentation uses collected data for brief generation"
];

export function AISurveyPlatform({ onNavigate }: AISurveyPlatformProps) {
  return (
    <div className="pb-0 font-[family-name:var(--font-suse-mono)]">
      {/* Breadcrumb Navigation */}
      <div className="bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/features"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>All Features</span>
          </Link>
        </div>
      </div>

      {/* Top Features Navigation */}
      <FeaturesNav variant="top" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20 space-y-6 pt-12">
          <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 hover:bg-blue-100 border-blue-200">
            <Sparkles className="w-4 h-4 mr-1" />
            AI Survey Platform
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Your Project Discovery <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Without All the Meetings
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            AI-driven intake forms that adapt in real time, reduce fatigue, and capture better business data.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            {onNavigate ? (
              <>
                <Button 
                  size="lg"
                  onClick={() => onNavigate("request-demo")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 cursor-pointer"
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
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 cursor-pointer"
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

        {/* Intake Flow Samples */}
        <div className="mb-20">
          <IntakeSamples />
        </div>

        {/* Feature Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-lg text-gray-600">
              Powerful capabilities that transform your survey experience
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
        <div className="mb-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Customization Options</h2>
            <p className="text-lg text-gray-600">
              Tailor the platform to your organization&apos;s needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customizationOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card key={index} className="p-6 space-y-4 bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center">
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
              See how leading organizations use our AI Survey Platform
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

          <Card className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50">
            <div className="space-y-4">
              {integrationPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700 text-lg">{point}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Stop losing responses to survey fatigue.
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start building smarter, adaptive surveys that get completed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {onNavigate ? (
              <>
                <Button 
                  size="lg"
                  onClick={() => onNavigate("request-demo")}
                  className="bg-white text-blue-600 hover:bg-gray-100 cursor-pointer"
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
                    className="bg-white text-blue-600 hover:bg-gray-100 cursor-pointer"
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

