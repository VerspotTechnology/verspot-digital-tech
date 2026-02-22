import React, { useState, useEffect } from 'react';

const ReadingProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / docHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ReadingProgress;
