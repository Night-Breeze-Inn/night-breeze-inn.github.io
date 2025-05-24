import TeamMemberCard from "../components/team";

const teamMembers = [
  {
    name: "Thomas MAFILLE",
    role: "Founder & Lead Developer",
    image: "",
    description:
      "Thomas is the founder of Nightbreeze Inn and the lead developer of our tools. He has a passion for TTRPGs and has been playing them for over a decade. He is dedicated to creating the best tools for TTRPGs and making them accessible to everyone.",
  },
  {
    name: "Rémy Maillard",
    role: "Lead Tester & Developer",
    image: "",
    description:
      "Rémy is the lead tester and developer of our tools. He has a keen eye for detail and is dedicated to ensuring that our tools are bug-free and easy to use. He is also a passionate TTRPG player and loves to create new adventures for his friends.",
  },
];

function About() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="mt-4 text-3xl font-bold">Who are we?</h1>
      <p className="pb-4 pt-4">
        Nightbreeze Inn (also called NBI for short) is a small group of friends created by Thomas MAFILLE with one
        objective: <strong>Creating the best tools for TTRPG</strong>. <br />
        <br />
        We are a group of developers, artists, and writers who are passionate about tabletop role-playing games (TTRPGs)
        and want to make the experience better for everyone.
      </p>
      <hr className="my-4" />
      <h1 className="pt-4 text-3xl font-bold">Our specialities:</h1>
      <p className="pb-4 pt-4">
        Due to our huge passion for TTRPGs, we know a lot about them and we are able to create tools that are tailored
        to the needs of TTRPG players and game masters. We are also able to create tools that are easy to use and
        accessible to everyone, regardless of their experience level. <br />
        <br />
        Therefore, we are able to create tools that are not only functional but also fun to use. We believe that TTRPGs
        should be enjoyable and that the tools we create should enhance the experience, not detract from it.
      </p>
      <hr className="my-4" />
      <h1 className="pt-4 text-3xl font-bold">Our Tech Stack:</h1>
      <div className="pb-4 pt-4">
        We are using different technologies to create our tools, including:
        <div className="grid h-36 grid-cols-2 overflow-hidden pt-2">
          <ul className="list-disc pl-6 pt-2">
            <li>React</li>
            <li>Node.js</li>
            <li>PostgreSQL</li>
            <li>Neo4j</li>
            <li>TailwindCSS</li>
          </ul>
          <ul className="list-disc pl-6 pt-2">
            <li>TypeScript</li>
            <li>Next.js</li>
            <li>Java</li>
            <li>Electron</li>
            <li>Vite</li>
          </ul>
        </div>
      </div>
      <hr className="my-4" />
      <h1 className="pt-4 text-3xl font-bold">Meet the main team:</h1>
      <div className="grid grid-cols-1 gap-4 pt-8 md:grid-cols-2">
        {teamMembers.map(member => (
          <TeamMemberCard
            key={member.name}
            name={member.name}
            role={member.role}
            image={member.image}
            description={member.description}
          />
        ))}
      </div>
    </main>
  );
}

export default About;
