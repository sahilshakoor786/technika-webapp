import gsap from "gsap";

import React, { useEffect, useRef, useState } from "react";
import FancyImage from "../FancyImage";

export default function EventsSection() {
  const [popup, setPopup] = useState(false);
  const [timelines, setTimelines] = useState<Array<gsap.core.Timeline>>([]);

  useEffect(() => {
    setTimelines([
      gsap.timeline({ paused: true }).to("#event-1", {
        top: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "slow(0.7, 0.7, false)",
      }),
      gsap.timeline({ paused: true }).to("#event-2", {
        top: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "slow(0.7, 0.7, false)",
      }),
      gsap.timeline({ paused: true }).to("#event-3", {
        top: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "slow(0.7, 0.7, false)",
      }),
      gsap.timeline({ paused: true }).to("#event-4", {
        top: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "slow(0.7, 0.7, false)",
      }),
    ]);
  }, []);

  function fancyPopup(index: number) {
    if (popup) {
      timelines[index].play();
    } else {
      timelines[index].reverse();
    }
    setPopup(!popup);
  }

  return (
    <>
      <section
        id="events"
        className="h-full min-h-screen bg-slate-400
         flex-wrap px-10 flex justify-center items-center flex-col"
      >
        <h1 className="font-primary text-5xl my-4">Events</h1>

        <div className=" flex justify-center items-center md:space-x-10 flex-wrap">
          <FancyImage
            src="https://dummyimage.com/300x400"
            width={200}
            height={300}
            onClick={() => fancyPopup(0)}
          />

          <FancyImage
            src="https://dummyimage.com/300x400"
            width={200}
            height={300}
            onClick={() => fancyPopup(1)}
          />

          <FancyImage
            src="https://dummyimage.com/300x400"
            width={200}
            height={300}
            onClick={() => fancyPopup(2)}
          />

          <FancyImage
            src="https://dummyimage.com/300x400"
            width={200}
            height={300}
            onClick={() => fancyPopup(3)}
          />
        </div>
      </section>

      <div
        id="event-1"
        className="fixed w-screen h-screen  top-full flex justify-center items-center 
        backdrop-blur opacity-0 px-5 z-40 scale-50"
      >
        <div className="w-full max-w-5xl h-2/3 bg-white shadow-lg relative rounded-lg">
          <button
            onClick={() => fancyPopup(0)}
            className="transition ease-in-out delay-15 z-20 right-4 top-4 absolute rounded-full w-12 h-12 bg-pink-500 
              shadow-lg grid place-items-center hover:scale-110"
          >
            <img src="/images/close.svg" className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div
        id="event-2"
        className="fixed w-screen h-screen  top-full flex justify-center items-center 
        backdrop-blur opacity-0 px-5 z-40 scale-50"
      >
        <div className="w-full max-w-5xl h-2/3 bg-white shadow-lg relative rounded-lg">
          <button
            onClick={() => fancyPopup(1)}
            className="transition ease-in-out delay-15 z-20 right-4 top-4 absolute rounded-full w-12 h-12 bg-pink-500 
    shadow-lg grid place-items-center hover:scale-110"
          >
            <img src="/images/close.svg" className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div
        id="event-3"
        className="fixed w-screen h-screen  top-full flex justify-center items-center 
        backdrop-blur opacity-0 px-5 z-40 scale-50"
      >
        <div className="w-full max-w-5xl h-2/3 bg-white shadow-lg relative rounded-lg">
          <button
            onClick={() => fancyPopup(2)}
            className="transition ease-in-out delay-15 z-20 right-4 top-4 absolute rounded-full w-12 h-12 bg-pink-500 
    shadow-lg grid place-items-center hover:scale-110"
          >
            <img src="/images/close.svg" className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div
        id="event-4"
        className="fixed w-screen h-screen  top-full flex justify-center items-center 
        backdrop-blur opacity-0 px-5 z-40 scale-50"
      >
        <div className="w-full max-w-5xl h-2/3 bg-white shadow-lg relative rounded-lg">
          <button
            onClick={() => fancyPopup(3)}
            className="transition ease-in-out delay-15 z-20 right-4 top-4 absolute rounded-full w-12 h-12 bg-pink-500 
    shadow-lg grid place-items-center hover:scale-110"
          >
            <img src="/images/close.svg" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </>
  );
}
