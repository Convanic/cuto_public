import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, ArrowLeft, ArrowRight, Clock, Tag, Calendar, BookOpen } from 'lucide-react';
import { docCategories, docArticles, getArticleBySlug, getArticlesByCategory, DocCategory } from '@/lib/docs';
import AnimatedSection from '@/components/AnimatedSection';

export async function generateStaticParams() {
  return docArticles.map((article) => ({
    category: article.category,
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const article = getArticleBySlug(category as DocCategory, slug);

  if (!article) {
    return {
      title: 'Artikel nicht gefunden',
    };
  }

  return {
    title: `${article.title} | CUTO Dokumentation`,
    description: article.description,
    keywords: article.tags,
    openGraph: {
      title: `${article.title} | CUTO Dokumentation`,
      description: article.description,
      url: `https://cuto.ai/docs/${category}/${slug}`,
      type: 'article',
    },
    twitter: {
      title: `${article.title} | CUTO Dokumentation`,
      description: article.description,
    },
    alternates: {
      canonical: `https://cuto.ai/docs/${category}/${slug}`,
    },
  };
}

// Simple markdown-like renderer
function renderContent(content: string) {
  const lines = content.trim().split('\n');
  const elements: JSX.Element[] = [];
  let inCodeBlock = false;
  let codeBlockContent: string[] = [];
  let codeBlockLang = '';

  lines.forEach((line, index) => {
    // Code block start/end
    if (line.startsWith('```')) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeBlockLang = line.slice(3).trim();
        codeBlockContent = [];
      } else {
        inCodeBlock = false;
        elements.push(
          <pre key={index} className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto my-4 text-sm">
            <code>{codeBlockContent.join('\n')}</code>
          </pre>
        );
      }
      return;
    }

    if (inCodeBlock) {
      codeBlockContent.push(line);
      return;
    }

    // Headers
    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={index} className="text-xl font-bold text-gray-900 mt-8 mb-4">
          {line.slice(4)}
        </h3>
      );
      return;
    }
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={index} className="text-2xl font-bold text-gray-900 mt-10 mb-5">
          {line.slice(3)}
        </h2>
      );
      return;
    }

    // Blockquote
    if (line.startsWith('> ')) {
      elements.push(
        <blockquote key={index} className="border-l-4 border-[#952494] pl-4 py-2 my-4 bg-[#952494]/5 rounded-r-lg italic text-gray-700">
          {line.slice(2)}
        </blockquote>
      );
      return;
    }

    // Tables (simple detection)
    if (line.startsWith('|') && line.endsWith('|')) {
      // Skip separator lines
      if (line.includes('---')) return;
      
      const cells = line.split('|').filter(c => c.trim());
      const isHeader = index > 0 && lines[index + 1]?.includes('---');
      
      if (isHeader || (index > 0 && lines[index - 1]?.includes('---'))) {
        elements.push(
          <tr key={index} className={isHeader ? 'bg-gray-50' : ''}>
            {cells.map((cell, i) => 
              isHeader ? (
                <th key={i} className="px-4 py-2 text-left font-semibold border-b">{cell.trim()}</th>
              ) : (
                <td key={i} className="px-4 py-2 border-b">{cell.trim()}</td>
              )
            )}
          </tr>
        );
      } else {
        elements.push(
          <table key={index} className="w-full border-collapse my-4 text-sm">
            <tbody>
              <tr>
                {cells.map((cell, i) => (
                  <td key={i} className="px-4 py-2 border">{cell.trim()}</td>
                ))}
              </tr>
            </tbody>
          </table>
        );
      }
      return;
    }

    // List items
    if (line.startsWith('- ') || line.startsWith('* ')) {
      const content = line.slice(2);
      // Check for checkboxes
      if (content.startsWith('✅') || content.startsWith('❌') || content.startsWith('✓')) {
        elements.push(
          <li key={index} className="flex items-start gap-2 mb-2 ml-4">
            <span>{content}</span>
          </li>
        );
      } else {
        elements.push(
          <li key={index} className="text-gray-700 mb-2 ml-4 list-disc">
            {renderInlineFormatting(content)}
          </li>
        );
      }
      return;
    }

    // Numbered list
    if (/^\d+\.\s/.test(line)) {
      const content = line.replace(/^\d+\.\s/, '');
      elements.push(
        <li key={index} className="text-gray-700 mb-2 ml-4 list-decimal">
          {renderInlineFormatting(content)}
        </li>
      );
      return;
    }

    // Empty line
    if (line.trim() === '') {
      return;
    }

    // Regular paragraph
    elements.push(
      <p key={index} className="text-gray-700 mb-4 leading-relaxed">
        {renderInlineFormatting(line)}
      </p>
    );
  });

  return elements;
}

