import Layout from "src/components/Layout";
import React, { useEffect, useRef, useState } from "react";
import AboutSection from "../components/sections/AboutSection";
import EventsSection from "../components/sections/EventsSection";
import HeroSection from "../components/sections/HeroSection";
import SponsorsSection from "../components/sections/SponsorsSection";

export default function HomePage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  return (
    <Layout>
      <main
        className="overflow-x-hidden bg-black 
      bg-cover bg-fixed bg-main-image"
        onClick={() => {
          if (!playing) {
            const audio = new Audio(
              "https://d2jf5yk8vvx0ti.cloudfront.net/audio/audio.aac"
            );

            audio.volume = 0.2;
            audio.play();
            setPlaying(!playing);
          }
        }}
      >
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <SponsorsSection />
      </main>
    </Layout>
  );
}
