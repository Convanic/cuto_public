import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  useCases, 
  getUseCaseBySlug, 
  getCategoryInfo, 
  getRelatedUseCases 
} from '@/lib/use-cases';
import UseCaseContent from './UseCaseContent';

// Generate static params for all use cases
export async function generateStaticParams() {
  return useCases.map((useCase) => ({
    slug: useCase.slug,
  }));
}

// Generate metadata for each use case
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);
  
  if (!useCase) {
    return {
      title: 'Use Case nicht gefunden',
    };
  }

  const category = getCategoryInfo(useCase.category);

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
  const useCase = getUseCaseBySlug(slug);

  if (!useCase) {
    notFound();
  }

  const category = getCategoryInfo(useCase.category);
  const relatedUseCases = getRelatedUseCases(useCase);

  return (
    <UseCaseContent 
      useCase={useCase} 
      category={category} 
      relatedUseCases={relatedUseCases} 
    />
  );
}
