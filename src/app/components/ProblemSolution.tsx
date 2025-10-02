import { 
  Sparkles, 
  ArrowDown, 
  ArrowRight, 
  Mail, 
  RefreshCw, 
  Brain, 
  Clock,
  Target,
  GitBranch,
  NotebookText
} from "lucide-react";
import { Card } from "./ui/card";
import Link from "next/link";

export function ProblemSolution() {
  const problems = [
    {
      icon: Mail,
      title: "Scattered Intake",
      description: "Project requests lost across emails, spreadsheets, and meetings",
      color: "text-red-500"
    },
    {
      icon: RefreshCw,
      title: "Endless Follow-ups",
      description: "Static forms miss context, creating endless back-and-forth",
      color: "text-orange-500"
    },
    {
      icon: Brain,
      title: "Manual Prioritization",
      description: "Decisions live in people's heads instead of systematic frameworks",
      color: "text-amber-500"
    },
    {
      icon: Clock,
      title: "Slow Delivery",
      description: "Unstructured pipelines bottleneck IT and analytics teams",
      color: "text-red-600"
    }
  ];

  const solutions = [
    {
      icon: Sparkles,
      title: "AI-Powered Intake",
      description: "Adaptive surveys that ask intelligent follow-ups in real-time",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: NotebookText,
      title: "Automated Docs",
      description: "Automatically generate standardized project briefs with AI",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      icon: Target,
      title: "Smart Prioritization",
      description: "Built-in scoring with RICE, WSJF, MoSCoW, or custom frameworks",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: GitBranch,
      title: "Seamless Integration",
      description: "Structured work items flow directly into Jira and backlog tools",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section id="problem-solution" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            From Chaos to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clarity</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform scattered project intake into a streamlined, AI-powered workflow that scales with your team
          </p>
        </div>

        <div className="space-y-16">
          {/* Problem Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">The Problem</h3>
              <p className="text-muted-foreground">What technical teams in non-technical enterprises struggle with today</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <Card key={index} className="p-6 text-center space-y-4 bg-white/80 backdrop-blur-sm border-gray-200 hover:border-red-200 hover:shadow-md transition-all group">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mx-auto group-hover:bg-red-50 transition-colors">
                        <Icon className={`w-6 h-6 ${problem.color} group-hover:scale-110 transition-transform`} />
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-900">{problem.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{problem.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Transformation Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm">
                <Sparkles className="w-5 h-5 text-blue-500" />
                <span className="font-medium text-gray-700">Our Intelligent Business Analytics Solution</span>
                <ArrowDown className="w-5 h-5 text-purple-500" />
              </div>
            </div>
          </div>

          {/* Solution Section */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">The Upt<span className="bg-gradient-to-r from-blue-600 to-purple-600 font-bold bg-clip-text text-transparent">ai</span>k Advantage</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Intelligent automation that transforms how your team handles project intake
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <Card key={index} className="p-8 text-center space-y-6 bg-white border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 group">
                    <div className="relative">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} text-white flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      {/* Subtle glow effect */}
                      <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} opacity-10 blur-xl mx-auto group-hover:opacity-20 transition-opacity`} />
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-gray-900">{solution.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center space-y-6 pt-12">
            <div className="space-y-3">
              <p className="text-lg text-gray-600">
                Ready to eliminate project intake chaos?
              </p>
              <Link 
                href="/features/ai-survey-platform"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors cursor-pointer"
              >
                <span>Discover how Uptaik works</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}