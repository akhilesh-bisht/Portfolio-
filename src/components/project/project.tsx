import { useEffect, useState } from "react"
import { useViewport } from "src/hooks/useViewport"
import { ProjectModel } from "src/models/projectModels/projectModel"
import { Skill, skillArray } from "src/models/skillModels/skillmodel"

interface ProjectProps {
	projectObject: ProjectModel
}
const Project: React.FC<ProjectProps> = ({ projectObject }) => {
	const [skillsIconArray, setSkillsIconArray] = useState<any>([])
	const width = useViewport().width

	const getSkillHandler = () => {
		const tempArray = []
		for (let i = 0; i < projectObject.skills.length; i++) {
			const a = skillArray.filter(skill => skill.name === projectObject.skills[i])
			tempArray.push(a[0])
		}
		setSkillsIconArray(tempArray)
	}

	useEffect(() => {
		getSkillHandler()
	}, [projectObject])

	return (
		<>
			<div className={"flex md:flex-row flex-col justify-between items-center w-full border-t border-t-gray-700 border-b border-b-gray-700"}>
				<div className={"w-3/4 md:w-1/3 p-1"}>
					<a href={projectObject.link} target={"_blank"} className={"max-h-20 flex items-center justify-center p-2"}>
						<img
							className={"object-cover rounded-md max-h-20"}
							src={projectObject.logo}
						>
						</img>
					</a>
				</div>
				<div className={"w-full md:w-2/3 flex flex-col items-start justify-center m-2"}>
					<div
						className={"flex w-full text-start items-start justify-start"}>
						{projectObject.description}
					</div>
					<div className={"flex flex-col md:flex-row w-full items-start justify-center md:justify-between gap-1"}>
						<div>
							<a
								className={"text-blue-500 hover:none md:hover:text-catlavender"}
								href={projectObject.link}
								target={"_blank"}>
								{projectObject.link}
							</a>
						</div>
						<div className={"flex items-start justify-end gap-1 w-full  p-0"} >
							{
								skillsIconArray.map((skill: Skill) => {
									return (
										<div
											key={skill.name}
											style={{ color: skill.color }}
											className={"text-xs"}
										>
											{width > 800 ? skill.logo : skill.mobileLogo}
										</div>
									)
								})
							}
						</div>
					</div>
				</div>
			</div >
		</>
	)
}
export default Project
