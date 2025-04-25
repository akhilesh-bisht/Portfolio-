import { IoLogoReact, IoLogoJavascript } from "react-icons/io5";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiNodedotjs,
  SiShadcnui,
  SiMysql,
  SiFramer,
  SiChartdotjs,
  SiFirebase,
  SiSupabase,
  SiClerk,
} from "react-icons/si";

export const skillArray = [
  {
    name: "Javascript",
    logo: <IoLogoJavascript size={"3em"} />,
    mobileLogo: <IoLogoJavascript size={"2em"} />,
    color: "#f9e2af",
  },
  {
    name: "Express",
    logo: <SiExpress size={"3em"} />,
    mobileLogo: <SiExpress size={"2em"} />,
    color: "white",
  },
  {
    name: "Typescript",
    logo: <SiTypescript size={"3em"} />,
    mobileLogo: <SiTypescript size={"2em"} />,
    color: "#89b4fa",
  },
  {
    name: "React",
    logo: <IoLogoReact size={"3em"} />,
    mobileLogo: <IoLogoReact size={"2em"} />,
    color: "#74c7ec",
  },
  {
    name: "Tailwind",
    logo: <SiTailwindcss size={"3em"} />,
    mobileLogo: <SiTailwindcss size={"2em"} />,
    color: "#74c7ec",
  },
  {
    name: "Redux",
    logo: <SiRedux size={"3em"} />,
    mobileLogo: <SiRedux size={"2em"} />,
    color: "#b4befe",
  },
  {
    name: "Mongodb",
    logo: <SiMongodb size={"3em"} />,
    mobileLogo: <SiMongodb size={"2em"} />,
    color: "#a6e3a1",
  },
  {
    name: "Node",
    logo: <SiNodedotjs size={"3em"} />,
    mobileLogo: <SiNodedotjs size={"2em"} />,
    color: "#1cb82c",
  },
  {
    name: "shadcn/ui",
    logo: <SiShadcnui size={"3em"} />,
    mobileLogo: <SiShadcnui size={"2em"} />,
    color: "#c6a9b1",
  },
  {
    name: "Firebase",
    logo: <SiFirebase size="3em" />,
    mobileLogo: <SiFirebase size="2em" />,
    color: "#fbbf24",
  },
  {
    name: "Supabase",
    logo: <SiSupabase size="3em" />,
    mobileLogo: <SiSupabase size="2em" />,
    color: "#3ecf8e",
  },
  {
    name: "Clerk",
    logo: <SiClerk size="3em" />,
    mobileLogo: <SiClerk size="2em" />,
    color: "#ffffff",
  },
  {
    name: "Framer Motion",
    logo: <SiFramer size="3em" />,
    mobileLogo: <SiFramer size="2em" />,
    color: "#e879f9",
  },
  {
    name: "Graph.js",
    logo: <SiChartdotjs size="3em" />,
    mobileLogo: <SiChartdotjs size="2em" />,
    color: "#fdba74", // Orange shade
  },
  {
    name: "MySql",
    logo: <SiMysql size={"3em"} />,
    mobileLogo: <SiMysql size={"2em"} />,
    color: "#dd8a00",
  },
];

export interface Skill {
  name: string;
  logo: any;
  mobileLogo: any;
  color: string;
}

export const skillDefault: Skill = {
  name: "",
  logo: "",
  mobileLogo: "",
  color: "",
};
