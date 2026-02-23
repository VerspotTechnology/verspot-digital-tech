import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../logo.png';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.culture, path: '/culture' },
    { name: t.nav.careers, path: '/careers' },
    { name: t.nav.contact, path: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  return (
    <nav 
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black/90 backdrop-blur-md py-4 shadow-2xl"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center w-full">
        <Link 
          to="/" 
          className="flex items-center group transition-transform hover:scale-105 active:scale-95" 
          onClick={closeMobileMenu}
          aria-label="Go to homepage"
        >
          <img 
            src={logo} 
            alt="Verspot Logo" 
            className="h-10 w-auto object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </Link>
        
        <div className="hidden md:flex space-x-10 items-center" role="menubar">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              role="menuitem"
              aria-current={location.pathname === link.path ? 'page' : undefined}
              className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-white ${
                location.pathname === link.path ? 'text-white' : 'text-gray-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/careers"
            role="menuitem"
            className="px-6 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-gray-200 transition-all transform hover:scale-105 shadow-lg"
          >
            {t.nav.hiring}
          </Link>
          <LanguageSwitcher />
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <LanguageSwitcher />
          <button 
            onClick={toggleMobileMenu}
            className="text-white p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-t border-white/10 py-6 px-6 shadow-2xl animate-fade-in"
            role="menu"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  role="menuitem"
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-white ${
                    location.pathname === link.path ? 'text-white' : 'text-gray-400'
                  }`}
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/careers"
                role="menuitem"
                className="px-6 py-3 bg-white text-black text-xs font-bold rounded-full hover:bg-gray-200 transition-all text-center"
                onClick={closeMobileMenu}
              >
                {t.nav.hiring}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
