import gsap from "gsap";
import { MouseEvent } from "react";

export function FakeMouseMoveHandler(
  e: MouseEvent<HTMLImageElement, globalThis.MouseEvent>
) {
  var x = e.clientX;
  var y = e.clientY;

  gsap.to("#fake-mouse", {
    top: y - 25,
    left: x - 25,
    duration: 1,
    ease: "slow(0.7, 0.7, false)",
  });
}

export function FakeMouseActiveHandler() {
  gsap.to("#fake-mouse", {
    scale: 1.5,
    duration: 1,
    ease: "slow(0.7, 0.7, false)",
  });
}

export function FakeMouseInactiveHandler() {
  gsap.to("#fake-mouse", {
    scale: 1,
    duration: 1,
    ease: "slow(0.7, 0.7, false)",
  });
}

export default function FakeMouse() {
  return (
    <span
      id="fake-mouse"
      className=" pointer-events-none invisible md:visible
      w-10 h-10 border-2 border-pink-500 rounded-full shadow bg-pink-500/10 backdrop-blur-sm fixed top-1/2 left-1/2 z-50"
    ></span>
  );
}
