import { 
  Sparkles, 
  ArrowDown, 
  ArrowRight, 
  Mail, 
  RefreshCw, 
  Brain, 
  Clock,
  BookOpen,
  Shield,
  BarChart3
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
      title: "AI Survey Platform",
      description: "Create smarter adaptive surveys that ask intelligent follow-ups in real-time",
      color: "[#023373]",
      href: "/features/ai-survey-platform"
    },
    {
      icon: BookOpen,
      title: "Automated Documentation",
      description: "Turn conversations into project docs—automatically generate standardized briefs with AI",
      color: "[#D99152]",
      href: "/features/automated-documentation"
    },
    {
      icon: BarChart3,
      title: "Analytics & Intelligence",
      description: "Data-driven insights & predictions—built-in scoring with RICE, WSJF, MoSCoW frameworks",
      color: "[#BF2E21]",
      href: "/features/analytics-intelligence"
    },
    {
      icon: Shield,
      title: "Enterprise & Integrations",
      description: "Secure, scalable platform that connects with top project management tools like Jira, Asana, and Linear",
      color: "[#C9DFF2]",
      href: "/features/enterprise-integrations"
    }
  ];

  return (
    <section id="problem-solution" className="py-8 lg:py-12 font-[family-name:var(--font-suse-mono)]">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-8 max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
              From Chaos to <span className="text-blue-600">Clarity</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
              Transform scattered project intake into a streamlined AI project management workflow that integrates with your existing project management platforms
            </p>
          </div>
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
                  <Card key={index} className="p-6 text-center space-y-4 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all group">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gray-100 border-2 border-black flex items-center justify-center mx-auto group-hover:bg-red-50 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
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
              <div className="flex items-center gap-3 px-6 py-3 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Sparkles className="w-5 h-5 text-blue-500" />
                <span className="font-medium text-gray-700">Our Intelligent Business Analytics Solution</span>
                <ArrowDown className="w-5 h-5 text-purple-500" />
              </div>
            </div>
          </div>

          {/* Solution Section */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">The Upt<span className="text-blue-600 font-bold">ai</span>k Advantage</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The most advanced AI in project management—intelligent automation that transforms how your team handles project intake and connects with your favorite project management platforms
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <Link key={index} href={solution.href} className="block">
                    <Card className="p-8 text-center space-y-6 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-300 group cursor-pointer h-full">
                      <div className="relative">
                        <div className={`w-16 h-16 ${index === 0 ? 'bg-[#023373]' : index === 1 ? 'bg-[#D99152]' : index === 2 ? 'bg-[#BF2E21]' : 'bg-[#C9DFF2]'} text-white flex items-center justify-center mx-auto shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform duration-300 border-2 border-black`}>
                          <Icon className="w-8 h-8" />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className={`text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-all`}>{solution.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-blue-600 transition-all group-hover:gap-3">
                        <span className="text-sm font-semibold">Learn more</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Card>
                  </Link>
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
                href="/features"
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