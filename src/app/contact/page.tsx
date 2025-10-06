import { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

const title = "Contact Us | Uptaik";
const description = "Get in touch with the Uptaik team. We're here to answer your questions and help you transform your project intake process.";
const url = "https://www.uptaik.com/contact";
const image = "https://www.uptaik.com/og-hero.png";
const imageAlt = "Uptaik AI-powered project intake platform";

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
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
  robots: { index: true, follow: true },
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

