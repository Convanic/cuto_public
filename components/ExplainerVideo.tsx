'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ExplainerVideoProps {
  videoUrl?: string; // YouTube/Vimeo embed URL or local video
  thumbnailUrl?: string;
  title?: string;
  duration?: string;
  className?: string;
}

export default function ExplainerVideo({
  videoUrl,
  thumbnailUrl,
  title = 'See CUTO in Action',
  duration = '1:30',
  className = '',
}: ExplainerVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Placeholder mode when no video URL is provided
  const isPlaceholder = !videoUrl;

  const handlePlay = () => {
    if (!isPlaceholder) {
      setIsPlaying(true);
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Video Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
      >
        {isPlaying && videoUrl ? (
          // Actual Video Player (iframe for YouTube/Vimeo)
          <iframe
            src={`${videoUrl}?autoplay=1`}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
          />
        ) : (
          // Thumbnail / Placeholder
          <div className="relative w-full h-full">
            {/* Background */}
            {thumbnailUrl ? (
              <img
                src={thumbnailUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              // Placeholder Background
              <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
                {/* Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Grid Pattern */}
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
                  
                  {/* Gradient Orbs */}
                  <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#952494]/30 rounded-full blur-3xl" />
                  <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#FA9B0C]/30 rounded-full blur-3xl" />
                  
                  {/* Mockup UI Elements */}
                  <div className="absolute top-8 left-8 right-8 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                    <div className="w-3 h-3 rounded-full bg-green-400/60" />
                  </div>
                  
                  {/* Sidebar Mockup */}
                  <div className="absolute top-16 left-8 bottom-8 w-48 bg-white/5 rounded-lg p-4 hidden md:block">
                    <div className="space-y-3">
                      <div className="h-4 bg-white/20 rounded w-full" />
                      <div className="h-4 bg-white/10 rounded w-3/4" />
                      <div className="h-4 bg-white/10 rounded w-5/6" />
                      <div className="h-4 bg-[#952494]/40 rounded w-full" />
                      <div className="h-4 bg-white/10 rounded w-2/3" />
                    </div>
                  </div>
                  
                  {/* Main Content Mockup */}
                  <div className="absolute top-16 left-8 md:left-60 right-8 bottom-8 bg-white/5 rounded-lg p-6 hidden sm:block">
                    <div className="h-6 bg-white/20 rounded w-1/3 mb-4" />
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="h-20 bg-gradient-to-br from-[#952494]/30 to-[#952494]/10 rounded-lg" />
                      <div className="h-20 bg-gradient-to-br from-[#FA9B0C]/30 to-[#FA9B0C]/10 rounded-lg" />
                      <div className="h-20 bg-gradient-to-br from-green-500/30 to-green-500/10 rounded-lg" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-white/10 rounded w-full" />
                      <div className="h-3 bg-white/10 rounded w-5/6" />
                      <div className="h-3 bg-white/10 rounded w-4/6" />
                    </div>
                  </div>
                </div>
                
                {/* Center Content */}
                <div className="relative z-10 text-center">
                  <div className="text-white/60 text-sm mb-2 font-medium tracking-wider uppercase">
                    {isPlaceholder ? 'Coming Soon' : 'Watch Video'}
                  </div>
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-1">{title}</h3>
                  {isPlaceholder && (
                    <p className="text-white/50 text-sm">Video in Produktion</p>
                  )}
                </div>
              </div>
            )}

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

            {/* Play Button */}
            <button
              onClick={handlePlay}
              disabled={isPlaceholder}
              className={`absolute inset-0 flex items-center justify-center group ${
                isPlaceholder ? 'cursor-default' : 'cursor-pointer'
              }`}
              aria-label={isPlaceholder ? 'Video coming soon' : 'Play video'}
            >
              <motion.div
                whileHover={isPlaceholder ? {} : { scale: 1.1 }}
                whileTap={isPlaceholder ? {} : { scale: 0.95 }}
                className={`relative ${isPlaceholder ? 'opacity-50' : ''}`}
              >
                {/* Outer Ring */}
                <div className={`absolute inset-0 rounded-full bg-white/20 ${!isPlaceholder ? 'animate-ping' : ''}`} style={{ animationDuration: '2s' }} />
                
                {/* Play Button Circle */}
                <div className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center shadow-2xl ${
                  !isPlaceholder ? 'group-hover:bg-gray-100' : ''
                } transition-colors`}>
                  {isPlaceholder ? (
                    // Clock icon for "coming soon"
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    // Play icon
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </div>
              </motion.div>
            </button>

            {/* Duration Badge */}
            <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-sm font-medium">
              {duration}
            </div>

            {/* Title Overlay (bottom) */}
            <div className="absolute bottom-4 left-4 hidden md:block">
              <div className="text-white/90 text-lg font-semibold">{title}</div>
              <div className="text-white/60 text-sm">
                {isPlaceholder ? 'Explainer video coming soon' : 'Click to watch'}
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/* Caption below video */}
      <div className="mt-4 text-center">
        <p className="text-white/70 text-sm">
          Learn how CUTO transforms your SAP project management in under 2 minutes
        </p>
      </div>
    </div>
  );
}

