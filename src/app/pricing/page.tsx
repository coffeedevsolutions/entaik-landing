import { Metadata } from "next";
import { Pricing } from "../components/Pricing";

export const metadata: Metadata = {
  title: "Pricing | Uptaik",
  description: "Join the Uptaik beta program and get early access to AI-powered project intake and prioritization. Limited seats available.",
  alternates: {
    canonical: "https://www.uptaik.com/pricing",
  },
};

export default function PricingPage() {
  return <Pricing />;
}

