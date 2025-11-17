import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../lib/theme-context";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/ui/back-to-top";
import { CustomCursor } from "../components/ui/custom-cursor";
import { Button } from "../components/ui/button";
import { ArrowLeft, Globe, Users, Calendar, MapPin, Zap, Shield, Code, Rocket } from "lucide-react";

export const ProjectDetail = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const isRTL = i18n.language === 'ar';

  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

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
        imageUrl: '/interior-design-cover.png',
        technologies: t('project1.technologies').split(', '),
        liveUrl: t('project1.liveUrl'),
      };
    }
    if (projectId === '2' || projectId === 'orange-summer-challenge') {
      return {
        id: '2',
        title: t('project2.title'),
        description: t('project2.description'),
        imageUrl: '/orange-summer-challenge-cover.jpg',
        technologies: t('project2.technologies').split(', '),
        liveUrl: t('project2.liveUrl'),
        liveUrl2: t('project2.liveUrl2'),
      };
    }
    if (projectId === '3' || projectId === 'ufe') {
      return {
        id: '3',
        title: t('project3.title'),
        description: t('project3.description'),
        imageUrl: '/ufe-logo-tn.jpeg',
        technologies: t('project3.technologies').split(', '),
        liveUrl: t('project3.liveUrl'),
      };
    }
    if (projectId === '4' || projectId === 'cyberoasis-v1') {
      return {
        id: '4',
        title: t('project4.title'),
        description: t('project4.description'),
        imageUrl: '/cyberoasis-v1.png',
        technologies: t('project4.technologies').split(', '),
        liveUrl: t('project4.liveUrl'),
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
          <Button
            variant="gradient"
            onClick={() => navigate('/')}
            className="mt-4"
          >
            {t('backToProjects')}
          </Button>
        </div>
        <BackToTop />
        <CustomCursor />
      </div>
    );
  }

  return (
    <div className={`${theme === 'dark' ? 'bg-[#161513]' : 'bg-gray-100'} w-full overflow-x-hidden min-h-screen`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />

      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-28 pt-8 pb-16">
        {/* Back Button */}
        <Button
          variant="outline"
          onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}
          className={`mb-8 group ${
            theme === 'dark' 
              ? 'bg-[#252525] text-white hover:bg-[#2a2a2a] border-gray-700 hover:border-gray-600' 
              : 'bg-white text-gray-800 hover:bg-gray-50 border-gray-200 hover:border-gray-300'
          }`}
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          {t('backToProjects')}
        </Button>

        {/* Hero Section with Image */}
        <div className="mb-12">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={project.imageUrl}
              alt={project.title}
              loading="eager"
              decoding="async"
              width={1200}
              height={450}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
              className="w-full h-auto max-h-[400px] md:max-h-[450px] object-cover"
            />
          </div>
        </div>

        {/* Project Title */}
        <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          {project.title}
        </h1>

        {/* Project Overview Section - Only for Cyber Oasis */}
        {project.id === '4' && (
          <div className={`mb-10 p-6 rounded-lg ${
            theme === 'dark' 
              ? 'bg-[#252525] border border-gray-700' 
              : 'bg-white border border-gray-200 shadow-sm'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center gap-3">
                <Globe className={`w-6 h-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                <div>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t('project4.eventType')}
                  </p>
                  <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    {t('project4.eventTypeValue')}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className={`w-6 h-6 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} />
                <div>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t('project4.region')}
                  </p>
                  <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    {t('project4.regionValue')}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Code className={`w-6 h-6 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
                <div>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t('project4.role')}
                  </p>
                  <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    {t('project4.roleValue')}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Rocket className={`w-6 h-6 ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`} />
                <div>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t('project4.status')}
                  </p>
                  <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    {t('project4.statusValue')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Two Column Layout: Description and Features */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${isRTL ? 'lg:grid-cols-[1fr,1fr]' : ''}`}>
          {/* Left Side: Description */}
          <div className={`${isRTL ? 'lg:order-2' : ''}`}>
            <div className={`mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              <p className="whitespace-pre-line text-lg">
                {project.description.split('\n\nKey Contributions:')[0] || project.description}
              </p>
            </div>

            {/* Key Features Section - Only for Cyber Oasis */}
            {project.id === '4' && (
              <div className="mb-8">
                <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  {t('project4.keyFeatures')}
                </h2>
                <div className="space-y-4">
                  {[
                    { icon: Shield, text: t('project4.feature1') },
                    { icon: Zap, text: t('project4.feature2') },
                    { icon: Users, text: t('project4.feature3') },
                    { icon: Globe, text: t('project4.feature4') },
                    { icon: Code, text: t('project4.feature5') },
                    { icon: Rocket, text: t('project4.feature6') },
                  ].map((feature, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-4 p-4 rounded-lg ${
                        theme === 'dark'
                          ? 'bg-[#252525] border border-gray-700'
                          : 'bg-white border border-gray-200'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${
                        theme === 'dark'
                          ? 'bg-gray-700'
                          : 'bg-gray-100'
                      }`}>
                        <feature.icon className={`w-5 h-5 ${
                          theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                        }`} />
                      </div>
                      <p className={`flex-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        {feature.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Side: Key Contributions & Technologies */}
          <div className={`${isRTL ? 'lg:order-1' : ''}`}>
            {/* Key Contributions - For projects with Key Contributions section */}
            {(project.id === '3' || project.id === '4') && (
              <div className="mb-8">
                <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  {t('keyContributions')}
                </h2>
                <div className={`p-6 rounded-lg ${
                  theme === 'dark'
                    ? 'bg-[#252525] border border-gray-700'
                    : 'bg-white border border-gray-200'
                }`}>
                  <ul className="space-y-3">
                    {project.description.split('\n\nKey Contributions:')[1]?.split('\n•').slice(1).map((contribution, idx) => (
                      contribution.trim() && (
                        <li key={idx} className={`flex items-start gap-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          <span className={`mt-2 w-2 h-2 rounded-full ${
                            theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'
                          }`} />
                          <span>{contribution.trim()}</span>
                        </li>
                      )
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Technologies */}
            <div className="mb-8">
              <h2 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                {project.id === '4' ? t('project4.technologiesTitle') : 'Technologies'}
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

            {/* Impact Section - Only for Cyber Oasis */}
            {project.id === '4' && (
              <div className={`mb-8 p-6 rounded-lg ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-700/30'
                  : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200'
              }`}>
                <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  ✨ {t('project4.impact')}
                </h2>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                  {t('project4.impactDescription')}
                </p>
              </div>
            )}

            {/* Project Links */}
            <div className={`flex flex-col gap-3 ${isRTL ? 'items-end' : 'items-start'}`}>
              {project.liveUrl && (
                <Button
                  variant="gradient"
                  size="lg"
                  asChild
                  className="group relative overflow-hidden min-w-[200px]"
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                    {project.id === '2' ? t('orangeTunisieVersion') : 'Visit Website'}
                    {/* Animated background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ff8660] to-[#a66cff] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </a>
                </Button>
              )}
              {(project as any).liveUrl2 && (
                <Button
                  variant="gradient"
                  size="lg"
                  asChild
                  className="group relative overflow-hidden min-w-[200px] bg-gradient-to-r from-[#ff8660] to-[#ff6b47]"
                >
                  <a
                    href={(project as any).liveUrl2}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                    {t('orangeMEAVersion')}
                    {/* Animated background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b47] to-[#ff8660] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <BackToTop />
      
      {/* Custom Cursor */}
      <CustomCursor />
    </div>
  );
};

