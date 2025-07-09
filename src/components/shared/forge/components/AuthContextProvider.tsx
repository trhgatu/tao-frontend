'use client';

import { createContext, useContext, useRef, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface AudioContextType {
  playing: boolean;
  loading: boolean;
  currentTrack: string;
  userInteracted: boolean;
  togglePlay: () => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

const AudioContext = createContext<AudioContextType | null>(null);

const ROUTE_MUSIC = {
  '/forge': '/sounds/forge_intro.mp3',
  '/verse': '/sounds/verse_ambient.mp3',
  '/gateway': '/sounds/gateway.mp3',
  '/craftings': '/sounds/forge_work.mp3',
  '/archemist': '/sounds/forge_epic.mp3',
} as const;

export function AudioProvider({ children }: { children: ReactNode }) {
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentTrack, setCurrentTrack] = useState('');
  const [userInteracted, setUserInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const hasInteracted = localStorage.getItem('audioInteracted');
    if (hasInteracted) {
      setUserInteracted(true);
      return;
    }

    const handleFirstInteraction = () => {
      setUserInteracted(true);
      localStorage.setItem('audioInteracted', 'true');
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  useEffect(() => {
    const initialTrack = ROUTE_MUSIC[pathname as keyof typeof ROUTE_MUSIC] || ROUTE_MUSIC['/forge'];
    setCurrentTrack(initialTrack);
    setLoading(false);
  }, [pathname]);

  useEffect(() => {
    if (userInteracted && currentTrack && audioRef.current && !playing) {
      const audio = audioRef.current;

      const timer = setTimeout(() => {
        if (audio.readyState >= 2) {
          audio.play().then(() => {
            setPlaying(true);
          }).catch((error) => {
            console.log('Auto-play failed:', error);
          });
        } else {
          audio.addEventListener('canplaythrough', () => {
            audio.play().then(() => {
              setPlaying(true);
            }).catch((error) => {
              console.log('Auto-play failed:', error);
            });
          }, { once: true });
        }
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [userInteracted, currentTrack, pathname]);

  useEffect(() => {
    const newTrack = ROUTE_MUSIC[pathname as keyof typeof ROUTE_MUSIC] || ROUTE_MUSIC['/forge'];

    if (newTrack !== currentTrack && currentTrack !== '') {
      const audio = audioRef.current;
      if (audio) {
        const wasPlaying = playing;

        const fadeOut = () => {
          if (audio.volume > 0.1) {
            audio.volume -= 0.1;
            setTimeout(fadeOut, 50);
          } else {
            audio.pause();
            audio.volume = 1.0;
            audio.src = newTrack;
            setCurrentTrack(newTrack);
            setLoading(true);

            if (wasPlaying && userInteracted) {
              audio.load();
              audio.addEventListener('canplaythrough', () => {
                setLoading(false);
                audio.play().then(() => {
                  setPlaying(true);
                }).catch(() => setPlaying(false));
              }, { once: true });
            } else {
              setLoading(false);
              setPlaying(false);
            }
          }
        };

        if (wasPlaying) {
          fadeOut();
        } else {
          audio.src = newTrack;
          setCurrentTrack(newTrack);
          setLoading(false);
        }
      }
    }
  }, [pathname, currentTrack, playing, userInteracted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadStart = () => setLoading(true);
    const handleCanPlay = () => setLoading(false);

    const handlePlay = () => {
      if (!playing) setPlaying(true);
    };

    const handlePause = () => {
      if (playing) setPlaying(false);
    };

    const handleEnded = () => setPlaying(false);

    const handleError = () => {
      setLoading(false);
      setPlaying(false);
      console.error('Audio playback error');
    };

    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [playing]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio || loading) return;

    if (!userInteracted) {
      setUserInteracted(true);
      localStorage.setItem('audioInteracted', 'true');
    }

    try {
      if (playing) {
        setPlaying(false);
        audio.pause();
      } else {
        if (audio.readyState < 2) {
          setLoading(true);
          await new Promise((resolve) => {
            audio.addEventListener('canplaythrough', resolve, { once: true });
          });
          setLoading(false);
        }

        setPlaying(true);
        try {
          await audio.play();
        } catch (playError) {
          setPlaying(false);
          throw playError;
        }
      }
    } catch (error) {
      setPlaying(false);
      console.error('Audio play failed:', error);

      if (error instanceof DOMException && error.name === 'NotAllowedError') {
        alert('Trình duyệt đã chặn tự động phát nhạc. Hãy thử lại!');
      }
    }
  };

  return (
    <AudioContext.Provider value={{
      playing,
      loading,
      currentTrack,
      userInteracted,
      togglePlay,
      audioRef
    }}>
      {children}
      {currentTrack && (
        <audio
          ref={audioRef}
          src={currentTrack}
          preload="metadata"
          loop
          style={{ display: 'none' }}
        />
      )}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within AudioProvider');
  }
  return context;
}
