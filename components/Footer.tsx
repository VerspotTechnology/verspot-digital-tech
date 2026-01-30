import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <img 
                src={logo} 
                alt="Verspot Logo" 
                className="h-12 w-auto object-contain brightness-90 grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
              河北省点域数字科技责任有限公司，致力于构建面向未来的多元化数字娱乐空间。
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">导航</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/about" className="hover:text-white transition-colors">关于我们</Link></li>
              <li><Link to="/culture" className="hover:text-white transition-colors">企业文化</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">加入我们</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">联系</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>verspot@163.com</li>
              <li>河北省邯郸市</li>
              <li>冀ICP备20240001号-1</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 border-t border-white/5 pt-10">
          <p>© 2025 河北省点域数字科技责任有限公司. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">法律声明</a>
            <a href="#" className="hover:text-white">隐私政策</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;