import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CUTO vs. Jira vs. SAP ALM - Vergleich | CUTO',
  description: 'Vergleichen Sie CUTO mit Jira und SAP Cloud ALM. Finden Sie die beste Projektmanagement-Lösung für Ihre SAP-Projekte.',
  keywords: ['CUTO vs Jira', 'CUTO vs SAP ALM', 'SAP Projektmanagement Vergleich', 'Jira Alternative SAP', 'SAP Cloud ALM Alternative'],
  openGraph: {
    title: 'CUTO vs. Jira vs. SAP ALM - Vergleich | CUTO',
    description: 'Vergleichen Sie CUTO mit Jira und SAP Cloud ALM. Finden Sie die beste Projektmanagement-Lösung für Ihre SAP-Projekte.',
    url: 'https://cuto.ai/compare',
  },
  twitter: {
    title: 'CUTO vs. Jira vs. SAP ALM - Vergleich | CUTO',
    description: 'Vergleichen Sie CUTO mit Jira und SAP Cloud ALM. Finden Sie die beste Projektmanagement-Lösung für Ihre SAP-Projekte.',
  },
  alternates: {
    canonical: 'https://cuto.ai/compare',
  },
};

export default function CompareLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

