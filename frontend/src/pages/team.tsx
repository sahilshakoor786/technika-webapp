import Link from "next/link";
import Auth from "src/components/Auth";
import TeamImage from "src/components/TeamImage";
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
              Team            </h1>
              

            <div className="flex justify-center items-center gap-y-8 gap-x-8 flex-wrap">
              
                <TeamImage
                  src="https://d2jf5yk8vvx0ti.cloudfront.net/images/Strategie-banner-1024x325.png"
                  width={200}
                  height={300}
                  name="Shubham Rana"
                  position="Secretary"
                  instagram="https://www.instagram.com/technika22/?igshid=YmMyMTA2M2Y="
                  facebook="https://www.facebook.com/technicalsubcouncihbtu/"
                  linkedin="https://www.linkedin.com/company/technical-sub-council-hbtu/"
                />
           
              

            </div>
          
          
          </div>
        </main>
      </Layout>
    </Auth>
  );
}
