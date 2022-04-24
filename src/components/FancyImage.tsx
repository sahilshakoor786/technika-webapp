import gsap from "gsap";
import { EventHandler, MouseEvent, useRef, useState } from "react";

type FancyImageProps = {
  src?: string;
  width: number;
  height: number;
  onClick?: () => void;
};

export default function FancyImage({
  src,
  width,
  height,
  onClick,
}: FancyImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);

  function fancyImageHover(
    e: MouseEvent<HTMLImageElement, globalThis.MouseEvent>
  ) {
    gsap.to(imgRef.current, {
      rotateX: ((e.screenY / 10) % 20) * -Math.sign(e.movementY),
      rotateY: ((e.screenX / 10) % 20) * Math.sign(e.movementX),
      scale: 1.1,
      ease: "ease.in",
      duration: 1,
    });
  }

  function fancyImageOut(
    e: MouseEvent<HTMLImageElement, globalThis.MouseEvent>
  ) {
    gsap.to(imgRef.current, {
      skewX: 0,
      skewY: 0,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      delay: 0.5,
      ease: "ease.out",
    });
  }

  return (
    <div
      className="relative grid place-items-center cursor-pointer"
      style={{ width: width, height: height, perspective: 700, }}
      onMouseMove={fancyImageHover}
      onMouseOut={fancyImageOut}
    >
      <img
        src={src}
        ref={imgRef as React.RefObject<HTMLImageElement>}
        className="shadow-lg absolute rounded-lg rotate-0 scale-100"
        alt="About Image"
        onClick={onClick}
      />
    </div>
  );
}
