"use client";

import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { FeaturesNav } from "./FeaturesNav";
import Link from "next/link";
import { 
  BarChart3, 
  Sparkles, 
  Activity, 
  Zap, 
  LineChart, 
  TrendingUp, 
  FileText, 
  PieChart,
  Settings,
  Calendar,
  Lock,
  Palette,
  Users,
  Database,
  Briefcase,
  CheckCircle,
  ArrowRight,
  Radio,
  GitBranch
} from "lucide-react";

interface AnalyticsIntelligenceProps {
  onNavigate?: (view: string) => void;
}

const features = [
  {
    icon: BarChart3,
    title: "Comprehensive Metrics (65+ Data Points)",
    description: "Track surveys, users, solutions, and organizational metrics.",
    details: "Complete visibility into every aspect of your intake pipeline.",
    gradient: "from-orange-500 to-amber-500"
  },
  {
    icon: Radio,
    title: "Real-Time Dashboards",
    description: "WebSocket-powered dashboards update instantly.",
    details: "Cached for performance across global teams.",
    gradient: "from-amber-500 to-yellow-500"
  },
  {
    icon: Activity,
    title: "Survey Performance Analytics",
    description: "Completion rates, drop-off points, response quality scores.",
    details: "AI effectiveness metrics across campaigns.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: TrendingUp,
    title: "Predictive Intelligence",
    description: "Trend analysis for survey engagement.",
    details: "Complexity forecasting and risk scoring algorithms.",
    gradient: "from-orange-600 to-amber-600"
  },
  {
    icon: FileText,
    title: "Custom Reporting",
    description: "Drag-and-drop builder for fully tailored reports.",
    details: "Schedule exports in CSV, PDF, JSON.",
    gradient: "from-amber-600 to-orange-600"
  },
  {
    icon: PieChart,
    title: "Data Visualization Suite",
    description: "Interactive charts, heatmaps, drill-down reporting.",
    details: "Visualize completion funnels or requirement clustering.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: GitBranch,
    title: "Cross-Organization Benchmarking",
    description: "Compare performance across teams or clients.",
    details: "Identify bottlenecks in requirement gathering pipelines.",
    gradient: "from-yellow-600 to-orange-600"
  },
  {
    icon: Zap,
    title: "Export & Automation",
    description: "Schedule report delivery.",
    details: "Integrate with BI platforms via API.",
    gradient: "from-amber-500 to-orange-500"
  }
];

const customizationOptions = [
  {
    icon: FileText,
    title: "Custom Templates",
    description: "Custom report templates per department"
  },
  {
    icon: Calendar,
    title: "Scheduled Delivery",
    description: "Scheduled delivery via email or webhook"
  },
  {
    icon: Lock,
    title: "Drill-Down Permissions",
    description: "Drill-down permissions for role-based dashboards"
  },
  {
    icon: Palette,
    title: "White-Labeled Analytics",
    description: "White-labeled analytics for client portals"
  }
];

const technicalSpecs = [
  "65+ tracked metrics",
  "WebSocket real-time updates",
  "Drag-and-drop custom reporting engine",
  "Predictive intelligence algorithms",
  "Export to CSV, JSON, PDF, XML"
];

const useCases = [
  {
    icon: Briefcase,
    industry: "Executives",
    useCase: "Track ROI on digital transformation initiatives",
    color: "text-orange-600",
    bg: "bg-orange-100"
  },
  {
    icon: Database,
    industry: "Data Analysts",
    useCase: "Deep dive into survey and backlog quality",
    color: "text-amber-600",
    bg: "bg-amber-100"
  },
  {
    icon: Users,
    industry: "Operations",
    useCase: "Spot risks early with predictive analytics",
    color: "text-yellow-600",
    bg: "bg-yellow-100"
  }
];

const integrationPoints = [
  "Feeds into Jira, PM tools, and BI platforms",
  "Data export pipelines for Snowflake / Tableau / PowerBI",
  "Cross-links to Survey Intelligence dashboards"
];

export function AnalyticsIntelligence({ onNavigate }: AnalyticsIntelligenceProps) {
  return (
    <div className="pb-0">
      {/* Top Features Navigation */}
      <FeaturesNav variant="top" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20 space-y-6 pt-12">
          <Badge className="bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 hover:bg-orange-100 border-orange-200">
            <BarChart3 className="w-4 h-4 mr-1" />
            Analytics & Intelligence
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Make Data-Driven Decisions With <br />
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Project Intelligence
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Unlock insights into performance, predict risks, and optimize outcomes with AI analytics.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            {onNavigate ? (
              <>
                <Button 
                  size="lg"
                  onClick={() => onNavigate("home")}
                  className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700"
                >
                  Get Started With Analytics
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate("request-demo")}
                >
                  Request a Demo
                </Button>
              </>
            ) : (
              <>
                <Link href="/#waitlist">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700"
                  >
                    Get Started With Analytics
                  </Button>
                </Link>
                <Link href="/request-demo">
                  <Button 
                    size="lg"
                    variant="outline"
                  >
                    Request a Demo
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
              Transform data into actionable insights
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
        <div className="mb-20 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Customization Options</h2>
            <p className="text-lg text-gray-600">
              Tailor analytics to your organization&apos;s needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customizationOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card key={index} className="p-6 space-y-4 bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 text-white flex items-center justify-center">
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
              Built on powerful analytics infrastructure
            </p>
          </div>

          <Card className="p-8 bg-gradient-to-br from-gray-50 to-white">
            <div className="grid md:grid-cols-2 gap-4">
              {technicalSpecs.map((spec, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
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
              See how teams leverage analytics for better decisions
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
              Connect seamlessly with your data ecosystem
            </p>
          </div>

          <Card className="p-8 bg-gradient-to-br from-orange-50 to-amber-50">
            <div className="space-y-4">
              {integrationPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700 text-lg">{point}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            See your requirements pipeline like never before.
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Turn raw responses into actionable intelligence.
          </p>
          {onNavigate ? (
            <Button 
              size="lg"
              onClick={() => onNavigate("home")}
              className="bg-white text-orange-600 hover:bg-gray-100"
            >
              Get Started With Analytics
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          ) : (
            <Link href="/#waitlist">
              <Button 
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100"
              >
                Get Started With Analytics
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          )}
        </div>
      </div>
      
      {/* Bottom Features Navigation */}
      <FeaturesNav variant="bottom" />
    </div>
  );
}

