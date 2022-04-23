import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import FancyImage from "../FancyImage";

export default function AboutSection() {
  gsap.registerPlugin(ScrollTrigger);

  const aboutText = `
    Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.`;

  useEffect(() => {
    gsap.to("#about-text", {
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "top top",
        scrub: true,
      },
      height: 400,
      opacity: 1,
      delay: 0.5,
      duration: 1,
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
        className="font-dm-sans text-xl text-white  opacity-0
      font-bold text-left max-w-xl relative h-0 overflow-hidden"
      >
        {aboutText.split(/[ \t\n]/g).map((word, i) => (
          <span key={i} className="transition hover:bg-pink-500 cursor-default">
            {word}{" "}
          </span>
        ))}
      </div>
    </section>
  );
}
