import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../lib/theme-context";

export const Footer = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const isRTL = i18n.language === 'ar';
  
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/mo-salah1998", icon: "/github.svg" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/mouhamed-salah-naija/", icon: "/linkedin.svg" },
    { name: "Medium", url: "https://medium.com/@naija963", icon: "/medium.svg" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${theme === 'dark' ? 'bg-[#1d1d1d]' : 'bg-gray-200'} py-12 w-full`}>
      <div className="px-4 mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className={`flex flex-col gap-10 justify-between md:flex-row`}>
          {/* Contact Info */}
          <div className="md:w-1/2">
            <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              {t('getInTouch')}
            </h3>
            <div className={`space-y-3`}>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} >
                <span className="font-semibold">{t('email')}:</span> naija.mouhamedsalah@gmail.com
              </p>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                <span className="font-semibold">{t('phone')}:</span> +216 50 01 13 66
              </p>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                <span className="font-semibold">{t('location')}:</span> Tunis, Tunisia
              </p>
            </div>
              {/* Bio Text */}
           {/*  <div className={`mt-12`}>
             <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed text-center `}>
              {t('footerText')}
            </p>
        </div> */}
          </div>

          {/* Social Links */}
          <div className="md:w-1/2">
            <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              {t('followMe')}
            </h3>
            <div className={`flex gap-6`}>
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80"
                >
                  <img 
                    src={link.icon} 
                    alt={link.name} 
                    className={`w-8 h-8 ${theme === 'dark' ? 'filter invert' : ''}`} 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

      

        {/* Copyright */}
        <div className="pt-6 mt-10 border-t border-gray-600">
          <p className={`text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            &copy; {currentYear} {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
}; 