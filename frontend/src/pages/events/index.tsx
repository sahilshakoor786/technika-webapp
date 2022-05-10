import Link from "next/link";
import Auth from "src/components/Auth";
import FancyImage from "src/components/FancyImage";
import Layout from "src/components/Layout";

export default function EventsPage() {
  return (
    <Auth>
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
            <h1
              className="font-primary text-3xl md:text-5xl text-center 
                mt-32 md:mt-20 mb-10"
            >
              Events
            </h1>

            <div className="flex justify-center items-center gap-y-8 gap-x-8 flex-wrap">
              <Link href="/events/junk-yard">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Junk Yard"
                />
              </Link>
              <Link href="/events/break-the-code">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Break the code"
                />
              </Link>
              <Link href="/events/rasterize">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="RASTERIZE"
                />
              </Link>
              <Link href="/events/laser-o-reflect">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Laser-o-Reflect"
                />
              </Link>
              <Link href="/events/run-time-terror">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Run time terror"
                />
              </Link>
              <Link href="/events/nft-design">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="NFT Design"
                />
              </Link>
              <Link href="/events/situation-room">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Situation Room"
                />
              </Link>
              <Link href="/events/quiz-me-more">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Quiz me more"
                />
              </Link>
              <Link href="/events/tech-expo">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Tech Expo"
                />
              </Link>
              <Link href="/events/squid-game">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Squid Game"
                />
              </Link>
              <Link href="/events/bridge-o-mania">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Bridge-o-mania"
                />
              </Link>
              <Link href="/events/city-maestro">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="City Maestro"
                />
              </Link>
              <Link href="/events/lfr">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="LFR"
                />
              </Link>
              <Link href="/events/save-the-egg">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Save the Egg"
                />
              </Link>
              <Link href="/events/simulation">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Simulation"
                />
              </Link>
              <Link href="/events/soccerbot">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Soccerbot"
                />
              </Link>
              <Link href="/events/bike-show">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Bike Show"
                />
              </Link>
              <Link href="/events/treasure-hunt">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Treasure Hunt"
                />
              </Link>
              <Link href="/events/blast-of-the-mars">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Blast of the Mars"
                />
              </Link>
              <Link href="/events/kya-engineer">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Kya Engineer banega re tu"
                />
              </Link>
              <Link href="/events/hover-mania">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="hover-mania"
                />
              </Link>
              <Link href="/events/path-pradarshak">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Path Pradarshak"
                />
              </Link>
              <Link href="/events/red-pencil">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Red Pencil"
                />
              </Link>
              <Link href="/events/thread-ripper">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Thread Ripper"
                />
              </Link>
              <Link href="/events/robo-combat">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Robo Combat"
                />
              </Link>
              <Link href="/events/fun-fare">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Fun Fare"
                />
              </Link>
              <Link href="/events/anadigilox">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Anadigilogix"
                />
              </Link>
              <Link href="/events/circuit-trouble">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Circuit Trouble"
                />
              </Link>
              <Link href="/events/morse-laser">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Morse Laser"
                />
              </Link>
              <Link href="/events/flip-o-friend">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Flip-o-friend"
                />
              </Link>
              <Link href="/events/free-flight">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Free Flight"
                />
              </Link>
              <Link href="/events/blazing-wheel">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Blazing Wheel"
                />
              </Link>
              <Link href="/events/blank-coding">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Blank Coding"
                />
              </Link>
              <Link href="/events/edm">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="EDM"
                />
              </Link>
              <Link href="/events/programming-date">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Programming Date"
                />
              </Link>
              <Link href="/events/udaan">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Udaan"
                />
              </Link>
            </div>
          </div>
        </main>
      </Layout>
    </Auth>
  );
}
