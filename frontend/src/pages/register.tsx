import Head from "next/head";
import Footer from "../components/Footer";

import Header from "../components/Header";

import AboutSection from "../components/sections/AboutSection";
import EventsSection from "../components/sections/EventsSection";
import HeroSection from "../components/sections/HeroSection";
import SponsorsSection from "../components/sections/SponsorsSection";

export default function RegisterPage() {
  return (
    <div>
      <Head>
        <title>Tecknika - Rewgister</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main
        className="overflow-x-hidden bg-black 
      bg-cover bg-fixed bg-main-image h-screen flex justify-center items-center"
      >
        <div
          className="-10 relative text-white md:w-1/2  h-1/2
      bg-blue-800/10 backdrop-blur flex flex-col justify-center shadow-lg py-6 px-2 space-y-2 rounded-lg"
        >
          <h1 className="font-primary text-3xl md:text-5xl text-center">Registrations not started yet</h1>
        </div>
      </main>

      <Footer />
    </div>
  );
}
