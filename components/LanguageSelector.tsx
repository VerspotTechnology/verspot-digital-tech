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

const getLocalizedText = (lang: Language) => {
  const texts: Record<Language, { title: string; subtitle: string; confirm: string }> = {
    'zh-CN': { title: '选择您的语言', subtitle: '选择您的语言', confirm: '确认' },
    'zh-TW': { title: '選擇您的語言', subtitle: '選擇您的語言', confirm: '確認' },
    'en-US': { title: 'Select Your Language', subtitle: 'Select your language', confirm: 'Confirm' },
    'ru-RU': { title: 'Выберите язык', subtitle: 'выберите язык', confirm: 'Подтвердить' },
    'fr-FR': { title: 'Choisissez votre langue', subtitle: 'Choisissez votre langue', confirm: 'Confirmer' },
    'es-ES': { title: 'Seleccione su idioma', subtitle: 'Seleccione su idioma', confirm: 'Confirmar' },
    'pt-PT': { title: 'Selecione seu idioma', subtitle: 'Selecione seu idioma', confirm: 'Confirmar' },
    'ar-SA': { title: 'اختر لغة', subtitle: 'اختر لغة', confirm: 'تأكيد' },
    'ur-PK': { title: 'اپنی زبان منتخب کریں', subtitle: 'اپنی زبان منتخب کریں', confirm: 'تصدیق کریں' },
    'ko-KR': { title: '언어 선택', subtitle: '언어를 선택하세요', confirm: '확인' },
    'ja-JP': { title: '言語を選択', subtitle: '言語を選択してください', confirm: '確認' }
  };
  return texts[lang] || { title: 'Select Your Language', subtitle: 'Select your language', confirm: 'Confirm' };
};

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [showSelector, setShowSelector] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Language | null>(language);

  const localizedText = getLocalizedText(language);

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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-3 sm:p-4">
      <div className="relative w-full max-w-sm sm:max-w-md bg-gray-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        <div className={`p-6 sm:p-8 text-center border-b border-white/10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌍</div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">{localizedText.title}</h2>
          <p className="text-gray-400 text-xs sm:text-sm">{localizedText.subtitle}</p>
        </div>
        
        <div className={`p-3 sm:p-4 max-h-[50vh] sm:max-h-[60vh] overflow-y-auto transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelectLanguage(lang.code as Language)}
                className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl transition-all ${
                  language === lang.code
                    ? 'bg-blue-600/30 border border-blue-500/50 text-white'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <span className="text-xl sm:text-2xl flex-shrink-0">{lang.flag}</span>
                <span className="text-xs sm:text-sm font-medium flex-1 text-left truncate">{lang.name}</span>
                {language === lang.code && (
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 text-blue-400 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 01-1.414 0l-4.243a8 8 0 1111.314 0z" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
        
        <div className={`p-3 sm:p-4 border-t border-white/10 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={handleConfirm}
            className={`w-full py-2.5 sm:py-3 text-sm sm:text-base font-bold rounded-xl transition-all ${
              selectedLang 
                ? 'bg-white text-black hover:bg-gray-200' 
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isClosing ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Loading...</span>
              </span>
            ) : (
              localizedText.confirm
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
