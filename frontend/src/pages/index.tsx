import Layout from "src/components/Layout";
import React, { useEffect, useRef, useState } from "react";
import AboutSection from "../components/sections/AboutSection";
import EventsSection from "../components/sections/EventsSection";
import HeroSection from "../components/sections/HeroSection";
import SponsorsSection from "../components/sections/SponsorsSection";
import { getToken, setUser, Token } from "src/types/token";
import { axiosInstance } from "src/utils/axios";
export default function HomePage() {
  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    const token = getToken();

    if (token) {
      axiosInstance
        .get(`/me`, {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        })
        .then((res) => {
          console.log(res.data.user);

          setUser(res.data.user);
        });
    }
  }
  return (
    <Layout>
      <main className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <SponsorsSection />
      </main>
    </Layout>
  );
}
