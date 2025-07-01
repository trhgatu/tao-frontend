'use client';

import React from 'react';
import { FloatingDock } from '@/components/ui/floating-dock';
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconSword,
  IconHammer,
  IconFlame,
  IconBooks,
} from '@tabler/icons-react';

export function Dock() {
  const links = [
    {
      title: 'Home',
      icon: (
        <IconHome className="h-full w-full text-yellow-600 dark:text-yellow-400" />
      ),
      href: '/',
    },
    {
      title: 'Lore',
      icon: (
        <IconBooks className="h-full w-full text-yellow-600 dark:text-yellow-400" />
      ),
      href: '/about',
    },
    {
      title: 'Creations',
      icon: (
        <IconHammer className="h-full w-full text-yellow-600 dark:text-yellow-400" />
      ),
      href: '/projects',
    },
    {
      title: 'Arsenal',
      icon: (
        <IconSword className="h-full w-full text-yellow-600 dark:text-yellow-400" />
      ),
      href: '/arsenal',
    },
    {
      title: 'The Forge',
      icon: (
        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-900 via-orange-700 to-red-700 flex items-center justify-center border border-yellow-800">
          <span className="text-xs font-black text-yellow-200">F</span>
        </div>
      ),
      href: '/forge',
    },
    {
      title: 'Summon',
      icon: (
        <IconFlame className="h-full w-full text-yellow-600 dark:text-yellow-400" />
      ),
      href: '/contact',
    },
    {
      title: 'GitHub',
      icon: (
        <IconBrandGithub className="h-full w-full text-yellow-600 dark:text-yellow-400" />
      ),
      href: 'https://github.com/',
    },
    {
      title: 'X',
      icon: (
        <IconBrandX className="h-full w-full text-yellow-600 dark:text-yellow-400" />
      ),
      href: 'https://twitter.com/',
    },
  ];

  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
}
