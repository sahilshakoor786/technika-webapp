import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useEffect, useState } from "react";
import Auth from "src/components/Auth";
import EventRegistrationForm from "src/components/EventRegistrationForm";
import FancyImage from "src/components/FancyImage";
import Layout from "src/components/Layout";
import SecondaryButton from "src/components/SecondaryButton";

export default function Page() {
  const [popup, setPopup] = useState(false);

  function handleEventFormPopup() {
    if (!popup) {
      gsap.to("#event-popup", {
        top: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "slow(0.7, 0.7, false)",
      });
    } else {
      gsap.to("#event-popup", {
        top: "100%",
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        ease: "slow(0.7, 0.7, false)",
      });
    }
    setPopup(!popup);
  }

  return (
    <Auth>
      <Layout>
        <>
          <main
            className="h-full min-h-screen overflow-x-hidden 
          flex justify-center items-center"
          >
            <div
              className="p-10 relative text-white md:w-3/4  h-1/2
            bg-blue-800/10 backdrop-blur flex flex-col justify-center
              shadow-lg py-6 px-2 space-y-2 rounded-lg place-items-center"
            >
              <h1 className="font-primary text-3xl md:text-5xl text-center sm:mt-32 md:mt-20 mb-10">
                Sample event
              </h1>

              <div
                className="w-full grid grid-cols-1 lg:grid-cols-3 gap-y-10 place-items-center 
              bg-white/50 py-10"
              >
                <span className="col-span-2">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/20220310191740__MG_8620.JPG"
                    width={530}
                    height={300}
                  />
                </span>

                <div
                  className="w-full grid grid-cols-2 gap-2 px-10 text-slate-600 
                rounded-full"
                >
                  <span className="font-bold text-slate-800">Name</span>
                  <span>Sample event</span>

                  <span className="font-bold text-slate-800 ">Venue</span>
                  <span>Seminar Hall</span>

                  <span className="font-bold text-slate-800 ">Time</span>
                  <span>TBH</span>
                </div>
              </div>

              <div className="mb-10">
                <SecondaryButton
                  text="Register to event"
                  onClick={handleEventFormPopup}
                />
              </div>

              <div
                className="overflow-hidden font-sans text-xl 
              text-white text-center max-w-xl"
              >
                Born from the rage of the technological era, Technika is a
                perennial yearly three-day technical fest organized by the
                Technical sub-council of Harcourt Butler Technical University
                Kanpur (U.P). Technika inherits the idea to surpass the creative
                artistry among the budding minds by real-world problems. This
                origin will bear the eternal flame that will ignite the wings of
                the phoenix.
              </div>
            </div>
          </main>

          <div
            id="event-popup"
            className="fixed w-screen h-screen  top-full left-0 flex justify-center items-center 
            backdrop-blur opacity-0 px-5 z-40 scale-50"
          >
            <div className="w-full max-w-3xl h-2/3 bg-white shadow-lg relative rounded-lg">
              <button
                onClick={handleEventFormPopup}
                className="transition ease-in-out delay-15 z-20 -right-4 -top-4 
              absolute rounded-full w-12 h-12 bg-pink-500 
              shadow-lg grid place-items-center hover:scale-110"
              >
                <img
                  src="https://d2jf5yk8vvx0ti.cloudfront.net/images/close.svg"
                  className="w-6 h-6"
                />
              </button>

              <EventRegistrationForm eventId="TSCCE01" />
            </div>
          </div>
        </>
      </Layout>
    </Auth>
  );
}
