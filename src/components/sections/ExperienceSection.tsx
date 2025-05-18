import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../lib/theme-context";

export const ExperienceSection = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const isRTL = i18n.language === 'ar';
  
  // Sample experience data
  const experiences = [
    {
      company: "Company A",
      role: "Senior Developer",
      period: "2021 - Present",
      description: "Led the development of web applications using React, TypeScript, and Node.js. Implemented CI/CD pipelines and improved application performance by 40%.",
      technologies: ["React", "TypeScript", "Node.js", "AWS"],
    },
    {
      company: "Company B",
      role: "Frontend Developer",
      period: "2018 - 2021",
      description: "Developed responsive web interfaces for clients in various industries. Collaborated with designers and backend developers to deliver high-quality products.",
      technologies: ["JavaScript", "React", "CSS", "Webpack"],
    },
    {
      company: "Company C",
      role: "Junior Developer",
      period: "2016 - 2018",
      description: "Assisted in developing and maintaining web applications. Learned modern web development practices and contributed to team projects.",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
    },
  ];

  return (
    <div className="px-4 md:px-6 mt-4 w-full max-w-7xl mx-auto">
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className={`p-6 rounded-lg ${
              theme === 'dark' 
                ? 'bg-[#252525] border border-gray-700' 
                : 'bg-white border border-gray-200 shadow-sm'
            } text-${isRTL ? 'right' : 'left'}`}
          >
            <div className={`flex flex-col md:flex-row md:items-center justify-between mb-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
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
            
            <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : 'justify-start'}`}>
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
          </div>
        ))}
      </div>
    </div>
  );
}; 