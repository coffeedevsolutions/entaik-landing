"use client";

import { WorkflowVisualization } from "../../components/workflow-visualization/WorkflowVisualization";
import { workflowConfigs } from "../../components/workflow-visualization/workflow-configs";
import { BreadcrumbSchema } from "../../components/BreadcrumbSchema";

export default function HealthcarePatientExperienceWorkflowPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "https://www.uptaik.com" },
          { name: "Workflows", item: "https://www.uptaik.com/workflows" },
          { name: "Healthcare Patient Experience", item: "https://www.uptaik.com/workflows/healthcare-patient-experience" }
        ]}
      />
      <WorkflowVisualization config={workflowConfigs['healthcare-patient-experience']} />
    </>
  );
}

