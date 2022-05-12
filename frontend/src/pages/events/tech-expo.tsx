import gsap from "gsap";

import { useState } from "react";
import Auth from "src/components/Auth";
import EventRegistrationForm from "src/components/EventRegistrationForm";
import Layout from "src/components/Layout";
import SecondaryButton from "src/components/SecondaryButton";

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
                Tech expo
              </h1>

              <div
                className="w-full grid grid-cols-1 lg:grid-cols-3 
                gap-y-10 place-items-center bg-white/50 py-10 rounded-xl bg-cover bg-fixed bg-bottom"
                style={{
                  height: 500,
                  backgroundImage: `url("https://d2jf5yk8vvx0ti.cloudfront.net/images/techexpo.JPG")`,
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
                    Between Auditorium and Civil Dept
                  </span>

                  <span className="font-primary font-bold text-slate-800 ">
                    Time
                  </span>
                  <span className="text-slate-800">10 AM-5 PM</span>
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
               It’s time to break out of the narrow
confines of the textbook in our very
prestigious “Tech Expo”, bring all those
minuscule details regarding the various
sciences that you used to cram up and
vomit for the sake of grades, out where
they belong that is in the real world as
you make a working prototype to ace this
event in front of our inter departmental
judges panel. The criteria will be the
level of tech used, exclusiveness, ease of
working, the output of demo operation
and explanation,answers provided by the
exhibitor to the jury and completed to the
conscience of the jury.
<h1
                className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5"
              >
                
                Guidelines: <br />
              </h1>
              •	Students from within or outside of the college will be given a chance to display their working models/projects. <br />
•	Candidates can participate in teams as well as solo. <br /> 
<h1
                className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5"
              >
                
                Coordinators: <br />
              </h1>
Shikhar Trivedi(3rd B.tech ME):6387611363

  <br />


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

              <EventRegistrationForm eventId="TSCCE03" />
            </div>
          </div>
        </>
      </Layout>
    </Auth>
  );
}
