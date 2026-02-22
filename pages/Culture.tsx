import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Starfield from '../components/Starfield';
import GlowEffect from '../components/GlowEffect';

const Culture: React.FC = () => {
  const { t } = useLanguage();

  const glowColors = ['blue', 'purple', 'pink', 'cyan', 'orange', 'green'] as const;

  return (
    <div className="relative min-h-screen bg-black">
      <Starfield />
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-32">
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">{t.culture.title}</h1>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
            {t.culture.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <div className="relative bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 rounded-2xl backdrop-blur-sm border border-white/10 overflow-hidden group">
            <GlowEffect color="blue" intensity="medium" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">{t.culture.subtitle.split(' ')[0]}</h2>
              <h3 className="text-3xl font-bold mb-6 text-white">Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                {t.culture.mission}
              </p>
            </div>
          </div>
          <div className="relative bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-2xl backdrop-blur-sm border border-white/10 overflow-hidden group">
            <GlowEffect color="purple" intensity="medium" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">{t.culture.subtitle.split(' ')[1]}</h2>
              <h3 className="text-3xl font-bold mb-6 text-white">Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                {t.culture.vision}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-32">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">{t.culture.values.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.culture.values.items?.map((item, i) => (
              <div key={i} className="relative bg-gradient-to-br from-gray-900/50 to-blue-900/20 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all group overflow-hidden">
                <GlowEffect color={glowColors[i % glowColors.length]} intensity="subtle" />
                <div className="relative z-10">
                  <div className="text-4xl mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mb-32 bg-gradient-to-br from-gray-900/80 to-blue-900/20 p-12 rounded-3xl backdrop-blur-sm border border-white/10 overflow-hidden">
          <GlowEffect color="mixed" intensity="medium" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">{t.culture.weBelieve.title}</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {t.culture.weBelieve.items?.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">{i + 1}</span>
                  </div>
                  <p className="text-lg text-gray-400 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-32">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">{t.culture.culturalCode.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {t.culture.culturalCode.items?.map((item, i) => (
              <div key={i} className="relative bg-gradient-to-br from-purple-900/30 to-pink-900/20 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-gradient-to-br from-purple-900/40 to-pink-900/30 transition-all overflow-hidden group">
                <GlowEffect color={i % 2 === 0 ? 'purple' : 'pink'} intensity="subtle" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl">✨</div>
                    <h3 className="text-lg font-bold text-white">Code {i + 1}</h3>
                  </div>
                  <p className="text-gray-400">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-gray-900/80 to-blue-900/30 p-12 md:p-24 rounded-3xl backdrop-blur-sm border border-white/10 overflow-hidden">
          <GlowEffect color="cyan" intensity="medium" />
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white">{t.culture.atmosphere.title}</h2>
            <div className="space-y-8 text-lg text-gray-400 leading-relaxed italic">
              {t.culture.atmosphere.quotes?.map((quote, i) => (
                <p key={i} className="border-l-2 border-blue-500/50 pl-6">{quote}</p>
              ))}
            </div>
            <div className="mt-16 bg-white/5 rounded-2xl p-8 border border-white/10">
              <h4 className="text-sm uppercase tracking-[0.3em] font-black mb-4 text-blue-400">{t.culture.atmosphere.weHopeYouAre.title}</h4>
              <ul className="space-y-3 text-gray-400">
                {t.culture.atmosphere.weHopeYouAre.items?.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culture;
