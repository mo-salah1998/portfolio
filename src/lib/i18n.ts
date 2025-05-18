import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
const enTranslations = {
  // Navigation
  home: 'Home',
  projects: 'Projects',
  experience: 'Experience',
  contact: 'Contact',
  // Bio
  bioText: 'I am a seasoned full-stack software engineer with over 2 years of professional experience, specializing in full-stack development. My expertise lies in crafting robust and scalable SaaS-based architectures on the Amazon AWS platform.',
  // Buttons
  getInTouch: 'Get In Touch',
  downloadCV: 'Download CV',
  // Sections
  experienceWith: 'EXPERIENCE WITH',
  projectsTitle: 'PROJECTS',
  experienceTitle: 'EXPERIENCE',
  // Footer
  footerText: 'Seasoned Full Stack Software Engineer with over 8 years of hands-on experience in designing and implementing robust, scalable, and innovative web solutions. Adept at leveraging a comprehensive skill set encompassing front-end and back-end technologies',
  email: 'Email',
  phone: 'Phone',
  location: 'Location',
  followMe: 'Follow Me',
  allRightsReserved: 'All Rights Reserved',
  // Main title
  codeAndTeach: 'I do code and teach',
  studentsHow: 'students how to',
  doItToo: 'do it too!',
};

// French translations
const frTranslations = {
  // Navigation
  home: 'Accueil',
  projects: 'Projets',
  experience: 'Expérience',
  contact: 'Contact',
  // Bio
  bioText: 'Je suis un ingénieur logiciel full-stack expérimenté avec plus de 2 ans d\'expérience professionnelle, spécialisé dans le développement full-stack. Mon expertise réside dans la création d\'architectures SaaS robustes et évolutives sur la plateforme Amazon AWS.',
  // Buttons
  getInTouch: 'Contactez-moi',
  downloadCV: 'Télécharger CV',
  // Sections
  experienceWith: 'EXPÉRIENCE AVEC',
  projectsTitle: 'PROJETS',
  experienceTitle: 'EXPÉRIENCE',
  // Footer
  footerText: 'Ingénieur logiciel full stack expérimenté avec plus de 8 ans d\'expérience pratique dans la conception et la mise en œuvre de solutions web robustes, évolutives et innovantes. Habile à exploiter un ensemble complet de compétences englobant les technologies front-end et back-end',
  email: 'Email',
  phone: 'Téléphone',
  location: 'Emplacement',
  followMe: 'Suivez-moi',
  allRightsReserved: 'Tous Droits Réservés',
  // Main title
  codeAndTeach: 'Je code et j\'enseigne',
  studentsHow: 'aux étudiants comment',
  doItToo: 'le faire aussi !',
};

// Arabic translations - fixed and corrected
const arTranslations = {
  // Navigation
  home: 'الرئيسية',
  projects: 'المشاريع',
  experience: 'الخبرات',
  contact: 'تواصل معي',
  // Bio
  bioText: 'أنا مهندس برمجيات متكامل ذو خبرة تزيد عن عامين من الخبرة المهنية، متخصص في تطوير الواجهات الأمامية والخلفية. تكمن خبرتي في إنشاء بنيات قوية وقابلة للتوسع تعتمد على SaaS على منصة Amazon AWS.',
  // Buttons
  getInTouch: 'تواصل معي',
  downloadCV: 'تحميل السيرة الذاتية',
  // Sections
  experienceWith: 'خبرة مع',
  projectsTitle: 'المشاريع',
  experienceTitle: 'الخبرات',
  // Footer
  footerText: 'مهندس برمجيات متكامل ذو خبرة تزيد عن 8 سنوات في تصميم وتنفيذ حلول ويب قوية وقابلة للتوسع ومبتكرة. بارع في الاستفادة من مجموعة شاملة من المهارات التي تشمل تقنيات الواجهة الأمامية والخلفية',
  email: 'البريد الإلكتروني',
  phone: 'الهاتف',
  location: 'الموقع',
  followMe: 'تابعني',
  allRightsReserved: 'جميع الحقوق محفوظة',
  // Main title
  codeAndTeach: 'أقوم بالبرمجة وتعليم',
  studentsHow: 'الطلاب كيفية',
  doItToo: 'القيام بذلك أيضًا!',
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      fr: {
        translation: frTranslations,
      },
      ar: {
        translation: arTranslations,
      },
    },
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for React
    },
  });

export default i18n; 