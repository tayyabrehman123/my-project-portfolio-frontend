import React from 'react';
import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import SnakeGame from '../components/SnakeGame.jsx';

function snake() {
  return (
    <div className='w-full  h-full bg-neutral-900 py-20 px-4'> 
        <h1 className='text-center text-5xl text-white font-bold mb-10 '>Snake</h1>
        <p className="mb-10 text-white text-center">
          A fun little game I built using <span className="text-purple-700">React + Tailwind + JavaScript + Canvas</span>.
        </p>
        <div className='w-full h-auto flex items-center justify-center'>
        <SnakeGame/>
        </div>
    </div>
  )
}

export default snake
