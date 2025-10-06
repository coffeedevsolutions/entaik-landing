import { Metadata } from "next";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Pricing - Uptaik | Flexible Plans for Every Team",
  description: "Simple, transparent pricing for AI-powered workflow management. Choose the plan that fits your team's needs. Start free, scale as you grow.",
  openGraph: {
    title: "Pricing - Uptaik | Flexible Plans for Every Team",
    description: "Simple, transparent pricing for AI-powered workflow management. Choose the plan that fits your team's needs. Start free, scale as you grow.",
    url: "https://www.uptaik.com/pricing",
  },
  twitter: {
    title: "Pricing - Uptaik | Flexible Plans for Every Team",
    description: "Simple, transparent pricing for AI-powered workflow management. Choose the plan that fits your team's needs. Start free, scale as you grow.",
  },
};

export default function PricingLayout({
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

