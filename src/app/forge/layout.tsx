import { ForgeFooter, NavbarForge } from '@/components/shared/forge';
import { Spotlight } from '@/components/ui/spotlight-new';
import { ForgeAudioToggle } from '@/features/forge/home/components';
import { LanguageSelector } from '@/components/shared';

export default function ForgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full bg-background">
      <NavbarForge />
      <div className="relative">
        <div className="fixed inset-0 w-screen h-screen pointer-events-none">
          <Spotlight />
        </div>
        <main className=" overflow-x-hidden">{children}</main>
        <div className="fixed bottom-6 left-6 z-50 pointer-events-auto">
          <LanguageSelector />
        </div>
      </div>
      <ForgeFooter />
      <ForgeAudioToggle />
    </div>
  );
}
