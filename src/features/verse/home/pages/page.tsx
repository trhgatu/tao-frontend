import { FeaturedBlog, HeroVerseEntry } from '@/features/verse/home/components';

// src/app/verse/page.tsx
export default function VerseHome() {
  return (
    <section>
      <HeroVerseEntry />
      <FeaturedBlog />
    </section>
  );
}
