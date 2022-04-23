import PrimaryButton from "../PrimaryButton";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <video
        src="/videos/hero.mp4"
        className="absolute w-auto min-w-full min-h-full max-w-none"
        autoPlay
        loop
        muted
      />

      <div
        className="z-10 relative text-white md:w-1/2 
      bg-blue-800/10 backdrop-blur flex flex-col justify-center shadow-lg py-6 px-2 space-y-2"
      >
        <span className="text-6xl md:text-8xl text-white font-dm-sans text-center break-all">
          #tecknika
        </span>
        <span className="text-5xl md:text-6xl text-white font-dm-sans text-center">
          Go beyond
        </span>

        <span className="flex justify-center">
          <PrimaryButton text="Register now" onClick={() => alert("red")} />
        </span>
      </div>
    </section>
  );
}
