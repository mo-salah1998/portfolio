import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../components/ui/button";
import { useTheme } from "../lib/theme-context";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProjectSection } from "../components/sections/ProjectSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";

export const Portfolio = (): JSX.Element => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  // Technology icons data
  const techIcons = [
    {
      name: "Javascript",
      src: "/javascript.png",
      width: "42px",
      height: "42px",
    },
    { name: "Nodejs", src: "/nodejs.png", width: "42px", height: "42px" },
    { name: "Html", src: "/html.png", width: "37px", height: "42px" },
    { name: "Css", src: "/css.png", width: "37px", height: "42px" },
    { name: "Reactjs", src: "/reactjs.png", width: "47px", height: "42px" },
  ];

  return (
    <div className={`${theme === 'dark' ? 'bg-[#161513]' : 'bg-gray-100'} flex flex-row justify-center w-full`}>
      <div className={`${theme === 'dark' ? 'bg-[#161513]' : 'bg-gray-100'} overflow-hidden relative`}>
        <Header />

        {/* Profile Section */}
        <div id="home" className="flex flex-col items-center mt-28 pt-20 px-4 md:px-6">
          <div className="w-64 h-56 relative">
            <div className="relative w-52 h-52 top-2 left-2 rounded-full bg-[url(/avatar.png)] bg-cover bg-center" />
          </div>

          {/* Main Title */}
          <div className="text-center mt-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              I do code and teach
              <br className="hidden md:block" />
              <span className="md:ml-2">students how to </span>
              <span className="gradient-text text-[#a66cff]">do it too!</span>
            </h1>
          </div>

          {/* Bio Text */}
          <div className="w-full max-w-2xl mt-16 text-center">
            <p className={`font-sans font-light ${theme === 'dark' ? 'text-secondary-text' : 'text-gray-700'} text-lg leading-relaxed`}>
              {t('bioText')}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-5 mt-10">
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
              {techIcons.map((icon, index) => (
                <img
                  key={index}
                  className="relative"
                  style={{ width: icon.width, height: icon.height }}
                  alt={icon.name}
                  src={icon.src}
                />
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
        <div className="projects-container px-4 md:px-6">
          <ProjectSection />
        </div>

        {/* Experience Section Title */}
        <div id="experience" className="flex justify-center mt-16 pt-10 w-full text-center">
          <h2 className="gradient-text-blue font-sans font-extrabold text-3xl md:text-4xl inline-block mb-10">
            {t('experienceTitle')}
          </h2>
        </div>

        {/* Experience Section */}
        <ExperienceSection />

        {/* Footer */}
        <div id="contact" className="w-screen mt-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}; 