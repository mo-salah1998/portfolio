import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../../lib/theme-context';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isRTL = i18n.language === 'ar';
  
  const languages = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'ar', label: 'العربية' }
  ];
  
  const getCurrentLanguageLabel = () => {
    const currentLang = languages.find(lang => lang.code === i18n.language);
    return currentLang ? (currentLang.code === 'en' ? 'EN' : currentLang.code === 'fr' ? 'FR' : 'عر') : 'EN';
  };
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // If using Arabic, we need to set the dir attribute for RTL support
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
    setIsOpen(false);
  };
  
  // Set initial direction on component mount
  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, []);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="language-dropdown relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-opacity-20 hover:bg-opacity-30 transition-colors"
        style={{ 
          background: isOpen 
            ? 'linear-gradient(90deg, rgba(255,134,96,1) 0%, rgba(154,51,255,1) 100%)' 
            : theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'
        }}
      >
        <span className={`text-sm font-medium ${isOpen ? 'text-white' : theme === 'dark' ? 'text-white/90' : 'text-gray-800'}`}>
          {getCurrentLanguageLabel()}
        </span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${isOpen ? 'text-white' : theme === 'dark' ? 'text-white/90' : 'text-gray-800'}`} 
        />
      </button>
      
      {isOpen && (
        <div 
          className={`absolute ${isRTL ? 'right-0' : 'left-0'} top-full mt-2 p-2 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-[#2a2a2a]' : 'bg-white'} min-w-[120px] z-50`}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm ${i18n.language === lang.code 
                ? (theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900') 
                : (theme === 'dark' ? 'text-white/90 hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-100')
              } ${isRTL && lang.code === 'ar' ? 'text-right' : ''}`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}; 