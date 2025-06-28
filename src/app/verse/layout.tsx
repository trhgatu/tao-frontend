import { VerseNavbar } from '@/components/shared/verse/NavbarVerse';
import { AuroraBackground } from '@/components/ui/aurora-background';
export default function VerseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuroraBackground>
      <VerseNavbar />
      <main className="min-h-screen flex items-center justify-center mx-auto px-4">
        {children}
      </main>
    </AuroraBackground>
  );
}
