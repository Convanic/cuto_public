import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Features - Everything You Need for SAP Projects",
  description: "Discover CUTO's powerful features: 80+ dashboards, 75+ templates, BPMN editor, data migration tools, cutover management, and more for successful SAP implementations.",
  keywords: [
    "SAP project features",
    "SAP dashboards",
    "SAP templates",
    "BPMN editor",
    "data migration tools",
    "cutover management",
    "SAP Activate templates"
  ],
  openGraph: {
    title: "CUTO Features - Complete SAP Project Management Toolkit",
    description: "80+ dashboards, 75+ templates, BPMN editor, and more. Everything you need for successful SAP projects.",
    url: "https://cuto.ai/features",
  },
  twitter: {
    card: "summary_large_image",
    title: "CUTO Features - Complete SAP Project Management Toolkit",
    description: "80+ dashboards, 75+ templates, and more for successful SAP projects.",
  },
  alternates: {
    canonical: "https://cuto.ai/features",
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

