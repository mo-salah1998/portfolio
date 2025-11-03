import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useTheme } from "../lib/theme-context";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProjectSection } from "../components/sections/ProjectSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { TechIconSafe } from "../components/TechIconSafe";

// Importez le type TechName depuis le composant TechIconSafe
type TechName = 
  | 'Javascript'
  | 'Nodejs'
  | 'Html'
  | 'Css'
  | 'Reactjs'
  | 'Typescript'
  | 'Nextjs'
  | 'Tailwind'
  | 'Git'
  | 'Github'
  | 'Docker'
  | 'AWS';

export const Portfolio = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const location = useLocation();
  const isRTL = i18n.language === 'ar';

  // Technology icons data avec le bon type
  const techIcons: { name: TechName }[] = [
    { name: "Javascript" },
    { name: "Nodejs" },
    { name: "Html" },
    { name: "Css" },
    { name: "Reactjs" },
    { name: "Typescript" },
    { name: "Nextjs" },
    { name: "Tailwind" },
    { name: "Git" },
    { name: "Github" },
    { name: "Docker" },
    { name: "AWS" },
  ];

  // Update dir attribute when language changes
  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language || 'en';
  }, [isRTL, i18n.language]);

  // Handle scroll to section when navigating from detail page
  useEffect(() => {
    const scrollToId = (location.state as any)?.scrollTo;
    if (scrollToId) {
      // Small delay to ensure page is rendered
      setTimeout(() => {
        const element = document.getElementById(scrollToId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  }, [location.state]);

  return (
    <div className={`${theme === 'dark' ? 'bg-[#161513]' : 'bg-gray-100'} w-full overflow-x-hidden`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />

      <div className="max-w-7xl mx-auto px-4">
        {/* Profile Section */}
        <div id="home" className="flex flex-col items-center mt-28 pt-20 md:px-6 w-full">
          <div className="w-64 h-56 relative">
            {/* Circular background for avatar that matches the gradient text color */}
            <div className="absolute w-52 h-52 rounded-full" style={{
              background: 'linear-gradient(90deg, rgba(166,108,255,0.8) 0%, rgba(255,134,96,0.8) 100%)',
              top: '0',
              left: '50%',
              transform: 'translateX(-50%)'
            }}></div>
            {isRTL ? (
              <div className="relative w-52 h-52 rounded-full bg-[url(/avatar.png)] bg-cover bg-center"
              style={{
                top: '0px',
                left: '31%',
                transform: 'translateX(-50%)'
              }} />
          ):(
            <div className="relative w-52 h-52 rounded-full bg-[url(/avatar.png)] bg-cover bg-center"
            style={{
              top: '0px',
              left: '50%',
              transform: 'translateX(-50%)'
            }} />
          )}
          </div>

          {/* Main Title */}
          <div className="text-center mt-10 w-full">
            {isRTL ? (
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold flex flex-col items-center gap-2">
                <span>{t('codeAndTeach')}</span>
                <span>{t('studentsHow')}</span>
                <span className="gradient-text text-[#a66cff]">{t('doItToo')}</span>
              </h1>
            ) : (
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                {t('codeAndTeach')} <br />
                <span className="hidden md:inline md:ml-2">{t('studentsHow')} </span>
                <span className="gradient-text text-[#a66cff]">{t('doItToo')}</span>
              </h1>
            )}
          </div>

          {/* Bio Text */}
          <div className="w-full max-w-2xl mt-16">
            <p className={`font-sans font-light ${theme === 'dark' ? 'text-secondary-text' : 'text-gray-700'} text-lg leading-relaxed ${isRTL ? 'text-right' : 'text-center'}`}>
              {t('bioText')}
            </p>
          </div>

          {/* Action Buttons */}
          <div className={`flex flex-col md:flex-row gap-5 mt-10 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <Button
              variant="outline"
              className={`w-full md:w-48 h-16 rounded-full border border-solid ${theme === 'dark' ? 'border-white' : 'border-gray-800'} bg-transparent`}
            >
              <span className={`font-sans font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'} text-xl`}>
                {t('getInTouch')}
              </span>
            </Button>

            <Button
              variant="outline"
              className={`w-full md:w-48 h-16 rounded-full border-2 border-solid ${theme === 'dark' ? 'border-white' : 'border-gray-800'} bg-transparent`}
            >
              <span className="gradient-text font-sans font-semibold text-xl">
                {t('downloadCV')}
              </span>
            </Button>
          </div>

          {/* Experience With Section */}
          <div className="mt-16 w-full">
            <h3 className={`font-sans font-semibold ${theme === 'dark' ? 'text-secondary-text' : 'text-gray-700'} text-xl tracking-wider text-center`}>
              {t('experienceWith')}
            </h3>

            {/* Tech Icons */}
            <div className="flex flex-wrap justify-center items-start gap-8 md:gap-12 lg:gap-16 mt-8">
              {techIcons.map((tech, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col items-center justify-center p-4 rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-[#161513] hover:opacity-80' 
                      : 'bg-white shadow-sm border border-gray-200 hover:shadow-md'
                  } transition-all min-w-[80px]`}
                >
                  <div className="relative mb-2 flex items-center justify-center" style={{ height: "42px" }}>
                    <TechIconSafe 
                      name={tech.name} 
                      isDarkMode={theme === 'dark'} 
                      size={42} 
                    />
                  </div>
                  <span className={`text-xs font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Section Title */}
          <div id="projects" className="mt-16 pt-10 w-full text-center">
            <h2 className="gradient-text-orange font-sans font-extrabold text-3xl md:text-4xl inline-block mb-10">
              {t('projectsTitle')}
            </h2>
          </div>
        </div>

        {/* Projects Section */}
        <div className="w-full px-4 md:px-6">
          <ProjectSection />
        </div>

        {/* Experience Section Title */}
        <div id="experience" className="flex justify-center mt-16 pt-10 w-full text-center">
          <h2 className="gradient-text-blue font-sans font-extrabold text-3xl md:text-4xl inline-block mb-10">
            {t('experienceTitle')}
          </h2>
        </div>

        {/* Experience Section */}
        <div className="w-full">
          <ExperienceSection />
        </div>
      </div>

      {/* Footer */}
      <div id="contact" className="w-full mt-12">
        <Footer />
      </div>
    </div>
  );
}; 