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
                LFR
              </h1>
              <Prize prize="2500" />


              <div
                className="w-full grid grid-cols-1 lg:grid-cols-3 
                gap-y-10 place-items-center bg-white/50 py-10 rounded-xl bg-cover bg-fixed"
                style={{
                  height: 500,
                  backgroundImage: `url("https://d2jf5yk8vvx0ti.cloudfront.net/images/lfr.jfif")`,
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
                  <span className="text-slate-800 ">BE- FT Lawn</span>
                  <span className="font-primary font-bold text-slate-800 ">
                    Date
                  </span>
                  <span className="text-slate-800">20 May</span>

                  <span className="font-primary font-bold text-slate-800 ">
                    Time
                  </span>
                  <span className="text-slate-800">3 PM-5 PM</span>
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
                   <h1
                className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5"
              >
                
              About the Event<br />
              </h1>
              Teams have to build an autonomous robot, which can follow a black line and keep track of
directions while going through the maze. The bot has to go through the mesh from the starting
point to the ending point in the minimum possible time.
<h1
                className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5"
              >
                
                SPECIFICATIONS OF THE FIELD AND LINES:<br />

              </h1>
              The COMPETITION FIELD consists of a 13X13 Sqr. ft. The surface of the track will be
white with a black line marked on it . <br />
● Arena has a Black track line. The track will be revealed on the spot. <br />
● The base of the flex would be white with a black line of 25 mm in width. <br />
● Track will have curved, discontinuous, crossed, 90 degree and 45 degree turns etc. <br />
● Organizing committee will make every possible attempt to ensure that there are no bumps 
between the tiles although there may be slight deviations in height and width of up to
3mm. <br />
● Competitors must be prepared to deal with these slight imperfections. There will be one
START point and one FINISH point in the entire field. <br />
<h1
                className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5"
              >
                
                BOT SPECIFICATIONS :<br />

              </h1>
              ● The autonomous bot must fit into the box of dimensions 200mm *200mm *200mm
(l*b*h). All measurements and dimensions have 10% tolerance. <br />
● Robots can be wired/ wireless. In case of wired control, the wires should be slack all the
time. <br />
● Maximum weight should not exceed 1.5 kg, including battery. <br />
● The bot must have sensors onboard to sense the black line on the arena. <br />
● The machine must not be made from Lego parts or any kind of ready-made kit. If such a
machine is found it will be disqualified from the competition. <br />
● Each team is allowed to have only one bot. <br />
● Extra 5 points will be added to the team score if bot will give a sound or visual signal
after reaching the finish point. <br />

● The bot should be fully autonomous, it should not include any Bluetooth module and
should not by any means be controlled during the event. Team can use microcontrollers. <br />
● The participants will be provided with 220 Volts, 50Hz standard AC supply. Participants
will have to themselves arrange for an adapter or batteries. <br />
<h1
                className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5"
              >
                
                RULES :<br />

              </h1>
              ● This is a racing event so the fastest and most balanced robot will win. <br />
● The robot should be as per the given specifications. <br />
● Each team can have a maximum of 4 members. Students from different institutions can
participate in forming their teams. <br />
● Each member of the team must contain the identity card of his/her respected institute. <br />
● The robot should not damage the arena. <br /> 
● No test practice will be allowed in the main arena. Another test and calibration arena will
be there. <br />
● The robot must not leave behind any of its parts during the run; else it will result in
disqualification. <br />
● Unethical behavior could lead to disqualification. Coordinators have all the rights to take
the final decision for any matter during the event. <br />
● The judge's decision will be considered final. <br />
● The coordination committee reserves the right to add or update any rule. <br />
● If the design or any mechanism kind of aspect is unique in the BOT, the respective team
will be awarded as ‘Best Design Certificate’ .(Note: This depends on the Official's 
Decision.) <br /> 
● Teams may register online for the event or spot registrations are also available. <br />
<h1
                className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5"
              >
                Coordinators: <br />
              </h1>
                Avi Kushwaha (3rd B.Tech ME): 83039 25425 <br />
 Mahaveer Jain (3rd B.Tech CE): 
           




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

              <EventRegistrationForm eventId="TSCMM03
" />
            </div>
          </div>
        </>
      </Layout>
    </Auth>
  );
}
