import React from "react";

const experiences = [
  {
    company: "Mentornix Consultancy PVT LTD",
    role: "Full Stack Intern",
    duration: "July 2024 - Present",
    description:
      "Worked on building serverless tools using react.js and Mantine UI framework.",
    skills: ["React.js", "Mantine", "Node.js", "MongoDB", "Express.js"],
  },

  {
    company: "Internship Studio",
    role: "Web Designer",
    duration: "May 2024 - July 2024",
    description:
      "Collaborated on web design and development for multiple small-scale projects.",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Figma"],
  },
  {
    company: "Innobite Services",
    role: "Frontend Developer Intern",
    duration: "Feb 2024 - April 2024",
    description:
      "Developed responsive UI components using React and Tailwind CSS for various client projects.",
    skills: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
  },
];

const Experience = () => {
  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center sm:text-left">
          Work Experience
        </h1>

        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 transition duration-500 hover:scale-105"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {exp.role}
              </h2>
              <p className="text-sm text-gray-600">{exp.company}</p>
              <p className="text-sm text-gray-500 italic mb-3">
                {exp.duration}
              </p>
              <p className="text-gray-700 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-blue-500 text-white text-sm font-medium py-1 px-3 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
