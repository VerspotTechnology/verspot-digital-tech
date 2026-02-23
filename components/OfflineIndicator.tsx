import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const OfflineIndicator: React.FC = () => {
  const [isOffline, setIsOffline] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    setIsOffline(!navigator.onLine);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[90] animate-fade-in">
      <div className="flex items-center gap-3 px-6 py-3 bg-red-500/90 backdrop-blur-sm rounded-full shadow-lg">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <span className="text-white text-sm font-medium">{t.common.offline}</span>
      </div>
    </div>
  );
};

export default OfflineIndicator;
