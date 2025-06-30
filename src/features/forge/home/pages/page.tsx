// src/app/forge/page.tsx
import {
  BentoGridDemo,
  HeroForgeEntry,
  TechArsenal,
} from '@/features/forge/home/components';

export default function ForgeHome() {
  return (
    <section>
      <HeroForgeEntry />
      <TechArsenal />
      <BentoGridDemo />
    </section>
  );
}
