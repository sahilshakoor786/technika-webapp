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
              Blazing Wheel
            </h1>
            <Prize prize="2000" />

            <div
              className="w-full grid grid-cols-1 lg:grid-cols-3 
                gap-y-10 place-items-center bg-white/50 py-10 rounded-xl bg-cover bg-fixed"
              style={{
                height: 500,
                backgroundImage: `url("https://d2jf5yk8vvx0ti.cloudfront.net/images/blazingwheels.JPG")`,
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
                <span className="text-slate-800 ">Tennis Lawn</span>
                <span className="font-primary font-bold text-slate-800 ">
                  Date
                </span>
                <span className="text-slate-800">22 May</span>

                <span className="font-primary font-bold text-slate-800 ">
                  Time
                </span>
                <span className="text-slate-800">3:00 PM-5:00 PM</span>
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
              Design a wired/wireless manually controlled robot which should be
              able to travel on uneven terrain both land, water, etc. The robot
              that traverses all the hurdles and completes the track in a
              minimum amount of time is declared as the winner.
              <h1 className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5">
                BOT SPECIFICATIONS :<br />
              </h1>
              ● The dimensions of the vehicle must be within 25 cm x 20cm x15 cm
              (l x b x h). <br />
              ● Maximum weight must not exceed 3 kg. <br />
              ● The robot can be wired/ wireless. <br />
              ● In case of wired control, the wires should be slack all the
              time. <br />
              ● The power supply for the vehicle should not exceed 12V DC
              between any two points in the circuit at any given time. <br />
              ● The participants will be provided with 220 Volts, 50Hz standard
              AC supply. Participants will have to themselves arrange for an
              adapter or batteries. <br />
              ● The machine must be powered electrically only. Use of IC engine
              is not allowed. <br />● The machine must not be made from Lego
              parts, or any ready-made kit, if we find such a machine it will be
              disqualified. Use of ready-made chassis/ RC Car is not allowed.{" "}
              <br />
              ● The body of the vehicle must be covered, to avoid any
              entanglement between two competing robots. <br />
              ● Damaging the wires of the opponent will lead to
              disqualification. <br />
              <h1 className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5">
                RULES :<br />
              </h1>
              ● Participants should possess a valid identity card from their
              respective Institutions. <br />
              ● All the teams will get only one trial round. <br />
              ● One hour before the event bot must go through specification
              check <br />
              ● Teams must start their robots from the starting line only after
              a signal is given by the Referee. <br />
              ● The timer starts immediately after the signal is given. <br />
              ● Number of participants per team should not exceed 4. <br />
              ● Bot should always remain inside the track. If the bot leaves the
              track at any point of the time during the race or becomes
              immobile, it will be considered as a “PITFALL” which is an
              opportunity to repair or relocate the bot. <br />
              ● Each pitfall spans for 1 minute. <br />
              ● First three pitfalls are considered to be penalty free. <br />
              ● Only two people from a team are allowed to manipulate the bot
              during a pitfall. <br />
              ● If special circumstances, such as unforeseen problems or
              capabilities of a robot occur, rules may be modified by the
              referee. <br />
              ● Unethical behavior could lead to disqualification. Faculty
              coordinators have all the rights to take final decisions for any
              matter during the event. <br />
              ● Referee’s Decision will be final. <br />
              <h1 className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5">
                Coordinators: <br />
              </h1>
              Mayank Khanna (3rd B.Tech CHE): 8299023118
              <br />
              Palak jain (3rd B.Tech CHE):
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

            <EventRegistrationForm eventId="TSCMM04" />
          </div>
        </div>
      </>
    </Layout>
    // // </Auth>
  );
}
