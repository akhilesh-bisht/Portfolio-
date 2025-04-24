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
    <div className="flex md:flex-row flex-col justify-between items-center  w-full border-t border-gray-700 border-b">
      <div className="w-3/4 md:w-1/3 p-1">
        <a
          href={projectObject.link}
          target="_blank"
          rel="noopener noreferrer"
          className="max-h-20 flex items-center justify-center p-2"
        >
          <img
            className="object-cover rounded-md max-h-20"
            src={projectObject.logo || "/default-logo.png"} // Fallback image
            alt={projectObject.name || "Project Image"}
          />
        </a>
      </div>
      <div className="w-full md:w-2/3 flex flex-col items-start justify-center m-2">
        <div className="w-full text-start">{projectObject.description}</div>
        <div className="flex flex-col md:flex-row w-full items-start justify-between gap-1">
          <a
            className="text-blue-500 hover:no-underline md:hover:text-catlavender"
            href={projectObject.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {projectObject.link}
          </a>
          <div className="flex items-start justify-end gap-1 w-full p-0">
            {skillsIconArray.map((skill) => (
              <div
                key={skill.name}
                style={{ color: skill.color }}
                className="text-xs"
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
