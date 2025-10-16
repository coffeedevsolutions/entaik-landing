"use client";

import { WorkflowVisualization } from "../../components/workflow-visualization/WorkflowVisualization";
import { workflowConfigs } from "../../components/workflow-visualization/workflow-configs";
import { BreadcrumbSchema } from "../../components/BreadcrumbSchema";

export default function TechnicalRequestWorkflowPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "https://www.uptaik.com" },
          { name: "Workflows", item: "https://www.uptaik.com/workflows" },
          { name: "Technical Request", item: "https://www.uptaik.com/workflows/technical-request" }
        ]}
      />
      <WorkflowVisualization config={workflowConfigs['technical-request']} />
    </>
  );
}

