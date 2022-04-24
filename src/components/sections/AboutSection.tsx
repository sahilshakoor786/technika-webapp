import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import FancyImage from "../FancyImage";

export default function AboutSection() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to("#about-text", {
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "top top",
        scrub: 1,
      },
      height: 400,
      duration: 1,
    });

    gsap.to("#about-image", {
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "top top",
        scrub: 1,
      },
      height: 440,
      delay: 0.5
    });
  }, []);

  return (
    <section
      id="about"
      className="h-full min-h-screen bg-slate-700 p-10 flex justify-center 
      items-center md:space-x-10 flex-wrap"
    >
      <span id="about-image" className="h-0 w-full max-w-xl overflow-hidden flex justify-center">
        <FancyImage
          src="https://dummyimage.com/300x400"
          width={300}
          height={400}
        />
      </span>

      <div
        id="about-text"
        className="font-primary text-xl text-white text-left max-w-xl relative h-0 overflow-hidden grid place-items-center"
      >
        <span>
          Technical Sub-Council HBTU takes initiative, promotes, conducts,
          and manages all the technical events and activities in HBTU to foster technical growth and problem solving among its students. 
          It is the overseer of all technical clubs in HBTU and helps in the management and conduction of events/activities in coordination with the clubs.
          Technical Sub-Council through its events strives to give the students a platform to learn and understand various technologies that aid innovation and development, 
          through various events, seminars and activities
        </span>
      </div>
    </section>
  );
}
