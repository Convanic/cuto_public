'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { UseCase, CategoryInfo } from '@/lib/use-cases';
import { UseCaseCardCompact } from '@/components/UseCaseCard';
import AnimatedSection from '@/components/AnimatedSection';
import { useI18n } from '@/lib/i18n/context';

// Simple Markdown renderer component
function MarkdownContent({ content }: { content: string }) {
  // Process markdown content into React elements
  const lines = content.trim().split('\n');
  const elements: JSX.Element[] = [];
  let currentParagraph: string[] = [];
  let inList = false;
  let listItems: string[] = [];

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(' ').trim();
      if (text) {
        elements.push(
          <p key={elements.length} className="text-gray-700 mb-4">
            {processInlineMarkdown(text)}
          </p>
        );
      }
      currentParagraph = [];
    }
  };

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={elements.length} className="list-disc list-inside space-y-2 mb-4 text-gray-700">
          {listItems.map((item, idx) => (
            <li key={idx}>{processInlineMarkdown(item)}</li>
          ))}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  const processInlineMarkdown = (text: string): React.ReactNode => {
    // Process bold text
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={idx} className="text-gray-900 font-semibold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();

    // Empty line
    if (!trimmedLine) {
      flushParagraph();
      flushList();
      continue;
    }

    // Heading 2
    if (trimmedLine.startsWith('## ')) {
      flushParagraph();
      flushList();
      elements.push(
        <h2 key={elements.length} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          {trimmedLine.slice(3)}
        </h2>
      );
      continue;
    }

    // Heading 3
    if (trimmedLine.startsWith('### ')) {
      flushParagraph();
      flushList();
      elements.push(
        <h3 key={elements.length} className="text-xl font-semibold text-gray-900 mt-6 mb-3">
          {trimmedLine.slice(4)}
        </h3>
      );
      continue;
    }

    // List item
    if (trimmedLine.startsWith('- ') || trimmedLine.match(/^\d+\.\s/)) {
      flushParagraph();
      if (!inList) {
        inList = true;
      }
      const itemText = trimmedLine.startsWith('- ') 
        ? trimmedLine.slice(2) 
        : trimmedLine.replace(/^\d+\.\s/, '');
      listItems.push(itemText);
      continue;
    }

    // Regular text - add to paragraph
    if (inList) {
      flushList();
    }
    currentParagraph.push(trimmedLine);
  }

  // Flush any remaining content
  flushParagraph();
  flushList();

  return <>{elements}</>;
}

interface UseCaseContentProps {
  useCase: UseCase;
  category: CategoryInfo | undefined;
  relatedUseCases: UseCase[];
}

