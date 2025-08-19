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

      <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-8 max-w-6xl w-full mx-auto min-w-0 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 z-10">
        <div className="absolute top-0 left-0 pointer-events-none select-none hidden xl:block">
          <div className="absolute inset-0 w-64 h-64 rounded-full bg-white/10 blur-2xl opacity-60" />
          <Image
            src="/assets/images/the_sun.svg"
            alt="Sun Decor"
            className="w-64 animate-pulse opacity-80"
            style={{
              transform: 'translate(-10%, -10%)',
              filter: 'drop-shadow(0 0 32px #fff8)',
            }}
            width={150}
            height={150}
            priority
          />
        </div>

        <div className="absolute top-6 -right-48 w-20 md:w-28 lg:w-96 pointer-events-none select-none -z-10 hidden xl:block">
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="flex flex-col items-center justify-center order-1 lg:order-none relative w-full"
        >
          <div className="relative flex flex-col items-center space-y-4 sm:space-y-6">
            <BackgroundGradient className="rounded-full w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 z-50 overflow-hidden flex items-center shadow-2xl shadow-orange-900/30">
              <Image
                src="/assets/images/trhgatu.jpg"
                alt="Infinity Avatar"
                width={600}
                height={600}
                className="object-cover rounded-full w-full h-full p-2 sm:p-3 md:p-4 bg-black"
                style={{ objectPosition: 'center 90%' }}
                priority
              />
            </BackgroundGradient>
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
              <motion.div
                variants={item}
                initial="hidden"
                animate="show"
                className="text-center space-y-2"
              >
                <div className="uppercase font-serif tracking-wider text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.4)]">
                  I&apos;m a
                </div>
                <div className="text-lg font-serif xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold overflow-hidden min-h-[2em]">
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
                    wrapper="div"
                    className="uppercase tracking-wider bg-gradient-to-r from-red-600 via-orange-700 to-red-800 bg-clip-text text-transparent font-extrabold"
                    style={{
                      minHeight: '1.5em',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
          className="text-center lg:text-left min-w-0 order-2 lg:order-none space-y-4 sm:space-y-6"
        >
          <h1 className="text-3xl font-serif xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
            Welcome to the
            <span className="block lg:inline lg:ml-3 xl:ml-4 mt-2 lg:mt-0">
              <span className="relative z-10 bg-gradient-to-r from-red-600 via-orange-700 to-yellow-800 bg-clip-text text-transparent font-extrabold animate-forge-glow [text-shadow:_0_2px_6px_rgba(0,0,0,0.5)]">
                Forge.
              </span>
            </span>
          </h1>

          <div className="mx-auto lg:mx-0 w-16 xs:w-20 sm:w-24 md:w-32 lg:w-36 h-1 rounded bg-gradient-to-r from-red-800 via-orange-700 to-yellow-800 shadow-lg" />

          <p className="flex items-center justify-center lg:justify-start gap-2 text-base xs:text-base sm:text-lg md:text-xl font-semibold italic bg-gradient-to-r from-orange-600 via-yellow-700 to-red-800 bg-clip-text text-transparent">
            <IconFlame
              color="red"
              className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            />
            <span className="font-serif">Born in fire. Forged to conquer.</span>
          </p>

          <p className="font-serif text-base xs:text-sm sm:text-base md:text-lg italic text-orange-200 leading-relaxed tracking-wide max-w-lg mx-auto lg:mx-0">
            In this forge, my code is tempered by challenge and fueled by
            passion. I battle through every obstacle, forging solutions with
            relentless spirit.
          </p>
        </motion.div>
      </div>

      <div className="absolute top-4 right-4 lg:top-2 lg:right-10 z-30 flex-col items-center group hidden sm:flex">
        <div className="absolute inset-0 w-24 h-16 sm:w-28 sm:h-20 blur-2xl rounded-2xl bg-gradient-to-br from-orange-400/30 via-yellow-200/20 to-transparent opacity-70 -z-10" />
        <div className="flex items-center gap-1 sm:gap-2">
          <DotLottieReact
            className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 drop-shadow-[0_2px_12px_rgba(255,140,0,0.25)]"
            src="https://lottie.host/355b691f-50ef-4fb2-afc3-9d1d4940f078/HQvdCrsP7V.lottie"
            loop
            autoplay
          />
          <span className="text-xs sm:text-sm lg:text-base font-bold italic tracking-wide bg-gradient-to-r from-orange-500 via-yellow-400 to-red-600 bg-clip-text text-transparent drop-shadow-[0_1px_4px_rgba(255,100,0,0.18)] -ml-2 sm:-ml-3 lg:-ml-4 text-shadow-[0_2px_8px_rgba(255,140,0,0.12)] font-[Cinzel,serif] whitespace-nowrap">
            Engine ready!
          </span>
          <DotLottieReact
            className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 -ml-1 sm:-ml-2 -mt-1 sm:-mt-2"
            src="https://lottie.host/4878e6ad-2c2e-4e7c-89be-043a1324c60d/Sp9BoJuJxM.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </ForgeHeroWrapper>
  );
};
