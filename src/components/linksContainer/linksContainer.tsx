import SocialLink from 'components/socialLink/socialLink';
import { useEffect, useRef } from 'react';
import { iconDictionary } from 'src/models/linkmodels/linkmodels';
import gsap from "gsap";

export interface Dimensions {
	width: number,
	height: number
}
const LinksContainer: React.FC = () => {
	const tl = useRef<GSAPTimeline>()

	useEffect(() => {
		tl.current = gsap.timeline().to(`.linkContainer`, {
			rotateZ: ((): any => {
				let i = 0;
				return () => {
					let incrementAmount = i * 20;
					i++
					return `${(185 - incrementAmount)}deg`
				}
			})(),
			duration: 2,
			stagger: 0.25,
			ease: "power4.out"
		})
	}, [])

	return (
		<div
			className={"h-full aspect-square absolute rounded-full"}>
			{
				iconDictionary.map((link) => {
					return (
						<div
							key={link.id}
							className={`${link.name} linkContainer h-full aspect-square absolute rounded-full rotate-45`}
						>
							<SocialLink linkObject={link} />
						</div>
					)
				})
			}
		</div>
	)
}
export default LinksContainer
