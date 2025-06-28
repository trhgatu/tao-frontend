// src/app/forge/page.tsx
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import { HeroForgeEntry } from '@/components/shared/forge/HeroForgeEntry';

export default function ForgeHome() {
  return (
    <section>
      <HeroForgeEntry />
      <AnimatedGridPattern
        maxOpacity={0.1}
        strokeDasharray={4}
        numSquares={30}
        duration={2}
        repeatDelay={0.7}
      />
    </section>
  );
}
