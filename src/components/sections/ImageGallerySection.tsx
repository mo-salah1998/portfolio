import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../lib/theme-context";
import { X } from "lucide-react";

export const ImageGallerySection = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const isRTL = i18n.language === 'ar';
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Placeholder images - replace with real images later
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      alt: 'Gallery Image 1',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      alt: 'Gallery Image 2',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop',
      alt: 'Gallery Image 3',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      alt: 'Gallery Image 4',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      alt: 'Gallery Image 5',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      alt: 'Gallery Image 6',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
      alt: 'Gallery Image 7',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=600&fit=crop',
      alt: 'Gallery Image 8',
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?w=800&h=600&fit=crop',
      alt: 'Gallery Image 9',
    },
  ];

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="px-4 md:px-6 mt-4 w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="relative group cursor-pointer overflow-hidden rounded-lg"
            onClick={() => handleImageClick(image.src)}
          >
            <div
              className={`w-full h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-110 ${
                theme === 'dark' 
                  ? 'border border-gray-700' 
                  : 'border border-gray-200 shadow-sm'
              }`}
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`px-4 py-2 rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-white bg-opacity-20 backdrop-blur-sm' 
                      : 'bg-black bg-opacity-20 backdrop-blur-sm'
                  }`}>
                    <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
                      {t('viewImage') || 'View Image'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

