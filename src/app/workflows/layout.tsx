import { Metadata } from "next";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Workflows - Uptaik | AI-Powered Workflow Management",
  description: "Streamline your workflow management with Uptaik's AI-powered automation. Transform complex processes into efficient, intelligent workflows.",
  openGraph: {
    title: "Workflows - Uptaik | AI-Powered Workflow Management",
    description: "Streamline your workflow management with Uptaik's AI-powered automation. Transform complex processes into efficient, intelligent workflows.",
    url: "https://www.uptaik.com/workflows",
  },
  twitter: {
    title: "Workflows - Uptaik | AI-Powered Workflow Management",
    description: "Streamline your workflow management with Uptaik's AI-powered automation. Transform complex processes into efficient, intelligent workflows.",
  },
  alternates: {
    canonical: "https://www.uptaik.com/workflows",
  },
};

export default function WorkflowsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}

