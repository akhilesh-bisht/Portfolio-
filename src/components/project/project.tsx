import { useEffect, useState } from "react";
import { ProjectModel } from "src/models/projectModels/projectModel";
import { motion } from "framer-motion";

interface ProjectProps {
  projectObject: ProjectModel;
}

const Project: React.FC<ProjectProps> = ({ projectObject }) => {
  const [skillsTextArray, setSkillsTextArray] = useState<string[]>([]);

  useEffect(() => {
    setSkillsTextArray(projectObject.skills.map((skillName) => skillName));
  }, [projectObject.skills]);

  return (
    <motion.a
      href={projectObject.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className="w-full group cursor-pointer mt-8 rounded-lg border border-[#333] bg-[#121212] hover:bg-[#1f1f1f] transition-all duration-300 p-3 flex flex-col gap-2"
    >
      {/* Project Logo */}
      <div className="w-full flex  justify-center mb-2">
        <img
          src={projectObject.logo || "/default-logo.png"}
          alt={projectObject.name || "Project Logo"}
          className="object-cover rounded-md max-h-16"
        />
      </div>

      {/* Project Name */}
      <h3 className="text-sm font-medium text-white group-hover:text-blue-400 transition">
        {projectObject.name}
      </h3>

      {/* Project Description */}
      <p className="text-xs text-gray-400 mt-1 line-clamp-2">
        {projectObject.description}
      </p>

      {/* Tech Stack as Text */}
      <div className="text-xs text-gray-300 mt-2">
        <span className="font-medium text-white">Tech Stack: </span>
        {skillsTextArray.join(", ")}
      </div>

      {/* Visit Project Link */}
      <div className="text-xs text-blue-400 group-hover:underline mt-2">
        Visit Project →
      </div>
    </motion.a>
  );
};

export default Project;
