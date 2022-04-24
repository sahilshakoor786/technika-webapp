import gsap from "gsap";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);

  const [timelines, setTimelines] = useState<Array<gsap.core.Timeline>>([]);

  useEffect(() => {
    setTimelines([
      gsap.timeline({ paused: true }).to("#menu-button", {
        duration: 0.8,
        scaleX: 1.2,
        scaleY: 1.2,
        ease: "elastic.out(1, 0.3)",
      }),
      gsap.timeline({ paused: true }).to("#menu-button", {
        duration: 0.3,
        rotateZ: -45,
      }),
      gsap.timeline({ paused: true }).to("#drawer-overlay-01", {
        scaleX: 100,
        scaleY: 100,
        duration: 1.2,
        ease: "slow(0.7, 0.7, false)",
      }),
      gsap.timeline({ paused: true }).to("#drawer-overlay-02", {
        scaleX: 100,
        scaleY: 100,
        delay: 0.4,
        duration: 1,
        ease: "slow(0.7, 0.7, false)",
      }),
      gsap.timeline({ paused: true }).to("#menu-links", {
        display: "flex",
      }),
      gsap.timeline({ paused: true }).to("#menu-links span", {
        height: "5em",
        delay: 0.4,
      }),
    ]);
  }, []);

  function toggleMenu() {
    if (!menu) {
      timelines.forEach((timeline) => {
        timeline.play();
      });
    } else {
      timelines.forEach((timeline) => {
        timeline.reverse();
      });
    }
    setMenu(!menu);
  }

  return (
    <header>
      <div id="menu-overlays">
        <div
          id="drawer-overlay-01"
          className="fixed z-20 right-12 top-10 w-10 h-10 rounded-full bg-blue-900/70"
        ></div>

        <div
          id="drawer-overlay-02"
          className="fixed z-20 right-12 top-10 w-10 h-10 rounded-full bg-black/30"
        ></div>
      </div>

      <img src="/images/logo.png" className="absolute z-10 w-32 top-10 left-10" />


      <div
        id="menu-links"
        className="fixed text-white z-20 hidden
        w-full h-full justify-between items-center p-20 flex-col-reverse md:flex-row"
      >
        <div className="flex flex-col space-y-0">
          <span className="h-0 overflow-hidden">
            <a href="#" className="menu-link text-3xl">
              Contact us
            </a>
          </span>
          <span className="h-0 overflow-hidden">
            <a href="mailto:info@technika.com" className="menu-link text-3xl">
              info@technika.com
            </a>
          </span>
        </div>

        <div className="flex flex-col space-y-3">
          <span className="h-0 overflow-hidden">
            <a href="/" className="menu-link text-7xl">
              Home
            </a>
          </span>

          <span className="h-0 overflow-hidden">
            <a href="/#events" className="menu-link text-7xl">
              Events
            </a>
          </span>

          <span className="h-0 overflow-hidden">
            <a href="/#" className="menu-link text-7xl">
              Register
            </a>
          </span>

          <span className="h-0 overflow-hidden">
            <a href="/#sponsors" className="menu-link text-7xl">
              Sponsors
            </a>
          </span>
        </div>
      </div>

      <button
        id="menu-button"
        onClick={toggleMenu}
        className="fixed z-20 right-10 top-10 rounded-full w-14 h-14 bg-blue-900 
        shadow-lg
        grid place-items-center"
      >
        <img src="/images/menu.svg" className="w-8 h-8" />
      </button>
    </header>
  );
}
