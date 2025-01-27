import { projectArray } from "src/models/projectModels/projectModel"
import Project from "../project/project"
import gsap from "gsap"
import { useEffect, useRef } from "react"

const ProjectContainer: React.FC = () => {
	const tl = useRef<GSAPTimeline>()

	useEffect(() => {
		tl.current = gsap.timeline().to(`.projectContainer`, {
			opacity: "100%",
			scale: 1,
			duration: 0.5,
			delay: 0.6,
			stagger: 0.40,
			ease: "power4.in"
		})
	}, [])

	return (
		<>
			<div className={"flex flex-col flex-start items-start gap-8 w-full"}>
				{projectArray.map((project) => {
					return (
						<div
							key={project.name}
							className={"projectContainer flex items-center justify-start w-full opacity-0"}
						>
							<Project projectObject={project} />
						</div>
					)
				})}
			</div >
		</>
	)
}
export default ProjectContainer
