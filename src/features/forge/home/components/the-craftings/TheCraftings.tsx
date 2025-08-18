'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { GridCards } from './GridCards';
import { ViewToggle } from './ViewToggle';
import { useIsMobile } from '@/hooks';
import { Project } from '@/types';

interface ProjectHomeProps {
  projects: Project[];
}

export function TheCraftings({ projects }: ProjectHomeProps) {
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
      <h2 className="text-3xl font-serif font-bold text-center text-orange-300 mb-2 tracking-wider">
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
        className={`transition-opacity duration-150 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
      >
        {viewMode === 'marquee' ? (
          <InfiniteMovingCards
            items={projects}
            direction="right"
            speed="normal"
          />
        ) : (
          <GridCards items={projects} />
        )}
      </div>
    </div>
  );
}
