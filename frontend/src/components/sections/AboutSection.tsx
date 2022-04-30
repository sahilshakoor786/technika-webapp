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
      height: 380,
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
      height: 380,
      opacity: 1,
      duration: 1,
      ease: "slow(0.7, 0.7, false)",
    });
  }, []);

  return (
    <section
      id="about"
      className="h-fit min-h-screen bg-cover bg-main-image
      flex-wrap p-10 flex justify-center items-center flex-col"
    >
      <h1 className="text-white font-primary text-5xl my-10 px-10 py-2 backdrop-blur rounded-lg">
        About
      </h1>

      <div className="flex justify-center items-center md:space-x-10 flex-wrap backdrop-blur rounded">
        <span
          id="about-image"
          className="h-0 md:px-10 w-full
        opacity-50 overflow-hidden grid place-items-center"
          style={{ maxWidth: 650 }}
        >
          <FancyImage
            src="https://d2jf5yk8vvx0ti.cloudfront.net/images/20220310191440__MG_8605.JPG"
            width={500}
            height={300}
          />
        </span>
        <div
          id="about-text"
          className="h-0 opacity-50
          overflow-hidden font-sans text-xl text-white text-center max-w-xl 
          grid place-items-center "
        >
          Born from the rage of the technological era, Technika is a perennial
          yearly three-day technical fest organized by the Technical sub-council
          of Harcourt Butler Technical University Kanpur (U.P). Technika
          inherits the idea to surpass the creative artistry among the budding
          minds by real-world problems. This origin will bear the eternal flame
          that will ignite the wings of the phoenix.
        </div>
      </div>
    </section>
  );
}
