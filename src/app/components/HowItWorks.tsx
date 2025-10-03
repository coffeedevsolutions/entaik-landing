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
      <section id="how-it-works" className="py-20 lg:py-32 font-[family-name:var(--font-suse-mono)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From intake to backlog in three simple steps
            </p>
          </div>
  
          <div className="relative">
            {/* Desktop connector line */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />
            
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center space-y-6">
                    {/* Number Circle with enhanced styling */}
                    <div className="relative">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} text-white shadow-lg flex items-center justify-center relative z-10`}>
                        <span className="text-2xl font-bold">{step.number}</span>
                      </div>
                      {/* Glow effect */}
                      <div className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} opacity-20 blur-xl`} />
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4 max-w-sm">
                      <h3 className="text-xl lg:text-2xl font-semibold">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">{step.description}</p>
                    </div>
                    
                    {/* Mobile connector arrow */}
                    {index < steps.length - 1 && (
                      <div className="md:hidden flex justify-center mt-8 mb-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }