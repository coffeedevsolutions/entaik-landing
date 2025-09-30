export function HowItWorks() {
    const steps = [
      {
        number: "01",
        title: "Collect Requests with Adaptive AI Surveys",
        description: "Stakeholders submit requests through a dynamic AI-powered intake form that adapts follow-up questions in real time. This ensures complete project requirements, eliminates back-and-forth meetings, and standardizes intake across teams.",
        gradient: "from-blue-500 to-cyan-500"
      },
      {
        number: "02",
        title: "Document & Prioritize Automatically",
        description: "The AI transforms responses into a standardized project brief with full context, ROI data, and effort details. Requests are then scored with your prioritization framework (RICE, WSJF, MoSCoW, or custom) so PMs and PMOs can make faster, evidence-based decisions.",
        gradient: "from-purple-500 to-pink-500"
      },
      {
        number: "03",
        title: "Deliver Jira-Ready Work Items",
        description: "Approved requests are converted into structured epics, user stories, and tasks, complete with acceptance criteria and estimates. Work items flow directly into Jira or your backlog tool of choice, reducing manual data entry, errors, and lost context.",
        gradient: "from-orange-500 to-red-500"
      }
    ];
  
    return (
      <section id="how-it-works" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From intake to backlog in three simple steps
            </p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-border to-border/50" />
                )}
                
                <div className="relative space-y-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} text-white shadow-lg`}>
                    <span className="text-2xl font-semibold">{step.number}</span>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }