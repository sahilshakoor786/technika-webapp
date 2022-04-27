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
          Born from the rage of the technological era, Technika is a perennial
          yearly two-day technical fest organized by the Technical sub-council
          of Harcourt Butler Technical University Kanpur (U.P). Technika
          inherits the idea to surpass the creative artistry among the budding
          minds by real-world problems. This origin will bear the eternal flame
          that will ignite the wings of the phoenix.
        </div>
      </div>
    </section>
  );
}
