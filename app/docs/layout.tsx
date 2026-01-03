import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dokumentation & Knowledge Base | CUTO',
  description: 'Umfassende Dokumentation, Anleitungen und Best Practices für CUTO. Lernen Sie, wie Sie SAP-Projekte erfolgreich managen.',
  keywords: ['CUTO Dokumentation', 'CUTO Anleitung', 'SAP Projektmanagement Tutorial', 'CUTO Knowledge Base', 'CUTO Hilfe'],
  openGraph: {
    title: 'Dokumentation & Knowledge Base | CUTO',
    description: 'Umfassende Dokumentation, Anleitungen und Best Practices für CUTO.',
    url: 'https://cuto.ai/docs',
  },
  twitter: {
    title: 'Dokumentation & Knowledge Base | CUTO',
    description: 'Umfassende Dokumentation, Anleitungen und Best Practices für CUTO.',
  },
  alternates: {
    canonical: 'https://cuto.ai/docs',
  },
};

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

