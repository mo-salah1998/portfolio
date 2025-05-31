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
  // Experience entries
  experience1: {
    company: 'Orange Digital Center Tunisia - ODC',
    role: 'Lead Full-Stack Developer / Instructor',
    period: 'Jul 2024 - Present',
    description: 'Supervise and lead a team of full-stack developers, supporting them in developing their skills. Collaborate with cross-functional teams to design and implement software solutions tailored to business needs. Design and develop software applications using various technologies. Perform unit testing, code reviews, and bug fixes to ensure solution quality. Participate in Agile processes: daily stand-ups, sprint planning, and retrospectives.',
  },
  experience2: {
    company: 'Orange Digital Center Tunisia - ODC',
    role: 'Full Stack JavaScript',
    period: 'Mar 2024 - Jun 2024',
    description: 'Designed and developed a showcase website and an administrative dashboard. Created a common API for UFE applications (web and mobile).',
  },
  experience3: {
    company: 'POCTEO',
    role: 'Full Stack JavaScript Developer',
    period: 'Oct 2023 - Jun 2024',
    description: 'Developed an MVP for an e-learning platform with real-time mentorship. Integrated WebSocket connections for real-time notifications.',
  },
  experience4: {
    company: 'Welyne',
    role: 'DevOps Engineer',
    period: 'Jun 2023 - Sep 2023',
    description: 'Set up a CI/CD pipeline using Docker and GitLab CI/CD. Configured AWS EC2 (Amazon Linux), installed Docker, and automated deployment via GitLab.',
  },
  experience5: {
    company: 'Addresti',
    role: 'FullStack JavaScript Developer',
    period: 'Mar 2022 - Sep 2022',
    description: 'Designed and developed a platform for delivery companies, partnered with Addresti using the MERN stack.',
  },
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
  // Experience entries
  experience1: {
    company: 'Orange Digital Center Tunisie - ODC',
    role: 'Développeur Full-Stack Senior / Formateur',
    period: 'Juil 2024 - Présent',
    description: 'Superviser et diriger une équipe de développeurs full-stack, les soutenant dans le développement de leurs compétences. Collaborer avec des équipes pluridisciplinaires pour concevoir et mettre en œuvre des solutions logicielles adaptées aux besoins de l\'entreprise. Concevoir et développer des applications logicielles utilisant diverses technologies. Effectuer des tests unitaires, des révisions de code et des corrections de bugs pour assurer la qualité des solutions. Participer aux processus Agile : réunions quotidiennes, planification de sprint et rétrospectives.',
  },
  experience2: {
    company: 'Orange Digital Center Tunisie - ODC',
    role: 'Développeur JavaScript Full Stack',
    period: 'Mars 2024 - Juin 2024',
    description: 'Conception et développement d\'un site vitrine et d\'un tableau de bord administratif. Création d\'une API commune pour les applications UFE (web et mobile).',
  },
  experience3: {
    company: 'POCTEO',
    role: 'Développeur JavaScript Full Stack',
    period: 'Oct 2023 - Juin 2024',
    description: 'Développement d\'un MVP pour une plateforme d\'e-learning avec mentorat en temps réel. Intégration de connexions WebSocket pour les notifications en temps réel.',
  },
  experience4: {
    company: 'Welyne',
    role: 'Ingénieur DevOps',
    period: 'Juin 2023 - Sept 2023',
    description: 'Mise en place d\'un pipeline CI/CD utilisant Docker et GitLab CI/CD. Configuration d\'AWS EC2 (Amazon Linux), installation de Docker et automatisation du déploiement via GitLab.',
  },
  experience5: {
    company: 'Addresti',
    role: 'Développeur JavaScript Full Stack',
    period: 'Mars 2022 - Sept 2022',
    description: 'Conception et développement d\'une plateforme pour les entreprises de livraison, en partenariat avec Addresti, utilisant la stack MERN.',
  },
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
  // Experience entries
  experience1: {
    company: 'مركز أورانج الرقمي تونس - ODC',
    role: 'قائد مطوري الواجهات المتكاملة / مدرب',
    period: 'يوليو 2024 - الحاضر',
    description: 'الإشراف وقيادة فريق من مطوري الواجهات المتكاملة، ودعمهم في تطوير مهاراتهم. التعاون مع فرق متعددة التخصصات لتصميم وتنفيذ حلول برمجية مخصصة لاحتياجات العمل. تصميم وتطوير تطبيقات برمجية باستخدام تقنيات متنوعة. إجراء اختبارات وحدة ومراجعات للكود وإصلاح الأخطاء لضمان جودة الحلول. المشاركة في عمليات أجايل: الاجتماعات اليومية وتخطيط السبرنت والمراجعات.',
  },
  experience2: {
    company: 'مركز أورانج الرقمي تونس - ODC',
    role: 'مطور جافاسكريبت متكامل',
    period: 'مارس 2024 - يونيو 2024',
    description: 'تصميم وتطوير موقع ويب عرض ولوحة تحكم إدارية. إنشاء واجهة برمجة تطبيقات مشتركة لتطبيقات UFE (ويب وموبايل).',
  },
  experience3: {
    company: 'POCTEO',
    role: 'مطور جافاسكريبت متكامل',
    period: 'أكتوبر 2023 - يونيو 2024',
    description: 'تطوير نموذج أولي لمنصة تعليم إلكتروني مع إرشاد في الوقت الفعلي. دمج اتصالات WebSocket للإشعارات في الوقت الفعلي.',
  },
  experience4: {
    company: 'Welyne',
    role: 'مهندس DevOps',
    period: 'يونيو 2023 - سبتمبر 2023',
    description: 'إعداد خط أنابيب CI/CD باستخدام Docker و GitLab CI/CD. تكوين AWS EC2 (Amazon Linux)، وتثبيت Docker، وأتمتة النشر عبر GitLab.',
  },
  experience5: {
    company: 'Addresti',
    role: 'مطور جافاسكريبت متكامل',
    period: 'مارس 2022 - سبتمبر 2022',
    description: 'تصميم وتطوير منصة لشركات التوصيل، بالشراكة مع Addresti باستخدام مجموعة تقنيات MERN.',
  },
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