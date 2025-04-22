import dashboard from "src/assets/photos/dashboard( sales).png";

export interface ProjectModel {
  name: string;
  description: string;
  logo?: string;
  skills: string[];
  link: string;
}

export const projectModelDefault = {
  name: "",
  description: "",
  logo: "",
  skills: [],
  link: "",
};

export const projectArray = [
  {
    name: "Job -Finder",
    description:
      "Job Finder is a React app using Shadcn UI to display filtered job listings.",
    // logo: chesslogo,
    skills: ["Javascript", "React", "Tailwind", "Redux"],
    link: "https://job-finder-kohl.vercel.app/find-jobs",
  },
  {
    name: "Chat with Friends",
    description:
      "A blog style website where I can post articles and tutorials for the VR game Resonite",
    // logo: resoniteshrinelogo,
    skills: ["Javascript", "React", "Tailwind css", "Typescript", "Django"],
    link: "https://github.com/akhilesh-bisht/Full-stack-Chat-app",
  },
  {
    name: "Inventory System",
    description: "",
    logo: dashboard,
    skills: ["Javascript", "Vue", "Typescript", "PHP", "MySql"],
    // link: "https://stckrz.com/vueFrontend",
  },
];
