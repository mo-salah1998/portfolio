import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../lib/theme-context";
import { useNavigate } from "react-router-dom";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";
import { ScrollReveal } from "../ui/scroll-reveal";

export const ProjectSection = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const isRTL = i18n.language === 'ar';
  
  // Project data from translations (reversed order)
  const projects = [
    {
      id: '4',
      title: t('project4.title'),
      shortDescription: t('project4.shortDescription'),
      imageUrl: "/cyberoasis-v1.png",
      technologies: t('project4.technologies').split(', ').slice(0, 3), // Show only first 3
      githubUrl: "",
      liveUrl: t('project4.liveUrl'),
    },
    {
      id: '2',
      title: t('project2.title'),
      shortDescription: t('project2.shortDescription'),
      imageUrl: "/orange-summer-challenge-cover.jpg",
      technologies: t('project2.technologies').split(', ').slice(0, 3), // Show only first 3
      githubUrl: "",
      liveUrl: t('project2.liveUrl'),
    },
    {
      id: '3',
      title: t('project3.title'),
      shortDescription: t('project3.shortDescription'),
      imageUrl: "/ufe-logo-tn.jpeg",
      technologies: t('project3.technologies').split(', ').slice(0, 3), // Show only first 3
      githubUrl: "",
      liveUrl: t('project3.liveUrl'),
    },
    {
      id: '1',
      title: t('project1.title'),
      shortDescription: t('project1.shortDescription'),
      imageUrl: "/interior-design-cover.png",
      technologies: t('project1.technologies').split(', ').slice(0, 3), // Show only first 3
      githubUrl: "",
      liveUrl: "https://interior-designe-project.vercel.app",
    },
  ];

  const handleCardClick = (projectId: string, e: React.MouseEvent) => {
    // Only navigate if click is not on a button or link
    const target = e.target as HTMLElement;
    if (!target.closest('button') && !target.closest('a')) {
      navigate(`/project/${projectId}`);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-8 mx-auto mt-4 w-full max-w-7xl md:grid-cols-2">
      {projects.map((project, index) => (
        <ScrollReveal key={index} delay={index * 0.1} className="h-full">
        <Card 
          onClick={(e) => handleCardClick(project.id, e)}
          className={`overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
            theme === 'dark' 
              ? 'bg-[#252525] border-gray-700 hover:border-gray-600' 
              : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg'
          }`}
        >
          <div className={`text-${isRTL ? 'left' : 'left'}`}>
            <div className="overflow-hidden w-full h-48">
              <img
                src={project.imageUrl}
                alt={project.title}
                loading="lazy"
                decoding="async"
                width={437}
                height={192}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 437px"
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                {project.title}
              </h3>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} line-clamp-2`}>
                {project.shortDescription}
              </p>
              
              <div className={`flex flex-wrap gap-2 mb-4 ${isRTL ? 'justify-start' : 'justify-start'}`}>
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
                  (project.id === '2' && t('project2.technologies').split(', ').length > 3) ||
                  (project.id === '3' && t('project3.technologies').split(', ').length > 3) ||
                  (project.id === '4' && t('project4.technologies').split(', ').length > 3)) && (
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    theme === 'dark' 
                      ? 'bg-gray-700 text-gray-300' 
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    +{(project.id === '1' 
                      ? t('project1.technologies').split(', ').length - 3
                      : project.id === '2'
                      ? t('project2.technologies').split(', ').length - 3
                      : project.id === '3'
                      ? t('project3.technologies').split(', ').length - 3
                      : t('project4.technologies').split(', ').length - 3)}
                  </span>
                )}
              </div>
              
              {project.liveUrl && (
                <div className={`mt-4 ${isRTL ? 'flex justify-end' : 'flex justify-start'}`}>
                  <Button
                    variant="gradient"
                    size="lg"
                    asChild
                    className="overflow-hidden relative group"
                  >
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="mr-2 w-4 h-4 transition-transform group-hover:scale-110" />
                      Live Demo
                      {/* Animated background on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#ff8660] to-[#a66cff] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Card>
        </ScrollReveal>
      ))}
    </div>
  );
}; 