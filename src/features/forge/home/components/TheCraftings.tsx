'use client';

import Link from 'next/link';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { projects } from '../data-mock/projects';

export function TheCraftings() {
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

      <InfiniteMovingCards items={projects} direction="right" speed="normal" />
    </div>
  );
}
