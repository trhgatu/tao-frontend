'use client';

import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { projects } from '../data-mock/projects';

export function TheCraftings() {
  return (
    <div className="text-center relative overflow-hidden">
      <h2 className="relative text-3xl md:text-4xl font-bold tracking-widest text-orange-400 uppercase mb-12 drop-shadow-[0_2px_12px_rgba(255,140,0,0.18)]">
        <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
          The Craftings
        </span>
        <span className="absolute -left-8 top-1/2 -translate-y-1/2 text-2xl hidden md:inline">
          🛡️
        </span>
        <span className="absolute -right-8 top-1/2 -translate-y-1/2 text-2xl hidden md:inline">
          ⚒️
        </span>
      </h2>

      <InfiniteMovingCards items={projects} direction="right" speed="normal" />
    </div>
  );
}
