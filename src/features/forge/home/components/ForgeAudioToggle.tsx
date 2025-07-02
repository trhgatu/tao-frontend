'use client';

import { useEffect, useRef, useState } from 'react';
import { IconPlayerPlay, IconPlayerPause } from '@tabler/icons-react';

export function ForgeAudioToggle() {
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.6;

    const onCanPlay = () => setLoading(false);
    audio.addEventListener('canplaythrough', onCanPlay);

    const tryAutoplay = () => {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    };
    audio.addEventListener('canplaythrough', tryAutoplay);

    return () => {
      audio.removeEventListener('canplaythrough', onCanPlay);
      audio.removeEventListener('canplaythrough', tryAutoplay);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch(() => {
          setPlaying(false);
          alert('Trình duyệt đã chặn tự động phát nhạc. Hãy thử lại!');
        });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2 group">
      <span
        className="mb-2 text-xs px-3 py-1 rounded-full bg-stone-900/80 text-yellow-200 shadow
        opacity-0 group-hover:opacity-100 transition pointer-events-none select-none"
      >
        {playing ? 'Pause Forge Ambience' : 'Play Forge Ambience'}
      </span>
      <button
        onClick={togglePlay}
        aria-label={playing ? 'Pause forge ambience' : 'Play forge ambience'}
        className={`
          relative flex items-center justify-center
          bg-gradient-to-br from-orange-700 via-yellow-700 to-red-800
          hover:from-orange-600 hover:to-yellow-600
          text-white p-3 rounded-full border border-yellow-300/40 shadow-xl
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-yellow-400/70
          ${playing ? 'ring-4 ring-orange-400/30 scale-110 shadow-orange-600/40 animate-pulse' : ''}
        `}
      >
        {loading ? (
          <svg
            className="animate-spin w-5 h-5 text-yellow-200"
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
          <span className="absolute inset-0 rounded-full bg-orange-400/30 blur-lg pointer-events-none animate-pulse" />
        )}
      </button>

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src="/sounds/forge_intro.mp3"
        preload="auto"
        loop
        autoPlay
        style={{ display: 'none' }}
      />
    </div>
  );
}
