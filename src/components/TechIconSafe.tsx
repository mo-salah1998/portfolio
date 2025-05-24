import React from 'react';
import * as SiIcons from 'react-icons/si';

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

// Mapping entre le nom de la technologie et le nom de l'icône dans react-icons/si
const iconMapping: Record<TechName, keyof typeof SiIcons> = {
  'Javascript': 'SiJavascript',
  'Nodejs': 'SiNodedotjs',
  'Html': 'SiHtml5',
  'Css': 'SiCss3',
  'Reactjs': 'SiReact',
  'Typescript': 'SiTypescript',
  'Nextjs': 'SiNextdotjs',
  'Tailwind': 'SiTailwindcss',
  'Git': 'SiGit',
  'Github': 'SiGithub',
  'Docker': 'SiDocker',
  'AWS': 'SiAmazonwebservices'
};

export const TechIconSafe: React.FC<TechIconProps> = ({ name, isDarkMode, size = 42 }) => {
  const color = isDarkMode ? '#FFFFFF' : iconColors[name];
  const iconName = iconMapping[name];
  
  // Créer une fonction qui rend l'icône dynamiquement
  const IconComponent = React.useMemo(() => {
    // @ts-ignore - Nous savons que l'icône existe, ignorons l'erreur TypeScript
    const Icon = SiIcons[iconName];
    return Icon;
  }, [iconName]);

  return (
    <div className="flex items-center justify-center">
      {/* @ts-ignore - Contournement des limitations TypeScript avec React Icons */}
      <IconComponent size={size} color={color} />
    </div>
  );
}; 