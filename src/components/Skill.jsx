import React from "react";
import html from "../assets/skill/html.png";
import css from "../assets/skill/css.jpg";
import jss from "../assets/skill/jss.png";
import react from "../assets/skill/react.png";
import tailwind from "../assets/skill/tailwind.png";
import redux from "../assets/skill/redux.png";
import git from "../assets/skill/git.png";
import bootstrap from "../assets/frontend/bootstrap.jpeg";
import express from "../assets/backend/express.png";
import nodejs from "../assets/backend/nodejs.webp";
import mongo from "../assets/database/mongo.png";
import graphql from "../assets/others/graphql.png";
import restApi from "../assets/others/rest.png";

function Skill() {
  return (
    <section className="py-10 bg-gray-50" id="technologies">
      <div className="container mx-auto px-6">
        {/* Skill Icons */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center">
          {[
            html,
            css,
            jss,
            react,
            tailwind,
            redux,
            git,
            bootstrap,
            express,
            nodejs,
            mongo,
            graphql,
            restApi,
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Skill-${index}`}
              className="w-16 h-16 mx-auto transition transform hover:scale-110 rounded-lg shadow-lg"
            />
          ))}
        </div>

        {/* Skill Cards */}
        <div className="flex flex-col lg:flex-row justify-center gap-6 mt-16">
          {/* Frontend Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-1/3 transform hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="text-xl font-semibold text-center text-gray-700 mb-4 border-b-2 pb-2">
              Frontend Development
            </h2>
            <p className="text-gray-600 text-center leading-6">
              HTML, CSS, JavaScript, React, Tailwind , Bootstrap
            </p>
          </div>

          {/* Backend Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-1/3 transform hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="text-xl font-semibold text-center text-gray-700 mb-4 border-b-2 pb-2">
              Backend Development
            </h2>
            <p className="text-gray-600 text-center leading-6">
              Node.js, Express.js, MongoDB, RESTful APIs , GraphSQL
            </p>
          </div>

          {/* Tools & Tech Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-1/3 transform hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="text-xl font-semibold text-center text-gray-700 mb-4 border-b-2 pb-2">
              Tools & Technologies
            </h2>
            <p className="text-gray-600 text-center leading-6">
              Git, VS Code, Postman, Vercel
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
