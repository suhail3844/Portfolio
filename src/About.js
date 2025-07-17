import React from 'react';

const About = () => {
  return (
    <div id ="about" className="pt-20 min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-10 text-center">
      <h2 className="text-4xl font-bold mb-6 text-blue-600">About Me</h2>
      <p className="text-gray-700 max-w-3xl text-lg">
        Hello! I'm <strong className="text-blue-500">Suhail Nazir Taili</strong>, a passionate Computer Science student at Sharda University. I love building smart and scalable solutions using modern web technologies like React and Tailwind CSS. I'm also working on real-time AI/ML projects like Smart Traffic Management.
      </p>
    </div>
  );
};

export default About;
