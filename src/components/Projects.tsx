import React from "react";

interface Project {
  name: string;
  description: string;
  link: string;
  image?: string;
}

const Projects: React.FC<Project> = ({ name, description, link, image }) => {
  const projectCard = (
    <a href={link} className="p-2 text-primary-700" target="_blank" rel="noopener noreferrer">
      <div className="mb-4 rounded-lg border-2 border-primary-50 bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg">
        <div className="mb-2 flex justify-center">
          {image && <img src={image} alt={`${name} preview`} className="h-32 max-w-64 object-cover" />}
        </div>
        <h3 className="p-2 text-xl font-bold">{name}</h3>
        <p className="p-2">{description}</p>
      </div>
    </a>
  );

  return <div>{projectCard}</div>;
};

export default Projects;
