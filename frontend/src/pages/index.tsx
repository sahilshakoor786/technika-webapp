import Head from "next/head";
import Footer from "../components/Footer";

import Header from "../components/Header";

import AboutSection from "../components/sections/AboutSection";
import EventsSection from "../components/sections/EventsSection";
import HeroSection from "../components/sections/HeroSection";
import SponsorsSection from "../components/sections/SponsorsSection";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Tecknika</title>
        <meta name="description" content="Technical Sub-Council HBTU takes initiative, promotes, conducts, and
          manages all the technical events and activities in HBTU to foster
          technical growth and problem solving among its students" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="overflow-x-hidden bg-black 
      bg-cover bg-fixed bg-main-image">
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <SponsorsSection />
      </main>

      <Footer />
    </div>
  );
}
