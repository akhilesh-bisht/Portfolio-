// src/components/Projects.jsx
import myntrap from "../assets/myntrap.png";
import fb from "../assets/fb.png";
import Learn from "../assets/Learn.png";
import weather from "../assets/weather.png";
import music from "../assets/music.png";
import dice from "../assets/dice.png";
import BgRemover from "../assets/bgRemover.png";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "E-Commerce",
    description: "javascript + Tailwind , fetch api ",
    image: myntrap,
    href: "https://creative-faun-89b79c.netlify.app/",
  },
  {
    title: "Music Web Page",
    description: "React + Tailwind",
    image: music,
    href: "https://github.com/akhilesh-bisht/music-website.git",
  },
  {
    title: "Dice Game",
    description: "React + Tailwind",
    image: dice,
    href: "https://github.com/akhilesh-bisht/dice-game.git",
  },
  {
    title: "Weather App",
    description: "OpenAI + React",
    image: weather,
    href: "https://stunning-taiyaki-04684a.netlify.app/",
  },
  {
    title: "FB login Page",
    description: "Html + Tailwind",
    image: fb,
    href: "https://github.com/akhilesh-bisht/fb-login-page.git",
  },
  {
    title: "Background Remover App",
    description: "Api + JavaScript",
    image: BgRemover,
  },
  {
    title: "Marketing site",
    description: "Css + React",
    image: Learn,
  },
];

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {projects.map((project, index) => (
        <div key={index} className="bg-gray-700 p-4 rounded-lg">
          {" "}
          <Link to={project.href}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-lg"
            />
          </Link>
          <h3 className="text-lg font-semibold mt-4">{project.title}</h3>
          <p className="text-sm text-gray-400">{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
