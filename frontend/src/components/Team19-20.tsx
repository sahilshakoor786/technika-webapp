import React from "react";

interface TeamMember {
  name: string;
  position: string;
  department: string;
}

const TeamMembersSection: React.FC<{
  title: string;
  members: TeamMember[];
}> = ({ title, members }) => {
  return (
    <div>
      <h2 className="text-l font-bold mb-4">{title}</h2>
      <ul>
        {members.map((member, index) => (
          <li key={index} className="mb-2">
            {member.name} - {member.department}
          </li>
        ))}
      </ul>
    </div>
  );
};

const TeamPage: React.FC = () => {
  const coreTeamMembers: TeamMember[] = [
    {
      name: "Ekansh Yadav",
      department: "IT",
      position: "Technical Secretary",
    },
    { name: "Om Shukla", department: "Civil", position: "Joint Secretary" },
    { name: "Ananya Tiwari", department: "CSE", position: "Event Head" },
    { name: "Amrisha Srivastava", department: "CHE", position: "Event Head" },
  ];

  const departmentalHeads: { [key: string]: TeamMember[] } = {
    MECHANICAL: [
      { name: "Amrit Sonker", position: "Head", department: "MECHANICAL" },
      { name: "Sonali Shree", position: "Head", department: "MECHANICAL" },
    ],
    "COMPUTER SCIENCE AND ENGG.": [
      {
        name: "Akshat Gupta",
        position: "Head",
        department: "COMPUTER SCIENCE AND ENGG.",
      },
      {
        name: "Priya Tiwari",
        position: "Head",
        department: "COMPUTER SCIENCE AND ENGG.",
      },
    ],
    "ELECTRONICS ENGG.": [
      {
        name: "Manya Aggarwal",
        position: "Head",
        department: "ELECTRONICS ENGG.",
      },
      {
        name: "Kashish Singh",
        position: "Head",
        department: "ELECTRONICS ENGG.",
      },
    ],
    "CIVIL ENGG. HEAD": [
      { name: "Amratya Dubey", position: "Head", department: "CIVIL ENGG." },
      { name: "Kanak Paliwal", position: "Head", department: "CIVIL ENGG." },
    ],
    "CHEMICAL ENGG. HEAD": [
      {
        name: "Amrisha Srivastava",
        position: "Head",
        department: "CHEMICAL ENGG.",
      },
      {
        name: "Shobhit Yadav",
        position: "Head",
        department: "CHEMICAL ENGG.",
      },
      {
        name: "Pragya Mathur",
        position: "Head",
        department: "CHEMICAL ENGG.",
      },
    ],
    "CENTRAL STAGE": [
      { name: "Komal Kushwaha", position: "Head", department: "CENTRAL STAGE" },
      { name: "Deepak Saini", position: "Head", department: "CENTRAL STAGE" },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <TeamMembersSection
        title="Technical Secretary"
        members={coreTeamMembers.filter(
          (member) => member.position === "Technical Secretary"
        )}
      />
      <TeamMembersSection
        title="Joint Secretary"
        members={coreTeamMembers.filter(
          (member) => member.position === "Joint Secretary"
        )}
      />
      <TeamMembersSection
        title="Event Heads"
        members={coreTeamMembers.filter(
          (member) => member.position === "Event Head"
        )}
      />

      <h1 className="text-3xl font-bold mb-4">Departmental Heads</h1>
      {Object.entries(departmentalHeads).map(([department, members]) => (
        <TeamMembersSection
          key={department}
          title={department}
          members={members}
        />
      ))}
    </div>
  );
};

export default TeamPage;
