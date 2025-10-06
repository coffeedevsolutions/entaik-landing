import { Metadata } from "next";
import { Workflows } from "../components/Workflows";

const title = "Workflows | Uptaik";
const description = "Pre-built workflows for every use case. Get started quickly with templates designed for your industry and function.";
const url = "https://www.uptaik.com/workflows";
const image = "https://www.uptaik.com/og-hero.png";
const imageAlt = "Uptaik pre-built workflow templates";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: "Uptaik",
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
  robots: { index: true, follow: true },
};

interface WorkflowsPageProps {
  searchParams: { category?: string };
}

export default function WorkflowsPage({ searchParams }: WorkflowsPageProps) {
  return <Workflows initialCategory={searchParams.category} />;
}

