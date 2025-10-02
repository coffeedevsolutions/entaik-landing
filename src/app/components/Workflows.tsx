import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight, Workflow, Users, Building, Heart, Zap, FileText } from "lucide-react";

interface WorkflowsProps {
  onNavigate: (view: string) => void;
}

const workflows = [
  {
    id: "pmo-intake",
    icon: Workflow,
    title: "PMO Project Intake",
    description: "Capture complete project requests from stakeholders across your organization with adaptive AI surveys.",
    features: ["Adaptive questioning", "Auto-prioritization", "Jira integration", "Stakeholder notifications"],
    category: "Product Management"
  },
  {
    id: "it-requests",
    icon: Zap,
    title: "IT Service Requests",
    description: "Streamline infrastructure and system requests with intelligent intake that captures technical requirements.",
    features: ["Technical specs capture", "SLA tracking", "Resource allocation", "Change management"],
    category: "IT Operations"
  },
  {
    id: "construction-capital",
    icon: Building,
    title: "Capital Project Planning",
    description: "Manage construction and facilities projects with compliance-aware intake for capital planning.",
    features: ["Budget tracking", "Compliance checks", "Safety requirements", "Vendor coordination"],
    category: "Construction"
  },
  {
    id: "healthcare-enhancement",
    icon: Heart,
    title: "Clinical System Enhancements",
    description: "Capture clinical improvement requests while maintaining HIPAA compliance and patient safety standards.",
    features: ["HIPAA compliance", "Patient impact analysis", "Clinical workflow mapping", "Regulatory tracking"],
    category: "Healthcare"
  },
  {
    id: "process-improvement",
    icon: Users,
    title: "Process Improvement Requests",
    description: "Collect and prioritize operational improvement ideas from frontline staff and managers.",
    features: ["Impact scoring", "ROI estimation", "Cross-functional review", "Implementation tracking"],
    category: "Operations"
  },
  {
    id: "document-automation",
    icon: FileText,
    title: "Automated Documentation",
    description: "Generate project briefs, requirements docs, and stakeholder communications automatically from intake data.",
    features: ["Template customization", "Auto-generation", "Version control", "Approval workflows"],
    category: "Documentation"
  }
];

export function Workflows({ onNavigate }: WorkflowsProps) {
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

          {/* Workflows Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {workflows.map((workflow) => {
              const Icon = workflow.icon;
              return (
                <Card key={workflow.id} className="p-6 space-y-6 hover:shadow-xl transition-all group">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
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

                  <Button variant="outline" className="w-full gap-2 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-200 transition-all">
                    View workflow
                    <ArrowRight className="w-4 h-4" />
                  </Button>
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
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() => onNavigate("request-demo")}
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