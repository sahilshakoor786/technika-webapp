import Link from "next/link";
import Auth from "src/components/Auth";
import FancyImage from "src/components/FancyImage";
import Layout from "src/components/Layout";
import React from "react";

export default function EventsPage() {
  const [openTab, setOpenTab] = React.useState(1);
  const [color, setcolor] = React.useState("pink");

  return (
    // <Auth>
    <Layout>
      <main
        className="h-full min-h-screen overflow-x-hidden 
          flex justify-center items-center"
      >
        <div
          className="p-10 relative text-white w-full md:w-3/4  h-1/2
        bg-blue-800/10 backdrop-blur flex flex-col justify-center
          shadow-lg py-6 px-2 space-y-2 rounded-lg"
        >
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li
              style={{ marginTop: 45, marginBottom: 40 }}
              className="-mb-px mr-2 last:mr-0 flex-auto text-center"
            >
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <div
                  className="font-primary text-xl md:text-xl text-center 
              "
                >
                  Central Events
                </div>
              </a>
            </li>
            <li
              style={{ marginTop: 45, marginBottom: 40 }}
              className="-mb-px mr-2 last:mr-0 flex-auto text-center"
            >
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <div
                  className="font-primary text-xl md:text-xl text-center 
              "
                >
                  Mech Marvel
                </div>
              </a>
            </li>
            <li
              style={{ marginTop: 45, marginBottom: 40 }}
              className="-mb-px mr-2 last:mr-0 flex-auto text-center"
            >
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <div
                  className="font-primary text-xl md:text-xl text-center 
              "
                >
                  Fly High
                </div>
              </a>
            </li>
            <li
              className="-mb-px mr-2 last:mr-0 flex-auto text-center"
              style={{ marginTop: 45, marginBottom: 40 }}
            >
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <div
                  className="font-primary text-xl md:text-xl text-center 
              "
                >
                  Game Of Codes
                </div>
              </a>
            </li>

            <li
              style={{ marginTop: 45, marginBottom: 40 }}
              className="-mb-px mr-2 last:mr-0 flex-auto text-center"
            >
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 5
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <div
                  className="font-primary text-xl md:text-xl text-center 
              "
                >
                  Electronics Hub
                </div>
              </a>
            </li>
          </ul>

          <div className="tab-content" id="tabs-tabContent">
            <div
              id="tabs-event"
              role="tabpanel"
              aria-labelledby="tabs-event-tab"
              className={openTab === 1 ? "block" : "hidden"}
            >
              <div className="flex justify-center items-center gap-y-8 gap-x-8 flex-wrap">
                {/*<Link href="/events/junk-yard">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/pexels-serhii-bondarchuk-11849108.jpg"
                    width={200}
                    height={300}
                    text="Junk Yard"
              />
                </Link>*/}
                <Link href="/events/quiz-me-more">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/quiz+me+more.webp"
                    width={200}
                    height={300}
                    text="Quiz me more"
                  />
                </Link>
                <Link href="/events/laser-o-reflect">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/pexels-eva-elijas-7629314.jpg"
                    width={200}
                    height={300}
                    text="Laser-o-Reflect"
                  />
                </Link>
                <Link href="/events/situation-room">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/situation+room.jpg"
                    width={200}
                    height={300}
                    text="Situation Room"
                  />
                </Link>

                <Link href="/events/tech-expo">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/techexpo.jpg"
                    width={200}
                    height={300}
                    text="Tech Expo"
                  />
                </Link>
                {/* <Link href="/events/squid-game">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/squidgame.webp"
                    width={200}
                    height={300}
                    text="Squid Game"
                  />
                </Link> */}
                {/* <Link href="/events/nft-design">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/nft.jpg"
                    width={200}
                    height={300}
                    text="NFT Design"
                  />
                </Link> */}
                <Link href="/events/techtalk">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/celebritytalkcover-transformed.jpeg"
                    width={200}
                    height={300}
                    text="Tech Talk"
                  />
                </Link>
                {/* <Link href="/events/speakertalk">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/speakertalk2.jpg"
                    width={200}
                    height={300}
                    text="Speaker Talk"
                  />
                </Link> */}
                <Link href="/events/treasure-hunt">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/treasure+hunt.jpg"
                    width={200}
                    height={300}
                    text="Treasure Hunt"
                  />
                </Link>
                <Link href="/events/fun-fair">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/pexels-nasim-didar-3619724.jpg"
                    width={200}
                    height={300}
                    text="Fun Fare"
                  />
                </Link>
                {/* <Link href="/events/edm">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/pexels-deane-bayas-9534913.jpg"
                    width={200}
                    height={300}
                    text="EDM"
                  />
                </Link> */}
                    <Link href="/events/e-football">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/pexels-mikhail-nilov-7887258.jpg"
                    width={200}
                    height={300}
                    text="E-Football"
                  />
                </Link>
                <Link href="/events/inauguration">
                  <FancyImage
                    src="https://media.istockphoto.com/id/171279624/photo/traditional-indian-inauguration.jpg?s=612x612&w=0&k=20&c=CeJ4fz2CX68o92ChCDjlXs9TuxhQgFtK-Ua51kzcXQY="
                    width={200}
                    height={300}
                    text="Inauguration"
                  />
                </Link>
                
                
                
                
                
                
                
                
              </div>
            </div>
            <div
              className={openTab === 2 ? "block" : "hidden"}
              id="tabs-mech"
              role="tabpanel"
              aria-labelledby="tabs-mech-tab"
            >
              <div className="flex justify-center items-center gap-y-8 gap-x-8 flex-wrap">
                <Link href="/events/lfr">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/lfr.png"
                    width={200}
                    height={300}
                    text="Robo race"
                  />
                </Link>

                {/*<Link href="/events/careaction">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/istockphoto-638687756-612x612.jpg"
                    width={200}
                    height={300}
                    text="Ca-Reaction"
                  />
              </Link>*/}
                <Link href="/events/blazing-wheel">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/events+/blazing+wheel.webp"
                    width={200}
                    height={300}
                    text="Robo Wrestling"
                  />
                </Link>

                <Link href="/events/robo-combat">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/events+/robo+combat-1.jpg"
                    width={200}
                    height={300}
                    text="Robo War"
                  />
                </Link>
                {/*<Link href="/events/thread-ripper">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/events+/thread+ripper.jpg"
                    width={200}
                    height={300}
                    text="Thread Ripper"
                  />
                </Link>

                <Link href="/events/path-pradarshak">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/events+/path+pradarshak.webp"
                    width={200}
                    height={300}
                    text="Path Pradarshak"
                  />
                </Link>*/}

                <Link href="/events/kya-engineer">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/Kya-Gunda-Banega-Re-Tu.jpg"
                    width={200}
                    height={300}
                    text="Kya Engineer banega re tu"
                  />
                </Link>
                {/*<Link href="/events/hover-mania">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/events+/hovermania.jpg"
                    width={200}
                    height={300}
                    text="Hover-Mania"
                  />
              </Link>*/}

                <Link href="/events/soccerbot">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/events+/soccerbot+2.webp"
                    width={200}
                    height={300}
                    text="Robo Soccer"
                  />
                </Link>
              </div>
            </div>
            <div
              className={openTab === 3 ? "block" : "hidden"}
              id="tabs-fly"
              role="tabpanel"
              aria-labelledby="tabs-fly-tab"
            >
              <div className="flex justify-center items-center gap-y-8 gap-x-8 flex-wrap">
                <Link href="/events/udaan">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/events+/udaan+2.jpg"
                    width={200}
                    height={300}
                    text="Udaan"
                  />
                </Link>

                <Link href="/events/glider">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/aero.jpg"
                    width={200}
                    height={300}
                    text="Touch Down"
                  />
                </Link>

                <Link href="/events/blast-of-to-mars">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/blastofftomars.jfif"
                    width={200}
                    height={300}
                    text="Blast Of To Mars"
                  />
                </Link> 

                <Link href="/events/simulation">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/simulation.jpg"
                    width={200}
                    height={300}
                    text="Aircraft Simulation"
                  />
                </Link>
              </div>
            </div>
            <div
              className={openTab === 4 ? "block" : "hidden"}
              id="tabs-code"
              role="tabpanel"
              aria-labelledby="tabs-code-tab"
            >
              <div className="flex justify-center items-center gap-y-8 gap-x-8 flex-wrap">
                <Link href="/events/break-the-code">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/break%20the%20code.jpg"
                    width={200}
                    height={300}
                    text="Break the code"
                  />
                </Link>
                <Link href="/events/flip-o-friend">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/flip%20o%20friend.jpeg"
                    width={200}
                    height={300}
                    text="Flip-O-Friend"
                  />
                </Link>
                <Link href="/events/hackathon">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/rasterize.jpg"
                    width={200}
                    height={300}
                    text="HACKATHON"
                  />
                </Link>

                <Link href="/events/run-time-terror">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/runtimeerror.jfif"
                    width={200}
                    height={300}
                    text="Run time terror"
                  />
                </Link>
                {/* <Link href="/events/red-pencil">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/redpencil.png"
                    width={200}
                    height={300}
                    text="Red Pencil"
                  />
                </Link> */}
                {/* <Link href="/events/blank-coding">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/blank%20coding.jpg"
                    width={200}
                    height={300}
                    text="Blank Coding"
                  />
                </Link> */}

                <Link href="/events/programming-date">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/programmingdate.webp"
                    width={200}
                    height={300}
                    text="Programming Date"
                  />
                </Link>
              </div>
            </div>

            <div
              className={openTab === 5 ? "block" : "hidden"}
              id="tabs-elect"
              role="tabpanel"
              aria-labelledby="tabs-elect-tab"
            >
              <div className="flex justify-center items-center gap-y-8 gap-x-8 flex-wrap">
                {" "}
                <Link href="/events/bridge-o-mania">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/bridge%20o%20mania.jpg"
                    width={200}
                    height={300}
                    text="Bridge-o-mania"
                  />
                </Link>
                {/* <Link href="/events/city-maestro">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/city%20maestro.jpg"
                    width={200}
                    height={300}
                    text="City Maestro"
                  />
                </Link> */}
                <Link href="/events/save-the-egg">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/save%20the%20egg.webp"
                    width={200}
                    height={300}
                    text="Save the Egg"
                  />
                </Link>
                <Link href="/events/anadigilox">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/anadigologix.webp"
                    width={200}
                    height={300}
                    text="Anadigilogix"
                  />
                </Link>
                <Link href="/events/circuit-trouble">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/circuit%20trouble.jpg"
                    width={200}
                    height={300}
                    text="Circuit Trouble"
                  />
                </Link>
                <Link href="/events/morse-laser">
                  <FancyImage
                    src="https://d2jf5yk8vvx0ti.cloudfront.net/images/morse%20laser.webp"
                    width={200}
                    height={300}
                    text="Morse Laser"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
    // </Auth>
  );
}