export default function UseCaseContent({ 
  useCase, 
  category, 
  relatedUseCases 
}: UseCaseContentProps) {
  const { t } = useI18n();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <AnimatedSection animation="fade-in-up" delay={0.1}>
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {t.useCases.detail.home}
                </Link>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li>
                <Link href="/use-cases" className="hover:text-white transition-colors">
                  {t.useCases.detail.useCases}
                </Link>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li className="text-white font-medium truncate max-w-[200px]">
                {useCase.title}
              </li>
            </ol>
          </nav>
        </AnimatedSection>

        {/* Header */}
        <AnimatedSection animation="fade-in-up" delay={0.2}>
          <header className="mb-8">
            {/* Category Badge */}
            <div className="mb-4">
              <span className={`inline-flex items-center gap-2 px-3 py-1.5 ${category?.color || 'bg-gray-500'} text-white text-sm font-medium rounded-full`}>
                <span>{category?.icon}</span>
                <span>{category?.name}</span>
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              {useCase.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-white/90 mb-6 drop-shadow-md">
              {useCase.description}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
              {useCase.author && (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#952494] to-[#FA9B0C] flex items-center justify-center text-white font-medium text-sm">
                    {useCase.author.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <span className="text-white font-medium">{useCase.author.name}</span>
                    {useCase.author.role && (
                      <span className="text-white/60"> · {useCase.author.role}</span>
                    )}
                  </div>
                </div>
              )}
              <span>📅 {new Date(useCase.publishedAt).toLocaleDateString('de-DE', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
              {useCase.readingTime && (
                <span>⏱️ {useCase.readingTime} {t.useCases.detail.readingTime}</span>
              )}
            </div>
          </header>
        </AnimatedSection>

        {/* Video Section */}
        {(useCase.videoUrl || useCase.videoDuration) && (
          <AnimatedSection animation="fade-in-up" delay={0.3}>
            <div className="mb-10">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900">
                {isVideoPlaying && useCase.videoUrl ? (
                  <iframe
                    src={`${useCase.videoUrl}?autoplay=1`}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={useCase.title}
                  />
                ) : (
                  <>
                    {/* Thumbnail or Placeholder */}
                    {useCase.videoThumbnail ? (
                      <img
                        src={useCase.videoThumbnail}
                        alt={useCase.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        {/* Decorative Elements */}
                        <div className="absolute inset-0 overflow-hidden">
                          <div 
                            className="absolute inset-0 opacity-10"
                            style={{
                              backgroundImage: `
                                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                              `,
                              backgroundSize: '40px 40px'
                            }}
                          />
                          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#952494]/30 rounded-full blur-3xl" />
                          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#FA9B0C]/30 rounded-full blur-3xl" />
                        </div>
                        <div className="text-center z-10">
                          <span className="text-6xl mb-4 block">{category?.icon || '🎬'}</span>
                          <span className="text-white/80 text-lg font-medium">{t.useCases.detail.videoTutorial}</span>
                          {!useCase.videoUrl && (
                            <p className="text-white/50 text-sm mt-2">{t.useCases.detail.comingSoon}</p>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Play Button */}
                    {useCase.videoUrl && (
                      <button
                        onClick={() => setIsVideoPlaying(true)}
                        className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="relative"
                        >
                          <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" style={{ animationDuration: '2s' }} />
                          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover:bg-gray-100 transition-colors">
                            <svg className="w-8 h-8 md:w-10 md:h-10 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </motion.div>
                      </button>
                    )}

                    {/* Duration Badge */}
                    {useCase.videoDuration && (
                      <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                        {useCase.videoDuration}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Main Content */}
        <AnimatedSection animation="fade-in-up" delay={0.4}>
          <article className="glass-card rounded-2xl p-6 md:p-10 mb-10">
            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <MarkdownContent content={useCase.content} />
            </div>

            {/* Steps */}
            {useCase.steps && useCase.steps.length > 0 && (
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span>📝</span> {t.useCases.detail.stepByStep}
                </h2>
                <div className="space-y-6">
                  {useCase.steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-[#952494] to-[#FA9B0C] flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1 pt-1">
                        <h3 className="font-semibold text-gray-900 text-lg mb-1">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">
                          {step.description}
                        </p>
                        {step.image && (
                          <img 
                            src={step.image} 
                            alt={step.title}
                            className="mt-4 rounded-lg shadow-md"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pro Tips */}
            {useCase.proTips && useCase.proTips.length > 0 && (
              <div className="mt-10 p-6 bg-gradient-to-r from-[#952494]/10 to-[#FA9B0C]/10 rounded-xl border border-[#952494]/20">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>💡</span> {t.useCases.detail.proTips}
                </h2>
                <ul className="space-y-3">
                  {useCase.proTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <span className="text-[#952494] font-bold">→</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        </AnimatedSection>

        {/* Related Use Cases */}
        {relatedUseCases.length > 0 && (
          <AnimatedSection animation="fade-in-up" delay={0.5}>
            <div className="glass-card rounded-2xl p-6 md:p-8 mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span>🔗</span> {t.useCases.detail.related}
              </h2>
              <div className="space-y-3">
                {relatedUseCases.map((related) => (
                  <UseCaseCardCompact key={related.slug} useCase={related} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* CTA */}
        <AnimatedSection animation="fade-in-up" delay={0.6}>
          <div className="glass-card rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              {t.useCases.detail.cta.title}
            </h2>
            <p className="text-gray-600 mb-6">
              {t.useCases.detail.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="px-6 py-3 bg-gradient-to-r from-[#952494] to-[#FA9B0C] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                {t.useCases.detail.cta.start}
              </Link>
              <Link
                href="/use-cases"
                className="px-6 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                {t.useCases.detail.cta.allUseCases}
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
