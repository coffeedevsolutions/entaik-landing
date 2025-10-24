export function HowItWorks() {
    const steps = [
      {
        number: "01",
        title: "Collect Requests with Adaptive AI Surveys",
        description: "Stakeholders submit requests through a dynamic AI-powered intake form that adapts follow-up questions in real time. This ensures complete project requirements, eliminates back-and-forth meetings, and standardizes intake across teams.",
        color: "[#023373]"
      },
      {
        number: "02",
        title: "Document & Prioritize Automatically",
        description: "The AI transforms responses into a standardized project brief with full context, ROI data, and effort details. Requests are then scored with your prioritization framework (RICE, WSJF, MoSCoW, or custom) so PMs and PMOs can make faster, evidence-based decisions.",
        color: "[#F29F05]"
      },
      {
        number: "03",
        title: "Deliver Jira-Ready Work Items",
        description: "Approved requests are converted into structured epics, user stories, and tasks, complete with acceptance criteria and estimates. Work items flow directly into Jira or your backlog tool of choice, reducing manual data entry, errors, and lost context.",
        color: "[#BF2E21]"
      }
    ];
  
    return (
      <section id="how-it-works" className="py-8 lg:py-12 font-[family-name:var(--font-suse-mono)]">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From intake to backlog in three simple steps
            </p>
          </div>
  
          <div className="relative">
            {/* Desktop connector line */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-1 bg-black" />
            
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center space-y-6">
                    {/* Number Circle with enhanced styling */}
                    <div className="relative">
                      <div className={`w-20 h-20 ${index === 0 ? 'bg-[#023373]' : index === 1 ? 'bg-[#F29F05]' : 'bg-[#BF2E21]'} text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center relative z-10 border-2 border-black`}>
                        <span className="text-2xl font-bold">{step.number}</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4 max-w-sm">
                      <h3 className="text-xl lg:text-2xl font-semibold">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">{step.description}</p>
                    </div>
                    
                    {/* Mobile connector arrow */}
                    {index < steps.length - 1 && (
                      <div className="md:hidden flex justify-center mt-8 mb-4">
                        <div className="w-8 h-8 bg-gray-100 flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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