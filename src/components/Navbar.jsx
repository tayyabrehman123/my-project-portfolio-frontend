import React, { useState, useEffect } from 'react';
// import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  
  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', onScroll);
    // Clean up on unmount
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  
  return(
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black' : 'bg-transparent'}`}>
      <div className="max-w-auto mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 text-white">
        {/* Logo */}
        <a className="flex items-center text-3xl no-underline text-white hover:text-purple-700 font-extrabold transition " href="/">
          Portfolio
        </a>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-gray-400 border-gray-700 hover:text-white hover:border-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Links */}
        <div className={`absolute top-full left-0 w-full md:relative md:top-auto md:left-auto md:w-auto ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 py-4 md:py-0 text-lg font-bold text-white">
            <li><a className="px-4 py-2 md:px-2 md:py-1 rounded block text-white no-underline hover:text-purple-700 transform hover:scale-105 transition duration-300 " href="#home">Home</a></li>
            <li><a className="px-4 py-2 md:px-2 md:py-1 rounded block text-white no-underline hover:text-purple-700 transform hover:scale-105 transition duration-300" href="#about">About me</a></li>
            <li><a className="px-4 py-2 md:px-2 md:py-1 rounded block text-white no-underline hover:text-purple-700 transform hover:scale-105 transition duration-300" href="#skills">Skills</a></li>
            <li><a className="px-4 py-2 md:px-2 md:py-1 rounded block text-white no-underline hover:text-purple-700 transform hover:scale-105 transition duration-300" href="#projects">Projects</a></li>
            <li><a className="px-4 py-2 md:px-2 md:py-1 rounded block text-white no-underline hover:text-purple-700 transform hover:scale-105 transition duration-300" href="#contacts">Contacts</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar; 