import React from 'react';
import { Timeline as TimelineComponent } from '@/components/ui/timeline';
import Image from 'next/image';
import { IconFlame, IconCode, IconRocket } from '@tabler/icons-react';

export function Timeline() {
  const data = [
    {
      title: '2024',
      content: (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <IconFlame className="w-5 h-5 text-red-500" />
            <p className="text-sm font-semibold italic bg-gradient-to-r from-orange-600 via-yellow-700 to-red-800 bg-clip-text text-transparent">
              The Year of Forging Excellence
            </p>
          </div>
          <p className="mb-8 text-sm text-gray-300 leading-relaxed">
            Forged and launched revolutionary UI systems from the depths of
            creativity, each component tempered by passion and refined through
            countless iterations.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="group relative">
              <Image
                src="https://assets.aceternity.com/templates/startup-1.webp"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover border border-zinc-700 hover:border-red-500 transition-all duration-300 group-hover:scale-105 shadow-lg shadow-red-900/20 md:h-44 lg:h-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="group relative">
              <Image
                src="https://assets.aceternity.com/templates/startup-2.webp"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover border border-zinc-700 hover:border-red-500 transition-all duration-300 group-hover:scale-105 shadow-lg shadow-red-900/20 md:h-44 lg:h-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="group relative">
              <Image
                src="https://assets.aceternity.com/templates/startup-3.webp"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover border border-zinc-700 hover:border-red-500 transition-all duration-300 group-hover:scale-105 shadow-lg shadow-red-900/20 md:h-44 lg:h-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="group relative">
              <Image
                src="https://assets.aceternity.com/templates/startup-4.webp"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover border border-zinc-700 hover:border-red-500 transition-all duration-300 group-hover:scale-105 shadow-lg shadow-red-900/20 md:h-44 lg:h-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Early 2023',
      content: (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <IconCode className="w-5 h-5 text-orange-500" />
            <p className="text-sm font-semibold italic bg-gradient-to-r from-orange-600 via-yellow-700 to-red-800 bg-clip-text text-transparent">
              The Foundation Era
            </p>
          </div>
          <p className="mb-4 text-sm text-gray-300 leading-relaxed">
            In the early flames of creation, every line of code was a battle
            against mediocrity. Each design forged with purpose, each component
            crafted with soul.
          </p>
          <p className="mb-8 text-sm text-gray-300 leading-relaxed">
            These are not mere templates - they are weapons of mass creation,
            tools forged in the fire of relentless iteration and unwavering
            vision.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="group relative">
              <Image
                src="https://assets.aceternity.com/pro/hero-sections.png"
                alt="hero template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover border border-zinc-700 hover:border-orange-500 transition-all duration-300 group-hover:scale-105 shadow-lg shadow-orange-900/20 md:h-44 lg:h-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="group relative">
              <Image
                src="https://assets.aceternity.com/features-section.png"
                alt="feature template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover border border-zinc-700 hover:border-orange-500 transition-all duration-300 group-hover:scale-105 shadow-lg shadow-orange-900/20 md:h-44 lg:h-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="group relative">
              <Image
                src="https://assets.aceternity.com/pro/bento-grids.png"
                alt="bento template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover border border-zinc-700 hover:border-orange-500 transition-all duration-300 group-hover:scale-105 shadow-lg shadow-orange-900/20 md:h-44 lg:h-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="group relative">
              <Image
                src="https://assets.aceternity.com/cards.png"
                alt="cards template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover border border-zinc-700 hover:border-orange-500 transition-all duration-300 group-hover:scale-105 shadow-lg shadow-orange-900/20 md:h-44 lg:h-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Forge Log',
      content: (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <IconRocket className="w-5 h-5 text-yellow-500" />
            <p className="text-sm font-semibold italic bg-gradient-to-r from-orange-600 via-yellow-700 to-red-800 bg-clip-text text-transparent">
              Latest Weapons Forged
            </p>
          </div>
          <p className="mb-6 text-sm text-gray-300">
            Today&apos;s conquests in the eternal battle against mediocrity
          </p>
          <div className="mb-8 space-y-3">
            <div className="flex items-center gap-3 text-sm text-gray-300 bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
              <span className="text-green-400 font-bold">⚔️</span>
              <span>Card grid component - Forged with precision</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300 bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
              <span className="text-green-400 font-bold">🔥</span>
              <span>Startup template - Tempered in the flames</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300 bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
              <span className="text-green-400 font-bold">⚡</span>
              <span>File upload system - Lightning fast</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300 bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
              <span className="text-green-400 font-bold">🎵</span>
              <span>Music integration - Harmony in chaos</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300 bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
              <span className="text-green-400 font-bold">👥</span>
              <span>Community features - United we forge</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="group relative">
              <Image
                src="https://assets.aceternity.com/pro/hero-sections.png"
                alt="hero template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover border border-zinc-700 hover:border-yellow-500 transition-all duration-300 group-hover:scale-105 shadow-lg shadow-yellow-900/20 md:h-44 lg:h-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/40 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="group relative">
              <Image
                src="https://assets.aceternity.com/features-section.png"
                alt="feature template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover border border-zinc-700 hover:border-yellow-500 transition-all duration-300 group-hover:scale-105 shadow-lg shadow-yellow-900/20 md:h-44 lg:h-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/40 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="group relative">
              <Image
                src="https://assets.aceternity.com/pro/bento-grids.png"
                alt="bento template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover border border-zinc-700 hover:border-yellow-500 transition-all duration-300 group-hover:scale-105 shadow-lg shadow-yellow-900/20 md:h-44 lg:h-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/40 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="group relative">
              <Image
                src="https://assets.aceternity.com/cards.png"
                alt="cards template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover border border-zinc-700 hover:border-yellow-500 transition-all duration-300 group-hover:scale-105 shadow-lg shadow-yellow-900/20 md:h-44 lg:h-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/40 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip bg-gradient-to-br from-zinc-900 via-black to-red-950">
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-orange-900/10" />
      <div className="relative z-10">
        <TimelineComponent data={data} />
      </div>
    </div>
  );
}
