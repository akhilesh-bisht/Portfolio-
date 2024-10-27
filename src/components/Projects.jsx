// src/components/Projects.jsx
import myntrap from "../assets/myntrap.png";
import fb from "../assets/fb.png";
import Learn from "../assets/Learn.png";
import weather from "../assets/weather.png";
import music from "../assets/music.png";
import dice from "../assets/dice.png";
import BgRemover from "../assets/bgRemover.png";
import foodPoint from "../assets/food-point.png";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Food-Point",
    description: "React + Tailwind css + react-router + redux-toolkit",
    image: foodPoint,
    href: "https://food-point-alpha.vercel.app/",
  },
  {
    title: "E-Commerce",
    description: "javascript + Tailwind , fetch api ",
    image: myntrap,
    href: "https://creative-faun-89b79c.netlify.app/",
  },
  {
    title: "Dice Game",
    description: "React + Tailwind",
    image: dice,
    href: "https://github.com/akhilesh-bisht/dice-game.git",
  },
  {
    title: "Background Remover App",
    description: "Api + JavaScript",
    image: BgRemover,
  },
  {
    title: "Weather App",
    description: "OpenAI + React",
    image: weather,
    href: "https://stunning-taiyaki-04684a.netlify.app/",
  },
  {
    title: "Music Web Page",
    description: "React + Tailwind",
    image: music,
    href: "https://github.com/akhilesh-bisht/music-website.git",
  },

  {
    title: "FB login Page",
    description: "Html + Tailwind",
    image: fb,
    href: "https://github.com/akhilesh-bisht/fb-login-page.git",
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
      <div className="bg-white  shadow-md rounded-lg p-6 w-full lg:w-64 transform hover:scale-105 transition duration-300 ease-in-out">
        <h2 className="text-xl font-semibold text-center text-gray-700 mb-4 border-b-2 pb-2">
          More Projects
        </h2>
        <p className="text-gray-600 text-center">
          <a href="https://github.com/akhilesh-bisht">check out my github</a>
        </p>
      </div>
    </div>
  );
};

export default Projects;
