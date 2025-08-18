// src/app/forge/page.tsx
'use client';

import { usePublicProjects } from '@/features/forge/craftings/hooks';
import {
  Chapters,
  HeroForgeEntry,
  TechArsenal,
  TheCraftings,
  TheFiresOfPassion,
} from '@/features/forge/home/components';
import { useLang } from '@/hooks';

export default function ForgeHome() {
  const lang = useLang();
  const { data: project = [], isLoading, isError } = usePublicProjects(lang);

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
      <div className="md:pb-28 py-16">
        {!isLoading && !isError && <TheCraftings projects={project} />}
      </div>
    </section>
  );
}
