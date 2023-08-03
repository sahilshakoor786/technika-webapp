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
      name: "Prateek Kumar Singh",
      department: "ME",
      position: "Technical Secretary",
    },
    { name: "Bhashkar Singh", department: "ET", position: "Joint Secretary" },
    { name: "Rinku Yadav", department: "ME", position: "Event Head" },
    { name: "Amrisha Srivastava", department: "CHE", position: "Event Head" },
  ];

  const departmentalHeads: { [key: string]: TeamMember[] } = {
    MECHANICAL: [
      { name: "Pyush Verma", position: "Head", department: "MECHANICAL" },
      { name: "Sagar Gupta", position: "Head", department: "MECHANICAL" },
    ],
    "COMPUTER SCIENCE AND ENGG.": [
      {
        name: "Anik Gupta",
        position: "Head",
        department: "COMPUTER SCIENCE AND ENGG.",
      },
      {
        name: "Ankit Gupta",
        position: "Head",
        department: "COMPUTER SCIENCE AND ENGG.",
      },
    ],
    "ELECTRONICS ENGG.": [
      {
        name: "Himanshi Paliwal",
        position: "Head",
        department: "ELECTRONICS ENGG.",
      },
      {
        name: "Ravinder Singh",
        position: "Head",
        department: "ELECTRONICS ENGG.",
      },
    ],
    "CIVIL ENGG. HEAD": [
      { name: "Shruti Raypa", position: "Head", department: "CIVIL ENGG." },
      { name: "Mahima Rajput", position: "Head", department: "CIVIL ENGG." },
    ],
    "CHEMICAL ENGG. HEAD": [
      { name: "Mayank Sharma", position: "Head", department: "CHEMICAL ENGG." },
      {
        name: "Amrisha Srivastava",
        position: "Head",
        department: "CHEMICAL ENGG.",
      },
      {
        name: "Nikhil Aggarwal",
        position: "Head",
        department: "CHEMICAL ENGG.",
      },
    ],
    "CENTRAL STAGE": [
      { name: "Saloni Maurya", position: "Head", department: "CENTRAL STAGE" },
      { name: "Harshit Dubey", position: "Head", department: "CENTRAL STAGE" },
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
