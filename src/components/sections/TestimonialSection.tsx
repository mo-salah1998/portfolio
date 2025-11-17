import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../lib/theme-context";

export const TestimonialSection = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const isRTL = i18n.language === 'ar';
  
  // Testimonials data from translations
  const testimonials = [
    {
      name: t('testimonial1.name'),
      role: t('testimonial1.role'),
      relation: t('testimonial1.relation'),
      text: t('testimonial1.text'),
    },
    {
      name: t('testimonial2.name'),
      role: t('testimonial2.role'),
      relation: t('testimonial2.relation'),
      text: t('testimonial2.text'),
    },
    {
      name: t('testimonial3.name'),
      role: t('testimonial3.role'),
      relation: t('testimonial3.relation'),
      text: t('testimonial3.text'),
    },
    {
      name: t('testimonial4.name'),
      role: t('testimonial4.role'),
      relation: t('testimonial4.relation'),
      text: t('testimonial4.text'),
    },
    {
      name: t('testimonial5.name'),
      role: t('testimonial5.role'),
      relation: t('testimonial5.relation'),
      text: t('testimonial5.text'),
    },
    {
      name: t('testimonial6.name'),
      role: t('testimonial6.role'),
      relation: t('testimonial6.relation'),
      text: t('testimonial6.text'),
    },
  ];

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="px-4 md:px-6 mt-4 w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className={`p-6 rounded-lg transition-all duration-300 hover:scale-105 ${
              theme === 'dark' 
                ? 'bg-[#252525] border border-gray-700 hover:border-[#a66cff]' 
                : 'bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#a66cff]'
            }`}
            style={{ direction: isRTL ? 'rtl' : 'ltr', unicodeBidi: 'embed' }}
          >
            {/* Quote Icon */}
            <div className="mb-4">
              <svg 
                className={`w-8 h-8 ${theme === 'dark' ? 'text-[#a66cff]' : 'text-[#a66cff]'} opacity-50`}
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Testimonial Text */}
            <p 
              className={`mb-4 text-sm leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              } ${isRTL ? 'text-right' : 'text-left'}`}
              style={{ direction: isRTL ? 'rtl' : 'ltr' }}
            >
              {testimonial.text}
            </p>

            {/* Gradient Divider */}
            <div className="w-12 h-1 mb-4 rounded-full bg-gradient-to-r from-[#a66cff] to-[#ff8660]"></div>

            {/* Author Info */}
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <h4 className={`font-bold text-base ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}>
                {testimonial.name}
              </h4>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {testimonial.role}
              </p>
              <p className={`text-xs mt-1 ${
                theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
              }`}>
                {testimonial.relation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

