import gsap from "gsap";
import { useEffect, useRef } from "react";
import { TiDocumentText } from "react-icons/ti";
import { SiOpenproject } from "react-icons/si";
import resume from "../../assets/akhilesh_frontend.pdf";
import { FaDownload } from "react-icons/fa6";

const ResumeContainer: React.FC = () => {
  const tl = useRef<GSAPTimeline>();

  useEffect(() => {
    tl.current = gsap.timeline().to(".resumeContainer", {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      delay: 0.1,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="flex justify-center items-baseline gap-6 md:gap-2 md:flex-col md:items-center space-y-6 mt-6 text-xs lg:text-base">
      {/* View Resume */}
      <div className="resumeContainer scale-125 opacity-0 flex justify-center">
        <a
          href={resume}
          target="_blank"
          className="text-blue-400 flex flex-col items-center justify-center hover:text-blue-500 transition duration-200"
        >
          <TiDocumentText size="2.5em" />
          Resume
        </a>
      </div>

      {/* Download Resume Button */}
      <div className="resumeContainer scale-125 opacity-0">
        <a
          href={resume}
          download="Akhilesh_Frontend_Resume.pdf"
          className="bg-green-500 text-white px-4 py-3 rounded-lg shadow-md flex items-center gap-2 text-lg font-semibold hover:bg-green-600 transition duration-300"
        >
          <FaDownload />
        </a>
      </div>

      {/* Projects */}
      {/* <div className="resumeContainer scale-125 opacity-0">
        <a
          href="/projects"
          className="text-blue-400 flex flex-col items-center justify-center hover:text-blue-500 transition duration-200"
        >
          <SiOpenproject size="2.5em" />
          Projects
        </a>
      </div> */}
    </div>
  );
};

export default ResumeContainer;
