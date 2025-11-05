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
  bioText: 'I am a seasoned full-stack software engineer with over 3 years of professional experience, specializing in full-stack development. My expertise lies in crafting robust and scalable SaaS-based architectures on the Amazon AWS platform.',
  // Buttons
  getInTouch: 'Get In Touch',
  downloadCV: 'Download CV',
  // Sections
  experienceWith: 'EXPERIENCE WITH',
  projectsTitle: 'PROJECTS',
  experienceTitle: 'EXPERIENCE',
  // Footer
  footerText: 'Seasoned Full Stack Software Engineer with over 3 years of hands-on experience in designing and implementing robust, scalable, and innovative web solutions. Adept at leveraging a comprehensive skill set encompassing front-end and back-end technologies',
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
  // Project entries
  project1: {
    title: 'Interior Design Website Integration (UI Integration)',
    shortDescription: 'UI integration of a modern, responsive interior design website using Tailwind CSS and Framer Motion for smooth animations.',
    description: 'For this project, my main responsibility was the UI integration of a modern, responsive interior design website. I translated the provided design into clean and maintainable code using Tailwind CSS for styling and Framer Motion for smooth, engaging animations.\n\nKey Contributions:\n• Implemented pixel-perfect UI based on Figma\n• Built responsive layouts using Tailwind CSS\n• Integrated Framer Motion for animation and transition effects\n• Ensured cross-browser compatibility and mobile responsiveness\n• Optimized the structure for future functionality integration',
    technologies: 'Tailwind CSS, Framer Motion, React, TypeScript, Next.js',
    liveUrl: 'https://interior-designe-project.vercel.app',
  },
  project2: {
    title: 'Orange Summer Challenge Website (Event Website)',
    shortDescription: 'Official Orange Summer Challenge 2025 website with two tailored versions for Orange Tunisie and Orange MEA, featuring event presentation, user registration, and admin dashboard.',
    description: 'I developed and delivered the official Orange Summer Challenge 2025 website with two tailored versions: osc25.orange.tn for Orange Tunisie and osc25.gos.orange.com for Orange MEA. The platform includes event presentation with localized branding, user registration and login, program schedule, responsive design, and an admin dashboard.\n\nKey Contributions:\n• Developed two localized versions for different markets (Tunisia and MEA)\n• Implemented event presentation with localized branding\n• Built user registration and authentication system\n• Created responsive design for all devices\n• Developed admin dashboard for content management\n• Completed project on time with focus on performance and scalability\n• Deployed using Docker and Swarm for containerization',
    technologies: 'React.js, Tailwind CSS, Node.js (NestJS), MongoDB, Docker, Swarm',
    liveUrl: 'https://odc-platform-green.vercel.app',
    liveUrl2: 'https://osc25.gos.orange.com',
  },
  project3: {
    title: 'Site Vitrine et Dashboard Administratif - Union des Français à l\'Étranger',
    shortDescription: 'Showcase website and administrative dashboard for the Union des Français à l\'Étranger (UFE), featuring a public-facing website and a comprehensive admin panel for content management.',
    description: 'I developed a complete digital solution for the Union des Français à l\'Étranger (UFE), consisting of a modern showcase website and a comprehensive administrative dashboard. The platform serves the French community abroad with an intuitive public interface and powerful backend management tools.\n\nThe showcase website presents the organization\'s mission, activities, and resources in an accessible and engaging format. The administrative dashboard enables authorized users to manage content, user data, and platform settings efficiently.\n\nKey Contributions:\n• Designed and developed a responsive showcase website\n• Built a secure administrative dashboard with role-based access\n• Created a common API for UFE applications (web and mobile)\n• Implemented user authentication and authorization systems\n• Developed content management features for easy updates\n• Ensured cross-platform compatibility and responsive design',
    technologies: 'React.js, Node.js, MongoDB, Tailwind CSS, JavaScript, Express.js',
    liveUrl: '',
  },
  project4: {
    title: 'Cyber Oasis V1 – Hack the Dunes',
    shortDescription: 'Complete event showcase website for the first edition of the Cybersecurity Hackathon & Forum "Hack the Dunes", uniting students and professionals from Tunisia, Algeria, and Libya.',
    description: 'Cyber Oasis V1 is a complete event showcase website built for the first edition of the Cybersecurity Hackathon & Forum "Hack the Dunes", an initiative uniting students and professionals from Tunisia, Algeria, and Libya.\n\nThe platform was designed to highlight the event\'s mission, structure, and partners while simplifying participant engagement and registration. It integrates multiple dynamic sections, including a program overview, partner logos, a registration form with regional validation, and downloadable resources such as the press kit and ethical charter.\n\nThe design emphasizes clarity, credibility, and inclusiveness, aligning with the event\'s professional and international scope.\n\nKey Contributions:\n• Implemented fully responsive design optimized for mobile and desktop\n• Built dynamic navigation and countdown timer to the event date\n• Created structured sections for program, hackathon, conferences, and partners\n• Integrated contact form and social media links for engagement\n• Developed SEO-friendly architecture with optimized assets for performance\n• Added localization support for the Maghreb region (+216, +213, +218)\n• Handled UI/UX design, frontend development, integration, and deployment',
    technologies: 'Next.js, React, Tailwind CSS, EmailJS, JavaScript (ES6+), HTML5, CSS3',
    liveUrl: 'https://www.cyberoasisv1.com',
    eventType: 'Event Type',
    eventTypeValue: 'Hackathon & Forum',
    region: 'Region',
    regionValue: 'Maghreb',
    role: 'Role',
    roleValue: 'Full-Stack Developer',
    status: 'Status',
    statusValue: 'Live',
    keyFeatures: 'Key Features',
    feature1: 'Fully responsive design optimized for mobile and desktop',
    feature2: 'Dynamic navigation and countdown timer to the event date',
    feature3: 'Structured sections for program, hackathon, conferences, and partners',
    feature4: 'Integrated contact form and social media links for engagement',
    feature5: 'SEO-friendly architecture with optimized assets for performance',
    feature6: 'Localization support for the Maghreb region (+216, +213, +218)',
    technologiesTitle: 'Tech Stack & Tools',
    impact: 'Impact',
    impactDescription: 'The website successfully supported the visibility and registration process of a multi-country cybersecurity event. It enhanced outreach, simplified participant registration, and presented a professional digital identity for the organizing team and its partners.',
  },
  // Common project labels
  viewDetails: 'View Details',
  backToProjects: 'Back to Projects',
  keyContributions: 'Key Contributions',
  orangeMEAVersion: 'Orange MEA Version',
  orangeTunisieVersion: 'Orange Tunisie Version',
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
  footerText: 'Ingénieur logiciel full stack expérimenté avec plus de 3 ans d\'expérience pratique dans la conception et la mise en œuvre de solutions web robustes, évolutives et innovantes. Habile à exploiter un ensemble complet de compétences englobant les technologies front-end et back-end',
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
  // Project entries
  project1: {
    title: 'Intégration de Site Web de Design d\'Intérieur (Intégration UI)',
    shortDescription: 'Intégration de l\'interface utilisateur d\'un site web moderne et responsive de design d\'intérieur utilisant Tailwind CSS et Framer Motion pour des animations fluides.',
    description: 'Pour ce projet, ma principale responsabilité était l\'intégration de l\'interface utilisateur d\'un site web moderne et responsive de design d\'intérieur. J\'ai traduit le design fourni en code propre et maintenable en utilisant Tailwind CSS pour le style et Framer Motion pour des animations fluides et engageantes.\n\nContributions Clés:\n• Implémentation d\'une interface utilisateur pixel-perfect basée sur Figma\n• Création de mises en page responsives avec Tailwind CSS\n• Intégration de Framer Motion pour les effets d\'animation et de transition\n• Assurance de la compatibilité multi-navigateurs et de la réactivité mobile\n• Optimisation de la structure pour une intégration future de fonctionnalités',
    technologies: 'Tailwind CSS, Framer Motion, React, TypeScript, Next.js',
    liveUrl: 'https://interior-designe-project.vercel.app',
  },
  project2: {
    title: 'Site Web Orange Summer Challenge (Site d\'Événement)',
    shortDescription: 'Site web officiel Orange Summer Challenge 2025 avec deux versions adaptées pour Orange Tunisie et Orange MEA, incluant présentation d\'événement, inscription utilisateur et tableau de bord administrateur.',
    description: 'J\'ai développé et livré le site web officiel Orange Summer Challenge 2025 avec deux versions adaptées : osc25.orange.tn pour Orange Tunisie et osc25.gos.orange.com pour Orange MEA. La plateforme inclut la présentation de l\'événement avec un branding localisé, l\'inscription et la connexion utilisateur, le programme, un design responsive et un tableau de bord administrateur.\n\nContributions Clés:\n• Développement de deux versions localisées pour différents marchés (Tunisie et MEA)\n• Implémentation de la présentation d\'événement avec branding localisé\n• Construction du système d\'inscription et d\'authentification utilisateur\n• Création d\'un design responsive pour tous les appareils\n• Développement du tableau de bord administrateur pour la gestion de contenu\n• Projet terminé à temps avec un focus sur la performance et la scalabilité\n• Déploiement utilisant Docker et Swarm pour la conteneurisation',
    technologies: 'React.js, Tailwind CSS, Node.js (NestJS), MongoDB, Docker, Swarm',
    liveUrl: 'https://odc-platform-green.vercel.app',
    liveUrl2: 'https://osc25.gos.orange.com',
  },
  project3: {
    title: 'Site Vitrine et Dashboard Administratif - Union des Français à l\'Étranger',
    shortDescription: 'Site vitrine et tableau de bord administratif pour l\'Union des Français à l\'Étranger (UFE), avec un site web public et un panneau d\'administration complet pour la gestion de contenu.',
    description: 'J\'ai développé une solution numérique complète pour l\'Union des Français à l\'Étranger (UFE), composée d\'un site vitrine moderne et d\'un tableau de bord administratif complet. La plateforme sert la communauté française à l\'étranger avec une interface publique intuitive et des outils de gestion backend puissants.\n\nLe site vitrine présente la mission, les activités et les ressources de l\'organisation dans un format accessible et engageant. Le tableau de bord administratif permet aux utilisateurs autorisés de gérer le contenu, les données utilisateurs et les paramètres de la plateforme efficacement.\n\nContributions Clés:\n• Conception et développement d\'un site vitrine responsive\n• Construction d\'un tableau de bord administratif sécurisé avec accès basé sur les rôles\n• Création d\'une API commune pour les applications UFE (web et mobile)\n• Implémentation de systèmes d\'authentification et d\'autorisation utilisateur\n• Développement de fonctionnalités de gestion de contenu pour des mises à jour faciles\n• Assurance de la compatibilité multiplateforme et du design responsive',
    technologies: 'React.js, Node.js, MongoDB, Tailwind CSS, JavaScript, Express.js',
    liveUrl: '',
  },
  project4: {
    title: 'Cyber Oasis V1 – Hack the Dunes',
    shortDescription: 'Site web complet de présentation d\'événement pour la première édition du Hackathon & Forum de Cybersécurité "Hack the Dunes", unissant étudiants et professionnels de Tunisie, Algérie et Libye.',
    description: 'Cyber Oasis V1 est un site web complet de présentation d\'événement développé pour la première édition du Hackathon & Forum de Cybersécurité "Hack the Dunes", une initiative unissant étudiants et professionnels de Tunisie, Algérie et Libye.\n\nLa plateforme a été conçue pour mettre en évidence la mission, la structure et les partenaires de l\'événement tout en simplifiant l\'engagement et l\'inscription des participants. Elle intègre plusieurs sections dynamiques, notamment un aperçu du programme, des logos de partenaires, un formulaire d\'inscription avec validation régionale, et des ressources téléchargeables telles que le kit de presse et la charte éthique.\n\nLe design met l\'accent sur la clarté, la crédibilité et l\'inclusivité, s\'alignant sur la portée professionnelle et internationale de l\'événement.\n\nContributions Clés:\n• Implémentation d\'un design entièrement responsive optimisé pour mobile et desktop\n• Construction d\'une navigation dynamique et d\'un compte à rebours jusqu\'à la date de l\'événement\n• Création de sections structurées pour le programme, le hackathon, les conférences et les partenaires\n• Intégration d\'un formulaire de contact et de liens de réseaux sociaux pour l\'engagement\n• Développement d\'une architecture SEO-friendly avec des assets optimisés pour les performances\n• Ajout du support de localisation pour la région du Maghreb (+216, +213, +218)\n• Gestion du design UI/UX, du développement frontend, de l\'intégration et du déploiement',
    technologies: 'Next.js, React, Tailwind CSS, EmailJS, JavaScript (ES6+), HTML5, CSS3',
    liveUrl: 'https://www.cyberoasisv1.com',
    eventType: 'Type d\'Événement',
    eventTypeValue: 'Hackathon & Forum',
    region: 'Région',
    regionValue: 'Maghreb',
    role: 'Rôle',
    roleValue: 'Développeur Full-Stack',
    status: 'Statut',
    statusValue: 'En Ligne',
    keyFeatures: 'Fonctionnalités Clés',
    feature1: 'Design entièrement responsive optimisé pour mobile et desktop',
    feature2: 'Navigation dynamique et compte à rebours jusqu\'à la date de l\'événement',
    feature3: 'Sections structurées pour le programme, hackathon, conférences et partenaires',
    feature4: 'Formulaire de contact intégré et liens de réseaux sociaux pour l\'engagement',
    feature5: 'Architecture SEO-friendly avec assets optimisés pour les performances',
    feature6: 'Support de localisation pour la région du Maghreb (+216, +213, +218)',
    technologiesTitle: 'Stack Technique & Outils',
    impact: 'Impact',
    impactDescription: 'Le site web a réussi à soutenir la visibilité et le processus d\'inscription d\'un événement de cybersécurité multi-pays. Il a amélioré la portée, simplifié l\'inscription des participants et présenté une identité numérique professionnelle pour l\'équipe organisatrice et ses partenaires.',
  },
  // Common project labels
  viewDetails: 'Voir les détails',
  backToProjects: 'Retour aux projets',
  keyContributions: 'Contributions Clés',
  orangeMEAVersion: 'Version Orange MEA',
  orangeTunisieVersion: 'Version Orange Tunisie',
};

