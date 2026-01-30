import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../logo.png';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.culture, path: '/culture' },
    { name: t.nav.careers, path: '/careers' },
    { name: t.nav.contact, path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center group transition-transform hover:scale-105 active:scale-95">
          {/* Logo Image */}
          <img 
            src={logo} 
            alt="Verspot Logo" 
            className="h-10 w-auto object-contain"
            onError={(e) => {
              // Fallback if image isn't found yet
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </Link>
        
        <div className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-white ${
                location.pathname === link.path ? 'text-white' : 'text-gray-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/careers"
            className="px-6 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-gray-200 transition-all transform hover:scale-105 shadow-lg"
          >
            {t.nav.hiring}
          </Link>
          <LanguageSwitcher />
        </div>

        <div className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;