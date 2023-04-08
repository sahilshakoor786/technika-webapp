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
    // // <Auth>
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
              Bridge-o-mania
            </h1>
            {/* <Prize prize="4000" /> */}

            <div
              className="w-full grid grid-cols-1 lg:grid-cols-3 
                gap-y-10 place-items-center bg-white/50 py-10 rounded-xl bg-cover bg-fixed"
              style={{
                height: 500,
                backgroundImage: `url("https://drive.google.com/uc?id=1Jzbxt03chMjRVBH-XLXYToB6Stj9HLIq")`,
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
                <span className="text-slate-800 ">CE Seminar Hall
</span>
                <span className="font-primary font-bold text-slate-800 ">
                  Date
                </span>
                <span className="text-slate-800">12 April</span>

                <span className="font-primary font-bold text-slate-800 ">
                  Time
                </span>
                <span className="text-slate-800">12:30PM-2:30PM
</span>
              </div>
            </div>

            <div className="mb-10">
              <SecondaryButton
                text="Register to event"
              //  onClick={handleEventFormPopup}
              form_link='https://forms.gle/RP56rXteVSc2XdtM6'
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
              We didn’t exaggerate when we said we have something for
              everyone.For all the budding engineers out there who are
              fascinated by the architectural amazements, the mechanics and
              structural analysis behind it all we have bridgeo-mania where
              you’ll have to build a bridge of ice cream sticks and it will be
              tested on its load taking capacity and strength.
              <h1 className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5">
                Guidelines: <br />
              </h1>
              • Maximum 3 Members per team. Participants from different
              institutions can form a team. <br />
              • Participants should not bring their own scale, pencil and cutter
              which they require at the time of the event. <br />
              • Adhesives and sticks will be provided on the spot.
              <br />
              • Use of material other than given is not permitted.
              <br />
              • It is not compulsory to use all the sticks.
              <br />
              • Time is limited to minimum 2 hours.
              <br />
              • Shape: Structure could be of absolutely any shape satisfying the
              above constraints. <br />
              • Once the structure is weighed, you are not allowed to modify
              your structure in any way.
              <br />
              • If the structure fails to satisfy any of the above constraints
              then it will be summarily rejected. <br />
              • Any structure that is not ready within the time limit will not
              be evaluated. <br />
              • Judges' decision shall be final and binding on all. <br />
              • Maximum no of member at a joint should be 4. <br />
              • Length (clear span): 40 cm. <br />
              • Bearing (on supports): 2-2.5 cm <br />
              • Width: 10 cm <br />• There should not be any variations in the
              dimensions of the bridge, Limiting to an error of 1 cm in width
              and 2 cm in length. <br />
              {/* <h1 className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5">
                Coordinators: <br />
              </h1>
              Vishwas Badal (3rd B.tech ME):8081315195 */}
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

            <EventRegistrationForm
              eventId="TSCEH01
"
            />
          </div>
        </div>
      </>
    </Layout>
    // // </Auth>
  );
}
