import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies - SAP Projekterfolge | CUTO',
  description: 'Erfahren Sie, wie führende Unternehmen mit CUTO ihre SAP-Projekte erfolgreich umsetzen. Echte Erfolgsgeschichten mit messbaren Ergebnissen.',
  keywords: ['CUTO case studies', 'SAP success stories', 'SAP project management examples', 'S/4HANA migration case study', 'SAP implementation success'],
  openGraph: {
    title: 'Case Studies - SAP Projekterfolge | CUTO',
    description: 'Erfahren Sie, wie führende Unternehmen mit CUTO ihre SAP-Projekte erfolgreich umsetzen.',
    url: 'https://cuto.ai/case-studies',
  },
  twitter: {
    title: 'Case Studies - SAP Projekterfolge | CUTO',
    description: 'Erfahren Sie, wie führende Unternehmen mit CUTO ihre SAP-Projekte erfolgreich umsetzen.',
  },
  alternates: {
    canonical: 'https://cuto.ai/case-studies',
  },
};

export default function CaseStudiesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

