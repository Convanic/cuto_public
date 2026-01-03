'use client';

import { ImageIcon, Monitor } from 'lucide-react';

interface ScreenshotPlaceholderProps {
  title?: string;
  subtitle?: string;
  aspectRatio?: 'video' | 'square' | 'wide';
  variant?: 'default' | 'dark' | 'gradient';
}

export default function ScreenshotPlaceholder({
  title = 'Screenshot',
  subtitle = 'Coming Soon',
  aspectRatio = 'video',
  variant = 'default'
}: ScreenshotPlaceholderProps) {
  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    wide: 'aspect-[21/9]'
  };

  const variantClasses = {
    default: 'bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-300',
    dark: 'bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-dashed border-gray-600',
    gradient: 'bg-gradient-to-br from-purple-900/30 via-gray-900/50 to-indigo-900/30 border-2 border-dashed border-purple-500/30'
  };

  const textClasses = {
    default: 'text-gray-400',
    dark: 'text-gray-500',
    gradient: 'text-purple-300/60'
  };

  return (
    <div className={`${aspectClasses[aspectRatio]} ${variantClasses[variant]} rounded-xl flex flex-col items-center justify-center relative overflow-hidden group transition-all duration-300 hover:border-purple-400/50`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 w-20 h-3 bg-current rounded" />
        <div className="absolute top-4 right-4 flex gap-1">
          <div className="w-3 h-3 rounded-full bg-current" />
          <div className="w-3 h-3 rounded-full bg-current" />
          <div className="w-3 h-3 rounded-full bg-current" />
        </div>
        <div className="absolute top-12 left-4 right-4 h-px bg-current" />
        
        {/* Mock content lines */}
        <div className="absolute top-16 left-4 space-y-2">
          <div className="w-32 h-2 bg-current rounded" />
          <div className="w-24 h-2 bg-current rounded" />
          <div className="w-28 h-2 bg-current rounded" />
        </div>
        
        {/* Mock chart */}
        <div className="absolute bottom-4 right-4 flex items-end gap-1">
          <div className="w-4 h-8 bg-current rounded-t" />
          <div className="w-4 h-12 bg-current rounded-t" />
          <div className="w-4 h-6 bg-current rounded-t" />
          <div className="w-4 h-16 bg-current rounded-t" />
          <div className="w-4 h-10 bg-current rounded-t" />
        </div>
      </div>

      {/* Center content */}
      <div className={`${textClasses[variant]} flex flex-col items-center z-10`}>
        <div className="w-16 h-16 rounded-2xl bg-current/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Monitor className="w-8 h-8" strokeWidth={1.5} />
        </div>
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm opacity-70">{subtitle}</p>
      </div>

      {/* Corner badge */}
      <div className="absolute top-3 right-3 bg-purple-500/20 backdrop-blur-sm px-2 py-1 rounded text-xs text-purple-300 font-medium">
        <ImageIcon className="w-3 h-3 inline mr-1" />
        Preview
      </div>
    </div>
  );
}

