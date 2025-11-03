import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { LanguageSwitcher } from "./ui/language-switcher";
import { ThemeToggle } from "./ui/theme-toggle";
import { useTheme } from "../lib/theme-context";
import { Menu, X } from "lucide-react";

export const Header = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isRTL = i18n.language === 'ar';
  const isHomePage = location.pathname === '/';
  
  // Navigation items data
  const navItems = [
    { label: t('home'), id: 'home' },
    { label: t('projects'), id: 'projects' },
    { label: t('experience'), id: 'experience' },
    { label: t('contact'), id: 'contact' },
  ];

  // Scroll to section function
  const scrollToSection = (id: string) => {
    // Close mobile menu after clicking
    setMobileMenuOpen(false);
    
    // If we're not on the home page, navigate to home first with scroll target
    if (!isHomePage) {
      navigate('/', { state: { scrollTo: id } });
    } else {
      // We're already on home page, scroll immediately
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="w-full h-20 fixed top-0 left-0 right-0 z-50" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="relative w-full h-full">
        <div className={`absolute w-full h-full top-0 left-0 right-0 ${theme === 'dark' ? 'bg-[#222222]' : 'bg-white'} shadow-md ${theme === 'dark' ? 'opacity-100' : 'opacity-95'}`} />

        <div className="flex items-center justify-between h-full px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Logo */}
          <div className={`relative z-10 ${isRTL ? 'order-2' : 'order-1'}`}>
            <svg 
              className={`w-32 h-32 md:w-40 md:h-40 ${theme === 'dark' ? 'text-white' : 'text-black'}`} 
              width="600" 
              height="450" 
              viewBox="0 0 600 450" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(0,450) scale(0.1,-0.1)" fill="currentColor" stroke="none">
                <path d="M3670 2743 c-19 -70 -41 -213 -38 -251 3 -33 4 -34 10 -12 4 14 12 51 18 83 6 31 15 55 20 52 5 -3 14 -29 21 -58 15 -71 6 -88 -124 -225 -92 -98 -106 -118 -135 -191 -18 -45 -32 -91 -32 -102 0 -18 3 -18 53 7 28 15 63 34 77 43 56 38 120 71 120 62 0 -22 -110 -127 -230 -220 -170 -133 -228 -214 -230 -318 0 -23 4 -53 10 -67 26 -69 175 -112 355 -102 96 4 201 23 191 33 -3 3 -69 4 -148 4 -159 -2 -231 8 -297 42 -129 64 -99 143 119 311 58 45 123 99 145 121 42 42 113 169 145 258 10 28 21 60 25 70 4 9 3 17 -2 17 -4 0 -55 -29 -113 -65 -57 -35 -106 -62 -109 -60 -2 3 27 38 66 78 78 80 110 135 143 247 27 91 23 155 -14 229 -15 28 -28 51 -31 51 -2 0 -9 -17 -15 -37z"/>
                <path d="M3908 2503 c-13 -40 -14 -88 -8 -298 8 -261 16 -316 50 -353 42 -44 121 -40 172 9 25 24 40 29 78 29 26 0 68 3 93 6 l46 7 4 -34 4 -34 1 36 c2 34 5 38 50 54 146 54 280 203 308 343 6 27 4 32 -13 32 -24 0 -147 -41 -194 -65 -68 -34 -99 -81 -129 -190 -15 -56 -20 -62 -62 -82 -25 -12 -64 -25 -87 -29 l-41 -7 15 36 c8 20 15 47 15 59 -1 20 -6 18 -43 -23 -65 -71 -108 -86 -156 -53 -52 37 -69 139 -72 430 -1 96 -5 174 -9 174 -4 0 -14 -21 -22 -47z m692 -363 c-53 -47 -219 -154 -227 -146 -3 2 5 27 18 55 25 58 55 81 157 117 105 37 116 32 52 -26z"/>
                <path d="M2925 2438 l-28 -42 28 -24 28 -24 18 24 c42 55 45 69 20 89 -13 10 -27 19 -31 19 -4 0 -20 -19 -35 -42z"/>
                <path d="M1758 2267 c-53 -9 -58 -13 -82 -57 l-25 -46 47 1 c61 2 87 17 112 65 22 43 24 51 13 49 -5 -1 -34 -6 -65 -12z"/>
                <path d="M2093 2261 c-55 -26 -87 -76 -116 -186 -21 -79 -27 -91 -53 -102 -52 -22 -78 -16 -117 27 -19 22 -42 40 -49 40 -20 0 -98 -51 -136 -90 -35 -35 -45 -53 -57 -109 l-7 -34 57 47 c78 63 96 66 148 25 34 -27 50 -34 84 -33 23 0 53 8 67 17 14 10 27 17 28 17 2 0 2 -35 1 -77 l-1 -78 9 60 c6 33 12 74 15 92 3 24 22 46 77 93 105 90 104 89 99 22 -5 -71 26 -135 78 -164 44 -25 128 -19 189 11 l42 22 26 -21 c14 -11 37 -20 52 -20 39 0 122 43 160 84 l34 35 17 -38 c50 -110 162 -106 238 9 65 97 91 245 58 325 -19 45 -30 39 -62 -29 -24 -51 -35 -121 -13 -83 16 27 27 20 40 -22 15 -51 6 -86 -34 -122 -63 -58 -135 -62 -162 -10 -13 26 -13 30 1 42 9 7 24 30 35 51 19 37 19 38 -1 58 -15 15 -33 20 -74 20 -84 0 -111 -14 -135 -70 -12 -27 -21 -51 -21 -54 0 -3 13 -6 29 -6 43 0 46 -15 8 -44 -41 -32 -99 -56 -132 -56 -30 0 -30 0 -5 47 11 21 20 49 20 63 0 24 -2 23 -40 -17 -51 -54 -89 -73 -156 -80 -95 -10 -154 33 -154 113 0 42 2 45 52 73 29 17 74 36 101 43 49 12 64 28 81 85 7 21 5 21 -46 16 -33 -3 -76 1 -114 11 -79 21 -109 20 -161 -3z m79 -89 c14 -6 8 -13 -30 -36 -26 -16 -71 -50 -101 -75 l-54 -45 6 38 c7 43 49 103 81 116 25 10 74 11 98 2z"/>
                <path d="M2478 1721 c-58 -31 -69 -42 -84 -79 -9 -24 -14 -45 -11 -48 6 -7 119 60 138 83 18 20 42 84 31 82 -4 -1 -37 -18 -74 -38z"/>
                <path d="M1981 1616 l-31 -44 25 -16 c34 -23 39 -21 70 26 l28 42 -23 18 c-12 10 -26 18 -31 18 -4 0 -22 -20 -38 -44z"/>
              </g>
            </svg>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center gap-6 ${isRTL ? 'order-1 ml-auto' : 'order-2'}`}>
            <nav className="relative z-10">
              <ul className={`flex items-center gap-6 lg:gap-10 ${isRTL ? 'rtl-nav' : ''}`}>
                {navItems.map((item, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection(item.id)}
                      className={`cursor-pointer font-sans font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'} text-base text-center tracking-wide hover:text-opacity-70 transition-colors`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className={`flex items-center gap-4 relative z-10`}>
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className={`md:hidden flex items-center gap-4 relative z-10 ${isRTL ? 'order-1' : 'order-2'}`}>
            <ThemeToggle />
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden absolute top-20 inset-x-0 w-full ${theme === 'dark' ? 'bg-[#222222]' : 'bg-white'} shadow-md z-50`}>
            <nav className="p-4">
              <ul className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <li key={index} className="w-full">
                    <button 
                      onClick={() => scrollToSection(item.id)}
                      className={`cursor-pointer font-sans font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'} text-base tracking-wide hover:text-opacity-70 transition-colors w-full text-${isRTL ? 'right' : 'left'}`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
                <li className="pt-2">
                  <LanguageSwitcher />
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}; 