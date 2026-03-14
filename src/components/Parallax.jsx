import React, { useEffect, useState, useRef } from 'react';

const Parallax = ({ children, speed = 0.5, className = "", style = {} }) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let animationFrameId;
    
    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        if (!ref.current) return;
        
        // Calculate element's position relative to viewport
        const rect = ref.current.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const elementCenter = rect.top + rect.height / 2;
        
        // Distance from the center of the screen
        const distanceFromCenter = elementCenter - viewportCenter;
        
        setOffset(distanceFromCenter * speed);
      });
    };

    // Passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Trigger once on mount
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} style={style}>
      <div 
        className="w-full h-full will-change-transform"
        style={{ 
          transform: `translateY(${offset}px)`, 
          // Small transition smooths out the JS frame-rate on high refresh displays
          transition: 'transform 0.5s linear' 
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Parallax;
