import { Metadata } from "next";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

const title = "Workflows - Uptaik | AI-Powered Workflow Management";
const description = "Streamline your workflow management with Uptaik's AI-powered automation. Transform complex processes into efficient, intelligent workflows.";
const url = "https://www.uptaik.com/workflows";
const image = "https://www.uptaik.com/og-hero.png";
const imageAlt = "Uptaik AI-powered workflow management";

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

