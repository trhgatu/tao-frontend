// src/app/forge/page.tsx
import {
  BentoGridDemo,
  HeroForgeEntry,
} from '@/features/forge/home/components';

export default function ForgeHome() {
  return (
    <section>
      <HeroForgeEntry />
      <BentoGridDemo />
    </section>
  );
}
