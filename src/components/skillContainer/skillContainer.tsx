import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useViewport } from "src/hooks/useViewport";
import { skillArray } from "src/models/skillModels/skillmodel";

const SkillContainer: React.FC = () => {
	const tl = useRef<GSAPTimeline>()
	const width = useViewport();

	useEffect(() => {
		tl.current = gsap.timeline().to(`.skillContainer`, {
			opacity: "100%",
			scale: 1,
			duration: 0.5,
			delay: 0.18,
			stagger: 0.10,
			ease: "power3.in"
		})
	}, [])

	return (
		<>
			<div className={"grid grid-cols-3 gap-2"}>
				{
					skillArray.map((skill) => {
						return (
							<div
								key={skill.name}
								className={"skillContainer aspect-square flex flex-col items-center opacity-0 scale-125"}
							>
								<div
									style={{ color: skill.color }}>
									{width.width > 800 ?
										skill.logo :
										skill.mobileLogo

									}
								</div>
								<div>{skill.name}</div>
							</div>
						)
					})
				}
			</div>
		</>
	)
}
export default SkillContainer
