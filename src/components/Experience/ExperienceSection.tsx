import React from "react";
import Experience from "./Experience";
import { FaReact, FaNodeJs, FaCss3Alt, FaFigma, FaJs } from "react-icons/fa"; // Added FaJs for JavaScript

const experiences = [
  {
    company: "KisanCash",
    role: "Frontend Developer",
    duration: "Jan 2025 - Present",
    description: [
      "Developed and maintained features for a fintech platform aimed at providing financial solutions to farmers.",
      "Implemented backend APIs for loan management and payment processing using Node.js and Express.",
      "Built responsive frontend interfaces for farmer dashboards using React and Tailwind CSS.",
      "Collaborated with the product team to ensure the platform meets the needs of farmers in rural areas.",
      "Optimized database queries and improved application performance for better scalability.",
    ],
    skills: [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express", icon: <FaNodeJs className="text-green-500" /> },
      { name: "MongoDB", icon: <FaNodeJs className="text-green-500" /> },
      { name: "REST APIs", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Fintech", icon: <FaNodeJs className="text-green-500" /> },
    ],
  },
  {
    company: "Mentornix Consult Pvt Ltd",
    role: "Frontend Dev Intern",
    duration: "Aug 2024 - Jan 2025",
    description: [
      "Built responsive and user-friendly interfaces using React and Tailwind CSS.",
      "Integrated RESTful APIs for seamless data exchange.",
      "Conducted code reviews and contributed to team knowledge sharing.",
    ],
    skills: [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Tailwind CSS", icon: <FaCss3Alt className="text-teal-400" /> },
      { name: "REST APIs", icon: <FaNodeJs className="text-green-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    ],
  },
  {
    company: "Internship Studio",
    role: "Web Designer Intern",
    duration: "May 2024 - July 2024",
    description: [
      "Designed and prototyped website layouts using Figma and Adobe XD.",
      "Collaborated with developers to implement designs into functional websites.",
      "Ensured designs were responsive and adhered to UX best practices.",
    ],
    skills: [
      { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
      { name: "Adobe XD", icon: <FaFigma className="text-pink-400" /> },
      { name: "UI/UX Design", icon: <FaFigma className="text-pink-400" /> },
      {
        name: "Responsive Design",
        icon: <FaCss3Alt className="text-teal-400" />,
      },
    ],
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center md:text-left">
      {/* <h2 className="text-3xl font-bold mb-8 text-white">Experience</h2> */}
      <div className="w-full max-w-4xl mt-4 px-4 md:px-0 space-y-8">
        {experiences.map((exp, index) => (
          <Experience key={index} experience={exp} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
