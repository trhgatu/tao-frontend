'use client';

import { CometCard } from '@/components/ui/comet-card';
import { IconFlame, IconHammer, IconCoffee } from '@tabler/icons-react';
import Image from 'next/image';

export function TheAlchemistCard() {
  return (
    <CometCard>
      <div className="cursor-pointer rounded-[16px] border border-red-500/30 bg-zinc-800/50 p-6 backdrop-blur-sm shadow-lg shadow-red-900/20">
        <div className="relative w-32 h-32 mx-auto mb-4">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl blur-xl opacity-40" />
          <Image
            src="/assets/images/trhgatu.jpg"
            alt="The Alchemist Avatar"
            fill
            className="relative rounded-2xl object-cover border-2 border-red-500/40"
          />
        </div>

        {/* Title Section */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-white">Tran Hoang Anh Tu</h3>
          <p className="mt-1 bg-gradient-to-r from-red-600 via-orange-700 to-yellow-800 bg-clip-text text-transparent font-bold text-sm">
            The Alchemist
          </p>
          <p className="text-gray-400 text-xs">
            Full-stack Developer & Digital Blacksmith
          </p>
        </div>

        {/* Stats Section */}
        <div className="space-y-2 mb-6">
          {[
            {
              icon: <IconFlame className="w-4 h-4" />,
              label: 'Experience',
              value: '1+ Years',
            },
            {
              icon: <IconHammer className="w-4 h-4" />,
              label: 'Projects Forged',
              value: '20+',
            },
            {
              icon: <IconCoffee className="w-4 h-4" />,
              label: 'Coffee',
              value: '∞',
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-center justify-between p-2 bg-red-900/20 rounded-lg border border-red-500/20 text-xs"
            >
              <span className="flex items-center gap-2 text-gray-300">
                <span className="text-red-400">{stat.icon}</span>
                <span>{stat.label}</span>
              </span>
              <span className="text-red-400 font-semibold">{stat.value}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-red-500/20 flex items-center justify-between font-mono text-xs">
          <div className="text-red-400">Alchemist Profile</div>
          <div className="text-gray-300 opacity-50">#ALX</div>
        </div>
      </div>
    </CometCard>
  );
}
