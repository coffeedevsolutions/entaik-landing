import { X, CheckCircle2 } from "lucide-react";

export function ProblemSolution() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Problem */}
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-100 text-red-600">
              <X className="w-6 h-6" />
            </div>
            <h2 className="text-3xl lg:text-4xl">The Problem</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-red-500 mt-1">•</span>
                <span className="text-lg text-muted-foreground">
                    Project intake scattered across emails, spreadsheets, and meetings
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 mt-1">•</span>
                <span className="text-lg text-muted-foreground">
                  Static intake forms miss context → endless follow-ups
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 mt-1">•</span>
                <span className="text-lg text-muted-foreground">
                    Prioritization lives in peoples&apos; heads instead of a system
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 mt-1">•</span>
                <span className="text-lg text-muted-foreground">
                    Unstructured IT and analytics request pipelines slow delivery
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 mt-1">•</span>
                <span className="text-lg text-muted-foreground">
                    Lost or overlooked project requests
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 mt-1">•</span>
                <span className="text-lg text-muted-foreground">
                    Hours wasted on manual documentation and backlog entry
                </span>
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 text-green-600">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h2 className="text-3xl lg:text-4xl">The Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
                IntakeAI is an AI-powered project intake platform that unifies scattered requests into one centralized intake portal. Adaptive surveys ask intelligent follow-up questions in real time, ensuring every request is complete the first time.            
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
                Responses are automatically converted into comprehensive project briefs with built-in scoring for frameworks like RICE, WSJF, or MoSCoW, giving teams faster, more objective prioritization.            
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
                From there, IntakeAI generates structured work items (epics, user stories, tasks) aligned to your organization’s SOPs and pushes them directly into Jira or your backlog tool of choice—eliminating manual transcription, duplicate effort, and lost requests.   
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
                Product managers and PMO leaders gain a clear, searchable view of all incoming requests with impact scores, effort estimates, and full context. Whether in construction, utilities, healthcare, or other non-tech enterprises with growing IT and analytics teams, IntakeAI streamlines project intake, reduces wasted meetings, and accelerates delivery of your highest-value work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}