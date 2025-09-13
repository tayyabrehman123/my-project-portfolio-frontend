import React from 'react';
// import Spline from '@splinetool/react-spline';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs, FaMobileAlt } from "react-icons/fa";
import { SiExpress, SiMongodb, SiFirebase , SiInsomnia } from "react-icons/si";
import './pages.css';

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 spin-slow" /> },
  { name: "React Native", icon: <FaMobileAlt className="text-cyan-300" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Insomnia", icon: <SiInsomnia className="text-purple-500" /> },
  //{ name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
];

export default function Skills() {
  return (
    <section id='skills' className="w-full min-h-screen bg-neutral-900 py-30 px-4 sm:px-4 text-white flex flex-col justify-center items-center">
      {/* <Spline scene="https://prod.spline.design/KDl1WYdVaM6xRuO9/scene.splinecode" /> */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white sm:mb-8 text-center ">Skills</h2>
      <p className="text-gray-400 mb-8 sm:mb-13 max-w-2xl text-center mx-auto text-base sm:text-lg">
        Here are some of the technologies I’ve worked with during my learning and development experience.
      </p>
      {/* <div className="w-full max-w-5xl mx-auto">
  
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-9">
    {skills.slice(0, skills.length - 4).map((skill) => (
      <div
        key={skill.name}
        className="group bg-neutral-800 cursor-auto rounded-xl shadow-lg w-full h-32 sm:h-36 md:h-40 flex flex-col items-center justify-center transition-transform hover:-translate-y-3 md:hover:-translate-y-5 hover:shadow-purple-700/90 duration-400"
      >
        <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 group-hover:animate-bounce transition-all duration-300">
          {skill.icon}
        </div>
        <div className="text-base sm:text-lg font-semibold tracking-wide">{skill.name}</div>
      </div>
    ))}
  </div>

  
  <div className="flex justify-center gap-4 sm:gap-6 md:gap-9 mt-6 flex-wrap">
    {skills.slice(-4).map((skill) => (
      <div
        key={skill.name}
        className="group bg-neutral-800 cursor-auto rounded-xl shadow-lg w-32 sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 flex flex-col items-center justify-center transition-transform hover:-translate-y-3 md:hover:-translate-y-5 hover:shadow-purple-700/90 duration-400"
      >
        <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 group-hover:animate-bounce transition-all duration-300">
          {skill.icon}
        </div>
        <div className="text-base sm:text-lg font-semibold tracking-wide">{skill.name}</div>
      </div>
    ))}
  </div>
</div> */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6 md:gap-9 w-full max-w-5xl mx-auto">
        {skills.map((skill,index) => (
          <div
            key={skill.name}
            className={`group bg-neutral-800 cursor-auto rounded-xl shadow-lg w-full h-32 sm:h-36 md:h-40 flex flex-col items-center justify-center transition-transform hover:-translate-y-3 md:hover:-translate-y-5 hover:shadow-purple-700/90 duration-400 ${index >= skills.length - 4 ? "md:col-span-1 md:mx-auto" : ""}`}
          >
            <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 group-hover:animate-bounce transition-all duration-300">{skill.icon}</div>
            <div className="text-base sm:text-lg font-semibold tracking-wide">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}