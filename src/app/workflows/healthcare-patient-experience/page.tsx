"use client";

import { WorkflowVisualization } from "../../components/workflow-visualization/WorkflowVisualization";
import { workflowConfigs } from "../../components/workflow-visualization/workflow-configs";

export default function HealthcarePatientExperienceWorkflowPage() {
  return (
    <WorkflowVisualization config={workflowConfigs['healthcare-patient-experience']} />
  );
}

