import { Metadata } from "next";
import { RequestDemo } from "../components/RequestDemo";

export const metadata: Metadata = {
  title: "Request a Demo | Uptaik",
  description: "Schedule a personalized demo of Uptaik's AI-powered project intake platform. See how we can transform your workflow.",
  alternates: {
    canonical: "https://www.uptaik.com/request-demo",
  },
};

export default function RequestDemoPage() {
  return <RequestDemo />;
}

