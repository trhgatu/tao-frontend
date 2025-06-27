'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export function RealmTransitionButton({
  to,
  label,
  align = 'right',
}: {
  to: string;
  label: string;
  align?: 'left' | 'right';
}) {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      router.push(to);
    }, 600);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`text-sm px-3 py-1 rounded-md border ${
          align === 'left' ? 'ml-4' : 'mr-4'
        }`}
      >
        {label}
      </button>

      <AnimatePresence>
        {isAnimating && (
          <motion.div
            className="fixed inset-0 z-50 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
