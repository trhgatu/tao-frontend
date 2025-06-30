import { NavbarForge } from '@/components/shared/forge';
import { Spotlight } from '@/components/ui/spotlight-new';

export default function ForgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" w-full bg-background">
      <NavbarForge />
      <div className="fixed inset-0 w-screen h-screen pointer-events-none">
        <Spotlight />
      </div>
      <main className="flex items-center justify-center px-4">{children}</main>
    </div>
  );
}
