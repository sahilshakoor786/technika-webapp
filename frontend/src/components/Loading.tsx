import gsap from "gsap";
import { useEffect } from "react";

export default function Loading() {
  useEffect(() => {
    gsap
      .timeline()
      .to("#loader", {
        rotateZ: 360,
        duration: 2,
      })
      .to("#loader", {
        width: "100%",
        height: "100%",
        duration: 1,
        ease: "slow(0.7, 0.7, false)",
      })
      .to("#loader-container", {
        opacity: 0,
        duration: 1,
      });
  }, []);

  return (
    <div id="loader-container" className="bg-slate-200 w-screen h-screen grid place-items-center top-0 fixed z-50">
      <div id="loader" className="rotate-45 bg-black w-20 h-20"></div>
    </div>
  );
}
