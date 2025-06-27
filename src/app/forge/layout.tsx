import { RealmSwitcherButton } from '@/components/shared/RealmSwitcherButton';

export default function ForgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RealmSwitcherButton from="forge" to="/verse" align="left" />
      <main className="min-h-screen flex items-center justify-center mx-auto px-4">
        {children}
      </main>
    </>
  );
}
