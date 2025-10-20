"use client";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Uptaik",
    "url": "https://www.uptaik.com",
    "logo": "https://www.uptaik.com/og-hero.png",
    "description": "AI project management platform that transforms project intake surveys into structured briefs and solutions with automated prioritization and project management software integrations.",
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

