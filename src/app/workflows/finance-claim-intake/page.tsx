"use client";

import { WorkflowVisualization } from "../../components/workflow-visualization/WorkflowVisualization";
import { workflowConfigs } from "../../components/workflow-visualization/workflow-configs";
import { BreadcrumbSchema } from "../../components/BreadcrumbSchema";

export default function FinanceClaimIntakeWorkflowPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "https://www.uptaik.com" },
          { name: "Workflows", item: "https://www.uptaik.com/workflows" },
          { name: "Finance Claim Intake", item: "https://www.uptaik.com/workflows/finance-claim-intake" }
        ]}
      />
      <WorkflowVisualization config={workflowConfigs['finance-claim-intake']} />
    </>
  );
}

