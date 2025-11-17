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
  
  // Refs for smooth interpolation
  const mousePos = useRef<Position>({ x: 0, y: 0 });
  const cursorPos = useRef<Position>({ x: 0, y: 0 });
  const trailIdRef = useRef(0);
  const animationFrameId = useRef<number>();
  const lastTrailTime = useRef(0);

  // Smooth cursor movement with interpolation
  const updateCursorPosition = useCallback(() => {
    if (!cursorRef.current) return;

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

    animationFrameId.current = requestAnimationFrame(updateCursorPosition);
  }, []);

  // Handle mouse movement
  const handleMouseMove = useCallback((e: MouseEvent) => {
    mousePos.current.x = e.clientX;
    mousePos.current.y = e.clientY;
  }, []);

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

  const handleMouseEnter = useCallback(() => setIsVisible(true), []);
  const handleMouseLeave = useCallback(() => setIsVisible(false), []);

  useEffect(() => {
    // Initialize cursor position
    cursorPos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    mousePos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    // Start animation loop
    animationFrameId.current = requestAnimationFrame(updateCursorPosition);

    // Add event listeners with passive option for better performance
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mousedown', handleMouseDown, { passive: true });
    document.addEventListener('mouseup', handleMouseUp, { passive: true });

    return () => {
      // Cleanup
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [updateCursorPosition, handleMouseMove, handleMouseOver, handleMouseDown, handleMouseUp, handleMouseEnter, handleMouseLeave]);

  // Cleanup old trails periodically
  useEffect(() => {
    const cleanup = setInterval(() => {
      const now = Date.now();
      setTrails(prevTrails => 
        prevTrails.filter(trail => now - trail.timestamp < 600)
      );
    }, 100);
    
    return () => clearInterval(cleanup);
  }, []);

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
