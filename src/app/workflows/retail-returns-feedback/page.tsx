"use client";

import { WorkflowVisualization } from "../../components/workflow-visualization/WorkflowVisualization";
import { workflowConfigs } from "../../components/workflow-visualization/workflow-configs";
import { BreadcrumbSchema } from "../../components/BreadcrumbSchema";

export default function RetailReturnsFeedbackWorkflowPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "https://www.uptaik.com" },
          { name: "Workflows", item: "https://www.uptaik.com/workflows" },
          { name: "Retail Returns & Feedback", item: "https://www.uptaik.com/workflows/retail-returns-feedback" }
        ]}
      />
      <WorkflowVisualization config={workflowConfigs['retail-returns-feedback']} />
    </>
  );
}