// Arabic translations 
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
  footerText: 'مهندس برمجيات متكامل ذو خبرة تزيد عن 3 سنوات في تصميم وتنفيذ حلول ويب قوية وقابلة للتوسع ومبتكرة. بارع في الاستفادة من مجموعة شاملة من المهارات التي تشمل تقنيات الواجهة الأمامية والخلفية',
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
  // Project entries
  project1: {
    title: 'تكامل موقع تصميم داخلي (تكامل واجهة المستخدم)',
    shortDescription: 'تكامل واجهة المستخدم لموقع تصميم داخلي حديث ومتجاوب باستخدام Tailwind CSS و Framer Motion للرسوم المتحركة السلسة.',
    description: 'في هذا المشروع، كانت مسؤوليتي الرئيسية هي تكامل واجهة المستخدم لموقع تصميم داخلي حديث ومتجاوب. قمت بترجمة التصميم المقدم إلى كود نظيف وسهل الصيانة باستخدام Tailwind CSS للتنسيق و Framer Motion للرسوم المتحركة السلسة والجذابة.\n\nالمساهمات الرئيسية:\n• تنفيذ واجهة مستخدم مثالية بناءً على Figma\n• بناء تخطيطات متجاوبة باستخدام Tailwind CSS\n• دمج Framer Motion لتأثيرات الحركة والانتقال\n• ضمان التوافق مع المتصفحات المختلفة والاستجابة للجوال\n• تحسين البنية لتكامل الوظائف المستقبلية',
    technologies: 'Tailwind CSS, Framer Motion, React, TypeScript, Next.js',
    liveUrl: 'https://interior-designe-project.vercel.app',
  },
  project2: {
    title: 'موقع Orange Summer Challenge (موقع حدث)',
    shortDescription: 'الموقع الرسمي لـ Orange Summer Challenge 2025 مع نسختين مخصصتين لـ Orange Tunisie و Orange MEA، يتضمن عرض الحدث وتسجيل المستخدمين ولوحة تحكم إدارية.',
    description: 'قمت بتطوير وتسليم الموقع الرسمي لـ Orange Summer Challenge 2025 مع نسختين مخصصتين: osc25.orange.tn لـ Orange Tunisie و osc25.gos.orange.com لـ Orange MEA. تتضمن المنصة عرض الحدث مع هوية محلية، تسجيل المستخدمين وتسجيل الدخول، برنامج الحدث، تصميم متجاوب ولوحة تحكم إدارية.\n\nالمساهمات الرئيسية:\n• تطوير نسختين محليتين لأسواق مختلفة (تونس و MEA)\n• تنفيذ عرض الحدث مع هوية محلية\n• بناء نظام تسجيل المستخدمين والمصادقة\n• إنشاء تصميم متجاوب لجميع الأجهزة\n• تطوير لوحة تحكم إدارية لإدارة المحتوى\n• إكمال المشروع في الوقت المحدد مع التركيز على الأداء والقابلية للتوسع\n• النشر باستخدام Docker و Swarm للحاويات',
    technologies: 'React.js, Tailwind CSS, Node.js (NestJS), MongoDB, Docker, Swarm',
    liveUrl: 'https://odc-platform-green.vercel.app',
    liveUrl2: 'https://osc25.gos.orange.com',
  },
  project3: {
    title: 'موقع عرض ولوحة تحكم إدارية - اتحاد الفرنسيين في الخارج',
    shortDescription: 'موقع عرض ولوحة تحكم إدارية لاتحاد الفرنسيين في الخارج (UFE)، مع موقع ويب للجمهور ولوحة إدارة شاملة لإدارة المحتوى.',
    description: 'قمت بتطوير حل رقمي كامل لاتحاد الفرنسيين في الخارج (UFE)، يتكون من موقع عرض حديث ولوحة تحكم إدارية شاملة. تخدم المنصة المجتمع الفرنسي في الخارج بواجهة عامة سهلة الاستخدام وأدوات إدارة قوية.\n\nيعرض موقع العرض مهمة المنظمة وأنشطتها ومواردها بتنسيق سهل الوصول وجذاب. تمكن لوحة التحكم الإدارية المستخدمين المصرح لهم من إدارة المحتوى وبيانات المستخدمين وإعدادات المنصة بكفاءة.\n\nالمساهمات الرئيسية:\n• تصميم وتطوير موقع عرض متجاوب\n• بناء لوحة تحكم إدارية آمنة مع وصول قائم على الأدوار\n• إنشاء واجهة برمجة تطبيقات مشتركة لتطبيقات UFE (ويب وموبايل)\n• تنفيذ أنظمة المصادقة والتفويض للمستخدمين\n• تطوير ميزات إدارة المحتوى لتحديثات سهلة\n• ضمان التوافق عبر المنصات والتصميم المتجاوب',
    technologies: 'React.js, Node.js, MongoDB, Tailwind CSS, JavaScript, Express.js',
    liveUrl: '',
  },
  project4: {
    title: 'Cyber Oasis V1 – Hack the Dunes',
    shortDescription: 'موقع ويب كامل لعرض حدث الإصدار الأول من هاكاثون ومنتدى الأمن السيبراني "Hack the Dunes"، الذي يوحد الطلاب والمهنيين من تونس والجزائر وليبيا.',
    description: 'Cyber Oasis V1 هو موقع ويب كامل لعرض حدث تم بناؤه للإصدار الأول من هاكاثون ومنتدى الأمن السيبراني "Hack the Dunes"، وهي مبادرة توحد الطلاب والمهنيين من تونس والجزائر وليبيا.\n\nتم تصميم المنصة لتسليط الضوء على مهمة الحدث وهيكله وشركائه مع تبسيط مشاركة المشاركين وتسجيلهم. وهي تدمج أقسامًا ديناميكية متعددة، بما في ذلك نظرة عامة على البرنامج، وشعارات الشركاء، ونموذج تسجيل مع التحقق الإقليمي، وموارد قابلة للتنزيل مثل حزمة الصحافة والميثاق الأخلاقي.\n\nيركز التصميم على الوضوح والمصداقية والشمولية، متوافقًا مع النطاق المهني والدولي للحدث.\n\nالمساهمات الرئيسية:\n• تنفيذ تصميم متجاوب بالكامل محسّن للجوال وسطح المكتب\n• بناء تنقل ديناميكي وعداد تنازلي حتى تاريخ الحدث\n• إنشاء أقسام منظمة للبرنامج والهاكاثون والمؤتمرات والشركاء\n• دمج نموذج اتصال وروابط وسائل التواصل الاجتماعي للمشاركة\n• تطوير بنية صديقة لمحركات البحث مع أصول محسّنة للأداء\n• إضافة دعم الترجمة لمنطقة المغرب العربي (+216, +213, +218)\n• إدارة تصميم واجهة المستخدم/تجربة المستخدم، وتطوير الواجهة الأمامية، والتكامل والنشر',
    technologies: 'Next.js, React, Tailwind CSS, EmailJS, JavaScript (ES6+), HTML5, CSS3',
    liveUrl: 'https://www.cyberoasisv1.com',
    eventType: 'نوع الحدث',
    eventTypeValue: 'هاكاثون ومنتدى',
    region: 'المنطقة',
    regionValue: 'المغرب العربي',
    role: 'الدور',
    roleValue: 'مطور متكامل',
    status: 'الحالة',
    statusValue: 'نشط',
    keyFeatures: 'الميزات الرئيسية',
    feature1: 'تصميم متجاوب بالكامل محسّن للجوال وسطح المكتب',
    feature2: 'تنقل ديناميكي وعداد تنازلي حتى تاريخ الحدث',
    feature3: 'أقسام منظمة للبرنامج والهاكاثون والمؤتمرات والشركاء',
    feature4: 'نموذج اتصال مدمج وروابط وسائل التواصل الاجتماعي للمشاركة',
    feature5: 'بنية صديقة لمحركات البحث مع أصول محسّنة للأداء',
    feature6: 'دعم الترجمة لمنطقة المغرب العربي (+216, +213, +218)',
    technologiesTitle: 'المجموعة التقنية والأدوات',
    impact: 'التأثير',
    impactDescription: 'نجح الموقع في دعم عملية الظهور والتسجيل لحدث أمن سيبراني متعدد البلدان. عزز النطاق، ويسر تسجيل المشاركين، وقدم هوية رقمية مهنية لفريق التنظيم وشركائه.',
  },
  // Common project labels
  viewDetails: 'عرض التفاصيل',
  backToProjects: 'العودة إلى المشاريع',
  keyContributions: 'المساهمات الرئيسية',
  orangeMEAVersion: 'نسخة Orange MEA',
  orangeTunisieVersion: 'نسخة Orange Tunisie',
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