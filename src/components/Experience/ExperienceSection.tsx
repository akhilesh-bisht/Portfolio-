import React from "react";
import Experience from "./Experience";
import { FaReact, FaNodeJs, FaCss3Alt, FaFigma } from "react-icons/fa"; // Example icons from react-icons

const experiences: Experience[] = [
  {
    company: "KisanCash",
    role: "SDE - Frontend ",
    duration: "January 2025 - Present",
    description: [
      "Developed and maintained features for a fintech platform aimed at providing financial solutions to farmers.",
      "Implemented backend APIs for loan management and payment processing using Node.js and Express.",
      "Built responsive frontend interfaces for farmer dashboards using React and Tailwind CSS.",
      "Collaborated with the product team to ensure the platform meets the needs of farmers in rural areas.",
      "Optimized database queries and improved application performance for better scalability.",
    ],
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <FaNodeJs /> }, // You can use the same icon or find a specific one
      { name: "MongoDB", icon: <FaNodeJs /> }, // Replace with a MongoDB icon if available
      { name: "REST APIs", icon: <FaNodeJs /> }, // Replace with an appropriate icon
      { name: "Fintech", icon: <FaNodeJs /> }, // Replace with an appropriate icon
    ],
  },
  {
    company: "Mentornix Consult Pvt Ltd",
    role: "Frontend Developer Intern",
    duration: "August 2024 - January 2025",
    description: [
      "Built responsive and user-friendly interfaces using React and Tailwind CSS.",
      "Integrated RESTful APIs for seamless data exchange.",
      "Conducted code reviews and contributed to team knowledge sharing.",
    ],
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <FaCss3Alt /> },
      { name: "REST APIs", icon: <FaNodeJs /> },
      { name: "JavaScript", icon: <FaNodeJs /> }, // Replace with a JavaScript icon
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
      { name: "Figma", icon: <FaFigma /> },
      { name: "Adobe XD", icon: <FaFigma /> }, // Replace with an Adobe XD icon
      { name: "UI/UX Design", icon: <FaFigma /> }, // Replace with an appropriate icon
      { name: "Responsive Design", icon: <FaCss3Alt /> },
    ],
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <div className="w-full md:w-3/4 flex flex-col items-center md:items-start">
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Experience key={index} experience={exp} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
