"use client";

import { WorkflowVisualization } from "../../components/workflow-visualization/WorkflowVisualization";
import { workflowConfigs } from "../../components/workflow-visualization/workflow-configs";
import { BreadcrumbSchema } from "../../components/BreadcrumbSchema";

export default function EducationCourseFeedbackWorkflowPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "https://www.uptaik.com" },
          { name: "Workflows", item: "https://www.uptaik.com/workflows" },
          { name: "Education Course Feedback", item: "https://www.uptaik.com/workflows/education-course-feedback" }
        ]}
      />
      <WorkflowVisualization config={workflowConfigs['education-course-feedback']} />
    </>
  );
}

