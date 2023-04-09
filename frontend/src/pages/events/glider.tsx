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
              Touch-Down
            </h1>
            {/* <Prize prize="3000" /> */}

            <div
              className="w-full grid grid-cols-1 lg:grid-cols-3 
                gap-y-10 place-items-center bg-white/50 py-10 rounded-xl bg-cover bg-fixed"
              style={{
                height: 500,
                backgroundImage: `url("https://d2jf5yk8vvx0ti.cloudfront.net/images/freeflight.JPG")`,
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
                <span className="text-slate-800 ">Parking Lot</span>
                <span className="font-primary font-bold text-slate-800 ">
                  Date
                </span>
                <span className="text-slate-800">14-April</span>

                <span className="font-primary font-bold text-slate-800 ">
                  Time
                </span>
                <span className="text-slate-800">9:00-11:00AM</span>
              </div>
            </div>

            <div className="mb-10">
              <SecondaryButton
                text="Register to event"
                form_link="https://forms.gle/D9u9ps5GkehmaaFz8"
                // onClick={handleEventFormPopup}
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
              Ever fascinated by the long-winged mechanical birds soaring high
              in the sky and peeping through the clouds? Well, here we are.
              Bringing you a heart-pumping experience like no other. Your very
              own glider planes flex and launch manually. Y'all will compete in
              a series of challenges that'll test your ability to navigate,
              including precision landings and altitude. With each challenge,
              you'll push yourself to new heights, showing off your skill and
              technique to judges and fellow competitors alike. So, what are you
              waiting for? Take to the skies and join us for the Gliders Free
              Flight Competition. This event promises to be an unforgettable
              experience!
              <h1 className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5">
                Guidelines: <br />
              </h1>
              Strength of the Plane: This round will be based on the sturdiness
              of the plane and its efficacy to deal with the wind and air
              resistance. <br />
              ROUND:2 Distance travelled by 2 twists <br />
              This round will be the concluding round of the competition. The
              plane with largest distance travelled, will be declared as the
              winner. <br />
              No metallic part should be used in the modeling of the plane.{" "}
              <br />
              Styrofoam shouldn’t be used in the making of the plane. <br />
              <h1 className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5"></h1>
              {/* Shubham(3rd B.tech CHE): 9120585755 <br /> Harsh Chaudhary(3rd
              B.tech CHE): 6390339469 <br /> Samiksha(3rd B.tech BE): 7905710930 */}
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

            {/* <EventRegistrationForm eventId="TSCFH03" /> */}
          </div>
        </div>
      </>
    </Layout>

    // </Auth>
  );
}
