import { Card } from "./ui/card";
import { MessageSquareText, FileText, Target, Sparkles, Cable, Map } from "lucide-react";

const features = [
  {
    icon: MessageSquareText,
    title: "Adaptive AI Intake Surveys",
    description: "Dynamic surveys that adapt questions in real time to capture ROI, effort, process details, and requirements. No more static intake forms or endless follow-up meetings.",
    color: "[#023373]"
  },
  {
    icon: FileText,
    title: "Auto-Generated Project Documentation",
    description: "Automatically create standardized project briefs with AI. Fully customizable templates ensure consistent documentation for every IT or analytics request.",
    color: "[#F29F05]"
  },
  {
    icon: Target,
    title: "Pre-Prioritization & Impact Tracking",
    description: "Apply your prioritization framework (RICE, WSJF, MoSCoW, or custom) to each request and see workload impact downstream.",
    color: "[#D99152]"
  },
  {
    icon: Sparkles,
    title: "AI Work Item Generation",
    description: "Convert documentation into Jira epics, user stories, tasks, and requirements automatically based on your SOP.",
    color: "[#BF2E21]"
  },
  {
    icon: Cable,
    title: "Jira Integration",
    description: "Seamlessly push Jira-ready epics and stories directly into your backlog. Save hours of manual entry.",
    color: "[#C9DFF2]"
  },
  {
    icon: Map,
    title: "Roadmap (Coming Soon)",
    description: "Visualize all requests and priorities in one place with timeline views, capacity planning, and stakeholder communication.",
    color: "[#023373]"
  }
];

export function Features() {
  return (
    <section id="features" className="py-8 lg:py-12 font-[family-name:var(--font-suse-mono)]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl">Everything You Need to Streamline Intake</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From first question to final work item, Uptaik automates the entire intake pipeline.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 space-y-4 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className={`inline-flex items-center justify-center w-12 h-12 ${index === 0 ? 'bg-[#023373]' : index === 1 ? 'bg-[#F29F05]' : index === 2 ? 'bg-[#D99152]' : index === 3 ? 'bg-[#BF2E21]' : index === 4 ? 'bg-[#C9DFF2]' : 'bg-[#023373]'} text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground font-medium">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}