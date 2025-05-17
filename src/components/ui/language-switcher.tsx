import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { CSSTransition } from 'react-transition-group';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../../lib/theme-context';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
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
    setIsOpen(false);
  };
  
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
    <div className="language-dropdown" ref={dropdownRef}>
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
      
      <div className={`language-dropdown-menu ${theme === 'light' ? 'light' : ''} ${isOpen ? 'open' : ''}`}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`language-option ${theme === 'light' ? 'light' : ''} ${i18n.language === lang.code ? 'active' : ''} w-full text-left text-sm ${theme === 'dark' ? 'text-white/90' : 'text-gray-800'}`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}; 