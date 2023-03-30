import gsap from "gsap";
import Link from "next/link";
import { EventHandler, MouseEvent, useRef, useState } from "react";

type TeamImageProps = {
  src?: string;
  width: number;
  height: number;
  onClick?: () => void;
  name?: string;
  position?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
};

export default function TeamImage({
  src,
  width,
  height,
  onClick,
  name,
  position,
  facebook,
  instagram,
  linkedin,
}: TeamImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);

  console.log("ImageURL", src);

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
      style={{
        width: "100%",
        maxWidth: width,
        height: height,
        perspective: 700,
      }}
      onMouseMove={fancyImageHover}
      onMouseOut={fancyImageOut}
    >
      <div
        ref={imgRef as React.RefObject<HTMLImageElement>}
        className="
          shadow-lg 
          absolute rounded-lg rotate-0 scale-100 bg-cover border-2"
        onClick={onClick}
        style={{
          width: width,
          height: height,
          backgroundImage: `url('${src}')`,
        }}
      ></div>
      <div className="flex flex-row mt-44">
        {/* <Link href={`${facebook}`}>
          <img
            src="https://d2jf5yk8vvx0ti.cloudfront.net/images/icons8-facebook.svg"
            className=" h-9 w-9 z-20"
          />
        </Link> */}
        <Link href={`${instagram}`}>
          <img
            src="https://d2jf5yk8vvx0ti.cloudfront.net/images/icons8-instagram.svg"
            className=" h-9 w-9 z-20"
          />
        </Link>
        <Link href={`${linkedin}`}>
          <img
            src="https://d2jf5yk8vvx0ti.cloudfront.net/images/icons8-linkedin-circled.svg"
            className=" h-9 w-9 z-20"
          />
        </Link>
      </div>
      <span className="z-20 mt-1 text-white text-2xl backdrop-blur text-center">
        {name}
      </span>
      <span className="z-20 m-0 text-white text-xl backdrop-blur text-center">
        {position}
      </span>
    </div>
  );
}
