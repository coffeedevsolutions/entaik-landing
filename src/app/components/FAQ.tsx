import Link from "next/link";
import Script from "next/script";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "./ui/accordion";
  
  const faqs = [
    {
      question: "How is Uptaik different from static project intake forms and traditional project intake tools?",
      answer:
        "Uptaik is an AI project intake platform that replaces static project intake forms with adaptive, conversational surveys. Unlike manual or static forms that ask the same questions every time, Uptaik dynamically changes questions based on previous responses to capture complete project requirements the first time—eliminating follow-up emails, meetings, and missed details."
    },
    {
      question: "Can we use our own intake templates and prioritization frameworks (RICE, WSJF, MoSCoW) in Uptaik?",
      answer:
        "Yes. Uptaik supports fully customizable intake templates and major prioritization frameworks including RICE, WSJF, and MoSCoW. The system can also handle any custom scoring model, letting you align the intake process with your existing governance standards, terminology, and approval workflows."
    },
    {
      question: "How does Uptaik create Jira epics, user stories, and tasks (and other backlog items) automatically?",
      answer:
        "Uptaik uses AI-driven analysis to convert each completed project brief into structured Jira epics, user stories, and tasks. Each work item includes clear descriptions, acceptance criteria, and effort estimates formatted to your team's standards before being pushed directly into Jira or your preferred backlog tool."
    },
    {
      question: "What project management integrations does Uptaik support (Jira Cloud/Data Center, Azure DevOps, Trello)?",
      answer:
        "Uptaik integrates natively with project management tools to automate work creation. It currently supports Jira Cloud and Jira Data Center with direct push capabilities for epics and stories, while Azure DevOps, Trello, and additional platforms are on our roadmap for future releases."
    },
    {
      question: "Is Uptaik easy for non-technical stakeholders (construction, utilities, healthcare) to use?",
      answer:
        "Absolutely. Uptaik is designed for non-technical users in industries such as construction, utilities, healthcare, and manufacturing. The conversational AI interface uses clear, plain language and requires no familiarity with Jira, agile frameworks, or project management terms—making the intake process accessible to anyone."
    },
    {
      question: "What security and compliance standards does Uptaik follow for intake data?",
      answer:
        "Security and compliance are core to Uptaik's design. All intake data is encrypted in transit and at rest, stored using enterprise-grade security standards, and processed under strict data-retention and compliance policies. We also support configurable retention settings and reporting to meet industry and organizational regulations."
    },
    {
      question: "What business outcomes can we expect—fewer meetings, faster requirements gathering, clearer intake pipeline?",
      answer:
        "Organizations using Uptaik's AI project intake system typically experience faster project documentation, fewer follow-up meetings, and clearer visibility into intake pipelines. This results in improved prioritization accuracy, reduced request loss, and better alignment between stakeholders and delivery teams."
    },
    {
      question: "How does Uptaik pricing work (beta discounts, per-intake request tiers, enterprise volume pricing)?",
      answer:
        "During the beta period, Uptaik offers significant discounts to early participants with free access to Professional tier features. Future pricing will be usage-based, determined by the number of intake requests processed per month, with flexible tiers and volume discounts tailored for enterprise environments."
    },
    {
      question: "Which industries benefit most from an AI project intake platform (construction, utilities, healthcare, manufacturing, insurance, government)?",
      answer:
        "Uptaik delivers the greatest value to non-technical enterprises with growing IT, analytics, or operations teams. Industries such as construction, utilities, healthcare, manufacturing, insurance, and government use it to standardize project intake, ensure compliance, and accelerate digital transformation initiatives."
    },
    {
      question: "Does Uptaik support adaptive intake surveys that reduce survey fatigue?",
      answer:
        "Yes. Uptaik's adaptive intake surveys use smart completion logic to detect when sufficient information has been gathered, ending early when possible. This reduces survey fatigue, keeps respondents engaged, and ensures high-quality project data without unnecessary questions."
    },
    {
      question: "Can Uptaik map briefs to RICE/WSJF/MoSCoW for prioritization automatically?",
      answer:
        "Uptaik analyzes each completed intake brief and maps data points directly into prioritization models such as RICE, WSJF, or MoSCoW. This helps teams move seamlessly from intake to prioritization without additional manual scoring or spreadsheets."
    },
    {
      question: "How does Uptaik handle governance, approvals, and intake process flow?",
      answer:
        "Uptaik includes built-in governance features to streamline review and approval workflows. Intake submissions can be routed to department leads or PMOs for review, ensuring each request aligns with strategic goals and compliance standards before work items are created."
    }
  ];
  
  
  export function FAQ() {
    // Generate FAQPage JSON-LD structured data
    const faqJsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    };

    return (
      <>
        {/* FAQPage Structured Data */}
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        <section id="faq" className="py-20 lg:py-32 bg-muted/30 font-[family-name:var(--font-suse-mono)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about Uptaik
              </p>
            </div>
    
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  id={`faq-${index}`}
                  className="bg-background border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="text-base lg:text-lg font-medium">{faq.question}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {/* FAQ 0: Uptaik vs static forms */}
                    {index === 0 && (
                      <p>
                        Uptaik is an <Link href="/features/ai-survey-platform" className="text-blue-600 hover:text-blue-700 underline">AI project intake platform</Link> that replaces static project intake forms with adaptive, conversational surveys. Unlike manual or static forms that ask the same questions every time, Uptaik dynamically changes questions based on previous responses to capture complete project requirements the first time—eliminating follow-up emails, meetings, and missed details.
                      </p>
                    )}
                    
                    {/* FAQ 1: Prioritization frameworks */}
                    {index === 1 && (
                      <p>
                        Yes. Uptaik supports fully customizable intake templates and major <Link href="/features/analytics-intelligence" className="text-blue-600 hover:text-blue-700 underline">prioritization frameworks</Link> including <Link href="/blog/prioritization-frameworks" className="text-blue-600 hover:text-blue-700 underline">RICE, WSJF, and MoSCoW</Link>. The system can also handle any custom scoring model, letting you align the intake process with your existing governance standards, terminology, and approval workflows.
                      </p>
                    )}
                    
                    {/* FAQ 2: Jira integration */}
                    {index === 2 && (
                      <p>
                        Uptaik uses AI-driven analysis to convert each completed project brief into structured <Link href="/features/enterprise-integrations" className="text-blue-600 hover:text-blue-700 underline">Jira epics, user stories, and tasks</Link>. Each work item includes clear descriptions, acceptance criteria, and effort estimates formatted to your team&apos;s standards before being pushed directly into <Link href="/blog/jira-automation" className="text-blue-600 hover:text-blue-700 underline">Jira</Link> or your preferred backlog tool.
                      </p>
                    )}
                    
                    {/* FAQ 3: PM integrations */}
                    {index === 3 && (
                      <p>
                        Uptaik integrates natively with <Link href="/features/enterprise-integrations" className="text-blue-600 hover:text-blue-700 underline">project management tools</Link> to automate work creation. It currently supports Jira Cloud and Jira Data Center with direct push capabilities for epics and stories, while Azure DevOps, Trello, and additional platforms are on our roadmap for future releases.
                      </p>
                    )}
                    
                    {/* FAQ 4: Non-technical users */}
                    {index === 4 && (
                      <p>
                        Absolutely. Uptaik is designed for non-technical users in industries such as construction, utilities, healthcare, and manufacturing. The conversational <Link href="/features/ai-survey-platform" className="text-blue-600 hover:text-blue-700 underline">AI interface</Link> uses clear, plain language and requires no familiarity with Jira, agile frameworks, or project management terms—making the intake process accessible to anyone.
                      </p>
                    )}
                    
                    {/* FAQ 5: Security */}
                    {index === 5 && (
                      <p>
                        <Link href="/features/enterprise-integrations" className="text-blue-600 hover:text-blue-700 underline">Security and compliance</Link> are core to Uptaik&apos;s design. All intake data is encrypted in transit and at rest, stored using enterprise-grade security standards, and processed under strict data-retention and compliance policies. We also support configurable retention settings and reporting to meet industry and organizational regulations.
                      </p>
                    )}
                    
                    {/* FAQ 6: Business outcomes */}
                    {index === 6 && (
                      <p>
                        Organizations using Uptaik&apos;s AI project intake system typically experience faster <Link href="/features/automated-documentation" className="text-blue-600 hover:text-blue-700 underline">project documentation</Link>, fewer follow-up meetings, and clearer visibility into intake pipelines. This results in improved <Link href="/features/analytics-intelligence" className="text-blue-600 hover:text-blue-700 underline">prioritization accuracy</Link>, reduced request loss, and better alignment between stakeholders and delivery teams.
                      </p>
                    )}
                    
                    {/* FAQ 7: Pricing */}
                    {index === 7 && (
                      <p>
                        During the beta period, Uptaik offers significant discounts to early participants with free access to Professional tier features. Future <Link href="/pricing" className="text-blue-600 hover:text-blue-700 underline">pricing</Link> will be usage-based, determined by the number of intake requests processed per month, with flexible tiers and volume discounts tailored for enterprise environments.
                      </p>
                    )}
                    
                    {/* FAQ 8: Industries */}
                    {index === 8 && (
                      <p>
                        Uptaik delivers the greatest value to non-technical enterprises with growing IT, analytics, or operations teams. Industries such as <Link href="/workflows?category=Healthcare" className="text-blue-600 hover:text-blue-700 underline">construction, utilities, healthcare</Link>, manufacturing, insurance, and government use it to standardize project intake, ensure compliance, and accelerate digital transformation initiatives.
                      </p>
                    )}
                    
                    {/* FAQ 9: Survey fatigue */}
                    {index === 9 && (
                      <p>
                        Yes. Uptaik&apos;s <Link href="/features/ai-survey-platform" className="text-blue-600 hover:text-blue-700 underline">adaptive intake surveys</Link> use smart completion logic to detect when sufficient information has been gathered, ending early when possible. This reduces survey fatigue, keeps respondents engaged, and ensures high-quality project data without unnecessary questions.
                      </p>
                    )}
                    
                    {/* FAQ 10: Prioritization mapping */}
                    {index === 10 && (
                      <p>
                        Uptaik analyzes each completed intake brief and maps data points directly into <Link href="/blog/prioritization-frameworks" className="text-blue-600 hover:text-blue-700 underline">prioritization models</Link> such as RICE, WSJF, or MoSCoW. This helps teams move seamlessly from intake to prioritization without additional manual scoring or spreadsheets.
                      </p>
                    )}
                    
                    {/* FAQ 11: Governance */}
                    {index === 11 && (
                      <p>
                        Uptaik includes built-in <Link href="/features/enterprise-integrations" className="text-blue-600 hover:text-blue-700 underline">governance features</Link> to streamline review and approval workflows. Intake submissions can be routed to department leads or PMOs for review, ensuring each request aligns with strategic goals and compliance standards before work items are created.
                      </p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </>
    );
  }