import React from 'react'
import myPhoto from '../assets/ab2.jpeg'; 
import { motion } from "motion/react";

const about = () => {
  return (
    <div id='about' className="w-full h-full min-h-screen bg-black flex items-center justify-center flex-col space-y-7 text-center px-10 overflow-x-hidden">
      <motion.h1 initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }} className='text-white font-extrabold text-3xl sm:text-3xl md:text-5xl pt-20 '>
        About me
        </motion.h1>
        
      <div className="max-w-8xl w-full grid grid-cols-1 md:grid-cols-3 gap-5 items-center bg-black rounded-xl shadow-xl p-6 sm:p-9 mb-10">
        <motion.div initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }} className="md:col-span-1 flex flex-col items-center justify-center text-center duration-300">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-700 mb-6">Hi👋 I'm Tayyab Rehman</h1>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
          I’m a graduate in computer science who loves turning ideas into real-world applications through code. I enjoy working with web technologies and constantly challenge myself to learn new frameworks and tools. I also love gaming, especially strategy and action genres, which I believe sharpen my problem-solving mindset. Whether it’s building projects or exploring the cosmos, I’m always curious and eager to grow.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }} className= "md:col-span-1 flex justify-center hover:scale-105 duration-300 ">
          <img
            src={myPhoto}
            alt="Tayyab Rehman"
            className="w-60 h-80 sm:w-72 sm:h-96 object-cover rounded-xl shadow-md filter grayscale hover:grayscale-0 transition-all duration-300"
          />
        </motion.div>
        
        <motion.div initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }} className= "md:col-span-1 duration-300">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-700 mb-6">💻Tech Stack</h2>
  <ul className="text-gray-500 text-base sm:text-lg space-y-2 list-disc list-inside">
    <li>React & React Native</li>
    <li>Tailwind CSS & NativeWind</li>
    <li>Node.js & Express.js</li>
    <li>MongoDB / MySQL</li>
    {/* <li>Firebase & Supabase</li> */}
    {/* <li>Git, GitHub, VS Code</li> */}
  </ul>
  <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
  When I’m not coding, im exploring space documentaries, reading about the cosmos 🌌, or diving into strategy and action games 🎮. These passions fuel my creativity and sharpen my logical thinking.
          </p>
        </motion.div>
      </div>
    </div>
    // <div className='w-full h-screen min-h-[500px] overflow-hidden relative bg-slate-100'>
    //     <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col items-center pt-20">
    //     <h1 className="text-white text-5xl font-bold pb-10">I'm Tayyab Rehman</h1>
    //     <div className=" text-center max-w-3xl font-sans font-semibold text-white">
    //         <p> When I’m not coding, I love exploring the universe through documentaries and articles, playing strategy and action games, and reading about space, physics, and tech innovations. I'm deeply fascinated by how the cosmos works and often lose track of time learning about it!</p>
    //     </div>
    //   </div>
    // </div>
  )
}

export default about