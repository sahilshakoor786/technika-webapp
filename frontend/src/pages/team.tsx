import Link from "next/link";
import Auth from "src/components/Auth";
import TeamImage from "src/components/TeamImage";
import Layout from "src/components/Layout";
import { TeamTSC } from "src/utils/TeamTSC";
import { teamHospitality } from "src/utils/teamHospitality";
import { webdev } from "src/utils/webdev";
import { teamDesign } from "src/utils/teamDesign";
import { teamMarketing } from "src/utils/teamMarketing";
import { photographyteam } from "src/utils/photographyteam";
import { teamPublicity } from "src/utils/teamPublicity";
import { teamSecurity } from "src/utils/teamSecurity";
import { teamPR } from "src/utils/teamPR";
import { teamContent } from "src/utils/teamContent";
import { teamEvents } from "src/utils/teamEvents";
import { coordinator } from "src/utils/coordinator";
import { logistics } from "src/utils/logistics";

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
            className="font-primary text-4xl md:text-6xl text-center 
                mt-32 md:mt-20 mb-20"
          >
            Team{" "}
          </h1>

          {/* <div className="flex justify-center items-center gap-y-8 gap-x-8 flex-wrap">
            {TeamTSC.map((member) => (
              <TeamImage
                key={member?.Timestamp}
                src={member?.Photo}
                width={300}
                height={400}
                name={member?.Name}
                position={member?.["Position in TSC"]}
                instagram={member?.["Instagram profile URL"]}
                facebook="https://www.facebook.com/technicalsubcouncihbtu/"
                linkedin={member?.["LinkedIn profile URL "]}
              />
            ))}
          </div> */}

          <h1
            className="font-primary text-3xl md:text-5xl text-center 
                mt-32 md:mt-20 mb-10"
          >
            Secretaries
          </h1>
          <div className="flex justify-center items-center gap-y-8 gap-x-8 flex-wrap py-20">
            <TeamImage
              key={"Devendra Singh Parihar"}

              src="https://i.ibb.co/PxfcT3g/deven.jpg"

              width={300}
              height={400}
              name={"Devendra Singh Parihar"}
              position={"Student Secretary"}
              instagram={
                "https://instagram.com/_._pariharr_._?igshid=ZDdkNTZiNTM="
              }
              facebook="https://www.facebook.com/technicalsubcouncihbtu/"
              linkedin={
                "https://www.linkedin.com/in/devendra-singh-parihar-377057222"
              }
            />
            <TeamImage
              key={"Jahnavi Sachan"}
              src="https://drive.google.com/uc?id=16nlS8V6RlZ9cIlM1azYe_m-w1klgSMPv"
              width={300}
              height={400}
              name={"Jahnavi Sachan"}
              position={"Joint Secretary"}
              instagram={
                "https://instagram.com/artist_manas?igshid=YmMyMTA2M2Y="
              }
              facebook="https://www.facebook.com/technicalsubcouncihbtu/"
              linkedin={"https://www.linkedin.com/in/manas-motwani-685502229"}
            />
          </div>

          <h1
            className="font-primary text-3xl md:text-5xl text-center 
                mt-32 md:mt-20 mb-10"
          >
            Co-ordinator
          </h1>

          <div className="flex justify-center items-center gap-y-8 gap-x-8 flex-wrap py-20">
            {coordinator.map((member) => (
              <TeamImage
                key={member?.Timestamp}
                src={member?.Photo}
                width={300}
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
            Web Dev Team
          </h1>

          <div className="flex justify-center items-center gap-y-8 gap-x-8 flex-wrap py-20">
            {webdev.map((member) => (
              <TeamImage
                key={member?.Timestamp}
                src={member?.Photo}
                width={300}
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
            Hospitality Team
          </h1>

          <div className="flex justify-center items-center gap-y-8 gap-x-8 flex-wrap py-20">
            {teamHospitality.map((member) => (
              <TeamImage
                key={member?.Timestamp}
                src={member?.Photo}
                width={300}
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

          <div className="flex justify-center items-center gap-y-8 gap-x-8 flex-wrap py-20">
            {teamDesign.map((member) => (
              <TeamImage
                key={member?.Timestamp}
                src={member?.Photo}
                width={300}
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

          <div className="flex justify-center items-center gap-y-8 gap-x-8 flex-wrap py-20">
            {teamMarketing.map((member) => (
              <TeamImage
                key={member?.Timestamp}
                src={member?.Photo}
                width={300}
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

          <div className="flex justify-center items-center gap-y-8 gap-x-8 flex-wrap py-20">
            {photographyteam.map((member) => (
              <TeamImage
                key={member?.Timestamp}
                src={member?.Photo}
                width={300}
                height={400}
                name={member?.Name}
                position={member?.["Position in TSC"]}
                instagram={member?.["Instagram profile URL"]}
                facebook="https://www.facebook.com/technicalsubcouncihbtu/"
                linkedin={member?.["LinkedIn profile URL "]}
              />
            ))}
          </div>
          {/* Publicity Team */}
          <h1
            className="font-primary text-3xl md:text-5xl text-center 
                mt-32 md:mt-20 mb-10"
          >
            Publicity Team
          </h1>

          <div className="flex justify-center items-center gap-y-8 gap-x-8 flex-wrap py-20">
            {teamPublicity.map((member) => (
              <TeamImage
                key={member?.Timestamp}
                src={member?.Photo}
                width={300}
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
            Security Team
          </h1>

          <div className="flex justify-center items-center gap-y-8 gap-x-8 flex-wrap py-20">
            {teamSecurity.map((member) => (
              <TeamImage
                key={member?.Timestamp}
                src={member?.Photo}
                width={300}
                height={400}
                name={member?.Name}
                position={member?.["Position in TSC"]}
                instagram={member?.["Instagram profile URL"]}
                facebook="https://www.facebook.com/technicalsubcouncihbtu/"
                linkedin={member?.["LinkedIn profile URL "]}
              />
            ))}
          </div>
          {/* Events Team */}
          <h1
            className="font-primary text-3xl md:text-5xl text-center 
                mt-32 md:mt-20 mb-10"
          >
            Events Team
          </h1>

          <div className="flex justify-center items-center gap-y-8 gap-x-8 flex-wrap py-20">
            {teamEvents.map((member) => (
              <TeamImage
                key={member?.Timestamp}
                src={member?.Photo}
                width={300}
                height={400}
                name={member?.Name}
                position={member?.["Position in TSC"]}
                instagram={member?.["Instagram profile URL"]}
                facebook="https://www.facebook.com/technicalsubcouncihbtu/"
                linkedin={member?.["LinkedIn profile URL "]}
              />
            ))}
          </div>

          {/* Content Team */}
          <h1
            className="font-primary text-3xl md:text-5xl text-center 
                mt-32 md:mt-20 mb-10"
          >
            Content Team
          </h1>

          <div className="flex justify-center items-center gap-y-8 gap-x-8 flex-wrap py-20">
            {teamContent.map((member) => (
              <TeamImage
                key={member?.Timestamp}
                src={member?.Photo}
                width={300}
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
            Public and Relations Team
          </h1>

          <div className="flex justify-center items-center gap-y-8 gap-x-8 flex-wrap py-20">
            {teamPR.map((member) => (
              <TeamImage
                key={member?.Timestamp}
                src={member?.Photo}
                width={300}
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
            Logistics Team
          </h1>

          <div className="flex justify-center items-center gap-y-8 gap-x-8 flex-wrap py-20">
            {logistics.map((member) => (
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
