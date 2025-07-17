import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import profilePic from './assets/profile1.jpg';
import ParticlesBackground from './components/ParticlesBackground';

const Hero = () => {
  return (
   <section id="hero" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center text-center px-6 pt-20">
    {/* Particle background */}
    <ParticlesBackground />
  
    {/* Content wrapper with z-index to appear above particles */}
    <div className="relative z-10">
      <img
        src={profilePic}
        alt="Suhail Nazir"
        className="w-32 h-32 mx-auto rounded-full border-4 border-cyan-400 mb-6"
        data-aos="zoom-in"
      />
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4" data-aos="fade-up">
        Hi, I'm <span className="text-cyan-400">Suhail Nazir</span>
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mb-6" data-aos="fade-up" data-aos-delay="200">
        I’m a passionate Frontend Developer crafting beautiful and responsive web experiences using React and Tailwind CSS.
      </p>
      <a href="/Suhail_Nazir_CV.pdf" download className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition" data-aos="fade-up" data-aos-delay="300">
        Download CV
      </a>
      <a href="#projects" className="mt-6 inline-flex items-center text-cyan-400 hover:underline" data-aos="fade-up" data-aos-delay="400">
        View My Work <FaArrowDown className="ml-2 animate-bounce" />
      </a>
    </div>
  </section>
  );
};

export default Hero;
