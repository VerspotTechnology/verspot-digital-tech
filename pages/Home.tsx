import React from 'react';
import { Link } from 'react-router-dom';
import heroLogo from '../hero-logo.png';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-black to-black z-0"></div>
        
        {/* Ambient Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          {/* Hero Image Logo */}
          <div className="mb-6 flex justify-center animate-fade-in">
             <img 
               src={heroLogo} 
               alt="Verspot Hero Logo" 
               className="h-32 md:h-64 w-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]"
             />
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight leading-tight">
            {t.home.hero.title}
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-400 font-light tracking-[0.3em] mb-12 uppercase">
            {t.home.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/careers" className="px-12 py-5 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all transform hover:scale-105 active:scale-95 shadow-2xl">
              {t.home.hero.viewPositions}
            </Link>
            <Link to="/about" className="px-12 py-5 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all">
              {t.home.hero.learnMore}
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-gray-500 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Business Overview */}
      <section className="py-32 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">
                {t.home.business.title} <br /> <span className="text-gray-500">{t.home.business.subtitle}</span>
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed mb-12 max-w-lg font-light">
                {t.home.business.description}
              </p>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors">
                    <span className="text-white text-sm font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-semibold mb-1">{t.home.business.item1.title}</h4>
                    <p className="text-sm text-gray-500">{t.home.business.item1.description}</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors">
                    <span className="text-white text-sm font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-semibold mb-1">{t.home.business.item2.title}</h4>
                    <p className="text-sm text-gray-500">{t.home.business.item2.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              <div className="aspect-square bg-white/[0.02] rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[2.5rem] border border-white/10 p-2 sm:p-3 md:p-4 lg:p-6 flex flex-col justify-end group hover:bg-white/[0.05] transition-all relative overflow-hidden">
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity">
                  <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=community%20gaming%20space%20digital%20universe%20futuristic&image_size=square')"}}></div>
                </div>
                {/* Text Content */}
                <div className="relative z-10">
                  <div className="text-[clamp(0.6rem,2vw,2rem)] font-black mb-1 sm:mb-2 metallic-text">COMMUNITY</div>
                  <div className="text-xs text-gray-500 uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] font-bold">{t.home.business.community}</div>
                </div>
              </div>
              <div className="aspect-[3/4] bg-gradient-to-tr from-blue-900/20 to-transparent rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[2.5rem] border border-white/10 p-2 sm:p-3 md:p-4 lg:p-6 flex flex-col justify-end sm:mt-8 md:mt-12 lg:mt-16 group hover:from-blue-800/30 transition-all relative overflow-hidden">
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity">
                  <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=future%20technology%20digital%20innovation%20futuristic&image_size=portrait_4_3')"}}></div>
                </div>
                {/* Text Content */}
                <div className="relative z-10">
                  <div className="text-[clamp(0.6rem,2vw,2rem)] font-black mb-1 sm:mb-2 metallic-text">FUTURE</div>
                  <div className="text-xs text-gray-500 uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] font-bold">{t.home.business.future}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Summary */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-7xl font-black mb-20 tracking-tighter uppercase">
            {t.home.culture.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="p-10 border border-black/10 rounded-3xl hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-bold mb-6">{t.home.culture.item1.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{t.home.culture.item1.description}</p>
            </div>
            <div className="p-10 border border-black/10 rounded-3xl hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-bold mb-6">{t.home.culture.item2.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{t.home.culture.item2.description}</p>
            </div>
            <div className="p-10 border border-black/10 rounded-3xl hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-bold mb-6">{t.home.culture.item3.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{t.home.culture.item3.description}</p>
            </div>
          </div>
          <div className="mt-20">
            <Link to="/culture" className="inline-flex items-center gap-3 group text-xl font-black border-b-2 border-black pb-2 transition-all hover:gap-6">
              {t.home.culture.explore}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;