import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'zh-CN' ? 'en-US' : 'zh-CN')}
      className="px-3 py-1 text-xs font-medium border border-white/20 rounded-full hover:bg-white/10 transition-all"
    >
      {language === 'zh-CN' ? 'EN' : '中文'}
    </button>
  );
};

export default LanguageSwitcher;