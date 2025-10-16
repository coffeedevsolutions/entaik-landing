"use client";

import { WorkflowVisualization } from "../../components/workflow-visualization/WorkflowVisualization";
import { workflowConfigs } from "../../components/workflow-visualization/workflow-configs";
import { BreadcrumbSchema } from "../../components/BreadcrumbSchema";

export default function IncidentResponseWorkflowPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "https://www.uptaik.com" },
          { name: "Workflows", item: "https://www.uptaik.com/workflows" },
          { name: "Incident Response", item: "https://www.uptaik.com/workflows/incident-response" }
        ]}
      />
      <WorkflowVisualization config={workflowConfigs['incident-response']} />
    </>
  );
}

