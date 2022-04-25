import React, { useEffect, useRef, useState } from "react";

export default function HeroAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  function toggleAudio() {
    if (audioRef.current) {
      if (!playing) {
        audioRef.current.volume = 0.2;
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }

      setPlaying(!playing);
    }
  }

  return (
    <div className="absolute right-10 bottom-10 ">
      <audio
      ref={audioRef as React.RefObject<HTMLAudioElement>}
        id="hero-audio"
        src="https://d2jf5yk8vvx0ti.cloudfront.net/audio/audio.aac"
        loop
        className="invisible"
      />
      <button
        className="w-12 h-12 rounded-full shadow-lg
        grid place-items-center bg-pink-500 transition ease-in-out 
        delay-15 hover:-translate-y-1 hover:scale-110"
        onClick={toggleAudio}
      >
        {playing ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#fff"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#fff"
            viewBox="0 0 16 16"
          >
            <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
          </svg>
        )}
      </button>
    </div>
  );
}
