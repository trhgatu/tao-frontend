'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Spotlight } from '@/components/ui/spotlight-new';
import { BackgroundGradient } from '@/components/ui/background-gradient';

const title = `Welcome to the Forge.`;
const prose = `This is where I temper thoughts into tools,
and sharpen dreams into real systems.`;

export const HeroForgeEntry = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 text-foreground">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="flex items-center flex-col"
        >
          <BackgroundGradient className="md:w-80 md:h-80 h-48 w-48 rounded-full overflow-hidden shadow-md">
            <Image
              src="/assets/images/trhgatu.jpg"
              alt="Infinity Avatar"
              width={600}
              height={600}
              className="object-cover w-full h-full"
              style={{ objectPosition: 'center 90%' }}
            />
          </BackgroundGradient>
        </motion.div>
        <div
          className="absolute inset-0 rounded-full border-2 border-pink-500/20 animate-pulse"
          style={{ animationDelay: '5s' }}
        ></div>
        <Spotlight />
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            {title}
          </h1>
          <p className="text-sm text-muted-foreground italic">
            Forged from failures. Coded with heart.
          </p>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {prose}
          </p>

          <Button variant="outline">Explore</Button>
        </motion.div>
      </div>
    </section>
  );
};
