import { useEffect, useState } from "react";
import { useViewport } from "src/hooks/useViewport";
import { ProjectModel } from "src/models/projectModels/projectModel";
import { Skill, skillArray } from "src/models/skillModels/skillmodel";

interface ProjectProps {
  projectObject: ProjectModel;
}

const Project: React.FC<ProjectProps> = ({ projectObject }) => {
  const [skillsIconArray, setSkillsIconArray] = useState<Skill[]>([]);
  const { width } = useViewport();

  useEffect(() => {
    setSkillsIconArray(
      projectObject.skills
        .map((skillName) =>
          skillArray.find((skill) => skill.name === skillName)
        )
        .filter((skill): skill is Skill => !!skill) // Ensures correct type inference
    );
  }, [projectObject.skills]);

  return (
    <div className="flex md:flex-row flex-col justify-between items-center w-full border-t border-gray-700 border-b py-4">
      {/* Left Section - Project Logo */}
      <div className="w-3/4 md:w-1/3 p-2">
        <a
          href={projectObject.link}
          target="_blank"
          rel="noopener noreferrer"
          className="max-h-20 flex items-center justify-center p-2 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
        >
          <img
            className="object-cover rounded-md max-h-20"
            src={projectObject.logo || "/default-logo.png"} // Fallback image
            alt={projectObject.name || "Project Image"}
          />
        </a>
      </div>

      {/* Right Section - Project Description & Skills */}
      <div className="w-full md:w-2/3 flex flex-col items-start justify-center m-2">
        <div className="text-lg text-gray-700 mb-3">
          {projectObject.description}
        </div>

        {/* Project Link */}
        <div className="flex flex-col md:flex-row w-full items-start justify-between gap-1 mb-3">
          <a
            className="text-blue-500 hover:text-blue-700 font-medium"
            href={projectObject.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {projectObject.link}
          </a>

          {/* Skills Icons */}
          <div className="flex items-center justify-end gap-2 w-full p-0">
            {skillsIconArray.map((skill) => (
              <div
                key={skill.name}
                style={{ color: skill.color }}
                className="text-xs p-1 hover:scale-110 transition-all duration-300"
                title={skill.name} // Tooltip on hover to show skill name
              >
                {width > 800 ? <>{skill.logo}</> : <>{skill.mobileLogo}</>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
