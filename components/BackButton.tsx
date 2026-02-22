import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <button
      onClick={handleBack}
      className="fixed top-20 right-6 z-40 flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all"
      aria-label="Go back"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      <span className="text-sm">返回</span>
    </button>
  );
};

export default BackButton;
