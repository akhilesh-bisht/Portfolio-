import React from "react";
import Experience from "./Experience";

// Icon imports
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
 
  SiVercel,
  SiMongodb,
  SiExpress,
  SiJsonwebtokens,
  SiOpenai,
  SiAdobexd,
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

const experiences = [
  {
    company: "VaishaliTech",
    role: "Full Stack Developer intern",
    duration: "May 2025 - Present",
    description: [
      "Worked as a Full Stack Developer intern on a laundry management , Blog , landing page  web application.",
      "Developed user-friendly interfaces for customers to schedule pickups, track orders, and manage payments using React and Tailwind CSS.",
      "Implemented backend APIs for order processing, user authentication, and payment integration with Node.js and Express.",
      "Designed and optimized MongoDB schemas for efficient storage of customer, order, and transaction data.",
      "Collaborated with the team to integrate real-time order status updates and notifications.",
      "Ensured the application was responsive, secure, and scalable to handle growing user demand.",
    ],

    skills: [
      {
        name: "React",
        logo: <FaReact />,
        mobileLogo: <FaReact />,
        color: "#61DBFB",
      },
      {
        name: "Node.js",
        logo: <FaNodeJs />,
        mobileLogo: <FaNodeJs />,
        color: "#68A063",
      },
      {
        name: "Express",
        logo: <SiExpress />,
        mobileLogo: <SiExpress />,
        color: "#000000",
      },
      {
        name: "MongoDB",
        logo: <SiMongodb />,
        mobileLogo: <SiMongodb />,
        color: "#4DB33D",
      },
      {
        name: "JWT",
        logo: <SiJsonwebtokens />,
        mobileLogo: <SiJsonwebtokens />,
        color: "#000000",
      },
        {
        name: "Tailwind CSS",
        logo: <SiTailwindcss />,
        mobileLogo: <SiTailwindcss />,
        color: "#000000",
      },
      {
        name: "REST APIs",
        logo: <FaNodeJs />,
        mobileLogo: <FaNodeJs />,
        color: "#68A063",
      },
     
      {
        name: "OpenAI",
        logo: <SiOpenai />,
        mobileLogo: <SiOpenai />,
        color: "#10A37F",
      },
    ],
  },
  {
    company: "KisanCash",
    role: "Frontend Developer intern",
    duration: "Jan 2025 - April 2025",
    description: [
      "Developed and maintained features for a fintech platform aimed at providing financial solutions to farmers.",
      "Implemented backend APIs for loan management and payment processing using Node.js and Express.",
      "Built responsive frontend interfaces for farmer dashboards using React and Tailwind CSS.",
      "Collaborated with the product team to ensure the platform meets the needs of farmers in rural areas.",
      "Optimized database queries and improved application performance for better scalability.",
    ],
    skills: [
      {
        name: "React",
        logo: <FaReact />,
        mobileLogo: <FaReact />,
        color: "#61DBFB",
      },
      {
        name: "Node.js",
        logo: <FaNodeJs />,
        mobileLogo: <FaNodeJs />,
        color: "#68A063",
      },
      {
        name: "Express",
        logo: <SiExpress />,
        mobileLogo: <SiExpress />,
        color: "#000000",
      },
      {
        name: "MongoDB",
        logo: <SiMongodb />,
        mobileLogo: <SiMongodb />,
        color: "#4DB33D",
      },
      {
        name: "JWT",
        logo: <SiJsonwebtokens />,
        mobileLogo: <SiJsonwebtokens />,
        color: "#000000",
      },
      {
        name: "REST APIs",
        logo: <FaNodeJs />,
        mobileLogo: <FaNodeJs />,
        color: "#68A063",
      },
      {
        name: "Fintech",
        logo: <GiArtificialIntelligence />,
        mobileLogo: <GiArtificialIntelligence />,
        color: "#5B21B6",
      },
      {
        name: "OpenAI",
        logo: <SiOpenai />,
        mobileLogo: <SiOpenai />,
        color: "#10A37F",
      },
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
      {
        name: "Figma",
        logo: <FaFigma />,
        mobileLogo: <FaFigma />,
        color: "#F24E1E",
      },
      {
        name: "Adobe XD",
        logo: <SiAdobexd />,
        mobileLogo: <SiAdobexd />,
        color: "#FF61F6",
      },
      {
        name: "UI/UX Design",
        logo: <FaFigma />,
        mobileLogo: <FaFigma />,
        color: "#F24E1E",
      },
      {
        name: "Responsive Design",
        logo: <FaCss3Alt />,
        mobileLogo: <FaCss3Alt />,
        color: "#264de4",
      },
      {
        name: "Vercel",
        logo: <SiVercel />,
        mobileLogo: <SiVercel />,
        color: "#000000",
      },
    ],
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center md:text-left py-12">
      <div className="w-full max-w-4xl mt-4 px-4 md:px-0 space-y-8">
        {experiences.map((exp, index) => (
          <Experience key={index} experience={exp} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
