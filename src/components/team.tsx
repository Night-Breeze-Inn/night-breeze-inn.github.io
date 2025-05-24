import React from "react";

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  description: string;
}
const TeamMemberCard: React.FC<TeamMember> = ({ name, role, image, description }) => {
  const memberCard = (
    <div className="rounded-lg bg-white p-4 shadow">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">{role}</p>
      {image && (
        <div className="mb-2 flex justify-center">
          <img src={image} alt={`${name} profile`} className="h-32 max-w-64 object-cover" />
        </div>
      )}
      <p className="pt-2">{description}</p>
    </div>
  );

  return <div>{memberCard}</div>;
};

export default TeamMemberCard;
