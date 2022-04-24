import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import FancyImage from "../FancyImage";

export default function AboutSection() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to("#about-image", {
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "top top",
      },
      height: 480,
      opacity: 1,
      delay: 0.5,
      duration: 1,
      ease: "slow(0.7, 0.7, false)",
    });

    gsap.to("#about-text", {
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "top top",
      },
      height: 480,
      opacity: 1,
      duration: 1,
      ease: "slow(0.7, 0.7, false)",
    });
  }, []);

  return (
    <section
      id="about"
      className="h-fit min-h-screen backdrop-blur
      flex-wrap p-10 flex justify-center items-center flex-col"
    >
      <h1 className="text-white font-primary text-5xl my-10">About</h1>

      <div className="flex justify-center items-center md:space-x-10 flex-wrap">
        <span
          id="about-image"
          className="h-0 md:px-10
        opacity-50 overflow-hidden grid place-items-center"
        >
          <FancyImage
            src="https://dummyimage.com/300x400"
            width={300}
            height={400}
          />
        </span>
        <div
          id="about-text"
          className="h-0 opacity-50 overflow-hidden font-primary text-xl text-white text-center max-w-xl 
        grid place-items-center py-10 "
        >
          Technical Sub-Council HBTU takes initiative, promotes, conducts, and
          manages all the technical events and activities in HBTU to foster
          technical growth and problem solving among its students. It is the
          overseer of all technical clubs in HBTU and helps in the management
          and conduction of events/activities in coordination with the clubs.
          Technical Sub-Council through its events strives to give the students
          a platform to learn and understand various technologies that aid
          innovation and development, through various events, seminars and
          activities
        </div>
      </div>
    </section>
  );
}
