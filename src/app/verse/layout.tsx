import { RealmSwitcherButton } from '@/components/shared/RealmSwitcherButton';
import { VerseNavbar } from '@/components/shared/verse/NavbarVerse';
import { AuroraBackground } from '@/components/ui/aurora-background';
export default function VerseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuroraBackground>
      <div className="relative w-full">
        <VerseNavbar />
        <RealmSwitcherButton from="verse" to="/forge" align="right" />
        <main className="min-h-screen flex items-center justify-center mx-auto px-4">
          {children}
        </main>
      </div>
    </AuroraBackground>
  );
}
