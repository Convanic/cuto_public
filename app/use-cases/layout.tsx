import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Use Cases & Tutorials - Lernen Sie CUTO kennen | CUTO',
  description: 'Entdecken Sie praktische Anwendungsfälle und Schritt-für-Schritt Anleitungen für CUTO. Von Projektplanung bis Cutover - lernen Sie, wie Sie SAP-Projekte effizient managen.',
  keywords: [
    'SAP Use Cases',
    'SAP Tutorials',
    'CUTO Anleitung',
    'SAP Projektplanung Tutorial',
    'SAP Cutover Guide',
    'SAP Best Practices',
    'S/4HANA Implementation Guide',
  ],
  openGraph: {
    title: 'Use Cases & Tutorials - CUTO',
    description: 'Praktische Anleitungen und Videos für SAP-Projektmanagement mit CUTO.',
    url: 'https://cuto.ai/use-cases',
  },
  twitter: {
    title: 'Use Cases & Tutorials - CUTO',
    description: 'Praktische Anleitungen und Videos für SAP-Projektmanagement mit CUTO.',
  },
  alternates: {
    canonical: 'https://cuto.ai/use-cases',
  },
};

export default function UseCasesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

