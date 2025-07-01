'use client';

import React from 'react';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import {
  IconFlask,
  IconCode,
  IconTimeline,
  IconBook,
  IconMountain,
  IconShield,
} from '@tabler/icons-react';
import Link from 'next/link';
import { ProjectStackedImages } from './ProjectStackedImages';
import { BlurredImageHeader } from './BlurredImageHeader';

export function Chapters() {
  const chapters = [
    {
      title: 'Chapter II: The Projects',
      description: 'Crafted works forged in the fires of innovation',
      header: <ProjectStackedImages />,
      icon: <IconCode className="h-4 w-4 text-amber-500" />,
      href: '/projects',
    },
    {
      title: 'Chapter I: The Alchemist',
      description: 'The transformation of raw elements into golden creations',
      header: (
        <BlurredImageHeader
          imageUrl="/assets/images/trhgatu.jpg"
          icon={<IconFlask className="w-full h-full" />}
          subtitle="The Art of Transmutation"
          iconColor="text-orange-400"
        />
      ),
      icon: <IconFlask className="h-4 w-4 text-orange-500" />,
      href: '/about',
    },
    {
      title: 'Chapter III: The Timeline',
      description: 'Journey through the milestones of the adventure',
      header: (
        <BlurredImageHeader
          imageUrl="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80"
          icon={<IconTimeline className="w-full h-full" />}
          subtitle="Chronicles of Progress"
          iconColor="text-emerald-400"
        />
      ),
      icon: <IconTimeline className="h-4 w-4 text-emerald-500" />,
      href: '/timeline',
    },
    {
      title: 'Chapter IV: The Artifacts',
      description: 'Relics of knowledge and tools collected along the journey',
      header: (
        <BlurredImageHeader
          imageUrl="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=400&q=80"
          icon={<IconBook className="w-full h-full" />}
          subtitle="Tomes of Wisdom"
          iconColor="text-violet-400"
        />
      ),
      icon: <IconBook className="h-4 w-4 text-violet-500" />,
      href: '/artifacts',
    },
    {
      title: 'Chapter V: The Summit',
      description: 'Reaching the peaks of mastery and achievement',
      header: (
        <BlurredImageHeader
          imageUrl="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80"
          icon={<IconMountain className="w-full h-full" />}
          subtitle="Peaks of Mastery"
          iconColor="text-blue-400"
        />
      ),
      icon: <IconMountain className="h-4 w-4 text-blue-500" />,
      href: '/summit',
    },
    {
      title: 'Chapter VI: The Legacy',
      description: 'Enduring impact and influence left behind',
      header: (
        <BlurredImageHeader
          imageUrl="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=400&q=80"
          icon={<IconShield className="w-full h-full" />}
          subtitle="Eternal Imprint"
          iconColor="text-rose-400"
        />
      ),
      icon: <IconShield className="h-4 w-4 text-rose-500" />,
      href: '',
    },
  ];

  return (
    <section className="relative py-12">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/5 via-black/10 to-red-900/5" />
        <div className="absolute left-1/2 top-1/3 w-96 h-96 bg-gradient-radial from-black/20 to-transparent rounded-full blur-3xl" />
      </div>

      <h2 className="text-3xl font-serif font-bold text-center text-orange-300 mb-2 tracking-wider">
        The Chronicles
      </h2>
      <p className="text-center text-orange-200 mb-10 italic text-base max-w-xl mx-auto">
        Journey through the chapters of creation, adventure, and legacy.
      </p>

      <BentoGrid className="max-w-4xl mx-auto">
        {chapters.map((chapter, i) => (
          <Link key={i} href={chapter.href} className="contents">
            <BentoGridItem
              title={chapter.title}
              description={chapter.description}
              header={chapter.header}
              icon={chapter.icon}
              className={`
                ${i === 0 || i === 3 ? 'md:col-span-2' : ''}
                group
                backdrop-blur-md
                bg-black/40
                border border-orange-900/30
                hover:shadow-orange-800/20
                transition-all duration-300
              `}
            />
          </Link>
        ))}
      </BentoGrid>
    </section>
  );
}
