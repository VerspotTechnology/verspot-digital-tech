import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

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
              {t.home.business.description}
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">{t.footer.navigation}</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/about" className="hover:text-white transition-colors">{t.nav.about}</Link></li>
              <li><Link to="/culture" className="hover:text-white transition-colors">{t.nav.culture}</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">{t.nav.careers}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">{t.footer.contact}</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>{t.footer.email}</li>
              <li>{t.footer.location}</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 border-t border-white/5 pt-10">
          <p>{t.footer.copyright}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">{t.footer.legal}</a>
            <a href="#" className="hover:text-white">{t.footer.privacy}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;