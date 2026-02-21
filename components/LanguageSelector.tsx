import React, { useState, useEffect } from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';

const languages = [
  { code: 'zh-CN', name: '简体中文', flag: '🇨🇳' },
  { code: 'zh-TW', name: '繁體中文', flag: '🇹🇼' },
  { code: 'en-US', name: 'English', flag: '🇺🇸' },
  { code: 'ru-RU', name: 'Русский', flag: '🇷🇺' },
  { code: 'fr-FR', name: 'Français', flag: '🇫🇷' },
  { code: 'es-ES', name: 'Español', flag: '🇪🇸' },
  { code: 'pt-PT', name: 'Português', flag: '🇵🇹' },
  { code: 'ar-SA', name: 'العربية', flag: '🇸🇦' },
  { code: 'ur-PK', name: 'اردو', flag: '🇵🇰' },
  { code: 'ko-KR', name: '한국어', flag: '🇰🇷' },
  { code: 'ja-JP', name: '日本語', flag: '🇯🇵' }
] as const;

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [showSelector, setShowSelector] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Language | null>(null);

  useEffect(() => {
    const hasSelectedLanguage = localStorage.getItem('language_selected');
    if (!hasSelectedLanguage) {
      setShowSelector(true);
      setTimeout(() => setIsVisible(true), 50);
    }
  }, []);

  const handleSelectLanguage = (langCode: Language) => {
    setSelectedLang(langCode);
    setLanguage(langCode);
  };

  const handleConfirm = () => {
    if (!selectedLang && language) {
      setSelectedLang(language);
    }
    setIsClosing(true);
    setTimeout(() => {
      localStorage.setItem('language_selected', 'true');
      setShowSelector(false);
    }, 500);
  };

  if (!showSelector) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-500 ease-out ${
        isClosing 
          ? 'bg-transparent backdrop-blur-none' 
          : isVisible 
            ? 'bg-black/90 backdrop-blur-sm' 
            : 'bg-transparent backdrop-blur-none'
      }`}
    >
      <div 
        className={`relative w-full max-w-md mx-4 bg-gray-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden transition-all duration-500 ease-out ${
          isClosing 
            ? 'opacity-0 scale-75 translate-y-8' 
            : isVisible 
              ? 'opacity-100 scale-100 translate-y-0' 
              : 'opacity-0 scale-90 translate-y-4'
        }`}
      >
        <div className={`p-8 text-center border-b border-white/10 transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}>
          <div className={`text-5xl mb-4 transition-all duration-500 delay-200 ${
            isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-180'
          }`}>🌍</div>
          <h2 className="text-2xl font-bold text-white mb-2">选择您的语言</h2>
          <p className="text-gray-400 text-sm">Select your language / 选择您的语言</p>
        </div>
        
        <div className={`p-4 max-h-[60vh] overflow-y-auto transition-all duration-500 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="grid grid-cols-2 gap-2">
            {languages.map((lang, index) => (
              <button
                key={lang.code}
                onClick={() => handleSelectLanguage(lang.code as Language)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 transform ${
                  selectedLang === lang.code
                    ? 'bg-blue-600/30 border border-blue-500/50 text-white scale-105 shadow-lg shadow-blue-500/20'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20 hover:scale-102'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 30}ms` : '0ms',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(10px)'
                }}
              >
                <span className="text-2xl transition-transform duration-300 hover:scale-110">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.name}</span>
                {selectedLang === lang.code && (
                  <svg className="w-4 h-4 ml-auto text-blue-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
        
        <div className={`p-4 border-t border-white/10 transition-all duration-500 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button
            onClick={handleConfirm}
            disabled={!selectedLang}
            className={`w-full py-3 font-bold rounded-xl transition-all duration-300 transform ${
              selectedLang 
                ? 'bg-white text-black hover:bg-gray-200 hover:scale-105 active:scale-95' 
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isClosing ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Loading...</span>
              </span>
            ) : (
              '确认 / Confirm'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
