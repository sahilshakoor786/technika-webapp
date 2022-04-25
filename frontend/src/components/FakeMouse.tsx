import gsap from "gsap";
import { MouseEvent } from "react";

export function FakeMouseMoveHandler(
  e: MouseEvent<HTMLImageElement, globalThis.MouseEvent>
) {
  var x = e.clientX;
  var y = e.clientY;

  gsap.to("#fake-mouse", {
    top: y,
    left: x,
    duration: 1,
    ease: "slow(0.7, 0.7, false)",
  });
}

export function FakeMouseActiveHandler() {
  gsap.to("#fake-mouse", {
    scale: 2,
    rotateZ: 45,
    borderRadius: 0,
    duration: 1,
    ease: "slow(0.7, 0.7, false)",
  });
}

export function FakeMouseInactiveHandler() {
  gsap.to("#fake-mouse", {
    scale: 1,
    opacity: 1,
    rotateZ: 0,
    borderRadius: "100%",
    duration: 1,
    ease: "slow(0.7, 0.7, false)",
  });
}

export default function FakeMouse() {
  return (
    <span
      id="fake-mouse"
      className=" pointer-events-none invisible md:visible drop-shadow-lg
      w-4 h-4 rounded-full bg-pink-700 fixed top-1/2 left-1/2 z-50"
    ></span>
  );
}
