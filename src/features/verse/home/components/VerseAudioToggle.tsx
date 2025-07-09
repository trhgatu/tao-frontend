'use client';

import { IconPlayerPlay, IconPlayerPause } from '@tabler/icons-react';
import { useAudio } from '@/components/shared/forge/components/AudioContextProvider';

export function VerseAudioToggle() {
  const { playing, loading, togglePlay } = useAudio();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2 group">
      <span
        className="mb-2 text-xs px-3 py-1 rounded-full bg-slate-900/80 text-blue-200 shadow
        opacity-0 group-hover:opacity-100 transition pointer-events-none select-none"
      >
        {playing ? 'Pause Verse Ambience' : 'Play Verse Ambience'}
      </span>

      <button
        onClick={togglePlay}
        aria-label={playing ? 'Pause verse ambience' : 'Play verse ambience'}
        className={`
          relative flex items-center justify-center
          bg-gradient-to-br from-blue-700 via-purple-700 to-indigo-800
          hover:from-blue-600 hover:to-purple-600
          text-white p-3 rounded-full border border-blue-300/40 shadow-xl
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-blue-400/70
          ${playing ? 'ring-4 ring-blue-400/30 scale-110 shadow-blue-600/40 animate-pulse' : ''}
        `}
      >
        {loading ? (
          <svg
            className="animate-spin w-5 h-5 text-blue-200"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-30"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-80"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            />
          </svg>
        ) : playing ? (
          <IconPlayerPause size={22} />
        ) : (
          <IconPlayerPlay size={22} />
        )}

        {playing && (
          <span className="absolute inset-0 rounded-full bg-blue-400/30 blur-lg pointer-events-none animate-pulse" />
        )}
      </button>
    </div>
  );
}
