// src/components/layout/HeroWrapper.tsx

'use client';

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';

interface HeroWrapperProps {
  children: ReactNode;
  className?: string;
  showGrid?: boolean;
}

export const ForgeHeroWrapper = ({
  children,
  className,
  showGrid = true,
}: HeroWrapperProps) => {
  return (
    <section className={cn('overflow-hidden', className)}>
      {/* Optional animated background */}
      {showGrid && (
        <AnimatedGridPattern
          maxOpacity={0.1}
          strokeDasharray={4}
          numSquares={30}
          duration={2}
          repeatDelay={0.7}
        />
      )}

      {/* Main content */}
      <div className="relative isolate max-w-6xl w-full z-10">{children}</div>
    </section>
  );
};
