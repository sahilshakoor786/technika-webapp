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
      },
      height: 400,
      opacity: 1,
      duration: 2,
      ease: "slow(0.7, 0.7, false)",
    });
  }, []);

  return (
    <section
      id="about"
      className="h-screen bg-slate-700 p-10 flex justify-center 
      items-center md:space-x-10 flex-wrap"
    >
      <FancyImage
        src="https://dummyimage.com/300x400"
        width={300}
        height={400}
      />

      <div
        id="about-text"
        className="font-primary text-xl text-white  opacity-0 text-left max-w-xl relative h-0 overflow-hidden grid place-items-center"
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
