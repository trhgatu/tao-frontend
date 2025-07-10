import {
  FeaturedBlog,
  HeroVerseEntry,
  JournalPreview,
  MemoriesPreview,
} from '@/features/verse/home/components';

// src/app/verse/page.tsx
export default function VerseHome() {
  return (
    <section>
      <HeroVerseEntry />
      <FeaturedBlog />
      <MemoriesPreview />
      <JournalPreview />
    </section>
  );
}
