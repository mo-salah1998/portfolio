import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../lib/theme-context";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ArrowLeft } from "lucide-react";

export const ProjectDetail = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const isRTL = i18n.language === 'ar';

  // Update dir attribute when language changes
  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language || 'en';
  }, [isRTL, i18n.language]);

  // Get project data based on id
  const getProjectData = (projectId: string | undefined) => {
    if (projectId === '1' || projectId === 'interior-design') {
      return {
        id: '1',
        title: t('project1.title'),
        description: t('project1.description'),
        imageUrl: '/interior-design-project.jpg',
        technologies: t('project1.technologies').split(', '),
        liveUrl: t('project1.liveUrl'),
      };
    }
    if (projectId === '2' || projectId === 'orange-summer-challenge') {
      return {
        id: '2',
        title: t('project2.title'),
        description: t('project2.description'),
        imageUrl: '/orange-summer-challenge.jpg',
        imageUrl2: '/orange-summer-challenge-mea.jpg', // MEA version
        technologies: t('project2.technologies').split(', '),
        liveUrl: t('project2.liveUrl'),
        liveUrl2: t('project2.liveUrl2'),
      };
    }
    return null;
  };

  const project = getProjectData(id);

  if (!project) {
    return (
      <div className={`${theme === 'dark' ? 'bg-[#161513]' : 'bg-gray-100'} min-h-screen`}>
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            Project not found
          </h1>
          <button
            onClick={() => navigate('/')}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {t('backToProjects')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${theme === 'dark' ? 'bg-[#161513]' : 'bg-gray-100'} w-full overflow-x-hidden min-h-screen`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />

      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-28 pt-8 pb-16">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className={`flex items-center gap-2 mb-8 px-4 py-2 rounded-lg transition-colors ${
            theme === 'dark' 
              ? 'bg-[#252525] text-white hover:bg-[#2a2a2a]' 
              : 'bg-white text-gray-800 hover:bg-gray-50 border border-gray-200'
          }`}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{t('backToProjects')}</span>
        </button>

        {/* Two Column Layout: Text Left, Image Right */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${isRTL ? 'lg:grid-cols-[1fr,1fr]' : ''}`}>
          {/* Left Side: Text Content */}
          <div className={`${isRTL ? 'lg:order-2' : ''}`}>
            {/* Project Title */}
            <h1 className={`text-3xl md:text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              {project.title}
            </h1>

            {/* Project Description */}
            <div className={`mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              <p className="whitespace-pre-line text-lg">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h2 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                Technologies Used
              </h2>
              <div className={`flex flex-wrap gap-3 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      theme === 'dark'
                        ? 'bg-gray-700 text-gray-300'
                        : 'bg-white text-gray-700 border border-gray-200'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div className={`flex flex-col gap-3 ${isRTL ? 'items-end' : 'items-start'}`}>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium text-center min-w-[200px]"
                >
                  {project.id === '2' ? t('orangeTunisieVersion') : 'Live Demo'}
                </a>
              )}
              {(project as any).liveUrl2 && (
                <a
                  href={(project as any).liveUrl2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition-colors font-medium text-center min-w-[200px]"
                >
                  {t('orangeMEAVersion')}
                </a>
              )}
            </div>
          </div>

          {/* Right Side: Images */}
          <div className={`${isRTL ? 'lg:order-1' : ''}`}>
            {/* Main Project Image */}
            <div className="mb-4 rounded-lg overflow-hidden shadow-lg sticky top-24">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Second Image for Project 2 (MEA Version) */}
            {(project as any).imageUrl2 && (
              <div className="mb-4 rounded-lg overflow-hidden shadow-lg">
                <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {t('orangeMEAVersion')}
                </p>
                <img
                  src={(project as any).imageUrl2}
                  alt={`${project.title} - ${t('orangeMEAVersion')}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

