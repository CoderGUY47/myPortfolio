import React, { useEffect, useState, useRef } from 'react';

const Parallax = ({ children, speed = 0.5, className = "", style = {} }) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let animationFrameId;
    
    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        if (!ref.current) return;
        
        //finding where the box is hiding on the screen so i can follow it with my eyes
        const rect = ref.current.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const elementCenter = rect.top + rect.height / 2;
        
        //counting how far away the box is from the middle of my view
        const distanceFromCenter = elementCenter - viewportCenter;
        
        setOffset(distanceFromCenter * speed);
      });
    };

    //i listen very quietly so the computer doesn't get tired while scrolling
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    //i check once at the start to make sure everything is okay
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
          //a little bit of magic to make the movement look like silk and water
          transition: 'transform 0.5s linear' 
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Parallax;
