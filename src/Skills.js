// src/Skills.js
import React from 'react';
import { Tooltip } from 'react-tooltip';
import { motion } from 'framer-motion';

import {
  FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs,
  FaGithub, FaGitAlt,
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFirebase } from 'react-icons/si';

const skills = [
  {
    title: 'Frontend',
    list: [
      {
        name: 'HTML5',
        level: 95,
        icon: <FaHtml5 className="text-orange-600" />,
        desc: 'Semantic HTML and accessibility.',
      },
      {
        name: 'CSS3',
        level: 90,
        icon: <FaCss3Alt className="text-blue-600" />,
        desc: 'Responsive layouts and animations.',
      },
      {
        name: 'JavaScript',
        level: 85,
        icon: <FaJsSquare className="text-yellow-400" />,
        desc: 'ES6, APIs, and dynamic UI logic.',
      },
      {
        name: 'React',
        level: 80,
        icon: <FaReact className="text-cyan-400" />,
        desc: 'Hooks, SPA, component-driven dev.',
      },
      {
        name: 'Tailwind CSS',
        level: 85,
        icon: <SiTailwindcss className="text-teal-400" />,
        desc: 'Utility-first styling framework.',
      },
    ],
  },
  {
    title: 'Backend & Database',
    list: [
      {
        name: 'Node.js',
        level: 70,
        icon: <FaNodeJs className="text-green-500" />,
        desc: 'RESTful APIs, Express.js.',
      },
      {
        name: 'MongoDB',
        level: 65,
        icon: <SiMongodb className="text-green-600" />,
        desc: 'NoSQL, Mongoose ODM.',
      },
      {
        name: 'Firebase',
        level: 60,
        icon: <SiFirebase className="text-yellow-500" />,
        desc: 'Auth, Firestore, hosting.',
      },
    ],
  },
  {
    title: 'Tools',
    list: [
      {
        name: 'Git',
        level: 80,
        icon: <FaGitAlt className="text-red-500" />,
        desc: 'Version control, branching.',
      },
      {
        name: 'GitHub',
        level: 85,
        icon: <FaGithub className="text-gray-800" />,
        desc: 'Remote repositories, collaboration.',
      },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {skills.map((category, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-blue-600 dark:text-cyan-400">
                {category.title}
              </h3>

              <ul className="space-y-6">
                {category.list.map((skill, i) => (
                  <li key={i}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl" data-tooltip-id="skill.tootip"
                        data-tooltip-content={skill.desc}
                        >
                          {skill.icon}
                        </span>
                        <span className="text-lg font-medium">{skill.name}</span>
                      </div>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded h-3">
                    <motion.div
                      className="bg-cyan-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      viewport={{ once: true }}
                    />

                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Tooltip id="skill-tooltip" />
      </div>
    </section>
  );
};

export default Skills;
