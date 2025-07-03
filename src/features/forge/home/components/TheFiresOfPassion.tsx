import Image from 'next/image';

export function TheFiresOfPassion() {
  return (
    <div className="relative text-center px-4 md:px-12 lg:px-24 max-w-4xl mx-auto py-16 select-none">
      <div className="absolute inset-0 w-full h-full bg-orange-700/30 blur-2xl opacity-60 animate-pulse" />
      <Image
        src="/assets/images/flower_divider.svg"
        alt="Medieval Frame"
        fill
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none opacity-20 z-0"
        style={{
          filter: 'drop-shadow(0 0 24px #fbbf2499) drop-shadow(0 0 8px #fff4)',
        }}
        priority
      />

      <div className="relative z-20">
        <p className="text-yellow-400 text-xl md:text-2xl font-serif italic mb-6 drop-shadow">
          “I don&apos;t just write code. I temper spirit into logic.”
        </p>
        <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-light tracking-wide max-w-2xl mx-auto bg-gradient-to-b from-stone-200/80 to-stone-400/40 bg-clip-text text-transparent">
          In this forge, every line of code is a hammer strike.
          <br />
          Every project is a blade tempered through trials and passion.
          <br />I don&apos;t code just to survive — I code to live true to who I
          am.
        </p>
      </div>
      {/* Radial gradient overlay để tăng chiều sâu */}
      <div className="absolute inset-0 bg-gradient-radial from-orange-900/10 via-transparent to-transparent rounded-lg pointer-events-none z-10" />
    </div>
  );
}
