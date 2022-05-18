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
                Circuit Trouble
              </h1>
              <Prize prize="2000" />

              <div
                className="w-full grid grid-cols-1 lg:grid-cols-3 
                gap-y-10 place-items-center bg-white/50 py-10 rounded-xl bg-cover bg-fixed"
                style={{
                  height: 500,
                  backgroundImage: `url("https://d2jf5yk8vvx0ti.cloudfront.net/images/circuittrouble.avif")`,
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
                  <span className="text-slate-800">11:00 AM-1:00 PM</span>
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
                You must have heard of this phrase “No resistance can drop our
                potential” irrespective of the fact that you considered this a
                PJ or not, it is essential for you to understand the underlying
                electrical/ electronics reference for this is what you’ll need
                here. In this event for round 1 participants have to undergo a
                MCQ test.qualified participants proceed to round 2 in which they
                will have to solve a basic problem on circuits.
                <h1 className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5">
                  Guidelines: <br />
                </h1>
                ● After assessing the question, team members need to make the
                list of the components by their own along with the circuit
                diagram and present it to the jury members. After that they will
                be allowed to pick up the necessary components and implement the
                circuit and present the output to the jury members. <br />
                ● Use of mobile phones or any other entity having internet
                connectivity is prohibited and will be immediately expelled if
                caught. <br />
                ● Partial marking would be done to according to the circuit
                completed and the output presented. <br />
                ● Time limit for the competition is 30 min. <br />
                ● Circuit implemented on paper without taking hints: 20 points{" "}
                <br />
                ● Circuit implemented on bread board with correct output
                presented: 30 points <br />
                ● Circuit implemented on bread board with distorted or indecent
                output presented: 15 points <br />
                ● And hints to be provided if asked for with deduction of
                points. <br />
                Per hint: -15 points <br />
                ● Maximum 3 members are allowed in a team. <br />
                ● Any number of teams can participate from one college/school{" "}
                <br />
                ● Professionals are not allowed. Only students can participate.{" "}
                <br />
                ● Participants are required to bring their school/college ID
                Card. <br />
                ● A team member can’t be a part of more than one team. <br />
                ● Bring your college/student I-Card at the time of competition.{" "}
                <br />
                ● Any of the above-mentioned rules, if found violated, teams
                would not be allowed to participate in the competition. <br />
                ● In any case, Jury’s decision is final and binding for all.{" "}
                <br />
                <h1 className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5">
                  Coordinators: <br />
                </h1>
                Taniska (3rd B.tech ET):8923978437


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

              <EventRegistrationForm eventId="TSCEH05" />
            </div>
          </div>
        </>
      </Layout>
    </Auth>
  );
}
