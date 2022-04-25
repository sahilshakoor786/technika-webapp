import Layout from "src/components/Layout";

import AboutSection from "../components/sections/AboutSection";
import EventsSection from "../components/sections/EventsSection";
import HeroSection from "../components/sections/HeroSection";
import SponsorsSection from "../components/sections/SponsorsSection";

export default function HomePage() {
  return (
    <Layout>
      <main
        className="overflow-x-hidden bg-black 
      bg-cover bg-fixed bg-main-image"
      >
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <SponsorsSection />
      </main>
    </Layout>
  );
}