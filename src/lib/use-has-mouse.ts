import { useState, useEffect } from 'react';

/**
 * Hook to detect if the device has a mouse/pointer device
 * Returns true if the device supports hover (has a mouse)
 * Returns false for touch-only devices
 */
export const useHasMouse = (): boolean => {
  const [hasMouse, setHasMouse] = useState<boolean>(false);

  useEffect(() => {
    // Check if device supports hover (indicates mouse/pointer presence)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    
    // Set initial value
    setHasMouse(mediaQuery.matches);

    // Create event handler
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setHasMouse(e.matches);
    };

    // Add listener (modern browsers)
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
    }

    // Cleanup
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        // Fallback for older browsers
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return hasMouse;
};

