import { Metadata } from "next";

const title = "Education Course Feedback Workflow | Uptaik";
const description = "Collect richer student feedback with adaptive prompts and faculty-ready insights grouped by key dimensions.";
const url = "https://www.uptaik.com/workflows/education-course-feedback";
const image = "https://www.uptaik.com/og-hero.png";
const imageAlt = "Uptaik Education Course Feedback Workflow";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: "Uptaik",
    images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
  robots: { index: true, follow: true },
};

export default function EducationCourseFeedbackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

