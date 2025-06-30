'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { IconFlame } from '@tabler/icons-react';
import { ForgeHeroWrapper } from '@/components/shared/forge/components/layout/ForgeHeroWrapper';
export const HeroForgeEntry = () => {
  return (
    <ForgeHeroWrapper showGrid>
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-6 text-foreground">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="flex items-center flex-col"
          >
            <BackgroundGradient className="md:w-96 md:h-96 h-52 w-52 z-50 rounded-full overflow-hidden flex items-center">
              <Image
                src="/assets/images/trhgatu.jpg"
                alt="Infinity Avatar"
                width={600}
                height={600}
                className="object-cover w-full h-full rounded-full p-4 bg-black"
                style={{ objectPosition: 'center 90%' }}
              />
            </BackgroundGradient>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="text-left"
          >
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-4">
              Welcome to the
              <span className="relative inline-block ml-4">
                <span
                  className="
      relative z-10
      bg-gradient-to-r from-red-600 via-orange-700 to-yellow-800
      bg-clip-text text-transparent
      font-extrabold
      animate-forge-glow
      [text-shadow:_0_2px_6px_rgba(0,0,0,0.7)]
    "
                >
                  Forge.
                </span>
              </span>
            </h1>

            <div className="my-6 w-36 h-1 rounded bg-gradient-to-r from-red-800 via-orange-700 to-yellow-800 shadow-lg" />

            <p className="flex items-center gap-2 text-base md:text-lg font-semibold italic bg-gradient-to-r from-orange-600 via-yellow-700 to-red-800 bg-clip-text text-transparent drop-shadow-[0_1px_6px_rgba(255,80,40,0.3)] mb-2">
              <IconFlame color="red" />
              Born in fire. Forged to conquer.
            </p>

            <p
              className="
    md:text-base
    italic
    text-orange-200
    mb-6
    leading-relaxed
    tracking-wide
    [text-shadow:_0_1px_8px_rgba(0,0,0,0.2)]
  "
            >
              In this forge, my code is tempered by challenge and fueled by
              passion. I battle through every obstacle, forging solutions with
              relentless spirit.
            </p>

            <Button
              variant="outline"
              className="border-red-700 text-red-700 hover:bg-gradient-to-r hover:from-red-700 hover:to-orange-600 hover:text-white shadow-lg transition-all duration-300 font-bold"
            >
              Explore
            </Button>
          </motion.div>
        </div>
      </section>
    </ForgeHeroWrapper>
  );
};
