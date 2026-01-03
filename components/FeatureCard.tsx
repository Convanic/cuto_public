'use client';

import Link from 'next/link';
import { 
  BarChart3, 
  FileText, 
  RefreshCw, 
  FolderOpen, 
  Rocket, 
  AlertTriangle, 
  Users,
  Combine
} from 'lucide-react';

const iconMap = {
  BarChart3,
  FileText,
  RefreshCw,
  FolderOpen,
  Rocket,
  AlertTriangle,
  Users,
  Combine
};

interface FeatureCardProps {
  name: string;
  description: string;
  iconName: keyof typeof iconMap;
  color: string;
  highlights: string[];
  link: string;
  index: number;
}

export default function FeatureCard({
  name,
  description,
  iconName,
  color,
  highlights,
  link,
  index
}: FeatureCardProps) {
  const Icon = iconMap[iconName];
  
  return (
    <div 
      className="group glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:shadow-purple-500/20 relative overflow-hidden"
      style={{ 
        animationDelay: `${index * 100}ms`
      }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-[#8B2486]/0 group-hover:bg-[#8B2486]/5 transition-all duration-500 rounded-2xl" />
      
      <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
        <div className="w-24 h-24 rounded-2xl bg-[#8B2486] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          <Icon className="w-12 h-12 text-white transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">{name}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {highlights.map((h) => (
              <span 
                key={h} 
                className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full transition-all duration-300 group-hover:bg-purple-100 group-hover:text-purple-700"
              >
                {h}
              </span>
            ))}
          </div>
          <Link
            href={link}
            className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-all duration-300 group-hover:gap-3"
          >
            Learn More
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
