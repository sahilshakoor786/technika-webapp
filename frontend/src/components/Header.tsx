import gsap from "gsap";
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
        backgroundColor: "rgb(236 72 153)",
        ease: "elastic.out(1, 0.3)",
      }),
      gsap.timeline({ paused: true }).to("#menu-button", {
        duration: 0.3,
        rotateZ: -45,
      }),
      gsap.timeline({ paused: true }).to("#drawer-overlay-01", {
        scaleX: 100,
        scaleY: 100,
        opacity: 0,
        duration: 0.9,
        ease: "slow(0.7, 0.7, false)",
      }),
      gsap.timeline({ paused: true }).to("#drawer-overlay-02", {
        scaleX: 100,
        scaleY: 100,
        delay: 0.4,
        duration: 0.7,
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
          className="fixed z-20 right-10 top-10 w-12 h-12 rounded-full bg-pink-500/70 "
        ></div>

        <div
          id="drawer-overlay-02"
          className="fixed z-20 right-10 top-10 w-12 h-12 rounded-full bg-black/70"
        ></div>
      </div>

      <a href="/">
        <img
          src="https://d2jf5yk8vvx0ti.cloudfront.net/images/logo.png"
          className="absolute z-10 w-32 top-10 left-10"
        />
      </a>

      <div
        id="menu-links"
        className="fixed text-white z-20 hidden top-10
        w-full h-full justify-between md:items-center p-20 flex-col-reverse md:flex-row"
      >
        <div className="flex flex-col">
          <span className="h-0 overflow-hidden">
            <a href="#" className="menu-link text-2xl">
              Contact us
            </a>
          </span>
          <span className="h-0 overflow-hidden">
            <a
              href="mailto:support@technika.org.in"
              className="menu-link text-xl"
            >
              support@technika.org.in
            </a>
          </span>
        </div>

        <div className="flex flex-col">
          <span className="h-0 overflow-hidden">
            <a href="/" className="menu-link text-3xl md:text-5xl">
              Home
            </a>
          </span>

          <span className="h-0 overflow-hidden">
            <a
              href="/#about"
              className="menu-link text-3xl md:text-5xl"
              onClick={toggleMenu}
            >
              About
            </a>
          </span>

          <span className="h-0 overflow-hidden">
            <a
              href="/#events"
              className="menu-link text-3xl md:text-5xl"
              onClick={toggleMenu}
            >
              Events
            </a>
          </span>

          <span className="h-0 overflow-hidden">
            <a
              href="/#sponsors"
              className="menu-link text-3xl md:text-5xl"
              onClick={toggleMenu}
            >
              Sponsors
            </a>
          </span>

          <span className="h-0 overflow-hidden">
            <a href="/register" className="menu-link text-3xl md:text-5xl">
              Register
            </a>
          </span>
        </div>
      </div>

      <button
        id="menu-button"
        onClick={toggleMenu}
        className="fixed z-20 right-10 top-10 rounded-full w-12 h-12 bg-blue-900 
        shadow-lg
        grid place-items-center"
      >
        <img
          src="https://d2jf5yk8vvx0ti.cloudfront.net/images/menu.svg"
          className="w-6 h-6"
        />
      </button>
    </header>
  );
}
