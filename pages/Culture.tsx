
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Culture: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-40 pb-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">{t.culture.title}</h1>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
            {t.culture.intro}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-32">
          {[
            { title: t.culture.values.item1.title, desc: t.culture.values.item1.description },
            { title: t.culture.values.item2.title, desc: t.culture.values.item2.description },
            { title: t.culture.values.item3.title, desc: t.culture.values.item3.description }
          ].map((v, i) => (
            <div key={i} className="bg-glass p-8 rounded-2xl hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <span className="text-white text-xs">0{i+1}</span>
              </div>
              <h3 className="text-lg font-bold mb-4">{v.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Atmosphere */}
        <div className="bg-white text-black p-12 md:p-24 rounded-3xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-12">{t.culture.atmosphere.title}</h2>
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed italic">
              {t.culture.atmosphere.quotes.map((quote, i) => (
                <p key={i}>{quote}</p>
              ))}
            </div>
            <div className="mt-16 border-l-4 border-black pl-8 py-2">
              <h4 className="text-sm uppercase tracking-[0.3em] font-black mb-2">{t.culture.atmosphere.weHopeYouAre.title}</h4>
              <ul className="space-y-2 text-gray-600">
                {t.culture.atmosphere.weHopeYouAre.items.map((item, i) => (
                  <li key={i}>{item}</li>
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
