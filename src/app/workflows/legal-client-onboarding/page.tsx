"use client";

import { WorkflowVisualization } from "../../components/workflow-visualization/WorkflowVisualization";
import { workflowConfigs } from "../../components/workflow-visualization/workflow-configs";

export default function LegalClientOnboardingWorkflowPage() {
  return (
    <WorkflowVisualization config={workflowConfigs['legal-client-onboarding']} />
  );
}

