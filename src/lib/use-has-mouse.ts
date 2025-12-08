import { useState, useEffect } from 'react';

/**
 * Hook to detect if the device has a mouse/pointer device
 * Returns true if the device supports hover (has a mouse)
 * Returns false for touch-only devices
 */
export const useHasMouse = (): boolean => {
  const [hasMouse, setHasMouse] = useState<boolean>(false);

  useEffect(() => {
    // More robust detection: check multiple conditions
    const checkHasMouse = () => {
      // Check if device has touch capability
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      // Check media queries for pointer and hover
      const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
      const hasHover = window.matchMedia('(hover: hover)').matches;
      
      // Check if it's a mobile device by user agent (as additional check)
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      
      // Device has mouse if:
      // 1. It has fine pointer AND hover capability
      // 2. AND it's not a mobile device (or if it is mobile, it must not have touch)
      // This prevents false positives on mobile devices that might report hover support
      const result = hasFinePointer && hasHover && (!isMobile || !hasTouch);
      
      return result;
    };

    // Set initial value
    setHasMouse(checkHasMouse());

    // Also listen to media query changes for dynamic updates
    const hoverQuery = window.matchMedia('(hover: hover)');
    const pointerQuery = window.matchMedia('(pointer: fine)');

    const handleChange = () => {
      setHasMouse(checkHasMouse());
    };

    // Add listeners
    if (hoverQuery.addEventListener) {
      hoverQuery.addEventListener('change', handleChange);
      pointerQuery.addEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      hoverQuery.addListener(handleChange);
      pointerQuery.addListener(handleChange);
    }

    // Cleanup
    return () => {
      if (hoverQuery.removeEventListener) {
        hoverQuery.removeEventListener('change', handleChange);
        pointerQuery.removeEventListener('change', handleChange);
      } else {
        // Fallback for older browsers
        hoverQuery.removeListener(handleChange);
        pointerQuery.removeListener(handleChange);
      }
    };
  }, []);

  return hasMouse;
};

