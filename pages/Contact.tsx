
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Starfield from '../components/Starfield';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-black">
      {/* Starfield Background */}
      <Starfield />
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter">{t.contact.title}</h1>
            <p className="text-xl text-gray-500 font-light mb-12 max-w-lg">
              {t.contact.intro}
            </p>

            <div className="space-y-10">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-600 font-bold mb-4">{t.contact.labels.email}</h4>
                <p className="text-2xl font-medium text-white hover:text-blue-500 transition-colors">
                  <a href="mailto:official@verspot.cn">{t.contact.info.email}</a>
                </p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-600 font-bold mb-4">{t.contact.labels.location}</h4>
                <p className="text-2xl font-medium text-white">{t.contact.info.location}</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-600 font-bold mb-4">{t.contact.labels.wechat}</h4>
                <div className="p-4 border border-white/10 rounded-lg bg-white/5">
                  <img 
                    src="/assets/wechat-card.jpg" 
                    alt="企业微信名片" 
                    className="w-48 h-auto rounded-lg hover:scale-105 transition-transform cursor-pointer"
                    title="扫描二维码添加企业微信"
                  />
                  <p className="text-xs text-gray-500 mt-4 text-center">扫描二维码添加企业微信</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-glass rounded-3xl overflow-hidden relative border border-white/10 flex items-center justify-center group">
              {/* Symbolic Map Visual */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="0.1">
                  <path d="M0 10H100M0 20H100M0 30H100M0 40H100M0 50H100M0 60H100M0 70H100M0 80H100M0 90H100" />
                  <path d="M10 0V100M20 0V100M30 0V100M40 0V100M50 0V100M60 0V100M70 0V100M80 0V100M90 0V100" />
                </svg>
              </div>
              <div className="text-center z-10">
                <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center font-bold mb-6 mx-auto animate-pulse">
                  V
                </div>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-black">Verspot Technology (China) Co., Ltd.</p>
                <p className="text-gray-400 mt-2">Connecting from the heart of Handan</p>
              </div>
              {/* Decoration lines */}
              <div className="absolute top-10 right-10 w-20 h-[1px] bg-white/20 -rotate-45"></div>
              <div className="absolute bottom-10 left-10 w-20 h-[1px] bg-white/20 -rotate-45"></div>
            </div>
          </div>
        </div>

        <div className="mt-32 p-12 bg-white text-black rounded-3xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-3xl font-bold mb-2">{t.contact.cta.title}</h3>
            <p className="text-gray-600">{t.contact.cta.subtitle}</p>
          </div>
          <button onClick={() => window.location.hash = '#/careers'} className="px-12 py-5 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform active:scale-95 shadow-2xl">
            {t.contact.cta.button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
