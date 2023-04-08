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
             Wrong-o-vation
            </h1>
            {/* <Prize prize="3000" /> */}

            <div
              className="w-full grid grid-cols-1 lg:grid-cols-3 
                gap-y-10 place-items-center bg-white/50 py-10 rounded-xl bg-cover bg-fixed bg-center"
              style={{
                height: 500,
                backgroundImage: `url("https://media.istockphoto.com/id/1249851975/vector/business-thinking-creative-idea-vector-icon.jpg?s=612x612&w=0&k=20&c=cGoCnwbi7K9W0K0tqrPzbevhmY63EgKk7a1obYQx4v4=")`,
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
                <span className="text-slate-800">14-April</span>

                <span className="font-primary font-bold text-slate-800 ">
                  Time
                </span>
                <span className="text-slate-800">10:00AM-1:00PM</span>
              </div>
            </div>

            <div className="mb-10">
              <SecondaryButton
                text="Register to event"
                // onClick={handleEventFormPopup}
                form_link="https://forms.gle/MTRwshPvcNFPkuap8"
              />
            </div>

            <div
              className="overflow-hidden font-sans text-xl 
              text-white text-center max-w-xl"
            >
              {" "}
              <h1 className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5">
                About the Event
                <br />
              </h1>
              Looking for a way to unleash your inner mad scientist? 
Join us for "Wrong Innovations Only" - the competition where we encourage you to let your creativity run wild and pitch the weirdest, wildest, and wackiest ideas you can come up with. From edible paper to shoes that can walk on water, nothing is off-limits!
Participants will have two minutes to pitch their idea to our panel of judges and the audience. The winner will be chosen by a combined vote from the judges and audience, and will receive a trophy so outrageous that it has to be seen to be believed! 🏆

              <h1 className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5">
                <br />
              </h1>
             
              <h1 className="font-primary text-2xl md:text-5xl text-center mt-5 mb-5">
                
              </h1>
              {/* Shubham(3rd B.tech CHE): 9120585755 <br /> Vikas(3rd B.tech
              FT):7248338611 <br /> Nikita(3rd B.tech PL) : 8303290354 */}
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

            <EventRegistrationForm eventId="TSCFH04" />
          </div>
        </div>
      </>
    </Layout>
    // </Auth>
  );
}
