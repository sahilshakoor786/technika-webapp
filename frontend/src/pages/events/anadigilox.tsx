import gsap from "gsap";

import { useState } from "react";
import Auth from "src/components/Auth";
import EventRegistrationForm from "src/components/EventRegistrationForm";
import Layout from "src/components/Layout";
import SecondaryButton from "src/components/SecondaryButton";
import Prize from "src/components/Prize";

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
              <h1
                className="font-primary text-3xl md:text-5xl text-center 
                mt-32 md:mt-20 mb-10"
              >
                Anadigilogix
              </h1>
              <Prize prize="3000" />
              <div
                className="w-full grid grid-cols-1 lg:grid-cols-3 
                gap-y-10 place-items-center bg-white/50 py-10 rounded-xl bg-cover bg-fixed"
                style={{
                  height: 500,
                  backgroundImage: `url("https://d2jf5yk8vvx0ti.cloudfront.net/images/anadigilox.avif")`,
                }}
              >
                <span className="col-span-2"></span>

                <div
                  className="rounded-lg grid grid-cols-2 gap-2 p-10 
                 backdrop-blur shadow-lg bg-white/30"
                >
                  <span className="font-primary font-bold text-slate-800 ">
                    Venue
                  </span>
                  <span className="text-slate-800 ">
                    Electronics Department
                  </span>
                  <span className="font-primary font-bold text-slate-800 ">
                    Date
                  </span>
                  <span className="text-slate-800">22 May</span>

                  <span className="font-primary font-bold text-slate-800 ">
                    Time
                  </span>
                  <span className="text-slate-800">09-11 AM</span>
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
                <h1 className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5">
                  About the Event
                  <br />
                </h1>
                Be a stiletto in a room full of flats they say. Be a circuit
                designer in a room full of coders they (ET engineers of course)
                say. Y’all will be given a problem for which you’ll whip up a
                solution of digital circuits. There is a team of 3-4
                contestant’s required to design a digital circuit on the basis
                of given problem.
                <h1 className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5">
                  Guidelines: <br />
                </h1>
                ● There should be at most 3 members in a team. <br />
                ● The circuit has to be designed using digital devices. <br />
                ● Microcontrollers and microprocessors are not allowed. <br />
                ● The circuit can be made on breadboard or soldered as per the
                participants wish. <br />
                ● Participants are required to present a detailed description of
                their circuit. <br />
                ● The participants will have to explain the circuit they have
                made. <br />
                ● The decision of the judging committee will be final and
                bounding. <br />
                ● Participants must bring the D.C. power source with them. The
                organisers will provide 220V A.C. supply. No adapters will be
                provided; the participants must bring their own. <br />
                <h1 className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5">
                  Coordinators: <br />
                </h1>
              </div>
            </div>
          </main>

          <div
            id="event-popup"
            className="fixed w-screen h-screen  top-full left-0 flex justify-center items-center 
            backdrop-blur opacity-0 px-5 z-40 scale-50"
          >
            <div className="w-full max-w-xl h-2/3 bg-white shadow-lg relative rounded-lg">
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

              <EventRegistrationForm eventId="TSCEH04" />
            </div>
          </div>
        </>
      </Layout>
    </Auth>
  );
}
