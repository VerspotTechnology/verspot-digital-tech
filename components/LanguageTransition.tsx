import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language } = useLanguage();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const prevLanguageRef = useRef(language);

  useEffect(() => {
    if (prevLanguageRef.current !== language) {
      setIsTransitioning(true);
      
      const fadeOutTimer = setTimeout(() => {
        setDisplayChildren(children);
        setIsTransitioning(false);
      }, 200);

      prevLanguageRef.current = language;
      return () => clearTimeout(fadeOutTimer);
    } else {
      setDisplayChildren(children);
    }
  }, [language, children]);

  return (
    <div className={`transition-all duration-200 ease-out ${
      isTransitioning 
        ? 'opacity-0 translate-y-2' 
        : 'opacity-100 translate-y-0'
    }`}>
      {displayChildren}
    </div>
  );
};

export default LanguageTransition;
