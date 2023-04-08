/* eslint-disable @next/next/link-passhref */
import PrimaryButton from "../PrimaryButton";
import Hls from "hls.js";
import React, { useEffect, useRef, useState } from "react";
import SecondaryButton from "../SecondaryButton";
import { getToken, Token } from "src/types/token";
import Link from "next/link";

export default function HeroSection() {
  const playerRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [token, setToken] = useState<Token>();

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
    }
    getUser();
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

  function getUser() {
    const token = getToken();
    setToken(token);
  }

  return (
    <section
      id="hero"
      onClick={playAudio}
      className="h-full min-h-screen relative flex justify-center items-center"
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
          TECHNIKA 23
        </span>
        <span className="text-5xl md:text-6xl font-bold text-white font-primary text-center break-all">
          12 - 14 APRIL
        </span>
        <span className="text-2xl md:text-4xl text-white font-primary text-center">
          Unravel la créativité
        </span>

        <span className="flex justify-around space-x-4">
          {token?.token ? (
            <Link href="/events">
              <PrimaryButton text="View Events" />
            </Link>
          ) : (
            <Link href="/register/form">
              <PrimaryButton text="Register now" />
            </Link>
          )}
          <a
            href="https://drive.google.com/file/d/1LDn44JdgEnrit1PvaWKRNNH2ZP0Dk3OS/view?usp=sharing"
            download
          >
            <SecondaryButton text="Download Brochure" />
          </a>
        </span>
      </div>
    </section>
  );
}
