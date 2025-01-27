import gsap from "gsap"
import { useEffect, useRef } from "react"
import { TiDocumentText } from "react-icons/ti"
import resume from 'src/assets/MaddieResume.pdf';
import { useViewport } from "src/hooks/useViewport";

const ResumeContainer: React.FC = () => {
	const width = useViewport().width
	const tl = useRef<GSAPTimeline>()

	useEffect(() => {
		tl.current = gsap.timeline().to(`.resumeContainer`, {
			opacity: "100%",
			scale: 1,
			duration: 0.5,
			delay: 0.1,
			stagger: 0.10,
			ease: "power3.in"
		})
	}, [])
	return (

		<div
			className={"resumeContainer scale-125 opacity-0"}>
			<a href={resume} target={"_blank"} className={"text-catflamingo flex hover:none md:hover:text-catlavender flex-col items-center justify-center"}>
			<TiDocumentText size={width > 800 ? "5em": "3em"} />
			My Resume
			</a>
		</div>
	)
}
export default ResumeContainer
