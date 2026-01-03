import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, ArrowRight, Clock, ArrowLeft } from 'lucide-react';
import { docCategories, getArticlesByCategory, DocCategory } from '@/lib/docs';
import AnimatedSection from '@/components/AnimatedSection';

export async function generateStaticParams() {
  return docCategories.map((category) => ({
    category: category.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const categoryInfo = docCategories.find(c => c.id === category);

  if (!categoryInfo) {
    return {
      title: 'Kategorie nicht gefunden',
    };
  }

  return {
    title: `${categoryInfo.name} - Dokumentation | CUTO`,
    description: categoryInfo.description,
    openGraph: {
      title: `${categoryInfo.name} - Dokumentation | CUTO`,
      description: categoryInfo.description,
      url: `https://cuto.ai/docs/${category}`,
    },
    alternates: {
      canonical: `https://cuto.ai/docs/${category}`,
    },
  };
}

export default async function DocCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const categoryInfo = docCategories.find(c => c.id === category);

  if (!categoryInfo) {
    notFound();
  }

  const articles = getArticlesByCategory(category as DocCategory);
  const IconComponent = categoryInfo.IconComponent;

  return (
    <main className="relative overflow-hidden">
      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-white/80" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
          </li>
          <ChevronRight className="w-4 h-4" />
          <li>
            <Link href="/docs" className="hover:text-white transition-colors">Dokumentation</Link>
          </li>
          <ChevronRight className="w-4 h-4" />
          <li className="text-white font-medium">{categoryInfo.name}</li>
        </ol>
      </nav>

      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-in-up">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Zurück zur Übersicht
            </Link>
            
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-16 h-16 ${categoryInfo.color} rounded-2xl flex items-center justify-center text-white`}>
                <IconComponent className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">
                  {categoryInfo.name}
                </h1>
                <p className="text-white/70 mt-1">
                  {articles.length} Artikel
                </p>
              </div>
            </div>
            
            <p className="text-xl text-white/80 max-w-3xl">
              {categoryInfo.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-in-up" delay={0.1}>
            <div className="space-y-4">
              {articles.map((article, index) => (
                <Link
                  key={article.slug}
                  href={`/docs/${category}/${article.slug}`}
                  className="block glass-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#952494] transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-gray-600 mb-4">
                        {article.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readingTime}
                        </span>
                        <span>
                          Aktualisiert: {new Date(article.lastUpdated).toLocaleDateString('de-DE')}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#952494] group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>
          
          {articles.length === 0 && (
            <AnimatedSection animation="fade-in-up" delay={0.1}>
              <div className="glass-card rounded-xl p-12 text-center">
                <span className="text-4xl mb-4 block">{categoryInfo.icon}</span>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Noch keine Artikel
                </h2>
                <p className="text-gray-600 mb-6">
                  In dieser Kategorie sind noch keine Artikel verfügbar.
                </p>
                <Link
                  href="/docs"
                  className="inline-flex items-center gap-2 text-[#952494] font-medium hover:underline"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Zurück zur Übersicht
                </Link>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-in-up" delay={0.2}>
            <h2 className="text-2xl font-bold text-white mb-6">
              Weitere Kategorien
            </h2>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {docCategories
                .filter(c => c.id !== category)
                .slice(0, 4)
                .map((cat) => {
                  const catArticles = getArticlesByCategory(cat.id);
                  const CatIcon = cat.IconComponent;
                  
                  return (
                    <Link
                      key={cat.id}
                      href={`/docs/${cat.id}`}
                      className="glass-card rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 ${cat.color} rounded-lg flex items-center justify-center text-white`}>
                          <CatIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-[#952494] transition-colors">
                            {cat.name}
                          </h3>
                          <p className="text-xs text-gray-500">
                            {catArticles.length} Artikel
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}

