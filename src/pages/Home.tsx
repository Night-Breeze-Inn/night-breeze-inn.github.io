import Projects from "../components/Projects";

const projects = [
  {
    name: "Draconae Project",
    description: "Your digital companion for creating and managing Dungeons & Dragons 5th Edition characters!",
    link: "https://github.com/Night-Breeze-Inn/Draconae-Project",
    image:
      "https://github.com/Night-Breeze-Inn/Draconae-Project/blob/main/src/main/resources/com/nightbreeze/images/logo-Draconae-Project.svg?raw=true",
  },
];

function Home() {
  return (
    <main className="container mx-auto flex flex-col items-center justify-center p-4">
      <div className="mb-8 mt-8 text-center">
        <h1 className="text-3xl font-bold">Welcome to the Nightbreeze Inn</h1>
      </div>
      <div className="mb-8 mt-8 text-center">
        <h2 className="text-xl font-bold">Our mission:</h2>
        <h2 className="text-2xl font-bold">Creating the best tools for TTRPG</h2>
      </div>
      <div className="mb-8 mt-8 text-center">
        <h2 className="text-xl font-bold">Our projects:</h2>
        <div className="mb-4 mt-4 text-center">
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map(project => (
                <Projects
                  key={project.name}
                  name={project.name}
                  description={project.description}
                  link={project.link}
                  image={project.image}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">
              We're busy crafting new tools. Check back soon for our projects!
            </p>
          )}
        </div>
      </div>
    </main>
  );
}

export default Home;
