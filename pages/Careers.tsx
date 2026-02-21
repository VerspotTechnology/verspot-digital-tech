import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Starfield from '../components/Starfield';

const Careers: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  
  const categories = t.careers.categories || ['All', 'Technical', 'Content & Design', 'Operations & Product', 'Talent'];

  useEffect(() => {
    if (categories.length > 0) {
      setSelectedCategory(categories[0]);
    }
  }, [language]);
  
  const jobs = t.careers.jobs || [];

  const filteredJobs = selectedCategory === categories[0] 
    ? jobs 
    : jobs.filter(job => job.category === selectedCategory);

  return (
    <div className="relative pt-40 pb-32 min-h-screen bg-black">
      <Starfield />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">{t.nav.careers}</h1>
            <p className="text-xl text-gray-500 font-light">
              {t.careers.quote}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === c ? 'bg-white text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <div key={job.id} className="bg-glass rounded-3xl p-8 md:p-12 hover:bg-white/5 transition-all group">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                  <div>
                    <span className="text-blue-500 text-xs font-bold uppercase tracking-widest block mb-2">{job.category}</span>
                    <h3 className="text-2xl md:text-3xl font-bold">{job.title}</h3>
                  </div>
                  <div className="text-gray-500 text-sm flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    {job.location}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-white font-semibold mb-4 text-sm">{t.careers.jobDetails.description}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{job.description}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-4 text-sm">{t.careers.jobDetails.requirements}</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1">▹</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-12 flex justify-between items-center border-t border-white/5 pt-8">
                  <p className="text-xs text-gray-500">{t.careers.jobDetails.emailLabel} <span className="text-white">official@verspot.cn</span></p>
                  <a href="mailto:official@verspot.cn" className="px-8 py-3 bg-white text-black text-xs font-bold rounded-full group-hover:scale-105 transition-transform">
                    {t.careers.jobDetails.apply}
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10 text-gray-500">
              {t.careers.jobDetails.noPositions}
            </div>
          )}
        </div>

        <div className="mt-32 text-center p-12 bg-gradient-to-br from-blue-900/20 to-black rounded-3xl border border-white/10">
          <h2 className="text-2xl font-bold mb-6">{t.careers.noMatch.title}</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
            {t.careers.noMatch.description}
          </p>
          <a href="mailto:official@verspot.cn" className="text-white font-bold border-b border-white hover:text-blue-400 transition-colors">
            {t.careers.noMatch.apply}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Careers;
