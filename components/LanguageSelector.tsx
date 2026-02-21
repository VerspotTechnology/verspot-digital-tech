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

  useEffect(() => {
    const hasSelectedLanguage = localStorage.getItem('language_selected');
    if (!hasSelectedLanguage) {
      setShowSelector(true);
    }
  }, []);

  const handleSelectLanguage = (langCode: Language) => {
    setLanguage(langCode);
    localStorage.setItem('language_selected', 'true');
    setShowSelector(false);
  };

  if (!showSelector) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <div className="relative w-full max-w-md mx-4 bg-gray-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="p-8 text-center border-b border-white/10">
          <div className="text-4xl mb-4">🌍</div>
          <h2 className="text-2xl font-bold text-white mb-2">选择您的语言</h2>
          <p className="text-gray-400 text-sm">Select your language / 选择您的语言</p>
        </div>
        
        <div className="p-4 max-h-[60vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelectLanguage(lang.code as Language)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  language === lang.code
                    ? 'bg-blue-600/30 border border-blue-500/50 text-white'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <span className="text-2xl">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="p-4 border-t border-white/10">
          <button
            onClick={() => handleSelectLanguage(language)}
            className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors"
          >
            确认 / Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
