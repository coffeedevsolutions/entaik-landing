import { Workflows } from "../components/Workflows";

interface WorkflowsPageProps {
  searchParams: { category?: string };
}

export default function WorkflowsPage({ searchParams }: WorkflowsPageProps) {
  return <Workflows initialCategory={searchParams.category} />;
}

