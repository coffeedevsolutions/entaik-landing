import { Card } from "./ui/card";
import { Clock, FileCheck, LayoutDashboard } from "lucide-react";

const outcomes = [
  {
    icon: Clock,
    title: "Fewer Follow-up Meetings",
    description: "Capture complete project requirements on the first submission with adaptive AI intake surveys that ask the right follow-up questions, reducing wasted meetings and back-and-forth emails."
  },
  {
    icon: FileCheck,
    title: "Faster, Consistent Documentation",
    description: "Automatically generate standardized project briefs in seconds. Eliminate manual transcription and ensure every IT or analytics request is documented the same way, every time."
  },
  {
    icon: LayoutDashboard,
    title: "One View of All Requests & Priorities",
    description: "Get a single source of truth for your intake pipeline. View every request with impact scores, effort estimates, and prioritization status inside one dashboard for project managers and PMOs."
  }
];

export function Outcomes() {
  return (
    <section className="py-8 lg:py-12 font-[family-name:var(--font-suse-mono)]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl">Measurable Outcomes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the impact from day one
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;
            return (
              <Card key={index} className="p-8 space-y-4 text-center hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C9DFF2] text-[#023373] mx-auto border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold">{outcome.title}</h3>
                <p className="text-muted-foreground font-medium">{outcome.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}