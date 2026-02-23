import React from "react";
import { FaFigma } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiGeminiFill } from "react-icons/ri";
import { motion } from "framer-motion";

function Logos() {
  const logos = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3 />, name: "CSS" },
    { icon: <IoLogoJavascript />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <RiGeminiFill />, name: "Gemini" },
  ];

  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="py-10 px-10 rounded-md text-black overflow-hidden">

      <h1 className="text-center mb-8 text-2xl">Meine Werkzeuge</h1>
      <motion.div
        className="flex gap-8 items-center justify-center md:text-5xl text-lg"
        animate={{ x: [0, -1200] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >

        {duplicatedLogos.map((logo, index) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.2 }}
            className="shrink-0 cursor-pointer"
          >
            {logo.icon}
          </motion.span>
        ))}
      </motion.div>


    </div>
  );
}

export default Logos;
