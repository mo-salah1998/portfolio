import React, { useEffect, useRef, useState, useCallback } from 'react';

interface CursorTrail {
  x: number;
  y: number;
  id: number;
  timestamp: number;
}

interface Position {
  x: number;
  y: number;
}

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'click' | 'text'>('default');
  const [trails, setTrails] = useState<CursorTrail[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  // Refs for smooth interpolation
  const mousePos = useRef<Position>({ x: 0, y: 0 });
  const cursorPos = useRef<Position>({ x: 0, y: 0 });
  const trailIdRef = useRef(0);
  const animationFrameId = useRef<number>();
  const lastTrailTime = useRef(0);

  // Smooth cursor movement with interpolation
  const updateCursorPosition = useCallback(() => {
    if (!cursorRef.current || document.hidden) return;

    // Lerp (linear interpolation) for smooth movement
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const lerpFactor = 0.15; // Adjust for smoothness (0.1 = very smooth, 0.3 = more responsive)
    
    cursorPos.current.x = lerp(cursorPos.current.x, mousePos.current.x, lerpFactor);
    cursorPos.current.y = lerp(cursorPos.current.y, mousePos.current.y, lerpFactor);

    // Apply transform using translate3d for hardware acceleration
    cursorRef.current.style.transform = `translate3d(${cursorPos.current.x - 10}px, ${cursorPos.current.y - 10}px, 0)`;

    // Add trail effect with throttling
    const now = Date.now();
    if (now - lastTrailTime.current > 16) { // ~60fps trail generation
      setTrails(prevTrails => {
        const newTrail: CursorTrail = {
          x: cursorPos.current.x,
          y: cursorPos.current.y,
          id: trailIdRef.current++,
          timestamp: now
        };
        
        // Keep only recent trails and limit count
        const filteredTrails = prevTrails
          .filter(trail => now - trail.timestamp < 800) // Remove trails older than 800ms
          .slice(0, 5); // Keep max 5 trails
        
        return [newTrail, ...filteredTrails];
      });
      lastTrailTime.current = now;
    }

    // Continue animation only if page is visible
    if (!document.hidden) {
      animationFrameId.current = requestAnimationFrame(updateCursorPosition);
    }
  }, []);

  // Handle mouse movement
  const handleMouseMove = useCallback((e: MouseEvent) => {
    mousePos.current.x = e.clientX;
    mousePos.current.y = e.clientY;
    
    // Ensure cursor is visible and animation is running when mouse moves
    if (!isVisible) {
      setIsVisible(true);
    }
    
    if (!animationFrameId.current) {
      animationFrameId.current = requestAnimationFrame(updateCursorPosition);
    }
  }, [isVisible, updateCursorPosition]);

  // Optimized element detection with debouncing
  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    
    // Check if hovering over interactive elements
    if (
      target.tagName === 'A' ||
      target.tagName === 'BUTTON' ||
      target.getAttribute('role') === 'button' ||
      target.hasAttribute('onclick') ||
      target.closest('a') ||
      target.closest('button') ||
      target.closest('[role="button"]')
    ) {
      setCursorState('hover');
    }
    // Check if hovering over text input elements
    else if (
      target.tagName === 'INPUT' ||
      target.tagName === 'TEXTAREA' ||
      target.contentEditable === 'true'
    ) {
      setCursorState('text');
    }
    // Default state
    else {
      setCursorState('default');
    }
  }, []);

  const handleMouseDown = useCallback(() => setCursorState('click'), []);
  
  const handleMouseUp = useCallback(() => {
    // Quick state reset without expensive DOM queries
    const currentTarget = document.elementFromPoint(mousePos.current.x, mousePos.current.y) as HTMLElement;
    
    if (currentTarget && (
      currentTarget.tagName === 'A' ||
      currentTarget.tagName === 'BUTTON' ||
      currentTarget.getAttribute('role') === 'button' ||
      currentTarget.closest('a') ||
      currentTarget.closest('button')
    )) {
      setCursorState('hover');
    } else {
      setCursorState('default');
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
    // Restart animation if it was stopped
    if (!animationFrameId.current) {
      animationFrameId.current = requestAnimationFrame(updateCursorPosition);
    }
  }, [updateCursorPosition]);
  
  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
    // Don't stop animation completely, just hide cursor
    // This prevents issues when mouse re-enters
  }, []);

  // Handle page visibility changes (tab switching)
  const handleVisibilityChange = useCallback(() => {
    if (document.hidden) {
      // Page is hidden (tab switched away)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    } else {
      // Page is visible again (tab switched back)
      setIsVisible(true);
      setCursorState('default');
      
      // Restart animation loop
      if (!animationFrameId.current) {
        animationFrameId.current = requestAnimationFrame(updateCursorPosition);
      }
      
      // Reset cursor position to current mouse position
      const resetCursorPosition = (e: MouseEvent) => {
        mousePos.current.x = e.clientX;
        mousePos.current.y = e.clientY;
        cursorPos.current.x = e.clientX;
        cursorPos.current.y = e.clientY;
        
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
        }
        
        // Remove this temporary listener
        document.removeEventListener('mousemove', resetCursorPosition);
      };
      
      // Add temporary listener to reset position on first mouse move
      document.addEventListener('mousemove', resetCursorPosition, { once: true, passive: true });
    }
  }, [updateCursorPosition]);

  // Handle window focus/blur events as backup
  const handleWindowFocus = useCallback(() => {
    setIsVisible(true);
    if (!animationFrameId.current) {
      animationFrameId.current = requestAnimationFrame(updateCursorPosition);
    }
  }, [updateCursorPosition]);

  const handleWindowBlur = useCallback(() => {
    // Don't stop animation on blur, just hide cursor
    setIsVisible(false);
  }, []);

  // Handle mouse enter on document (more reliable than window events)
  const handleDocumentMouseEnter = useCallback(() => {
    setIsVisible(true);
    if (!animationFrameId.current) {
      animationFrameId.current = requestAnimationFrame(updateCursorPosition);
    }
  }, [updateCursorPosition]);

  // Handle mouse leave on document
  const handleDocumentMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  // Detect mobile/touch devices
  useEffect(() => {
    const checkMobile = () => {
      // Check for touch capability
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      // Check for mobile screen size (optional, as touch detection is more reliable)
      const isSmallScreen = window.innerWidth <= 768;
      // Check user agent for mobile devices
      const isMobileUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      return hasTouch || (isSmallScreen && isMobileUserAgent);
    };

    setIsMobile(checkMobile());

    // Also check on resize in case device orientation changes
    const handleResize = () => {
      setIsMobile(checkMobile());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Don't initialize cursor on mobile devices
    if (isMobile) return;

    // Initialize cursor position
    cursorPos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    mousePos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    // Ensure cursor is visible on mount
    setIsVisible(true);
    setCursorState('default');

    // Start animation loop
    animationFrameId.current = requestAnimationFrame(updateCursorPosition);

    // Add event listeners with passive option for better performance
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleDocumentMouseEnter, { passive: true });
    document.addEventListener('mouseleave', handleDocumentMouseLeave, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mousedown', handleMouseDown, { passive: true });
    document.addEventListener('mouseup', handleMouseUp, { passive: true });
    
    // Add body-level mouse events for better coverage
    document.body.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    document.body.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    
    // Add visibility change listeners
    document.addEventListener('visibilitychange', handleVisibilityChange, { passive: true });
    window.addEventListener('focus', handleWindowFocus, { passive: true });
    window.addEventListener('blur', handleWindowBlur, { passive: true });

    return () => {
      // Cleanup
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleDocumentMouseEnter);
      document.removeEventListener('mouseleave', handleDocumentMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleWindowFocus);
      window.removeEventListener('blur', handleWindowBlur);
    };
  }, [isMobile, updateCursorPosition, handleMouseMove, handleMouseOver, handleMouseDown, handleMouseUp, handleMouseEnter, handleMouseLeave, handleDocumentMouseEnter, handleDocumentMouseLeave, handleVisibilityChange, handleWindowFocus, handleWindowBlur]);

  // Cleanup old trails periodically and check cursor state
  useEffect(() => {
    const cleanup = setInterval(() => {
      const now = Date.now();
      setTrails(prevTrails => 
        prevTrails.filter(trail => now - trail.timestamp < 600)
      );
      
      // Failsafe: If mouse is over the document and cursor is not visible, make it visible
      if (!document.hidden && !isVisible) {
        const mouseOverDocument = document.querySelector(':hover');
        if (mouseOverDocument) {
          setIsVisible(true);
          if (!animationFrameId.current) {
            animationFrameId.current = requestAnimationFrame(updateCursorPosition);
          }
        }
      }
    }, 100);
    
    return () => clearInterval(cleanup);
  }, [isVisible, updateCursorPosition]);

  // Don't render cursor on mobile/touch devices
  if (isMobile) return null;

  if (!isVisible) return null;

  return (
    <>
      {/* Cursor trails with optimized rendering */}
      {trails.map((trail, index) => {
        const age = Date.now() - trail.timestamp;
        const opacity = Math.max(0, 1 - (age / 600)); // Fade out over 600ms
        const scale = Math.max(0.2, 1 - (index * 0.15));
        
        return (
          <div
            key={trail.id}
            className="cursor-trail"
            style={{
              transform: `translate3d(${trail.x - 3}px, ${trail.y - 3}px, 0) scale(${scale})`,
              opacity,
            }}
          />
        );
      })}
      
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={`custom-cursor ${cursorState}`}
        style={{
          opacity: isVisible ? 1 : 0,
          left: 0,
          top: 0,
        }}
      />
    </>
  );
};
