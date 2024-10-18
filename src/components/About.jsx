import React from "react";

function About() {
  return (
    <section className="py-8 text-black bg-gray-100" id="aboutme">
      <div className="container mx-auto px-8 lg:px-16">
        <h2 className="text-4xl text-center font-bold mb-12 text-gray-800">
          About Me
        </h2>

        <div className="space-y-12 relative">
          {/* 2023-2024 Section */}
          <div className="relative bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition duration-500">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-10 h-10 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full"></div>
              <h3 className="text-xl font-semibold">2023 - 2024</h3>
            </div>
            <p className="text-gray-700">
              Driven by a keen interest in technology, I dedicated 9 months to
              honing my skills in front-end development and full stack
              development. During this period, I immersed myself in learning and
              applying the latest technologies and industry best practices. This
              experience has equipped me with a solid understanding of HTML,
              CSS, JavaScript, and the MERN stack, enabling me to create
              visually appealing and user-friendly websites.
            </p>
          </div>

          {/* 2021-2024 Section */}
          <div className="relative bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition duration-500">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-10 h-10 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full"></div>
              <h3 className="text-xl font-semibold">2021 - 2024</h3>
            </div>
            <p className="text-gray-700">
              I am currently enrolled at Bhakht Darshan PG University, where I
              am pursuing my Bachelor of Science degree. My academic pursuits
              have exposed me to a diverse range of subjects, providing me with
              a well-rounded foundation in various fields. The interdisciplinary
              nature of my studies has allowed me to develop critical thinking
              and problem-solving skills.
            </p>
          </div>

          {/* 2020 Section */}
          <div className="relative bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition duration-500">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-10 h-10 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full"></div>
              <h3 className="text-xl font-semibold">2020</h3>
            </div>
            <p className="text-gray-700">
              I completed my intermediate education in 2020 from GIC Chelusain.
              This phase provided me with a strong academic foundation and
              instilled in me the importance of discipline and perseverance.
            </p>
          </div>

          {/* 2018 Section */}
          <div className="relative bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition duration-500">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-10 h-10 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full"></div>
              <h3 className="text-xl font-semibold">2018</h3>
            </div>
            <p className="text-gray-700">
              I completed my high school education in 2018 from GIC Chelusain.
              This period helped me cultivate a strong academic base and taught
              me the value of hard work and perseverance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
