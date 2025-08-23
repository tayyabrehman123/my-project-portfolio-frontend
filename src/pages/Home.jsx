import { useState,useEffect } from 'react';
import React from 'react'
import myVideo from '../assets/3163534-uhd_3840_2160_30fps.mp4';
import './pages.css';

const Home = () => {
  const words = ["Welcome", "I'm a Software Developer", "I'm a Front-end Developer", "I'm a Back-end Developer"];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    let i = 0;
    const currentWord = words[index];

    const typing = setInterval(() => {
      setText(currentWord.slice(0, i + 1));
      i++;
      if (i === currentWord.length) {
        clearInterval(typing);
        setTimeout(() => { setIndex((prev) => (prev + 1) % words.length); }, 1500); // wait before next word
      }
    }, 100); // typing speed

    return () => clearInterval(typing);
  }, [index]);
  
  const links = (names) => {
    document.getElementById(names)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div id="home" className=" w-full h-screen overflow-hidden relative">
      <video
        className="w-full h-full object-cover"
        src={myVideo}
        autoPlay
        loop
        muted
        playsInline = {true}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col items-center justify-center">
        <h1 className="text-white text-6xl font-extrabold }">{text}</h1>
        <div className="flex space-x-6 pt-6 font-semibold text-white">
        <button onClick={() => links('projects')} className="rounded-md px-6 py-3 cursor-pointer bg-purple-700 hover:bg-purple-500 shadow-lg transition transform hover:scale-105 duration-300">
          View My Work
        </button>
          <button onClick={() => links('contacts')} className="rounded-md px-6 py-3 cursor-pointer border border-white hover:bg-white hover:text-black transition transform hover:scale-105 duration-300">
            Get In Touch
          </button>
          {/* <button className='rounded-md px-5 py-2 bg-black hover:text-purple-700 transform hover:scale-105 transition duration-300 '>View My Work</button> */}
          {/* <button className='rounded-md px-5 py-2 bg-black hover:text-purple-700 transform hover:scale-105 transition duration-300'>Get In Touch</button> */}
        </div>
      </div>
    </div>
  )
}

export default Home