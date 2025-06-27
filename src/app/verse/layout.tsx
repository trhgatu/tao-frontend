import { RealmSwitcherButton } from '@/components/shared/RealmSwitcherButton';

export default function VerseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RealmSwitcherButton from="verse" to="/forge" align="right" />
      <main className="min-h-screen flex items-center justify-center mx-auto px-4">
        {children}
      </main>
    </>
  );
}
