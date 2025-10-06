import { Metadata } from "next";
import { Workflows } from "../components/Workflows";

export const metadata: Metadata = {
  title: "Workflows | Uptaik",
  description: "Pre-built workflows for every use case. Get started quickly with templates designed for your industry and function.",
  alternates: {
    canonical: "https://www.uptaik.com/workflows",
  },
};

interface WorkflowsPageProps {
  searchParams: { category?: string };
}

export default function WorkflowsPage({ searchParams }: WorkflowsPageProps) {
  return <Workflows initialCategory={searchParams.category} />;
}

