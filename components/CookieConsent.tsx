import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] p-4 animate-fade-in">
      <div className="max-w-4xl mx-auto bg-gray-900/95 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-3xl">🍪</span>
            <div>
              <h3 className="text-white font-semibold mb-1">Cookie 设置</h3>
              <p className="text-gray-400 text-sm">
                我们使用 Cookie 来改善您的浏览体验。继续使用本网站即表示您同意我们的 Cookie 政策。
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={declineCookies}
              className="px-6 py-2.5 text-sm text-gray-400 border border-white/10 rounded-full hover:bg-white/5 transition-colors"
            >
              拒绝
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-2.5 text-sm bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors"
            >
              接受
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
