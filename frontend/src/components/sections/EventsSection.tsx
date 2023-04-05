import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import FancyImage from "../FancyImage";
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
      gsap.timeline({ paused: true }).to("#event-5", {
        top: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "slow(0.7, 0.7, false)",
      }),
    ]);
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
      <h1 className="text-white font-primary text-5xl my-10 px-10 py-2 backdrop-blur rounded-lg">
        Events
      </h1>

      <div className="flex justify-center items-center space-y-10 md:space-x-10 flex-wrap">
        <FancyImage
          src="https://d2jf5yk8vvx0ti.cloudfront.net/images/istockphoto-638687756-612x612.jpg"
          width={200}
          height={300}
          onClick={() => fancyPopup(1)}
          text="Mech Marvel"
        />
        <FancyImage
          src="https://d2jf5yk8vvx0ti.cloudfront.net/images/istockphoto-1224500457-612x612.jpg"
          width={200}
          height={300}
          onClick={() => fancyPopup(2)}
          text="Game of codes"
        />
        <FancyImage
          src="https://d2jf5yk8vvx0ti.cloudfront.net/images/abstract-robot-thinking-800x450-1.jpg"
          width={200}
          height={300}
          onClick={() => fancyPopup(3)}
          text="Electronics Hub"
        />
        <FancyImage
          src="https://d2jf5yk8vvx0ti.cloudfront.net/images/Strategie-banner-1024x325.png"
          width={200}
          height={300}
          onClick={() => fancyPopup(0)}
          text="Central Events"
        />
        <FancyImage
          src="https://d2jf5yk8vvx0ti.cloudfront.net/images/aero.jpg"
          width={200}
          height={300}
          onClick={() => fancyPopup(4)}
          text="Fly High"
        />
      </div>

      <span className="flex justify-center mt-10">
        <Link href="/events">
          <PrimaryButton text="Explore more events" />
        </Link>
      </span>

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
              className="grid grid-cols-4 gap-1 px-10 overflow-scroll h-full
            text-slate-600"
            >
              <span className="col-span-4 text-center my-10">
                <span className="text-3xl">Central Events</span>
              </span>
              <span className="font-primary font-bold text-slate-800">
                Time
              </span>
              <span className="font-primary font-bold text-slate-800 ">
                Name
              </span>
              <span className="font-primary font-bold text-slate-800">
                Venue
              </span>
              <span className="font-primary font-bold text-slate-800">
                Date
              </span>

              <span className="col-span-4 my-2 h-1 bg-slate-800"></span>


              <span>11AM-1:30PM</span>
              <a href="/events/quiz-me-more">
                <span>QUIZ ME MORE</span>
              </a>
              <span>Auditorium</span>

              <span>12-APRIL</span>

             
              <span>12PM-1PM</span>

              <a href="/events/situation-room">
                <span>SITUATION ROOM</span>
              </a>
              <span>Auditorium</span>

              <span>13-APRIL</span>
              <span>All Day</span>
              <a href="/events/tech-expo">
                <span>TECH EXPO</span>
              </a>
              <span>Between Auditorium and Civil Department</span>
              <span>14-APRIL</span>

              <span>2:30PM-3:30PM</span>
              <a href="/events/celebritytalk">
                <span>Tech Talk</span>
              </a>
              <span>Auditorium</span>
              <span>12-APRIL</span>

              <span>10AM-12PM</span>
              <a href="/events/treasure-hunt">
                <span>TREASURE HUNT</span>
              </a>
              <span>East Campus</span>

              <span>13-APRIL</span>
              <span>7PM-10PM</span>
              <a href="/events/fun-fare">
                <span>FUN FARE</span>
              </a>
              <span>Tennis Lawn</span>

              <span>12-APRIL</span>

              <span>3PM-5PM</span>
              <a href="/events/e-gaming">
                <span>E-Football</span>
              </a>
              <span>EC-1</span>
              <span>14-APRIL</span>
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
              className="grid grid-cols-4 gap-1 px-10 overflow-scroll h-full
            text-slate-600"
            >
              <span className="col-span-4 text-center my-10">
                <span className="text-3xl">Mech Marvel</span>
              </span>
              <span className="font-primary font-bold text-slate-800">
                Time
              </span>
              <span className="font-primary font-bold text-slate-800 ">
                Name
              </span>
              <span className="font-primary font-bold text-slate-800">
                Venue
              </span>
              <span className="font-primary font-bold text-slate-800">
                Date
              </span>

              <span className="col-span-4 my-2 h-1 bg-slate-800"></span>

              <span>9AM-11AM</span>
              <a href="/events/udaan">
                <span>UDAAN</span>
              </a>
              <span>West Campus</span>

              <span>13-April</span>
              <span>3PM-6PM</span>
              <a href="/events/blazing-wheel">
                <span>Roborace</span>
              </a>
              <span>Tennis Lawn</span>

              <span>13-April</span>
              <span>4PM-5PM</span>
              <a href="/events/free-flight">
                <span>FREE-FLIGHT</span>
              </a>
              <span>LV Ground</span>

              <span>12-April</span>
              <span>4PM-5:30PM</span>
              <a href="/events/robo-combat">
                <span>ROBO-WAR</span>
              </a>
              <span>Tennis Lawn</span>

              <span>12-April</span>
              <span>5PM-7PM</span>
              <a href="/events/thread-ripper">
                <span>Robo Wrestling</span>
              </a>
              <span>BE/FT Lawn</span>

              <span>12-April</span>
              <span>9AM-10AM</span>
              <a href="/events/glider">
                <span>Touch Down</span>
              </a>
              <span>West Campus</span>

              <span>14-April</span>

              <span>1PM-2PM</span>
              <a href="/events/kya-engineer">
                <span>KYA ENGINNER BANEGA RE TU</span>
              </a>
              <span>Auditorium</span>

              <span>14-April</span>
              <span>4PM-6PM</span>
              <a href="/events/waterrocket">
                <span>WATER ROCKET</span>
              </a>
              <span>West Campus</span>

              <span>13-April</span>
              <span>10AM-11AM</span>
              <a href="/events/waterrocket">
                <span>Blast Off To Mars</span>
              </a>
              <span>West Campus</span>

              <span>14-April</span>
              <span>4PM-7PM</span>
              <a href="/events/soccerbot">
                <span>Robo-Soccer</span>
              </a>
              <span>Tennis Lawn</span>

              <span>14-April</span>
              
              <span>12:30PM-2:30PM</span>
              <a href="/events/simulation">
                <span>Aircraft Simulation</span>
              </a>
              <span>ME Dept Seminar Hall</span>
              <span>12-April</span>
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
              className="grid grid-cols-4 gap-1 px-10 overflow-scroll h-full
            text-slate-600"
            >
              <span className="col-span-4 text-center my-10">
                <span className="text-3xl">Game Of Codes</span>
              </span>
              <span className="font-primary font-bold text-slate-800">
                Time
              </span>
              <span className="font-primary font-bold text-slate-800 ">
                Name
              </span>
              <span className="font-primary font-bold text-slate-800">
                Venue
              </span>
              <span className="font-primary font-bold text-slate-800">
                Date
              </span>

              <span className="col-span-4 my-2 h-1 bg-slate-800"></span>

              <span>1:15PM-2:15PM</span>
              <a href="/events/break-the-code">
                <span>BREAK THE CODE</span>
              </a>
              <span>Computer Science Department Lab</span>

              <span>13-Apr</span>
              <span>12:00PM-4:00PM</span>
              <a href="/events/hackathon">
                <span>HACKATHON</span>
              </a>
              <span>CSE Lab</span>

              <span>12-Apr</span>
              <span>2:15PM-3:15PM</span>
              <a href="/events/run-time-terror">
                <span>RUN TIME ERROR</span>
              </a>
              <span>DBMS Lab/Internet Lab</span>

              <span>13-Apr</span>
              <span>1:30PM-2:30PM</span>
              <a href="/events/run-time-terror">
                <span>RUN TIME ERROR</span>
              </a>
              <span>DBMS Lab</span>

              <span>14-Apr</span>
              
              {/* <a href="/events/red-pencil">
                <span>RED PENCIL</span>
              </a>
              <span>CSE Seminar Hall</span>

              <span>21-May
</span>
              <span>4PM-5PM</span> */}
              {/* <a href="/events/blank-coding">
                <span>BLANK CODING</span>
              </a>
              <span>DBMS Lab, Internet Lab</span>

              <span>22-May
</span>
              <span>5PM-6PM</span> */}
              <span>12PM-1PM</span>
              <a href="/events/programming-date">
                <span>PROGRAMMING DATE</span>
              </a>
              <span>DBMS Lab</span>
              <span>13-Apr</span>
              <span>12:30PM-1:30PM</span>
              <a href="/events/flip-o-friend">
                <span>FLIP-O-FRIEND</span>
              </a>

              <span>DBMS Lab</span>
              <span>14-Apr</span>
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
              className="grid grid-cols-4 gap-1 px-10 overflow-scroll h-full
            text-slate-600"
            >
              <span className="col-span-4 text-center my-10">
                <span className="text-3xl">ELECTRONICS HUB </span>
              </span>
              <span className="font-primary font-bold text-slate-800">
                Time
              </span>
              <span className="font-primary font-bold text-slate-800 ">
                Name
              </span>
              <span className="font-primary font-bold text-slate-800">
                Venue
              </span>
              <span className="font-primary font-bold text-slate-800">
                Date
              </span>

              <span className="col-span-4 my-2 h-1 bg-slate-800"></span>

              <span>2:15-4:15PM</span>
              <a href="/events/bridge-o-mania">
                <span>BRIDGE-O-MANIA</span>
              </a>
              <span>CE Seminar Hall</span>
              <span>12-April</span>
              {/* <span>3:30PM-5PM</span>
              <a href="/events/city-maestro">
                <span>CITY MAESTRO</span>
              </a>
              <span>Drawing Hall(Civil Department)</span>

              <span>20-May
</span> */}
              <span>2:00-3:30 PM </span>
              <a href="/events/save-the-egg">
                <span>SAVE THE EGG</span>
              </a>
              <span>GH Complex</span>
              <span>12-April</span>

              <span>10:00-11:00 AM</span>
              <a href="/events/anadigilox">
                <span>ANADIGLOGIX</span>
              </a>
              <span>Electronics Department</span>
              <span>14-April</span>

              <span>11:15-1:15 PM</span>
              <a href="/events/circuit-trouble">
                <span>CIRCUIT TROUBLE</span>
              </a>
              <span>Electronics Department</span>
              <span>14-April</span>

              <span>2:00- 3:00 PM</span>
              <a href="/events/morse-laser">
                <span>MORSE LASER</span>
              </a>
              <span>Auditorium</span>
              <span>14-April</span>
            </div>
          </div>
        </div>
        <div
          id="event-5"
          className="fixed w-screen h-screen  top-full left-0 flex justify-center items-center 
        backdrop-blur opacity-0 px-5 z-40 scale-50"
        >
          <div className="w-full max-w-3xl h-2/3 bg-white shadow-lg relative rounded-lg">
            <button
              onClick={() => fancyPopup(4)}
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
              className="grid grid-cols-4 gap-1 px-10 overflow-scroll h-full
            text-slate-600"
            >
              <span className="col-span-4 text-center my-10">
                <span className="text-3xl">Fly High</span>
              </span>
              <span className="font-primary font-bold text-slate-800">
                Time
              </span>
              <span className="font-primary font-bold text-slate-800 ">
                Name
              </span>
              <span className="font-primary font-bold text-slate-800">
                Venue
              </span>
              <span className="font-primary font-bold text-slate-800">
                Date
              </span>

              <span className="col-span-4 my-2 h-1 bg-slate-800"></span>

              <span>9AM-11AM</span>
              <a href="/events/udaan">
                <span>UDAAN</span>
              </a>
              <span>West Campus</span>

              <span>13-April</span>

              <span>4PM-5PM</span>
              <a href="/events/free-flight">
                <span>FREE-FLIGHT</span>
              </a>
              <span>LV Ground</span>

              <span>12-April</span>
              <span>9AM-10AM</span>
              <a href="/events/glider">
                <span>Touch Down</span>
              </a>
              <span>West Campus</span>

              <span>14-April</span>


              <span>12:30PM-2:30PM</span>
              <a href="/events/simulation">
                <span>Aircraft Simulation</span>
              </a>
              <span>ME Dept Seminar Hall</span>
              <span>12-April</span>
            </div>
          </div>
        </div>
      </>
    </section>
  );
}
