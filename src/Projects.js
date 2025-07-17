import React from 'react';

const projects = [
  {
    title: "RapidRout - Smart Traffic Management",
    description: "AI-based real-time ambulance detection and traffic signal optimization using YOLOv5.",
    link: "https://github.com/suhail3844",
  },
  {
    title: "Liver Anomaly Detection",
    description: "Research on automated liver anomaly detection using U-Net on CT and MRI scans (LiTS dataset).",
    link: "https://github.com/suhail3844",
  },
  {
    title: "Metaverse & Blockchain in Healthcare",
    description: "Research on secure patient data sharing using emerging technologies like Metaverse and Blockchain.",
    link: "https://github.com/suhail3844",
  }
];

const Projects = () => {
  return (
    <div id = "projects" className="pt -20 bg-white py-12 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Projects</h2>
      <p className="text-gray-600">Here are some of my projects...</p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
