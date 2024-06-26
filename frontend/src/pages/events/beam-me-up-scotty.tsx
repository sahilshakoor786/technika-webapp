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
    // <Auth>
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
              Beam me up, Scotty
            </h1>
            {/* <Prize prize="5000" /> */}

            <div
              className="w-full grid grid-cols-1 lg:grid-cols-3 
                gap-y-10 place-items-center bg-white/50 py-10 rounded-xl bg-cover bg-fixed bg-left"
              style={{
                height: 500,
                backgroundImage: `url("https://drive.google.com/uc?id=1LrSh36FF12iZ59F1iZG7IZCU5qiHarqL")`,
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
                <span className="text-slate-800 ">East Campus</span>
                <span className="font-primary font-bold text-slate-800 ">
                  Date
                </span>
                <span className="text-slate-800">13 April</span>

                <span className="font-primary font-bold text-slate-800 ">
                  Time
                </span>
                <span className="text-slate-800">10AM-12PM</span>
              </div>
            </div>

            <div className="mb-10">
              <SecondaryButton
                text="Register to event"
                //onClick={handleEventFormPopup}
                form_link="https://forms.gle/QzygmnANBhzMRz9J7"
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
              Well what is any fest without a good, mind boggling,
              discombobulating (big fests need big words defining it) treasure
              hunt based on your technical and basic scientific knowledge. This
              is a treasure hunt event in which the teams would be provided with
              clues and these clues consecutively will lead to the hidden parts
              which would be required to build the final setup. The first team
              who decodes all the clues and build the whole setup properly will
              be the winner of this event.
              <h1 className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5">
                Guidelines: <br />
              </h1>
              • It can have maximum team member up to 6. With specified team
              Leader. <br />• Each team would be given a specified task and team
              which complete the given task in minimum time will be the winner.{" "}
              <br />
              • The competition area has a special place defined for the
              Treasure Hunt. <br />
              • It has 1 Round and this final round. <br />
              {/* <h1 className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5">
                Coordinators: <br />
              </h1>
              Rajat Gupta (3rd B.tech ET): 9839120812 <br />
              Deepak Singh Rathore (3rd B.tech ET): 9453112831 <br /> */}
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

            {/* <EventRegistrationForm
              eventId="TSCCE09
"
            /> */}
          </div>
        </div>
      </>
    </Layout>
    // </Auth>
  );
}
