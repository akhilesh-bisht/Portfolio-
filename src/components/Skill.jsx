import React from "react";
import html from "../assets/skill/html.png";
import css from "../assets/skill/css.jpg";
import jss from "../assets/skill/jss.png";
import react from "../assets/skill/react.png";
import tailwind from "../assets/skill/tailwind.png";
import redux from "../assets/skill/redux.png";
import git from "../assets/skill/git.png";

function Skill() {
  return (
    <section className="py-10 bg-gray-50" id="technologies">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800">Skills</h1>
        <p className="text-center text-gray-500 mt-4">
          A showcase of the technologies I work with.
        </p>

        {/* Skill Icons */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center">
          <img src={html} alt="HTML" className="w-20 h-20 mx-auto" />
          <img src={css} alt="CSS" className="w-20 h-20 mx-auto" />
          <img src={jss} alt="JavaScript" className="w-20 h-20 mx-auto" />
          <img src={react} alt="React" className="w-20 h-20 mx-auto" />
          <img
            src={tailwind}
            alt="Tailwind CSS"
            className="w-20 h-20 mx-auto"
          />
          <img src={redux} alt="Redux" className="w-20 h-20 mx-auto" />
          <img src={git} alt="Git" className="w-20 h-20 mx-auto" />
        </div>

        {/* Skill Cards */}
        <div className="flex flex-col lg:flex-row justify-center gap-6 mt-16">
          {/* Frontend Card */}
          <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-1/3 transform hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="text-xl font-semibold text-center text-gray-700 mb-4 border-b-2 pb-2">
              Frontend Development
            </h2>
            <p className="text-gray-600 text-center">
              HTML, CSS, JavaScript, React
            </p>
          </div>

          {/* Backend Card */}
          <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-1/3 transform hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="text-xl font-semibold text-center text-gray-700 mb-4 border-b-2 pb-2">
              Backend Development
            </h2>
            <p className="text-gray-600 text-center">
              Node.js, Express.js, MongoDB
            </p>
          </div>

          {/* Tools & Tech Card */}
          <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-1/3 transform hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="text-xl font-semibold text-center text-gray-700 mb-4 border-b-2 pb-2">
              Tools & Technologies
            </h2>
            <p className="text-gray-600 text-center">
              Git, VS Code, Postman, Vercel
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
