// src/app/forge/page.tsx
import {
  Chapters,
  HeroForgeEntry,
  TechArsenal,
} from '@/features/forge/home/components';

export default function ForgeHome() {
  return (
    <section>
      <HeroForgeEntry />
      <TechArsenal />
      <Chapters />
    </section>
  );
}
