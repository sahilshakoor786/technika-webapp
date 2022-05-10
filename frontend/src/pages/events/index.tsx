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

            <div className="w-full flex justify-center flex-wrap">
              <span className="py-5 px-10">
                <Link href="/events/junk-yard">
                  <FancyImage
                    src="https://dummyimage.com/200x300"
                    width={200}
                    height={300}
                    text="Junk Yard"
                  />
                </Link>
              </span>
            </div>
          </div>
        </main>
      </Layout>
    </Auth>
  );
}
