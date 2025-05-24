import React from 'react';
import {
  SiJavascript,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiDocker,
  SiAmazonwebservices
} from 'react-icons/si';
import { IconType } from 'react-icons';

// Types des icônes technologiques
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

// Propriétés du composant
interface TechIconProps {
  name: TechName;
  isDarkMode: boolean;
  size?: number;
}

// Couleurs des icônes en mode clair
const iconColors: Record<TechName, string> = {
  'Javascript': '#F7DF1E',
  'Nodejs': '#539E43',
  'Html': '#E34F26',
  'Css': '#1572B6',
  'Reactjs': '#61DAFB',
  'Typescript': '#3178C6',
  'Nextjs': '#000000',
  'Tailwind': '#06B6D4',
  'Git': '#F05032',
  'Github': '#181717',
  'Docker': '#2496ED',
  'AWS': '#FF9900'
};

export const TechIcon: React.FC<TechIconProps> = ({ name, isDarkMode, size = 42 }) => {
  const color = isDarkMode ? '#FFFFFF' : iconColors[name];
  
  // Rendu des icônes basé sur le nom
  const renderIcon = () => {
    switch (name) {
      case 'Javascript':
        return <SiJavascript color={color} size={size} />;
      case 'Nodejs':
        return <SiNodedotjs color={color} size={size} />;
      case 'Html':
        return <SiHtml5 color={color} size={size} />;
      case 'Css':
        return <SiCss3 color={color} size={size} />;
      case 'Reactjs':
        return <SiReact color={color} size={size} />;
      case 'Typescript':
        return <SiTypescript color={color} size={size} />;
      case 'Nextjs':
        return <SiNextdotjs color={color} size={size} />;
      case 'Tailwind':
        return <SiTailwindcss color={color} size={size} />;
      case 'Git':
        return <SiGit color={color} size={size} />;
      case 'Github':
        return <SiGithub color={color} size={size} />;
      case 'Docker':
        return <SiDocker color={color} size={size} />;
      case 'AWS':
        return <SiAmazonwebservices color={color} size={size} />;
      default:
        return null;
    }
  };
  
  return (
    <div style={{ fontSize: size }} className="flex items-center justify-center">
      {renderIcon()}
    </div>
  );
}; 