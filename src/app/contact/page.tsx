import { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Uptaik",
  description: "Get in touch with the Uptaik team. We're here to answer your questions and help you transform your project intake process.",
  openGraph: {
    title: "Contact Us | Uptaik",
    description: "Get in touch with the Uptaik team. We're here to answer your questions and help you transform your project intake process.",
    url: "https://uptaik.com/contact",
  },
  twitter: {
    title: "Contact Us | Uptaik",
    description: "Get in touch with the Uptaik team. We're here to answer your questions and help you transform your project intake process.",
  },
  alternates: {
    canonical: "https://uptaik.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <div className="pt-20 pb-20">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

