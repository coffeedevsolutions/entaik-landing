"use client";

import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { 
  Shield, 
  Sparkles, 
  Lock, 
  FileCheck, 
  Code, 
  Globe, 
  Users, 
  Download,
  Settings,
  Key,
  Webhook,
  Building2,
  HeartPulse,
  Landmark,
  CheckCircle,
  ArrowRight,
  Server,
  Database
} from "lucide-react";

interface EnterpriseIntegrationsProps {
  onNavigate?: (view: string) => void;
}

const features = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Auth0 SSO with full SAML/OIDC support.",
    details: "Role mapping and auto-provisioning for seamless onboarding.",
    gradient: "from-teal-500 to-emerald-500"
  },
  {
    icon: Server,
    title: "Multi-Tenant Architecture",
    description: "Row-level data isolation with encrypted storage.",
    details: "Granular RBAC (Admin / Reviewer / Member).",
    gradient: "from-emerald-500 to-green-500"
  },
  {
    icon: FileCheck,
    title: "Audit Logging & Compliance",
    description: "Complete activity trails for regulatory audits.",
    details: "Tamper-proof logs for accountability.",
    gradient: "from-cyan-500 to-teal-500"
  },
  {
    icon: Code,
    title: "API-First Architecture",
    description: "RESTful APIs covering all platform functionality.",
    details: "Webhook system for real-time event notifications.",
    gradient: "from-teal-600 to-cyan-600"
  },
  {
    icon: Globe,
    title: "Custom Domains & White Labeling",
    description: "Deploy under your own subdomain with SSL certificates.",
    details: "Full branding control for client-facing experiences.",
    gradient: "from-emerald-600 to-teal-600"
  },
  {
    icon: Users,
    title: "Seat Management & Scaling",
    description: "Track usage across teams.",
    details: "Scale licenses automatically as organizations grow.",
    gradient: "from-green-600 to-emerald-600"
  },
  {
    icon: Users,
    title: "Team Collaboration Workflows",
    description: "Multi-reviewer approvals, notifications, and comment systems.",
    details: "Built-in seat assignment and secure invitations.",
    gradient: "from-teal-500 to-green-500"
  },
  {
    icon: Download,
    title: "Multi-Format Data Export",
    description: "Export to CSV, JSON, XML with field mapping.",
    details: "Flexible data portability for enterprise needs.",
    gradient: "from-cyan-600 to-teal-600"
  }
];

const customizationOptions = [
  {
    icon: Globe,
    title: "Custom Domains",
    description: "Custom domains with branding and SSL"
  },
  {
    icon: Lock,
    title: "Role Permissions",
    description: "Flexible role permissions for different departments"
  },
  {
    icon: Webhook,
    title: "Webhook Endpoints",
    description: "Configurable webhook endpoints for workflow automation"
  },
  {
    icon: Users,
    title: "Seat Scaling",
    description: "Seat scaling based on organizational growth"
  }
];

const technicalSpecs = [
  "Auth0 SAML/OIDC + OAuth 2.0",
  "REST APIs + Webhooks",
  "Row-level database security",
  "Multi-tenant scaling infrastructure",
  "Complete audit logs"
];

const useCases = [
  {
    icon: Building2,
    industry: "Enterprises",
    useCase: "Replace static request portals with an AI intake system",
    color: "text-teal-600",
    bg: "bg-teal-100"
  },
  {
    icon: HeartPulse,
    industry: "Finance/Healthcare",
    useCase: "Ensure compliance while gathering sensitive data",
    color: "text-emerald-600",
    bg: "bg-emerald-100"
  },
  {
    icon: Landmark,
    industry: "Government",
    useCase: "Meet security and audit standards for project workflows",
    color: "text-cyan-600",
    bg: "bg-cyan-100"
  }
];

const integrationPoints = [
  "Jira bidirectional sync",
  "Webhooks notify Slack, Teams, or custom ITSM tools",
  "APIs connect to SharePoint, Power Automate, or custom enterprise apps"
];

export function EnterpriseIntegrations({ onNavigate }: EnterpriseIntegrationsProps) {
  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20 space-y-6 pt-12">
          <Badge className="bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 hover:bg-teal-100 border-teal-200">
            <Shield className="w-4 h-4 mr-1" />
            Enterprise & Integrations
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Enterprise-Ready Platform That <br />
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Works With Your Workflow
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Secure, scalable, and compliant—built for IT leaders and enterprise buyers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            {onNavigate ? (
              <>
                <Button 
                  size="lg"
                  onClick={() => onNavigate("request-demo")}
                  className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700"
                >
                  Request Enterprise Demo
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate("pricing")}
                >
                  View Pricing
                </Button>
              </>
            ) : (
              <>
                <Link href="/request-demo">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700"
                  >
                    Request Enterprise Demo
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button 
                    size="lg"
                    variant="outline"
                  >
                    View Pricing
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
              Enterprise-grade capabilities for secure, scalable operations
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
        <div className="mb-20 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Customization Options</h2>
            <p className="text-lg text-gray-600">
              Tailor the platform to your enterprise requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customizationOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card key={index} className="p-6 space-y-4 bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 text-white flex items-center justify-center">
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
              Built on enterprise-grade security and infrastructure
            </p>
          </div>

          <Card className="p-8 bg-gradient-to-br from-gray-50 to-white">
            <div className="grid md:grid-cols-2 gap-4">
              {technicalSpecs.map((spec, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
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
              Trusted by regulated industries and enterprise teams
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
              Connect seamlessly with your existing tools
            </p>
          </div>

          <Card className="p-8 bg-gradient-to-br from-teal-50 to-emerald-50">
            <div className="space-y-4">
              {integrationPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700 text-lg">{point}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Enterprise teams trust us with their workflows.
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get the compliance, security, and integrations you need.
          </p>
          {onNavigate ? (
            <Button 
              size="lg"
              onClick={() => onNavigate("request-demo")}
              className="bg-white text-teal-600 hover:bg-gray-100"
            >
              Request Enterprise Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          ) : (
            <Link href="/request-demo">
              <Button 
                size="lg"
                className="bg-white text-teal-600 hover:bg-gray-100"
              >
                Request Enterprise Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

