import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { 
  useCases, 
  getUseCaseBySlug, 
  getCategoryInfo 
} from '@/lib/use-cases';
import UseCaseContent from './UseCaseContent';

// Generate static params for all use cases
export async function generateStaticParams() {
  return useCases.map((useCase) => ({
    slug: useCase.slug,
  }));
}

// Generate metadata for each use case (using default locale for SEO)
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug, 'de'); // Default to German for metadata
  
  if (!useCase) {
    return {
      title: 'Use Case nicht gefunden',
    };
  }

  const category = getCategoryInfo(useCase.category, 'de');

  return {
    title: `${useCase.title} | CUTO Use Cases`,
    description: useCase.description,
    keywords: [
      'SAP',
      'Use Case',
      category?.name || '',
      useCase.title,
      'Tutorial',
      'Anleitung',
    ],
    openGraph: {
      title: useCase.title,
      description: useCase.description,
      type: 'article',
      publishedTime: useCase.publishedAt,
      modifiedTime: useCase.updatedAt,
      authors: useCase.author ? [useCase.author.name] : undefined,
    },
  };
}

export default async function UseCasePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  
  // Check if use case exists (using any locale)
  const useCase = getUseCaseBySlug(slug, 'de');
  if (!useCase) {
    notFound();
  }

  // Pass slug to client component which will handle locale
  return <UseCaseContent slug={slug} />;
}
