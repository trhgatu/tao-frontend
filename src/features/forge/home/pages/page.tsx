// src/app/forge/page.tsx
import {
  Chapters,
  HeroForgeEntry,
  TechArsenal,
  TheCraftings,
  TheFiresOfPassion,
} from '@/features/forge/home/components';

export default function ForgeHome() {
  return (
    <section className="md:space-y-32 lg:space-y-32 sm:space-y-8">
      <HeroForgeEntry />
      <TheFiresOfPassion />
      <TechArsenal />
      <Chapters />
      <TheCraftings />
    </section>
  );
}
