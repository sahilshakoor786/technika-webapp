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

  useEffect(() => {toggleAudio();}, [])

  return (
    <div>
      <audio
      ref={audioRef as React.RefObject<HTMLAudioElement>}
        id="hero-audio"
        src="https://d2jf5yk8vvx0ti.cloudfront.net/audio/audio.aac"
        loop
        className="invisible"
      />
    </div>
  );
}
