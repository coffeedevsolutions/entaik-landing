import { 
  FileText, 
  Bot, 
  MessageSquare, 
  Activity, 
  FileCheck, 
  Users,
  Zap,
  Clock,
  Target,
  TrendingUp,
  AlertCircle,
  Settings,
  BarChart,
  Layers,
  Sliders,
  Eye,
  Send,
  Flag,
  Link,
  Tags,
  Smile,
  ShoppingCart,
  CircleCheck,
  Tag,
  FilePlus,
  Laptop,
  Truck,
  RefreshCcw,
  Coins,
  CheckSquare,
  Car,
  Bell,
  Image
} from 'lucide-react';
import { WorkflowStep } from './workflow-step-card';
import { Benefit } from './workflow-benefits';

export interface WorkflowConfig {
  id: string;
  title: string;
  description: string;
  accentColor: string;
  steps: WorkflowStep[];
  benefits: Benefit[];
}

export const workflowConfigs: Record<string, WorkflowConfig> = {
'technical-request': {
  id: 'technical-request',
  title: "Technical Request Intake Workflow",
  description:
    "Streamline internal IT, data, and engineering requests with an intelligent, adaptive intake process. Powered by an Adaptive Question Engine (GPT-4o-mini), Semantic Deduplication (vector embeddings), Fatigue Detection, and Smart Completion—then auto-generates briefs and work items in your PM tools.",
  accentColor: "from-blue-500 to-purple-600",
  steps: [
    {
      number: 1,
      title: "Request Initiation",
      description:
        "A business stakeholder opens a shareable link or embedded widget to start a new technical request. The request type (e.g., dashboard, automation, integration, access request) is auto-detected from the first prompt, and metadata (department, urgency, due date) is captured via quick chips.",
      example:
        "User types: “Need a cross-dept compliance dashboard by end of Q2.” → Platform auto-tags: {type: 'Analytics/Dashboard', urgency: 'High', targetDate: 'Q2'}",
      icon: FileText,
      color: "from-blue-400 to-blue-600"
    },
    {
      number: 2,
      title: "AI Intake Survey Begins",
      description:
        "The Adaptive Question Engine tailors follow-ups based on prior answers and conversation history. Inline validations (numbers, dates, URLs) ensure clean inputs; attachments (CSV, screenshots) are ingested for context.",
      example:
        "AI: “Which processes are most affected?” · “Roughly how many users are impacted weekly?” · “What outcomes or KPIs define success?” (e.g., ‘on-time submissions ↑ to 95%’)",
      icon: Bot,
      color: "from-blue-500 to-indigo-600"
    },
    {
      number: 3,
      title: "Adaptive Deep Dives",
      description:
        "If the request is vague, targeted probes expand scope/context (systems, constraints, data sources). If details are already present (in text or files), Semantic Deduplication (embeddings) suppresses redundant questions. Conditional branches shift to the relevant path (e.g., if integrations are mentioned, branch to auth, API limits, and data refresh cadence).",
      example:
        "AI: “What tasks should this automate?” · “Which systems must it connect to (e.g., Workday, SharePoint, Procore, Salesforce)?” · “Data freshness requirements (real-time, hourly, daily)?”",
      icon: MessageSquare,
      color: "from-indigo-500 to-purple-600"
    },
    {
      number: 4,
      title: "Fatigue Detection & Smart Completion",
      description:
        "The platform monitors response length and latency to detect fatigue. When confidence in coverage passes your threshold, it auto-summarizes requirements for confirmation and ends the intake. Users can ‘Add detail’ or ‘Confirm & finish.’",
      example:
        "AI summary: “You need a weekly compliance dashboard for ~15 users, pulling from SharePoint + HRIS, success = on-time reports ≥95% and exception rate ≤3%—is this accurate?”",
      icon: Activity,
      color: "from-purple-500 to-purple-700"
    },
    {
      number: 5,
      title: "Automated Output",
      description:
        "Generates a structured project brief (problem, users, KPIs, scope, non-goals, risks, data sources, dependencies). Then it converts the brief into an Epic with user stories and tasks (with acceptance criteria and effort placeholders) using your template pack. Pushes items via API/webhooks to Jira, Asana, Trello, or ServiceNow and links back to the signed brief.",
      example:
        "Output: Epic “Compliance Dashboard v1” → Stories: ‘Define data model,’ ‘Ingest HRIS + SharePoint,’ ‘Build KPI tiles,’ ‘Role-based access,’ each with acceptance criteria. Auto-posted to Jira with labels and components.",
      icon: FileCheck,
      color: "from-purple-600 to-violet-700"
    },
    {
      number: 6,
      title: "Handoff to Technical Teams",
      description:
        "Tech teams receive a complete intake package with artifacts: formatted brief, requirements matrix, RACI snapshot, and initial timeline assumptions. Stakeholders get a read-only link to track status in the PM tool. SLA cues and priority tags are applied based on business impact and urgency.",
      example:
        "Engineering views Epic + Stories in Jira with linked brief; requester sees status updates (Backlog → In-Refinement → In-Progress) without extra emails.",
      icon: Users,
      color: "from-violet-600 to-purple-800"
    }
  ],
  benefits: [
    { text: "Eliminates vague, incomplete requests", icon: Target },
    { text: "Speeds intake → project plan in minutes", icon: Zap },
    { text: "Consistent briefs and work items every time", icon: FileCheck },
    { text: "Less back-and-forth; more time building", icon: Clock }
  ]
},
'feature-request': {
  id: 'feature-request',
  title: "Product Feature Request Workflow",
  description:
    "Capture, qualify, and prioritize feature requests from customers and internal teams with an adaptive intake flow that produces PRD-ready briefs and auto-creates backlog items with scoring.",
  accentColor: "from-fuchsia-500 to-violet-600",
  steps: [
    {
      number: 1,
      title: "Request Capture",
      description:
        "Stakeholders submit a feature idea via shareable link, in-app widget, or CRM integration. The platform auto-detects the request type (net-new feature, enhancement, bug/UX papercut) and tags metadata (customer, account tier, product area).",
      example:
        "User: “Add SSO with Okta for enterprise tenants.” → Auto-tags: {type:'Feature', productArea:'Auth', accountTier:'Enterprise', source:'CSM'}",
      icon: FileText,
      color: "from-fuchsia-400 to-fuchsia-600"
    },
    {
      number: 2,
      title: "AI Intake Survey Begins",
      description:
        "Adaptive Question Engine tailors prompts to clarify the problem, desired outcome, and impacted personas. Inline validations ensure clean inputs; file uploads (screenshots, CSVs, logs) enrich context.",
      example:
        "AI: “What job-to-be-done does this feature unlock?” · “Which user roles need it?” · “How will you measure success (e.g., SSO adoption %, login failures ↓)?”",
      icon: Bot,
      color: "from-fuchsia-500 to-purple-500"
    },
    {
      number: 3,
      title: "De-duplication & Context Merge",
      description:
        "Semantic Deduplication checks embeddings against existing ideas to prevent duplicates. If a match is found, the request is merged, vote counts are aggregated, and prior evidence (tickets, conversations, NPS comments) is surfaced inline.",
      example:
        "AI: “Similar request found: ‘Okta SSO for enterprise (FR-1284).’ I’ll merge this and attribute it to Acme Corp + 3 other accounts.”",
      icon: MessageSquare,
      color: "from-purple-500 to-violet-500"
    },
    {
      number: 4,
      title: "Evidence & Impact Sizing",
      description:
        "The system collects impact signals (affected accounts, ARR at risk/opportunity, support volume, time criticality). It proposes draft RICE/WSJF scores using captured inputs and lets PMs adjust thresholds.",
      example:
        "Draft scoring → RICE: Reach=1.8k users, Impact=High, Confidence=0.75, Effort=8 • WSJF: (Cost of Delay / Effort) auto-estimated; PM can override.",
      icon: BarChart,
      color: "from-violet-500 to-violet-700"
    },
    {
      number: 5,
      title: "Fatigue Detection & Smart Completion",
      description:
        "If responses shorten or stall, the platform summarizes what it has and requests confirmation. Once coverage threshold is met, the intake ends without unnecessary questions.",
      example:
        "AI summary: “Need Okta SSO for enterprise admins; success = 80% SSO adoption in 60 days, support tickets ↓ by 50%. Data sources: CS notes + Zendesk tags ‘login’.”",
      icon: Activity,
      color: "from-violet-600 to-purple-600"
    },
    {
      number: 6,
      title: "Automated PRD Stub & Backlog Items",
      description:
        "Generates a lightweight PRD/1-pager (problem, users, JTBD, outcomes, non-goals, dependencies, risks). Converts into an Epic with user stories and acceptance criteria using your templates, then pushes to Jira/Linear/Asana with labels, components, and draft estimates.",
      example:
        "Epic: “Okta SSO (Enterprise)” → Stories: ‘OIDC config’, ‘Just-in-time user provisioning’, ‘Group mapping’, ‘Admin toggle + docs’—all with AC and links to evidence.",
      icon: FileCheck,
      color: "from-purple-600 to-violet-700"
    },
    {
      number: 7,
      title: "Review, Prioritize, and Track",
      description:
        "PMs review auto-scored requests in a prioritized queue, adjust scores, and slot into roadmaps. Requesters see status without back-and-forth (Received → Under Review → Planned → In Progress → Released).",
      example:
        "Backlog view sorted by WSJF; Okta SSO moves to ‘Planned Q4’. Requesters from merged threads get notified and can follow the Epic’s status link.",
      icon: Users,
      color: "from-violet-700 to-purple-700"
    }
  ],
  benefits: [
    { text: "Consolidates duplicates and aggregates demand signals", icon: Layers },
    { text: "Produces PRD-ready briefs and templated backlog items", icon: FileCheck },
    { text: "Auto-scores with RICE/WSJF for faster prioritization", icon: Sliders },
    { text: "Gives stakeholders transparent status without email chains", icon: Eye }
  ]
},
'incident-response': {
  id: 'incident-response',
  title: "Incident Response Workflow",
  description:
    "Rapidly triage and resolve incidents with automated severity scoring, intelligent routing, and real-time comms. Powered by an Adaptive Question Engine, semantic similarity (to find past incidents/runbooks), telemetry ingestion, and bidirectional integrations (PagerDuty/Opsgenie, Slack/MS Teams, Datadog/CloudWatch, GitHub, LaunchDarkly, Jira/ServiceNow).",
  accentColor: "from-red-500 to-orange-600",
  steps: [
    {
      number: 1,
      title: "Incident Reported",
      description:
        "Incidents enter via portal, chatbot (/incident), email-to-intake, or monitoring webhooks. The platform normalizes payloads (OpenTelemetry-compatible), extracts signals (service, region, error rate), and auto-tags metadata.",
      example:
        "Alert from Datadog: 'Checkout error rate > 15% (us-east-1)' → Auto-tags: {service:'payments', region:'us-east-1', signal:'5xx-spike', source:'monitoring'}",
      icon: AlertCircle,
      color: "from-red-400 to-red-600"
    },
    {
      number: 2,
      title: "Severity Assessment",
      description:
        "AI scores severity using impact heuristics (users affected, ARR at risk, SLO breaches, compliance scope) plus historical patterns. If human-reported, the Adaptive Question Engine asks only the minimum clarifiers to finalize Sev.",
      example:
        "Severity: Critical (Sev1) | Users: 12,400 active sessions | SLO: 4xx/5xx breach | Revenue Impact: High → Auto-locks change window and enables status page draft.",
      icon: Activity,
      color: "from-red-500 to-orange-500"
    },
    {
      number: 3,
      title: "Intelligent Routing",
      description:
        "Routes to the right on-call via ownership graph (service ↔ team map) and escalation policy. Creates a war room in Slack/Teams, invites responders, and pins runbooks. If MTTA exceeds threshold, auto-escalates.",
      example:
        "Assigned: Platform + Payments squads | PagerDuty page sent | Slack channel #inc-sev1-payments created with @oncall, @incident-commander, @sre.",
      icon: Zap,
      color: "from-orange-500 to-amber-500"
    },
    {
      number: 4,
      title: "Context Gathering",
      description:
        "Aggregates logs/metrics/traces, recent deploys (GitHub/ArgoCD), feature flag changes (LaunchDarkly), and infra events. Semantic search surfaces similar past incidents and the most relevant runbook steps.",
      example:
        "Context pack: last 3 deploys (sha:ab12.., cd34..), error logs with correlation IDs, flag toggles (checkout_v2=enabled 10:14 UTC). Similar incident: 'SEV1-2024-11-03 payments 5xx spike' with rollback playbook.",
      icon: Settings,
      color: "from-orange-600 to-yellow-500"
    },
    {
      number: 5,
      title: "Resolution Execution & Tracking",
      description:
        "One-click actions: canary pause, feature-flag rollback, deploy rollback, or traffic shift. The platform timestamps all actions, posts live updates to Slack/Teams, updates Jira/ServiceNow ticket fields, and (if enabled) pushes status page notes. SLA timers track MTTA/MTTR automatically.",
      example:
        "Action: Rolled back to release 2.18.3 and disabled 'checkout_v2'. Status: Mitigated | ETA full recovery: 30 min | Customers notified on status page.",
      icon: Clock,
      color: "from-amber-500 to-orange-600"
    },
    {
      number: 6,
      title: "Post-Incident Review",
      description:
        "Generates a structured PIR doc: timeline, root-cause narrative (5 Whys + Fishbone), customer impact, SLO/SLA deltas, and action items. Assigns owners/due dates in Jira/Linear and creates follow-up tests/alerts.",
      example:
        "Root cause: config mismatch in payments gateway client. Actions: add schema validation in CI, expand canary scope, create synthetic 'auth+capture' check. Due: 14 days; auto-reminders until completed.",
      icon: FileCheck,
      color: "from-orange-600 to-amber-600"
    }
  ],
  benefits: [
    { text: "Faster response with AI-driven severity and auto-escalation", icon: Zap },
    { text: "Reduced MTTR via instant context (logs, deploys, flags) & one-click rollbacks", icon: Clock },
    { text: "Single source of truth with complete, time-stamped audit trail", icon: FileCheck },
    { text: "Continuous improvement through automated, action-oriented post-mortems", icon: TrendingUp }
  ]
},
'healthcare-patient-experience': {
  id: 'healthcare-patient-experience',
  title: "Healthcare – Patient Experience Survey Workflow",
  description:
    "Capture timely, nuanced patient feedback after visits with adaptive questions, fatigue-aware completion, and auto-routing of insights to Quality Improvement.",
  accentColor: "from-teal-500 to-emerald-600",
  steps: [
    {
      number: 1,
      title: "Trigger & Delivery",
      description:
        "After discharge or a clinic visit, the platform sends a secure, one-tap survey link via SMS/email/portal. Links are visit-scoped and expire per policy.",
      example:
        "Patient receives a text: “How was your visit at North Clinic today? Tap to share quick feedback.”",
      icon: Send,
      color: "from-teal-400 to-teal-600"
    },
    {
      number: 2,
      title: "Adaptive Questions",
      description:
        "The AI engine tailors follow-ups based on sentiment and prior answers, focusing only on relevant dimensions (access, wait time, provider communication, facility).",
      example:
        "Patient: “The wait was long.” → AI: “About how long did you wait before seeing your provider?”",
      icon: Bot,
      color: "from-teal-500 to-cyan-500"
    },
    {
      number: 3,
      title: "Smart Skips & High Scores",
      description:
        "If the patient rates the encounter 5/5 and indicates no issues, the system skips redundant sections, asking only for optional highlights.",
      example:
        "Rating 5/5 → AI: “Great to hear! What was most helpful about your visit?” (then completes)",
      icon: CircleCheck,
      color: "from-cyan-500 to-emerald-500"
    },
    {
      number: 4,
      title: "Fatigue Detection & Smart Completion",
      description:
        "Monitors response length/latency to detect fatigue. Once coverage thresholds are met, the survey ends and confirms a concise summary.",
      example:
        "AI: “Thanks! We captured your feedback on wait time and provider communication. Anything else to add?”",
      icon: Activity,
      color: "from-emerald-500 to-green-500"
    },
    {
      number: 5,
      title: "Insight Extraction & Routing",
      description:
        "Extracts structured insights (e.g., ‘Wait time > 30 min’), tags service line/location, and routes issues to Quality Improvement with severity hints.",
      example:
        "Flag created: ‘Wait Time Exceeded 30m’ → Routed to: Quality Improvement (Location: North Clinic, Tuesday PM block)",
      icon: Flag,
      color: "from-green-500 to-emerald-600"
    },
    {
      number: 6,
      title: "Reporting & Trends",
      description:
        "Aggregates feedback into dashboards by provider, service, location, and time window; highlights outliers and trending issues.",
      example:
        "Monthly report: ‘Provider communication 4.7/5; Wait times above threshold on Tuesdays 2–4pm; Action recommended: staffing review.’",
      icon: BarChart,
      color: "from-emerald-600 to-teal-600"
    }
  ],
  benefits: [
    { text: "Higher completion rates with adaptive, shorter surveys", icon: Zap },
    { text: "Nuanced feedback via targeted follow-ups", icon: MessageSquare },
    { text: "Automatic flags (e.g., wait time) routed to the right team", icon: Flag },
    { text: "Less fatigue and faster insights for Quality Improvement", icon: Clock }
  ]
},

'legal-client-onboarding': {
  id: 'legal-client-onboarding',
  title: "Legal & Professional Services – Client Onboarding Workflow",
  description:
    "Accelerate client intake with adaptive matter-specific questions, document-aware deduplication, and an auto-generated engagement summary for attorney review.",
  accentColor: "from-indigo-500 to-violet-600",
  steps: [
    {
      number: 1,
      title: "New Client Intake Link",
      description:
        "Firm shares a secure onboarding link (email/site/QR). Client identity is verified; matter metadata auto-captured (practice area, urgency).",
      example:
        "Client opens link: ‘Start your onboarding for a new legal matter.’",
      icon: Link,
      color: "from-indigo-400 to-indigo-600"
    },
    {
      number: 2,
      title: "Matter Type Classification",
      description:
        "AI classifies the matter based on the client’s first description and selects the correct question flow.",
      example:
        "Client: “We have a contract dispute with a vendor.” → Auto-selects ‘Dispute’ flow.",
      icon: Tags,
      color: "from-indigo-500 to-purple-500"
    },
    {
      number: 3,
      title: "Adaptive Questioning",
      description:
        "Contract dispute → asks dispute-specific questions (dates, counterparties, jurisdiction, dollar amounts). IP filing → pivots to trademark/patent prompts.",
      example:
        "AI: “Who is the counterparty? What’s the dispute amount? Any deadlines or scheduled hearings?”",
      icon: Bot,
      color: "from-purple-500 to-violet-500"
    },
    {
      number: 4,
      title: "Semantic Deduplication",
      description:
        "If the client uploads documents (contracts, correspondence), the platform parses and suppresses redundant questions while extracting key fields.",
      example:
        "Uploaded ‘Master Services Agreement.pdf’ → auto-fills counterparty and effective date; skips asking again.",
      icon: FileText,
      color: "from-violet-500 to-purple-600"
    },
    {
      number: 5,
      title: "Engagement Summary Draft",
      description:
        "Generates a structured summary: parties, facts, goals, constraints, conflicts check data, and preliminary strategy options.",
      example:
        "Output: ‘Engagement Summary – Vendor Contract Dispute’ with timeline and requested remedy.",
      icon: FileCheck,
      color: "from-violet-600 to-purple-700"
    },
    {
      number: 6,
      title: "Attorney Review & Handoff",
      description:
        "Attorney receives the summary with linked docs and suggested next steps. Client portal shows status without back-and-forth emails.",
      example:
        "Attorney marks ‘Ready for consultation’; client sees confirmed appointment and required next docs.",
      icon: Users,
      color: "from-purple-600 to-violet-700"
    }
  ],
  benefits: [
    { text: "Less admin back-and-forth via adaptive, matter-specific intake", icon: Sliders },
    { text: "Document-aware deduplication saves time and avoids re-asking", icon: Layers },
    { text: "Auto-generated engagement summaries accelerate attorney prep", icon: FileCheck },
    { text: "Smoother onboarding and clearer client expectations", icon: Smile }
  ]
},

'retail-returns-feedback': {
  id: 'retail-returns-feedback',
  title: "Retail & E-Commerce – Product Feedback & Returns Workflow",
  description:
    "Guide shoppers through fast, intelligent returns with adaptive branching, evidence capture, and structured resolution paths that reduce unnecessary refunds.",
  accentColor: "from-pink-500 to-rose-600",
  steps: [
    {
      number: 1,
      title: "Customer Trigger",
      description:
        "Customer starts a return from order history, email link, or chat. Order and item details are prefilled.",
      example:
        "“Start a return for Order #12487 – Running Shoes, Size 10.”",
      icon: ShoppingCart,
      color: "from-pink-400 to-pink-600"
    },
    {
      number: 2,
      title: "Adaptive Reason Capture",
      description:
        "AI dialog narrows the reason (defective, wrong size, not as expected, wrong item, late delivery).",
      example:
        "AI: “Was the product defective, wrong size, or not what you expected?”",
      icon: Bot,
      color: "from-pink-500 to-rose-500"
    },
    {
      number: 3,
      title: "Targeted Follow-ups",
      description:
        "Defective → request photo/video and defect description. Size issue → suggest exchange with correct sizing guide. Not-as-expected → capture mismatch details.",
      example:
        "Size issue → AI: “Would you like an exchange instead of a refund? Which size would you prefer?”",
      icon: Image,
      color: "from-rose-500 to-pink-600"
    },
    {
      number: 4,
      title: "Smart Completion & Policy Fit",
      description:
        "Ends intake once a valid resolution path is identified and checks return eligibility window and policy rules automatically.",
      example:
        "“Eligible for free exchange. We’ll generate a prepaid label and ship the new size once scanned.”",
      icon: CircleCheck,
      color: "from-pink-600 to-rose-600"
    },
    {
      number: 5,
      title: "Structured Record & Routing",
      description:
        "Creates a standardized return record with reason codes and tags systemic issues across SKUs.",
      example:
        "Analytics: “30% of returns on SKU-441 due to sizing → Recommend size chart update.”",
      icon: Tag,
      color: "from-rose-600 to-pink-700"
    },
    {
      number: 6,
      title: "Logistics & Notifications",
      description:
        "Generates label/RMA, updates OMS/WMS, and sends status notifications. CS tools receive context for faster resolution.",
      example:
        "Email: “Your exchange is on the way. Track it here.” OMS updated; warehouse alerted for inspection.",
      icon: Truck,
      color: "from-pink-600 to-rose-700"
    }
  ],
  benefits: [
    { text: "Improves CX with fast, guided resolutions", icon: Smile },
    { text: "Reduces unnecessary refunds via smart exchanges", icon: RefreshCcw },
    { text: "Standardized data clarifies product issues and trends", icon: BarChart },
    { text: "Lower handling costs through automation and policy checks", icon: Coins }
  ]
},

'education-course-feedback': {
  id: 'education-course-feedback',
  title: "Education – Course Feedback & Program Evaluation Workflow",
  description:
    "Collect richer student feedback with adaptive prompts, fatigue-aware completion, and faculty-ready insights grouped by communication, design, and workload.",
  accentColor: "from-sky-500 to-blue-600",
  steps: [
    {
      number: 1,
      title: "End-of-Term Trigger",
      description:
        "Students receive a secure survey link (LMS, email, SMS). Cohort, course, and instructor metadata prefill.",
      example:
        "“Tell us about your experience in BIO201 with Prof. Nguyen.”",
      icon: Send,
      color: "from-sky-400 to-sky-600"
    },
    {
      number: 2,
      title: "Adaptive Core Questions",
      description:
        "Starts with overall rating; branches into targeted areas depending on rating and comments.",
      example:
        "AI: “How would you rate your instructor?”",
      icon: Bot,
      color: "from-sky-500 to-blue-500"
    },
    {
      number: 3,
      title: "Targeted Probing",
      description:
        "If 3/5, asks about communication, grading, or materials. If 5/5, jumps to highlights and optional suggestions.",
      example:
        "Rating 3/5 → AI: “What could be improved—communication, grading, or materials?”",
      icon: MessageSquare,
      color: "from-blue-500 to-indigo-500"
    },
    {
      number: 4,
      title: "Fatigue Detection & Early Stop",
      description:
        "Detects disengagement and ends once coverage threshold is met; offers a quick summary confirmation.",
      example:
        "AI: “Thanks—captured feedback on grading clarity and workload. Anything else to add?”",
      icon: Activity,
      color: "from-indigo-500 to-blue-600"
    },
    {
      number: 5,
      title: "Insight Grouping",
      description:
        "Auto-categorizes feedback into communication, course design, workload, assessments, and resources for faculty dashboards.",
      example:
        "Dashboard: ‘Workload concerns spiking in Weeks 5–6; materials clarity improved vs. last term.’",
      icon: BarChart,
      color: "from-blue-600 to-sky-600"
    },
    {
      number: 6,
      title: "Faculty Actions",
      description:
        "Surfaces suggested actions (rubric examples, pacing tweaks) and tracks follow-through.",
      example:
        "Recommendations: ‘Clarify grading rubric; add formative quiz in Week 3.’",
      icon: CheckSquare,
      color: "from-sky-600 to-blue-700"
    }
  ],
  benefits: [
    { text: "Higher quality feedback with fewer questions", icon: Zap },
    { text: "Category-level insights that faculty can act on", icon: Layers },
    { text: "Reduced drop-off via fatigue detection", icon: Clock },
    { text: "Trend tracking across terms and instructors", icon: TrendingUp }
  ]
},

'finance-claim-intake': {
  id: 'finance-claim-intake',
  title: "Finance & Insurance – Loan/Claim Intake Workflow",
  description:
    "Accelerate claims and reduce errors with adaptive intake, document-aware deduplication, and pre-populated forms ready for adjusters.",
  accentColor: "from-amber-500 to-yellow-600",
  steps: [
    {
      number: 1,
      title: "Claim Initiation",
      description:
        "Customer starts a claim via portal, mobile, or agent. Policy and identity are verified automatically.",
      example:
        "“Start Homeowners claim for Policy #H-44821.”",
      icon: FilePlus,
      color: "from-amber-400 to-amber-600"
    },
    {
      number: 2,
      title: "Adaptive Intake",
      description:
        "AI narrows the claim type (Auto, Home, Health, Travel) and asks only relevant questions.",
      example:
        "AI: “What type of claim are you submitting?” → Auto",
      icon: Bot,
      color: "from-amber-500 to-yellow-500"
    },
    {
      number: 3,
      title: "Targeted Follow-ups",
      description:
        "Auto → asks accident date/time, location, parties, police report; Home → pivots to damage type, cause, photos, emergency services.",
      example:
        "Auto: “When was the accident?” + “Upload police report or incident #.”",
      icon: Car,
      color: "from-yellow-500 to-amber-600"
    },
    {
      number: 4,
      title: "Semantic Deduplication",
      description:
        "Parses uploaded policies/receipts/photos and avoids re-asking known fields; extracts structured data (VIN, address, coverage limits).",
      example:
        "Policy PDF parsed → coverage limits pre-filled; no duplicate questions.",
      icon: FileText,
      color: "from-amber-600 to-yellow-600"
    },
    {
      number: 5,
      title: "Pre-Populated Claim Package",
      description:
        "Builds a complete claim file with evidence checklist and eligibility checks; hands off to adjuster system.",
      example:
        "Claim file includes incident details, attachments, and fraud-screen flags; exported to Guidewire.",
      icon: FileCheck,
      color: "from-yellow-600 to-amber-700"
    },
    {
      number: 6,
      title: "Status & Communications",
      description:
        "Customer sees status (Received → In Review → Decision). Missing items and deadlines are auto-notified.",
      example:
        "“We need one more photo of roof damage. Reply to this text with a picture.”",
      icon: Bell,
      color: "from-amber-600 to-yellow-700"
    }
  ],
  benefits: [
    { text: "Faster claims with fewer errors", icon: Zap },
    { text: "Document-aware deduplication reduces friction", icon: Layers },
    { text: "Adjuster-ready, structured claim packages", icon: FileCheck },
    { text: "Clear status updates improve satisfaction", icon: Smile }
  ]
},

'internal-it-hr-ticketing': {
  id: 'internal-it-hr-ticketing',
  title: "Technology Companies – Internal IT/HR Ticketing Workflow",
  description:
    "Standardize and speed up employee requests with adaptive questioning, priority routing, and auto-creation of tickets in ServiceNow/Zendesk/Jira.",
  accentColor: "from-gray-500 to-slate-600",
  steps: [
    {
      number: 1,
      title: "Employee Request",
      description:
        "Employee submits a need (hardware, software access, HR letter, account change) via portal or chat.",
      example:
        "“Need a new laptop for data analysis.”",
      icon: Laptop,
      color: "from-gray-400 to-gray-600"
    },
    {
      number: 2,
      title: "Adaptive Survey",
      description:
        "Asks only what’s required: device type/brand, RAM/SSD, must-have software, accessories, and due date.",
      example:
        "AI: “Any brand preference? Which software must be preinstalled?”",
      icon: Bot,
      color: "from-gray-500 to-slate-500"
    },
    {
      number: 3,
      title: "Priority & Routing",
      description:
        "If the user marks ‘urgent,’ the platform applies a ‘priority replacement’ tag and routes to the right queue/SLA.",
      example:
        "Priority: High → Routed to ‘IT-Asset Fulfillment’ with SLA 24h.",
      icon: Zap,
      color: "from-slate-500 to-gray-600"
    },
    {
      number: 4,
      title: "Completion Logic",
      description:
        "Stops once all required fields are captured; suppresses irrelevant prompts (e.g., no software section for badge replacement).",
      example:
        "All mandatory specs captured → intake ends and confirms summary.",
      icon: CircleCheck,
      color: "from-gray-600 to-slate-600"
    },
    {
      number: 5,
      title: "Ticket Creation",
      description:
        "Generates a standardized ticket with fields mapped to ServiceNow/Zendesk/Jira, including requester, approvals, and dependencies.",
      example:
        "Ticket: ‘Laptop Replacement – 32GB/1TB, Python + Tableau’ with approval request sent to manager.",
      icon: FilePlus,
      color: "from-slate-600 to-gray-700"
    },
    {
      number: 6,
      title: "Status & Handoff",
      description:
        "Requester gets live status updates; IT/HR sees complete context. SLAs, due dates, and next steps are tracked automatically.",
      example:
        "Status: ‘In Procurement’ → ETA: Tomorrow 3pm → Pickup desk: 4th floor.",
      icon: Clock,
      color: "from-gray-600 to-slate-700"
    }
  ],
  benefits: [
    { text: "Fewer follow-ups; all required details up front", icon: Target },
    { text: "Faster routing with priority-aware tags and SLAs", icon: Clock },
    { text: "Consistent, standardized tickets in existing tools", icon: FileCheck },
    { text: "Happier employees through clear, timely updates", icon: Smile }
  ]
}
};

