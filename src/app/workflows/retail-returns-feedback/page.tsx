"use client";

import { WorkflowVisualization } from "../../components/workflow-visualization/WorkflowVisualization";
import { workflowConfigs } from "../../components/workflow-visualization/workflow-configs";

export default function RetailReturnsFeedbackWorkflowPage() {
  return (
    <WorkflowVisualization config={workflowConfigs['retail-returns-feedback']} />
  );
}

