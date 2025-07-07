'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export function TheFiresOfPassion() {
  const [stars, setStars] = useState<
    { id: number; x: number; y: number; size: number; type: '1' | '2' }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      type: (Math.random() > 0.5 ? '1' : '2') as '1' | '2',
    }));
    setStars(generated);
  }, []);

  return (
    <div className="relative text-center px-2 sm:px-4 md:px-12 lg:px-24 max-w-4xl mx-auto py-28 md:py-40 select-none">
      <div className="absolute inset-0 w-full h-full bg-orange-700/30 blur-2xl opacity-60 animate-pulse" />
      <Image
        src="/assets/images/flower_divider.svg"
        alt="Medieval Frame"
        fill
        className="absolute hidden md:block inset-0 w-full h-full object-cover pointer-events-none select-none opacity-20 z-0"
        style={{
          filter: 'drop-shadow(0 0 24px #fbbf2499) drop-shadow(0 0 8px #fff4)',
        }}
        priority
      />

      <div className="relative z-20">
        <p className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-serif italic mb-6 drop-shadow">
          “I don&apos;t just write code. I temper spirit into logic.”
        </p>
        <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed font-light tracking-wide max-w-2xl mx-auto bg-gradient-to-b from-stone-200/80 to-stone-400/40 bg-clip-text">
          In this forge, every line of code is a hammer strike.
          <br />
          Every project is a blade tempered through trials and passion.
          <br />I don&apos;t code just to survive — I code to live true to who I
          am.
        </p>
      </div>

      <div className="absolute inset-0 bg-gradient-radial from-orange-900/10 via-transparent to-transparent rounded-lg pointer-events-none z-10" />

      {stars.map((star) => (
        <Image
          key={star.id}
          src={`/assets/images/union_${star.type}.svg`}
          alt="Star"
          width={star.size}
          height={star.size}
          className="absolute pointer-events-none animate-pulse"
          style={{
            top: `${star.y}%`,
            left: `${star.x}%`,
            transform: 'translate(-50%, -50%)',
            filter: 'drop-shadow(0 0 6px #facc15aa)',
          }}
        />
      ))}
    </div>
  );
}
