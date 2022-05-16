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
                Waterrocket
              </h1>
              <Prize prize="2500" />

              <div
                className="w-full grid grid-cols-1 lg:grid-cols-3 
                gap-y-10 place-items-center bg-white/50 py-10 rounded-xl bg-contain bg-fixed bg-center bg-no-repeat"
                style={{
                  height: 500,
                  backgroundImage: `url("https://d2jf5yk8vvx0ti.cloudfront.net/images/waterrocket.JPG")`,
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
                  <span className="text-slate-800 ">West Campus</span>
                  <span className="font-primary font-bold text-slate-800 ">
                    Date
                  </span>
                  <span className="text-slate-800">21 May</span>

                  <span className="font-primary font-bold text-slate-800 ">
                    Time
                  </span>
                  <span className="text-slate-800">9 AM-11 AM</span>
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
                {" "}
                <h1 className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5">
                  About the Event
                  <br />
                </h1>
                A water rocket is a model rocket that uses water as its reaction
                mass. The water is forced out by a pressurized gas, typically
                compressed air. Like all rocket engines, it operates on the
                principle of Newton's third law of motion. Hobbyists typically
                use one or more plastic soft drink bottle as the rocket's
                pressure vessel. Elements of water rocket: Bottle (used as
                pressure vessel), gas (water rocket can be pressurized using a
                standard bicycle pump, capable of reaching at least 75 psi),
                nozzle, fins, landing system, launch tubes.
                <h1 className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5">
                  Guidelines: <br />
                </h1>
                Round one- the distance covered by the water rocket will be the
                judging criteria. <br />
                Round two- teams qualifying round one will be judged on the
                basis of the landing system employed in their models i.e. how
                precisely the rocket hits the target placed on the ground.{" "}
                <br />
                <h1 className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5">
                  Coordinators: <br />
                </h1>
                Himanshu(3rd B.tech ME): 6392430338 <br /> Vikas(3rd B.tech FT):
                7248338611 <br /> Nikita(3rd B.tech PL):8303290354
              </div>
            </div>
          </main>

          <div
            id="event-popup"
            className="fixed w-screen h-screen  top-full left-0 flex justify-center items-center 
            backdrop-blur opacity-0 px-5 z-40 scale-50"
          >
            <div className="w-full max-w-xl h-97/100 bg-white shadow-lg relative rounded-lg">
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

              <EventRegistrationForm eventId="TSCFH02" />
            </div>
          </div>
        </>
      </Layout>
    </Auth>
  );
}
