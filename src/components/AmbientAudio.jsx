import { useEffect, useRef, useState } from "react";

/**
 * Auto-start ambient audio:
 * - Plays after the first user interaction ANYWHERE on the page
 * - Tiny floating pause/play button (optional control)
 * - MP3 only
 */
export default function AmbientAudio({
  src = "/audio/SriLankan.mp3",
  defaultVolume = 0.25,
  position = "bottom-24 right-4", // Tailwind placement (adjust to avoid WhatsApp button)
  respectPreviousPause = false,   // set true to NOT auto-start if user paused last time
}) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Create the audio element once
  useEffect(() => {
    const el = new Audio(src);
    el.loop = true;
    el.preload = "auto";
    el.crossOrigin = "anonymous";
    el.volume = Math.max(0, Math.min(1, defaultVolume));
    audioRef.current = el;

    // Global first-gesture unlock: start playback on ANY interaction
    const unlock = async () => {
      if (respectPreviousPause) {
        try {
          const saved = JSON.parse(localStorage.getItem("ambientAudioPref") || "{}");
          if (saved.play === false) {
            // user previously paused; don't auto-start
            cleanup();
            return;
          }
        } catch {}
      }
      await safePlay();
      cleanup();
    };

    const add = () => {
      document.addEventListener("click", unlock, { once: true, passive: true });
      document.addEventListener("touchstart", unlock, { once: true, passive: true });
      document.addEventListener("keydown", unlock, { once: true });
    };
    const cleanup = () => {
      document.removeEventListener("click", unlock);
      document.removeEventListener("touchstart", unlock);
      document.removeEventListener("keydown", unlock);
    };

    add();
    return () => {
      cleanup();
      try {
        el.pause();
        el.src = "";
      } catch {}
    };
  }, [src, defaultVolume, respectPreviousPause]);

  const safePlay = async () => {
    const el = audioRef.current;
    if (!el) return;
    try {
      await el.play();       // allowed because it's inside a user gesture (unlock)
      setIsPlaying(true);
      localStorage.setItem("ambientAudioPref", JSON.stringify({ play: true }));
    } catch (e) {
      console.warn("Audio play blocked:", e);
      setIsPlaying(false);
    }
  };

  const handleToggle = async () => {
    const el = audioRef.current;
    if (!el) return;
    if (isPlaying) {
      el.pause();
      setIsPlaying(false);
      localStorage.setItem("ambientAudioPref", JSON.stringify({ play: false }));
    } else {
      // Button click is a user gesture → safe to play
      await safePlay();
    }
  };

  return (
    <div className={`fixed ${position} z-50`}>
      <button
        onClick={handleToggle}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-white/80 hover:bg-white border backdrop-blur transition"
        title={isPlaying ? "Pause" : "Play"}
      >
        <span style={{ fontSize: 20 }}>{isPlaying ? "⏸" : "▶️"}</span>
      </button>
    </div>
  );
}
