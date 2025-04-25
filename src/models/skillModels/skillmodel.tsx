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
    logo: <IoLogoJavascript size={"1.8em"} />,
    mobileLogo: <IoLogoJavascript size={"1.4em"} />,
    color: "#f9e2af",
  },
  {
    name: "Express",
    logo: <SiExpress size={"1.8em"} />,
    mobileLogo: <SiExpress size={"1.4em"} />,
    color: "white",
  },
  {
    name: "Typescript",
    logo: <SiTypescript size={"1.8em"} />,
    mobileLogo: <SiTypescript size={"1.4em"} />,
    color: "#89b4fa",
  },
  {
    name: "React",
    logo: <IoLogoReact size={"1.8em"} />,
    mobileLogo: <IoLogoReact size={"1.4em"} />,
    color: "#74c7ec",
  },
  {
    name: "Tailwind",
    logo: <SiTailwindcss size={"1.8em"} />,
    mobileLogo: <SiTailwindcss size={"1.4em"} />,
    color: "#74c7ec",
  },
  {
    name: "Redux",
    logo: <SiRedux size={"1.8em"} />,
    mobileLogo: <SiRedux size={"1.4em"} />,
    color: "#b4befe",
  },
  {
    name: "Mongodb",
    logo: <SiMongodb size={"1.8em"} />,
    mobileLogo: <SiMongodb size={"1.4em"} />,
    color: "#a6e3a1",
  },
  {
    name: "Node",
    logo: <SiNodedotjs size={"1.8em"} />,
    mobileLogo: <SiNodedotjs size={"1.4em"} />,
    color: "#1cb82c",
  },
  {
    name: "shadcn/ui",
    logo: <SiShadcnui size={"1.8em"} />,
    mobileLogo: <SiShadcnui size={"1.4em"} />,
    color: "#c6a9b1",
  },
  {
    name: "Firebase",
    logo: <SiFirebase size="1.8em" />,
    mobileLogo: <SiFirebase size="1.4em" />,
    color: "#fbbf24",
  },
  {
    name: "Supabase",
    logo: <SiSupabase size="1.8em" />,
    mobileLogo: <SiSupabase size="1.4em" />,
    color: "#3ecf8e",
  },
  {
    name: "Clerk",
    logo: <SiClerk size="1.8em" />,
    mobileLogo: <SiClerk size="1.4em" />,
    color: "#ffffff",
  },
  {
    name: "Framer Motion",
    logo: <SiFramer size="1.8em" />,
    mobileLogo: <SiFramer size="1.4em" />,
    color: "#e879f9",
  },
  {
    name: "Graph.js",
    logo: <SiChartdotjs size="1.8em" />,
    mobileLogo: <SiChartdotjs size="1.4em" />,
    color: "#fdba74",
  },
  {
    name: "MySql",
    logo: <SiMysql size={"1.8em"} />,
    mobileLogo: <SiMysql size={"1.4em"} />,
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
