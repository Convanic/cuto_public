import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Changelog & Roadmap - CUTO Updates | CUTO',
  description: 'Bleiben Sie auf dem Laufenden über neue Features, Verbesserungen und unsere Pläne für die Zukunft von CUTO.',
  keywords: ['CUTO Changelog', 'CUTO Roadmap', 'CUTO Updates', 'neue Features', 'SAP Projektmanagement Updates'],
  openGraph: {
    title: 'Changelog & Roadmap - CUTO Updates | CUTO',
    description: 'Bleiben Sie auf dem Laufenden über neue Features, Verbesserungen und unsere Pläne für die Zukunft von CUTO.',
    url: 'https://cuto.ai/changelog',
  },
  twitter: {
    title: 'Changelog & Roadmap - CUTO Updates | CUTO',
    description: 'Bleiben Sie auf dem Laufenden über neue Features, Verbesserungen und unsere Pläne für die Zukunft von CUTO.',
  },
  alternates: {
    canonical: 'https://cuto.ai/changelog',
  },
};

export default function ChangelogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

