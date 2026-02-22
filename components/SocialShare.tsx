import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const SocialShare: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const url = `https://verspot.cn${location.pathname}`;

  const shareLinks = [
    {
      name: '微信',
      icon: '💬',
      action: () => {
        alert('请截图分享到微信');
      }
    },
    {
      name: '微博',
      icon: '📢',
      url: `https://service.weibo.com/share/share.php?url=${encodeURIComponent(url)}&title=Verspot%20-%20河北省点域数字科技有限责任公司`
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=Verspot%20-%20河北省点域数字科技有限责任公司`
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    },
    {
      name: '复制链接',
      icon: '🔗',
      action: () => {
        navigator.clipboard.writeText(url);
        alert('链接已复制到剪贴板');
      }
    }
  ];

  return (
    <div className="fixed bottom-24 right-8 z-50">
      {isOpen && (
        <div className="absolute bottom-14 right-0 bg-gray-900/95 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-2xl min-w-[160px] animate-fade-in">
          <div className="space-y-2">
            {shareLinks.map((link, i) => (
              <button
                key={i}
                onClick={() => {
                  if (link.action) {
                    link.action();
                  } else if (link.url) {
                    window.open(link.url, '_blank');
                  }
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-gray-300 hover:bg-white/5 rounded-lg transition-colors"
              >
                <span className="text-lg">{link.icon}</span>
                <span className="text-sm">{link.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white shadow-lg hover:bg-white/20 transition-all ${isOpen ? 'rotate-45' : ''}`}
        aria-label="Share"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      </button>
    </div>
  );
};

export default SocialShare;
