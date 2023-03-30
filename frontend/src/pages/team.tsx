import Link from "next/link";
import Auth from "src/components/Auth";
import TeamImage from "src/components/TeamImage";
import Layout from "src/components/Layout";
// import { TeamTSC } from "src/utils/TeamTSC";
import { TeamSecurityTSC } from "src/utils/TeamSecurityTSC";

export default function EventsPage() {
  return (
    // // <Auth>
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
           Security Team{" "}
          </h1>

          
          <div className="flex justify-center items-center gap-y-8 gap-x-8 flex-wrap">
            {TeamSecurityTSC.map((member) => (
              <TeamImage
                key={member?.Timestamp}
                src={member?.Photo}
                width={350}
                height={400}
                name={member?.Name}
                position={member?.["Position in TSC"]}
                instagram={member?.["Instagram profile URL"]}
                facebook="https://www.facebook.com/technicalsubcouncihbtu/"
                linkedin={member?.["LinkedIn profile URL "]}
              />
            ))}
          </div>
        </div>
      </main>
    </Layout>
    // // </Auth>
  );
}
