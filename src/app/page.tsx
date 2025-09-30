import type { Metadata } from "next";
import App from "./components/App";


export const metadata: Metadata = {
  title: "IntakeFlow — Transform Project Intake with AI | Beta Access",
  description:
    "Join the beta for AI-powered project intake that adapts, documents, and delivers. Transform scattered emails into structured briefs, automated prioritization, and Jira-ready epics.",
  openGraph: {
    title: "IntakeFlow — Transform Project Intake with AI | Beta Access",
    description:
      "Join the beta for AI-powered project intake that adapts, documents, and delivers. Transform scattered emails into structured briefs.",
    url: "https://intakeflow.ai",
    images: [
      {
        url: "/og-hero.png",
        width: 1200,
        height: 630,
        alt: "IntakeFlow AI project intake dashboard showing adaptive surveys and automated project briefs",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "IntakeFlow",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
              "AI-powered project intake with adaptive surveys, automated project briefs, prioritization, and Jira epic creation for enterprise teams.",
            url: "https://intakeflow.ai",
            screenshot: "https://intakeflow.ai/og-hero.png",
            featureList: [
              "Adaptive AI Intake Surveys",
              "Auto-Generated Project Briefs", 
              "Pre-Prioritization & Impact Tracking",
              "AI Work Item Generation",
              "Jira Integration",
              "Enterprise-Ready Security"
            ],
            applicationSubCategory: "Project Management",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              category: "Beta Access",
              description: "Free beta access with early adopter benefits"
            },
            publisher: {
              "@type": "Organization",
              name: "IntakeFlow",
              url: "https://intakeflow.ai",
              logo: "https://intakeflow.ai/logo.png"
            },
            audience: {
              "@type": "Audience",
              audienceType: "Enterprise teams in construction, utilities, healthcare, and manufacturing"
            },
            usageInfo: "Perfect for non-tech enterprises managing project requests and work intake"
          }),
        }}
      />
      
      <App />
    </>
  );
}