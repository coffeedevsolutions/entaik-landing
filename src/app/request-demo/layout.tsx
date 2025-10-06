import { Metadata } from "next";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Request a Demo - Uptaik | See AI-Powered Workflows in Action",
  description: "Schedule a personalized demo of Uptaik's AI-powered workflow management platform. See how we can transform your intake process.",
  openGraph: {
    title: "Request a Demo - Uptaik | See AI-Powered Workflows in Action",
    description: "Schedule a personalized demo of Uptaik's AI-powered workflow management platform. See how we can transform your intake process.",
    url: "https://www.uptaik.com/request-demo",
  },
  twitter: {
    title: "Request a Demo - Uptaik | See AI-Powered Workflows in Action",
    description: "Schedule a personalized demo of Uptaik's AI-powered workflow management platform. See how we can transform your intake process.",
  },
};

export default function RequestDemoLayout({
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

