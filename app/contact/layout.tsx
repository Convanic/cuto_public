import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact - Request a Demo",
  description: "Contact CUTO for a personalized demo or more information about our SAP project management platform. Get in touch with our team in Germany.",
  keywords: [
    "contact CUTO",
    "SAP demo request",
    "CUTO support",
    "SAP project consultation"
  ],
  openGraph: {
    title: "Contact CUTO - Request a Demo",
    description: "Get in touch with CUTO for a personalized demo of our SAP project management platform.",
    url: "https://cuto.ai/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact CUTO - Request a Demo",
    description: "Get in touch with CUTO for a personalized demo.",
  },
  alternates: {
    canonical: "https://cuto.ai/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

