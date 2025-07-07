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
    <section>
      <HeroForgeEntry />
      <div className="md:py-28 py-16">
        <TheFiresOfPassion />
      </div>
      <TechArsenal />
      <div>
        <Chapters />
      </div>
      <TheCraftings />
    </section>
  );
}
