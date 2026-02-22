import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const { t } = useLanguage();

  const pathMap: Record<string, string> = {
    '/': t.nav.home,
    '/about': t.nav.about,
    '/culture': t.nav.culture,
    '/careers': t.nav.careers,
    '/contact': t.nav.contact,
  };

  const pathnames = location.pathname.split('/').filter(x => x);

  if (pathnames.length === 0) return null;

  return (
    <nav className="fixed top-20 left-6 z-40" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link to="/" className="text-gray-500 hover:text-white transition-colors">
            {t.nav.home}
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="flex items-center space-x-2">
              <span className="text-gray-600">/</span>
              {isLast ? (
                <span className="text-blue-400 font-medium">{pathMap[to] || value}</span>
              ) : (
                <Link to={to} className="text-gray-500 hover:text-white transition-colors">
                  {pathMap[to] || value}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
