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
      height: 400,
      delay: 0.5
    });
  }, []);

  return (
    <section
      id="about"
      className="h-screen bg-slate-700 p-10 flex justify-center 
      items-center md:space-x-10 flex-wrap"
    >
      <span id="about-image" className="h-0 overflow-hidden">
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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </span>
      </div>
    </section>
  );
}
