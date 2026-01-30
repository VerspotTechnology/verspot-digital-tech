
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-12 tracking-tight">
              {t.about.title} <br />
              <span className="text-gray-500">{t.about.subtitle}</span>
            </h1>
            <div className="space-y-8 text-lg text-gray-400 leading-relaxed font-light">
              <p>
                {t.about.intro1}
              </p>
              <p>
                {t.about.intro2}
              </p>
            </div>

            <div className="mt-20 grid grid-cols-2 gap-10">
              <div>
                <div className="text-4xl font-bold text-white mb-2">2025</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">{t.about.founded}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">{t.about.innovation}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-black rounded-3xl border border-white/10 p-12 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <svg className="w-32 h-32" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-8 text-white uppercase tracking-tighter">{t.about.philosophy}</h3>
                <ul className="space-y-6">
                  <li className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-300">{t.about.philosophy1}</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-300">{t.about.philosophy2}</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-300">{t.about.philosophy3}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Big Keywords Section */}
        <div className="mt-40 border-t border-white/5 pt-32">
          <div className="flex flex-wrap justify-between gap-12 opacity-30 select-none grayscale hover:grayscale-0 transition-all">
            <span className="text-4xl md:text-7xl font-black tracking-tighter hover:text-white transition-colors cursor-default">TECHNOLOGY</span>
            <span className="text-4xl md:text-7xl font-black tracking-tighter hover:text-white transition-colors cursor-default">ENTERTAINMENT</span>
            <span className="text-4xl md:text-7xl font-black tracking-tighter hover:text-white transition-colors cursor-default">COMMUNITY</span>
            <span className="text-4xl md:text-7xl font-black tracking-tighter hover:text-white transition-colors cursor-default">FUTURE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
