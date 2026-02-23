import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { t } = useLanguage();

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
    <div className="fixed bottom-0 left-0 right-0 z-[90] p-3 sm:p-4 animate-fade-in overflow-x-hidden">
      <div className="max-w-md sm:max-w-4xl mx-auto bg-gray-900/95 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl">
        <div className="flex flex-col gap-4 sm:gap-4">
          <div className="flex items-start gap-3 sm:gap-4">
            <span className="text-2xl sm:text-3xl flex-shrink-0">🍪</span>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">{t.common.cookie.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed break-words">
                {t.common.cookie.description}
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full">
            <button
              onClick={declineCookies}
              className="flex-1 px-4 py-2 text-xs sm:text-sm text-gray-400 border border-white/10 rounded-full hover:bg-white/5 transition-colors whitespace-nowrap"
            >
              {t.common.cookie.decline}
            </button>
            <button
              onClick={acceptCookies}
              className="flex-1 px-4 py-2 text-xs sm:text-sm bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap"
            >
              {t.common.cookie.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
