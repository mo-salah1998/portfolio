import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../lib/theme-context";
import { ScrollReveal } from "../ui/scroll-reveal";

export const TestimonialCarouselSection = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const isRTL = i18n.language === 'ar';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  
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

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('next');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => {
        setIsAnimating(false);
        setDirection(null);
      }, 50);
    }, 200);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('prev');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => {
        setIsAnimating(false);
        setDirection(null);
      }, 50);
    }, 200);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setDirection(index > currentIndex ? 'next' : 'prev');
    setTimeout(() => {
      setCurrentIndex(index);
      setTimeout(() => {
        setIsAnimating(false);
        setDirection(null);
      }, 50);
    }, 200);
  };

  // Progress bar animation
  useEffect(() => {
    if (isPaused || isAnimating) return;
    
    setProgress(0);
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 2; // Increment by 2% every 100ms (5000ms total = 100%)
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [currentIndex, isPaused, isAnimating]);

  // Auto-play functionality with pause on hover
  useEffect(() => {
    if (isPaused || isAnimating) return;
    
    const interval = setInterval(() => {
      if (!isPaused && !isAnimating) {
        nextSlide();
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, isAnimating]);

  return (
    <ScrollReveal
      dir={isRTL ? 'rtl' : 'ltr'}
      className="px-4 md:px-6 mt-4 w-full max-w-5xl mx-auto"
      amount={0.15}
      delay={0.1}
    >
      {/* Carousel Container */}
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Testimonial Card */}
        <div className="overflow-hidden h-[500px] md:h-[450px] relative">
          <div 
            className={`p-8 md:p-12 rounded-xl h-full flex flex-col justify-between transition-all duration-700 ease-in-out transform ${
              isAnimating 
                ? direction === 'next' 
                  ? 'translate-x-full opacity-0 scale-95' 
                  : 'translate-x-[-100%] opacity-0 scale-95'
                : 'translate-x-0 opacity-100 scale-100'
            } ${
              theme === 'dark' 
                ? 'bg-[#252525] border-2 border-gray-700 shadow-2xl' 
                : 'bg-white border-2 border-gray-200 shadow-xl'
            }`}
            style={{ direction: isRTL ? 'rtl' : 'ltr', unicodeBidi: 'embed' }}
          >
            {/* Top Section */}
            <div className="flex-1">
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <svg 
                  className={`w-12 h-12 ${theme === 'dark' ? 'text-[#a66cff]' : 'text-[#a66cff]'} opacity-50`}
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Testimonial Text */}
              <div className="flex-1 flex items-center justify-center">
                <p 
                  className={`text-base md:text-lg leading-relaxed text-center max-h-[280px] md:max-h-[240px] overflow-y-auto ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  } ${isRTL ? 'text-right' : 'text-left'} md:text-center`}
                  style={{ direction: isRTL ? 'rtl' : 'ltr' }}
                >
                  "{testimonials[currentIndex].text}"
                </p>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex-shrink-0">
              {/* Gradient Divider */}
              <div className="w-20 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#a66cff] to-[#ff8660]"></div>

              {/* Author Info */}
              <div className={`text-center ${isRTL ? 'text-right md:text-center' : 'text-left md:text-center'}`}>
                <h4 className={`font-bold text-xl mb-1 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}>
                  {testimonials[currentIndex].name}
                </h4>
                <p className={`text-sm mb-2 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {testimonials[currentIndex].role}
                </p>
                <p className={`text-xs ${
                  theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                }`}>
                  {testimonials[currentIndex].relation}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className={`absolute top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95 ${
            isRTL ? 'right-0 md:-right-16' : 'left-0 md:-left-16'
          } ${
            isAnimating ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
          } ${
            theme === 'dark'
              ? 'bg-[#252525] border border-gray-700 text-white hover:bg-gradient-to-r hover:from-[#a66cff] hover:to-[#ff8660] hover:border-transparent'
              : 'bg-white border border-gray-300 text-gray-800 hover:bg-gradient-to-r hover:from-[#a66cff] hover:to-[#ff8660] hover:text-white hover:border-transparent shadow-md'
          }`}
          aria-label="Previous testimonial"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isRTL ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            )}
          </svg>
        </button>

        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className={`absolute top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95 ${
            isRTL ? 'left-0 md:-left-16' : 'right-0 md:-right-16'
          } ${
            isAnimating ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
          } ${
            theme === 'dark'
              ? 'bg-[#252525] border border-gray-700 text-white hover:bg-gradient-to-r hover:from-[#a66cff] hover:to-[#ff8660] hover:border-transparent'
              : 'bg-white border border-gray-300 text-gray-800 hover:bg-gradient-to-r hover:from-[#a66cff] hover:to-[#ff8660] hover:text-white hover:border-transparent shadow-md'
          }`}
          aria-label="Next testimonial"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isRTL ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            )}
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className={`relative rounded-full transition-all duration-500 ease-out transform hover:scale-125 active:scale-95 ${
              currentIndex === index
                ? 'w-10 h-3 bg-gradient-to-r from-[#a66cff] to-[#ff8660] shadow-lg'
                : `w-3 h-3 ${
                    theme === 'dark'
                      ? 'bg-gray-600 hover:bg-gray-500 hover:shadow-md'
                      : 'bg-gray-300 hover:bg-gray-400 hover:shadow-md'
                  }`
            } ${
              isAnimating ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          >
            {currentIndex === index && (
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#a66cff] to-[#ff8660] animate-pulse opacity-30"></div>
            )}
          </button>
        ))}
      </div>
    </ScrollReveal>
  );
};

