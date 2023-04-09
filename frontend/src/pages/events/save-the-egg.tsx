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
              Save the egg
            </h1>
            {/* <Prize prize="1500" /> */}

            <div
              className="w-full grid grid-cols-1 lg:grid-cols-3 
                gap-y-10 place-items-center bg-white/50 py-10 rounded-xl bg-cover bg-fixed"
              style={{
                height: 500,
                backgroundImage: `url("https://d2jf5yk8vvx0ti.cloudfront.net/images/savetheegg.jpg")`,
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
                <span className="text-slate-800 ">Main Building</span>
                <span className="font-primary font-bold text-slate-800 ">
                  Date
                </span>
                <span className="text-slate-800">14 April</span>

                <span className="font-primary font-bold text-slate-800 ">
                  Time
                </span>
                <span className="text-slate-800">2:30PM-4:00PM</span>
              </div>
            </div>

            <div className="mb-10">
              <SecondaryButton
                text="Register to event"
                //onClick={handleEventFormPopup}
                form_link="https://forms.gle/ZmTwCJ3s6Zm8ba1m8"
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
              This event is sponsored by GNGSE, confused? Well it is the “Guy
              Next to Gym Selling Eggs’’, he wants you to design a packaging
              that’ll keep his eggs safe no matter the height they are thrown
              from. In this contestants have to create a platform on which eggs
              will be dropped from a certain heights and they should make sure
              that eggs won't break.
              <h1 className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5">
                Guidelines: <br />
              </h1>
              ● No kits or pre-made designs may be used. The structure must be
              the individual’s invention. <br />
              ● The structure must be completely released (no strings or other
              attachments) NO PARACHUTES! <br />
              ● The structure must land in a designated target area. <br />
              ● No gases (i.e. helium) other than air can be present in the
              structure when it is weighed. <br />● Volume will be calculated
              based on the outside shape of the container (inside air
              volume/space will not be subtracted out). <br />
              ● Grade A Large eggs will be supplied at the competition. You
              cannot bring your own egg. <br />
              ● All containers will be inspected by judges before they are
              dropped. <br />
              ● Once an egg is weighed-in with the structure, that egg cannot be
              exchanged with another. <br />
              ● The score will be based on the following rubric: <br />
              25 points if the egg does not fully crack after the first drop{" "}
              <br />
              30 points if the egg does not fully crack after the second drop{" "}
              <br />
              20 points if the egg shows no signs of any form of cracking <br />
              10 points if the container is less than 1 pound <br />
              20 points if the container is less than 0.5 pounds <br />● The
              containers will be dropped from one story. The second and final
              drop will be from two stories. Only two drops will be made. <br />
              ● The egg must be accessible after the first drop to check for any
              cracking. <br />
              ● The level that an egg is cracked (either fully or partially)
              will be determined by the judges. A partially cracked egg will
              have slight opening but not leaking. A fully cracked egg is when
              the inside contents of the egg have been leaked. <br />
              ● The winner will be determined by the container with the greatest
              total score. <br />
              {/* <h1 className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5">
                Coordinators: <br />
              </h1>
              Devanshi Tiwari (3rd B.tech CHE):9580887859 */}
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
              eventId="TSCEH03
"
            /> */}
          </div>
        </div>
      </>
    </Layout>
    // </Auth>
  );
}
