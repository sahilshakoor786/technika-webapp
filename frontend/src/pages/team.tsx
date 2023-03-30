import Link from "next/link";
import Auth from "src/components/Auth";
import TeamImage from "src/components/TeamImage";
import Layout from "src/components/Layout";
import { TeamTSC } from "src/utils/TeamTSC";
import { teamHospitality } from "src/utils/teamHospitality";
import { webdev } from "src/utils/webdev"  
import { teamDesign } from "src/utils/teamDesign";
import { teamMarketing } from "src/utils/teamMarketing";
import { photographyteam } from "src/utils/photographyteam";

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
            Team{" "}
          </h1>

          <div className="flex justify-center items-center gap-y-8 gap-x-8 flex-wrap">
            {TeamTSC.map((member) => (
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
          
 <h1
            className="font-primary text-3xl md:text-5xl text-center 
                mt-32 md:mt-20 mb-10"
          >
          
            Website Development Team
          </h1>

          <div className="flex justify-center items-center gap-y-8 gap-x-8 flex-wrap">
            {webdev.map((member) => (
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




          {/* Hospitality Team */}

          <h1
            className="font-primary text-3xl md:text-5xl text-center 
                mt-32 md:mt-20 mb-10"
          >
            Team Hospitality{"  "}
          </h1>

          <div className="flex justify-center items-center gap-y-8 gap-x-8 flex-wrap">
            {teamHospitality.map((member) => (
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
          {/* Design Team */}
          <h1
            className="font-primary text-3xl md:text-5xl text-center 
                mt-32 md:mt-20 mb-10"
          >
          
            Design Team
          </h1>

          <div className="flex justify-center items-center gap-y-8 gap-x-8 flex-wrap">
            {teamDesign.map((member) => (
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
          {/* Marketing Team */}

          <h1
            className="font-primary text-3xl md:text-5xl text-center 
                mt-32 md:mt-20 mb-10"
          >
          
            Marketing Team
          </h1>

          <div className="flex justify-center items-center gap-y-8 gap-x-8 flex-wrap">
            {teamMarketing.map((member) => (
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

           <h1
            className="font-primary text-3xl md:text-5xl text-center 
                mt-32 md:mt-20 mb-10"
          >
            Photography Team{}
          </h1>

          <div className="flex justify-center items-center gap-y-8 gap-x-8 flex-wrap">
            {photographyteam.map((member) => (
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
