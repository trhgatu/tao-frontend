'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { RealmTransitionLayer } from './RealmTransitionLayer';

type Props = {
  to: string;
  label: string;
  message: string;
  align?: 'left' | 'right' | 'center';
  theme?: 'forge' | 'verse';
};

export function RealmGateButton({
  to,
  label,
  message,
  align = 'right',
  theme = 'forge',
}: Props) {
  const router = useRouter();
  const [showTransition, setShowTransition] = useState(false);

  const handleClick = () => {
    setShowTransition(true);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`fixed z-30 px-5 py-3 rounded-md border border-white text-white font-semibold
          transition-all duration-300 hover:scale-105
          ${align === 'left' && 'left-6 top-1/2 -translate-y-1/2'}
          ${align === 'right' && 'right-6 top-1/2 -translate-y-1/2'}
          ${align === 'center' && 'left-1/2 top-2/3 -translate-x-1/2'}
        `}
      >
        {label}
      </button>

      <AnimatePresence>
        {showTransition && (
          <RealmTransitionLayer
            message={message}
            onComplete={() => router.push(to)}
            theme={theme}
          />
        )}
      </AnimatePresence>
    </>
  );
}
