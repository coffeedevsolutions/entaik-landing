"use client";

import { WorkflowVisualization } from "../../components/workflow-visualization/WorkflowVisualization";
import { workflowConfigs } from "../../components/workflow-visualization/workflow-configs";

export default function FinanceClaimIntakeWorkflowPage() {
  return (
    <WorkflowVisualization config={workflowConfigs['finance-claim-intake']} />
  );
}

