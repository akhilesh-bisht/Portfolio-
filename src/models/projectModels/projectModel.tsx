import calleditlogo from "src/assets/photos/calledit/Calledit!.svg";
import resoniteshrinelogo from "src/assets/resoniteshrine.png";
import mpslogo from "src/assets/photos/mps.svg";
import inventoryPhoto from "src/assets/photos/inventory.png";
import chesslogo from "src/assets/photos/chessLogo.png";

export interface ProjectModel {
  name: string;
  description: string;
  logo: string;
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
    logo: chesslogo,
    skills: ["Javascript", "React", "Tailwind", "Redux"],
    link: "https://job-finder-kohl.vercel.app/find-jobs",
  },
  {
    name: "Chat with Friends",
    description:
      "A blog style website where I can post articles and tutorials for the VR game Resonite",
    logo: resoniteshrinelogo,
    skills: ["Javascript", "React", "Tailwind", "Typescript", "Django"],
    link: "https://github.com/akhilesh-bisht/Full-stack-Chat-app",
  },
  {
    name: "Inventory System",
    description:
      "A basic inventory management system with functionality for fulfilling orders, restocking, and adding and editing shop items",
    logo: inventoryPhoto,
    skills: ["Javascript", "Vue", "Typescript", "PHP", "MySql"],
    link: "https://stckrz.com/vueFrontend",
  },
  {
    name: "Calledit!",
    description:
      "Users make a prediction, and other users vote whether or not they think it will come true!",
    logo: calleditlogo,
    skills: [
      "Javascript",
      "React",
      "Typescript",
      "Tailwind",
      "Mongodb",
      "Express",
    ],
    link: "https://stckrz.com/calleditprod",
  },
  {
    name: "Mythic Plus Spy",
    description:
      "Simple application which shows how many rewards a character in World of Warcraft has unlocked for their vault in the current week.",
    logo: mpslogo,
    skills: ["Javascript", "React", "Typescript", "Tailwind"],
    link: "https://stckrz.com/MythicPlusSpy",
  },
];
