"use client";

import { WorkflowVisualization } from "../../components/workflow-visualization/WorkflowVisualization";
import { workflowConfigs } from "../../components/workflow-visualization/workflow-configs";

export default function EducationCourseFeedbackWorkflowPage() {
  return (
    <WorkflowVisualization config={workflowConfigs['education-course-feedback']} />
  );
}

