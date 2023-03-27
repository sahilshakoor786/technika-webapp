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
              Kya engineer banega re tu
            </h1>
            <Prize prize="2000" />

            <div
              className="w-full grid grid-cols-1 lg:grid-cols-3 
                gap-y-10 place-items-center bg-white/50 py-10 rounded-xl bg-cover bg-fixed"
              style={{
                height: 500,
                backgroundImage: `url("https://d2jf5yk8vvx0ti.cloudfront.net/images/kyaengineer.jpeg")`,
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
                <span className="text-slate-800 ">Auditorium</span>
                <span className="font-primary font-bold text-slate-800 ">
                  Date
                </span>
                <span className="text-slate-800">21 May</span>

                <span className="font-primary font-bold text-slate-800 ">
                  Time
                </span>
                <span className="text-slate-800">11 AM-12:30 PM</span>
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
              Have you also been humiliated by the line "Kya fayda aisi
              engineering ka ki pankha, cooler bhi na shi kar pao". If yes then
              it’s your chance to learn how to repair ‘pankha cooler’ Engineers
              are considered "all-rounders" in society. One of the very
              important aspects of engineering is "reverse engineering."
              Reverse-engineering is the act of dismantling/close inspection of
              an object to see how it works. The purpose of reverse engineering
              is to find out how an object or system works. There are a variety
              of reasons to do this. Reverse-engineering can be used to learn
              how something works and to recreate the object or create a similar
              object with added enhancement. Reverse engineering include: <br />
              1) Information extraction : dismantling,close inspection,
              research. <br />
              2) Review : understanding the whole working process/ mechanism of
              the product. <br />
              3) Modification : including your ideas, innovations, or
              modifications in the product taking care of cost, reliability, and
              efficiency of the existing product. <br />
              <h1 className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5">
                Guidelines: <br />
              </h1>
              ● This will be a team event and each team can have a maximum of 3
              participants. ● There is no branch restriction for students.{" "}
              <br />
              ● Event duration will be 60 minutes. <br />● Topics of research
              will be unveiled exactly one hour before the event. All the team
              members are expected to equally participate and do thorough
              research over topics allotted. <br />
              ● Each team will be allotted a maximum of 5 minutes for
              presentation of their ideas and concepts. <br />
              ● Unethical behavior could lead to disqualification. Coordinators
              have all the rights to take final decisions for any matter during
              the event. <br />
              <h1 className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5">
                Coordinators: <br />
              </h1>
              , Uday Gupta (3rd B.tech ME): 98077 48401 <br />
              Mohd Aqib (3rd B.tech ME) : 7983632115
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
              eventId="TSCMM06
"
            />
          </div>
        </div>
      </>
    </Layout>
    // </Auth>
  );
}
