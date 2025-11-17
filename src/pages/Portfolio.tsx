import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useTheme } from "../lib/theme-context";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProjectSection } from "../components/sections/ProjectSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { TestimonialCarouselSection } from "../components/sections/TestimonialCarouselSection";
import { TechIconSafe } from "../components/TechIconSafe";
import { BackToTop } from "../components/ui/back-to-top";

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
        <div id="home" className="flex flex-col items-center pt-20 mt-24 w-full md:px-6">
          <div className="relative w-64 h-56">
            {/* Circular background for avatar that matches the gradient text color */}
            <div className="absolute w-52 h-52 rounded-full" style={{
              background: 'linear-gradient(90deg, rgba(166,108,255,0.8) 0%, rgba(255,134,96,0.8) 100%)',
              top: '0',
              left: '50%',
              transform: 'translateX(-50%)'
            }}></div>
            {isRTL ? (
              <img
                src="/avatar2.png"
                alt="Profile"
                loading="eager"
                decoding="async"
                width={208}
                height={208}
                className="object-cover relative w-52 h-52 rounded-full"
                style={{
                  top: '0px',
                  left: '31%',
                  transform: 'translateX(-50%)'
                }}
              />
          ):(
            <img
              src="/avatar2.png"
              alt="Profile"
              loading="eager"
              decoding="async"
              width={208}
              height={208}
              className="object-cover relative w-52 h-52 rounded-full"
              style={{
                top: '0px',
                left: '50%',
                transform: 'translateX(-50%)'
              }}
            />
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

          {/* Call to Action */}
          <div className="flex flex-col gap-4 items-center mt-12">
            <button
              onClick={() => window.open('https://wa.me/21650011366', '_blank')}
              className={`group relative px-8 py-5 rounded-full font-sans text-xl font-bold overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-[#a66cff] to-[#ff8660] text-white' 
                  : 'bg-gradient-to-r from-[#a66cff] to-[#ff8660] text-white'
              } shadow-lg animate-pulse-slow`}
              style={{
                animation: 'pulse-glow 3s ease-in-out infinite'
              }}
            >
              <span className="flex relative z-10 gap-3 items-center">
                {/* WhatsApp Icon */}
                <svg 
                  className="w-7 h-7" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>{t('getInTouch')}</span>
              </span>
              
              {/* Animated background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff8660] to-[#a66cff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            {/* Subtext */}
            <p className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} animate-fade-in`}>
              {t('whatsappSubtext')}
            </p>
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

        {/* Testimonials Section Title */}
        <div id="testimonials" className="flex justify-center pt-10 mt-16 w-full text-center">
          <h2 className="inline-block mb-10 font-sans text-3xl font-extrabold gradient-text-orange md:text-4xl">
            {t('testimonialsTitle')}
          </h2>
        </div>

        {/* Testimonials Section */}
        <div className="w-full">
          <TestimonialCarouselSection />
        </div>
      </div>

      {/* Footer */}
      <div id="contact" className="mt-12 w-full">
        <Footer />
      </div>

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}; 