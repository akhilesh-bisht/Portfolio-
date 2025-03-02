import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";

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
  const cardRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.set([cardRef.current, dotRef.current], {
      opacity: 0,
      y: 50,
    });

    if (cardRef.current && dotRef.current) {
      gsap.to([cardRef.current, dotRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    }
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isOpen]);

  return (
    <div className="relative pl-6 md:pl-10 border-l-4 border-blue-500 mx-auto max-w-full md:max-w-2xl">
      {/* Timeline Dot */}
      <div
        ref={dotRef}
        className="absolute left-0 top-6 w-3 h-3 md:w-4 md:h-4 bg-blue-500 border-4 border-[#1e1e1e] rounded-full shadow-md transform -translate-x-1/2"
      />

      {/* Experience Card */}
      <div
        ref={cardRef}
        className="bg-[#1e1e1e] shadow-lg rounded-lg p-4 md:p-6 mb-6 border border-gray-700 transition-all hover:shadow-2xl"
      >
        {/* Header Section */}
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer p-2 rounded-lg hover:bg-gray-800 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white">
              {experience.role}
              <span className="text-blue-400"> @ {experience.company}</span>
            </h3>
          </div>
          <div className="flex items-center space-x-2 mt-2 md:mt-0">
            <p className="text-xs md:text-sm text-gray-400">
              {experience.duration}
            </p>
            <ChevronDown
              className={`text-gray-400 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>

        {/* Collapsible Content */}
        <div
          ref={contentRef}
          className="overflow-hidden h-0 transition-all duration-300"
        >
          <ul className="space-y-2 md:space-y-3 text-gray-300 pt-3 md:pt-4 text-sm md:text-base">
            {experience.description.map((point, index) => (
              <li
                key={index}
                className="flex items-start before:content-['•'] before:text-blue-400 before:mr-2 md:before:mr-3"
              >
                {point}
              </li>
            ))}
          </ul>

          {/* Skills Section */}
          {experience.skills && (
            <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-700">
              <h4 className="text-xs md:text-sm font-semibold text-gray-400 mb-2 md:mb-3">
                Skills:
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center px-2 md:px-3 py-1 rounded-full bg-gray-700 text-white text-xs md:text-sm shadow-md hover:bg-gray-600 transition"
                  >
                    {skill.icon}
                    <span className="ml-1 md:ml-2">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
