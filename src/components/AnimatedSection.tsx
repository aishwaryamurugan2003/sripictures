import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in' | 'fade-in-up' | 'scale-in' | 'slide-in-right';
}

export const AnimatedSection = ({
  children,
  className,
  delay = 0,
  animation = 'fade-in-up',
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-visible');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0',
        `animate-on-scroll-${animation}`,
        className
      )}
      style={{ '--animation-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
