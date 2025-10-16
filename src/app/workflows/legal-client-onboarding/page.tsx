"use client";

import { WorkflowVisualization } from "../../components/workflow-visualization/WorkflowVisualization";
import { workflowConfigs } from "../../components/workflow-visualization/workflow-configs";
import { BreadcrumbSchema } from "../../components/BreadcrumbSchema";

export default function LegalClientOnboardingWorkflowPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "https://www.uptaik.com" },
          { name: "Workflows", item: "https://www.uptaik.com/workflows" },
          { name: "Legal Client Onboarding", item: "https://www.uptaik.com/workflows/legal-client-onboarding" }
        ]}
      />
      <WorkflowVisualization config={workflowConfigs['legal-client-onboarding']} />
    </>
  );
}

