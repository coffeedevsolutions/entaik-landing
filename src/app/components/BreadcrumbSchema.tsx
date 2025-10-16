"use client";

import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface BreadcrumbSchemaProps {
  items?: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const pathname = usePathname();
  
  // If items are provided, use them; otherwise auto-generate from pathname
  const breadcrumbItems = items || generateBreadcrumbsFromPath(pathname);
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.item
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Helper function to generate breadcrumbs from pathname
function generateBreadcrumbsFromPath(pathname: string): BreadcrumbItem[] {
  const baseUrl = "https://www.uptaik.com";
  const segments = pathname.split("/").filter(Boolean);
  
  const breadcrumbs: BreadcrumbItem[] = [
    {
      name: "Home",
      item: baseUrl
    }
  ];

  let currentPath = "";
  segments.forEach((segment) => {
    currentPath += `/${segment}`;
    const name = formatSegmentName(segment);
    breadcrumbs.push({
      name,
      item: `${baseUrl}${currentPath}`
    });
  });

  return breadcrumbs;
}

// Helper function to format segment names
function formatSegmentName(segment: string): string {
  // Handle special cases
  const nameMap: Record<string, string> = {
    "ai-survey-platform": "AI Survey Platform",
    "automated-documentation": "Automated Documentation",
    "analytics-intelligence": "Analytics & Intelligence",
    "enterprise-integrations": "Enterprise & Integrations",
    "technical-request": "Technical Request",
    "feature-request": "Feature Request",
    "incident-response": "Incident Response",
    "healthcare-patient-experience": "Healthcare Patient Experience",
    "legal-client-onboarding": "Legal Client Onboarding",
    "retail-returns-feedback": "Retail Returns & Feedback",
    "education-course-feedback": "Education Course Feedback",
    "finance-claim-intake": "Finance Claim Intake",
    "internal-it-hr-ticketing": "Internal IT/HR Ticketing",
    "request-demo": "Request Demo"
  };

  if (nameMap[segment]) {
    return nameMap[segment];
  }

  // Default: capitalize and replace hyphens with spaces
  return segment
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}


