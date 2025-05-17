import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../lib/theme-context";
import { Card } from "../ui/card";

export const ProjectSection = (): JSX.Element => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  
  // Sample project data
  const projects = [
    {
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo euismod, tincidunt nisi in, ultricies nisl.",
      imageUrl: "/project1.jpg",
      technologies: ["React", "TypeScript", "TailwindCSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo euismod, tincidunt nisi in, ultricies nisl.",
      imageUrl: "/project2.jpg",
      technologies: ["Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 w-full max-w-7xl mx-auto">
      {projects.map((project, index) => (
        <Card 
          key={index} 
          className={`overflow-hidden ${theme === 'dark' ? 'bg-[#252525] border-gray-700' : 'bg-white border-gray-200'}`}
        >
          <div>
            <div 
              className="w-full h-48 bg-cover bg-center" 
              style={{ backgroundImage: `url(${project.imageUrl})` }}
            />
            <div className="p-6">
              <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                {project.title}
              </h3>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className={`px-2 py-1 text-xs rounded-full ${
                      theme === 'dark' 
                        ? 'bg-gray-700 text-gray-300' 
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3 mt-4">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`px-3 py-1 text-sm rounded ${
                    theme === 'dark' 
                      ? 'bg-gray-700 text-white hover:bg-gray-600' 
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  } transition-colors`}
                >
                  GitHub
                </a>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-sm rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}; 