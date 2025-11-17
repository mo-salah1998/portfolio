import { useTranslation } from "react-i18next";
import { useTheme } from "../lib/theme-context";

export const Footer = (): JSX.Element => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  
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
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                <span className="font-semibold">{t('email')}:</span>{' '}
                <a 
                  href="mailto:naija.mouhamedsalah@gmail.com"
                  className={`transition-colors duration-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#a66cff] hover:to-[#ff8660] ${
                    theme === 'dark' ? 'hover:text-white' : 'hover:text-gray-900'
                  }`}
                >
                  naija.mouhamedsalah@gmail.com
                </a>
              </p>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                <span className="font-semibold">{t('phone')}:</span>{' '}
                <a 
                  href="https://wa.me/21650011366"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 transition-colors duration-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#a66cff] hover:to-[#ff8660] ${
                    theme === 'dark' ? 'hover:text-white' : 'hover:text-gray-900'
                  }`}
                >
                  +216 50 01 13 66
                  <svg 
                    className="ml-1 w-4 h-4 opacity-70" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
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
                    loading="lazy"
                    decoding="async"
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