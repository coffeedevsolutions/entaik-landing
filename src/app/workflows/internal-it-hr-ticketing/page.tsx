"use client";

import { WorkflowVisualization } from "../../components/workflow-visualization/WorkflowVisualization";
import { workflowConfigs } from "../../components/workflow-visualization/workflow-configs";
import { BreadcrumbSchema } from "../../components/BreadcrumbSchema";

export default function InternalItHrTicketingWorkflowPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "https://www.uptaik.com" },
          { name: "Workflows", item: "https://www.uptaik.com/workflows" },
          { name: "Internal IT/HR Ticketing", item: "https://www.uptaik.com/workflows/internal-it-hr-ticketing" }
        ]}
      />
      <WorkflowVisualization config={workflowConfigs['internal-it-hr-ticketing']} />
    </>
  );
}

