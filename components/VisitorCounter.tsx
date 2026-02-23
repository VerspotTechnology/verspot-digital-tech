import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const VisitorCounter: React.FC = () => {
  const [visitors, setVisitors] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const stored = localStorage.getItem('visitor_count');
    let count = stored ? parseInt(stored, 10) : 0;
    count += 1;
    localStorage.setItem('visitor_count', count.toString());
    setVisitors(count + 1000);
  }, []);

  return (
    <div className="fixed bottom-8 left-4 z-40 flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-full max-w-[80vw]">
      <span className="text-green-400 text-xs">●</span>
      <span className="text-gray-400 text-xs">
        {t.common.visitors}: <span className="text-white font-medium">{visitors.toLocaleString()}</span>
      </span>
    </div>
  );
};

export default VisitorCounter;
