import { useRef, useEffect } from "react";
import { ISocialLink } from "src/models/linkmodels/linkmodels"
import gsap from "gsap";

interface LinksContainerProps {
	linkObject: ISocialLink,
}
const LinksContainer: React.FC<LinksContainerProps> = ({ linkObject }) => {
	const app = useRef<HTMLDivElement>(null)
	const tl = useRef<GSAPTimeline>()


	useEffect(() => {
		tl.current = gsap.timeline().to(`.linkItem`, {
			rotateZ: ((): any => {
				let i = 0;
				return () => {
					let incrementAmount = i * 20;
					i++
					return `${(175 + incrementAmount)}deg`
				}
			})(),
			duration: 1,
			opacity: "100%",
			ease: "power4.out"
		})
	}, [])

	return (
		<div
			ref={app}
			className={`linkItem opacity-0 md:h-1/6 aspect-square rounded-full bg-gray-800 flex items-center justify-center absolute hover:bg-gray-700`}
			style={linkObject.position}
		>
			<a
				className={`relative flex items-center`}
				style={{ color: linkObject.iconColor }}
				href={linkObject.link}
				target={"_blank"}
			>
				{linkObject.logo}
			</a>
		</div>
	)
}
export default LinksContainer
