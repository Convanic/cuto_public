import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pricing - Lifetime Access to CUTO",
  description: "Get lifetime access to CUTO during our early adopter phase. Starting at €990 for SAP project management with 75+ templates and 80+ dashboards. No monthly fees.",
  keywords: [
    "CUTO pricing",
    "SAP project management cost",
    "lifetime license",
    "SAP tools pricing",
    "enterprise software pricing"
  ],
  openGraph: {
    title: "CUTO Pricing - Lifetime Access Starting at €990",
    description: "Get lifetime access to CUTO. No monthly fees, no hidden costs – pay once, use forever.",
    url: "https://cuto.ai/pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "CUTO Pricing - Lifetime Access Starting at €990",
    description: "Get lifetime access to CUTO. No monthly fees – pay once, use forever.",
  },
  alternates: {
    canonical: "https://cuto.ai/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

