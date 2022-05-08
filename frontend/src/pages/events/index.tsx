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
            className="p-10 relative text-white md:w-3/4  h-1/2
        bg-blue-800/10 backdrop-blur flex flex-col justify-center
          shadow-lg py-6 px-2 space-y-2 rounded-lg"
          >
            <h1 className="font-primary text-3xl md:text-5xl text-center">
              Events
            </h1>

            <div className="w-full flex space-x-3 justify-center flex-wrap">
              <Link href="/events/event-name">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Sample event"
                />
              </Link>

              <Link href="/events/event-name">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Sample event"
                />
              </Link>

              <Link href="/events/event-name">
                <FancyImage
                  src="https://dummyimage.com/200x300"
                  width={200}
                  height={300}
                  text="Sample event"
                />
              </Link>
            </div>
          </div>
        </main>
      </Layout>
    </Auth>
  );
}
