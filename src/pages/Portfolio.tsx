import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useTheme } from "../lib/theme-context";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProjectSection } from "../components/sections/ProjectSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { ImageGallerySection } from "../components/sections/ImageGallerySection";
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

      <div className="px-4 mx-auto max-w-7xl">
        {/* Profile Section */}
        <div id="home" className="flex flex-col items-center pt-20 mt-28 w-full md:px-6">
          <div className="relative w-64 h-56">
            {/* Circular background for avatar that matches the gradient text color */}
            <div className="absolute w-52 h-52 rounded-full" style={{
              background: 'linear-gradient(90deg, rgba(166,108,255,0.8) 0%, rgba(255,134,96,0.8) 100%)',
              top: '0',
              left: '50%',
              transform: 'translateX(-50%)'
            }}></div>
            {isRTL ? (
              <div className="relative w-52 h-52 rounded-full bg-[url(/avatar2.png)] bg-cover bg-center"
              style={{
                top: '0px',
                left: '31%',
                transform: 'translateX(-50%)'
              }} />
          ):(
            <div className="relative w-52 h-52 rounded-full bg-[url(/avatar2.png)] bg-cover bg-center"
            style={{
              top: '0px',
              left: '50%',
              transform: 'translateX(-50%)'
            }} />
          )}
          </div>

          {/* Main Title */}
          <div className="mt-10 w-full text-center">
            {isRTL ? (
              <h1 className="flex flex-col gap-2 items-center text-4xl font-bold md:text-5xl lg:text-6xl">
                <span>{t('codeAndTeach')}</span>
                <span>{t('studentsHow')}</span>
                <span className="gradient-text text-[#a66cff]">{t('doItToo')}</span>
              </h1>
            ) : (
              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                {t('codeAndTeach')} <br />
                <span className="hidden md:inline md:ml-2">{t('studentsHow')} </span>
                <span className="gradient-text text-[#a66cff]">{t('doItToo')}</span>
              </h1>
            )}
          </div>

          {/* Bio Text */}
          <div className="mt-16 w-full max-w-2xl">
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
              <span className="font-sans text-xl font-semibold gradient-text">
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
            <div className="flex flex-wrap gap-8 justify-center items-start mt-8 md:gap-12 lg:gap-16">
              {techIcons.map((tech, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col items-center justify-center p-4 rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-[#161513] hover:opacity-80' 
                      : 'bg-white shadow-sm border border-gray-200 hover:shadow-md'
                  } transition-all min-w-[80px]`}
                >
                  <div className="flex relative justify-center items-center mb-2" style={{ height: "42px" }}>
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
          <div id="projects" className="pt-10 mt-16 w-full text-center">
            <h2 className="inline-block mb-10 font-sans text-3xl font-extrabold gradient-text-orange md:text-4xl">
              {t('projectsTitle')}
            </h2>
          </div>
        </div>

        {/* Projects Section */}
        <div className="px-4 w-full md:px-6">
          <ProjectSection />
        </div>

        {/* Experience Section Title */}
        <div id="experience" className="flex justify-center pt-10 mt-16 w-full text-center">
          <h2 className="inline-block mb-10 font-sans text-3xl font-extrabold gradient-text-blue md:text-4xl">
            {t('experienceTitle')}
          </h2>
        </div>

        {/* Experience Section */}
        <div className="w-full">
          <ExperienceSection />
        </div>

        {/* Gallery Section Title */}
        <div id="gallery" className="flex justify-center pt-10 mt-16 w-full text-center">
          <h2 className="inline-block mb-10 font-sans text-3xl font-extrabold gradient-text md:text-4xl">
            {t('galleryTitle')}
          </h2>
        </div>

        {/* Gallery Section */}
        <div className="w-full">
          <ImageGallerySection />
        </div>
      </div>

      {/* Footer */}
      <div id="contact" className="mt-12 w-full">
        <Footer />
      </div>
    </div>
  );
}; 