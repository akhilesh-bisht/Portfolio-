import { IoLogoReact, IoLogoJavascript, IoLogoPython, IoLogoVue } from "react-icons/io5"
import { SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiRedux, SiDjango, SiPhp, SiMysql } from "react-icons/si"

export const skillArray = [
	{
		name: "Javascript",
		logo: <IoLogoJavascript size={"3em"} />,
		mobileLogo: <IoLogoJavascript size={"2em"} />,
		color: "#f9e2af"
	},
	{
		name: "Express",
		logo: <SiExpress size={"3em"} />,
		mobileLogo: <SiExpress size={"2em"} />,
		color: "white"
	},
	{
		name: "Typescript",
		logo: <SiTypescript size={"3em"} />,
		mobileLogo: <SiTypescript size={"2em"} />,
		color: "#89b4fa"
	},
	{
		name: "React",
		logo: <IoLogoReact size={"3em"} />,
		mobileLogo: <IoLogoReact size={"2em"} />,
		color: "#74c7ec"
	},
	{
		name: "Tailwind",
		logo: <SiTailwindcss size={"3em"} />,
		mobileLogo: <SiTailwindcss size={"2em"} />,
		color: "#74c7ec"
	},
	{
		name: "Redux",
		logo: <SiRedux size={"3em"} />,
		mobileLogo: <SiRedux size={"2em"} />,
		color: "#b4befe"
	},
	{
		name: "Vue",
		logo: <IoLogoVue size={"3em"} />,
		mobileLogo: <IoLogoVue size={"2em"} />,
		color: "#00b77e"
	},
	{
		name: "PHP",
		logo: <SiPhp size={"3em"} />,
		mobileLogo: <SiPhp size={"2em"} />,
		color: "#7377ad"
	},
	{
		name: "MySql",
		logo: <SiMysql size={"3em"} />,
		mobileLogo: <SiMysql size={"2em"} />,
		color: "#dd8a00"
	},
	{
		name: "Mongodb",
		logo: <SiMongodb size={"3em"} />,
		mobileLogo: <SiMongodb size={"2em"} />,
		color: "#a6e3a1"
	},
	{
		name: "Python",
		logo: <IoLogoPython size={"3em"} />,
		mobileLogo: <IoLogoPython size={"2em"} />,
		color: "#fab387"
	},
	{
		name: "Django",
		logo: <SiDjango size={"3em"} />,
		mobileLogo: <SiDjango size={"2em"} />,
		color: "#94e2d5"
	},
]

export interface Skill {
	name: string,
	logo: any,
	mobileLogo: any,
	color: string
}

export const skillDefault: Skill = {
	name: "",
	logo: "",
	mobileLogo: "",
	color: ""
}
