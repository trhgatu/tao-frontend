'use client';

import Image from 'next/image';
import { SparklesCore } from '@/components/ui/sparkles';
import { RealmGateButton } from '@/components/shared';
import { EvervaultCard } from '@/components/ui/evervault-card';
import { motion, useScroll, useTransform } from 'framer-motion';

export const GatewayHeroEntry = () => {
  const { scrollY } = useScroll();
  const yVerse = useTransform(scrollY, [0, 300], [0, 20]);
  const yForge = useTransform(scrollY, [0, 300], [0, -20]);

  return (
    <section className="relative flex flex-col items-center justify-center h-[40rem] w-full overflow-hidden rounded-md">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-20 mb-8 text-center font-bold text-white text-3xl md:text-6xl lg:text-7xl drop-shadow-lg"
      >
        Everything is Infinity.
      </motion.h1>
      <div className="relative h-40 w-[42rem] max-w-[90%]">
        <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
        <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />
        <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
        <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />
        <div className="absolute inset-0 bg-black [mask-image:radial-gradient(350px_220px_at_top,transparent_25%,white)]" />
      </div>

      <div className="z-30 mb-10 flex flex-col sm:flex-row gap-10 items-center">
        <div className="relative flex items-center gap-6">
          <motion.div
            style={{ y: yVerse }}
            className="hidden lg:block relative w-44 h-32 rounded-lg overflow-hidden opacity-50 hover:opacity-80 transition-all duration-500 shadow-lg shadow-indigo-700/50 hover:shadow-indigo-500/70"
          >
            <Image
              src="/images/verse-preview.jpg"
              alt="Verse preview"
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-indigo-900/70" />
            <div className="absolute inset-0 backdrop-blur-[2px]" />
          </motion.div>
          <RealmGateButton
            to="/verse"
            message="Drifting into the Verse..."
            theme="verse"
            asChild
          >
            <motion.div
              whileHover={{
                scale: 1.07,
                filter: 'brightness(1.1)',
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-fit cursor-pointer"
            >
              <EvervaultCard
                text="Verse"
                className="w-56 h-36 border border-indigo-400/40 rounded-xl transition-all duration-300 group-hover:border-indigo-300"
                textClassName="bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-600 bg-clip-text text-transparent font-light italic tracking-wide animate-verse-glow"
              />
              <span className="pointer-events-none absolute inset-0 rounded-xl transition-opacity opacity-0 group-hover:opacity-100 group-active:opacity-100" />
              <p className="mt-2 text-center text-sm text-indigo-300 opacity-70 group-hover:opacity-100 transition-opacity">
                Soul • Dreams • Memories
              </p>
            </motion.div>
          </RealmGateButton>
        </div>

        <div className="relative flex items-center gap-6">
          <RealmGateButton
            to="/forge"
            message="System is initializing..."
            theme="forge"
            asChild
          >
            <motion.div
              whileHover={{
                scale: 1.07,
                filter: 'brightness(1.1)',
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-fit cursor-pointer"
            >
              <EvervaultCard
                text="Forge"
                className="w-56 h-36 border border-red-500/40 rounded-xl transition-all duration-300 group-hover:border-red-400"
                textClassName="bg-gradient-to-r from-red-600 via-orange-700 to-yellow-800 bg-clip-text text-transparent font-extrabold animate-forge-glow"
              />
              <span className="pointer-events-none absolute inset-0 rounded-xl transition-opacity opacity-0 group-hover:opacity-100 group-active:opacity-100" />
              <p className="mt-2 text-center text-sm text-red-300 opacity-70 group-hover:opacity-100 transition-opacity">
                Code • Projects • Tech
              </p>
            </motion.div>
          </RealmGateButton>
          <motion.div
            style={{ y: yForge }}
            className="hidden lg:block relative w-44 h-32 rounded-lg overflow-hidden opacity-50 hover:opacity-80 transition-all duration-500 shadow-lg shadow-red-700/50 hover:shadow-red-500/70"
          >
            <Image
              src="/assets/images/trhgatu.jpg"
              alt="Forge preview"
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-red-900/70" />
            <div className="absolute inset-0 backdrop-blur-[2px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
