import React from 'react';
// import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-black shadow-top text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-between ">
        {/* About Us */}
        <div className='flex flex-col h-full'>
          <h5 className="text-lg font-semibold mb-2">About Me</h5>
          <p className="text-sm">
          I'm a creative web developer focused on turning ideas into fast, responsive, and user-friendly websites.
          </p>
        </div>
        {/* Quick Links */}
        <div className=' flex flex-col h-full items-center'>
          <h5 className="text-lg font-semibold mb-2">Quick Links</h5>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-purple-700 transition">Home</a></li>
            <li><a href="/games" className="hover:text-purple-700 transition">About me</a></li>
            <li><a href="/consoles" className="hover:text-purple-700 transition">Projects</a></li>
            <li><a href="/about" className="hover:text-purple-700 transition">Contect</a></li>
          </ul>
        </div>
        {/* Social Media */}
        <div className=' flex flex-col h-full'>
          <h5 className="text-lg font-semibold mb-2">Follow Me</h5>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-purple-700 transition"><i className="fab fa-facebook"></i> Facebook</a>
            <a href="#" className="hover:text-purple-700 transition flex items-center gap-1">
              <svg width="18" height="18" viewBox="0 0 1200 1227" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="inline-block">
                <path d="M1195 10.6L728.6 616.6L1195 1216.4H1047.2L651.2 715.2L255.2 1216.4H5L488.2 606.2L23.8 10.6H171.6L600.2 545.2L1028.8 10.6H1195ZM970.2 1150.2H1077.2L600.2 563.2L123.2 1150.2H230.2L600.2 690.2L970.2 1150.2Z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-purple-700 transition"><i className="fab fa-instagram"></i> Instagram</a>
            <a href="#" className="hover:text-purple-700 transition"><i className="fab fa-linkedin"></i> LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="bg-neutral-900 text-center py-2">
        <p className="text-xs text-gray-400 mb-0">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
