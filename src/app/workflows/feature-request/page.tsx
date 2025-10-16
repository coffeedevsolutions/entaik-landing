"use client";

import { WorkflowVisualization } from "../../components/workflow-visualization/WorkflowVisualization";
import { workflowConfigs } from "../../components/workflow-visualization/workflow-configs";
import { BreadcrumbSchema } from "../../components/BreadcrumbSchema";

export default function FeatureRequestWorkflowPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "https://www.uptaik.com" },
          { name: "Workflows", item: "https://www.uptaik.com/workflows" },
          { name: "Feature Request", item: "https://www.uptaik.com/workflows/feature-request" }
        ]}
      />
      <WorkflowVisualization config={workflowConfigs['feature-request']} />
    </>
  );
}

