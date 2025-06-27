'use client';

import { usePathname, useRouter } from 'next/navigation';

export function RealmSwitcherButton() {
  const router = useRouter();
  const pathname = usePathname();

  const isVerse = pathname.startsWith('/verse');
  const targetPath = isVerse ? '/forge' : '/verse';

  const handleSwitch = () => {
    router.push(targetPath);
  };

  return (
    <button
      onClick={handleSwitch}
      className={`fixed top-4 ${isVerse ? 'right-4' : 'left-4'} z-[10000] px-4 py-2 text-sm rounded-md border`}
    >
      {isVerse ? 'Enter Forge' : 'Return to Verse'}
    </button>
  );
}
