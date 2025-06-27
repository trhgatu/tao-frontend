'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

export function RealmTransitionLayer({
  message,
  onComplete,
}: {
  message: string;
  onComplete: () => void;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black text-white text-xl"
    >
      <span className="animate-pulse">{message}</span>
    </motion.div>
  );
}
