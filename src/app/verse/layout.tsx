import { VerseNavbar } from '@/components/shared/verse/NavbarVerse';
import { VerseAudioToggle } from '@/features/verse/home/components';
export default function VerseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <VerseNavbar />
      <main className="min-h-screen flex items-center justify-center mx-auto px-4">
        {children}
      </main>
      <VerseAudioToggle />
    </>
  );
}
