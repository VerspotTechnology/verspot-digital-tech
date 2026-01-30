import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
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
               src="hero-logo.png" 
               alt="Verspot Hero Logo" 
               className="h-32 md:h-64 w-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]"
             />
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight leading-tight">
            河北省点域数字科技责任有限公司
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-400 font-light tracking-[0.3em] mb-12 uppercase">
            构建多元数字娱乐空间 · 用技术连接娱乐与未来
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/careers" className="px-12 py-5 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all transform hover:scale-105 active:scale-95 shadow-2xl">
              查看招聘岗位
            </Link>
            <Link to="/about" className="px-12 py-5 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all">
              了解我们
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
                专注数字娱乐 <br /> <span className="text-gray-500">重塑互动体验</span>
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed mb-12 max-w-lg font-light">
                我们致力于探索新一代数字技术在娱乐领域的应用，从内容研发到社区构建，为全球玩家提供极致的沉浸感与连接。
              </p>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors">
                    <span className="text-white text-sm font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-semibold mb-1">数字娱乐内容研发</h4>
                    <p className="text-sm text-gray-500">打造具有持久生命力的精品内容库</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors">
                    <span className="text-white text-sm font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-semibold mb-1">游戏与互动体验开发</h4>
                    <p className="text-sm text-gray-500">基于前沿引擎的跨平台交互解决方案</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-square bg-white/[0.02] rounded-[2.5rem] border border-white/10 p-10 flex flex-col justify-end group hover:bg-white/[0.05] transition-all">
                <div className="text-3xl font-black mb-3 metallic-text">COMMUNITY</div>
                <div className="text-xs text-gray-500 uppercase tracking-[0.3em] font-bold">社区型娱乐探索</div>
              </div>
              <div className="aspect-[3/4] bg-gradient-to-tr from-blue-900/20 to-transparent rounded-[2.5rem] border border-white/10 p-10 flex flex-col justify-end mt-16 group hover:from-blue-800/30 transition-all">
                <div className="text-3xl font-black mb-3 metallic-text">FUTURE</div>
                <div className="text-xs text-gray-500 uppercase tracking-[0.3em] font-bold">新一代技术应用</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Summary */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-7xl font-black mb-20 tracking-tighter uppercase">
            开放 · 共创 · 尊重个体
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="p-10 border border-black/10 rounded-3xl hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-bold mb-6">崇尚技术与创造力</h3>
              <p className="text-gray-600 text-base leading-relaxed">在这里，好的创意永远优于冗长的会议。我们为每一位创作者提供最广阔的试验场。</p>
            </div>
            <div className="p-10 border border-black/10 rounded-3xl hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-bold mb-6">娱乐与专业并存</h3>
              <p className="text-gray-600 text-base leading-relaxed">工作即娱乐，我们在快乐中解决最棘手的技术难题，保持对世界的好奇心。</p>
            </div>
            <div className="p-10 border border-black/10 rounded-3xl hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-bold mb-6">扁平与高效</h3>
              <p className="text-gray-600 text-base leading-relaxed">拒绝形式主义，让沟通回归本质。每一份声音都能被听见，每一份贡献都能被看见。</p>
            </div>
          </div>
          <div className="mt-20">
            <Link to="/culture" className="inline-flex items-center gap-3 group text-xl font-black border-b-2 border-black pb-2 transition-all hover:gap-6">
              探索我们的文化
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