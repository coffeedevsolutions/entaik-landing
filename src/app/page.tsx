import type { Metadata } from "next";
import App from "./components/App";


export const metadata: Metadata = {
  title: "Uptaik — Transform Project Intake with AI | Beta Access",
  description:
    "AI-powered project intake that transforms emails into structured briefs with automated prioritization and Jira integration. Join the beta today.",
  alternates: {
    canonical: "https://www.uptaik.com/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.uptaik.com/",
    siteName: "Uptaik",
    title: "Uptaik — Transform Project Intake with AI | Beta Access",
    description:
      "AI-powered project intake that transforms emails into structured briefs with automated prioritization and Jira integration. Join the beta today.",
    images: [
      {
        url: "https://www.uptaik.com/og-hero.png",
        width: 1200,
        height: 630,
        alt: "Uptaik AI project intake dashboard showing adaptive surveys and automated project briefs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uptaik — Transform Project Intake with AI | Beta Access",
    description:
      "AI-powered project intake that transforms emails into structured briefs with automated prioritization and Jira integration. Join the beta today.",
    images: ["https://www.uptaik.com/og-hero.png"],
    creator: "@uptaik",
  },
  robots: {
    index: true,
    follow: true,
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
            name: "Uptaik",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
              "AI-powered project intake with adaptive surveys, automated project briefs, prioritization, and Jira epic creation for enterprise teams.",
            url: "https://www.uptaik.com",
            screenshot: "https://www.uptaik.com/og-hero.png",
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
              name: "Uptaik",
              url: "https://www.uptaik.com",
              logo: "https://www.uptaik.com/logo.png"
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