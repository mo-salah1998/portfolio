import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../lib/theme-context";
import { useNavigate } from "react-router-dom";
import { Card } from "../ui/card";

export const ProjectSection = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const isRTL = i18n.language === 'ar';
  
  // Project data from translations
  const projects = [
    {
      id: '1',
      title: t('project1.title'),
      shortDescription: t('project1.shortDescription'),
      imageUrl: "/interior-design-project.jpg",
      technologies: t('project1.technologies').split(', ').slice(0, 3), // Show only first 3
      githubUrl: "",
      liveUrl: "https://interior-designe-project.vercel.app",
    },
    {
      id: '2',
      title: t('project2.title'),
      shortDescription: t('project2.shortDescription'),
      imageUrl: "/orange-summer-challenge.jpg",
      technologies: t('project2.technologies').split(', ').slice(0, 3), // Show only first 3
      githubUrl: "",
      liveUrl: t('project2.liveUrl'),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 w-full max-w-7xl mx-auto">
      {projects.map((project, index) => (
        <Card 
          key={index} 
          className={`overflow-hidden ${theme === 'dark' ? 'bg-[#252525] border-gray-700' : 'bg-white border-gray-200'}`}
        >
          <div className={`text-${isRTL ? 'right' : 'left'}`}>
            <div 
              className="w-full h-48 bg-cover bg-center" 
              style={{ backgroundImage: `url(${project.imageUrl})` }}
            />
            <div className="p-6">
              <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                {project.title}
              </h3>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} line-clamp-2`}>
                {project.shortDescription}
              </p>
              
              <div className={`flex flex-wrap gap-2 mb-4 ${isRTL ? 'justify-end' : 'justify-start'}`}>
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
                {((project.id === '1' && t('project1.technologies').split(', ').length > 3) ||
                  (project.id === '2' && t('project2.technologies').split(', ').length > 3)) && (
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    theme === 'dark' 
                      ? 'bg-gray-700 text-gray-300' 
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    +{(project.id === '1' 
                      ? t('project1.technologies').split(', ').length - 3
                      : t('project2.technologies').split(', ').length - 3)}
                  </span>
                )}
              </div>
              
              <div className={`flex gap-3 mt-4 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                <button
                  onClick={() => navigate(`/project/${project.id}`)}
                  className={`px-4 py-2 text-sm rounded font-medium transition-colors ${
                    theme === 'dark'
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {t('viewDetails')}
                </button>
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`px-4 py-2 text-sm rounded font-medium transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-700 text-white hover:bg-gray-600'
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}; 