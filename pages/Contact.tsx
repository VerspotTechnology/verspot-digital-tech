
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter">联系我们</h1>
            <p className="text-xl text-gray-500 font-light mb-12 max-w-lg">
              无论是商务合作、媒体采访还是人才交流，我们都欢迎你的来信。
            </p>

            <div className="space-y-10">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-600 font-bold mb-4">官方邮箱</h4>
                <p className="text-2xl font-medium text-white hover:text-blue-500 transition-colors">
                  <a href="mailto:verspot@163.com">verspot@163.com</a>
                </p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-600 font-bold mb-4">办公地址</h4>
                <p className="text-2xl font-medium text-white">河北省邯郸市</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-600 font-bold mb-4">官方微信</h4>
                <div className="inline-block px-4 py-2 border border-white/10 rounded-lg bg-white/5 text-sm text-gray-400">
                  扫码添加 (暂未开放)
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
                <p className="text-xs uppercase tracking-widest text-gray-500 font-black">Hebei Dianyuan Digital Tech</p>
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
            <h3 className="text-3xl font-bold mb-2">准备好开启新征程了吗？</h3>
            <p className="text-gray-600">加入河北点域，共同构建 Verspot 数字未来。</p>
          </div>
          <button onClick={() => window.location.hash = '#/careers'} className="px-12 py-5 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform active:scale-95 shadow-2xl">
            立即投递简历
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
