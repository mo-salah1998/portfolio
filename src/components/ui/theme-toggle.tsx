import React from 'react';
import { useTheme } from '../../lib/theme-context';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="relative"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className={`theme-toggle-track ${theme === 'light' ? 'light' : ''}`}>
        <div className="theme-toggle-thumb">
          {theme === 'dark' ? (
            <Moon className="w-3.5 h-3.5" />
          ) : (
            <Sun className="w-3.5 h-3.5" />
          )}
        </div>
      </div>
    </button>
  );
}; 