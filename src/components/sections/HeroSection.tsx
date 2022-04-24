import PrimaryButton from "../PrimaryButton";
import Hls from "hls.js";
import React, { useEffect, useRef } from "react";

export default function HeroSection() {
  const playerRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (Hls.isSupported() && playerRef.current) {
      const video = playerRef.current;
      const hls = new Hls();
      const url = "/videos/main_video_2/720p.m3u8";

      hls.loadSource(url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        video.play();
      });
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative flex justify-center h-screen items-center overflow-hidden"
    >
 
      <video
        className="absolute w-auto min-w-full min-h-full max-w-none"
        ref={playerRef}
        autoPlay={true}
        loop
        muted
      />

      <div
        className="z-10 relative text-white md:w-1/2  h-1/2
      bg-blue-800/10 backdrop-blur flex flex-col justify-center shadow-lg py-6 px-2 space-y-2"
      >
        <span className="text-6xl md:text-8xl text-white font-primary text-center break-all">
          TECHNIKA
        </span>
        <span className="text-5xl md:text-6xl text-white font-primary text-center">
          Go beyond
        </span>

        <span className="flex justify-center">
          <PrimaryButton text="Register now" onClick={() => alert("red")} />
        </span>
      </div>
    </section>
  );
}
