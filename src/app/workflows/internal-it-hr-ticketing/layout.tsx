import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Internal IT/HR Ticketing Workflow | Uptaik",
  description: "Standardize and speed up employee requests with adaptive questioning and auto-creation of tickets in your systems.",
  alternates: {
    canonical: "https://www.uptaik.com/workflows/internal-it-hr-ticketing",
  },
};

export default function InternalItHrTicketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

