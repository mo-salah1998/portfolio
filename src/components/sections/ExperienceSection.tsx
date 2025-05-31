import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../lib/theme-context";

export const ExperienceSection = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const isRTL = i18n.language === 'ar';
  
  // Experience data from translations
  const experiences = [
    {
      company: t('experience1.company'),
      role: t('experience1.role'),
      period: t('experience1.period'),
      description: t('experience1.description'),
      technologies: ["Next.js", "Node.js", "React", "MongoDB", "Express.js", "Tailwind CSS"],
    },
    {
      company: t('experience2.company'),
      role: t('experience2.role'),
      period: t('experience2.period'),
      description: t('experience2.description'),
      technologies: ["Next.js", "Node.js", "Express.js", "React", "MongoDB", "Tailwind CSS"],
    },
    {
      company: t('experience3.company'),
      role: t('experience3.role'),
      period: t('experience3.period'),
      description: t('experience3.description'),
      technologies: ["Node.js", "Express.js", "React", "MongoDB", "Tailwind CSS", "WebSocket"],
    },
    {
      company: t('experience4.company'),
      role: t('experience4.role'),
      period: t('experience4.period'),
      description: t('experience4.description'),
      technologies: ["Docker", "GitLab CI/CD", "AWS EC2", "Amazon Linux"],
    },
    {
      company: t('experience5.company'),
      role: t('experience5.role'),
      period: t('experience5.period'),
      description: t('experience5.description'),
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    },
  ];

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="px-4 md:px-6 mt-4 w-full max-w-7xl mx-auto">
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className={`p-6 rounded-lg ${
              theme === 'dark' 
                ? 'bg-[#252525] border border-gray-700' 
                : 'bg-white border border-gray-200 shadow-sm'
            }`}
            style={{ direction: isRTL ? 'rtl' : 'ltr', unicodeBidi: 'embed' }}
          >
            {isRTL ? (
              // Arabic layout
              <>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className={`mt-2 md:mt-0 text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} style={{ textAlign: 'right' }}>
                    {exp.period}
                  </div>
                  <div style={{ direction: 'rtl', textAlign: 'right' }}>
                    <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                      {exp.role}
                    </h3>
                    <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      {exp.company}
                    </p>
                  </div>
                </div>
                
                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`} style={{ direction: 'rtl', textAlign: 'right' }}>
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2 justify-end" style={{ direction: 'rtl' }}>
                  {exp.technologies.map((tech, idx) => (
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
              </>
            ) : (
              // English/French layout
              <>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                      {exp.role}
                    </h3>
                    <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      {exp.company}
                    </p>
                  </div>
                  <div className={`mt-2 md:mt-0 text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {exp.period}
                  </div>
                </div>
                
                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2 justify-start">
                  {exp.technologies.map((tech, idx) => (
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
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}; 