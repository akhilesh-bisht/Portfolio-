import React from "react";
interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
  skills?: Skill[];
}

interface ExperienceProps {
  experience: Experience;
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <div className="relative pl-8 border-l-2 border-gray-300">
      {/* Timeline Dot */}
      <div className="absolute left-0 top-2 w-5 h-5 bg-blue-500 rounded-full transform -translate-x-1/2"></div>

      {/* Company and Role */}
      <h3 className="text-xl font-semibold">
        {experience.role} - {experience.company}
      </h3>

      {/* Duration */}
      <p className="text-sm text-gray-500 mb-2">{experience.duration}</p>

      {/* Description */}
      <ul className="list-disc list-inside">
        {experience.description.map((point, index) => (
          <li key={index} className="mb-1">
            {point}
          </li>
        ))}
      </ul>

      {/* Skills (Optional) */}
      {experience.skills && (
        <div className="mt-2">
          <span className="font-medium">Skills:</span>
          <div className="flex flex-wrap gap-2 mt-1">
            {experience.skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded text-sm"
              >
                {/* Skill Icon */}
                <span className="w-4 h-4">{skill.icon}</span>
                {/* Skill Name */}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
