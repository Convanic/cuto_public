'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-in' | 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'slide-left' | 'slide-right' | 'scale' | 'scale-in';
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  animation = 'fade-up'
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const animationClasses = {
    'fade-up': 'translate-y-16 opacity-0',
    'fade-in': 'opacity-0',
    'fade-in-up': 'translate-y-16 opacity-0',
    'fade-in-left': '-translate-x-16 opacity-0',
    'fade-in-right': 'translate-x-16 opacity-0',
    'slide-left': '-translate-x-16 opacity-0',
    'slide-right': 'translate-x-16 opacity-0',
    'scale': 'scale-90 opacity-0',
    'scale-in': 'scale-90 opacity-0'
  };

  const visibleClass = 'translate-y-0 translate-x-0 scale-100 opacity-100';

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className} ${
        isVisible ? visibleClass : animationClasses[animation]
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

