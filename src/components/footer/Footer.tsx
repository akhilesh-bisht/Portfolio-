import React from "react";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 mt-10 bg-zinc-900 text-zinc-300 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Akhilesh Bisht. All rights reserved.
        </p>

        <div className="flex gap-4 text-xl">
          <a
            href="mailto:akhileshbisht2020@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            title="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/6399085419"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
            title="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/in/akhilesh-bisht-a76981291/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/akhilesh-bisht"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-100 transition"
            title="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
