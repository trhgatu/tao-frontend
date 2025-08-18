'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { InfiniteMovingCardsSkeleton, GridCardsSkeleton } from '../skeletons';
import { GridCards } from './GridCards';
import { ViewToggle } from './ViewToggle';
import { useIsMobile } from '@/hooks';
import { Project } from '@/types';

interface ProjectHomeProps {
  projects: Project[];
  isLoading?: boolean;
  isError?: boolean;
}

export function TheCraftings({
  projects,
  isLoading,
  isError,
}: ProjectHomeProps) {
  const isMobile = useIsMobile();
  const [viewMode, setViewMode] = useState<'marquee' | 'grid'>('marquee');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setViewMode('grid');
    } else {
      setViewMode('marquee');
    }
  }, [isMobile]);

  const handleToggle = (mode: 'marquee' | 'grid') => {
    if (mode === viewMode) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setViewMode(mode);
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <div className="text-center relative overflow-hidden">
      <h2
        className={cn(
          'text-3xl font-serif font-bold text-orange-300 mb-2 tracking-wider',
          isLoading && 'animate-pulse text-orange-500'
        )}
      >
        The Craftings
      </h2>
      <p className="text-center text-orange-200 mb-10 italic text-base max-w-xl mx-auto">
        Forged in fire, each project is a testament to battles fought, lessons
        learned, and dreams brought to life through code and will.
      </p>

      <div className="mb-8">
        <Link
          href="/projects"
          className="inline-block px-6 py-2 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-400 hover:text-white transition"
        >
          View All Projects
        </Link>
      </div>

      <ViewToggle
        viewMode={viewMode}
        onToggle={handleToggle}
        className="justify-center"
      />

      <div
        className={cn(
          'transition-all duration-300 ease-in-out',
          isTransitioning ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'
        )}
      >
        {isLoading ? (
          viewMode === 'marquee' ? (
            <InfiniteMovingCardsSkeleton />
          ) : (
            <GridCardsSkeleton />
          )
        ) : isError ? (
          <div className="text-red-400 text-sm italic text-center mt-4">
            Failed to load projects.
          </div>
        ) : projects.length === 0 ? (
          <div className="text-zinc-400 text-sm italic text-center mt-4">
            No projects found.
          </div>
        ) : viewMode === 'marquee' ? (
          <InfiniteMovingCards items={projects} />
        ) : (
          <GridCards items={projects} />
        )}
      </div>
    </div>
  );
}
