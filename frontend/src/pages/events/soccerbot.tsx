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
              Robo Soccer
            </h1>
            {/* <Prize prize="8000" /> */}

            <div
              className="w-full grid grid-cols-1 lg:grid-cols-3 
                gap-y-10 place-items-center bg-white/50 py-10 rounded-xl bg-cover bg-fixed"
              style={{
                height: 500,
                backgroundImage: `url("https://drive.google.com/uc?id=1JxPMooN3Bz8Jh1aI4g5YwRkJw7FWTslA")`,
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
                <span className="text-slate-800">12 April</span>

                <span className="font-primary font-bold text-slate-800 ">
                  Time
                </span>
                <span className="text-slate-800">4:00PM-6:30PM</span>
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
              "Test your build, observe how it functions, and fuel your logic
              and reasoning skills through imaginative, creative play." It's
              football time and no one plays soccer better than engineers, in
              their sophisticated way we hail this event ROBO SOCCER. Build a
              robot that can make a goal by pushing the ball into the opponent's
              goal post and defends own goal post. This event tests your
              stability control, handling, and your techniques in competing with
              your opponent. The simultaneous movement rules encourage clever
              strategies and counterstrategies as players try to second-guess
              their opponents.
              <h1 className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5">
                Guidelines: <br />
              </h1>
              ● Each team will have to defend the goal on its side as well as
              score the goal on the opposite side. <br />
              ● Each team can have a maximum of 4 team members. <br />● The
              weight limit of the robot for this competition is 3 Kg. <br />
              ● Each robot should not Exceed by maximum 30cm*30cm*30cm(l*b*h*).{" "}
              <br />
              ● Team can use ball hit mechanism but not Griper mechanism to hold
              the ball. <br />
              ● Teams have to use same bot for all the rounds. <br />
              ● The robot can be wired/ wireless. In case of wired control, the
              wires should be slack all the time. <br />
              ● The power supply for the vehicle should not exceed 12V DC
              between any two points in the circuit at any given time. <br />
              ● The participants will be provided with 220 Volts, 50Hz standard
              AC supply. Participants will have to themselves arrange for an
              adapter or batteries. <br />
              ● The machine must be powered electrically only. Use of IC engine
              is not allowed ● The machine must not be made from Lego parts, or
              any ready-made kit, if we find such a machine it will be
              disqualified. Use of ready-made chassis/ RC Car is not allowed.{" "}
              <br />
              ● The body of the vehicle must be covered, to avoid any
              entanglement between two competing robots. <br />
              ● Damaging the wires of the opponent will lead to
              disqualification. <br />● The ball can be either dragged or pushed
              by the team’s bot. <br />
              ● Maximum 2 members per team will be allowed to remain close to
              the field for operating the robots. <br />● In case of a jam up of
              robots for more than 30 seconds the robots will have to kick-off
              again at the order of the referee. <br />
              ● In case of any discrepancy the final decision rests in the hands
              of coordinators. <br />
              ● Any act of misbehavior or misconduct will lead to immediate
              disqualification of the team. <br />
              ● The robots are not allowed to use grippers or actuations which
              are intended to harm the opponent’s robot. <br />
              ● The substitution of robots during the competition within the
              team or with other teams is forbidden. <br />
              <h1 className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5">
               
              </h1>
             
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
              eventId="TSCMM02
"
            />
          </div>
        </div>
      </>
    </Layout>
    // </Auth>
  );
}
