import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Starfield from '../components/Starfield';
import GlowEffect from '../components/GlowEffect';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-black">
      <Starfield />
      <div className="max-w-7xl mx-auto px-6 py-32">
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
              <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
                <GlowEffect color="blue" intensity="subtle" />
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-white mb-2">2025</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">{t.about.founded}</div>
                </div>
              </div>
              <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
                <GlowEffect color="purple" intensity="subtle" />
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-white mb-2">100%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">{t.about.innovation}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="relative group">
              <div className="relative rounded-3xl border border-white/10 p-12 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat overflow-hidden rounded-3xl" style={{backgroundImage: 'url(/assets/company-philosophy-bg.png)'}}></div>
                <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
                <GlowEffect color="mixed" intensity="medium" />
                
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
                </div>
                
                <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                  </span>
                  <span className="text-xs text-cyan-400 font-medium">{t.common.videoDeveloping}</span>
                </div>
                
                <div className="relative z-10">
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
        </div>

        <div className="mt-40 border-t border-white/5 pt-32">
          <div className="flex flex-wrap justify-between gap-12 select-none">
            <span className="relative text-4xl md:text-7xl font-black tracking-tighter cursor-default group">
              <span className="absolute inset-0 blur-xl bg-blue-500/30 group-hover:bg-blue-500/50 transition-colors"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 group-hover:from-blue-300 group-hover:to-blue-500 transition-all">TECHNOLOGY</span>
            </span>
            <span className="relative text-4xl md:text-7xl font-black tracking-tighter cursor-default group">
              <span className="absolute inset-0 blur-xl bg-purple-500/30 group-hover:bg-purple-500/50 transition-colors"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 group-hover:from-purple-300 group-hover:to-purple-500 transition-all">ENTERTAINMENT</span>
            </span>
            <span className="relative text-4xl md:text-7xl font-black tracking-tighter cursor-default group">
              <span className="absolute inset-0 blur-xl bg-pink-500/30 group-hover:bg-pink-500/50 transition-colors"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600 group-hover:from-pink-300 group-hover:to-pink-500 transition-all">COMMUNITY</span>
            </span>
            <span className="relative text-4xl md:text-7xl font-black tracking-tighter cursor-default group">
              <span className="absolute inset-0 blur-xl bg-cyan-500/30 group-hover:bg-cyan-500/50 transition-colors"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 group-hover:from-cyan-300 group-hover:to-cyan-500 transition-all">FUTURE</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
