'use client';

import Link from 'next/link';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { projects } from '../data-mock/projects';

export function TheCraftings() {
  return (
    <div className="text-center relative overflow-hidden">
      <h2 className="relative text-3xl md:text-4xl font-bold tracking-widest text-orange-400 uppercase mb-6 drop-shadow-[0_2px_12px_rgba(255,140,0,0.18)]">
        <span className="pulse-slow bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
          The Craftings
        </span>
      </h2>

      <div className="mb-8">
        <Link
          href="/projects"
          className="inline-block px-6 py-2 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-400 hover:text-white transition"
        >
          View All Projects
        </Link>
      </div>

      <InfiniteMovingCards items={projects} direction="right" speed="normal" />
    </div>
  );
}
