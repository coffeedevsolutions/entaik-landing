import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education Course Feedback Workflow | Uptaik",
  description: "Collect richer student feedback with adaptive prompts and faculty-ready insights grouped by key dimensions.",
  alternates: {
    canonical: "https://www.uptaik.com/workflows/education-course-feedback",
  },
};

export default function EducationCourseFeedbackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

