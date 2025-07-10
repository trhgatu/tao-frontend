'use client';

import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { WavyBackground } from '@/components/ui/wavy-background';
import { motion } from 'framer-motion';

const prose = `I tend to forget the things that once made my heart skip a beat —
so I write them down, before even I forget why I’m still here.`;

export const HeroVerseEntry = () => {
  return (
    <WavyBackground>
      <section className="flex flex-col items-center justify-center text-center overflow-hidden ">
        <motion.h1
          className="tracking-wide max-w-6xl text-6xl font-bold dark:text-white leading-snug"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          The Archive Of One
        </motion.h1>

        <motion.div
          className="mt-6 text-[#5f5f5f] max-w-lg font-light italic text-lg leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.4 }}
        >
          <TextGenerateEffect words={prose} duration={1.4} />
        </motion.div>
      </section>
    </WavyBackground>
  );
};
