import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import React, { useEffect, useState } from "react";
import FancyImage from "../FancyImage";
import Image from "next/image";
import PrimaryButton from "../PrimaryButton";

export default function EventsSection() {
  gsap.registerPlugin(ScrollTrigger);

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

    gsap.to(".fancy-image", {
      scrollTrigger: {
        trigger: "#events",
        start: "top center",
        end: "top top",
      },
      height: 340,
      opacity: 1,
      // stagger: {
      //   grid: [1, 4],
      //   from: "center",
      //   amount: 1.5,
      // },
      duration: 1,
      ease: "slow(0.7, 0.7, false)",
    });
  }, []);

  function fancyPopup(index: number) {
    if (!popup) {
      timelines[index].play();
    } else {
      timelines[index].reverse();
    }
    setPopup(!popup);
  }

  return (
    <section
      id="events"
      className="h-full min-h-screen bg-events-image bg-cover
      flex-wrap p-10 flex justify-center items-center flex-col"
    >
      <h1 className="text-white font-primary text-5xl my-10">Events</h1>

      <div className="flex justify-center items-center md:space-x-10 flex-wrap">
        <span
          className="fancy-image h-0 opacity-25 overflow-hidden px-10 
        flex justify-center items-center"
        >
          <FancyImage
            src="https://d2jf5yk8vvx0ti.cloudfront.net/images/Strategie-banner-1024x325.png"
            width={200}
            height={300}
            onClick={() => fancyPopup(0)}
            text="Central Events"
          />
        </span>
        <span
          className="fancy-image h-0 opacity-25 overflow-hidden px-10 
        flex justify-center items-center"
        >
          <FancyImage
            src="https://d2jf5yk8vvx0ti.cloudfront.net/images/istockphoto-638687756-612x612.jpg"
            width={200}
            height={300}
            onClick={() => fancyPopup(1)}
            text="Mech Marvel"
          />
        </span>
        <span
          className="fancy-image h-0 opacity-25 overflow-hidden px-10 
        flex justify-center items-center"
        >
          <FancyImage
            src="https://d2jf5yk8vvx0ti.cloudfront.net/images/istockphoto-1224500457-612x612.jpg"
            width={200}
            height={300}
            onClick={() => fancyPopup(2)}
            text="Game of codes"
          />
        </span>
        <span
          className="fancy-image h-0 opacity-25 overflow-hidden px-10
        flex justify-center items-center"
        >
          <FancyImage
            src="https://d2jf5yk8vvx0ti.cloudfront.net/images/abstract-robot-thinking-800x450-1.jpg"
            width={200}
            height={300}
            onClick={() => fancyPopup(3)}
            text="Electronics Hub"
          />
        </span>

        <span className="flex justify-center">
          <a href="/events">
            <PrimaryButton text="Explore more events" />
          </a>
        </span>
      </div>

      <>
        <div
          id="event-1"
          className="fixed w-screen h-screen  top-full left-0 flex justify-center items-center 
        backdrop-blur opacity-0 px-5 z-40 scale-50"
        >
          <div className="w-full max-w-3xl h-2/3 bg-white shadow-lg relative rounded-lg">
            <button
              onClick={() => fancyPopup(0)}
              className="transition ease-in-out delay-15 z-20 -right-4 -top-4 
              absolute rounded-full w-12 h-12 bg-pink-500 
              shadow-lg grid place-items-center hover:scale-110"
            >
              <img
                src="https://d2jf5yk8vvx0ti.cloudfront.net/images/close.svg"
                className="w-6 h-6"
              />
            </button>

            <div
              className="grid grid-cols-3 gap-2 px-10 overflow-scroll h-full
            text-slate-600 font-primary"
            >
              <span className="col-span-3 text-center my-10">
                <span className="text-3xl">Central Events</span>
              </span>
              <span className="font-bold text-slate-800">Time</span>
              <span className="font-bold text-slate-800 ">Name</span>
              <span className="font-bold text-slate-800">Venue</span>

              <span className="col-span-3 my-2 h-1 bg-slate-800"></span>

              <span>TBD</span>
              <span>TECHNIKA</span>
              <span>Mechnical Seminar hall</span>

              <span>TBD</span>
              <span>JUNKYARD</span>
              <span>Garden of bliss, Be-ft lawn</span>

              <span>TBD</span>
              <span>QUIZ YARD</span>
              <span>Auditorium</span>

              <span>TBD</span>
              <span>SITUATION REACTION</span>
              <span>Auditorium</span>

              <span>TBD</span>
              <span>Tech Expo</span>
              <span>Between auditorium and civil department</span>

              <span>TBD</span>
              <span>Laser-o-Reflect</span>
              <span>Atal Seminar Hall</span>

              <span>TBD</span>
              <span>Squid Game</span>
              <span>Garden of bliss, Be-ft lawn</span>
            </div>
          </div>
        </div>

        <div
          id="event-2"
          className="fixed w-screen h-screen  top-full left-0 flex justify-center items-center 
        backdrop-blur opacity-0 px-5 z-40 scale-50"
        >
          <div className="w-full max-w-3xl h-2/3 bg-white shadow-lg relative rounded-lg">
            <button
              onClick={() => fancyPopup(1)}
              className="transition ease-in-out delay-15 z-20 -right-4 -top-4 
              absolute rounded-full w-12 h-12 bg-pink-500 
              shadow-lg grid place-items-center hover:scale-110"
            >
              <img
                src="https://d2jf5yk8vvx0ti.cloudfront.net/images/close.svg"
                className="w-6 h-6"
              />
            </button>

            <div
              className="grid grid-cols-3 gap-2 px-10 overflow-scroll h-full
            text-slate-600 font-primary"
            >
              <span className="col-span-3 text-center my-10">
                <span className="text-3xl">Mech Marvel</span>
              </span>
              <span className="font-bold text-slate-800">Time</span>
              <span className="font-bold text-slate-800 ">Name</span>
              <span className="font-bold text-slate-800">Venue</span>

              <span className="col-span-3 my-2 h-1 bg-slate-800"></span>

              <span>TBD</span>
              <span>ROBO-COMBAT</span>
              <span>-</span>

              <span>TBD</span>
              <span>SOCCERBOT</span>
              <span>Garden of bliss</span>

              <span>TBD</span>
              <span>GRIPPERBOT</span>
              <span>Garden of bliss</span>

              <span>TBD</span>
              <span>WATER ROCKET</span>
              <span>LV Old ground, West Campus</span>

              <span>TBD</span>
              <span>UDAAN</span>
              <span>LV Old ground, West Campus</span>

              <span>TBD</span>
              <span>La-trajectoire</span>
              <span>LV Old ground, Be-Ft lawn</span>

              <span>TBD</span>
              <span>Hover Mania</span>
              <span>Garden of bliss</span>

              <span>TBD</span>
              <span>Robominton</span>
              <span>Garden of bliss</span>
            </div>
          </div>
        </div>

        <div
          id="event-3"
          className="fixed w-screen h-screen  top-full left-0 flex justify-center items-center 
        backdrop-blur opacity-0 px-5 z-40 scale-50"
        >
          <div className="w-full max-w-3xl h-2/3 bg-white shadow-lg relative rounded-lg">
            <button
              onClick={() => fancyPopup(2)}
              className="transition ease-in-out delay-15 z-20 -right-4 -top-4 absolute rounded-full w-12 h-12 bg-pink-500 
    shadow-lg grid place-items-center hover:scale-110"
            >
              <img
                src="https://d2jf5yk8vvx0ti.cloudfront.net/images/close.svg"
                className="w-6 h-6"
              />
            </button>

            <div
              className="grid grid-cols-3 gap-2 px-10 overflow-scroll h-full
            text-slate-600 font-primary"
            >
              <span className="col-span-3 text-center my-10">
                <span className="text-3xl">Game Of Codes</span>
              </span>
              <span className="font-bold text-slate-800">Time</span>
              <span className="font-bold text-slate-800 ">Name</span>
              <span className="font-bold text-slate-800">Venue</span>

              <span className="col-span-3 my-2 h-1 bg-slate-800"></span>

              <span>TBD</span>
              <span>RUN TIME TERROR</span>
              <span>DBMS Lab, Internet Lab</span>

              <span>TBD</span>
              <span>CODIGO</span>
              <span>DBMS Lab, Internet Lab</span>

              <span>TBD</span>
              <span>BREAK THE CODE</span>
              <span>DBMS Lab, Internet Lab</span>

              <span>TBD</span>
              <span>FLIP-O-FRIEND</span>
              <span>DBMS Lab, Internet Lab</span>

              <span>TBD</span>
              <span>RED PENCIL</span>
              <span>Seminar hall, CSE Department</span>

              <span>TBD</span>
              <span>RASTERIZE</span>
              <span>DBMS Lab, Internet Lab</span>

              <span>TBD</span>
              <span>Programming date </span>
              <span>DBMS Lab, Internet Lab</span>

              <span>TBD</span>
              <span>Replica</span>
              <span>DBMS Lab, Internet Lab</span>

              <span>TBD</span>
              <span>CHEM-CAR</span>
              <span>in front of the auditorium, tennis court</span>

              <span>TBD</span>
              <span>MESHMERIZE</span>
              <span>Civil Departement</span>
            </div>
          </div>
        </div>

        <div
          id="event-4"
          className="fixed w-screen h-screen  top-full left-0 flex justify-center items-center 
        backdrop-blur opacity-0 px-5 z-40 scale-50"
        >
          <div className="w-full max-w-3xl h-2/3 bg-white shadow-lg relative rounded-lg">
            <button
              onClick={() => fancyPopup(3)}
              className="transition ease-in-out delay-15 z-20 -right-4 -top-4 absolute rounded-full w-12 h-12 bg-pink-500 
    shadow-lg grid place-items-center hover:scale-110"
            >
              <img
                src="https://d2jf5yk8vvx0ti.cloudfront.net/images/close.svg"
                className="w-6 h-6"
              />
            </button>

            <div
              className="grid grid-cols-3 gap-2 px-10 overflow-scroll h-full
            text-slate-600 font-primary"
            >
              <span className="col-span-3 text-center my-10">
                <span className="text-3xl">ELECTRONICS HUB </span>
              </span>
              <span className="font-bold text-slate-800">Time</span>
              <span className="font-bold text-slate-800 ">Name</span>
              <span className="font-bold text-slate-800">Venue</span>

              <span className="col-span-3 my-2 h-1 bg-slate-800"></span>

              <span>TBD</span>
              <span>ANADIGILOGIX</span>
              <span>Internet Lab CS Department</span>

              <span>TBD</span>
              <span>CIRCUIT DESIGNING</span>
              <span>Internet Lab CS Department</span>

              <span>TBD</span>
              <span>BRIDGE-O-MANIA</span>
              <span>Civil department</span>

              <span>TBD</span>
              <span>CITY MAESTRO</span>
              <span>Drawing Hall Civil Department</span>

              <span>TBD</span>
              <span>SAVE THE EGG</span>
              <span>civil department, COE office main building</span>
            </div>
          </div>
        </div>
      </>
    </section>
  );
}