function renderInlineFormatting(text: string): React.ReactNode {
  // Bold
  let result = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Italic
  result = result.replace(/\*(.*?)\*/g, '<em>$1</em>');
  // Inline code
  result = result.replace(/`([^`]+)`/g, '<code class="bg-gray-100 text-[#952494] px-1.5 py-0.5 rounded text-sm">$1</code>');
  // Links
  result = result.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#952494] hover:underline">$1</a>');
  
  return <span dangerouslySetInnerHTML={{ __html: result }} />;
}

export default async function DocArticlePage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const article = getArticleBySlug(category as DocCategory, slug);

  if (!article) {
    notFound();
  }

  const categoryInfo = docCategories.find(c => c.id === category);
  const categoryArticles = getArticlesByCategory(category as DocCategory);
  const currentIndex = categoryArticles.findIndex(a => a.slug === slug);
  const prevArticle = currentIndex > 0 ? categoryArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < categoryArticles.length - 1 ? categoryArticles[currentIndex + 1] : null;
  
  const relatedArticles = article.relatedArticles
    ?.map(slug => docArticles.find(a => a.slug === slug))
    .filter((a): a is typeof docArticles[0] => a !== undefined)
    .slice(0, 3);

  return (
    <main className="relative overflow-hidden">
      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-white/80" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
          </li>
          <ChevronRight className="w-4 h-4" />
          <li>
            <Link href="/docs" className="hover:text-white transition-colors">Dokumentation</Link>
          </li>
          <ChevronRight className="w-4 h-4" />
          <li>
            <Link href={`/docs/${category}`} className="hover:text-white transition-colors">{categoryInfo?.name}</Link>
          </li>
          <ChevronRight className="w-4 h-4" />
          <li className="text-white font-medium truncate max-w-[200px]">{article.title}</li>
        </ol>
      </nav>

      {/* Article Header */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-in-up">
            <Link
              href={`/docs/${category}`}
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Zurück zu {categoryInfo?.name}
            </Link>
            
            <div className="flex items-center gap-2 mb-4">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 ${categoryInfo?.color} text-white text-sm font-medium rounded-full`}>
                {categoryInfo?.icon}
                {categoryInfo?.name}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {article.title}
            </h1>
            
            <p className="text-xl text-white/80 mb-6">
              {article.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readingTime}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Aktualisiert: {new Date(article.lastUpdated).toLocaleDateString('de-DE')}
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-in-up" delay={0.1}>
            <article className="glass-card rounded-2xl p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                {renderContent(article.content)}
              </div>
              
              {/* Tags */}
              {article.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="w-4 h-4 text-gray-400" />
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </AnimatedSection>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-in-up" delay={0.2}>
            <div className="grid md:grid-cols-2 gap-4">
              {prevArticle ? (
                <Link
                  href={`/docs/${category}/${prevArticle.slug}`}
                  className="glass-card rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <span className="text-sm text-gray-500 mb-1 block">← Vorheriger Artikel</span>
                  <span className="font-semibold text-gray-900 group-hover:text-[#952494] transition-colors">
                    {prevArticle.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              
              {nextArticle && (
                <Link
                  href={`/docs/${category}/${nextArticle.slug}`}
                  className="glass-card rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group text-right"
                >
                  <span className="text-sm text-gray-500 mb-1 block">Nächster Artikel →</span>
                  <span className="font-semibold text-gray-900 group-hover:text-[#952494] transition-colors">
                    {nextArticle.title}
                  </span>
                </Link>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles && relatedArticles.length > 0 && (
        <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in-up" delay={0.3}>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Verwandte Artikel
              </h2>
              
              <div className="grid md:grid-cols-3 gap-4">
                {relatedArticles.map((relArticle) => {
                  const relCategory = docCategories.find(c => c.id === relArticle.category);
                  return (
                    <Link
                      key={relArticle.slug}
                      href={`/docs/${relArticle.category}/${relArticle.slug}`}
                      className="glass-card rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                    >
                      <span className="text-2xl mb-2 block">{relCategory?.icon}</span>
                      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#952494] transition-colors line-clamp-2">
                        {relArticle.title}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-2">
                        {relArticle.description}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Feedback CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-in-up" delay={0.4}>
            <div className="glass-card rounded-2xl p-8 text-center">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                War dieser Artikel hilfreich?
              </h2>
              <p className="text-gray-600 mb-6">
                Lassen Sie uns wissen, wie wir unsere Dokumentation verbessern können.
              </p>
              <div className="flex justify-center gap-4">
                <button className="px-6 py-3 bg-green-100 text-green-700 rounded-lg font-medium hover:bg-green-200 transition-colors">
                  👍 Ja, hilfreich
                </button>
                <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  👎 Nicht hilfreich
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}

