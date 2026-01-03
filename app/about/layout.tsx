import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About CUTO - Our Mission & Team",
  description: "Learn about CUTO's mission to make SAP projects more successful. Built by a team with years of SAP project experience in Germany.",
  keywords: [
    "about CUTO",
    "SAP project management company",
    "benX AG",
    "German SAP software",
    "SAP consulting tools"
  ],
  openGraph: {
    title: "About CUTO - Making SAP Projects Successful",
    description: "Learn about CUTO's mission to make SAP projects more successful through structured project management.",
    url: "https://cuto.ai/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About CUTO - Making SAP Projects Successful",
    description: "Learn about CUTO's mission to make SAP projects more successful.",
  },
  alternates: {
    canonical: "https://cuto.ai/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

