import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { enUS } from '../locales/en-US';
import { zhCN } from '../locales/zh-CN';
import { zhTW } from '../locales/zh-TW';
import { ruRU } from '../locales/ru-RU';
import { frFR } from '../locales/fr-FR';
import { esES } from '../locales/es-ES';
import { ptPT } from '../locales/pt-PT';
import { arSA } from '../locales/ar-SA';
import { koKR } from '../locales/ko-KR';
import { jaJP } from '../locales/ja-JP';
import { urPK } from '../locales/ur-PK';

type Language = 'en-US' | 'zh-CN' | 'zh-TW' | 'ru-RU' | 'fr-FR' | 'es-ES' | 'pt-PT' | 'ar-SA' | 'ko-KR' | 'ja-JP' | 'ur-PK';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof enUS;
}

const translations: Record<Language, typeof enUS> = {
  'en-US': enUS,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  'ru-RU': ruRU,
  'fr-FR': frFR,
  'es-ES': esES,
  'pt-PT': ptPT,
  'ar-SA': arSA,
  'ko-KR': koKR,
  'ja-JP': jaJP,
  'ur-PK': urPK
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    if (saved && saved in translations) {
      return saved as Language;
    }
    const browserLang = navigator.language;
    if (browserLang.startsWith('zh')) {
      if (browserLang === 'zh-TW' || browserLang === 'zh-HK' || browserLang === 'zh-MO') {
        return 'zh-TW';
      }
      return 'zh-CN';
    }
    if (browserLang.startsWith('ru')) return 'ru-RU';
    if (browserLang.startsWith('fr')) return 'fr-FR';
    if (browserLang.startsWith('es')) return 'es-ES';
    if (browserLang.startsWith('pt')) return 'pt-PT';
    if (browserLang.startsWith('ar')) return 'ar-SA';
    if (browserLang.startsWith('ko')) return 'ko-KR';
    if (browserLang.startsWith('ja')) return 'ja-JP';
    if (browserLang.startsWith('ur')) return 'ur-PK';
    return 'en-US';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    if (language === 'ar-SA') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export type { Language };
export { translations };
