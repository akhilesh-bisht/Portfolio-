// import React, { useState, useEffect } from "react";
// import { ChevronDown } from "lucide-react";

// interface Skill {
//   name: string;
//   logo: React.ReactNode;
//   mobileLogo: React.ReactNode;
//   color: string;
// }

// interface Experience {
//   company: string;
//   role: string;
//   duration: string;
//   description: string[];
//   skills: Skill[];
// }

// interface ExperienceProps {
//   experience: Experience;
// }

// const Experience: React.FC<ExperienceProps> = ({ experience }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [width, setWidth] = useState<number>(
//     typeof window !== "undefined" ? window.innerWidth : 1024
//   );

//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="flex flex-col md:flex-row justify-between items-start w-full border-t border-gray-700 border-b py-6 px-4 space-y-6 md:space-y-0">
//       {/* Left Section */}
//       <div className="w-full md:w-1/3 p-2">
//         <div className="flex flex-col">
//           <h3 className="text-lg font-semibold text-white">
//             {experience.role}{" "}
//             <span className="text-blue-400">@ {experience.company}</span>
//           </h3>
//           <p className="text-sm text-gray-400">{experience.duration}</p>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="w-full md:w-2/3 flex flex-col items-start justify-start m-2">
//         {/* Toggle Description */}
//         <button
//           className="cursor-pointer flex items-center text-gray-300 hover:text-white focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-expanded={isOpen}
//         >
//           <p className="mr-2 text-sm">Description</p>
//           <ChevronDown
//             className={`transition-transform duration-300 ease-in-out ${
//               isOpen ? "rotate-180" : ""
//             }`}
//             size={16}
//           />
//         </button>

//         {/* Description */}
//         <div
//           className={`overflow-hidden transition-all duration-300 ease-in-out ${
//             isOpen ? "max-h-[1000px] opacity-100 mt-3" : "max-h-0 opacity-0"
//           }`}
//         >
//           <ul className="text-gray-300 list-disc list-inside space-y-2 text-sm">
//             {experience.description.map((point, index) => (
//               <li key={index}>{point}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Skills */}
//         {experience.skills.length > 0 && (
//           <div className="mt-6 border-t border-gray-700 pt-4">
//             <h4 className="text-xs font-semibold text-gray-400 mb-2">
//               Skills:
//             </h4>
//             <div className="flex flex-wrap gap-4">
//               {experience.skills.map((skill, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center px-4 py-2 rounded-full bg-gray-700 text-white text-xs shadow-md hover:bg-gray-600 transition"
//                   style={{ color: skill.color }}
//                 >
//                   {width > 800 ? skill.logo : skill.mobileLogo}
//                   <span className="ml-2">{skill.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Experience;
import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  overview?: string; // Optional overview text
}

interface ExperienceProps {
  experience: Experience;
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="w-full rounded-xl border border-gray-800 bg-gradient-to-tr from-[#1a1a1a] to-[#2a2a2a] p-6 shadow-lg transition-all hover:shadow-2xl"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-white">
            {experience.role}
            <span className="text-blue-400"> · {experience.company}</span>
          </h3>
          <p className="text-sm text-gray-400">{experience.duration}</p>
        </div>

        {/* Toggle Description Button */}
        <button
          className="flex items-center gap-2 text-sm text-gray-300 hover:text-white mt-2 md:mt-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{isOpen ? "Hide" : "Show"} Details</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </button>
      </div>

      {/* Description */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-4"
          >
            {experience.overview && (
              <p className="text-sm text-gray-400 mb-3">
                {experience.overview}
              </p>
            )}
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
              {experience.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skills */}
      {experience.skills.length > 0 && (
        <div className="mt-6 pt-4 border-t border-gray-700">
          <h4 className="text-xs uppercase tracking-wide text-gray-400 mb-3">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-3">
            {experience.skills.map((skill, index) => (
              <div
                key={index}
                className="inline-flex items-center px-3 py-2 space-x-2 rounded-full bg-gray-800 text-white text-xs font-medium hover:bg-gray-700 transition"
                style={{ color: skill.color }}
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  {width > 800 ? skill.logo : skill.mobileLogo}
                </div>
                <span className="whitespace-nowrap">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Experience;
