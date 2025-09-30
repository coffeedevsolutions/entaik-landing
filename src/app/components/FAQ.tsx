import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "./ui/accordion";
  
  const faqs = [
    {
      question: "How is IntakeAI different from static project intake forms?",
      answer:
        "Unlike static forms that ask the same questions every time, IntakeAI uses adaptive AI surveys that change based on responses. This ensures complete project requirements are captured on the first submission—eliminating endless follow-up emails, meetings, and missed details."
    },
    {
      question: "Can we use our own templates and prioritization models?",
      answer:
        "Yes. IntakeAI supports fully customizable intake templates and all major prioritization frameworks including RICE, WSJF, MoSCoW, or any custom scoring model. You can align the system with your existing processes, terminology, and governance standards."
    },
    {
      question: "How does IntakeAI create work items for Jira or other tools?",
      answer:
        "Our AI analyzes each project brief and automatically generates structured epics, user stories, and tasks with descriptions, acceptance criteria, and effort estimates. These are formatted according to your team’s standards and pushed directly into Jira or your backlog tool of choice."
    },
    {
      question: "Does IntakeAI integrate with Jira, Azure DevOps, or other project tools?",
      answer:
        "Yes. IntakeAI has native Jira integration (supporting both Jira Cloud and Data Center) that pushes generated work items directly with proper formatting, fields, and labels. Support for Azure DevOps, Trello, and additional project management platforms is on our roadmap."
    },
    {
      question: "Is IntakeAI easy for non-technical requestors to use?",
      answer:
        "Absolutely. IntakeAI was designed for non-technical stakeholders in industries like construction, utilities, and healthcare. The conversational AI interface uses plain language and requires no knowledge of Jira, agile frameworks, or project management terminology."
    },
    {
      question: "How secure is the data collected through IntakeAI?",
      answer:
        "Security is a priority. IntakeAI uses HTTPS encryption for all requests and stores data according to enterprise security standards. We also provide options for data retention policies and compliance reporting to meet industry regulations."
    },
    {
      question: "What measurable outcomes can we expect?",
      answer:
        "Teams using IntakeAI typically see fewer follow-up meetings, faster documentation turnaround, and clearer visibility into project intake pipelines. This leads to improved prioritization, fewer lost requests, and better alignment across stakeholders."
    },
    {
      question: "How does pricing work for IntakeAI?",
      answer:
        "During the beta, participants receive significant discounts. Pricing will be based on the number of intake requests processed per month, with flexible tiers and volume discounts for enterprise customers."
    },
    {
      question: "What industries benefit most from IntakeAI?",
      answer:
        "IntakeAI is ideal for non-tech enterprises with growing IT and analytics teams. Industries like construction, utilities, healthcare, manufacturing, insurance, and government use it to standardize project intake, improve compliance, and accelerate delivery."
    }
  ];
  
  
  export function FAQ() {
    return (
      <section id="faq" className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about IntakeAI
            </p>
          </div>
  
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    );
  }