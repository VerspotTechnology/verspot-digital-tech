import React, { useState, useEffect } from 'react';

const VisitorCounter: React.FC = () => {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem('visitor_count');
    let count = stored ? parseInt(stored, 10) : 0;
    count += 1;
    localStorage.setItem('visitor_count', count.toString());
    setVisitors(count + 1000);
  }, []);

  return (
    <div className="fixed bottom-8 left-8 z-40 flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
      <span className="text-green-400 text-xs">●</span>
      <span className="text-gray-400 text-xs">
        访问量: <span className="text-white font-medium">{visitors.toLocaleString()}</span>
      </span>
    </div>
  );
};

export default VisitorCounter;
