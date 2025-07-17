import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Suhail Nazir</h1>
        <ul className="flex gap-6 text-white">
          <li><a href="#about" className="hover:text-cyan-400">About</a></li>
          <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
          <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


