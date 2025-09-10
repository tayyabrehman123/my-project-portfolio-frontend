import React from 'react'
import { motion } from "motion/react";

const demoProjects = [
  {
    name: 'Community Connect',
    description: 'A platform to connect people in your neighborhood for events, help, and sharing resources.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
  {
    name: 'Task Tracker',
    description: 'A simple and effective app to manage your daily tasks and boost productivity.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
  {
    name: 'Recipe Finder',
    description: 'Find recipes with the ingredients you have at home. Easy, fast, and delicious!',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
  {
    name: 'Portfolio Website',
    description: 'A personal portfolio to showcase your projects, skills, and contact information.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    link: 'https://my-project-portfolio-frontend.vercel.app/',
  },
];

const Projects = () => {
  return (
    <div id='projects' className='w-full min-h-screen bg-black py-40 px-4 text-white'>
      <h2 className='text-5xl font-extrabold text-center pb-15'>Projects</h2>
      <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.6 }}
      viewport={{ once: true }}
      // animate={{ opacity: 1, y: 0 }}
       className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto'>
        
        {demoProjects.map((project, idx) => (
          
          <div key={idx} className='bg-neutral-900 cursor-auto rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col overflow-hidden'>
            
            <div className='h-48 w-full bg-white flex items-center justify-center'>
              <img
                src={project.image}
                alt={project.name}
                className='object-cover h-full w-full rounded-t-3xl'
                onError={e => (e.target.src = 'https://via.placeholder.com/400x200?text=No+Image')}
              />
            </div>
            <div className='flex-1 flex flex-col p-6'>
              <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
              <p className='text-base text-gray-300 mb-4 flex-1'>{project.description}</p>
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-auto inline-block px-4 py-2 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-900 transition text-center'
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;