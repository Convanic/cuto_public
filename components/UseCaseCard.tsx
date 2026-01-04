'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { UseCase, getCategoryInfo } from '@/lib/use-cases';
import { useI18n } from '@/lib/i18n/context';

interface UseCaseCardProps {
  useCase: UseCase;
  index?: number;
}

export default function UseCaseCard({ useCase, index = 0 }: UseCaseCardProps) {
  const { t, locale } = useI18n();
  const category = getCategoryInfo(useCase.category, locale);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Link href={`/use-cases/${useCase.slug}`} className="block group h-full">
        <article className="glass-card rounded-xl overflow-hidden h-full hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 flex flex-col">
          {/* Video Thumbnail / Placeholder */}
          <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
            {useCase.videoThumbnail ? (
              <img
                src={useCase.videoThumbnail}
                alt={useCase.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              // Placeholder with category icon
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-5xl mb-2 block">{category?.icon || '📄'}</span>
                  <span className="text-white/60 text-sm">Video coming soon</span>
                </div>
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            )}

            {/* Play Button Overlay */}
            {useCase.videoUrl && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}

            {/* Duration Badge */}
            {useCase.videoDuration && (
              <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-white text-xs font-medium">
                {useCase.videoDuration}
              </div>
            )}

            {/* Category Badge */}
            <div className="absolute top-2 left-2">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 ${category?.color || 'bg-gray-500'} text-white text-xs font-medium rounded-full`}>
                <span>{category?.icon}</span>
                <span>{category?.name}</span>
              </span>
            </div>

            {/* Featured Badge */}
            {useCase.featured && (
              <div className="absolute top-2 right-2">
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-500 text-yellow-900 text-xs font-bold rounded-full">
                  ⭐ Featured
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#952494] transition-colors min-h-[3.5rem]">
              {useCase.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-2 mb-4 flex-1">
              {useCase.description}
            </p>

            {/* Meta */}
            <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
              <div className="flex items-center gap-2">
                {useCase.author && (
                  <>
                    <span>{useCase.author.name}</span>
                    <span>•</span>
                  </>
                )}
                <span>{useCase.readingTime || '5 min'}</span>
              </div>
              <span className="text-[#952494] font-medium group-hover:underline">
                {t.common.readMore} →
              </span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

// Compact variant for related use cases
export function UseCaseCardCompact({ useCase }: { useCase: UseCase }) {
  const { locale } = useI18n();
  const category = getCategoryInfo(useCase.category, locale);

  return (
    <Link href={`/use-cases/${useCase.slug}`} className="block group">
      <div className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
        {/* Icon */}
        <div className={`w-12 h-12 ${category?.color || 'bg-gray-500'} rounded-lg flex items-center justify-center flex-shrink-0`}>
          <span className="text-2xl">{category?.icon}</span>
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 group-hover:text-[#952494] transition-colors line-clamp-1">
            {useCase.title}
          </h4>
          <p className="text-sm text-gray-600 line-clamp-1">
            {useCase.description}
          </p>
        </div>

        {/* Arrow */}
        <div className="flex items-center text-gray-400 group-hover:text-[#952494] transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

