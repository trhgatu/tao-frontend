// src/app/forge/page.tsx
'use client';

import { usePublicProjects } from '@/features/forge/craftings/hooks';
import {
  HeroForgeEntry,
  TechArsenal,
  TheCraftings,
  TheFiresOfPassion,
  TheAlchemist,
} from '@/features/forge/home/components';
import { useLang } from '@/hooks';

export default function ForgeHome() {
  const lang = useLang();
  const { data: project = [], isLoading, isError } = usePublicProjects(lang);

  return (
    <section>
      <HeroForgeEntry />
      <div>
        <TheAlchemist />
      </div>
      <div className="md:py-28 py-16">
        <TheFiresOfPassion />
      </div>
      <TechArsenal />

      <div className="md:pb-28 py-16">
        <TheCraftings
          projects={project}
          isLoading={isLoading}
          isError={isError}
        />
      </div>
    </section>
  );
}
