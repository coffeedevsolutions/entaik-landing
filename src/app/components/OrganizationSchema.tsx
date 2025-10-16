"use client";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Uptaik",
    "url": "https://www.uptaik.com",
    "logo": "https://www.uptaik.com/og-hero.png",
    "description": "AI project management platform that transforms emails into structured briefs with automated prioritization and Jira integration.",
    "sameAs": [
      "https://www.linkedin.com/company/uptaik",
      "https://twitter.com/uptaik"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

