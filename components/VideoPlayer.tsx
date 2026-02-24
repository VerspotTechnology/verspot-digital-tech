import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const VideoPlayer: React.FC = () => {
  const { t } = useLanguage();
  const [showToast, setShowToast] = useState(false);

  const handlePlayButtonClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-video bg-black rounded-xl overflow-hidden border border-white/10 shadow-2xl">
      {/* Video Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🎬</div>
          <h3 className="text-xl font-bold text-white mb-2">Video Player</h3>
          <p className="text-gray-400">Coming Soon</p>
        </div>
      </div>

      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={handlePlayButtonClick}
          className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
          aria-label="Play video"
        >
          <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-12 border-l-white ml-1 group-hover:scale-110 transition-transform duration-300"></div>
        </button>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in">
          <div className="text-yellow-500">⏰</div>
          <span>视频正在正常制作中，敬请期待</span>
        </div>
      )}

      {/* Player Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="flex justify-between items-center">
          <div className="text-white text-sm">Video Title</div>
          <div className="flex gap-3">
            <button 
              className="text-white hover:text-blue-400 transition-colors"
              aria-label="Like"
            >
              👍
            </button>
            <button 
              className="text-white hover:text-blue-400 transition-colors"
              aria-label="Share"
            >
              🔗
            </button>
            <button 
              onClick={handlePlayButtonClick}
              className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
              aria-label="Add to watch later"
            >
              待播放
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;