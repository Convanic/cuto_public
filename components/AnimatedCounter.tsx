'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  delay?: number;
  className?: string;
}

export default function AnimatedCounter({
  target,
  duration = 2000,
  suffix = '',
  prefix = '',
  label,
  delay = 0,
  className = ''
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  // Store values in refs to avoid dependency changes
  const targetRef = useRef(target);
  const durationRef = useRef(duration);
  const delayRef = useRef(delay);
  
  // Update refs when props change
  targetRef.current = target;
  durationRef.current = duration;
  delayRef.current = delay;

  useEffect(() => {
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Add delay before starting animation (delay is in milliseconds)
          const timeoutId = setTimeout(() => {
            const startTime = Date.now();
            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / durationRef.current, 1);
              
              // Easing function for smooth deceleration
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentCount = Math.floor(easeOutQuart * targetRef.current);
              
              setCount(currentCount);
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(targetRef.current);
              }
            };
            
            requestAnimationFrame(animate);
          }, delayRef.current);
          
          observer.unobserve(entry.target);
          
          return () => clearTimeout(timeoutId);
        }
      },
      {
        threshold: 0.5
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  return (
    <div ref={ref} className={`glass-card p-6 rounded-xl text-center ${className}`}>
      <div className="text-4xl font-bold text-gray-900 mb-1">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}
