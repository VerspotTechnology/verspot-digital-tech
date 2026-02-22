import React from 'react';

const RSSFeed: React.FC = () => {
  return (
    <a
      href="/rss.xml"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all"
      aria-label="RSS Feed"
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z" />
      </svg>
      <span className="text-xs">RSS</span>
    </a>
  );
};

export default RSSFeed;
