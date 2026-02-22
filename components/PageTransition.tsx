import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    setIsVisible(false);
    
    const fadeOutTimer = setTimeout(() => {
      setDisplayChildren(children);
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(fadeOutTimer);
  }, [location.pathname]);

  return (
    <div 
      className={`transition-all duration-300 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4'
      }`}
    >
      {displayChildren}
    </div>
  );
};

export default PageTransition;
