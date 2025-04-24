import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // To use a chevron down for collapsing/expanding
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa"; // Example icons for skills

interface Skill {
  name: string;
  logo: React.ReactNode;
  mobileLogo: React.ReactNode;
  color: string;
}

interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
  skills: Skill[];
}

interface ExperienceProps {
  experience: Experience;
  width: number; // This is for checking the screen width for responsive icons
}

const Experience: React.FC<ExperienceProps> = ({ experience, width }) => {
  const [isOpen, setIsOpen] = useState(false); // To handle expanding/collapsing the description

  return (
    <div className="flex flex-col md:flex-row justify-between items-start w-full border-t border-gray-700 border-b py-6 px-4 space-y-6 md:space-y-0">
      {/* Left Section: Company and Role */}
      <div className="w-full md:w-1/3 p-2">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-white">
            {experience.role}{" "}
            <span className="text-blue-400">@ {experience.company}</span>
          </h3>
          <p className="text-sm text-gray-400">{experience.duration}</p>
        </div>
      </div>

      {/* Right Section: Description and Skills */}
      <div className="w-full md:w-2/3 flex flex-col items-start justify-start m-2">
        {/* Description Toggle Button */}
        <div
          className="cursor-pointer flex items-center text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="mr-2 text-sm">Description</p>
          <ChevronDown
            className={`transition-transform cursor-pointer ${
              isOpen ? "rotate-180" : ""
            }`}
            size={16}
          />
        </div>

        {/* Collapsible Description */}
        <div
          className={`mt-3 text-gray-300 list-disc list-inside space-y-2 text-sm transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {isOpen && (
            <ul className="space-y-2">
              {experience.description.map(
                (point, index) => (
                  console.log(point), (<li key={index}>{point}</li>)
                )
              )}
            </ul>
          )}
        </div>

        {/* Skills Section */}
        {experience.skills.length > 0 && (
          <div className="mt-6 border-t border-gray-700 pt-4">
            <h4 className="text-xs font-semibold text-gray-400 mb-2">
              Skills:
            </h4>
            <div className="flex flex-wrap gap-4">
              {experience.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center px-4 py-2 rounded-full bg-gray-700 text-white text-xs shadow-md hover:bg-gray-600 transition"
                  style={{ color: skill.color }}
                >
                  {width > 800 ? skill.logo : skill.mobileLogo}
                  <span className="ml-2">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
