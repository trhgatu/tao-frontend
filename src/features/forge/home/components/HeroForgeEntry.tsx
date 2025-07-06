'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { IconFlame } from '@tabler/icons-react';
import { ForgeHeroWrapper } from '@/components/shared/forge/components/layout/ForgeHeroWrapper';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { TypeAnimation } from 'react-type-animation';

export const HeroForgeEntry = () => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <ForgeHeroWrapper showGrid>
      <div className="absolute inset-0 -z-10 opacity-40">
        <Image
          src="/assets/images/frame.svg"
          alt="Forge Background Frame"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center max-w-5xl w-full mx-auto min-w-0 py-6 sm:py-10 z-10">
        <div className="absolute top-0 left-0 pointer-events-none select-none hidden md:block">
          <div className="absolute inset-0 w-64 h-64 rounded-full bg-white/10 blur-2xl opacity-60" />
          <Image
            src="/assets/images/the_sun.svg"
            alt="Sun Decor"
            className="w-64 animate-pulse opacity-80"
            style={{
              transform: 'translate(-20%, -20%)',
              filter: 'drop-shadow(0 0 32px #fff8)',
            }}
            width={150}
            height={150}
            priority
          />
        </div>
        <div className="absolute top-6 -right-48 w-20 md:w-28 lg:w-96 pointer-events-none select-none -z-10 hidden md:block">
          <div className="absolute inset-0 w-full h-full rounded-full bg-orange-700/30 blur-2xl opacity-60 animate-pulse" />
          <Image
            src="/assets/images/knight_state.svg"
            alt="Knight State Decor"
            className="relative w-full h-auto"
            width={200}
            height={200}
            style={{
              filter:
                'drop-shadow(0 0 32px #fbbf24cc) drop-shadow(0 0 16px #fff6)',
            }}
            priority
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="flex-col min-w-0 order-1 md:order-none relative"
        >
          <div className="relative flex flex-col items-center">
            <BackgroundGradient className="rounded-full w-56 h-56 xs:w-44 xs:h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 z-50 overflow-hidden flex items-center shadow-xl shadow-orange-900/20">
              <Image
                src="/assets/images/trhgatu.jpg"
                alt="Infinity Avatar"
                width={600}
                height={600}
                className="object-cover rounded-full w-full h-full p-2 sm:p-4 bg-black"
                style={{ objectPosition: 'center 90%' }}
                priority
              />
            </BackgroundGradient>
            <div className="w-full flex justify-center mt-5">
              <motion.span
                variants={item}
                initial="hidden"
                animate="show"
                className="uppercase tracking-widest flex items-center gap-2 text-lg md:text-xl font-semibold"
              >
                <span className="whitespace-nowrap text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.28)]">
                  I&apos;m a
                </span>
                <span className="min-w-[14ch] inline-block bg-gradient-to-r from-orange-800 via-yellow-700 to-red-900 bg-clip-text text-transparent font-extrabold font-mono text-xl md:text-2xl drop-shadow-[0_2px_8px_rgba(120,40,0,0.22)]">
                  <TypeAnimation
                    sequence={[
                      'Software Engineer',
                      2200,
                      'Web Alchemist',
                      2200,
                      'UI/UX Artisan',
                      2200,
                      'Problem Solver',
                      2200,
                      'Backend Blacksmith',
                      2200,
                      'Dream Weaver',
                      2200,
                      'Code Crafter',
                      2200,
                    ]}
                    cursor={true}
                    repeat={Infinity}
                    wrapper="span"
                    className="whitespace-nowrap"
                  />
                </span>
              </motion.span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="text-left min-w-0 order-2 md:order-none px-4"
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-tight mb-3">
            Welcome to the
            <span className="relative inline-block ml-2 md:ml-4">
              <span className="relative z-10 bg-gradient-to-r from-red-600 via-orange-700 to-yellow-800 bg-clip-text text-transparent font-extrabold animate-forge-glow [text-shadow:_0_2px_6px_rgba(0,0,0,0.7)]">
                Forge.
              </span>
            </span>
          </h1>

          <div className="my-3 w-24 xs:w-28 sm:w-32 md:w-36 h-1 rounded bg-gradient-to-r from-red-800 via-orange-700 to-yellow-800 shadow-lg" />

          <p className="flex items-center gap-2 text-sm xs:text-[0.95rem] sm:text-base md:text-lg font-semibold italic bg-gradient-to-r from-orange-600 via-yellow-700 to-red-800 bg-clip-text text-transparent drop-shadow-[0_1px_6px_rgba(255,80,40,0.3)] mb-1">
            <IconFlame color="red" className="flex-shrink-0 w-5 h-5" />
            Born in fire. Forged to conquer.
          </p>

          <p className="text-xs xs:text-sm sm:text-base md:text-base italic text-orange-200 mb-2 md:mb-3 leading-relaxed tracking-wide [text-shadow:_0_1px_8px_rgba(0,0,0,0.2)]">
            In this forge, my code is tempered by challenge and fueled by
            passion. I battle through every obstacle, forging solutions with
            relentless spirit.
          </p>
        </motion.div>
      </div>
      <div className="absolute top-3 right-3 z-30 flex-col items-center group hidden md:flex">
        <div className="absolute inset-0 w-28 h-20 blur-2xl rounded-2xl bg-gradient-to-br from-orange-400/30 via-yellow-200/20 to-transparent opacity-70 -z-10" />
        <div className="flex items-center gap-2">
          <DotLottieReact
            className="w-12 h-12 md:w-16 md:h-16 drop-shadow-[0_2px_12px_rgba(255,140,0,0.25)]"
            src="https://lottie.host/355b691f-50ef-4fb2-afc3-9d1d4940f078/HQvdCrsP7V.lottie"
            loop
            autoplay
          />
          <span
            className="text-xs md:text-base font-bold italic tracking-wide
                bg-gradient-to-r from-orange-500 via-yellow-400 to-red-600 bg-clip-text text-transparent
                drop-shadow-[0_1px_4px_rgba(255,100,0,0.18)] text-left
                -ml-4
                [text-shadow:_0_2px_8px_rgba(255,140,0,0.12)]
                font-[Cinzel,serif]"
          >
            This engine is ready to burn!
          </span>
        </div>
      </div>
    </ForgeHeroWrapper>
  );
};
