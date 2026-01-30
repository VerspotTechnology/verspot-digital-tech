
import React from 'react';

const Culture: React.FC = () => {
  return (
    <div className="pt-40 pb-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">企业文化</h1>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
            我们致力于创造一个让创意自由流动的空间，一个技术人能在这里找到归属感的家园。
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-32">
          {[
            { title: "尊重创意", desc: "每一个伟大的产品都始于一个大胆的念头。" },
            { title: "反内耗", desc: "用代码和逻辑解决问题，而非办公室政治。" },
            { title: "扁平沟通", desc: "你随时可以和任何人探讨你的最新发现。" },
            { title: "拒绝形式主义", desc: "我们更在乎产出的价值，而非考勤的时间。" }
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
            <h2 className="text-3xl md:text-5xl font-bold mb-12">关于工作氛围</h2>
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed italic">
              <p>“我们不追求无意义的加班，我们尊重每一位成员的时间与专业判断。”</p>
              <p>“点域没有‘打工人’，只有共同构建 Verspot 宇宙的‘造物者’。”</p>
            </div>
            <div className="mt-16 border-l-4 border-black pl-8 py-2">
              <h4 className="text-sm uppercase tracking-[0.3em] font-black mb-2">We Hope You Are</h4>
              <ul className="space-y-2 text-gray-600">
                <li>对技术 / 游戏 / 内容有源于心底的兴趣</li>
                <li>具备长期主义思维，不急于求成</li>
                <li>能够独立思考，敢于挑战常规</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culture;
