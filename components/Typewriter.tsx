import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ 
  text, 
  speed = 100, 
  delay = 500,
  className = '' 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isPaused) {
        if (!isDeleting) {
          if (currentIndex < text.length) {
            setDisplayText(text.slice(0, currentIndex + 1));
            setCurrentIndex(currentIndex + 1);
          } else {
            setIsPaused(true);
            setTimeout(() => {
              setIsPaused(false);
              setIsDeleting(true);
            }, 2000);
          }
        } else {
          if (currentIndex > 0) {
            setDisplayText(text.slice(0, currentIndex - 1));
            setCurrentIndex(currentIndex - 1);
          } else {
            setIsDeleting(false);
            setIsPaused(true);
            setTimeout(() => {
              setIsPaused(false);
            }, delay);
          }
        }
      }
    }, isPaused ? 0 : speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, isPaused, text, speed, delay]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default Typewriter;
