import { ForgeFooter, NavbarForge } from '@/components/shared/forge';
import { Spotlight } from '@/components/ui/spotlight-new';
import { ForgeAudioToggle } from '@/features/forge/home/components';

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
      </div>
      <ForgeFooter />
      <ForgeAudioToggle />
    </div>
  );
}
