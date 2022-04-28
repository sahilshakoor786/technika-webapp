import PrimaryButton from "../PrimaryButton";
import Hls from "hls.js";
import React, { useEffect, useRef, useState } from "react";
import SecondaryButton from "../SecondaryButton";
import src from "gsap/src";

export default function HeroSection() {
  const playerRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    if (Hls.isSupported() && playerRef.current) {
      const video = playerRef.current;
      const hls = new Hls();
      const url =
        "https://d2jf5yk8vvx0ti.cloudfront.net/videos/main_video_2/720p.m3u8";

      hls.loadSource(url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        video.play();
      });
      setSupported(true);
    }
  }, []);

  function playAudio() {
    if (audioRef.current) {
      if (!playing) {
        audioRef.current.volume = 0.2;
        audioRef.current.play();

        setPlaying(true);
      }
    }
  }

  return (
    <section
      id="hero"
      onClick={playAudio}
      className="bg-black h-full min-h-screen relative flex justify-center items-center"
    >
      <audio
        ref={audioRef as React.RefObject<HTMLAudioElement>}
        id="hero-audio"
        src="https://d2jf5yk8vvx0ti.cloudfront.net/audio/audio.aac"
        loop
        className="invisible"
      />
      <video
        className="absolute w-auto min-w-full min-h-full max-w-none bg-black"
        ref={playerRef}
        autoPlay={true}
        loop
        muted
      />

      <div
        className="z-10 relative text-white md:w-1/2  h-1/2
      bg-blue-800/10 backdrop-blur flex flex-col justify-center items-center shadow-lg py-6 px-2 space-y-2 rounded-lg"
      >
        <img
          src="https://d2jf5yk8vvx0ti.cloudfront.net/images/TECHNIKA+LOGO+WHITE.png"
          className="w-20"
        />
        <span className="text-5xl md:text-8xl font-bold text-white font-primary text-center break-all">
          TECHNIKA 22
        </span>
        <span className="text-5xl md:text-6xl font-bold text-white font-primary text-center break-all">
          21 - 22 MAY
        </span>
        <span className="text-2xl md:text-4xl text-white font-primary text-center">
          Unravel la créativité
        </span>

        <span className="flex justify-around space-x-4">
          <a href="/register">
            <PrimaryButton text="Register now" />
          </a>
          <a
            href="https://d2jf5yk8vvx0ti.cloudfront.net/documents/Technika+Official+Brochure+1.pdf"
            download
          >
            <SecondaryButton text="Download Brochure" />
          </a>
        </span>
      </div>
    </section>
  );
}
